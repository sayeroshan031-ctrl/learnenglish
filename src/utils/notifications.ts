import { db } from '@/db/db';
import { studiedOn, weekKey } from './activity';

/**
 * Study reminders + Friday report notifications.
 *
 * Web notifications on a static site are best-effort: we schedule with
 * Notification Triggers (TimestampTrigger) where the browser supports
 * them, and we also check on every app open whether a reminder/report
 * became due while the app was closed (catch-up notification).
 */

export interface ReminderSettings {
  enabled: boolean;
  time: string; // "HH:MM" local
}

const SETTINGS_KEY = 'zabanyar-reminders';
const DAILY_TAG = 'zabanyar-daily';
const FRIDAY_TAG = 'zabanyar-friday';
const DAILY_NOTIFIED_KEY = 'zabanyar-daily-notified';
const FRIDAY_NOTIFIED_KEY = 'zabanyar-friday-notified';
export const FRIDAY_HOUR = 18;

export function getSettings(): ReminderSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      if (typeof s?.time === 'string') return { enabled: !!s.enabled, time: s.time };
    }
  } catch {
    /* ignore */
  }
  return { enabled: false, time: '20:00' };
}

export function saveSettings(s: ReminderSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
  } catch {
    /* ignore */
  }
}

export function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window && 'serviceWorker' in navigator;
}

export function permissionState(): NotificationPermission | 'unsupported' {
  if (!notificationsSupported()) return 'unsupported';
  return Notification.permission;
}

let registration: ServiceWorkerRegistration | null = null;

export async function registerSW(): Promise<ServiceWorkerRegistration | null> {
  if (!notificationsSupported()) return null;
  if (registration) return registration;
  try {
    registration = await navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`);
    return registration;
  } catch {
    return null;
  }
}

async function showNow(title: string, body: string, tag: string): Promise<void> {
  const reg = await registerSW();
  const options: NotificationOptions & { showTrigger?: unknown } = {
    body,
    tag,
    icon: undefined,
    dir: 'rtl',
    lang: 'fa',
  };
  try {
    if (reg) {
      await reg.showNotification(title, options);
      return;
    }
  } catch {
    /* fall through */
  }
  try {
    new Notification(title, options);
  } catch {
    /* ignore */
  }
}

function nextDailyAt(time: string): Date {
  const [h, m] = time.split(':').map((x) => parseInt(x, 10) || 0);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  if (d.getTime() <= Date.now()) d.setDate(d.getDate() + 1);
  return d;
}

function nextFridayAt(): Date {
  const d = new Date();
  d.setHours(FRIDAY_HOUR, 0, 0, 0);
  // JS getDay: Friday = 5
  let add = (5 - d.getDay() + 7) % 7;
  if (add === 0 && d.getTime() <= Date.now()) add = 7;
  d.setDate(d.getDate() + add);
  return d;
}

async function scheduleTriggered(
  reg: ServiceWorkerRegistration,
  title: string,
  body: string,
  tag: string,
  when: Date
): Promise<boolean> {
  try {
    const TT = (window as unknown as { TimestampTrigger?: new (t: number) => unknown }).TimestampTrigger;
    if (!TT) return false;
    const existing = await reg.getNotifications({ tag });
    existing.forEach((n) => n.close());
    await reg.showNotification(title, {
      body,
      tag,
      dir: 'rtl',
      lang: 'fa',
      showTrigger: new TT(when.getTime()),
    } as NotificationOptions);
    return true;
  } catch {
    return false;
  }
}

/** (Re)schedule the daily reminder + next Friday report notification. */
export async function scheduleAll(): Promise<void> {
  const settings = getSettings();
  if (!settings.enabled || permissionState() !== 'granted') return;
  const reg = await registerSW();
  if (!reg) return;
  await scheduleTriggered(
    reg,
    '⏰ وقت زبان‌یار است!',
    'چند دقیقه برای انگلیسی امروزت کنار بگذار؛ قدم‌های کوچک، کوه می‌سازند.',
    DAILY_TAG,
    nextDailyAt(settings.time)
  );
  await scheduleTriggered(
    reg,
    '📊 گزارش جمعهٔ زبان‌یار',
    'گزارش هفته‌ات آماده است: مدال، میزان رشد و جملهٔ انگیزشی این هفته را ببین!',
    FRIDAY_TAG,
    nextFridayAt()
  );
}

async function hasStudiedToday(): Promise<boolean> {
  if (studiedOn(new Date())) return true;
  try {
    const todayPrefix = new Date().toISOString().slice(0, 10);
    const rows = await db.userProgress.where('status').equals('completed').toArray();
    return rows.some((r) => (r.completedAt ?? '').slice(0, 10) === todayPrefix);
  } catch {
    return false;
  }
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Catch-up check on app open: fire anything that became due while closed. */
export async function checkDueOnOpen(): Promise<void> {
  const settings = getSettings();
  if (!settings.enabled || permissionState() !== 'granted') return;

  // Daily reminder catch-up
  try {
    const [h, m] = settings.time.split(':').map((x) => parseInt(x, 10) || 0);
    const due = new Date();
    due.setHours(h, m, 0, 0);
    const already = localStorage.getItem(DAILY_NOTIFIED_KEY) === todayKey();
    if (Date.now() >= due.getTime() && !already && !(await hasStudiedToday())) {
      await showNow(
        '⏰ یادآوری زبان‌یار',
        'امروز هنوز درس نخواندی؛ حتی ده دقیقه هم یعنی یک قدم جلوتر!',
        DAILY_TAG
      );
      localStorage.setItem(DAILY_NOTIFIED_KEY, todayKey());
    }
  } catch {
    /* ignore */
  }

  // Friday report catch-up
  try {
    const now = new Date();
    const isFriday = now.getDay() === 5;
    const pastHour = now.getHours() >= FRIDAY_HOUR;
    const wk = weekKey();
    if (isFriday && pastHour && localStorage.getItem(FRIDAY_NOTIFIED_KEY) !== wk) {
      await showNow(
        '📊 گزارش جمعهٔ زبان‌یار',
        'گزارش هفته‌ات آماده است: مدال، میزان رشد و جملهٔ انگیزشی این هفته را ببین!',
        FRIDAY_TAG
      );
      localStorage.setItem(FRIDAY_NOTIFIED_KEY, wk);
    }
  } catch {
    /* ignore */
  }
}

let initialized = false;

/** Call once on app start. */
export async function initReminders(): Promise<void> {
  if (initialized) return;
  initialized = true;
  await registerSW();
  await scheduleAll();
  await checkDueOnOpen();
}

/** Ask for permission (must be called from a user gesture), then schedule. */
export async function enableReminders(): Promise<NotificationPermission | 'unsupported'> {
  if (!notificationsSupported()) return 'unsupported';
  const perm = await Notification.requestPermission();
  if (perm === 'granted') {
    saveSettings({ ...getSettings(), enabled: true });
    await registerSW();
    await scheduleAll();
  }
  return perm;
}
