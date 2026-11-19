import { useMemo, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import {
  activityInRange,
  medalFor,
  motivationOfWeek,
  weekStart,
} from '@/utils/activity';
import {
  enableReminders,
  getSettings,
  notificationsSupported,
  permissionState,
  saveSettings,
  scheduleAll,
} from '@/utils/notifications';

const SEEN_KEY = 'zabanyar-friday-seen';
const DAY_MS = 24 * 3600 * 1000;

function lastFriday(from: Date): Date {
  const d = new Date(from);
  d.setHours(0, 0, 0, 0);
  const diff = (d.getDay() - 5 + 7) % 7; // days since Friday (Fri=5)
  d.setDate(d.getDate() - diff);
  return d;
}

export default function Reminders() {
  const currentUser = useAppStore((s) => s.currentUser);
  const userId = currentUser?.id ?? 'guest';

  const lessons = useLiveQuery(() => db.lessons.toArray());
  const progress = useLiveQuery(
    () => db.userProgress.where('userId').equals(userId).toArray(),
    [userId]
  );

  const [settings, setSettingsState] = useState(getSettings());
  const [perm, setPerm] = useState(permissionState());
  const [seenTick, setSeenTick] = useState(0);

  const report = useMemo(() => {
    const now = new Date();
    const friday = lastFriday(now);
    const daysSinceFriday = Math.floor(
      (new Date(now).setHours(0, 0, 0, 0) - friday.getTime()) / DAY_MS
    );
    const wStart = weekStart(friday);
    const wEnd = new Date(wStart.getTime() + 7 * DAY_MS);
    const pStart = new Date(wStart.getTime() - 7 * DAY_MS);

    const completed = (progress ?? []).filter((p) => p.status === 'completed');
    const inRange = (r: { completedAt?: string }, a: Date, b: Date) => {
      if (!r.completedAt) return false;
      const t = new Date(r.completedAt);
      return t >= a && t < b;
    };
    const lessonsThis = completed.filter((r) => inRange(r, wStart, wEnd)).length;
    const lessonsPrev = completed.filter((r) => inRange(r, pStart, wStart)).length;
    const act = activityInRange(wStart, wEnd);
    const medal = medalFor(lessonsThis, act.quizzes, act.cards);

    let growthText: string;
    if (lessonsPrev > 0) {
      const pct = Math.round(((lessonsThis - lessonsPrev) / lessonsPrev) * 100);
      growthText = pct >= 0 ? `▲ ${pct}٪ نسبت به هفتهٔ قبل` : `▼ ${Math.abs(pct)}٪ نسبت به هفتهٔ قبل`;
    } else if (lessonsThis > 0) {
      growthText = '🌱 شروع تازه؛ هفتهٔ قبل درسی کامل نشده بود';
    } else {
      growthText = 'هنوز درسی این هفته کامل نشده است';
    }

    const totalLessons = lessons?.length ?? 0;
    const overallPct = totalLessons
      ? Math.round((completed.length / totalLessons) * 100)
      : 0;

    const wk = wStart.toISOString().slice(0, 10);
    let seen = false;
    try {
      seen = localStorage.getItem(SEEN_KEY) === wk;
    } catch {
      /* ignore */
    }

    return {
      show: daysSinceFriday <= 2 && !seen,
      wk,
      lessonsThis,
      quizzes: act.quizzes,
      cards: act.cards,
      activeDays: act.activeDays,
      medal,
      growthText,
      overallPct,
      totalCompleted: completed.length,
      totalLessons,
      motivation: motivationOfWeek(friday),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, lessons, seenTick]);

  const dismissReport = () => {
    try {
      localStorage.setItem(SEEN_KEY, report.wk);
    } catch {
      /* ignore */
    }
    setSeenTick((v) => v + 1);
  };

  const handleEnable = async () => {
    const res = await enableReminders();
    setPerm(permissionState());
    setSettingsState(getSettings());
    if (res === 'granted') {
      alert('یادآوری‌ها فعال شد! 🔔 هر روز سر ساعت انتخابی و هر جمعه ساعت ۱۸ گزارش هفته می‌آید.');
    } else if (res === 'denied') {
      alert('اجازهٔ اعلان داده نشد. از تنظیمات مرورگر می‌توانی اجازه بدهی.');
    } else {
      alert('این مرورگر از اعلان پشتیبانی نمی‌کند.');
    }
  };

  const handleTime = async (time: string) => {
    const next = { ...settings, time };
    setSettingsState(next);
    saveSettings(next);
    await scheduleAll();
  };

  const handleDisable = () => {
    const next = { ...settings, enabled: false };
    setSettingsState(next);
    saveSettings(next);
  };

  return (
    <div className="mb-6 space-y-4">
      {report.show && (
        <div className="bg-gradient-to-l from-amber-50 to-yellow-100 border border-amber-300 p-5 rounded-lg shadow">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-bold text-lg text-amber-800">📊 گزارش جمعهٔ تو</h3>
            <button
              onClick={dismissReport}
              className="text-amber-700 hover:text-amber-900 text-sm"
              aria-label="بستن گزارش"
            >
              ✖
            </button>
          </div>
          <p className="mt-2 text-3xl">
            {report.medal.emoji}{' '}
            <span className="text-xl font-bold">{report.medal.name}</span>{' '}
            <span className="text-sm text-gray-600">({report.medal.points} امتیاز هفته)</span>
          </p>
          <ul className="mt-3 space-y-1 text-gray-800">
            <li>📚 درس کامل‌شدهٔ این هفته: <b>{report.lessonsThis}</b> — {report.growthText}</li>
            <li>📝 آزمون‌های این هفته: <b>{report.quizzes}</b> | 🃏 کارت مرورشده: <b>{report.cards}</b> | 📅 روزهای فعال: <b>{report.activeDays}</b></li>
            <li>🎯 پیشرفت کلی دوره: <b>{report.overallPct}٪</b> ({report.totalCompleted} از {report.totalLessons} درس)</li>
          </ul>
          <p className="mt-3 italic text-amber-900">«{report.motivation}»</p>
        </div>
      )}

      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-700 font-bold mb-2">🔔 یادآوری مطالعه و گزارش جمعه</h3>
        {!notificationsSupported() ? (
          <p className="text-sm text-gray-500">
            این مرورگر از اعلان پشتیبانی نمی‌کند؛ گزارش جمعه همین‌جا روی داشبورد نمایش داده می‌شود.
          </p>
        ) : settings.enabled && perm === 'granted' ? (
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="text-green-700 font-bold">فعال است ✅</span>
            <label className="text-gray-600">
              ساعت یادآوری روزانه:
              <input
                type="time"
                value={settings.time}
                onChange={(e) => handleTime(e.target.value)}
                className="ms-2 border rounded px-2 py-1"
              />
            </label>
            <span className="text-gray-500">+ گزارش جمعه ساعت ۱۸</span>
            <button
              onClick={handleDisable}
              className="text-red-600 hover:underline"
            >
              خاموش کردن
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <p className="text-gray-600">
              هر روز سر ساعت دلخواه یادآوری مطالعه بگیر و هر جمعه مدال، رشد و جملهٔ انگیزشی هفته‌ات را ببین.
            </p>
            <button
              onClick={handleEnable}
              className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 font-bold"
            >
              فعال‌کردن اعلان‌ها
            </button>
            {perm === 'denied' && (
              <span className="text-red-600">اجازهٔ اعلان قبلاً رد شده؛ از تنظیمات مرورگر فعالش کن.</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
