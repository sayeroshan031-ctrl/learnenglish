import Dexie, { Table } from 'dexie';
import type {
  User,
  Lesson,
  UserProgress,
  Mistake,
  Flashcard,
  WritingCheck,
  SpeakingAttempt,
  ChatHistory,
  Gamification,
} from '@/types';

class ZabanYarDatabase extends Dexie {
  users!: Table<User>;
  lessons!: Table<Lesson>;
  userProgress!: Table<UserProgress>;
  mistakes!: Table<Mistake>;
  flashcards!: Table<Flashcard>;
  writingChecks!: Table<WritingCheck>;
  speakingAttempts!: Table<SpeakingAttempt>;
  chatHistory!: Table<ChatHistory>;
  gamification!: Table<Gamification>;

  constructor() {
    super('ZabanYarDB');
    this.version(1).stores({
      users: 'id, email',
      lessons: 'id, module, cefrLevel, order, *tags',
      userProgress: '[userId+lessonId], userId, lessonId, status',
      mistakes: 'id, userId, lessonId, type, subType, isResolved, weight',
      flashcards: 'id, userId, deck, [userId+deck]',
      writingChecks: 'id, userId, createdAt',
      speakingAttempts: 'id, userId, questionId',
      chatHistory: 'id, userId, scenario',
      gamification: 'userId',
    });
  }
}

export const db = new ZabanYarDatabase();
