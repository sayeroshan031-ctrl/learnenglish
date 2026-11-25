import { useEffect, useMemo, useRef, useState } from 'react';
import type { Lesson } from '@/types';
import { englishPart, speak, speechSupported } from '@/utils/speak';

/**
 * «مربی پنهان» — the hidden tutor.
 *
 * A scripted Persian conversation generated entirely from the lesson's
 * own data (examples + theory). No AI, no server, no per-lesson script:
 * the teaching instructions live here in the engine, hidden from the
 * learner, who only sees a friendly Persian-speaking tutor that
 * presents each English sentence, plays it aloud, asks for repetition
 * (microphone + SpeechRecognition where available, self-assessment
 * buttons otherwise), gives simple feedback, and explains usage from
 * the lesson's own theory text. Works unchanged for A0 → B1 lessons.
 */

interface TutorItem {
  en: string;
  fa: string;
}

function persianPart(text: string): string {
  const segments = text.split(/\s+—\s+|\s+-\s+/);
  const fa = segments.filter((s) => /[؀-ۿ]/.test(s));
  return fa.join(' — ').trim();
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function usageText(theory: string): string {
  const plain = stripHtml(theory);
  if (!plain) return '';
  // First ~2 sentences are enough for a spoken usage explanation.
  const sentences = plain.split(/(?<=[.!؟。])\s+/).filter(Boolean);
  const picked = sentences.slice(0, 2).join(' ');
  return picked.length > 300 ? picked.slice(0, 300) + '…' : picked;
}

function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

/** Word-overlap score of the learner's repetition vs the target. */
function repetitionScore(heard: string, target: string): number {
  const targetWords = normalizeWords(target);
  if (targetWords.length === 0) return 0;
  const heardSet = new Set(normalizeWords(heard));
  const hits = targetWords.filter((w) => heardSet.has(w)).length;
  return hits / targetWords.length;
}

function speakPersian(text: string): boolean {
  if (!speechSupported()) return false;
  const voices = window.speechSynthesis.getVoices();
  const faVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('fa'));
  if (!faVoice) return false; // no Persian voice on this device; text stays visible
  const u = new SpeechSynthesisUtterance(text);
  u.voice = faVoice;
  u.lang = faVoice.lang;
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
  return true;
}

type Phase = 'intro' | 'practice' | 'usage' | 'done';

const PRAISE = [
  'آفرین! دقیق گفتی 🎉',
  'عالی بود! همین‌طوری ادامه بده 👏',
  'درست گفتی! داری راه می‌افتی 🌟',
];

