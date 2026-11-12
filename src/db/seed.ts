import { db } from './db';
import { a1Lessons } from '@/data/a1Lessons';
import { a1Lessons2 } from '@/data/a1Lessons2';
import { a1Lessons3 } from '@/data/a1Lessons3';
import { a1Flashcards } from '@/data/a1Flashcards';
import { a1Flashcards2 } from '@/data/a1Flashcards2';
import { a1Flashcards3 } from '@/data/a1Flashcards3';

/**
 * Content versioning: when CONTENT_VERSION increases, bundled content
 * (lessons + flashcards) is replaced and lesson progress is reset,
 * because progress refers to the old content. User profiles are kept.
 */
export const CONTENT_VERSION = 4;
const VERSION_KEY = 'zabanyar-content-version';

function storedVersion(): number {
  try {
    return Number(localStorage.getItem(VERSION_KEY) ?? '0') || 0;
  } catch {
    return 0;
  }
}

/**
 * Seed the database with the bundled content pack for the given user.
 */
export async function seedDatabase(userId: string): Promise<void> {
  const lessonCount = await db.lessons.count();
  if (storedVersion() >= CONTENT_VERSION && lessonCount > 0) return;

  await db.transaction('rw', db.lessons, db.flashcards, db.userProgress, async () => {
    await db.lessons.clear();
    await db.flashcards.clear();
    await db.userProgress.clear();

    await db.lessons.bulkAdd([...a1Lessons, ...a1Lessons2, ...a1Lessons3]);

    const flashcards = [...a1Flashcards, ...a1Flashcards2, ...a1Flashcards3].map((fc) => ({
      ...fc,
      id: crypto.randomUUID(),
      userId,
    }));
    await db.flashcards.bulkAdd(flashcards);
  });

  try {
    localStorage.setItem(VERSION_KEY, String(CONTENT_VERSION));
  } catch {
    // storage unavailable; seeding will simply re-run next launch
  }
}
