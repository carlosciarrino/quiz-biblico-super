import { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ChevronRight, Heart } from 'lucide-react';
import { Question, TranslationStrings, Language } from '../types/quiz';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  blockName: string;
  onAnswer: (selectedIndex: number, isCorrect: boolean) => void;
  onNext: () => void;
  translations: TranslationStrings;
  currentLanguage: Language;
}

const QuestionCard = ({
  question,
  questionNumber,
  totalQuestions,
  blockName,
  onAnswer,
  onNext,
  translations,
  currentLanguage
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [encouragementMsg, setEncouragementMsg] = useState('');

  useEffect(() => {
    // Show encouragement every 5 questions
    if (questionNumber % 5 === 0 && questionNumber > 0) {
      const messages = translations.encouragementMessages;
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setEncouragementMsg(randomMsg);
      setShowEncouragement(true);
      
      const timer = setTimeout(() => {
        setShowEncouragement(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [questionNumber, translations.encouragementMessages]);

  const handleAnswerClick = (index: number) => {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);
    const isCorrect = index === question.correctAnswer;
    onAnswer(index, isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setHasAnswered(false);
    onNext();
  };

  const getButtonClass = (index: number) => {
    if (!hasAnswered) {
      return 'bg-card hover:bg-secondary hover:border-primary border-2 border-border';
    }

    if (index === question.correctAnswer) {
      return 'bg-success/10 border-2 border-success text-success';
    }

    if (index === selectedAnswer) {
      return 'bg-destructive/10 border-2 border-destructive text-destructive';
    }

    return 'bg-card border-2 border-border opacity-50';
  };

  const currentTranslation = question.translations[currentLanguage];

  return (
    <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-lg)] relative">
      {showEncouragement && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-full shadow-[var(--shadow-lg)] animate-in slide-in-from-top-5 duration-500 flex items-center gap-2 z-10">
          <Heart className="w-5 h-5 fill-current" />
          <span className="font-semibold">{encouragementMsg}</span>
        </div>
      )}
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-muted-foreground">{blockName}</span>
          <span className="text-sm font-medium text-primary">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-foreground leading-relaxed">
          {currentTranslation.question}
        </h2>
        
        {question.reference && hasAnswered && (
          <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm font-medium text-primary flex items-center gap-2">
              <span className="text-lg">📖</span>
              <span>{question.reference}</span>
            </p>
          </div>
        )}
      </div>

      <div className="space-y-3 mb-6">
        {currentTranslation.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(index)}
            disabled={hasAnswered}
            className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-300 ${getButtonClass(index)} ${
              !hasAnswered ? 'hover:scale-[1.02] active:scale-[0.98]' : ''
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {hasAnswered && index === question.correctAnswer && (
                <CheckCircle2 className="w-5 h-5 text-success" />
              )}
              {hasAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                <XCircle className="w-5 h-5 text-destructive" />
              )}
            </div>
          </button>
        ))}
      </div>

      {hasAnswered && (
        <button
          onClick={handleNext}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-md"
        >
          {translations.nextQuestion}
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default QuestionCard;
