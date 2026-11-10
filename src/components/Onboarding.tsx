import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import type { CEFRLevel, ExamType, User } from '@/types';

const LEVELS: CEFRLevel[] = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1'];

const EXAMS: { value: ExamType; label: string }[] = [
  { value: 'NONE', label: 'فعلاً هیچ‌کدام' },
  { value: 'IELTS_AC', label: 'آیلتس آکادمیک' },
  { value: 'IELTS_GT', label: 'آیلتس جنرال' },
  { value: 'TOEFL', label: 'تافل' },
];

function Onboarding() {
  const navigate = useNavigate();
  const currentUser = useAppStore((s) => s.currentUser);
  const isOnboarded = useAppStore((s) => s.isOnboarded);
  const setCurrentUser = useAppStore((s) => s.setCurrentUser);
  const setOnboarded = useAppStore((s) => s.setOnboarded);

  const [name, setName] = useState(currentUser?.name ?? '');
  const [level, setLevel] = useState<CEFRLevel>(currentUser?.currentLevel ?? 'A1');
  const [exam, setExam] = useState<ExamType>(currentUser?.targetExam ?? 'NONE');
  const [goal, setGoal] = useState<number>(currentUser?.dailyGoalMinutes ?? 15);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (saving) return;
    setSaving(true);
    try {
      const now = new Date().toISOString();
      const user: User = {
        id: 'guest',
        name: name.trim() || 'مهمان',
        email: 'guest@zabanyar.local',
        currentLevel: level,
        targetExam: exam,
        dailyGoalMinutes: goal,
        createdAt: currentUser?.createdAt ?? now,
        lastLogin: now,
      };
      await db.users.put(user);
      setCurrentUser(user);
      setOnboarded(true);
      navigate('/');
    } finally {
      setSaving(false);
    }
  };

  const inputClass =
    'w-full border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400';

  return (
    <div className="p-6 max-w-xl mx-auto" dir="rtl">
      <h1 className="text-3xl font-bold mb-2 text-blue-700">
        {isOnboarded ? '✏️ ویرایش پروفایل' : '🎓 به زبان‌یار خوش آمدی!'}
      </h1>
      <p className="text-gray-500 text-sm mb-6">
        {isOnboarded
          ? 'مشخصاتت را به‌روز کن؛ پیشرفت و فلش‌کارت‌هایت سر جایشان می‌مانند.'
          : 'برای شروع، چند سؤال کوتاه تا برنامه با خودت تنظیم شود. این اطلاعات فقط روی همین دستگاه می‌ماند.'}
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-bold">
          اسمت چیست؟
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثلاً سایه"
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-bold">
          سطح فعلی‌ات؟
          <select
            value={level}
            onChange={(e) => setLevel(e.target.value as CEFRLevel)}
            className={inputClass}
          >
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-bold">
          هدفت کدام آزمون است؟
          <select
            value={exam}
            onChange={(e) => setExam(e.target.value as ExamType)}
            className={inputClass}
          >
            {EXAMS.map((x) => (
              <option key={x.value} value={x.value}>
                {x.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-bold">
          هدف مطالعهٔ روزانه (دقیقه)
          <select
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
            className={inputClass}
          >
            {[10, 15, 20, 30, 45, 60].map((m) => (
              <option key={m} value={m}>
                {m} دقیقه
              </option>
            ))}
          </select>
        </label>

        <button
          type="submit"
          disabled={saving}
          className="bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 font-bold disabled:opacity-50"
        >
          {saving
            ? 'در حال ذخیره…'
            : isOnboarded
              ? 'ذخیرهٔ تغییرات'
              : 'شروع یادگیری 🚀'}
        </button>

        {isOnboarded && (
          <Link to="/" className="text-blue-600 hover:underline text-sm text-center">
            انصراف و بازگشت به داشبورد
          </Link>
        )}
      </form>
    </div>
  );
}

export default Onboarding;
