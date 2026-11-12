import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import { calculateSM2, getNextReviewDate } from '@/utils/sm2';
import SpeakButton from './SpeakButton';

const GRADES: { label: string; quality: number; className: string }[] = [
  { label: '😖 بلد نیستم', quality: 1, className: 'bg-red-600 hover:bg-red-700' },
  { label: '🤔 سخت', quality: 3, className: 'bg-orange-500 hover:bg-orange-600' },
  { label: '🙂 خوب', quality: 4, className: 'bg-blue-600 hover:bg-blue-700' },
  { label: '😎 آسان', quality: 5, className: 'bg-green-600 hover:bg-green-700' },
];

function Flashcards() {
  const currentUser = useAppStore((s) => s.currentUser);
  const userId = currentUser?.id ?? 'guest';

  const [mode, setMode] = useState<'due' | 'all'>('due');
  const [reviewedIds, setReviewedIds] = useState<string[]>([]);
  const [flipped, setFlipped] = useState(false);
  const [saving, setSaving] = useState(false);

  const cards = useLiveQuery(
    () => db.flashcards.where('userId').equals(userId).toArray(),
    [userId]
  );

  const now = Date.now();
  const all = (cards ?? []).slice().sort((a, b) =>
    a.sm2.nextReviewAt.localeCompare(b.sm2.nextReviewAt)
  );
  const dueCount = all.filter(
    (c) => new Date(c.sm2.nextReviewAt).getTime() <= now
  ).length;

  const pool = all.filter(
    (c) =>
      !reviewedIds.includes(c.id) &&
      (mode === 'all' || new Date(c.sm2.nextReviewAt).getTime() <= now)
  );
  const current = pool[0];
  const sessionTotal = reviewedIds.length + pool.length;
  const nextDueAt = all
    .map((c) => c.sm2.nextReviewAt)
    .filter((d) => new Date(d).getTime() > now)
    .sort()[0];

  const handleGrade = async (quality: number) => {
    if (!current || saving) return;
    setSaving(true);
    try {
      const res = calculateSM2(
        quality,
        current.sm2.repetition,
        current.sm2.easeFactor,
        current.sm2.interval
      );
      await db.flashcards.update(current.id, {
        sm2: {
          easeFactor: res.easeFactor,
          interval: res.interval,
          repetition: res.repetition,
          nextReviewAt: getNextReviewDate(res.interval),
        },
      });
      setReviewedIds((prev) => [...prev, current.id]);
      setFlipped(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">🃏 مرور فلش‌کارت‌ها</h1>
        <Link to="/" className="text-blue-600 hover:underline text-sm">
          بازگشت به داشبورد ←
        </Link>
      </div>

      {cards === undefined ? (
        <p className="text-gray-500">در حال بارگذاری…</p>
      ) : all.length === 0 ? (
        <p className="text-gray-500">هنوز فلش‌کارتی ثبت نشده است.</p>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            مجموع کارت‌ها: {all.length} • نوبت مرور امروز: {dueCount} • این
            جلسه: {reviewedIds.length} از {sessionTotal} مرور شده
          </p>

          {!current ? (
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <p className="text-green-700 font-bold text-lg mb-2">
                🎉 مرور این جلسه تموم شد!
              </p>
              <p className="text-sm text-green-700 mb-4">
                {reviewedIds.length} کارت مرور شد.
                {mode === 'due' && nextDueAt
                  ? ` مرور بعدی: ${new Date(nextDueAt).toLocaleDateString('fa-IR')}`
                  : ''}
              </p>
              {mode === 'due' ? (
                <button
                  onClick={() => {
                    setMode('all');
                    setReviewedIds([]);
                  }}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  مرور دوبارهٔ همهٔ کارت‌ها (تمرینی)
                </button>
              ) : (
                <Link to="/" className="text-blue-600 hover:underline text-sm">
                  بازگشت به داشبورد ←
                </Link>
              )}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-xs text-gray-400 mb-4">
                دسته: {current.deck} • نوبت مرور:{' '}
                {new Date(current.sm2.nextReviewAt).toLocaleDateString('fa-IR')}
              </p>

              <div className="text-center py-6">
                <p dir="ltr" className="text-4xl font-bold mb-2">
                  {current.word}
                </p>
                <p dir="ltr" className="text-gray-500">
                  {current.pronunciation}
                </p>
                <div className="mt-3">
                  <SpeakButton text={current.word} />
                </div>
              </div>

              {!flipped ? (
                <div className="text-center">
                  <button
                    onClick={() => setFlipped(true)}
                    className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
                  >
                    نمایش معنی
                  </button>
                </div>
              ) : (
                <>
                  <div className="border-t pt-4 mt-2 text-center">
                    <p className="text-2xl font-bold mb-3">{current.meaning}</p>
                    <div dir="ltr" className="flex items-center gap-2 text-left text-gray-600 bg-gray-50 rounded px-3 py-2">
                      <span className="flex-1">{current.exampleSentence}</span>
                      <SpeakButton text={current.exampleSentence} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-5 mb-2 text-center">
                    چقدر بلد بودی؟
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {GRADES.map((g) => (
                      <button
                        key={g.quality}
                        onClick={() => handleGrade(g.quality)}
                        disabled={saving}
                        className={`${g.className} text-white px-3 py-2 rounded disabled:opacity-50`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Flashcards;
