import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import { MODULE_FA } from '@/utils/labels';
import SpeakButton from './SpeakButton';

function LessonPage() {
  const { id } = useParams<{ id: string }>();
  const currentUser = useAppStore((s) => s.currentUser);
  const userId = currentUser?.id ?? 'guest';
  const startedAt = useRef(Date.now());
  const [saving, setSaving] = useState(false);

  const lesson = useLiveQuery(() => (id ? db.lessons.get(id) : undefined), [id]);
  const allLessons = useLiveQuery(() => db.lessons.orderBy('order').toArray());
  const progress = useLiveQuery(
    () =>
      id ? db.userProgress.get([userId, id]) : undefined,
    [userId, id]
  );

  const nextLesson =
    lesson && allLessons
      ? allLessons.find((l) => l.order > lesson.order)
      : undefined;

  const handleComplete = async () => {
    if (!lesson || saving) return;
    setSaving(true);
    try {
      const seconds = Math.max(
        1,
        Math.round((Date.now() - startedAt.current) / 1000)
      );
      await db.userProgress.put({
        userId,
        lessonId: lesson.id,
        status: 'completed',
        score: 100,
        timeSpentSeconds: (progress?.timeSpentSeconds ?? 0) + seconds,
        attempts: (progress?.attempts ?? 0) + 1,
        completedAt: new Date().toISOString(),
        strength: 1,
      });
    } finally {
      setSaving(false);
    }
  };

  if (lesson === undefined) {
    return (
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <p className="text-gray-500">در حال بارگذاری…</p>
      </div>
    );
  }

  const completed = progress?.status === 'completed';

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <Link to="/lessons" className="text-blue-600 hover:underline text-sm">
          بازگشت به فهرست درس‌ها ←
        </Link>
        <span className="text-sm text-gray-500">
          {MODULE_FA[lesson.module]} • سطح {lesson.cefrLevel} •{' '}
          {lesson.estimatedMinutes} دقیقه
        </span>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-blue-700">{lesson.title}</h1>

      {completed && (
        <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4 text-sm font-bold">
          ✅ این درس را تکمیل کرده‌ای
        </div>
      )}

      <div className="bg-white p-5 rounded-lg shadow mb-4">
        <h2 className="font-bold mb-3">آموزش</h2>
        <div
          className="leading-8"
          dangerouslySetInnerHTML={{ __html: lesson.content.theory }}
        />
      </div>

      {lesson.content.examples.length > 0 && (
        <div className="bg-white p-5 rounded-lg shadow mb-4">
          <h2 className="font-bold mb-3">مثال‌ها</h2>
          <ul className="flex flex-col gap-2">
            {lesson.content.examples.map((ex, i) => (
              <li
                key={i}
                dir="ltr"
                className="flex items-center gap-2 text-left bg-gray-50 rounded px-3 py-2"
              >
                <span className="flex-1">{ex}</span>
                <SpeakButton text={ex} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {lesson.content.tips.length > 0 && (
        <div className="bg-blue-50 p-5 rounded-lg mb-4">
          <h2 className="font-bold mb-3">نکته‌ها</h2>
          <ul className="list-disc pr-5 flex flex-col gap-1 text-sm leading-7">
            {lesson.content.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-center gap-3 mt-6">
        {completed ? (
          <span className="bg-green-600 text-white px-4 py-2 rounded">
            ✅ تکمیل شد
          </span>
        ) : (
          <button
            onClick={handleComplete}
            disabled={saving}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {saving ? 'در حال ثبت…' : 'تکمیل درس ✓'}
          </button>
        )}
        {nextLesson && (
          <Link
            to={`/lessons/${nextLesson.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            درس بعدی: {nextLesson.title}
          </Link>
        )}
      </div>
    </div>
  );
}

export default LessonPage;
