import { db } from './db';
import { mockLessons } from '@/data/mockLessons';
import { mockFlashcards } from '@/data/mockFlashcards';

/**
 * Seed the database with initial mock data
 */
export async function seedDatabase(userId: string): Promise<void> {
  const existingLessons = await db.lessons.count();
  if (existingLessons > 0) return; // Already seeded

  await db.transaction('rw', db.lessons, db.flashcards, async () => {
    await db.lessons.bulkAdd(mockLessons);

    const flashcards = mockFlashcards.map((fc) => ({
      ...fc,
      id: crypto.randomUUID(),
      userId,
    }));
    await db.flashcards.bulkAdd(flashcards);
  });
}
