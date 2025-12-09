import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp, Trophy, Target, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { loadUserStats } from '@/utils/achievements';
import { Language } from '@/types/quiz';
import { UserStats } from '@/types/achievement';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const StatsDashboard = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('it');
  const [stats, setStats] = useState<UserStats | null>(null);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang) setLanguage(savedLang);
    
    const userStats = loadUserStats();
    setStats(userStats);
  }, []);

  const labels = {
    it: {
      title: 'Dashboard Statistiche',
      subtitle: 'Analisi dettagliata delle tue prestazioni',
      progressOverTime: 'Progresso nel Tempo',
      categoryPerformance: 'Prestazioni per Categoria',
      achievementProgress: 'Progresso Obiettivi',
      totalQuizzes: 'Quiz Totali',
      accuracy: 'Precisione',
      highestScore: 'Punteggio Massimo',
      currentStreak: 'Serie Attuale',
      score: 'Punteggio',
      date: 'Data',
      category: 'Categoria',
      avgScore: 'Punteggio Medio',
      completed: 'Completati',
      unlocked: 'sbloccati',
      of: 'di',
      back: 'Indietro',
      noData: 'Nessun dato disponibile. Completa alcuni quiz per vedere le statistiche!',
      recentActivity: 'Attività Recente',
      performance: 'Prestazioni'
    },
    en: {
      title: 'Statistics Dashboard',
      subtitle: 'Detailed analysis of your performance',
      progressOverTime: 'Progress Over Time',
      categoryPerformance: 'Performance by Category',
      achievementProgress: 'Achievement Progress',
      totalQuizzes: 'Total Quizzes',
      accuracy: 'Accuracy',
      highestScore: 'Highest Score',
      currentStreak: 'Current Streak',
      score: 'Score',
      date: 'Date',
      category: 'Category',
      avgScore: 'Avg Score',
      completed: 'Completed',
      unlocked: 'unlocked',
      of: 'of',
      back: 'Back',
      noData: 'No data available. Complete some quizzes to see statistics!',
      recentActivity: 'Recent Activity',
      performance: 'Performance'
    },
    es: {
      title: 'Panel de Estadísticas',
      subtitle: 'Análisis detallado de tu rendimiento',
      progressOverTime: 'Progreso en el Tiempo',
      categoryPerformance: 'Rendimiento por Categoría',
      achievementProgress: 'Progreso de Logros',
      totalQuizzes: 'Quizzes Totales',
      accuracy: 'Precisión',
      highestScore: 'Puntuación Máxima',
      currentStreak: 'Racha Actual',
      score: 'Puntuación',
      date: 'Fecha',
      category: 'Categoría',
      avgScore: 'Puntuación Media',
      completed: 'Completados',
      unlocked: 'desbloqueados',
      of: 'de',
      back: 'Volver',
      noData: '¡No hay datos disponibles. Completa algunos quizzes para ver estadísticas!',
      recentActivity: 'Actividad Reciente',
      performance: 'Rendimiento'
    },
    pt: {
      title: 'Painel de Estatísticas',
      subtitle: 'Análise detalhada do seu desempenho',
      progressOverTime: 'Progresso ao Longo do Tempo',
      categoryPerformance: 'Desempenho por Categoria',
      achievementProgress: 'Progresso de Conquistas',
      totalQuizzes: 'Quizzes Totais',
      accuracy: 'Precisão',
      highestScore: 'Pontuação Máxima',
      currentStreak: 'Sequência Atual',
      score: 'Pontuação',
      date: 'Data',
      category: 'Categoria',
      avgScore: 'Pontuação Média',
      completed: 'Completados',
      unlocked: 'desbloqueados',
      of: 'de',
      back: 'Voltar',
      noData: 'Nenhum dado disponível. Complete alguns quizzes para ver estatísticas!',
      recentActivity: 'Atividade Recente',
      performance: 'Desempenho'
    },
    fr: {
      title: 'Tableau de Bord Statistiques',
      subtitle: 'Analyse détaillée de vos performances',
      progressOverTime: 'Progrès dans le Temps',
      categoryPerformance: 'Performance par Catégorie',
      achievementProgress: 'Progrès des Réalisations',
      totalQuizzes: 'Quiz Totaux',
      accuracy: 'Précision',
      highestScore: 'Score Maximum',
      currentStreak: 'Série Actuelle',
      score: 'Score',
      date: 'Date',
      category: 'Catégorie',
      avgScore: 'Score Moyen',
      completed: 'Complétés',
      unlocked: 'débloqués',
      of: 'de',
      back: 'Retour',
      noData: 'Aucune donnée disponible. Complétez quelques quiz pour voir les statistiques!',
      recentActivity: 'Activité Récente',
      performance: 'Performance'
    }
  };

  const t = labels[language];

  if (!stats || stats.totalQuizzes === 0) {
    return (
      <div className="min-h-screen bg-background p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.back}
          </button>

          <Card>
            <CardHeader>
              <CardTitle>{t.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">{t.noData}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Prepare chart data
  const progressData = stats.quizHistory.slice(-10).map((quiz, index) => ({
    name: `Quiz ${index + 1}`,
    score: quiz.score,
    percentage: quiz.percentage,
    date: new Date(quiz.completedAt).toLocaleDateString()
  }));

  const categoryData = Object.entries(stats.blockProgress).map(([category, data]) => ({
    name: category,
    avgScore: Math.round(data.averageScore),
    completed: data.completed,
    bestScore: data.bestScore
  }));

  const achievementData = [
    { name: t.unlocked, value: stats.achievements.filter(a => a.unlocked).length },
    { name: 'Locked', value: stats.achievements.filter(a => !a.unlocked).length }
  ];

  const COLORS = ['hsl(262 83% 58%)', 'hsl(240 5% 64%)'];

  const accuracy = stats.totalQuestions > 0 
    ? Math.round((stats.totalCorrectAnswers / stats.totalQuestions) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.back}
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t.totalQuizzes}</CardTitle>
              <Target className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalQuizzes}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t.accuracy}</CardTitle>
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{accuracy}%</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t.highestScore}</CardTitle>
              <Trophy className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.highestScore}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{t.currentStreak}</CardTitle>
              <Award className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.currentStreak}</div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Progress Over Time */}
          <Card>
            <CardHeader>
              <CardTitle>{t.progressOverTime}</CardTitle>
              <CardDescription>{t.recentActivity}</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(262 83% 58%)" 
                    strokeWidth={2}
                    name={t.score}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="percentage" 
                    stroke="hsl(38 92% 50%)" 
                    strokeWidth={2}
                    name={t.accuracy}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Performance */}
          <Card>
            <CardHeader>
              <CardTitle>{t.categoryPerformance}</CardTitle>
              <CardDescription>{t.performance}</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="name" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fontSize: 10 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="avgScore" fill="hsl(262 83% 58%)" name={t.avgScore} />
                  <Bar dataKey="completed" fill="hsl(38 92% 50%)" name={t.completed} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Achievement Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{t.achievementProgress}</CardTitle>
              <CardDescription>
                {stats.achievements.filter(a => a.unlocked).length} {t.of} {stats.achievements.length} {t.unlocked}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={achievementData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="hsl(262 83% 58%)"
                    dataKey="value"
                  >
                    {achievementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Achievement Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.achievements.map((achievement) => (
                  <div key={achievement.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{achievement.icon}</span>
                        <div>
                          <p className="font-medium text-sm">{achievement.name}</p>
                          <p className="text-xs text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                      {achievement.unlocked && (
                        <Trophy className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <Progress 
                      value={(achievement.progress / achievement.requirement) * 100}
                      className="h-2"
                    />
                    <p className="text-xs text-muted-foreground text-right">
                      {achievement.progress} / {achievement.requirement}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StatsDashboard;
