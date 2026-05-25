export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  section: 'Sentence Errors' | 'Grammar Rules' | 'Poetry';
}

export type QuizMode = 'standard' | 'batched';
export type QuizCategory = 'all' | 'grammar' | 'poetry';

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  history: {
    questionId: number;
    userAnswer: string;
    isCorrect: boolean;
  }[];
  isReviewMode: boolean;
  round: number;
  mode: QuizMode;
  category: QuizCategory;
  currentBatchIndex: number;
  totalBatches: number;
  batchAttempts: number[];
}
