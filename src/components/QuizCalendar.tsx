import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';
import { QuizHistoryEntry } from '@/types/achievement';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface QuizCalendarProps {
  history: QuizHistoryEntry[];
  language: string;
}

const QuizCalendar = ({ history, language }: QuizCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const labels = {
    it: {
      title: 'Calendario Quiz',
      excellent: 'Eccellente (90%+)',
      good: 'Buono (70-89%)',
      average: 'Medio (50-69%)',
      needsWork: 'Da migliorare (<50%)',
      noQuizzes: 'Nessun quiz completato',
    },
    en: {
      title: 'Quiz Calendar',
      excellent: 'Excellent (90%+)',
      good: 'Good (70-89%)',
      average: 'Average (50-69%)',
      needsWork: 'Needs Work (<50%)',
      noQuizzes: 'No quizzes completed',
    },
    es: {
      title: 'Calendario de Quiz',
      excellent: 'Excelente (90%+)',
      good: 'Bueno (70-89%)',
      average: 'Promedio (50-69%)',
      needsWork: 'Necesita Mejorar (<50%)',
      noQuizzes: 'No hay cuestionarios completados',
    },
    pt: {
      title: 'Calendário de Quiz',
      excellent: 'Excelente (90%+)',
      good: 'Bom (70-89%)',
      average: 'Médio (50-69%)',
      needsWork: 'Precisa Melhorar (<50%)',
      noQuizzes: 'Nenhum questionário concluído',
    },
    fr: {
      title: 'Calendrier de Quiz',
      excellent: 'Excellent (90%+)',
      good: 'Bon (70-89%)',
      average: 'Moyen (50-69%)',
      needsWork: 'À Améliorer (<50%)',
      noQuizzes: 'Aucun quiz terminé',
    },
  };

  const t = labels[language as keyof typeof labels] || labels.en;

  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return 'excellent';
    if (percentage >= 70) return 'good';
    if (percentage >= 50) return 'average';
    return 'needsWork';
  };

  const getColorClass = (level: string) => {
    switch (level) {
      case 'excellent': return 'bg-emerald-500';
      case 'good': return 'bg-blue-500';
      case 'average': return 'bg-amber-500';
      case 'needsWork': return 'bg-rose-500';
      default: return 'bg-muted';
    }
  };

  // Group quizzes by date
  const quizzesByDate = history.reduce((acc, quiz) => {
    const date = new Date(quiz.completedAt).toDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(quiz);
    return acc;
  }, {} as Record<string, QuizHistoryEntry[]>);

  const modifiers = {
    quiz: Object.keys(quizzesByDate).map(dateStr => new Date(dateStr)),
  };

  const modifiersClassNames = {
    quiz: 'relative',
  };

  return (
    <Card className="p-6 bg-card shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => {
              const newDate = new Date(currentMonth);
              newDate.setMonth(newDate.getMonth() - 1);
              setCurrentMonth(newDate);
            }}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              const newDate = new Date(currentMonth);
              newDate.setMonth(newDate.getMonth() + 1);
              setCurrentMonth(newDate);
            }}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mb-6">
        <Calendar
          mode="single"
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
          className="rounded-lg border"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-emerald-500" />
          <span className="text-sm text-muted-foreground">{t.excellent}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500" />
          <span className="text-sm text-muted-foreground">{t.good}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-amber-500" />
          <span className="text-sm text-muted-foreground">{t.average}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-rose-500" />
          <span className="text-sm text-muted-foreground">{t.needsWork}</span>
        </div>
      </div>
    </Card>
  );
};

export default QuizCalendar;
