import { useState } from 'react';
import { Book, Home, Search, ExternalLink } from 'lucide-react';
import { Language } from '../types/quiz';
import { translations } from '../data/translations';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const BibleReader = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState<Language>('it');
  const [bookName, setBookName] = useState('John');
  const [chapter, setChapter] = useState('3');
  const [verse, setVerse] = useState('16');
  const [verseText, setVerseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const t = translations[currentLanguage];

  const bibleWebsites: Record<Language, { url: string; name: string }> = {
    it: { url: 'https://www.bible.com/it/bible/90/JHN.1.NR06', name: 'Bible.com' },
    en: { url: 'https://www.bible.com/bible/1/JHN.1.KJV', name: 'Bible.com' },
    es: { url: 'https://www.bible.com/es/bible/128/JHN.1.RVR60', name: 'Bible.com' },
    pt: { url: 'https://www.bible.com/pt/bible/212/JHN.1.ARC', name: 'Bible.com' },
    fr: { url: 'https://www.bible.com/fr/bible/93/JHN.1.BDS', name: 'Bible.com' }
  };

  const translationMap: Record<Language, string> = {
    it: 'riv',
    en: 'kjv',
    es: 'rvr95',
    pt: 'almeida',
    fr: 'bds'
  };

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setVerseText('');

    try {
      const translation = translationMap[currentLanguage];
      const reference = `${bookName}+${chapter}:${verse}`;
      const url = `https://bible-api.com/${reference}?translation=${translation}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.text) {
        setVerseText(data.text);
      } else if (data.verses && data.verses.length > 0) {
        setVerseText(data.verses[0].text);
      } else {
        throw new Error('No verse text found');
      }
    } catch (err) {
      setError(currentLanguage === 'it' ? 'Versetto non trovato. Verifica i dati inseriti.' :
               currentLanguage === 'en' ? 'Verse not found. Please check your input.' :
               currentLanguage === 'es' ? 'Versículo no encontrado. Verifica los datos.' :
               currentLanguage === 'pt' ? 'Versículo não encontrado. Verifique os dados.' :
               'Verset introuvable. Vérifiez vos données.');
    } finally {
      setLoading(false);
    }
  };

  const popularBooks = [
    { name: 'John', displayIt: 'Giovanni', displayEn: 'John', displayEs: 'Juan', displayPt: 'João', displayFr: 'Jean' },
    { name: 'Genesis', displayIt: 'Genesi', displayEn: 'Genesis', displayEs: 'Génesis', displayPt: 'Gênesis', displayFr: 'Genèse' },
    { name: 'Psalms', displayIt: 'Salmi', displayEn: 'Psalms', displayEs: 'Salmos', displayPt: 'Salmos', displayFr: 'Psaumes' },
    { name: 'Matthew', displayIt: 'Matteo', displayEn: 'Matthew', displayEs: 'Mateo', displayPt: 'Mateus', displayFr: 'Matthieu' },
    { name: 'Romans', displayIt: 'Romani', displayEn: 'Romans', displayEs: 'Romanos', displayPt: 'Romanos', displayFr: 'Romains' }
  ];

  const getBookDisplay = (book: typeof popularBooks[0]) => {
    switch (currentLanguage) {
      case 'it': return book.displayIt;
      case 'en': return book.displayEn;
      case 'es': return book.displayEs;
      case 'pt': return book.displayPt;
      case 'fr': return book.displayFr;
      default: return book.displayEn;
    }
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
              <Book className="w-8 h-8" />
              <h1 className="text-3xl font-bold">
                {currentLanguage === 'it' ? 'Leggi la Bibbia' :
                 currentLanguage === 'en' ? 'Read the Bible' :
                 currentLanguage === 'es' ? 'Lee la Biblia' :
                 currentLanguage === 'pt' ? 'Leia a Bíblia' :
                 'Lisez la Bible'}
              </h1>
            </div>
            <p className="text-primary-foreground/90">
              {currentLanguage === 'it' ? 'Cerca e leggi i versetti della Sacra Scrittura' :
               currentLanguage === 'en' ? 'Search and read verses from the Holy Scripture' :
               currentLanguage === 'es' ? 'Busca y lee versículos de las Sagradas Escrituras' :
               currentLanguage === 'pt' ? 'Pesquise e leia versículos das Sagradas Escrituras' :
               'Recherchez et lisez les versets des Saintes Écritures'}
            </p>
          </div>

          <div className="mt-6 bg-card rounded-xl p-6 shadow-[var(--shadow-lg)]">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {currentLanguage === 'it' ? 'Leggi la Bibbia Online' :
                 currentLanguage === 'en' ? 'Read the Bible Online' :
                 currentLanguage === 'es' ? 'Lee la Biblia en Línea' :
                 currentLanguage === 'pt' ? 'Leia a Bíblia Online' :
                 'Lisez la Bible en Ligne'}
              </h3>
              <a
                href={bibleWebsites[currentLanguage].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <Book className="w-5 h-5" />
                {currentLanguage === 'it' ? 'Apri' :
                 currentLanguage === 'en' ? 'Open' :
                 currentLanguage === 'es' ? 'Abrir' :
                 currentLanguage === 'pt' ? 'Abrir' :
                 'Ouvrir'} {bibleWebsites[currentLanguage].name}
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-sm text-muted-foreground mt-2 text-center">
                {currentLanguage === 'it' ? 'Si aprirà in una nuova scheda' :
                 currentLanguage === 'en' ? 'Opens in a new tab' :
                 currentLanguage === 'es' ? 'Se abrirá en una nueva pestaña' :
                 currentLanguage === 'pt' ? 'Abre em uma nova aba' :
                 'S\'ouvre dans un nouvel onglet'}
              </p>
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {currentLanguage === 'it' ? 'Oppure cerca un versetto specifico' :
                 currentLanguage === 'en' ? 'Or search for a specific verse' :
                 currentLanguage === 'es' ? 'O busca un versículo específico' :
                 currentLanguage === 'pt' ? 'Ou procure um versículo específico' :
                 'Ou recherchez un verset spécifique'}
              </h3>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {currentLanguage === 'it' ? 'Libri popolari' :
                 currentLanguage === 'en' ? 'Popular Books' :
                 currentLanguage === 'es' ? 'Libros populares' :
                 currentLanguage === 'pt' ? 'Livros populares' :
                 'Livres populaires'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularBooks.map((book) => (
                  <button
                    key={book.name}
                    onClick={() => setBookName(book.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      bookName === book.name
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    {getBookDisplay(book)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {currentLanguage === 'it' ? 'Libro' :
                   currentLanguage === 'en' ? 'Book' :
                   currentLanguage === 'es' ? 'Libro' :
                   currentLanguage === 'pt' ? 'Livro' :
                   'Livre'}
                </label>
                <input
                  type="text"
                  value={bookName}
                  onChange={(e) => setBookName(e.target.value)}
                  placeholder="John, Genesis, etc."
                  className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {currentLanguage === 'it' ? 'Capitolo' :
                   currentLanguage === 'en' ? 'Chapter' :
                   currentLanguage === 'es' ? 'Capítulo' :
                   currentLanguage === 'pt' ? 'Capítulo' :
                   'Chapitre'}
                </label>
                <input
                  type="number"
                  value={chapter}
                  onChange={(e) => setChapter(e.target.value)}
                  placeholder="3"
                  className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">
                  {currentLanguage === 'it' ? 'Versetto' :
                   currentLanguage === 'en' ? 'Verse' :
                   currentLanguage === 'es' ? 'Versículo' :
                   currentLanguage === 'pt' ? 'Versículo' :
                   'Verset'}
                </label>
                <input
                  type="number"
                  value={verse}
                  onChange={(e) => setVerse(e.target.value)}
                  placeholder="16"
                  className="w-full px-4 py-2 rounded-lg border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleSearch}
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              {loading 
                ? (currentLanguage === 'it' ? 'Caricamento...' :
                   currentLanguage === 'en' ? 'Loading...' :
                   currentLanguage === 'es' ? 'Cargando...' :
                   currentLanguage === 'pt' ? 'Carregando...' :
                   'Chargement...')
                : (currentLanguage === 'it' ? 'Cerca' :
                   currentLanguage === 'en' ? 'Search' :
                   currentLanguage === 'es' ? 'Buscar' :
                   currentLanguage === 'pt' ? 'Pesquisar' :
                   'Rechercher')}
            </button>

            {error && (
              <div className="mt-4 p-4 bg-destructive/10 border-2 border-destructive rounded-lg">
                <p className="text-destructive font-medium">{error}</p>
              </div>
            )}

            {verseText && (
              <div className="mt-6 p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <Book className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg text-foreground leading-relaxed mb-2">
                      {verseText}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {bookName} {chapter}:{verse}
                    </p>
                  </div>
                </div>
              </div>
            )}
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

export default BibleReader;