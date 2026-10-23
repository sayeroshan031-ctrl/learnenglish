import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '@/db/db';
import { useAppStore } from '@/store/useAppStore';
import { exportBackup, importBackup } from '@/utils/backup';

function Dashboard() {
  const currentUser = useAppStore((s) => s.currentUser);

  const lessons = useLiveQuery(() => db.lessons.toArray());
  const progress = useLiveQuery(
    () =>
      currentUser
        ? db.userProgress.where('userId').equals(currentUser.id).toArray()
        : [],
    [currentUser?.id]
  );

  const handleExport = async () => {
    await exportBackup();
    alert('فایل پشتیبان با موفقیت دانلود شد!');
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      await importBackup(file);
      alert('بازیابی داده‌ها با موفقیت انجام شد!');
    } catch (err) {
      alert('خطا در بازیابی: ' + (err as Error).message);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto" dir="rtl">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        🎓 داشبورد زبان‌یار
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">درس‌های موجود</h3>
          <p className="text-2xl font-bold">{lessons?.length || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">پیشرفت شما</h3>
          <p className="text-2xl font-bold">{progress?.length || 0}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-gray-500 text-sm">سطح فعلی</h3>
          <p className="text-2xl font-bold">
            {currentUser?.currentLevel || '—'}
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-bold mb-3">مدیریت پشتیبان</h2>
        <div className="flex gap-3">
          <button
            onClick={handleExport}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            ⬇️ خروجی گرفتن (Backup)
          </button>
          <label className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
            ⬆️ بازیابی (Restore)
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-blue-800">
          ✅ پایگاه داده IndexedDB راه‌اندازی شده است.
          <br />
          ✅ Zustand Store آماده است.
          <br />
          ✅ سیستم پشتیبان‌یری فعال است.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
