import { Language } from '../types/quiz';

export interface BiblicalTopic {
  id: string;
  name: Record<Language, string>;
  icon: string;
  responses: Record<Language, string[]>;
  verses: Record<Language, { text: string; ref: string }[]>;
}

export const biblicalTopics: BiblicalTopic[] = [
  {
    id: 'grace',
    name: {
      it: 'Grazia',
      en: 'Grace',
      es: 'Gracia',
      pt: 'Graça',
      fr: 'Grâce'
    },
    icon: '🕊️',
    responses: {
      it: [
        'La grazia di Dio è il Suo favore immeritato verso di noi. Non possiamo guadagnarla, è un dono gratuito attraverso la fede in Cristo.',
        'La grazia ci salva per fede, non per opere, affinché nessuno si possa vantare. È la manifestazione dell\'amore di Dio.',
        'Attraverso la grazia, riceviamo il perdono dei peccati e la vita eterna. È sufficiente in ogni momento della nostra vita.'
      ],
      en: [
        'God\'s grace is His unmerited favor toward us. We cannot earn it; it is a free gift through faith in Christ.',
        'Grace saves us through faith, not by works, so that no one can boast. It is the manifestation of God\'s love.',
        'Through grace, we receive forgiveness of sins and eternal life. It is sufficient in every moment of our lives.'
      ],
      es: [
        'La gracia de Dios es Su favor inmerecido hacia nosotros. No podemos ganarla; es un regalo gratuito a través de la fe en Cristo.',
        'La gracia nos salva por fe, no por obras, para que nadie se gloríe. Es la manifestación del amor de Dios.',
        'A través de la gracia, recibimos el perdón de los pecados y la vida eterna. Es suficiente en cada momento de nuestras vidas.'
      ],
      pt: [
        'A graça de Deus é o Seu favor imerecido em relação a nós. Não podemos conquistá-la; é um presente gratuito através da fé em Cristo.',
        'A graça nos salva pela fé, não pelas obras, para que ninguém se glorie. É a manifestação do amor de Deus.',
        'Através da graça, recebemos o perdão dos pecados e a vida eterna. É suficiente em cada momento de nossas vidas.'
      ],
      fr: [
        'La grâce de Dieu est Sa faveur imméritée envers nous. Nous ne pouvons pas la gagner; c\'est un don gratuit par la foi en Christ.',
        'La grâce nous sauve par la foi, non par les œuvres, afin que personne ne se glorifie. C\'est la manifestation de l\'amour de Dieu.',
        'Par la grâce, nous recevons le pardon des péchés et la vie éternelle. Elle est suffisante à chaque instant de nos vies.'
      ]
    },
    verses: {
      it: [
        { text: 'Infatti è per grazia che siete stati salvati, mediante la fede; e ciò non viene da voi; è il dono di Dio.', ref: 'Efesini 2:8' },
        { text: 'Ma egli mi ha detto: «La mia grazia ti basta, perché la mia potenza si dimostra perfetta nella debolezza».', ref: '2 Corinzi 12:9' }
      ],
      en: [
        { text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.', ref: 'Ephesians 2:8' },
        { text: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness."', ref: '2 Corinthians 12:9' }
      ],
      es: [
        { text: 'Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios.', ref: 'Efesios 2:8' },
        { text: 'Pero él me dijo: «Te basta con mi gracia, pues mi poder se perfecciona en la debilidad».', ref: '2 Corintios 12:9' }
      ],
      pt: [
        { text: 'Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus.', ref: 'Efésios 2:8' },
        { text: 'Mas ele me disse: "Minha graça é suficiente para você, pois o meu poder se aperfeiçoa na fraqueza."', ref: '2 Coríntios 12:9' }
      ],
      fr: [
        { text: 'Car c\'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c\'est le don de Dieu.', ref: 'Éphésiens 2:8' },
        { text: 'Mais il m\'a dit: «Ma grâce te suffit, car ma puissance s\'accomplit dans la faiblesse.»', ref: '2 Corinthiens 12:9' }
      ]
    }
  },
  {
    id: 'mercy',
    name: {
      it: 'Misericordia',
      en: 'Mercy',
      es: 'Misericordia',
      pt: 'Misericórdia',
      fr: 'Miséricorde'
    },
    icon: '💙',
    responses: {
      it: [
        'La misericordia di Dio è la Sua compassione verso i peccatori. Egli è lento all\'ira e grande in benignità.',
        'Dio nella Sua misericordia ci perdona quando ci pentiamo sinceramente. La Sua misericordia si rinnova ogni mattina.',
        'Come Dio è misericordioso con noi, così dobbiamo essere misericordiosi gli uni con gli altri, perdonando come siamo stati perdonati.'
      ],
      en: [
        'God\'s mercy is His compassion toward sinners. He is slow to anger and great in kindness.',
        'God in His mercy forgives us when we truly repent. His mercies are new every morning.',
        'As God is merciful to us, so we must be merciful to one another, forgiving as we have been forgiven.'
      ],
      es: [
        'La misericordia de Dios es Su compasión hacia los pecadores. Él es lento para la ira y grande en bondad.',
        'Dios en Su misericordia nos perdona cuando nos arrepentimos sinceramente. Sus misericordias son nuevas cada mañana.',
        'Así como Dios es misericordioso con nosotros, debemos ser misericordiosos unos con otros, perdonando como hemos sido perdonados.'
      ],
      pt: [
        'A misericórdia de Deus é Sua compaixão pelos pecadores. Ele é tardio em irar-se e grande em bondade.',
        'Deus em Sua misericórdia nos perdoa quando nos arrependemos sinceramente. Suas misericórdias se renovam a cada manhã.',
        'Assim como Deus é misericordioso conosco, devemos ser misericordiosos uns com os outros, perdoando como fomos perdoados.'
      ],
      fr: [
        'La miséricorde de Dieu est Sa compassion envers les pécheurs. Il est lent à la colère et grand en bonté.',
        'Dieu dans Sa miséricorde nous pardonne lorsque nous nous repentons sincèrement. Ses compassions se renouvellent chaque matin.',
        'Comme Dieu est miséricordieux envers nous, nous devons être miséricordieux les uns envers les autres, pardonnant comme nous avons été pardonnés.'
      ]
    },
    verses: {
      it: [
        { text: 'Il Signore è misericordioso e pietoso, lento all\'ira e ricco di bontà.', ref: 'Salmo 103:8' },
        { text: 'Beati i misericordiosi, perché a loro misericordia sarà fatta.', ref: 'Matteo 5:7' }
      ],
      en: [
        { text: 'The Lord is compassionate and gracious, slow to anger, abounding in love.', ref: 'Psalm 103:8' },
        { text: 'Blessed are the merciful, for they will be shown mercy.', ref: 'Matthew 5:7' }
      ],
      es: [
        { text: 'El Señor es clemente y compasivo, lento para la ira y grande en amor.', ref: 'Salmo 103:8' },
        { text: 'Dichosos los compasivos, porque serán tratados con compasión.', ref: 'Mateo 5:7' }
      ],
      pt: [
        { text: 'O Senhor é compassivo e misericordioso, paciente e transbordante de amor.', ref: 'Salmo 103:8' },
        { text: 'Bem-aventurados os misericordiosos, pois obterão misericórdia.', ref: 'Mateus 5:7' }
      ],
      fr: [
        { text: 'L\'Éternel est miséricordieux et compatissant, lent à la colère et riche en bonté.', ref: 'Psaume 103:8' },
        { text: 'Heureux ceux qui sont miséricordieux, car ils obtiendront miséricorde.', ref: 'Matthieu 5:7' }
      ]
    }
  },
  {
    id: 'humility',
    name: {
      it: 'Umiltà',
      en: 'Humility',
      es: 'Humildad',
      pt: 'Humildade',
      fr: 'Humilité'
    },
    icon: '🙏',
    responses: {
      it: [
        'L\'umiltà è riconoscere la nostra dipendenza da Dio e il nostro bisogno della Sua grazia. Cristo stesso è il nostro esempio perfetto.',
        'Dio resiste ai superbi ma dà grazia agli umili. L\'umiltà ci porta alla vera grandezza agli occhi di Dio.',
        'Essere umili significa servire gli altri come Cristo ha servito noi, mettendo i bisogni degli altri prima dei nostri.'
      ],
      en: [
        'Humility is recognizing our dependence on God and our need for His grace. Christ Himself is our perfect example.',
        'God opposes the proud but gives grace to the humble. Humility leads us to true greatness in God\'s eyes.',
        'Being humble means serving others as Christ served us, putting others\' needs before our own.'
      ],
      es: [
        'La humildad es reconocer nuestra dependencia de Dios y nuestra necesidad de Su gracia. Cristo mismo es nuestro ejemplo perfecto.',
        'Dios resiste a los soberbios pero da gracia a los humildes. La humildad nos lleva a la verdadera grandeza ante los ojos de Dios.',
        'Ser humilde significa servir a otros como Cristo nos sirvió, poniendo las necesidades de los demás antes que las nuestras.'
      ],
      pt: [
        'A humildade é reconhecer nossa dependência de Deus e nossa necessidade de Sua graça. Cristo mesmo é nosso exemplo perfeito.',
        'Deus resiste aos soberbos, mas dá graça aos humildes. A humildade nos leva à verdadeira grandeza aos olhos de Deus.',
        'Ser humilde significa servir aos outros como Cristo nos serviu, colocando as necessidades dos outros antes das nossas.'
      ],
      fr: [
        'L\'humilité, c\'est reconnaître notre dépendance envers Dieu et notre besoin de Sa grâce. Christ Lui-même est notre exemple parfait.',
        'Dieu résiste aux orgueilleux mais fait grâce aux humbles. L\'humilité nous conduit à la vraie grandeur aux yeux de Dieu.',
        'Être humble signifie servir les autres comme Christ nous a servis, en mettant les besoins des autres avant les nôtres.'
      ]
    },
    verses: {
      it: [
        { text: 'Umiliatevi dunque sotto la potente mano di Dio, affinché egli vi innalzi a suo tempo.', ref: '1 Pietro 5:6' },
        { text: 'Non fate nulla per spirito di parte o per vanagloria, ma ciascuno, con umiltà, stimi gli altri superiori a sé stesso.', ref: 'Filippesi 2:3' }
      ],
      en: [
        { text: 'Humble yourselves, therefore, under God\'s mighty hand, that he may lift you up in due time.', ref: '1 Peter 5:6' },
        { text: 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves.', ref: 'Philippians 2:3' }
      ],
      es: [
        { text: 'Humíllense, pues, bajo la poderosa mano de Dios, para que él los exalte a su debido tiempo.', ref: '1 Pedro 5:6' },
        { text: 'No hagan nada por egoísmo o vanidad; más bien, con humildad consideren a los demás como superiores a ustedes mismos.', ref: 'Filipenses 2:3' }
      ],
      pt: [
        { text: 'Portanto, humilhem-se debaixo da poderosa mão de Deus, para que ele os exalte no tempo devido.', ref: '1 Pedro 5:6' },
        { text: 'Nada façam por ambição egoísta ou por vaidade, mas humildemente considerem os outros superiores a si mesmos.', ref: 'Filipenses 2:3' }
      ],
      fr: [
        { text: 'Humiliez-vous donc sous la puissante main de Dieu, afin qu\'il vous élève au temps convenable.', ref: '1 Pierre 5:6' },
        { text: 'Ne faites rien par esprit de parti ou par vaine gloire, mais que l\'humilité vous fasse regarder les autres comme étant au-dessus de vous-mêmes.', ref: 'Philippiens 2:3' }
      ]
    }
  },
  {
    id: 'wisdom',
    name: {
      it: 'Saggezza',
      en: 'Wisdom',
      es: 'Sabiduría',
      pt: 'Sabedoria',
      fr: 'Sagesse'
    },
    icon: '🦉',
    responses: {
      it: [
        'La vera saggezza viene da Dio. Il timore del Signore è l\'inizio della saggezza, e la conoscenza del Santo è intelligenza.',
        'Se qualcuno manca di saggezza, la chieda a Dio che dona a tutti generosamente senza rinfacciare, e gli sarà data.',
        'La saggezza divina è pura, pacifica, mite, arrendevole, piena di misericordia e di buoni frutti, imparziale, senza ipocrisia.'
      ],
      en: [
        'True wisdom comes from God. The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.',
        'If anyone lacks wisdom, let them ask God, who gives generously to all without finding fault, and it will be given to them.',
        'The wisdom from above is first pure, then peaceable, gentle, reasonable, full of mercy and good fruits, unwavering, without hypocrisy.'
      ],
      es: [
        'La verdadera sabiduría viene de Dios. El temor del Señor es el principio de la sabiduría, y el conocimiento del Santo es inteligencia.',
        'Si a alguno de ustedes le falta sabiduría, pídasela a Dios, quien da a todos generosamente sin menospreciar a nadie, y se la dará.',
        'La sabiduría de lo alto es ante todo pura, y además pacífica, bondadosa, dócil, llena de compasión y de buenos frutos, imparcial y sincera.'
      ],
      pt: [
        'A verdadeira sabedoria vem de Deus. O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.',
        'Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida.',
        'A sabedoria do alto é antes de tudo pura, depois pacífica, amável, compreensiva, cheia de misericórdia e bons frutos, imparcial e sincera.'
      ],
      fr: [
        'La vraie sagesse vient de Dieu. La crainte de l\'Éternel est le commencement de la sagesse, et la connaissance du Saint est l\'intelligence.',
        'Si quelqu\'un d\'entre vous manque de sagesse, qu\'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.',
        'La sagesse d\'en haut est premièrement pure, ensuite pacifique, modérée, conciliante, pleine de miséricorde et de bons fruits, sans partialité, sans hypocrisie.'
      ]
    },
    verses: {
      it: [
        { text: 'Il timore del Signore è il principio della saggezza, e la conoscenza del Santo è intelligenza.', ref: 'Proverbi 9:10' },
        { text: 'Se qualcuno di voi manca di saggezza, la chieda a Dio che dona a tutti generosamente senza rinfacciare, e gli sarà data.', ref: 'Giacomo 1:5' }
      ],
      en: [
        { text: 'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.', ref: 'Proverbs 9:10' },
        { text: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.', ref: 'James 1:5' }
      ],
      es: [
        { text: 'El comienzo de la sabiduría es el temor del Señor; conocer al Santo es tener discernimiento.', ref: 'Proverbios 9:10' },
        { text: 'Si a alguno de ustedes le falta sabiduría, pídasela a Dios, y él se la dará, pues Dios da a todos generosamente sin menospreciar a nadie.', ref: 'Santiago 1:5' }
      ],
      pt: [
        { text: 'O temor do Senhor é o princípio da sabedoria, e o conhecimento do Santo é entendimento.', ref: 'Provérbios 9:10' },
        { text: 'Se algum de vocês tem falta de sabedoria, peça-a a Deus, que a todos dá livremente, de boa vontade; e lhe será concedida.', ref: 'Tiago 1:5' }
      ],
      fr: [
        { text: 'Le commencement de la sagesse, c\'est la crainte de l\'Éternel; et la science des saints, c\'est l\'intelligence.', ref: 'Proverbes 9:10' },
        { text: 'Si quelqu\'un d\'entre vous manque de sagesse, qu\'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée.', ref: 'Jacques 1:5' }
      ]
    }
  },
  {
    id: 'courage',
    name: {
      it: 'Coraggio',
      en: 'Courage',
      es: 'Coraje',
      pt: 'Coragem',
      fr: 'Courage'
    },
    icon: '🦁',
    responses: {
      it: [
        'Il coraggio cristiano viene dalla fiducia in Dio. Non dobbiamo temere perché Dio è con noi e ci rafforza in ogni situazione.',
        'Sii forte e coraggioso! Non temere e non spaventarti, perché il Signore, il tuo Dio, è con te dovunque tu vada.',
        'Dio non ci ha dato uno spirito di paura, ma di forza, amore e autocontrollo. In Cristo possiamo affrontare ogni sfida.'
      ],
      en: [
        'Christian courage comes from trust in God. We need not fear because God is with us and strengthens us in every situation.',
        'Be strong and courageous! Do not be afraid or discouraged, for the Lord your God is with you wherever you go.',
        'God has not given us a spirit of fear, but of power, love, and self-discipline. In Christ we can face every challenge.'
      ],
      es: [
        'El coraje cristiano viene de la confianza en Dios. No debemos temer porque Dios está con nosotros y nos fortalece en cada situación.',
        '¡Sé fuerte y valiente! No temas ni te desanimes, porque el Señor tu Dios estará contigo dondequiera que vayas.',
        'Dios no nos ha dado un espíritu de temor, sino de poder, amor y dominio propio. En Cristo podemos enfrentar cada desafío.'
      ],
      pt: [
        'A coragem cristã vem da confiança em Deus. Não precisamos temer porque Deus está conosco e nos fortalece em cada situação.',
        'Seja forte e corajoso! Não tenha medo nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.',
        'Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio. Em Cristo podemos enfrentar cada desafio.'
      ],
      fr: [
        'Le courage chrétien vient de la confiance en Dieu. Nous ne devons pas craindre car Dieu est avec nous et nous fortifie dans chaque situation.',
        'Fortifie-toi et prends courage! Ne crains point et ne t\'effraie point, car l\'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.',
        'Dieu ne nous a pas donné un esprit de timidité, mais un esprit de force, d\'amour et de sagesse. En Christ, nous pouvons faire face à chaque défi.'
      ]
    },
    verses: {
      it: [
        { text: 'Non ti ho io comandato: «Sii forte e coraggioso»? Non temere e non spaventarti, perché il Signore, il tuo Dio, è con te dovunque tu vada.', ref: 'Giosuè 1:9' },
        { text: 'Infatti Dio non ci ha dato uno spirito di timidezza, ma di forza, d\'amore e di autocontrollo.', ref: '2 Timoteo 1:7' }
      ],
      en: [
        { text: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.', ref: 'Joshua 1:9' },
        { text: 'For God has not given us a spirit of fear, but of power and of love and of a sound mind.', ref: '2 Timothy 1:7' }
      ],
      es: [
        { text: '¿No te he mandado yo? ¡Sé fuerte y valiente! No temas ni te desanimes, porque el Señor tu Dios estará contigo dondequiera que vayas.', ref: 'Josué 1:9' },
        { text: 'Pues Dios no nos ha dado un espíritu de timidez, sino de poder, de amor y de dominio propio.', ref: '2 Timoteo 1:7' }
      ],
      pt: [
        { text: 'Não lhe ordenei eu? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.', ref: 'Josué 1:9' },
        { text: 'Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio.', ref: '2 Timóteo 1:7' }
      ],
      fr: [
        { text: 'Ne t\'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t\'effraie point et ne t\'épouvante point, car l\'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.', ref: 'Josué 1:9' },
        { text: 'Car ce n\'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d\'amour et de sagesse.', ref: '2 Timothée 1:7' }
      ]
    }
  },
  {
    id: 'love',
    name: {
      it: 'Amore',
      en: 'Love',
      es: 'Amor',
      pt: 'Amor',
      fr: 'Amour'
    },
    icon: '❤️',
    responses: {
      it: [
        'L\'amore è il comandamento più grande. Dio è amore, e chi rimane nell\'amore rimane in Dio e Dio in lui.',
        'L\'amore biblico non è solo un sentimento, ma un\'azione. Amare significa servire, perdonare e sacrificarsi per gli altri.',
        'Cristo ci ha mostrato l\'amore perfetto dando la sua vita per noi. Siamo chiamati ad amarci gli uni gli altri come Lui ci ha amati.'
      ],
      en: [
        'Love is the greatest commandment. God is love, and whoever abides in love abides in God, and God abides in him.',
        'Biblical love is not just a feeling, but an action. To love means to serve, forgive, and sacrifice for others.',
        'Christ showed us perfect love by giving His life for us. We are called to love one another as He loved us.'
      ],
      es: [
        'El amor es el mandamiento más grande. Dios es amor, y el que permanece en amor, permanece en Dios, y Dios en él.',
        'El amor bíblico no es solo un sentimiento, sino una acción. Amar significa servir, perdonar y sacrificarse por los demás.',
        'Cristo nos mostró el amor perfecto al dar su vida por nosotros. Estamos llamados a amarnos unos a otros como Él nos amó.'
      ],
      pt: [
        'O amor é o maior mandamento. Deus é amor, e quem permanece no amor permanece em Deus, e Deus nele.',
        'O amor bíblico não é apenas um sentimento, mas uma ação. Amar significa servir, perdoar e sacrificar-se pelos outros.',
        'Cristo nos mostrou o amor perfeito ao dar sua vida por nós. Somos chamados a nos amar uns aos outros como Ele nos amou.'
      ],
      fr: [
        'L\'amour est le plus grand commandement. Dieu est amour, et celui qui demeure dans l\'amour demeure en Dieu, et Dieu demeure en lui.',
        'L\'amour biblique n\'est pas seulement un sentiment, mais une action. Aimer signifie servir, pardonner et se sacrifier pour les autres.',
        'Christ nous a montré l\'amour parfait en donnant sa vie pour nous. Nous sommes appelés à nous aimer les uns les autres comme il nous a aimés.'
      ]
    },
    verses: {
      it: [
        { text: 'Dio è amore; e chi rimane nell\'amore rimane in Dio e Dio rimane in lui.', ref: '1 Giovanni 4:16' },
        { text: 'Questo è il mio comandamento: che vi amiate gli uni gli altri, come io ho amato voi.', ref: 'Giovanni 15:12' }
      ],
      en: [
        { text: 'God is love. Whoever lives in love lives in God, and God in them.', ref: '1 John 4:16' },
        { text: 'My command is this: Love each other as I have loved you.', ref: 'John 15:12' }
      ],
      es: [
        { text: 'Dios es amor, y el que permanece en amor, permanece en Dios, y Dios en él.', ref: '1 Juan 4:16' },
        { text: 'Y este es mi mandamiento: que se amen los unos a los otros, como yo los he amado.', ref: 'Juan 15:12' }
      ],
      pt: [
        { text: 'Deus é amor. Todo aquele que permanece no amor permanece em Deus, e Deus nele.', ref: '1 João 4:16' },
        { text: 'O meu mandamento é este: amem-se uns aos outros como eu os amei.', ref: 'João 15:12' }
      ],
      fr: [
        { text: 'Dieu est amour; et celui qui demeure dans l\'amour demeure en Dieu, et Dieu demeure en lui.', ref: '1 Jean 4:16' },
        { text: 'C\'est ici mon commandement: Aimez-vous les uns les autres, comme je vous ai aimés.', ref: 'Jean 15:12' }
      ]
    }
  },
  {
    id: 'faith',
    name: {
      it: 'Fede',
      en: 'Faith',
      es: 'Fe',
      pt: 'Fé',
      fr: 'Foi'
    },
    icon: '✨',
    responses: {
      it: [
        'La fede è la certezza di cose che si sperano, la dimostrazione di realtà che non si vedono. Senza fede è impossibile piacere a Dio.',
        'La fede non è cieca, ma è fondata sulla Parola di Dio e sulla fedeltà dimostrata da Lui nel corso della storia.',
        'La nostra fede in Cristo ci salva. È attraverso la fede che riceviamo tutte le promesse di Dio e viviamo una vita che Gli piace.'
      ],
      en: [
        'Faith is confidence in what we hope for and assurance about what we do not see. Without faith it is impossible to please God.',
        'Faith is not blind, but is founded on God\'s Word and the faithfulness He has shown throughout history.',
        'Our faith in Christ saves us. It is through faith that we receive all of God\'s promises and live a life pleasing to Him.'
      ],
      es: [
        'La fe es la certeza de lo que se espera, la convicción de lo que no se ve. Sin fe es imposible agradar a Dios.',
        'La fe no es ciega, sino que está fundada en la Palabra de Dios y en la fidelidad que Él ha demostrado a lo largo de la historia.',
        'Nuestra fe en Cristo nos salva. Es a través de la fe que recibimos todas las promesas de Dios y vivimos una vida que le agrada.'
      ],
      pt: [
        'A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos. Sem fé é impossível agradar a Deus.',
        'A fé não é cega, mas é fundamentada na Palavra de Deus e na fidelidade que Ele demonstrou ao longo da história.',
        'Nossa fé em Cristo nos salva. É através da fé que recebemos todas as promessas de Deus e vivemos uma vida que lhe agrada.'
      ],
      fr: [
        'La foi est une ferme assurance des choses qu\'on espère, une démonstration de celles qu\'on ne voit pas. Sans la foi, il est impossible de lui être agréable.',
        'La foi n\'est pas aveugle, mais elle est fondée sur la Parole de Dieu et sur la fidélité qu\'il a démontrée tout au long de l\'histoire.',
        'Notre foi en Christ nous sauve. C\'est par la foi que nous recevons toutes les promesses de Dieu et vivons une vie qui lui plaît.'
      ]
    },
    verses: {
      it: [
        { text: 'Or la fede è certezza di cose che si sperano, dimostrazione di realtà che non si vedono.', ref: 'Ebrei 11:1' },
        { text: 'Infatti è per grazia che siete stati salvati, mediante la fede; e ciò non viene da voi; è il dono di Dio.', ref: 'Efesini 2:8' }
      ],
      en: [
        { text: 'Now faith is confidence in what we hope for and assurance about what we do not see.', ref: 'Hebrews 11:1' },
        { text: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God.', ref: 'Ephesians 2:8' }
      ],
      es: [
        { text: 'Ahora bien, la fe es la garantía de lo que se espera, la certeza de lo que no se ve.', ref: 'Hebreos 11:1' },
        { text: 'Porque por gracia ustedes han sido salvados mediante la fe; esto no procede de ustedes, sino que es el regalo de Dios.', ref: 'Efesios 2:8' }
      ],
      pt: [
        { text: 'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.', ref: 'Hebreus 11:1' },
        { text: 'Pois vocês são salvos pela graça, por meio da fé, e isto não vem de vocês, é dom de Deus.', ref: 'Efésios 2:8' }
      ],
      fr: [
        { text: 'Or la foi est une ferme assurance des choses qu\'on espère, une démonstration de celles qu\'on ne voit pas.', ref: 'Hébreux 11:1' },
        { text: 'Car c\'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c\'est le don de Dieu.', ref: 'Éphésiens 2:8' }
      ]
    }
  },
  {
    id: 'hope',
    name: {
      it: 'Speranza',
      en: 'Hope',
      es: 'Esperanza',
      pt: 'Esperança',
      fr: 'Espérance'
    },
    icon: '🌟',
    responses: {
      it: [
        'La speranza cristiana non è un desiderio incerto, ma una certezza basata sulle promesse di Dio. È l\'ancora della nostra anima.',
        'La nostra speranza è in Cristo e nella Sua resurrezione. Questa speranza non delude perché l\'amore di Dio è stato riversato nei nostri cuori.',
        'Anche nelle difficoltà, manteniamo viva la speranza sapendo che Dio ha preparato per noi un futuro glorioso in Cristo.'
      ],
      en: [
        'Christian hope is not an uncertain wish, but a certainty based on God\'s promises. It is the anchor of our soul.',
        'Our hope is in Christ and His resurrection. This hope does not disappoint because God\'s love has been poured into our hearts.',
        'Even in difficulties, we keep hope alive knowing that God has prepared for us a glorious future in Christ.'
      ],
      es: [
        'La esperanza cristiana no es un deseo incierto, sino una certeza basada en las promesas de Dios. Es el ancla de nuestra alma.',
        'Nuestra esperanza está en Cristo y en Su resurrección. Esta esperanza no decepciona porque el amor de Dios ha sido derramado en nuestros corazones.',
        'Incluso en las dificultades, mantenemos viva la esperanza sabiendo que Dios ha preparado para nosotros un futuro glorioso en Cristo.'
      ],
      pt: [
        'A esperança cristã não é um desejo incerto, mas uma certeza baseada nas promessas de Deus. É a âncora da nossa alma.',
        'Nossa esperança está em Cristo e em Sua ressurreição. Esta esperança não decepciona porque o amor de Deus foi derramado em nossos corações.',
        'Mesmo nas dificuldades, mantemos viva a esperança sabendo que Deus preparou para nós um futuro glorioso em Cristo.'
      ],
      fr: [
        'L\'espérance chrétienne n\'est pas un souhait incertain, mais une certitude basée sur les promesses de Dieu. C\'est l\'ancre de notre âme.',
        'Notre espérance est en Christ et en Sa résurrection. Cette espérance ne trompe point, parce que l\'amour de Dieu est répandu dans nos cœurs.',
        'Même dans les difficultés, nous gardons l\'espérance vivante en sachant que Dieu nous a préparé un avenir glorieux en Christ.'
      ]
    },
    verses: {
      it: [
        { text: 'Questa speranza infatti noi l\'abbiamo come un\'ancora dell\'anima, sicura e ferma.', ref: 'Ebrei 6:19' },
        { text: 'Or la speranza non delude, perché l\'amore di Dio è stato sparso nei nostri cuori mediante lo Spirito Santo che ci è stato dato.', ref: 'Romani 5:5' }
      ],
      en: [
        { text: 'We have this hope as an anchor for the soul, firm and secure.', ref: 'Hebrews 6:19' },
        { text: 'And hope does not put us to shame, because God\'s love has been poured out into our hearts through the Holy Spirit.', ref: 'Romans 5:5' }
      ],
      es: [
        { text: 'Tenemos como firme y segura ancla del alma una esperanza.', ref: 'Hebreos 6:19' },
        { text: 'Y esta esperanza no nos defrauda, porque Dios ha derramado su amor en nuestro corazón por el Espíritu Santo que nos ha dado.', ref: 'Romanos 5:5' }
      ],
      pt: [
        { text: 'Temos esta esperança como âncora da alma, firme e segura.', ref: 'Hebreus 6:19' },
        { text: 'E a esperança não nos decepciona, porque Deus derramou seu amor em nossos corações, por meio do Espírito Santo que ele nos concedeu.', ref: 'Romanos 5:5' }
      ],
      fr: [
        { text: 'Cette espérance, nous la possédons comme une ancre de l\'âme, sûre et solide.', ref: 'Hébreux 6:19' },
        { text: 'Or, l\'espérance ne trompe point, parce que l\'amour de Dieu est répandu dans nos cœurs par le Saint-Esprit qui nous a été donné.', ref: 'Romains 5:5' }
      ]
    }
  }
];

export const chatbotTranslations = {
  it: {
    title: 'Assistente Biblico',
    subtitle: 'Esplora i temi biblici e ricevi risposte basate sulla Scrittura',
    selectTopic: 'Seleziona un tema',
    typeMessage: 'Scrivi la tua domanda...',
    send: 'Invia',
    copy: 'Copia',
    copied: 'Copiato!',
    regenerate: 'Rigenera',
    suggestedQuestions: 'Domande suggerite',
    messagesSent: 'Messaggi inviati',
    chatbotBadge: '💬 Curioso',
    chatbotBadgeDesc: 'Hai inviato 10 messaggi al chatbot',
    back: 'Indietro',
    interactions: 'interazioni'
  },
  en: {
    title: 'Biblical Assistant',
    subtitle: 'Explore biblical themes and receive Scripture-based answers',
    selectTopic: 'Select a theme',
    typeMessage: 'Type your question...',
    send: 'Send',
    copy: 'Copy',
    copied: 'Copied!',
    regenerate: 'Regenerate',
    suggestedQuestions: 'Suggested questions',
    messagesSent: 'Messages sent',
    chatbotBadge: '💬 Curious',
    chatbotBadgeDesc: 'You sent 10 messages to the chatbot',
    back: 'Back',
    interactions: 'interactions'
  },
  es: {
    title: 'Asistente Bíblico',
    subtitle: 'Explora temas bíblicos y recibe respuestas basadas en la Escritura',
    selectTopic: 'Selecciona un tema',
    typeMessage: 'Escribe tu pregunta...',
    send: 'Enviar',
    copy: 'Copiar',
    copied: '¡Copiado!',
    regenerate: 'Regenerar',
    suggestedQuestions: 'Preguntas sugeridas',
    messagesSent: 'Mensajes enviados',
    chatbotBadge: '💬 Curioso',
    chatbotBadgeDesc: 'Has enviado 10 mensajes al chatbot',
    back: 'Atrás',
    interactions: 'interacciones'
  },
  pt: {
    title: 'Assistente Bíblico',
    subtitle: 'Explore temas bíblicos e receba respostas baseadas na Escritura',
    selectTopic: 'Selecione um tema',
    typeMessage: 'Digite sua pergunta...',
    send: 'Enviar',
    copy: 'Copiar',
    copied: 'Copiado!',
    regenerate: 'Regenerar',
    suggestedQuestions: 'Perguntas sugeridas',
    messagesSent: 'Mensagens enviadas',
    chatbotBadge: '💬 Curioso',
    chatbotBadgeDesc: 'Você enviou 10 mensagens ao chatbot',
    back: 'Voltar',
    interactions: 'interações'
  },
  fr: {
    title: 'Assistant Biblique',
    subtitle: 'Explorez les thèmes bibliques et recevez des réponses basées sur l\'Écriture',
    selectTopic: 'Sélectionnez un thème',
    typeMessage: 'Tapez votre question...',
    send: 'Envoyer',
    copy: 'Copier',
    copied: 'Copié !',
    regenerate: 'Régénérer',
    suggestedQuestions: 'Questions suggérées',
    messagesSent: 'Messages envoyés',
    chatbotBadge: '💬 Curieux',
    chatbotBadgeDesc: 'Vous avez envoyé 10 messages au chatbot',
    back: 'Retour',
    interactions: 'interactions'
  }
};

export const suggestedQuestions: Record<string, Record<Language, string[]>> = {
  grace: {
    it: [
      'Come posso sperimentare la grazia di Dio nella mia vita?',
      'Qual è la differenza tra grazia e misericordia?',
      'Cosa significa vivere sotto la grazia?'
    ],
    en: [
      'How can I experience God\'s grace in my life?',
      'What is the difference between grace and mercy?',
      'What does it mean to live under grace?'
    ],
    es: [
      '¿Cómo puedo experimentar la gracia de Dios en mi vida?',
      '¿Cuál es la diferencia entre gracia y misericordia?',
      '¿Qué significa vivir bajo la gracia?'
    ],
    pt: [
      'Como posso experimentar a graça de Deus em minha vida?',
      'Qual é a diferença entre graça e misericórdia?',
      'O que significa viver sob a graça?'
    ],
    fr: [
      'Comment puis-je expérimenter la grâce de Dieu dans ma vie ?',
      'Quelle est la différence entre la grâce et la miséricorde ?',
      'Que signifie vivre sous la grâce ?'
    ]
  },
  mercy: {
    it: [
      'Come posso essere più misericordioso verso gli altri?',
      'Perché Dio è misericordioso?',
      'Cosa dice la Bibbia sul perdono?'
    ],
    en: [
      'How can I be more merciful toward others?',
      'Why is God merciful?',
      'What does the Bible say about forgiveness?'
    ],
    es: [
      '¿Cómo puedo ser más misericordioso con los demás?',
      '¿Por qué Dios es misericordioso?',
      '¿Qué dice la Biblia sobre el perdón?'
    ],
    pt: [
      'Como posso ser mais misericordioso com os outros?',
      'Por que Deus é misericordioso?',
      'O que a Bíblia diz sobre o perdão?'
    ],
    fr: [
      'Comment puis-je être plus miséricordieux envers les autres ?',
      'Pourquoi Dieu est-il miséricordieux ?',
      'Que dit la Bible sur le pardon ?'
    ]
  },
  humility: {
    it: [
      'Come posso diventare più umile?',
      'Perché l\'umiltà è importante per un cristiano?',
      'Come ha dimostrato umiltà Gesù?'
    ],
    en: [
      'How can I become more humble?',
      'Why is humility important for a Christian?',
      'How did Jesus demonstrate humility?'
    ],
    es: [
      '¿Cómo puedo ser más humilde?',
      '¿Por qué es importante la humildad para un cristiano?',
      '¿Cómo demostró humildad Jesús?'
    ],
    pt: [
      'Como posso me tornar mais humilde?',
      'Por que a humildade é importante para um cristão?',
      'Como Jesus demonstrou humildade?'
    ],
    fr: [
      'Comment puis-je devenir plus humble ?',
      'Pourquoi l\'humilité est-elle importante pour un chrétien ?',
      'Comment Jésus a-t-il démontré l\'humilité ?'
    ]
  },
  wisdom: {
    it: [
      'Come posso crescere in saggezza?',
      'Dove trovo la saggezza secondo la Bibbia?',
      'Qual è la differenza tra saggezza e conoscenza?'
    ],
    en: [
      'How can I grow in wisdom?',
      'Where do I find wisdom according to the Bible?',
      'What is the difference between wisdom and knowledge?'
    ],
    es: [
      '¿Cómo puedo crecer en sabiduría?',
      '¿Dónde encuentro la sabiduría según la Biblia?',
      '¿Cuál es la diferencia entre sabiduría y conocimiento?'
    ],
    pt: [
      'Como posso crescer em sabedoria?',
      'Onde encontro a sabedoria segundo a Bíblia?',
      'Qual é a diferença entre sabedoria e conhecimento?'
    ],
    fr: [
      'Comment puis-je grandir en sagesse ?',
      'Où trouve-t-on la sagesse selon la Bible ?',
      'Quelle est la différence entre la sagesse et la connaissance ?'
    ]
  },
  courage: {
    it: [
      'Come posso avere più coraggio nella mia vita?',
      'La Bibbia parla della paura?',
      'Come posso superare le mie paure con la fede?'
    ],
    en: [
      'How can I have more courage in my life?',
      'Does the Bible talk about fear?',
      'How can I overcome my fears with faith?'
    ],
    es: [
      '¿Cómo puedo tener más coraje en mi vida?',
      '¿La Biblia habla del miedo?',
      '¿Cómo puedo superar mis miedos con la fe?'
    ],
    pt: [
      'Como posso ter mais coragem em minha vida?',
      'A Bíblia fala sobre o medo?',
      'Como posso superar meus medos com a fé?'
    ],
    fr: [
      'Comment puis-je avoir plus de courage dans ma vie ?',
      'La Bible parle-t-elle de la peur ?',
      'Comment puis-je surmonter mes peurs avec la foi ?'
    ]
  },
  love: {
    it: [
      'Cosa significa amare come Cristo?',
      'Come posso amare meglio il mio prossimo?',
      'Qual è la definizione biblica dell\'amore?'
    ],
    en: [
      'What does it mean to love like Christ?',
      'How can I better love my neighbor?',
      'What is the biblical definition of love?'
    ],
    es: [
      '¿Qué significa amar como Cristo?',
      '¿Cómo puedo amar mejor a mi prójimo?',
      '¿Cuál es la definición bíblica del amor?'
    ],
    pt: [
      'O que significa amar como Cristo?',
      'Como posso amar melhor o meu próximo?',
      'Qual é a definição bíblica de amor?'
    ],
    fr: [
      'Que signifie aimer comme Christ ?',
      'Comment puis-je mieux aimer mon prochain ?',
      'Quelle est la définition biblique de l\'amour ?'
    ]
  },
  faith: {
    it: [
      'Come posso rafforzare la mia fede?',
      'Cosa significa avere fede in Dio?',
      'Come posso mantenere la fede nelle difficoltà?'
    ],
    en: [
      'How can I strengthen my faith?',
      'What does it mean to have faith in God?',
      'How can I maintain faith in difficulties?'
    ],
    es: [
      '¿Cómo puedo fortalecer mi fe?',
      '¿Qué significa tener fe en Dios?',
      '¿Cómo puedo mantener la fe en las dificultades?'
    ],
    pt: [
      'Como posso fortalecer minha fé?',
      'O que significa ter fé em Deus?',
      'Como posso manter a fé nas dificuldades?'
    ],
    fr: [
      'Comment puis-je renforcer ma foi ?',
      'Que signifie avoir la foi en Dieu ?',
      'Comment puis-je maintenir la foi dans les difficultés ?'
    ]
  },
  hope: {
    it: [
      'Dove trovo speranza quando tutto sembra perduto?',
      'Qual è la fonte della speranza cristiana?',
      'Come posso condividere la speranza con gli altri?'
    ],
    en: [
      'Where do I find hope when all seems lost?',
      'What is the source of Christian hope?',
      'How can I share hope with others?'
    ],
    es: [
      '¿Dónde encuentro esperanza cuando todo parece perdido?',
      '¿Cuál es la fuente de la esperanza cristiana?',
      '¿Cómo puedo compartir la esperanza con otros?'
    ],
    pt: [
      'Onde encontro esperança quando tudo parece perdido?',
      'Qual é a fonte da esperança cristã?',
      'Como posso compartilhar a esperança com os outros?'
    ],
    fr: [
      'Où trouver de l\'espoir quand tout semble perdu ?',
      'Quelle est la source de l\'espérance chrétienne ?',
      'Comment puis-je partager l\'espoir avec les autres ?'
    ]
  }
};