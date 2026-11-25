import { db } from './db';
import { zeroLessons } from '@/data/zeroLessons';
import { a1Lessons } from '@/data/a1Lessons';
import { a1Lessons2 } from '@/data/a1Lessons2';
import { a1Lessons3 } from '@/data/a1Lessons3';
import { a1Lessons4 } from '@/data/a1Lessons4';
import { a2LessonsA } from '@/data/a2LessonsA';
import { a2LessonsB } from '@/data/a2LessonsB';
import { b1LessonsA } from '@/data/b1LessonsA';
import { b1LessonsB } from '@/data/b1LessonsB';
import { b2LessonsA } from '@/data/b2LessonsA';
import { b2LessonsB } from '@/data/b2LessonsB';
import { zeroFlashcards } from '@/data/zeroFlashcards';
import { a1Flashcards } from '@/data/a1Flashcards';
import { a1Flashcards2 } from '@/data/a1Flashcards2';
import { a1Flashcards3 } from '@/data/a1Flashcards3';
import { a1Flashcards4 } from '@/data/a1Flashcards4';
import { a2FlashcardsA } from '@/data/a2FlashcardsA';
import { a2FlashcardsB } from '@/data/a2FlashcardsB';
import { b1FlashcardsA } from '@/data/b1FlashcardsA';
import { b1FlashcardsB } from '@/data/b1FlashcardsB';
import { b2FlashcardsA } from '@/data/b2FlashcardsA';
import { b2FlashcardsB } from '@/data/b2FlashcardsB';

/**
 * Content versioning: when CONTENT_VERSION increases, bundled content
 * (lessons + flashcards) is replaced and lesson progress is reset,
 * because progress refers to the old content. User profiles are kept.
 */
export const CONTENT_VERSION = 9;
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

    await db.lessons.bulkAdd([...zeroLessons, ...a1Lessons, ...a1Lessons2, ...a1Lessons3, ...a1Lessons4, ...a2LessonsA, ...a2LessonsB, ...b1LessonsA, ...b1LessonsB, ...b2LessonsA, ...b2LessonsB]);

    const flashcards = [...zeroFlashcards, ...a1Flashcards, ...a1Flashcards2, ...a1Flashcards3, ...a1Flashcards4, ...a2FlashcardsA, ...a2FlashcardsB, ...b1FlashcardsA, ...b1FlashcardsB, ...b2FlashcardsA, ...b2FlashcardsB].map((fc) => ({
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
