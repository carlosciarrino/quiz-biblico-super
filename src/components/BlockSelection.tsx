import { Book, BookOpen, Mail, ScrollText, Sparkles, Gift } from 'lucide-react';
import { TranslationStrings } from '../types/quiz';
import gospelsImg from '../assets/gospels.jpg';
import actsImg from '../assets/acts.jpg';
import paulLettersImg from '../assets/paul-letters.jpg';
import oldTestamentImg from '../assets/old-testament.jpg';
import megaQuizImg from '../assets/mega-quiz.jpg';
import surpriseQuizImg from '../assets/surprise-quiz.jpg';

interface BlockSelectionProps {
  onSelectBlock: (blockKey: string) => void;
  translations: TranslationStrings;
}

const BlockSelection = ({ onSelectBlock, translations }: BlockSelectionProps) => {
  const blocks = [
    {
      key: 'gospels',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      description: 'Matteo, Marco, Luca, Giovanni',
      image: gospelsImg
    },
    {
      key: 'acts',
      icon: ScrollText,
      gradient: 'from-emerald-500 to-teal-500',
      textColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      description: 'La nascita della Chiesa',
      image: actsImg
    },
    {
      key: 'paulLetters',
      icon: Mail,
      gradient: 'from-amber-500 to-orange-500',
      textColor: 'text-amber-600',
      bgColor: 'bg-amber-50',
      description: 'Lettere apostoliche',
      image: paulLettersImg
    },
    {
      key: 'oldTestament',
      icon: Book,
      gradient: 'from-purple-500 to-pink-500',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      description: 'Storie dei patriarchi',
      image: oldTestamentImg
    },
    {
      key: 'megaQuiz',
      icon: Sparkles,
      gradient: 'from-violet-500 to-purple-600',
      textColor: 'text-violet-600',
      bgColor: 'bg-violet-50',
      description: 'Tutte le sezioni insieme',
      image: megaQuizImg
    },
    {
      key: 'surpriseQuiz',
      icon: Gift,
      gradient: 'from-rose-500 to-red-500',
      textColor: 'text-rose-600',
      bgColor: 'bg-rose-50',
      description: 'Domande casuali',
      image: surpriseQuizImg
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">{translations.selectBlock}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((block) => {
          const Icon = block.icon;
          return (
            <button
              key={block.key}
              onClick={() => onSelectBlock(block.key)}
              className="group bg-card hover:shadow-[var(--shadow-lg)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-left shadow-[var(--shadow-card)] relative"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <img 
                  src={block.image} 
                  alt={translations.blocks[block.key]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 p-6">
                <div className={`${block.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${block.textColor}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {translations.blocks[block.key]}
                </h3>
                <p className="text-sm text-muted-foreground">{block.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlockSelection;
