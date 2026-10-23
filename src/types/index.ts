// ==============================
//  CEFR Level & Exam Types
// ==============================
export type CEFRLevel = 'A0' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type ExamType = 'IELTS_AC' | 'IELTS_GT' | 'TOEFL' | 'NONE';

export type ModuleType =
  | 'Grammar'
  | 'Vocab'
  | 'Listening'
  | 'Reading'
  | 'Writing'
  | 'Speaking';

export type LessonStatus =
  | 'locked'
  | 'available'
  | 'in-progress'
  | 'completed';

// ==============================
//  User
// ==============================
export interface User {
  id: string;
  name: string;
  email: string;
  currentLevel: CEFRLevel;
  targetExam: ExamType;
  dailyGoalMinutes: number;
  createdAt: string; // ISO date
  lastLogin: string; // ISO date
}

// ==============================
//  Lesson
// ==============================
export interface Lesson {
  id: string;
  module: ModuleType;
  cefrLevel: CEFRLevel;
  title: string;
  order: number;
  content: {
    theory: string;
    examples: string[];
    tips: string[];
  };
  media: {
    audioUrl?: string;
    videoUrl?: string;
    poster?: string;
  };
  estimatedMinutes: number;
  tags: string[];
}

// ==============================
//  User Progress
// ==============================
export interface UserProgress {
  userId: string;
  lessonId: string;
  status: LessonStatus;
  score: number; // 0-100
  timeSpentSeconds: number;
  attempts: number;
  completedAt?: string;
  strength: number; // 0.0 - 1.0
}

// ==============================
//  Mistakes (Adaptive Engine)
// ==============================
export type MistakeType =
  | 'grammar'
  | 'vocab'
  | 'spelling'
  | 'pronunciation'
  | 'listening';

export interface Mistake {
  id: string;
  userId: string;
  lessonId: string;
  type: MistakeType;
  subType: string; // e.g. "present_simple", "word_choice"
  userInput: string;
  correctForm: string;
  context: string;
  frequency: number;
  weight: number;
  firstSeenAt: string;
  lastSeenAt: string;
  isResolved: boolean;
}

// ==============================
//  Flashcards (SM-2 / FSRS)
// ==============================
export interface Flashcard {
  id: string;
  userId: string;
  word: string;
  meaning: string;
  exampleSentence: string;
  pronunciation: string;
  audioBlob?: string;
  deck: string;

  // SM-2 fields
  sm2: {
    easeFactor: number;
    interval: number; // days
    repetition: number;
    nextReviewAt: string;
  };

  // FSRS fields (optional future upgrade)
  fsrs?: {
    due: string;
    stability: number;
    difficulty: number;
    elapsedDays: number;
    scheduledDays: number;
    reps: number;
    lapses: number;
    state: 'New' | 'Learning' | 'Review' | 'Relearning';
  };
}

// ==============================
//  Writing Check
// ==============================
export interface GrammarError {
  offset: number;
  length: number;
  message: string;
  suggestion: string;
  type: string;
}

export interface WritingCheck {
  id: string;
  userId: string;
  prompt: string;
  essayText: string;
  wordCount: number;
  analysis: {
    grammarErrors: GrammarError[];
    vocabScore: number;
    coherenceScore: number;
    estimatedBand: number;
  };
  createdAt: string;
}

// ==============================
//  Speaking Attempt
// ==============================
export interface PronunciationWord {
  word: string;
  userPhonemes: string;
  expectedPhonemes: string;
  confidence: number;
}

export interface SpeakingAttempt {
  id: string;
  userId: string;
  questionId: string;
  audioBlob?: string;
  durationSeconds: number;
  transcriptBySTT: string;
  fluencyScore: number;
  pronunciationMap: PronunciationWord[];
}

// ==============================
//  Chat History (Role-play)
// ==============================
export type ChatScenario =
  | 'restaurant_order'
  | 'job_interview'
  | 'airport_checkin'
  | 'hotel_booking'
  | 'doctor_visit';

export interface ChatMessage {
  role: 'system' | 'assistant' | 'user';
  content: string;
  timestamp: string;
  audioUrl?: string;
}

export interface GrammarFeedback {
  userMessageIndex: number;
  correction: string;
  explanation: string;
}

export interface ChatHistory {
  id: string;
  userId: string;
  scenario: ChatScenario;
  messages: ChatMessage[];
  grammarFeedback: GrammarFeedback[];
}

// ==============================
//  Gamification
// ==============================
export type League =
  | 'Bronze'
  | 'Silver'
  | 'Gold'
  | 'Sapphire'
  | 'Ruby'
  | 'Diamond';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

export interface WeeklyStat {
  weekStart: string;
  xpGained: number;
  lessonsCompleted: number;
}

export interface Gamification {
  userId: string;
  totalXP: number;
  currentStreak: number;
  longestStreak: number;
  league: League;
  badges: Badge[];
  weeklyStats: WeeklyStat[];
}

// ==============================
//  App State (Zustand)
// ==============================
export interface AppState {
  currentUser: User | null;
  isLoading: boolean;
  setCurrentUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}
