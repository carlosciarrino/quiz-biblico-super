import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy, Medal, Award, Share2, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loadUserStats } from '@/utils/achievements';
import { Language } from '@/types/quiz';
import { useToast } from '@/hooks/use-toast';

interface LeaderboardEntry {
  id: string;
  username: string;
  totalScore: number;
  totalQuizzes: number;
  accuracy: number;
  highestScore: number;
  timestamp: number;
}

const Leaderboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState<Language>('it');
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState<number | null>(null);
  const [shareCode, setShareCode] = useState('');
  const [friendCode, setFriendCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') as Language;
    if (savedLang) setLanguage(savedLang);
    
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) setUsername(savedUsername);

    loadLeaderboard();
  }, []);

  const labels = {
    it: {
      title: 'Classifica',
      subtitle: 'Confronta i tuoi punteggi con altri giocatori',
      yourStats: 'Le Tue Statistiche',
      username: 'Nome Utente',
      setUsername: 'Imposta Nome',
      shareScore: 'Condividi Punteggio',
      addFriend: 'Aggiungi Amico',
      friendCode: 'Codice Amico',
      add: 'Aggiungi',
      yourCode: 'Il Tuo Codice',
      copy: 'Copia',
      copied: 'Copiato!',
      rank: 'Posizione',
      player: 'Giocatore',
      score: 'Punteggio',
      quizzes: 'Quiz',
      accuracy: 'Precisione',
      highest: 'Massimo',
      you: 'Tu',
      noData: 'Nessun dato disponibile. Completa alcuni quiz per apparire in classifica!',
      back: 'Indietro',
      usernameSaved: 'Nome utente salvato!',
      friendAdded: 'Amico aggiunto alla classifica!',
      invalidCode: 'Codice non valido',
      localLeaderboard: 'Classifica Locale',
      shareWithFriends: 'Condividi con Amici'
    },
    en: {
      title: 'Leaderboard',
      subtitle: 'Compare your scores with other players',
      yourStats: 'Your Statistics',
      username: 'Username',
      setUsername: 'Set Username',
      shareScore: 'Share Score',
      addFriend: 'Add Friend',
      friendCode: 'Friend Code',
      add: 'Add',
      yourCode: 'Your Code',
      copy: 'Copy',
      copied: 'Copied!',
      rank: 'Rank',
      player: 'Player',
      score: 'Score',
      quizzes: 'Quizzes',
      accuracy: 'Accuracy',
      highest: 'Highest',
      you: 'You',
      noData: 'No data available. Complete some quizzes to appear on the leaderboard!',
      back: 'Back',
      usernameSaved: 'Username saved!',
      friendAdded: 'Friend added to leaderboard!',
      invalidCode: 'Invalid code',
      localLeaderboard: 'Local Leaderboard',
      shareWithFriends: 'Share with Friends'
    },
    es: {
      title: 'Clasificación',
      subtitle: 'Compara tus puntuaciones con otros jugadores',
      yourStats: 'Tus Estadísticas',
      username: 'Nombre de Usuario',
      setUsername: 'Establecer Nombre',
      shareScore: 'Compartir Puntuación',
      addFriend: 'Añadir Amigo',
      friendCode: 'Código de Amigo',
      add: 'Añadir',
      yourCode: 'Tu Código',
      copy: 'Copiar',
      copied: '¡Copiado!',
      rank: 'Posición',
      player: 'Jugador',
      score: 'Puntuación',
      quizzes: 'Quizzes',
      accuracy: 'Precisión',
      highest: 'Máximo',
      you: 'Tú',
      noData: '¡No hay datos disponibles. Completa algunos quizzes para aparecer en la clasificación!',
      back: 'Volver',
      usernameSaved: '¡Nombre de usuario guardado!',
      friendAdded: '¡Amigo añadido a la clasificación!',
      invalidCode: 'Código inválido',
      localLeaderboard: 'Clasificación Local',
      shareWithFriends: 'Compartir con Amigos'
    },
    pt: {
      title: 'Classificação',
      subtitle: 'Compare suas pontuações com outros jogadores',
      yourStats: 'Suas Estatísticas',
      username: 'Nome de Usuário',
      setUsername: 'Definir Nome',
      shareScore: 'Compartilhar Pontuação',
      addFriend: 'Adicionar Amigo',
      friendCode: 'Código de Amigo',
      add: 'Adicionar',
      yourCode: 'Seu Código',
      copy: 'Copiar',
      copied: 'Copiado!',
      rank: 'Posição',
      player: 'Jogador',
      score: 'Pontuação',
      quizzes: 'Quizzes',
      accuracy: 'Precisão',
      highest: 'Máximo',
      you: 'Você',
      noData: 'Nenhum dado disponível. Complete alguns quizzes para aparecer na classificação!',
      back: 'Voltar',
      usernameSaved: 'Nome de usuário salvo!',
      friendAdded: 'Amigo adicionado à classificação!',
      invalidCode: 'Código inválido',
      localLeaderboard: 'Classificação Local',
      shareWithFriends: 'Compartilhar com Amigos'
    },
    fr: {
      title: 'Classement',
      subtitle: 'Comparez vos scores avec d\'autres joueurs',
      yourStats: 'Vos Statistiques',
      username: 'Nom d\'utilisateur',
      setUsername: 'Définir le Nom',
      shareScore: 'Partager le Score',
      addFriend: 'Ajouter un Ami',
      friendCode: 'Code Ami',
      add: 'Ajouter',
      yourCode: 'Votre Code',
      copy: 'Copier',
      copied: 'Copié!',
      rank: 'Position',
      player: 'Joueur',
      score: 'Score',
      quizzes: 'Quiz',
      accuracy: 'Précision',
      highest: 'Maximum',
      you: 'Vous',
      noData: 'Aucune donnée disponible. Complétez quelques quiz pour apparaître dans le classement!',
      back: 'Retour',
      usernameSaved: 'Nom d\'utilisateur enregistré!',
      friendAdded: 'Ami ajouté au classement!',
      invalidCode: 'Code invalide',
      localLeaderboard: 'Classement Local',
      shareWithFriends: 'Partager avec des Amis'
    }
  };

  const t = labels[language];

  const loadLeaderboard = () => {
    const stored = localStorage.getItem('leaderboard');
    if (stored) {
      const data = JSON.parse(stored) as LeaderboardEntry[];
      const sorted = data.sort((a, b) => b.totalScore - a.totalScore);
      setLeaderboard(sorted);
    }
  };

  const generateShareCode = () => {
    const stats = loadUserStats();
    const entry: LeaderboardEntry = {
      id: Date.now().toString(),
      username: username || 'Anonymous',
      totalScore: stats.totalQuizzes * stats.highestScore,
      totalQuizzes: stats.totalQuizzes,
      accuracy: stats.totalQuestions > 0 
        ? Math.round((stats.totalCorrectAnswers / stats.totalQuestions) * 100)
        : 0,
      highestScore: stats.highestScore,
      timestamp: Date.now()
    };

    const code = btoa(JSON.stringify(entry));
    setShareCode(code);
    
    // Add self to leaderboard
    const stored = localStorage.getItem('leaderboard');
    const currentBoard = stored ? JSON.parse(stored) : [];
    const filtered = currentBoard.filter((e: LeaderboardEntry) => e.username !== entry.username);
    const updated = [...filtered, entry];
    localStorage.setItem('leaderboard', JSON.stringify(updated));
    loadLeaderboard();
  };

  const handleSetUsername = () => {
    if (username.trim()) {
      localStorage.setItem('username', username.trim());
      toast({
        title: t.usernameSaved,
        description: username.trim()
      });
    }
  };

  const handleAddFriend = () => {
    try {
      const decoded = JSON.parse(atob(friendCode));
      const stored = localStorage.getItem('leaderboard');
      const currentBoard = stored ? JSON.parse(stored) : [];
      const updated = [...currentBoard, decoded];
      localStorage.setItem('leaderboard', JSON.stringify(updated));
      loadLeaderboard();
      setFriendCode('');
      toast({
        title: t.friendAdded,
        description: decoded.username
      });
    } catch {
      toast({
        title: t.invalidCode,
        variant: 'destructive'
      });
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: t.copied
    });
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-primary" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-muted-foreground" />;
    if (rank === 3) return <Award className="w-6 h-6 text-accent" />;
    return <span className="text-muted-foreground font-bold">{rank}</span>;
  };

  const stats = loadUserStats();
  const userEntry = leaderboard.find(e => e.username === username);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
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

        {/* User Stats and Sharing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.yourStats}</CardTitle>
              <CardDescription>{t.shareWithFriends}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder={t.username}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Button onClick={handleSetUsername}>{t.setUsername}</Button>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-secondary rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">{t.quizzes}</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalQuizzes}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.highest}</p>
                  <p className="text-2xl font-bold text-primary">{stats.highestScore}</p>
                </div>
              </div>

              <Button 
                onClick={generateShareCode} 
                className="w-full"
                variant="default"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {t.shareScore}
              </Button>

              {shareCode && (
                <div className="space-y-2">
                  <p className="text-sm font-medium">{t.yourCode}</p>
                  <div className="flex gap-2">
                    <Input value={shareCode} readOnly className="font-mono text-xs" />
                    <Button onClick={handleCopy} variant="outline">
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.addFriend}</CardTitle>
              <CardDescription>{t.friendCode}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder={t.friendCode}
                  value={friendCode}
                  onChange={(e) => setFriendCode(e.target.value)}
                  className="font-mono text-xs"
                />
                <Button onClick={handleAddFriend}>{t.add}</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card>
          <CardHeader>
            <CardTitle>{t.localLeaderboard}</CardTitle>
          </CardHeader>
          <CardContent>
            {leaderboard.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">{t.noData}</p>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={entry.id}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                      entry.username === username
                        ? 'bg-primary/10 border-2 border-primary'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <div className="w-12 flex justify-center">
                      {getRankIcon(index + 1)}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">
                        {entry.username}
                        {entry.username === username && (
                          <span className="ml-2 text-xs text-primary">({t.you})</span>
                        )}
                      </p>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{t.quizzes}: {entry.totalQuizzes}</span>
                        <span>{t.accuracy}: {entry.accuracy}%</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{entry.totalScore}</p>
                      <p className="text-xs text-muted-foreground">{t.highest}: {entry.highestScore}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
