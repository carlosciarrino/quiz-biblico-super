import { Book } from 'lucide-react';
import { TranslationStrings } from '../types/quiz';
import { getRandomVerse } from '../utils/quizHelpers';
import { useState, useEffect } from 'react';
import heroBibleImg from '../assets/hero-bible.jpg';

interface VerseOfDayProps {
  translations: TranslationStrings;
  currentLanguage: string;
}

const VerseOfDay = ({ translations, currentLanguage }: VerseOfDayProps) => {
  const [verse, setVerse] = useState(() => getRandomVerse(currentLanguage));

  useEffect(() => {
    setVerse(getRandomVerse(currentLanguage));
  }, [currentLanguage]);

  return (
    <div className="mt-6 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-xl shadow-[var(--shadow-lg)] overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroBibleImg} 
          alt="Holy Bible"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary-foreground/10 p-3 rounded-lg backdrop-blur-sm">
            <Book className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{translations.verseOfDay}</h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-2">
              "{verse.text}"
            </p>
            <p className="text-primary-foreground/70 text-sm font-medium">— {verse.ref}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerseOfDay;
