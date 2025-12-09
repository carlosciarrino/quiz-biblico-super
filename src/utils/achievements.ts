import { Achievement, UserStats } from '../types/achievement';
import { Language } from '../types/quiz';

const achievementTranslations: Record<Language, Record<string, { name: string; description: string }>> = {
  it: {
    first_quiz: { name: 'Primo Passo', description: 'Completa il tuo primo quiz' },
    score_50: { name: 'Studente', description: 'Raggiungi un punteggio di 50' },
    score_100: { name: 'Esperto', description: 'Raggiungi un punteggio di 100' },
    perfect_quiz: { name: 'Perfezionista', description: 'Completa un quiz senza errori' },
    all_blocks: { name: 'Biblista', description: 'Completa quiz in tutti i blocchi' },
    streak_5: { name: 'Costante', description: 'Rispondi correttamente a 5 domande consecutive' },
    streak_10: { name: 'Inarrestabile', description: 'Rispondi correttamente a 10 domande consecutive' },
    total_100: { name: 'Centurione', description: 'Rispondi correttamente a 100 domande in totale' }
  },
  en: {
    first_quiz: { name: 'First Step', description: 'Complete your first quiz' },
    score_50: { name: 'Student', description: 'Reach a score of 50' },
    score_100: { name: 'Expert', description: 'Reach a score of 100' },
    perfect_quiz: { name: 'Perfectionist', description: 'Complete a quiz with no mistakes' },
    all_blocks: { name: 'Bible Scholar', description: 'Complete quizzes in all blocks' },
    streak_5: { name: 'Consistent', description: 'Answer 5 questions correctly in a row' },
    streak_10: { name: 'Unstoppable', description: 'Answer 10 questions correctly in a row' },
    total_100: { name: 'Centurion', description: 'Answer 100 questions correctly in total' }
  },
  es: {
    first_quiz: { name: 'Primer Paso', description: 'Completa tu primer quiz' },
    score_50: { name: 'Estudiante', description: 'Alcanza una puntuación de 50' },
    score_100: { name: 'Experto', description: 'Alcanza una puntuación de 100' },
    perfect_quiz: { name: 'Perfeccionista', description: 'Completa un quiz sin errores' },
    all_blocks: { name: 'Erudito Bíblico', description: 'Completa quizzes en todos los bloques' },
    streak_5: { name: 'Constante', description: 'Responde 5 preguntas correctamente seguidas' },
    streak_10: { name: 'Imparable', description: 'Responde 10 preguntas correctamente seguidas' },
    total_100: { name: 'Centurión', description: 'Responde 100 preguntas correctamente en total' }
  },
  pt: {
    first_quiz: { name: 'Primeiro Passo', description: 'Complete seu primeiro quiz' },
    score_50: { name: 'Estudante', description: 'Alcance uma pontuação de 50' },
    score_100: { name: 'Especialista', description: 'Alcance uma pontuação de 100' },
    perfect_quiz: { name: 'Perfeccionista', description: 'Complete um quiz sem erros' },
    all_blocks: { name: 'Erudito Bíblico', description: 'Complete quizzes em todos os blocos' },
    streak_5: { name: 'Consistente', description: 'Responda 5 perguntas corretamente seguidas' },
    streak_10: { name: 'Imparável', description: 'Responda 10 perguntas corretamente seguidas' },
    total_100: { name: 'Centurião', description: 'Responda 100 perguntas corretamente no total' }
  },
  fr: {
    first_quiz: { name: 'Premier Pas', description: 'Complétez votre premier quiz' },
    score_50: { name: 'Étudiant', description: 'Atteignez un score de 50' },
    score_100: { name: 'Expert', description: 'Atteignez un score de 100' },
    perfect_quiz: { name: 'Perfectionniste', description: 'Complétez un quiz sans erreur' },
    all_blocks: { name: 'Érudit Biblique', description: 'Complétez des quiz dans tous les blocs' },
    streak_5: { name: 'Cohérent', description: 'Répondez correctement à 5 questions consécutives' },
    streak_10: { name: 'Inarrêtable', description: 'Répondez correctement à 10 questions consécutives' },
    total_100: { name: 'Centurion', description: 'Répondez correctement à 100 questions au total' }
  }
};

