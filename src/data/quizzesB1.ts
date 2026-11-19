import type { QuizMap } from './quizzes';
import { quizzesB1a } from './quizzesB1a';
import { quizzesB1b } from './quizzesB1b';

/** All B1 quizzes (lessons 81–120). */
export const quizzesB1: QuizMap = { ...quizzesB1a, ...quizzesB1b };
