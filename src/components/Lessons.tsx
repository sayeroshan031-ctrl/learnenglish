import { Link } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import { MODULE_FA } from '@/utils/labels';
import type { LessonStatus } from '@/types';

const STATUS_FA: Record<LessonStatus, string> = {
  locked: '🔒 قفل',
  available: 'شروع نشده',
  'in-progress': '⏳ در حال انجام',
  completed: '✅ تکمیل شده',
};

function Lessons() {
  const currentUser = useAppStore((s) => s.currentUser);
  const userId = currentUser?.id ?? 'guest';

  const lessons = useLiveQuery(() => db.lessons.orderBy('order').toArray());
  const progress = useLiveQuery(
    () => db.userProgress.where('userId').equals(userId).toArray(),
    [userId]
  );

  const statusByLesson = new Map(
    (progress ?? []).map((p) => [p.lessonId, p.status])
  );
  const doneCount = (progress ?? []).filter(
    (p) => p.status === 'completed'
  ).length;

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-blue-700">📚 درس‌ها</h1>
        <Link to="/" className="text-blue-600 hover:underline text-sm">
          بازگشت به داشبورد ←
        </Link>
      </div>

      {lessons === undefined ? (
        <p className="text-gray-500">در حال بارگذاری…</p>
      ) : lessons.length === 0 ? (
        <p className="text-gray-500">هنوز درسی بارگذاری نشده است.</p>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            {lessons.length} درس — {doneCount} درس تکمیل شده
          </p>
          <div className="flex flex-col gap-3">
            {lessons.map((lesson) => {
              const status = statusByLesson.get(lesson.id) ?? 'available';
              return (
                <Link
                  key={lesson.id}
                  to={`/lessons/${lesson.id}`}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex items-center justify-between"
                >
                  <div>
                    <h2 className="font-bold text-lg">{lesson.title}</h2>
                    <p className="text-sm text-gray-500">
                      {MODULE_FA[lesson.module]} • سطح {lesson.cefrLevel} •{' '}
                      {lesson.estimatedMinutes} دقیقه
                    </p>
                  </div>
                  <span
                    className={
                      status === 'completed'
                        ? 'text-green-600 text-sm font-bold'
                        : 'text-gray-400 text-sm'
                    }
                  >
                    {STATUS_FA[status]}
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Lessons;
