import { Globe } from 'lucide-react';
import { Language, TranslationStrings } from '../types/quiz';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  translations: TranslationStrings;
}

const Header = ({ currentLanguage, onLanguageChange, translations }: HeaderProps) => {
  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' }
  ];

  return (
    <header className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-1">
            {translations.title}
          </h1>
          <p className="text-muted-foreground">{translations.subtitle}</p>
        </div>
        
        <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
          <Globe className="w-4 h-4 text-muted-foreground ml-2" />
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onLanguageChange(lang.code)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                currentLanguage === lang.code
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-foreground hover:bg-background'
              }`}
              title={lang.name}
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
