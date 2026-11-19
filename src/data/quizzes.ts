import { quizzesA1 } from './quizzesA1';
import { quizzesA2 } from './quizzesA2';

export interface QuizQuestion {
  q: string;
  options: string[];
  /** index of the correct option */
  answer: number;
  why?: string;
}

export type QuizMap = Record<string, QuizQuestion[]>;

/** Per-lesson quizzes for all A1 (lesson-001..040) and A2 (lesson-101..140) lessons. */
export const quizzes: QuizMap = { ...quizzesA1, ...quizzesA2 };
