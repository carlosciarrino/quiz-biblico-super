import { useState } from 'react';
import { Users, Home, Share2, Trophy, Copy, Check } from 'lucide-react';
import { Language } from '../types/quiz';
import { translations } from '../data/translations';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const FriendChallenge = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('it');
  const [copied, setCopied] = useState(false);
  const [challengeCode, setChallengeCode] = useState('');

  const t = translations[currentLanguage];

  const generateChallengeCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setChallengeCode(code);
  };

  const copyToClipboard = () => {
    const shareText = currentLanguage === 'it' 
      ? `Sfida Bibbia Quiz! 🎯\n\nTi sfido a fare un quiz biblico!\nCodice sfida: ${challengeCode}\n\nScarica l'app e inserisci il codice per competere!`
      : currentLanguage === 'en'
      ? `Bible Quiz Challenge! 🎯\n\nI challenge you to a Bible quiz!\nChallenge code: ${challengeCode}\n\nDownload the app and enter the code to compete!`
      : currentLanguage === 'es'
      ? `¡Desafío Quiz Bíblico! 🎯\n\n¡Te desafío a un quiz bíblico!\nCódigo de desafío: ${challengeCode}\n\n¡Descarga la app e ingresa el código para competir!`
      : currentLanguage === 'pt'
      ? `Desafio Quiz Bíblico! 🎯\n\nEu te desafio para um quiz bíblico!\nCódigo do desafio: ${challengeCode}\n\nBaixe o app e digite o código para competir!`
      : `Défi Quiz Biblique! 🎯\n\nJe te défie à un quiz biblique!\nCode de défi: ${challengeCode}\n\nTélécharge l'app et entre le code pour compétitionner!`;
    
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        <Header
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
          translations={t}
        />

        <div className="mt-6">
          <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-xl p-6 shadow-[var(--shadow-lg)]">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8" />
              <h1 className="text-3xl font-bold">
                {currentLanguage === 'it' ? 'Sfida con gli Amici' :
                 currentLanguage === 'en' ? 'Challenge Friends' :
                 currentLanguage === 'es' ? 'Desafío con Amigos' :
                 currentLanguage === 'pt' ? 'Desafio com Amigos' :
                 'Défi avec des Amis'}
              </h1>
            </div>
            <p className="text-primary-foreground/90">
              {currentLanguage === 'it' ? 'Crea una sfida e invita i tuoi amici a competere!' :
               currentLanguage === 'en' ? 'Create a challenge and invite your friends to compete!' :
               currentLanguage === 'es' ? '¡Crea un desafío e invita a tus amigos a competir!' :
               currentLanguage === 'pt' ? 'Crie um desafio e convide seus amigos para competir!' :
               'Créez un défi et invitez vos amis à compétitionner!'}
            </p>
          </div>

          <div className="mt-6 bg-card rounded-xl p-6 shadow-[var(--shadow-lg)]">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border-2 border-amber-500/20 rounded-xl p-8 mb-6">
                <Trophy className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentLanguage === 'it' ? 'Funzionalità in Arrivo!' :
                   currentLanguage === 'en' ? 'Feature Coming Soon!' :
                   currentLanguage === 'es' ? '¡Función Próximamente!' :
                   currentLanguage === 'pt' ? 'Funcionalidade em Breve!' :
                   'Fonctionnalité Bientôt Disponible!'}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentLanguage === 'it' ? 'Stiamo lavorando per portarti la modalità multiplayer online! Nel frattempo, puoi condividere il tuo punteggio con gli amici.' :
                   currentLanguage === 'en' ? "We're working to bring you online multiplayer mode! Meanwhile, you can share your score with friends." :
                   currentLanguage === 'es' ? '¡Estamos trabajando para traerte el modo multijugador en línea! Mientras tanto, puedes compartir tu puntuación con amigos.' :
                   currentLanguage === 'pt' ? 'Estamos trabalhando para trazer o modo multiplayer online! Enquanto isso, você pode compartilhar sua pontuação com amigos.' :
                   'Nous travaillons pour vous apporter le mode multijoueur en ligne! En attendant, vous pouvez partager votre score avec des amis.'}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {currentLanguage === 'it' ? 'Genera Codice Sfida' :
                   currentLanguage === 'en' ? 'Generate Challenge Code' :
                   currentLanguage === 'es' ? 'Generar Código de Desafío' :
                   currentLanguage === 'pt' ? 'Gerar Código de Desafio' :
                   'Générer Code de Défi'}
                </h4>
                
                {!challengeCode ? (
                  <button
                    onClick={generateChallengeCode}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                  >
                    <Share2 className="w-5 h-5" />
                    {currentLanguage === 'it' ? 'Genera Codice' :
                     currentLanguage === 'en' ? 'Generate Code' :
                     currentLanguage === 'es' ? 'Generar Código' :
                     currentLanguage === 'pt' ? 'Gerar Código' :
                     'Générer Code'}
                  </button>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-background border-2 border-primary rounded-lg p-4">
                      <p className="text-3xl font-bold text-primary tracking-wider">
                        {challengeCode}
                      </p>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="bg-success hover:bg-success/90 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto"
                    >
                      {copied ? (
                        <>
                          <Check className="w-5 h-5" />
                          {currentLanguage === 'it' ? 'Copiato!' :
                           currentLanguage === 'en' ? 'Copied!' :
                           currentLanguage === 'es' ? '¡Copiado!' :
                           currentLanguage === 'pt' ? 'Copiado!' :
                           'Copié!'}
                        </>
                      ) : (
                        <>
                          <Copy className="w-5 h-5" />
                          {currentLanguage === 'it' ? 'Copia Messaggio' :
                           currentLanguage === 'en' ? 'Copy Message' :
                           currentLanguage === 'es' ? 'Copiar Mensaje' :
                           currentLanguage === 'pt' ? 'Copiar Mensagem' :
                           'Copier Message'}
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setChallengeCode('')}
                      className="text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                      {currentLanguage === 'it' ? 'Genera Nuovo Codice' :
                       currentLanguage === 'en' ? 'Generate New Code' :
                       currentLanguage === 'es' ? 'Generar Nuevo Código' :
                       currentLanguage === 'pt' ? 'Gerar Novo Código' :
                       'Générer Nouveau Code'}
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {currentLanguage === 'it' ? 'Come Funziona' :
                   currentLanguage === 'en' ? 'How It Works' :
                   currentLanguage === 'es' ? 'Cómo Funciona' :
                   currentLanguage === 'pt' ? 'Como Funciona' :
                   'Comment Ça Marche'}
                </h4>
                <ol className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">1</span>
                    <span>
                      {currentLanguage === 'it' ? 'Genera un codice sfida unico' :
                       currentLanguage === 'en' ? 'Generate a unique challenge code' :
                       currentLanguage === 'es' ? 'Genera un código de desafío único' :
                       currentLanguage === 'pt' ? 'Gere um código de desafio único' :
                       'Générez un code de défi unique'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">2</span>
                    <span>
                      {currentLanguage === 'it' ? 'Condividi il codice con i tuoi amici' :
                       currentLanguage === 'en' ? 'Share the code with your friends' :
                       currentLanguage === 'es' ? 'Comparte el código con tus amigos' :
                       currentLanguage === 'pt' ? 'Compartilhe o código com seus amigos' :
                       'Partagez le code avec vos amis'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">3</span>
                    <span>
                      {currentLanguage === 'it' ? 'Completa lo stesso quiz e confronta i punteggi!' :
                       currentLanguage === 'en' ? 'Complete the same quiz and compare scores!' :
                       currentLanguage === 'es' ? '¡Completa el mismo quiz y compara puntuaciones!' :
                       currentLanguage === 'pt' ? 'Complete o mesmo quiz e compare pontuações!' :
                       'Complétez le même quiz et comparez les scores!'}
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full bg-card hover:bg-secondary text-foreground font-semibold py-3 rounded-lg shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t.homeBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendChallenge;