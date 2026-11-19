import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { quizzes } from '@/data/quizzes';

function bestKey(lessonId: string) {
  return `zabanyar-quiz-best-${lessonId}`;
}

function readBest(lessonId: string): number | null {
  try {
    const v = localStorage.getItem(bestKey(lessonId));
    return v === null ? null : Number(v);
  } catch {
    return null;
  }
}

function QuizPage() {
  const { id } = useParams<{ id: string }>();
  const lesson = useLiveQuery(() => (id ? db.lessons.get(id) : undefined), [id]);
  const questions = useMemo(() => (id ? quizzes[id] : undefined), [id]);

  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(() => (id ? readBest(id) : null));

  if (lesson === undefined) {
    return (
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <p className="text-gray-500">در حال بارگذاری…</p>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <Link to={`/lessons/${id}`} className="text-blue-600 hover:underline text-sm">
          بازگشت به درس ←
        </Link>
        <div className="bg-white p-5 rounded-lg shadow mt-4">
          <p>برای این درس هنوز آزمونی ساخته نشده است.</p>
        </div>
      </div>
    );
  }

  const total = questions.length;
  const q = questions[idx];
  const isLast = idx === total - 1;

  const choose = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (!isLast) {
      setIdx((v) => v + 1);
      setSelected(null);
      return;
    }
    const finalScore = score;
    if (id && (best === null || finalScore > best)) {
      try {
        localStorage.setItem(bestKey(id), String(finalScore));
      } catch {
        /* ignore */
      }
      setBest(finalScore);
    }
    setFinished(true);
  };

  const restart = () => {
    setIdx(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const message =
      score === total
        ? 'آفرین! همهٔ سؤال‌ها را درست جواب دادی 🎉'
        : score >= Math.ceil(total * 0.6)
          ? 'خوب بود! تقریباً مسلطی؛ یک مرور کوتاه اشکال‌ها را هم برطرف می‌کند.'
          : 'اشکالی ندارد؛ درس را یک بار دیگر بخوان و دوباره تلاش کن.';
    return (
      <div className="p-6 max-w-4xl mx-auto" dir="rtl">
        <Link to={`/lessons/${id}`} className="text-blue-600 hover:underline text-sm">
          بازگشت به درس ←
        </Link>
        <div className="bg-white p-6 rounded-lg shadow mt-4 text-center">
          <h1 className="text-2xl font-bold mb-2 text-blue-700">نتیجهٔ آزمون</h1>
          <p className="text-lg mb-1">{lesson.title}</p>
          <p className="text-4xl font-bold my-4">
            {score} از {total}
            <span className="text-base text-gray-500"> ({pct}٪)</span>
          </p>
          <p className="mb-2">{message}</p>
          {best !== null && (
            <p className="text-sm text-gray-500 mb-4">بهترین نمرهٔ تو در این درس: {best} از {total}</p>
          )}
          <div className="flex items-center justify-center gap-3 mt-4">
            <button
              onClick={restart}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              تلاش دوباره
            </button>
            <Link
              to={`/lessons/${id}`}
              className="bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
            >
              بازگشت به درس
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <Link to={`/lessons/${id}`} className="text-blue-600 hover:underline text-sm">
          بازگشت به درس ←
        </Link>
        <span className="text-sm text-gray-500">
          سؤال {idx + 1} از {total}
        </span>
      </div>

      <h1 className="text-2xl font-bold mb-1 text-blue-700">آزمون: {lesson.title}</h1>
      {best !== null && (
        <p className="text-sm text-gray-500 mb-4">بهترین نمرهٔ قبلی: {best} از {total}</p>
      )}

      <div className="w-full bg-gray-200 rounded h-2 mb-5">
        <div
          className="bg-blue-600 h-2 rounded"
          style={{ width: `${((idx + 1) / total) * 100}%` }}
        />
      </div>

      <div className="bg-white p-5 rounded-lg shadow mb-4">
        <p dir="auto" className="font-bold leading-8 mb-4">
          {q.q}
        </p>
        <div className="flex flex-col gap-2">
          {q.options.map((opt, i) => {
            const isAnswer = i === q.answer;
            const isPicked = i === selected;
            let cls = 'bg-gray-50 hover:bg-blue-50 border border-gray-200';
            if (selected !== null) {
              if (isAnswer) cls = 'bg-green-100 border border-green-500 text-green-800';
              else if (isPicked) cls = 'bg-red-100 border border-red-500 text-red-800';
              else cls = 'bg-gray-50 border border-gray-200 opacity-60';
            }
            return (
              <button
                key={i}
                dir="ltr"
                onClick={() => choose(i)}
                disabled={selected !== null}
                className={`text-left rounded px-3 py-2 ${cls}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div
            className={`mt-4 p-3 rounded text-sm leading-7 ${
              selected === q.answer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
            }`}
          >
            <p className="font-bold">{selected === q.answer ? '✅ درست است!' : '❌ نادرست است.'}</p>
            {q.why && (
              <p dir="auto" className="mt-1">
                {q.why}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">نمرهٔ تا اینجا: {score}</span>
        <button
          onClick={next}
          disabled={selected === null}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isLast ? 'پایان آزمون' : 'سؤال بعد ←'}
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
