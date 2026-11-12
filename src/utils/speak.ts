/**
 * Pronunciation via the device's own speech engine (Web Speech API).
 * No audio files, no server, no cost — the browser delegates to the
 * operating system's text-to-speech voices.
 */

export function speechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

function pickEnglishVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis
    .getVoices()
    .filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
  if (voices.length === 0) return null;
  return (
    voices.find((v) => /^en[-_]us$/i.test(v.lang) && /google/i.test(v.name)) ??
    voices.find((v) => /^en[-_]us$/i.test(v.lang)) ??
    voices.find((v) => /^en[-_]gb$/i.test(v.lang)) ??
    voices[0]
  );
}

// Voices load asynchronously in Chrome/Edge; poke the list early so it
// is ready by the time the user taps a speaker button.
if (speechSupported()) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

/**
 * Lesson examples are bilingual strings like
 * "Are you happy? — Yes, I am. — خوشحالی؟ بله."
 * Keep only the English segments so the English voice never tries to
 * read Persian text.
 */
export function englishPart(text: string): string {
  const segments = text.split(/\s+—\s+|\s+-\s+/);
  const english = segments.filter(
    (s) => /[A-Za-z]/.test(s) && !/[؀-ۿ]/.test(s),
  );
  return (english.length > 0 ? english : [text]).join(' ').trim();
}

/** Speak English text aloud. Returns false when speech is unavailable. */
export function speak(text: string): boolean {
  if (!speechSupported()) return false;
  const clean = englishPart(text);
  if (!clean) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'en-US';
  const voice = pickEnglishVoice();
  if (voice) utterance.voice = voice;
  utterance.rate = 0.92; // slightly slower for learners
  synth.speak(utterance);
  return true;
}
