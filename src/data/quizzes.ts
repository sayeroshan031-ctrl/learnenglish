import { quizzesA1 } from './quizzesA1';
import { quizzesA2 } from './quizzesA2';
import { quizzesB1 } from './quizzesB1';

export interface QuizQuestion {
  q: string;
  options: string[];
  /** index of the correct option */
  answer: number;
  why?: string;
}

export type QuizMap = Record<string, QuizQuestion[]>;

/** Per-lesson quizzes for all A1 (lesson-001..040), A2 (lesson-101..140) and B1 (lesson-201..240) lessons. */
export const quizzes: QuizMap = { ...quizzesA1, ...quizzesA2, ...quizzesB1 };
