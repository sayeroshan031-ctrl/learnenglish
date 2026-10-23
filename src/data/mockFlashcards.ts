import type { Flashcard } from '@/types';

export const mockFlashcards: Omit<Flashcard, 'id' | 'userId'>[] = [
  {
    word: 'accommodation',
    meaning: 'محل اقامت',
    exampleSentence: 'The hotel provides luxury accommodation for guests.',
    pronunciation: '/əˌkɒməˈdeɪʃn/',
    deck: 'IELTS_Core',
    sm2: {
      easeFactor: 2.5,
      interval: 0,
      repetition: 0,
      nextReviewAt: new Date().toISOString(),
    },
  },
  {
    word: 'approximately',
    meaning: 'تقریباً',
    exampleSentence: 'The journey took approximately two hours.',
    pronunciation: '/əˈprɒksɪmətli/',
    deck: 'IELTS_Core',
    sm2: {
      easeFactor: 2.5,
      interval: 0,
      repetition: 0,
      nextReviewAt: new Date().toISOString(),
    },
  },
  {
    word: 'consequently',
    meaning: 'در نتیجه',
    exampleSentence: 'He didn\'t study; consequently, he failed the exam.',
    pronunciation: '/ˈkɒnsɪkwəntli/',
    deck: 'IELTS_Core',
    sm2: {
      easeFactor: 2.5,
      interval: 0,
      repetition: 0,
      nextReviewAt: new Date().toISOString(),
    },
  },
];
