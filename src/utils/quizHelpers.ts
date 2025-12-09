import { questions } from '../data/questions';
import { BlockName, Question } from '../types/quiz';

export const blockMap: Record<string, BlockName> = {
  gospels: 'Vangeli',
  acts: 'Atti degli Apostoli',
  paulLetters: 'Lettere di Paolo',
  oldTestament: 'Antico Testamento',
  megaQuiz: 'Mega Quiz Bibbia',
  surpriseQuiz: 'Quiz a Sorpresa'
};

export const generateRandomQuestions = (blockName: BlockName, count: number): Question[] => {
  const blockQuestions = questions.filter(q => q.block === blockName);
  const shuffled = [...blockQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
};

export const generateMegaQuiz = (): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 30);
};

export const getRandomVerse = (language: string) => {
  const verses = {
    it: [
      { text: "Dio infatti ha tanto amato il mondo da dare il Figlio unigenito.", ref: "Giovanni 3:16" },
      { text: "Io sono la via, la verità e la vita.", ref: "Giovanni 14:6" },
      { text: "Tutto posso in colui che mi dà la forza.", ref: "Filippesi 4:13" },
      { text: "Il Signore è il mio pastore: non manco di nulla.", ref: "Salmo 23:1" },
      { text: "Chiedete e vi sarà dato; cercate e troverete.", ref: "Matteo 7:7" }
    ],
    en: [
      { text: "For God so loved the world that he gave his one and only Son.", ref: "John 3:16" },
      { text: "I am the way and the truth and the life.", ref: "John 14:6" },
      { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
      { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
      { text: "Ask and it will be given to you; seek and you will find.", ref: "Matthew 7:7" }
    ],
    es: [
      { text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.", ref: "Juan 3:16" },
      { text: "Yo soy el camino, y la verdad, y la vida.", ref: "Juan 14:6" },
      { text: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13" },
      { text: "El Señor es mi pastor; nada me faltará.", ref: "Salmo 23:1" },
      { text: "Pedid, y se os dará; buscad, y hallaréis.", ref: "Mateo 7:7" }
    ],
    pt: [
      { text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.", ref: "João 3:16" },
      { text: "Eu sou o caminho, e a verdade, e a vida.", ref: "João 14:6" },
      { text: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
      { text: "O Senhor é o meu pastor; nada me faltará.", ref: "Salmo 23:1" },
      { text: "Pedi, e dar-se-vos-á; buscai e achareis.", ref: "Mateus 7:7" }
    ],
    fr: [
      { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique.", ref: "Jean 3:16" },
      { text: "Je suis le chemin, la vérité et la vie.", ref: "Jean 14:6" },
      { text: "Je puis tout par celui qui me fortifie.", ref: "Philippiens 4:13" },
      { text: "L'Éternel est mon berger: je ne manquerai de rien.", ref: "Psaume 23:1" },
      { text: "Demandez, et l'on vous donnera; cherchez, et vous trouverez.", ref: "Matthieu 7:7" }
    ]
  };

  const verseList = verses[language as keyof typeof verses] || verses.en;
  return verseList[Math.floor(Math.random() * verseList.length)];
};
