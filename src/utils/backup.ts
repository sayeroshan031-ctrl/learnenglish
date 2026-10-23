import { db } from '@/db/db';

export interface BackupData {
  version: number;
  exportedAt: string;
  tables: {
    users: unknown[];
    lessons: unknown[];
    userProgress: unknown[];
    mistakes: unknown[];
    flashcards: unknown[];
    writingChecks: unknown[];
    speakingAttempts: unknown[];
    chatHistory: unknown[];
    gamification: unknown[];
  };
}

/**
 * Export all IndexedDB data to a JSON file for backup
 */
export async function exportBackup(): Promise<BackupData> {
  const backup: BackupData = {
    version: 1,
    exportedAt: new Date().toISOString(),
    tables: {
      users: await db.users.toArray(),
      lessons: await db.lessons.toArray(),
      userProgress: await db.userProgress.toArray(),
      mistakes: await db.mistakes.toArray(),
      flashcards: await db.flashcards.toArray(),
      writingChecks: await db.writingChecks.toArray(),
      speakingAttempts: await db.speakingAttempts.toArray(),
      chatHistory: await db.chatHistory.toArray(),
      gamification: await db.gamification.toArray(),
    },
  };

  const blob = new Blob([JSON.stringify(backup, null, 2)], {
    type: 'application/json',
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zaban-yar-backup-${backup.exportedAt.slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);

  return backup;
}

/**
 * Import data from a JSON backup file into IndexedDB
 */
export async function importBackup(file: File): Promise<void> {
  const text = await file.text();
  const backup: BackupData = JSON.parse(text);

  if (!backup.tables) {
    throw new Error('Invalid backup file: missing tables');
  }

  await db.transaction(
    'rw',
    [
      db.users,
      db.lessons,
      db.userProgress,
      db.mistakes,
      db.flashcards,
      db.writingChecks,
      db.speakingAttempts,
      db.chatHistory,
      db.gamification,
    ],
    async () => {
      // Clear existing data
      await Promise.all([
        db.users.clear(),
        db.lessons.clear(),
        db.userProgress.clear(),
        db.mistakes.clear(),
        db.flashcards.clear(),
        db.writingChecks.clear(),
        db.speakingAttempts.clear(),
        db.chatHistory.clear(),
        db.gamification.clear(),
      ]);

      // Bulk add imported data
      const ops = [];
      if (backup.tables.users?.length)
        ops.push(db.users.bulkAdd(backup.tables.users as any));
      if (backup.tables.lessons?.length)
        ops.push(db.lessons.bulkAdd(backup.tables.lessons as any));
      if (backup.tables.userProgress?.length)
        ops.push(db.userProgress.bulkAdd(backup.tables.userProgress as any));
      if (backup.tables.mistakes?.length)
        ops.push(db.mistakes.bulkAdd(backup.tables.mistakes as any));
      if (backup.tables.flashcards?.length)
        ops.push(db.flashcards.bulkAdd(backup.tables.flashcards as any));
      if (backup.tables.writingChecks?.length)
        ops.push(db.writingChecks.bulkAdd(backup.tables.writingChecks as any));
      if (backup.tables.speakingAttempts?.length)
        ops.push(db.speakingAttempts.bulkAdd(backup.tables.speakingAttempts as any));
      if (backup.tables.chatHistory?.length)
        ops.push(db.chatHistory.bulkAdd(backup.tables.chatHistory as any));
      if (backup.tables.gamification?.length)
        ops.push(db.gamification.bulkAdd(backup.tables.gamification as any));

      await Promise.all(ops);
    }
  );
}
