import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingDown, Target, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { loadUserStats } from '@/utils/achievements';
import { BlockName, Language } from '@/types/quiz';

const QuizRecommendations = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('it');
  const [recommendations, setRecommendations] = useState<Array<{
    block: BlockName;
    reason: string;
    priority: 'high' | 'medium' | 'low';
    averageScore: number;
    timesCompleted: number;
  }>>([]);

  const labels = {
    it: {
      title: 'Raccomandazioni Quiz',
      subtitle: 'Suggerimenti personalizzati basati sulle tue performance',
      weakAreas: 'Aree da Migliorare',
      noData: 'Completa alcuni quiz per ricevere raccomandazioni personalizzate',
      startQuiz: 'Inizia Quiz',
      highPriority: 'Priorità Alta',
      mediumPriority: 'Priorità Media',
      lowPriority: 'Priorità Bassa',
      avgScore: 'Punteggio Medio',
      completed: 'Completati',
      reasons: {
        lowScore: 'Punteggio medio basso - necessita miglioramento',
        fewAttempts: 'Pochi quiz completati - pratica più spesso',
        recentErrors: 'Errori recenti - ripassa questi argomenti',
        notAttempted: 'Non ancora provato - inizia da qui'
      },
      tips: 'Consigli per Migliorare',
      tip1: 'Concentrati su un argomento alla volta',
      tip2: 'Ripeti i quiz dove hai ottenuto meno del 70%',
      tip3: 'Studia le risposte sbagliate prima di riprovare'
    },
    en: {
      title: 'Quiz Recommendations',
      subtitle: 'Personalized suggestions based on your performance',
      weakAreas: 'Areas to Improve',
      noData: 'Complete some quizzes to receive personalized recommendations',
      startQuiz: 'Start Quiz',
      highPriority: 'High Priority',
      mediumPriority: 'Medium Priority',
      lowPriority: 'Low Priority',
      avgScore: 'Average Score',
      completed: 'Completed',
      reasons: {
        lowScore: 'Low average score - needs improvement',
        fewAttempts: 'Few quizzes completed - practice more often',
        recentErrors: 'Recent errors - review these topics',
        notAttempted: 'Not yet attempted - start here'
      },
      tips: 'Tips to Improve',
      tip1: 'Focus on one topic at a time',
      tip2: 'Retry quizzes where you scored less than 70%',
      tip3: 'Study wrong answers before trying again'
    },
    es: {
      title: 'Recomendaciones de Quiz',
      subtitle: 'Sugerencias personalizadas basadas en tu rendimiento',
      weakAreas: 'Áreas a Mejorar',
      noData: 'Completa algunos quizzes para recibir recomendaciones personalizadas',
      startQuiz: 'Iniciar Quiz',
      highPriority: 'Prioridad Alta',
      mediumPriority: 'Prioridad Media',
      lowPriority: 'Prioridad Baja',
      avgScore: 'Puntuación Media',
      completed: 'Completados',
      reasons: {
        lowScore: 'Puntuación media baja - necesita mejorar',
        fewAttempts: 'Pocos quizzes completados - practica más seguido',
        recentErrors: 'Errores recientes - repasa estos temas',
        notAttempted: 'Aún no intentado - comienza aquí'
      },
      tips: 'Consejos para Mejorar',
      tip1: 'Concéntrate en un tema a la vez',
      tip2: 'Repite los quizzes donde obtuviste menos del 70%',
      tip3: 'Estudia las respuestas incorrectas antes de volver a intentar'
    },
    pt: {
      title: 'Recomendações de Quiz',
      subtitle: 'Sugestões personalizadas baseadas no seu desempenho',
      weakAreas: 'Áreas a Melhorar',
      noData: 'Complete alguns quizzes para receber recomendações personalizadas',
      startQuiz: 'Iniciar Quiz',
      highPriority: 'Prioridade Alta',
      mediumPriority: 'Prioridade Média',
      lowPriority: 'Prioridade Baixa',
      avgScore: 'Pontuação Média',
      completed: 'Completados',
      reasons: {
        lowScore: 'Pontuação média baixa - precisa melhorar',
        fewAttempts: 'Poucos quizzes completados - pratique mais',
        recentErrors: 'Erros recentes - revise estes tópicos',
        notAttempted: 'Ainda não tentado - comece aqui'
      },
      tips: 'Dicas para Melhorar',
      tip1: 'Foque em um tópico de cada vez',
      tip2: 'Repita os quizzes onde pontuou menos de 70%',
      tip3: 'Estude as respostas erradas antes de tentar novamente'
    },
    fr: {
      title: 'Recommandations de Quiz',
      subtitle: 'Suggestions personnalisées basées sur vos performances',
      weakAreas: 'Domaines à Améliorer',
      noData: 'Complétez quelques quiz pour recevoir des recommandations personnalisées',
      startQuiz: 'Démarrer Quiz',
      highPriority: 'Priorité Haute',
      mediumPriority: 'Priorité Moyenne',
      lowPriority: 'Priorité Basse',
      avgScore: 'Score Moyen',
      completed: 'Complétés',
      reasons: {
        lowScore: 'Score moyen faible - nécessite amélioration',
        fewAttempts: 'Peu de quiz complétés - pratiquez plus souvent',
        recentErrors: 'Erreurs récentes - révisez ces sujets',
        notAttempted: 'Pas encore essayé - commencez ici'
      },
      tips: 'Conseils pour Améliorer',
      tip1: 'Concentrez-vous sur un sujet à la fois',
      tip2: 'Refaites les quiz où vous avez obtenu moins de 70%',
      tip3: 'Étudiez les mauvaises réponses avant de réessayer'
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('quizLanguage') as Language;
    if (savedLanguage) setLanguage(savedLanguage);

    const stats = loadUserStats();
    const recs: typeof recommendations = [];

    // Analizza i blocchi
    const blocks: BlockName[] = ['Vangeli', 'Atti degli Apostoli', 'Lettere di Paolo', 'Antico Testamento'];
    
    blocks.forEach(block => {
      const progress = stats.blockProgress[block];
      
      if (!progress || progress.completed === 0) {
        // Non ancora provato
        recs.push({
          block,
          reason: labels[savedLanguage || 'it'].reasons.notAttempted,
          priority: 'low',
          averageScore: 0,
          timesCompleted: 0
        });
      } else if (progress.averageScore < 70) {
        // Punteggio basso - priorità alta
        recs.push({
          block,
          reason: labels[savedLanguage || 'it'].reasons.lowScore,
          priority: 'high',
          averageScore: progress.averageScore,
          timesCompleted: progress.completed
        });
      } else if (progress.completed < 3) {
        // Pochi tentativi
        recs.push({
          block,
          reason: labels[savedLanguage || 'it'].reasons.fewAttempts,
          priority: 'medium',
          averageScore: progress.averageScore,
          timesCompleted: progress.completed
        });
      }
    });

    // Ordina per priorità
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    recs.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    setRecommendations(recs);
  }, []);

  const t = labels[language];

  const getPriorityColor = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 border-destructive/30 text-destructive';
      case 'medium': return 'bg-warning/10 border-warning/30 text-warning';
      case 'low': return 'bg-primary/10 border-primary/30 text-primary';
    }
  };

  const getPriorityLabel = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high': return t.highPriority;
      case 'medium': return t.mediumPriority;
      case 'low': return t.lowPriority;
    }
  };

  const handleStartQuiz = (block: BlockName) => {
    localStorage.setItem('selectedBlock', block);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'it' ? 'Home' : 'Home'}
        </Button>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Lightbulb className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">{t.title}</h1>
          <p className="text-muted-foreground">{t.subtitle}</p>
        </div>

        {recommendations.length === 0 ? (
          <div className="bg-card rounded-xl p-12 text-center shadow-[var(--shadow-lg)]">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">{t.noData}</p>
          </div>
        ) : (
          <>
            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-lg)] mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <TrendingDown className="w-6 h-6 text-primary" />
                {t.weakAreas}
              </h2>
              
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <div
                    key={index}
                    className={`border rounded-lg p-4 ${getPriorityColor(rec.priority)}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-lg">{rec.block}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-background/50">
                            {getPriorityLabel(rec.priority)}
                          </span>
                        </div>
                        <p className="text-sm mb-3 opacity-90">{rec.reason}</p>
                        
                        {rec.timesCompleted > 0 && (
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <Target className="w-4 h-4" />
                              <span>{t.avgScore}: {rec.averageScore}%</span>
                            </div>
                            <div>
                              {t.completed}: {rec.timesCompleted}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <Button
                        onClick={() => handleStartQuiz(rec.block)}
                        className="shrink-0"
                      >
                        {t.startQuiz}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-[var(--shadow-lg)]">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                {t.tips}
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t.tip1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t.tip2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{t.tip3}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizRecommendations;
