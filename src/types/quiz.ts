export type Language = 'it' | 'en' | 'es' | 'pt' | 'fr';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type BlockName = 'Vangeli' | 'Atti degli Apostoli' | 'Lettere di Paolo' | 'Antico Testamento' | 'Mega Quiz Bibbia' | 'Quiz a Sorpresa';

export interface QuestionTranslation {
  question: string;
  options: string[];
}

export interface Question {
  id: number;
  translations: Record<Language, QuestionTranslation>;
  correctAnswer: number;
  difficulty: Difficulty;
  block: BlockName;
  reference?: string;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  difficulty: Difficulty;
  consecutiveCorrect: number;
  consecutiveIncorrect: number;
  currentBlock: BlockName;
  correctAnswers: number;
  totalQuestions: number;
  currentLanguage: Language;
  blocks: Record<BlockName, Question[]>;
}

export interface TranslationStrings {
  title: string;
  subtitle: string;
  selectLanguage: string;
  selectBlock: string;
  startQuiz: string;
  score: string;
  difficulty: string;
  easy: string;
  medium: string;
  hard: string;
  question: string;
  of: string;
  nextQuestion: string;
  correct: string;
  incorrect: string;
  quizComplete: string;
  yourScore: string;
  correctAnswers: string;
  restartQuiz: string;
  homeBtnText: string;
  verseOfDay: string;
  difficultyIncreasedMedium: string;
  difficultyIncreasedHard: string;
  difficultyDecreasedMedium: string;
  difficultyDecreasedEasy: string;
  megaQuizTitle: string;
  megaQuizDesc: string;
  blocks: Record<string, string>;
  encouragementMessages: string[];
}
