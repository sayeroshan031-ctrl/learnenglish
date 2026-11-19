/**
 * Lightweight activity log (localStorage) for weekly stats:
 * quiz completions and flashcard reviews. Lesson completions are
 * read from db.userProgress (completedAt) instead.
 */

export type ActivityType = 'quiz' | 'cards';

interface ActivityEvent {
  type: ActivityType;
  n: number;
  at: string; // ISO
}

const KEY = 'zabanyar-activity';

function readAll(): ActivityEvent[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function logActivity(type: ActivityType, n = 1): void {
  try {
    const events = readAll();
    events.push({ type, n, at: new Date().toISOString() });
    // keep at most ~4000 events to stay small
    localStorage.setItem(KEY, JSON.stringify(events.slice(-4000)));
  } catch {
    /* ignore */
  }
}

/** Start of the current Iranian week: most recent Saturday 00:00 local. */
export function weekStart(from: Date = new Date()): Date {
  const d = new Date(from);
  d.setHours(0, 0, 0, 0);
  // JS: 0=Sun..6=Sat. Iranian week starts Saturday (6).
  const diff = (d.getDay() + 1) % 7; // days since Saturday
  d.setDate(d.getDate() - diff);
  return d;
}

export function weekKey(from: Date = new Date()): string {
  return weekStart(from).toISOString().slice(0, 10);
}

export interface WeekActivity {
  quizzes: number;
  cards: number;
  activeDays: number;
}

export function activityInRange(start: Date, end: Date): WeekActivity {
  const events = readAll();
  let quizzes = 0;
  let cards = 0;
  const days = new Set<string>();
  for (const e of events) {
    const t = new Date(e.at);
    if (t >= start && t < end) {
      if (e.type === 'quiz') quizzes += e.n;
      if (e.type === 'cards') cards += e.n;
      days.add(e.at.slice(0, 10));
    }
  }
  return { quizzes, cards, activeDays: days.size };
}

/** Did the user study (any logged activity) on the given local day? */
export function studiedOn(day: Date): boolean {
  const key = day.toISOString().slice(0, 10);
  return readAll().some((e) => e.at.slice(0, 10) === key);
}

export interface Medal {
  emoji: string;
  name: string;
  points: number;
}

/** Weekly points: lesson=10, quiz=5, each reviewed card=1 (cap 50). */
export function medalFor(lessons: number, quizzes: number, cards: number): Medal {
  const points = lessons * 10 + quizzes * 5 + Math.min(cards, 50);
  if (points >= 80) return { emoji: '🥇', name: 'مدال طلا', points };
  if (points >= 40) return { emoji: '🥈', name: 'مدال نقره', points };
  if (points >= 15) return { emoji: '🥉', name: 'مدال برنز', points };
  return { emoji: '🌱', name: 'شروع هفته', points };
}

const MOTIVATIONS: string[] = [
  'قدم‌های کوچکِ هر روز، کوه‌های بزرگ می‌سازند.',
  'زبان را زندگی یاد می‌گیرد، نه حافظه؛ امروز فقط ده دقیقه.',
  'اشتباه کردن یعنی در حال یادگیری بودن؛ ادامه بده.',
  'تو از روزی که شروع کردی خیلی جلوتری؛ حیف است حالا بایستی.',
  'روانی از تکرار می‌آید، نه از استعداد.',
  'هر درس تازه، یک درِ تازه به دنیاست.',
  'بهترین زمان شروع دیروز بود؛ دومین زمان، همین امروز است.',
  'کلمه‌های امروز، جمله‌های فردا و اعتمادبه‌نفسِ ماه بعد است.',
  'لازم نیست کامل باشی؛ کافی است حاضر باشی.',
  'یک هفتهٔ دیگر، یک نسخهٔ قوی‌تر از خودت.',
  'مقایسه را رها کن؛ دیروزِ خودت تنها رقیب توست.',
  'گوش بده، تکرار کن، نترس؛ همین سه‌تا معجزه می‌کند.',
  'پیشرفت آرام هم پیشرفت است.',
  'هر بار که برمی‌گردی، از کسی که رها می‌کند جلوتری.',
  'انگلیسی برای تو یک مهارت نیست؛ یک پل است.',
  'امروز سخت است، فردا عادت است، ماه بعد افتخار.',
  'ده کارت امروز، صد کلمهٔ ماه بعد.',
  'سؤال پرسیدن نشانهٔ ضعف نیست؛ نشانهٔ بیداری است.',
  'هدفت را به یاد بیاور؛ خستگی موقت است.',
  'تو برای ماهی بزرگ‌تری ساخته شده‌ای؛ این هم یک قدمش.',
  'نظم، همان انگیزه‌ای است که سرِ قرارش می‌ماند.',
  'هر جمله‌ای که می‌سازی، یک آجر از آینده‌ات است.',
  'کم ولی هر روز؛ این راز همهٔ برنده‌هاست.',
  'لبخند بزن و درس بعدی را باز کن؛ همین.',
];

/** One motivational sentence per week (stable within the week). */
export function motivationOfWeek(from: Date = new Date()): string {
  const start = weekStart(from).getTime();
  const weekIndex = Math.floor(start / (7 * 24 * 3600 * 1000));
  return MOTIVATIONS[Math.abs(weekIndex) % MOTIVATIONS.length];
}
