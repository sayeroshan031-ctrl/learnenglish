import type { QuizMap } from './quizzes';
import { quizzesB2a } from './quizzesB2a';
import { quizzesB2b } from './quizzesB2b';

/** All B2 quizzes (lessons 121–160). */
export const quizzesB2: QuizMap = { ...quizzesB2a, ...quizzesB2b };
