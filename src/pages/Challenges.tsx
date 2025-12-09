import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Trophy, Star, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import { Language } from '@/types/quiz';
import { translations } from '@/data/translations';

const Challenges = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('it');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const labels = {
    it: {
      title: 'Sfide Settimanali e Mensili',
      weeklyChallenge: 'Sfida Settimanale',
      monthlyChallenge: 'Sfida Mensile',
      currentWeek: 'Settimana Corrente: I Miracoli di Gesù',
      currentMonth: 'Mese Corrente: Conoscenza dell\'Antico Testamento',
      timeLeft: 'Tempo Rimasto',
      participants: 'Partecipanti',
      rewards: 'Premi',
      start: 'Inizia Sfida',
      weeklyDesc: 'Completa 5 quiz sui miracoli di Gesù entro questa settimana',
      monthlyDesc: 'Completa 20 quiz sull\'Antico Testamento questo mese',
      specialBadge: 'Badge Speciale',
      bonusPoints: 'Punti Bonus',
      leaderboard: 'Classifica',
    },
    en: {
      title: 'Weekly & Monthly Challenges',
      weeklyChallenge: 'Weekly Challenge',
      monthlyChallenge: 'Monthly Challenge',
      currentWeek: 'Current Week: Miracles of Jesus',
      currentMonth: 'Current Month: Old Testament Knowledge',
      timeLeft: 'Time Left',
      participants: 'Participants',
      rewards: 'Rewards',
      start: 'Start Challenge',
      weeklyDesc: 'Complete 5 quizzes about Jesus\' miracles this week',
      monthlyDesc: 'Complete 20 quizzes about the Old Testament this month',
      specialBadge: 'Special Badge',
      bonusPoints: 'Bonus Points',
      leaderboard: 'Leaderboard',
    },
  };

  const challengeLabels = labels[language] || labels.en;
  const t = translations[language];

  const weeklyChallenge = {
    title: challengeLabels.currentWeek,
    description: challengeLabels.weeklyDesc,
    timeLeft: '3d 14h',
    participants: 1234,
    rewards: [
      { icon: '🏆', label: challengeLabels.specialBadge },
      { icon: '⭐', label: '+500 ' + challengeLabels.bonusPoints }
    ]
  };

  const monthlyChallenge = {
    title: challengeLabels.currentMonth,
    description: challengeLabels.monthlyDesc,
    timeLeft: '12d 8h',
    participants: 5678,
    rewards: [
      { icon: '👑', label: challengeLabels.specialBadge },
      { icon: '💎', label: '+2000 ' + challengeLabels.bonusPoints }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Header
          currentLanguage={language}
          onLanguageChange={setLanguage}
          translations={t}
        />

        <div className="mt-6">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">{challengeLabels.title}</h1>
          </div>

          {/* Weekly Challenge */}
          <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{challengeLabels.weeklyChallenge}</h2>
                  <p className="text-muted-foreground">{weeklyChallenge.title}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">{challengeLabels.timeLeft}</div>
                <div className="text-2xl font-bold text-primary">{weeklyChallenge.timeLeft}</div>
              </div>
            </div>

            <p className="text-foreground mb-4">{weeklyChallenge.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                {weeklyChallenge.participants.toLocaleString()} {challengeLabels.participants}
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-3 text-foreground">{challengeLabels.rewards}</h3>
              <div className="grid grid-cols-2 gap-3">
                {weeklyChallenge.rewards.map((reward, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <span className="text-2xl">{reward.icon}</span>
                    <span className="text-sm font-medium">{reward.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate('/')}
            >
              <Zap className="w-5 h-5 mr-2" />
              {challengeLabels.start}
            </Button>
          </Card>

          {/* Monthly Challenge */}
          <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-500/20">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/20 rounded-lg">
                  <Trophy className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{challengeLabels.monthlyChallenge}</h2>
                  <p className="text-muted-foreground">{monthlyChallenge.title}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">{challengeLabels.timeLeft}</div>
                <div className="text-2xl font-bold text-amber-500">{monthlyChallenge.timeLeft}</div>
              </div>
            </div>

            <p className="text-foreground mb-4">{monthlyChallenge.description}</p>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4" />
                {monthlyChallenge.participants.toLocaleString()} {challengeLabels.participants}
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold mb-3 text-foreground">{challengeLabels.rewards}</h3>
              <div className="grid grid-cols-2 gap-3">
                {monthlyChallenge.rewards.map((reward, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-background/50 rounded-lg p-3">
                    <span className="text-2xl">{reward.icon}</span>
                    <span className="text-sm font-medium">{reward.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
              onClick={() => navigate('/')}
            >
              <Zap className="w-5 h-5 mr-2" />
              {challengeLabels.start}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
