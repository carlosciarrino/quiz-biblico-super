import { Trophy, Target, Flame, Star } from 'lucide-react';
import { UserStats } from '../types/achievement';
import { Language } from '../types/quiz';

interface StatsPanelProps {
  stats: UserStats;
  language: Language;
}

const StatsPanel = ({ stats, language }: StatsPanelProps) => {
  const accuracy = stats.totalQuestions > 0 
    ? Math.round((stats.totalCorrectAnswers / stats.totalQuestions) * 100)
    : 0;

  const unlockedCount = stats.achievements.filter(a => a.unlocked).length;

  const labels = {
    it: {
      myStats: 'Le Mie Statistiche',
      totalQuizzes: 'Quiz Completati',
      accuracy: 'Precisione',
      highestScore: 'Punteggio Massimo',
      currentStreak: 'Serie Attuale',
      achievements: 'Achievement',
      unlocked: 'Sbloccati'
    },
    en: {
      myStats: 'My Statistics',
      totalQuizzes: 'Completed Quizzes',
      accuracy: 'Accuracy',
      highestScore: 'Highest Score',
      currentStreak: 'Current Streak',
      achievements: 'Achievements',
      unlocked: 'Unlocked'
    },
    es: {
      myStats: 'Mis Estadísticas',
      totalQuizzes: 'Quizzes Completados',
      accuracy: 'Precisión',
      highestScore: 'Puntuación Máxima',
      currentStreak: 'Racha Actual',
      achievements: 'Logros',
      unlocked: 'Desbloqueados'
    },
    pt: {
      myStats: 'Minhas Estatísticas',
      totalQuizzes: 'Quizzes Completados',
      accuracy: 'Precisão',
      highestScore: 'Pontuação Máxima',
      currentStreak: 'Sequência Atual',
      achievements: 'Conquistas',
      unlocked: 'Desbloqueadas'
    },
    fr: {
      myStats: 'Mes Statistiques',
      totalQuizzes: 'Quiz Terminés',
      accuracy: 'Précision',
      highestScore: 'Score Maximum',
      currentStreak: 'Série Actuelle',
      achievements: 'Succès',
      unlocked: 'Débloqués'
    }
  };

  const t = labels[language];

  return (
    <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-lg)]">
      <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Star className="w-6 h-6 text-primary" />
        {t.myStats}
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 p-4 rounded-lg border-2 border-blue-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-blue-600" />
            <p className="text-sm font-medium text-muted-foreground">{t.totalQuizzes}</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.totalQuizzes}</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 p-4 rounded-lg border-2 border-green-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-green-600" />
            <p className="text-sm font-medium text-muted-foreground">{t.accuracy}</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{accuracy}%</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 p-4 rounded-lg border-2 border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-purple-600" />
            <p className="text-sm font-medium text-muted-foreground">{t.highestScore}</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.highestScore}</p>
        </div>

        <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 p-4 rounded-lg border-2 border-orange-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-600" />
            <p className="text-sm font-medium text-muted-foreground">{t.currentStreak}</p>
          </div>
          <p className="text-2xl font-bold text-foreground">{stats.currentStreak}</p>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          {t.achievements}
        </h4>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {stats.achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`aspect-square rounded-lg flex items-center justify-center text-3xl transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md scale-100'
                  : 'bg-muted opacity-30 grayscale'
              }`}
              title={achievement.unlocked ? achievement.name : '???'}
            >
              {achievement.unlocked ? achievement.icon : '🔒'}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-3 text-center">
          {t.unlocked}: {unlockedCount}/{stats.achievements.length}
        </p>
      </div>
    </div>
  );
};

export default StatsPanel;