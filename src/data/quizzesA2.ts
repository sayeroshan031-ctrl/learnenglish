import type { QuizMap } from './quizzes';
import { quizzesA2a } from './quizzesA2a';
import { quizzesA2b } from './quizzesA2b';

/** All A2 quizzes (lessons 41–80). */
export const quizzesA2: QuizMap = { ...quizzesA2a, ...quizzesA2b };