export const initializeAchievements = (language: Language): Achievement[] => {
  const trans = achievementTranslations[language];
  
  return [
    { 
      id: 'first_quiz', 
      ...trans.first_quiz,
      icon: '🎯', 
      unlocked: false, 
      requirement: 1, 
      progress: 0 
    },
    { 
      id: 'score_50', 
      ...trans.score_50,
      icon: '📚', 
      unlocked: false, 
      requirement: 50, 
      progress: 0 
    },
    { 
      id: 'score_100', 
      ...trans.score_100,
      icon: '🏆', 
      unlocked: false, 
      requirement: 100, 
      progress: 0 
    },
    { 
      id: 'perfect_quiz', 
      ...trans.perfect_quiz,
      icon: '💎', 
      unlocked: false, 
      requirement: 1, 
      progress: 0 
    },
    { 
      id: 'all_blocks', 
      ...trans.all_blocks,
      icon: '📖', 
      unlocked: false, 
      requirement: 6, 
      progress: 0 
    },
    { 
      id: 'streak_5', 
      ...trans.streak_5,
      icon: '🔥', 
      unlocked: false, 
      requirement: 5, 
      progress: 0 
    },
    { 
      id: 'streak_10', 
      ...trans.streak_10,
      icon: '⚡', 
      unlocked: false, 
      requirement: 10, 
      progress: 0 
    },
    { 
      id: 'total_100', 
      ...trans.total_100,
      icon: '👑', 
      unlocked: false, 
      requirement: 100, 
      progress: 0 
    }
  ];
};

export const checkAchievements = (stats: UserStats, currentScore: number, perfectQuiz: boolean): Achievement[] => {
  const newlyUnlocked: Achievement[] = [];
  
  stats.achievements.forEach(achievement => {
    if (achievement.unlocked) return;

    let shouldUnlock = false;

    switch (achievement.id) {
      case 'first_quiz':
        achievement.progress = stats.totalQuizzes;
        shouldUnlock = stats.totalQuizzes >= 1;
        break;
      case 'score_50':
        achievement.progress = currentScore;
        shouldUnlock = currentScore >= 50;
        break;
      case 'score_100':
        achievement.progress = currentScore;
        shouldUnlock = currentScore >= 100;
        break;
      case 'perfect_quiz':
        achievement.progress = perfectQuiz ? 1 : 0;
        shouldUnlock = perfectQuiz;
        break;
      case 'all_blocks':
        const completedBlocks = Object.keys(stats.blockProgress).filter(
          block => stats.blockProgress[block].completed > 0
        ).length;
        achievement.progress = completedBlocks;
        shouldUnlock = completedBlocks >= 6;
        break;
      case 'streak_5':
        achievement.progress = stats.currentStreak;
        shouldUnlock = stats.currentStreak >= 5;
        break;
      case 'streak_10':
        achievement.progress = stats.currentStreak;
        shouldUnlock = stats.currentStreak >= 10;
        break;
      case 'total_100':
        achievement.progress = stats.totalCorrectAnswers;
        shouldUnlock = stats.totalCorrectAnswers >= 100;
        break;
    }

    if (shouldUnlock) {
      achievement.unlocked = true;
      achievement.unlockedAt = new Date();
      newlyUnlocked.push(achievement);
    }
  });

  return newlyUnlocked;
};

export const loadUserStats = (): UserStats => {
  const saved = localStorage.getItem('bible_quiz_stats');
  if (saved) {
    const parsed = JSON.parse(saved);
    // Convert date strings back to Date objects
    if (parsed.achievements) {
      parsed.achievements = parsed.achievements.map((a: Achievement) => ({
        ...a,
        unlockedAt: a.unlockedAt ? new Date(a.unlockedAt) : undefined
      }));
    }
    if (parsed.quizHistory) {
      parsed.quizHistory = parsed.quizHistory.map((h: any) => ({
        ...h,
        completedAt: new Date(h.completedAt)
      }));
    }
    return parsed;
  }

  return {
    totalQuizzes: 0,
    totalCorrectAnswers: 0,
    totalQuestions: 0,
    highestScore: 0,
    currentStreak: 0,
    longestStreak: 0,
    achievements: initializeAchievements('it'),
    blockProgress: {},
    quizHistory: []
  };
};

export const saveUserStats = (stats: UserStats) => {
  localStorage.setItem('bible_quiz_stats', JSON.stringify(stats));
};