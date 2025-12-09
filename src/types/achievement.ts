export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  requirement: number;
  progress: number;
}

export interface QuizHistoryEntry {
  id: string;
  blockName: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  completedAt: Date;
  percentage: number;
}

export interface UserStats {
  totalQuizzes: number;
  totalCorrectAnswers: number;
  totalQuestions: number;
  highestScore: number;
  currentStreak: number;
  longestStreak: number;
  achievements: Achievement[];
  blockProgress: Record<string, {
    completed: number;
    bestScore: number;
    averageScore: number;
  }>;
  quizHistory: QuizHistoryEntry[];
}