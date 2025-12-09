import { useState, useEffect } from 'react';
import { Home, BookOpen, Users, MessageCircle, BarChart3, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import VerseOfDay from '../components/VerseOfDay';
import StatsBar from '../components/StatsBar';
import StatsPanel from '../components/StatsPanel';
import QuizHistory from '../components/QuizHistory';
import QuestionCard from '../components/QuestionCard';
import BlockSelection from '../components/BlockSelection';
import CompletionScreen from '../components/CompletionScreen';
import Notification from '../components/Notification';
import AchievementNotification from '../components/AchievementNotification';
import { translations } from '../data/translations';
import { QuizState, Language, Question } from '../types/quiz';
import { blockMap, generateRandomQuestions, generateMegaQuiz } from '../utils/quizHelpers';
import { Achievement, UserStats, QuizHistoryEntry } from '../types/achievement';
import { loadUserStats, saveUserStats, checkAchievements, initializeAchievements } from '../utils/achievements';

const Index = () => {
  const navigate = useNavigate();
  const [userStats, setUserStats] = useState<UserStats>(() => loadUserStats());
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    difficulty: 'easy',
    consecutiveCorrect: 0,
    consecutiveIncorrect: 0,
    currentBlock: 'Vangeli',
    correctAnswers: 0,
    totalQuestions: 0,
    currentLanguage: 'it',
    blocks: {
      'Vangeli': [],
      'Atti degli Apostoli': [],
      'Lettere di Paolo': [],
      'Antico Testamento': [],
      'Mega Quiz Bibbia': [],
      'Quiz a Sorpresa': []
    }
  });

  const [view, setView] = useState<'home' | 'quiz' | 'completion'>('home');
  const [currentQuizStreak, setCurrentQuizStreak] = useState(0);
  const [notification, setNotification] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'warning' | 'info';
  }>({ show: false, message: '', type: 'info' });

  // Update achievements when language changes
  useEffect(() => {
    setUserStats(prev => ({
      ...prev,
      achievements: prev.achievements.map((a, i) => {
        const newAch = initializeAchievements(quizState.currentLanguage)[i];
        if (!newAch) return a; // Keep existing if no match found
        return { ...a, name: newAch.name, description: newAch.description };
      })
    }));
  }, [quizState.currentLanguage]);

  const t = translations[quizState.currentLanguage];

  const showNotification = (message: string, type: 'success' | 'warning' | 'info') => {
    setNotification({ show: true, message, type });
  };

  const handleLanguageChange = (lang: Language) => {
    setQuizState(prev => ({ ...prev, currentLanguage: lang }));
    const langNames = { it: 'Italiano', en: 'English', es: 'Español', pt: 'Português', fr: 'Français' };
    showNotification(`Language changed to ${langNames[lang]}`, 'info');
  };

  const handleSelectBlock = (blockKey: string) => {
    const blockName = blockMap[blockKey];
    let questions: Question[];

    if (blockName === 'Mega Quiz Bibbia' || blockName === 'Quiz a Sorpresa') {
      questions = generateMegaQuiz();
    } else {
      questions = generateRandomQuestions(blockName, 20);
    }

    setQuizState(prev => ({
      ...prev,
      currentBlock: blockName,
      currentQuestion: 0,
      score: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      consecutiveCorrect: 0,
      consecutiveIncorrect: 0,
      difficulty: 'easy',
      blocks: {
        ...prev.blocks,
        [blockName]: questions
      }
    }));
    setView('quiz');
  };

  const updateDifficulty = (isCorrect: boolean) => {
    setQuizState(prev => {
      let newDifficulty = prev.difficulty;
      let newConsecutiveCorrect = prev.consecutiveCorrect;
      let newConsecutiveIncorrect = prev.consecutiveIncorrect;
      let difficultyMessage = '';

      if (isCorrect) {
        newConsecutiveCorrect++;
        newConsecutiveIncorrect = 0;

        if (newConsecutiveCorrect >= 2 && prev.difficulty !== 'hard') {
          if (prev.difficulty === 'easy') {
            newDifficulty = 'medium';
            difficultyMessage = t.difficultyIncreasedMedium as string;
          } else if (prev.difficulty === 'medium') {
            newDifficulty = 'hard';
            difficultyMessage = t.difficultyIncreasedHard as string;
          }
          newConsecutiveCorrect = 0;
        }
      } else {
        newConsecutiveIncorrect++;
        newConsecutiveCorrect = 0;

        if (newConsecutiveIncorrect >= 2 && prev.difficulty !== 'easy') {
          if (prev.difficulty === 'hard') {
            newDifficulty = 'medium';
            difficultyMessage = t.difficultyDecreasedMedium as string;
          } else if (prev.difficulty === 'medium') {
            newDifficulty = 'easy';
            difficultyMessage = t.difficultyDecreasedEasy as string;
          }
          newConsecutiveIncorrect = 0;
        }
      }

      if (difficultyMessage) {
        setTimeout(() => showNotification(difficultyMessage, 'info'), 500);
      }

      return {
        ...prev,
        difficulty: newDifficulty,
        consecutiveCorrect: newConsecutiveCorrect,
        consecutiveIncorrect: newConsecutiveIncorrect
      };
    });
  };

  const handleAnswer = (selectedIndex: number, isCorrect: boolean) => {
    setQuizState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 5 : prev.score - 1,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      totalQuestions: prev.totalQuestions + 1
    }));

    // Update streak
    if (isCorrect) {
      setCurrentQuizStreak(prev => prev + 1);
      setUserStats(prev => {
        const newStreak = prev.currentStreak + 1;
        return {
          ...prev,
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, prev.longestStreak),
          totalCorrectAnswers: prev.totalCorrectAnswers + 1,
          totalQuestions: prev.totalQuestions + 1
        };
      });
    } else {
      setCurrentQuizStreak(0);
      setUserStats(prev => ({
        ...prev,
        currentStreak: 0,
        totalQuestions: prev.totalQuestions + 1
      }));
    }

    showNotification(
      isCorrect ? (t.correct as string) : (t.incorrect as string),
      isCorrect ? 'success' : 'warning'
    );

    updateDifficulty(isCorrect);
  };

  const handleNextQuestion = () => {
    const currentQuestions = quizState.blocks[quizState.currentBlock];

    if (quizState.currentQuestion < currentQuestions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      // Quiz completed - update stats
      const perfectQuiz = quizState.correctAnswers === quizState.totalQuestions;
      const newScore = quizState.score;
      const percentage = Math.round((quizState.correctAnswers / quizState.totalQuestions) * 100);
      
      setUserStats(prev => {
        const historyEntry: QuizHistoryEntry = {
          id: `quiz-${Date.now()}`,
          blockName: quizState.currentBlock,
          score: newScore,
          correctAnswers: quizState.correctAnswers,
          totalQuestions: quizState.totalQuestions,
          completedAt: new Date(),
          percentage
        };

        const newStats = {
          ...prev,
          totalQuizzes: prev.totalQuizzes + 1,
          highestScore: Math.max(prev.highestScore, newScore),
          blockProgress: {
            ...prev.blockProgress,
            [quizState.currentBlock]: {
              completed: (prev.blockProgress[quizState.currentBlock]?.completed || 0) + 1,
              bestScore: Math.max(prev.blockProgress[quizState.currentBlock]?.bestScore || 0, newScore),
              averageScore: prev.blockProgress[quizState.currentBlock]
                ? (prev.blockProgress[quizState.currentBlock].averageScore + newScore) / 2
                : newScore
            }
          },
          quizHistory: [...prev.quizHistory, historyEntry]
        };
        
        // Check for new achievements
        const newlyUnlocked = checkAchievements(newStats, newScore, perfectQuiz);
        if (newlyUnlocked.length > 0) {
          setNewAchievement(newlyUnlocked[0]);
        }
        
        saveUserStats(newStats);
        return newStats;
      });
      
      setView('completion');
    }
  };

  const handleRestart = () => {
    const blockName = quizState.currentBlock;
    let questions: Question[];

    if (blockName === 'Mega Quiz Bibbia' || blockName === 'Quiz a Sorpresa') {
      questions = generateMegaQuiz();
    } else {
      questions = generateRandomQuestions(blockName, 20);
    }

    setQuizState(prev => ({
      ...prev,
      currentQuestion: 0,
      score: 0,
      correctAnswers: 0,
      totalQuestions: 0,
      consecutiveCorrect: 0,
      consecutiveIncorrect: 0,
      difficulty: 'easy',
      blocks: {
        ...prev.blocks,
        [blockName]: questions
      }
    }));
    setCurrentQuizStreak(0);
    setView('quiz');
  };

  const handleHome = () => {
    setView('home');
  };

  const currentQuestions = quizState.blocks[quizState.currentBlock];
  const currentQuestion: Question | undefined = currentQuestions[quizState.currentQuestion];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Header
          currentLanguage={quizState.currentLanguage}
          onLanguageChange={handleLanguageChange}
          translations={t}
        />

        <div className="mt-6">
          {view === 'home' && (
            <>
              <VerseOfDay translations={t} currentLanguage={quizState.currentLanguage} />

              <div className="mt-6 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl p-6 text-center shadow-[var(--shadow-lg)]">
                <h3 className="text-2xl font-bold mb-3">{t.megaQuizTitle}</h3>
                <p className="text-primary-foreground/90">{t.megaQuizDesc}</p>
              </div>

              <div className="mt-8">
                <StatsPanel stats={userStats} language={quizState.currentLanguage} />
              </div>

              <div className="mt-6">
                <QuizHistory history={userStats.quizHistory} language={quizState.currentLanguage} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <a
                  href={
                    quizState.currentLanguage === 'it' ? 'https://www.bible.com/it/bible/90/JHN.1.NR06' :
                    quizState.currentLanguage === 'en' ? 'https://www.bible.com/bible/1/JHN.1.KJV' :
                    quizState.currentLanguage === 'es' ? 'https://www.bible.com/es/bible/128/JHN.1.RVR60' :
                    quizState.currentLanguage === 'pt' ? 'https://www.bible.com/pt/bible/212/JHN.1.ARC' :
                    'https://www.bible.com/fr/bible/93/JHN.1.BDS'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Leggi la Bibbia' :
                   quizState.currentLanguage === 'en' ? 'Read the Bible' :
                   quizState.currentLanguage === 'es' ? 'Lee la Bibbia' :
                   quizState.currentLanguage === 'pt' ? 'Leia a Bíblia' :
                   'Lire la Bible'}
                </a>

                <button
                  onClick={() => navigate('/challenge')}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Users className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Sfida Amici' :
                   quizState.currentLanguage === 'en' ? 'Challenge Friends' :
                   quizState.currentLanguage === 'es' ? 'Desafía Amigos' :
                   quizState.currentLanguage === 'pt' ? 'Desafie Amigos' :
                   'Défier des Amis'}
                </button>

                <button
                  onClick={() => navigate('/study-plan')}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Piano di Studio' :
                   quizState.currentLanguage === 'en' ? 'Study Plan' :
                   quizState.currentLanguage === 'es' ? 'Plan de Estudio' :
                   quizState.currentLanguage === 'pt' ? 'Plano de Estudo' :
                   "Plan d'Étude"}
                </button>

                <button
                  onClick={() => navigate('/notes')}
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Note e Appunti' :
                   quizState.currentLanguage === 'en' ? 'Notes & Reflections' :
                   quizState.currentLanguage === 'es' ? 'Notas y Apuntes' :
                   quizState.currentLanguage === 'pt' ? 'Notas e Apontamentos' :
                   'Notes et Réflexions'}
                </button>

                <button
                  onClick={() => navigate('/recommendations')}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Raccomandazioni Quiz' :
                   quizState.currentLanguage === 'en' ? 'Quiz Recommendations' :
                   quizState.currentLanguage === 'es' ? 'Recomendaciones de Quiz' :
                   quizState.currentLanguage === 'pt' ? 'Recomendações de Quiz' :
                   'Recommandations de Quiz'}
                </button>

                <button
                  onClick={() => navigate('/chatbot')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Assistente Biblico' :
                   quizState.currentLanguage === 'en' ? 'Biblical Assistant' :
                   quizState.currentLanguage === 'es' ? 'Asistente Bíblico' :
                   quizState.currentLanguage === 'pt' ? 'Assistente Bíblico' :
                   'Assistant Biblique'}
                </button>

                <button
                  onClick={() => navigate('/stats')}
                  className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <BarChart3 className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Statistiche' :
                   quizState.currentLanguage === 'en' ? 'Statistics' :
                   quizState.currentLanguage === 'es' ? 'Estadísticas' :
                   quizState.currentLanguage === 'pt' ? 'Estatísticas' :
                   'Statistiques'}
                </button>

                <button
                  onClick={() => navigate('/leaderboard')}
                  className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-semibold py-4 rounded-lg shadow-[var(--shadow-lg)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Trophy className="w-6 h-6" />
                  {quizState.currentLanguage === 'it' ? 'Classifica' :
                   quizState.currentLanguage === 'en' ? 'Leaderboard' :
                   quizState.currentLanguage === 'es' ? 'Clasificación' :
                   quizState.currentLanguage === 'pt' ? 'Classificação' :
                   'Classement'}
                </button>
              </div>

              <div className="mt-8">
                <BlockSelection onSelectBlock={handleSelectBlock} translations={t} />
              </div>
            </>
          )}

          {view === 'quiz' && currentQuestion && (
            <>
              <StatsBar
                currentQuestion={quizState.currentQuestion}
                totalQuestions={currentQuestions.length}
                score={quizState.score}
                difficulty={quizState.difficulty}
                translations={t}
              />

              <QuestionCard
                question={currentQuestion}
                questionNumber={quizState.currentQuestion + 1}
                totalQuestions={currentQuestions.length}
                blockName={quizState.currentBlock}
                onAnswer={handleAnswer}
                onNext={handleNextQuestion}
                translations={t}
                currentLanguage={quizState.currentLanguage}
              />

              <button
                onClick={handleHome}
                className="mt-6 w-full bg-card hover:bg-secondary text-foreground font-semibold py-3 rounded-lg shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                {t.homeBtnText}
              </button>
            </>
          )}

          {view === 'completion' && (
            <>
              <CompletionScreen
                blockName={quizState.currentBlock}
                score={quizState.score}
                correctAnswers={quizState.correctAnswers}
                totalQuestions={quizState.totalQuestions}
                onRestart={handleRestart}
                translations={t}
                language={quizState.currentLanguage}
              />

              <button
                onClick={handleHome}
                className="mt-6 w-full bg-card hover:bg-secondary text-foreground font-semibold py-3 rounded-lg shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                {t.homeBtnText}
              </button>
            </>
          )}
        </div>
      </div>

      <Notification
        message={notification.message}
        type={notification.type}
        show={notification.show}
        onHide={() => setNotification(prev => ({ ...prev, show: false }))}
      />

      <AchievementNotification
        achievement={newAchievement}
        onClose={() => setNewAchievement(null)}
      />
    </div>
  );
};

export default Index;