export default function HiddenTutor({
  lesson,
  onClose,
}: {
  lesson: Lesson;
  onClose: () => void;
}) {
  const items: TutorItem[] = useMemo(() => {
    return lesson.content.examples
      .map((ex) => ({ en: englishPart(ex), fa: persianPart(ex) }))
      .filter((it) => it.en.length > 0)
      .slice(0, 6);
  }, [lesson]);

  const usage = useMemo(() => usageText(lesson.content.theory), [lesson]);

  const [phase, setPhase] = useState<Phase>('intro');
  const [idx, setIdx] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const [doneCount, setDoneCount] = useState(0);
  const recognitionRef = useRef<{ stop: () => void } | null>(null);

  const micSupported =
    typeof window !== 'undefined' &&
    ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);

  const current = items[idx];

  // Play the target sentence whenever a new practice step appears.
  useEffect(() => {
    if (phase === 'practice' && current) {
      const t = setTimeout(() => speak(current.en), 350);
      return () => clearTimeout(t);
    }
  }, [phase, idx, current]);

  useEffect(() => {
    return () => {
      try {
        recognitionRef.current?.stop();
      } catch {
        /* ignore */
      }
      if (speechSupported()) window.speechSynthesis.cancel();
    };
  }, []);

  const startPractice = () => {
    setPhase(items.length > 0 ? 'practice' : 'usage');
    setIdx(0);
    setFeedback(null);
  };

  const next = (wasGood: boolean) => {
    if (wasGood) setDoneCount((c) => c + 1);
    setFeedback(null);
    if (idx + 1 < items.length) {
      setIdx(idx + 1);
    } else {
      setPhase(usage ? 'usage' : 'done');
    }
  };

  const listenAndCheck = () => {
    if (!current || listening) return;
    const Ctor =
      (window as unknown as { SpeechRecognition?: new () => never }).SpeechRecognition ||
      (window as unknown as { webkitSpeechRecognition?: new () => never })
        .webkitSpeechRecognition;
    if (!Ctor) return;
    try {
      const rec = new Ctor() as unknown as {
        lang: string;
        interimResults: boolean;
        maxAlternatives: number;
        start: () => void;
        stop: () => void;
        onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
        onerror: (() => void) | null;
        onend: (() => void) | null;
      };
      rec.lang = 'en-US';
      rec.interimResults = false;
      rec.maxAlternatives = 1;
      recognitionRef.current = rec;
      setListening(true);
      setFeedback('🎤 دارم گوش می‌دم… جمله رو بگو.');
      rec.onresult = (e) => {
        const heard = e.results?.[0]?.[0]?.transcript ?? '';
        const score = repetitionScore(heard, current.en);
        if (score >= 0.6) {
          setFeedback(`${PRAISE[Math.floor(Math.random() * PRAISE.length)]} شنیدم: «${heard}»`);
          setTimeout(() => next(true), 1200);
        } else {
          setFeedback(
            `شنیدم: «${heard}» — یه کم فرق داشت. یه بار دیگه گوش بده و تکرار کن 👇`
          );
        }
      };
      rec.onerror = () => {
        setFeedback('میکروفون جواب نداد؛ از دکمه‌های پایین استفاده کن: «درست گفتم» یا «دوباره».');
      };
      rec.onend = () => setListening(false);
      rec.start();
    } catch {
      setListening(false);
      setFeedback('میکروفون روی این مرورگر فعال نشد؛ با دکمه‌های خودارزیابی ادامه بده.');
    }
  };

  return (
    <div className="bg-gradient-to-l from-teal-50 to-emerald-50 border border-teal-200 p-5 rounded-lg shadow mb-4" dir="rtl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-teal-800">🎓 مربی زبان‌یار</h2>
        <button onClick={onClose} className="text-teal-700 hover:text-teal-900 text-sm" aria-label="بستن مربی">
          ✖ بستن
        </button>
      </div>

      {phase === 'intro' && (
        <div className="space-y-3">
          <p className="bg-white rounded-lg p-3 leading-8">
            سلام! من مربی زبان‌یارم 🌿 امروز درس «{lesson.title}» رو با هم تمرین می‌کنیم.
            من جمله‌های انگلیسی رو برات می‌گم و پخش می‌کنم؛ تو گوش بده و بلند تکرار کن.
            {micSupported
              ? ' میکروفون داری، پس خودم به تکرارت گوش می‌دم و نظر می‌دم.'
              : ' آخر هر جمله خودت بگو درست گفتی یا نه.'}
          </p>
          <button
            onClick={() => {
              speakPersian(`سلام! امروز درس ${lesson.title} را با هم تمرین می‌کنیم.`);
              startPractice();
            }}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 font-bold"
          >
            شروع کنیم ▶
          </button>
        </div>
      )}

      {phase === 'practice' && current && (
        <div className="space-y-3">
          <p className="text-sm text-teal-700">
            جملهٔ {idx + 1} از {items.length}
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <p dir="ltr" className="text-left text-lg font-bold text-gray-800">
              {current.en}
            </p>
            {current.fa && <p className="text-gray-600">{current.fa}</p>}
          </div>
          {feedback && <p className="bg-white/70 rounded-lg p-3 leading-7">{feedback}</p>}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => speak(current.en)}
              className="bg-white border border-teal-300 text-teal-800 px-4 py-2 rounded-lg hover:bg-teal-100"
            >
              🔊 دوباره بشنو
            </button>
            {micSupported && (
              <button
                onClick={listenAndCheck}
                disabled={listening}
                className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 disabled:opacity-50"
              >
                {listening ? '🎤 در حال شنیدن…' : '🎤 تکرار می‌کنم'}
              </button>
            )}
            <button
              onClick={() => next(true)}
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
            >
              ✅ درست گفتم
            </button>
            <button
              onClick={() => speak(current.en)}
              className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100"
            >
              🔁 دوباره تمرین
            </button>
            <button
              onClick={() => next(false)}
              className="text-gray-500 hover:underline px-2 py-2 text-sm"
            >
              رد شو ←
            </button>
          </div>
        </div>
      )}

      {phase === 'usage' && (
        <div className="space-y-3">
          <p className="bg-white rounded-lg p-3 leading-8">
            <b>یه نکتهٔ کاربردی از خود درس:</b>
            <br />
            {usage}
          </p>
          <button
            onClick={() => setPhase('done')}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 font-bold"
          >
            ادامه ▶
          </button>
        </div>
      )}

      {phase === 'done' && (
        <div className="space-y-3">
          <p className="bg-white rounded-lg p-3 leading-8">
            تمرین امروز تموم شد 🎉 {items.length > 0 && <>از {items.length} جمله، {doneCount} تاش رو کامل گفتی.</>}
            {' '}هر روز فقط چند دقیقه با من تمرین کن؛ همین قدم‌های کوچیک تو رو به A1 و بالاتر می‌رسونه.
          </p>
          <button
            onClick={onClose}
            className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 font-bold"
          >
            برگشت به درس
          </button>
        </div>
      )}
    </div>
  );
}
