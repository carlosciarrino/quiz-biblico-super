import { Clock, Trophy, Target, Calendar } from 'lucide-react';
import { QuizHistoryEntry } from '../types/achievement';
import { Language } from '../types/quiz';

interface QuizHistoryProps {
  history: QuizHistoryEntry[];
  language: Language;
}

const QuizHistory = ({ history, language }: QuizHistoryProps) => {
  const labels = {
    it: {
      title: 'Storico dei Quiz Effettuati',
      noHistory: 'Nessun quiz completato ancora',
      score: 'Punteggio',
      correct: 'Corrette',
      date: 'Data',
      recent: 'Ultimi 10 quiz'
    },
    en: {
      title: 'Quiz History',
      noHistory: 'No quizzes completed yet',
      score: 'Score',
      correct: 'Correct',
      date: 'Date',
      recent: 'Last 10 quizzes'
    },
    es: {
      title: 'Historial de Quizzes',
      noHistory: 'Aún no hay quizzes completados',
      score: 'Puntuación',
      correct: 'Correctas',
      date: 'Fecha',
      recent: 'Últimos 10 quizzes'
    },
    pt: {
      title: 'Histórico de Quizzes',
      noHistory: 'Nenhum quiz completado ainda',
      score: 'Pontuação',
      correct: 'Corretas',
      date: 'Data',
      recent: 'Últimos 10 quizzes'
    },
    fr: {
      title: 'Historique des Quiz',
      noHistory: 'Aucun quiz terminé pour le moment',
      score: 'Score',
      correct: 'Correctes',
      date: 'Date',
      recent: '10 derniers quiz'
    }
  };

  const t = labels[language];
  const recentHistory = [...history].reverse().slice(0, 10);

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(language === 'it' ? 'it-IT' : 
                                            language === 'es' ? 'es-ES' :
                                            language === 'pt' ? 'pt-PT' :
                                            language === 'fr' ? 'fr-FR' : 'en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-lg)]">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Clock className="w-6 h-6 text-primary" />
        {t.title}
      </h3>

      {recentHistory.length === 0 ? (
        <p className="text-muted-foreground text-center py-8">{t.noHistory}</p>
      ) : (
        <>
          <p className="text-sm text-muted-foreground mb-4">{t.recent}</p>
          <div className="space-y-3">
            {recentHistory.map((entry) => (
              <div
                key={entry.id}
                className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2">
                      {entry.blockName}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(entry.completedAt)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="text-center bg-primary/10 rounded-lg px-3 py-2 min-w-[70px]">
                      <Trophy className="w-4 h-4 text-primary mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">{entry.score}</div>
                      <div className="text-xs text-muted-foreground">{t.score}</div>
                    </div>
                    
                    <div className="text-center bg-success/10 rounded-lg px-3 py-2 min-w-[70px]">
                      <Target className="w-4 h-4 text-success mx-auto mb-1" />
                      <div className="text-lg font-bold text-foreground">{entry.percentage}%</div>
                      <div className="text-xs text-muted-foreground">{entry.correctAnswers}/{entry.totalQuestions}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizHistory;