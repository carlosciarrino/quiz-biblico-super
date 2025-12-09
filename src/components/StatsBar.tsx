import { Trophy, Target } from 'lucide-react';
import { Difficulty, TranslationStrings } from '../types/quiz';

interface StatsBarProps {
  currentQuestion: number;
  totalQuestions: number;
  score: number;
  difficulty: Difficulty;
  translations: TranslationStrings;
}

const StatsBar = ({ currentQuestion, totalQuestions, score, difficulty, translations }: StatsBarProps) => {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const difficultyColors = {
    easy: 'bg-success text-success-foreground',
    medium: 'bg-warning text-warning-foreground',
    hard: 'bg-destructive text-destructive-foreground'
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] mb-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            <div>
              <span className="text-sm text-muted-foreground block">{translations.score}</span>
              <span className="text-2xl font-bold text-foreground">{score}</span>
            </div>
          </div>
          
          <div className="h-12 w-px bg-border" />
          
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            <div>
              <span className="text-sm text-muted-foreground block">{translations.question}</span>
              <span className="text-lg font-semibold text-foreground">
                {currentQuestion + 1} {translations.of} {totalQuestions}
              </span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm text-muted-foreground block mb-1">{translations.difficulty}</span>
          <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {translations[difficulty]}
          </span>
        </div>
      </div>

      <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default StatsBar;
