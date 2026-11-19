import type { QuizMap } from './quizzes';
import { quizzesA1a } from './quizzesA1a';
import { quizzesA1b } from './quizzesA1b';

/** All A1 quizzes (lessons 1–40). */
export const quizzesA1: QuizMap = { ...quizzesA1a, ...quizzesA1b };
