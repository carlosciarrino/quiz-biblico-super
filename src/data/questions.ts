import { Question, BlockName } from '../types/quiz';

export const questions: Question[] = [
  // Gospels (Vangeli)
  {
    id: 1,
    translations: {
      it: {
        question: "Chi battezzò Gesù nel fiume Giordano?",
        options: ["Giovanni Battista", "Pietro", "Andrea", "Giacomo"]
      },
      en: {
        question: "Who baptized Jesus in the Jordan River?",
        options: ["John the Baptist", "Peter", "Andrew", "James"]
      },
      es: {
        question: "¿Quién bautizó a Jesús en el río Jordán?",
        options: ["Juan el Bautista", "Pedro", "Andrés", "Santiago"]
      },
      pt: {
        question: "Quem batizou Jesus no rio Jordão?",
        options: ["João Batista", "Pedro", "André", "Tiago"]
      },
      fr: {
        question: "Qui a baptisé Jésus dans le Jourdain?",
        options: ["Jean le Baptiste", "Pierre", "André", "Jacques"]
      }
    },
    correctAnswer: 0,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Matteo 3:13-17"
  },
  {
    id: 2,
    translations: {
      it: {
        question: "Quanti apostoli scelse Gesù?",
        options: ["10", "11", "12", "13"]
      },
      en: {
        question: "How many apostles did Jesus choose?",
        options: ["10", "11", "12", "13"]
      },
      es: {
        question: "¿Cuántos apóstoles eligió Jesús?",
        options: ["10", "11", "12", "13"]
      },
      pt: {
        question: "Quantos apóstolos Jesus escolheu?",
        options: ["10", "11", "12", "13"]
      },
      fr: {
        question: "Combien d'apôtres Jésus a-t-il choisis?",
        options: ["10", "11", "12", "13"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Marco 3:13-19"
  },
  {
    id: 3,
    translations: {
      it: {
        question: "Quale miracolo compì Gesù alle nozze di Cana?",
        options: ["Moltiplicò i pani", "Trasformò l'acqua in vino", "Guarì un cieco", "Risuscitò Lazzaro"]
      },
      en: {
        question: "What miracle did Jesus perform at the wedding in Cana?",
        options: ["Multiplied the bread", "Turned water into wine", "Healed a blind man", "Raised Lazarus"]
      },
      es: {
        question: "¿Qué milagro realizó Jesús en las bodas de Caná?",
        options: ["Multiplicó los panes", "Transformó el agua en vino", "Sanó a un ciego", "Resucitó a Lázaro"]
      },
      pt: {
        question: "Que milagre Jesus realizou nas bodas de Caná?",
        options: ["Multiplicou os pães", "Transformou água em vinho", "Curou um cego", "Ressuscitou Lázaro"]
      },
      fr: {
        question: "Quel miracle Jésus a-t-il accompli aux noces de Cana?",
        options: ["Multiplié les pains", "Transformé l'eau en vin", "Guéri un aveugle", "Ressuscité Lazare"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Giovanni 2:1-11"
  },
  {
    id: 4,
    translations: {
      it: {
        question: "Chi tradì Gesù con un bacio?",
        options: ["Pietro", "Giuda Iscariota", "Tommaso", "Matteo"]
      },
      en: {
        question: "Who betrayed Jesus with a kiss?",
        options: ["Peter", "Judas Iscariot", "Thomas", "Matthew"]
      },
      es: {
        question: "¿Quién traicionó a Jesús con un beso?",
        options: ["Pedro", "Judas Iscariote", "Tomás", "Mateo"]
      },
      pt: {
        question: "Quem traiu Jesus com um beijo?",
        options: ["Pedro", "Judas Iscariotes", "Tomé", "Mateus"]
      },
      fr: {
        question: "Qui a trahi Jésus par un baiser?",
        options: ["Pierre", "Judas Iscariote", "Thomas", "Matthieu"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Matteo 26:47-50"
  },
  {
    id: 5,
    translations: {
      it: {
        question: "Su quale monte Gesù pronunciò il Discorso della Montagna?",
        options: ["Monte degli Ulivi", "Monte Sinai", "Monte delle Beatitudini", "Monte Tabor"]
      },
      en: {
        question: "On which mountain did Jesus deliver the Sermon on the Mount?",
        options: ["Mount of Olives", "Mount Sinai", "Mount of Beatitudes", "Mount Tabor"]
      },
      es: {
        question: "¿En qué monte pronunció Jesús el Sermón del Monte?",
        options: ["Monte de los Olivos", "Monte Sinaí", "Monte de las Bienaventuranzas", "Monte Tabor"]
      },
      pt: {
        question: "Em qual monte Jesus proferiu o Sermão da Montanha?",
        options: ["Monte das Oliveiras", "Monte Sinai", "Monte das Bem-aventuranças", "Monte Tabor"]
      },
      fr: {
        question: "Sur quelle montagne Jésus a-t-il prononcé le Sermon sur la Montagne?",
        options: ["Mont des Oliviers", "Mont Sinaï", "Mont des Béatitudes", "Mont Tabor"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Matteo 5:1"
  },
  {
    id: 6,
    translations: {
      it: {
        question: "Chi negò Gesù tre volte prima del canto del gallo?",
        options: ["Giovanni", "Pietro", "Giacomo", "Andrea"]
      },
      en: {
        question: "Who denied Jesus three times before the rooster crowed?",
        options: ["John", "Peter", "James", "Andrew"]
      },
      es: {
        question: "¿Quién negó a Jesús tres veces antes del canto del gallo?",
        options: ["Juan", "Pedro", "Santiago", "Andrés"]
      },
      pt: {
        question: "Quem negou Jesus três vezes antes do canto do galo?",
        options: ["João", "Pedro", "Tiago", "André"]
      },
      fr: {
        question: "Qui a renié Jésus trois fois avant le chant du coq?",
        options: ["Jean", "Pierre", "Jacques", "André"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Matteo 26:69-75"
  },
  {
    id: 7,
    translations: {
      it: {
        question: "Quale apostolo era un esattore delle tasse?",
        options: ["Matteo", "Luca", "Marco", "Giovanni"]
      },
      en: {
        question: "Which apostle was a tax collector?",
        options: ["Matthew", "Luke", "Mark", "John"]
      },
      es: {
        question: "¿Qué apóstol era recaudador de impuestos?",
        options: ["Mateo", "Lucas", "Marcos", "Juan"]
      },
      pt: {
        question: "Qual apóstolo era coletor de impostos?",
        options: ["Mateus", "Lucas", "Marcos", "João"]
      },
      fr: {
        question: "Quel apôtre était collecteur d'impôts?",
        options: ["Matthieu", "Luc", "Marc", "Jean"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Matteo 9:9"
  },
  {
    id: 8,
    translations: {
      it: {
        question: "Quanti giorni Gesù digiunò nel deserto?",
        options: ["30", "40", "50", "60"]
      },
      en: {
        question: "How many days did Jesus fast in the desert?",
        options: ["30", "40", "50", "60"]
      },
      es: {
        question: "¿Cuántos días ayunó Jesús en el desierto?",
        options: ["30", "40", "50", "60"]
      },
      pt: {
        question: "Quantos dias Jesus jejuou no deserto?",
        options: ["30", "40", "50", "60"]
      },
      fr: {
        question: "Combien de jours Jésus a-t-il jeûné dans le désert?",
        options: ["30", "40", "50", "60"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Matteo 4:2"
  },
  {
    id: 9,
    translations: {
      it: {
        question: "Quale parabola racconta di un figlio che torna a casa dopo aver sprecato la sua eredità?",
        options: ["Il Buon Samaritano", "Il Figliol Prodigo", "Il Seminatore", "Le Dieci Vergini"]
      },
      en: {
        question: "Which parable tells of a son who returns home after wasting his inheritance?",
        options: ["The Good Samaritan", "The Prodigal Son", "The Sower", "The Ten Virgins"]
      },
      es: {
        question: "¿Qué parábola cuenta de un hijo que regresa a casa después de desperdiciar su herencia?",
        options: ["El Buen Samaritano", "El Hijo Pródigo", "El Sembrador", "Las Diez Vírgenes"]
      },
      pt: {
        question: "Qual parábola conta sobre um filho que volta para casa depois de desperdiçar sua herança?",
        options: ["O Bom Samaritano", "O Filho Pródigo", "O Semeador", "As Dez Virgens"]
      },
      fr: {
        question: "Quelle parabole raconte l'histoire d'un fils qui rentre chez lui après avoir gaspillé son héritage?",
        options: ["Le Bon Samaritain", "Le Fils Prodigue", "Le Semeur", "Les Dix Vierges"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Luca 15:11-32"
  },
  {
    id: 10,
    translations: {
      it: {
        question: "Dove nacque Gesù?",
        options: ["Nazaret", "Betlemme", "Gerusalemme", "Cafarnao"]
      },
      en: {
        question: "Where was Jesus born?",
        options: ["Nazareth", "Bethlehem", "Jerusalem", "Capernaum"]
      },
      es: {
        question: "¿Dónde nació Jesús?",
        options: ["Nazaret", "Belén", "Jerusalén", "Cafarnaún"]
      },
      pt: {
        question: "Onde Jesus nasceu?",
        options: ["Nazaré", "Belém", "Jerusalém", "Cafarnaum"]
      },
      fr: {
        question: "Où Jésus est-il né?",
        options: ["Nazareth", "Bethléem", "Jérusalem", "Capharnaüm"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Matteo 2:1"
  },
  {
    id: 11,
    translations: {
      it: {
        question: "Chi fu il primo apostolo chiamato da Gesù?",
        options: ["Pietro", "Giovanni", "Andrea", "Giacomo"]
      },
      en: {
        question: "Who was the first apostle called by Jesus?",
        options: ["Peter", "John", "Andrew", "James"]
      },
      es: {
        question: "¿Quién fue el primer apóstol llamado por Jesús?",
        options: ["Pedro", "Juan", "Andrés", "Santiago"]
      },
      pt: {
        question: "Quem foi o primeiro apóstolo chamado por Jesus?",
        options: ["Pedro", "João", "André", "Tiago"]
      },
      fr: {
        question: "Qui fut le premier apôtre appelé par Jésus?",
        options: ["Pierre", "Jean", "André", "Jacques"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Giovanni 1:40-42"
  },
  {
    id: 12,
    translations: {
      it: {
        question: "Quale discepolo dubitò della resurrezione di Gesù?",
        options: ["Pietro", "Tommaso", "Filippo", "Bartolomeo"]
      },
      en: {
        question: "Which disciple doubted Jesus' resurrection?",
        options: ["Peter", "Thomas", "Philip", "Bartholomew"]
      },
      es: {
        question: "¿Qué discípulo dudó de la resurrección de Jesús?",
        options: ["Pedro", "Tomás", "Felipe", "Bartolomé"]
      },
      pt: {
        question: "Qual discípulo duvidou da ressurreição de Jesus?",
        options: ["Pedro", "Tomé", "Filipe", "Bartolomeu"]
      },
      fr: {
        question: "Quel disciple a douté de la résurrection de Jésus?",
        options: ["Pierre", "Thomas", "Philippe", "Barthélemy"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Giovanni 20:24-29"
  },
  {
    id: 13,
    translations: {
      it: {
        question: "Quanti pani e pesci furono usati per sfamare la moltitudine?",
        options: ["3 pani e 2 pesci", "5 pani e 2 pesci", "7 pani e 3 pesci", "5 pani e 5 pesci"]
      },
      en: {
        question: "How many loaves and fishes were used to feed the multitude?",
        options: ["3 loaves and 2 fish", "5 loaves and 2 fish", "7 loaves and 3 fish", "5 loaves and 5 fish"]
      },
      es: {
        question: "¿Cuántos panes y peces se usaron para alimentar a la multitud?",
        options: ["3 panes y 2 peces", "5 panes y 2 peces", "7 panes y 3 peces", "5 panes y 5 peces"]
      },
      pt: {
        question: "Quantos pães e peixes foram usados para alimentar a multidão?",
        options: ["3 pães e 2 peixes", "5 pães e 2 peixes", "7 pães e 3 peixes", "5 pães e 5 peixes"]
      },
      fr: {
        question: "Combien de pains et de poissons ont été utilisés pour nourrir la multitude?",
        options: ["3 pains et 2 poissons", "5 pains et 2 poissons", "7 pains et 3 poissons", "5 pains et 5 poissons"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Giovanni 6:9"
  },
  {
    id: 14,
    translations: {
      it: {
        question: "Quale Maria unse i piedi di Gesù con olio profumato?",
        options: ["Maria di Nazaret", "Maria Maddalena", "Maria di Betania", "Maria madre di Giacomo"]
      },
      en: {
        question: "Which Mary anointed Jesus' feet with perfume?",
        options: ["Mary of Nazareth", "Mary Magdalene", "Mary of Bethany", "Mary mother of James"]
      },
      es: {
        question: "¿Qué María ungió los pies de Jesús con perfume?",
        options: ["María de Nazaret", "María Magdalena", "María de Betania", "María madre de Santiago"]
      },
      pt: {
        question: "Qual Maria ungiu os pés de Jesus com perfume?",
        options: ["Maria de Nazaré", "Maria Madalena", "Maria de Betânia", "Maria mãe de Tiago"]
      },
      fr: {
        question: "Quelle Marie a oint les pieds de Jésus avec du parfum?",
        options: ["Marie de Nazareth", "Marie-Madeleine", "Marie de Béthanie", "Marie mère de Jacques"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Vangeli",
    reference: "Giovanni 12:3"
  },
  {
    id: 15,
    translations: {
      it: {
        question: "Chi scrisse il vangelo rivolto principalmente ai gentili?",
        options: ["Matteo", "Marco", "Luca", "Giovanni"]
      },
      en: {
        question: "Who wrote the gospel primarily addressed to Gentiles?",
        options: ["Matthew", "Mark", "Luke", "John"]
      },
      es: {
        question: "¿Quién escribió el evangelio dirigido principalmente a los gentiles?",
        options: ["Mateo", "Marcos", "Lucas", "Juan"]
      },
      pt: {
        question: "Quem escreveu o evangelho dirigido principalmente aos gentios?",
        options: ["Mateus", "Marcos", "Lucas", "João"]
      },
      fr: {
        question: "Qui a écrit l'évangile principalement adressé aux gentils?",
        options: ["Matthieu", "Marc", "Luc", "Jean"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Vangeli",
    reference: "Luca 1:3-4"
  },
  {
    id: 16,
    translations: {
      it: {
        question: "Quale Giovanni scrisse l'Apocalisse?",
        options: ["Giovanni Battista", "Giovanni apostolo", "Giovanni Marco", "Giovanni di Gerusalemme"]
      },
      en: {
        question: "Which John wrote the Book of Revelation?",
        options: ["John the Baptist", "John the Apostle", "John Mark", "John of Jerusalem"]
      },
      es: {
        question: "¿Qué Juan escribió el Apocalipsis?",
        options: ["Juan el Bautista", "Juan el Apóstol", "Juan Marcos", "Juan de Jerusalén"]
      },
      pt: {
        question: "Qual João escreveu o Apocalipse?",
        options: ["João Batista", "João Apóstolo", "João Marcos", "João de Jerusalém"]
      },
      fr: {
        question: "Quel Jean a écrit l'Apocalypse?",
        options: ["Jean le Baptiste", "Jean l'Apôtre", "Jean-Marc", "Jean de Jérusalem"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Apocalisse 1:1"
  },
  {
    id: 17,
    translations: {
      it: {
        question: "Chi era il sommo sacerdote quando Gesù fu processato?",
        options: ["Anna", "Caifa", "Anania", "Simone"]
      },
      en: {
        question: "Who was the high priest when Jesus was tried?",
        options: ["Annas", "Caiaphas", "Ananias", "Simon"]
      },
      es: {
        question: "¿Quién era el sumo sacerdote cuando Jesús fue juzgado?",
        options: ["Anás", "Caifás", "Ananías", "Simón"]
      },
      pt: {
        question: "Quem era o sumo sacerdote quando Jesus foi julgado?",
        options: ["Anás", "Caifás", "Ananias", "Simão"]
      },
      fr: {
        question: "Qui était le grand prêtre lorsque Jésus a été jugé?",
        options: ["Anne", "Caïphe", "Ananie", "Simon"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Vangeli",
    reference: "Matteo 26:57"
  },
  {
    id: 18,
    translations: {
      it: {
        question: "Quale governatore romano condannò Gesù alla crocifissione?",
        options: ["Erode", "Pilato", "Cesare", "Tiberio"]
      },
      en: {
        question: "Which Roman governor condemned Jesus to crucifixion?",
        options: ["Herod", "Pilate", "Caesar", "Tiberius"]
      },
      es: {
        question: "¿Qué gobernador romano condenó a Jesús a la crucifixión?",
        options: ["Herodes", "Pilato", "César", "Tiberio"]
      },
      pt: {
        question: "Qual governador romano condenou Jesus à crucificação?",
        options: ["Herodes", "Pilatos", "César", "Tibério"]
      },
      fr: {
        question: "Quel gouverneur romain a condamné Jésus à la crucifixion?",
        options: ["Hérode", "Pilate", "César", "Tibère"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Vangeli",
    reference: "Matteo 27:26"
  },
  {
    id: 19,
    translations: {
      it: {
        question: "Chi aiutò Gesù a portare la croce?",
        options: ["Giuseppe d'Arimatea", "Nicodemo", "Simone di Cirene", "Giovanni"]
      },
      en: {
        question: "Who helped Jesus carry the cross?",
        options: ["Joseph of Arimathea", "Nicodemus", "Simon of Cyrene", "John"]
      },
      es: {
        question: "¿Quién ayudó a Jesús a llevar la cruz?",
        options: ["José de Arimatea", "Nicodemo", "Simón de Cirene", "Juan"]
      },
      pt: {
        question: "Quem ajudou Jesus a carregar a cruz?",
        options: ["José de Arimateia", "Nicodemos", "Simão de Cirene", "João"]
      },
      fr: {
        question: "Qui a aidé Jésus à porter la croix?",
        options: ["Joseph d'Arimathie", "Nicodème", "Simon de Cyrène", "Jean"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Luca 23:26"
  },
  {
    id: 20,
    translations: {
      it: {
        question: "Quante vergini sagge c'erano nella parabola delle dieci vergini?",
        options: ["3", "4", "5", "6"]
      },
      en: {
        question: "How many wise virgins were there in the parable of the ten virgins?",
        options: ["3", "4", "5", "6"]
      },
      es: {
        question: "¿Cuántas vírgenes prudentes había en la parábola de las diez vírgenes?",
        options: ["3", "4", "5", "6"]
      },
      pt: {
        question: "Quantas virgens prudentes havia na parábola das dez virgens?",
        options: ["3", "4", "5", "6"]
      },
      fr: {
        question: "Combien de vierges sages y avait-il dans la parabole des dix vierges?",
        options: ["3", "4", "5", "6"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Vangeli",
    reference: "Matteo 25:2"
  },

  // Acts of the Apostles (Atti degli Apostoli)
  {
    id: 21,
    translations: {
      it: {
        question: "Chi fu il primo martire cristiano?",
        options: ["Pietro", "Paolo", "Stefano", "Giacomo"]
      },
      en: {
        question: "Who was the first Christian martyr?",
        options: ["Peter", "Paul", "Stephen", "James"]
      },
      es: {
        question: "¿Quién fue el primer mártir cristiano?",
        options: ["Pedro", "Pablo", "Esteban", "Santiago"]
      },
      pt: {
        question: "Quem foi o primeiro mártir cristão?",
        options: ["Pedro", "Paulo", "Estêvão", "Tiago"]
      },
      fr: {
        question: "Qui fut le premier martyr chrétien?",
        options: ["Pierre", "Paul", "Étienne", "Jacques"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Atti degli Apostoli",
    reference: "Atti 7:59-60"
  },
  {
    id: 22,
    translations: {
      it: {
        question: "Quale apostolo fu liberato miracolosamente dalla prigione?",
        options: ["Paolo", "Pietro", "Giovanni", "Andrea"]
      },
      en: {
        question: "Which apostle was miraculously freed from prison?",
        options: ["Paul", "Peter", "John", "Andrew"]
      },
      es: {
        question: "¿Qué apóstol fue liberado milagrosamente de la prisión?",
        options: ["Pablo", "Pedro", "Juan", "Andrés"]
      },
      pt: {
        question: "Qual apóstolo foi milagrosamente libertado da prisão?",
        options: ["Paulo", "Pedro", "João", "André"]
      },
      fr: {
        question: "Quel apôtre a été miraculeusement libéré de prison?",
        options: ["Paul", "Pierre", "Jean", "André"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 12:6-11"
  },
  {
    id: 23,
    translations: {
      it: {
        question: "Chi era Saulo di Tarso prima della sua conversione?",
        options: ["Un pescatore", "Un persecutore dei cristiani", "Un fariseo", "Un esattore delle tasse"]
      },
      en: {
        question: "Who was Saul of Tarsus before his conversion?",
        options: ["A fisherman", "A persecutor of Christians", "A Pharisee", "A tax collector"]
      },
      es: {
        question: "¿Quién era Saulo de Tarso antes de su conversión?",
        options: ["Un pescador", "Un perseguidor de cristianos", "Un fariseo", "Un recaudador de impuestos"]
      },
      pt: {
        question: "Quem era Saulo de Tarso antes de sua conversão?",
        options: ["Um pescador", "Um perseguidor de cristãos", "Um fariseu", "Um coletor de impostos"]
      },
      fr: {
        question: "Qui était Saul de Tarse avant sa conversion?",
        options: ["Un pêcheur", "Un persécuteur des chrétiens", "Un pharisien", "Un collecteur d'impôts"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Atti degli Apostoli",
    reference: "Atti 9:1-2"
  },
  {
    id: 24,
    translations: {
      it: {
        question: "Dove fu fondata la prima chiesa dei gentili?",
        options: ["Gerusalemme", "Roma", "Antiochia", "Efeso"]
      },
      en: {
        question: "Where was the first Gentile church founded?",
        options: ["Jerusalem", "Rome", "Antioch", "Ephesus"]
      },
      es: {
        question: "¿Dónde se fundó la primera iglesia de gentiles?",
        options: ["Jerusalén", "Roma", "Antioquía", "Éfeso"]
      },
      pt: {
        question: "Onde foi fundada a primeira igreja de gentios?",
        options: ["Jerusalém", "Roma", "Antioquia", "Éfeso"]
      },
      fr: {
        question: "Où a été fondée la première église des gentils?",
        options: ["Jérusalem", "Rome", "Antioche", "Éphèse"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 11:19-21"
  },
  {
    id: 25,
    translations: {
      it: {
        question: "Chi accompagnò Paolo nel suo primo viaggio missionario?",
        options: ["Pietro", "Barnaba", "Timoteo", "Luca"]
      },
      en: {
        question: "Who accompanied Paul on his first missionary journey?",
        options: ["Peter", "Barnabas", "Timothy", "Luke"]
      },
      es: {
        question: "¿Quién acompañó a Pablo en su primer viaje misionero?",
        options: ["Pedro", "Bernabé", "Timoteo", "Lucas"]
      },
      pt: {
        question: "Quem acompanhou Paulo em sua primeira viagem missionária?",
        options: ["Pedro", "Barnabé", "Timóteo", "Lucas"]
      },
      fr: {
        question: "Qui a accompagné Paul lors de son premier voyage missionnaire?",
        options: ["Pierre", "Barnabé", "Timothée", "Luc"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 13:2-3"
  },
  {
    id: 26,
    translations: {
      it: {
        question: "Quale diacono predicò in Samaria?",
        options: ["Stefano", "Filippo", "Nicola", "Timone"]
      },
      en: {
        question: "Which deacon preached in Samaria?",
        options: ["Stephen", "Philip", "Nicholas", "Timon"]
      },
      es: {
        question: "¿Qué diácono predicó en Samaria?",
        options: ["Esteban", "Felipe", "Nicolás", "Timón"]
      },
      pt: {
        question: "Qual diácono pregou em Samaria?",
        options: ["Estêvão", "Filipe", "Nicolau", "Timão"]
      },
      fr: {
        question: "Quel diacre a prêché en Samarie?",
        options: ["Étienne", "Philippe", "Nicolas", "Timon"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 8:5"
  },
  {
    id: 27,
    translations: {
      it: {
        question: "Chi battezzò l'eunuco etiope?",
        options: ["Pietro", "Paolo", "Filippo", "Barnaba"]
      },
      en: {
        question: "Who baptized the Ethiopian eunuch?",
        options: ["Peter", "Paul", "Philip", "Barnabas"]
      },
      es: {
        question: "¿Quién bautizó al eunuco etíope?",
        options: ["Pedro", "Pablo", "Felipe", "Bernabé"]
      },
      pt: {
        question: "Quem batizou o eunuco etíope?",
        options: ["Pedro", "Paulo", "Filipe", "Barnabé"]
      },
      fr: {
        question: "Qui a baptisé l'eunuque éthiopien?",
        options: ["Pierre", "Paul", "Philippe", "Barnabé"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 8:38"
  },
  {
    id: 28,
    translations: {
      it: {
        question: "Quale città fu colpita da un terremoto mentre Paolo e Sila pregavano in prigione?",
        options: ["Corinto", "Filippi", "Efeso", "Tessalonica"]
      },
      en: {
        question: "Which city was struck by an earthquake while Paul and Silas prayed in prison?",
        options: ["Corinth", "Philippi", "Ephesus", "Thessalonica"]
      },
      es: {
        question: "¿Qué ciudad fue golpeada por un terremoto mientras Pablo y Silas oraban en la prisión?",
        options: ["Corinto", "Filipos", "Éfeso", "Tesalónica"]
      },
      pt: {
        question: "Qual cidade foi atingida por um terremoto enquanto Paulo e Silas oravam na prisão?",
        options: ["Corinto", "Filipos", "Éfeso", "Tessalônica"]
      },
      fr: {
        question: "Quelle ville a été frappée par un tremblement de terre pendant que Paul et Silas priaient en prison?",
        options: ["Corinthe", "Philippes", "Éphèse", "Thessalonique"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 16:25-26"
  },
  {
    id: 29,
    translations: {
      it: {
        question: "Chi risuscitò dalla morte dopo essere caduto da una finestra durante un sermone di Paolo?",
        options: ["Eutychion", "Dorcas", "Lazzaro", "Timoteo"]
      },
      en: {
        question: "Who was raised from the dead after falling from a window during Paul's sermon?",
        options: ["Eutychus", "Dorcas", "Lazarus", "Timothy"]
      },
      es: {
        question: "¿Quién resucitó de entre los muertos después de caer de una ventana durante un sermón de Pablo?",
        options: ["Eutico", "Dorcas", "Lázaro", "Timoteo"]
      },
      pt: {
        question: "Quem ressuscitou dos mortos depois de cair de uma janela durante um sermão de Paulo?",
        options: ["Êutico", "Dorcas", "Lázaro", "Timóteo"]
      },
      fr: {
        question: "Qui a été ressuscité d'entre les morts après être tombé d'une fenêtre pendant un sermon de Paul?",
        options: ["Eutyche", "Dorcas", "Lazare", "Timothée"]
      }
    },
    correctAnswer: 0,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 20:9-12"
  },
  {
    id: 30,
    translations: {
      it: {
        question: "Quale re Erode fece decapitare Giacomo fratello di Giovanni?",
        options: ["Erode il Grande", "Erode Antipa", "Erode Agrippa I", "Erode Agrippa II"]
      },
      en: {
        question: "Which King Herod had James, brother of John, beheaded?",
        options: ["Herod the Great", "Herod Antipas", "Herod Agrippa I", "Herod Agrippa II"]
      },
      es: {
        question: "¿Qué rey Herodes hizo decapitar a Santiago, hermano de Juan?",
        options: ["Herodes el Grande", "Herodes Antipas", "Herodes Agripa I", "Herodes Agripa II"]
      },
      pt: {
        question: "Qual rei Herodes mandou decapitar Tiago, irmão de João?",
        options: ["Herodes o Grande", "Herodes Antipas", "Herodes Agripa I", "Herodes Agripa II"]
      },
      fr: {
        question: "Quel roi Hérode a fait décapiter Jacques, frère de Jean?",
        options: ["Hérode le Grand", "Hérode Antipas", "Hérode Agrippa I", "Hérode Agrippa II"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 12:1-2"
  },
  {
    id: 31,
    translations: {
      it: {
        question: "Quale apostolo ebbe una visione di un lenzuolo con animali impuri?",
        options: ["Pietro", "Paolo", "Giovanni", "Giacomo"]
      },
      en: {
        question: "Which apostle had a vision of a sheet with unclean animals?",
        options: ["Peter", "Paul", "John", "James"]
      },
      es: {
        question: "¿Qué apóstol tuvo una visión de una sábana con animales impuros?",
        options: ["Pedro", "Pablo", "Juan", "Santiago"]
      },
      pt: {
        question: "Qual apóstolo teve uma visão de um lençol com animais impuros?",
        options: ["Pedro", "Paulo", "João", "Tiago"]
      },
      fr: {
        question: "Quel apôtre a eu une vision d'un drap avec des animaux impurs?",
        options: ["Pierre", "Paul", "Jean", "Jacques"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 10:9-16"
  },
  {
    id: 32,
    translations: {
      it: {
        question: "Quanti diaconi furono scelti per servire le tavole?",
        options: ["5", "7", "10", "12"]
      },
      en: {
        question: "How many deacons were chosen to serve tables?",
        options: ["5", "7", "10", "12"]
      },
      es: {
        question: "¿Cuántos diáconos fueron elegidos para servir las mesas?",
        options: ["5", "7", "10", "12"]
      },
      pt: {
        question: "Quantos diáconos foram escolhidos para servir as mesas?",
        options: ["5", "7", "10", "12"]
      },
      fr: {
        question: "Combien de diacres ont été choisis pour servir les tables?",
        options: ["5", "7", "10", "12"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 6:3"
  },
  {
    id: 33,
    translations: {
      it: {
        question: "Chi vendette un terreno e portò il denaro agli apostoli?",
        options: ["Barnaba", "Anania", "Saffira", "Giuseppe"]
      },
      en: {
        question: "Who sold a field and brought the money to the apostles?",
        options: ["Barnabas", "Ananias", "Sapphira", "Joseph"]
      },
      es: {
        question: "¿Quién vendió un terreno y llevó el dinero a los apóstoles?",
        options: ["Bernabé", "Ananías", "Safira", "José"]
      },
      pt: {
        question: "Quem vendeu um campo e trouxe o dinheiro para os apóstolos?",
        options: ["Barnabé", "Ananias", "Safira", "José"]
      },
      fr: {
        question: "Qui a vendu un champ et apporté l'argent aux apôtres?",
        options: ["Barnabé", "Ananie", "Saphira", "Joseph"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 4:36-37"
  },
  {
    id: 34,
    translations: {
      it: {
        question: "Chi mentì allo Spirito Santo riguardo al prezzo di un terreno?",
        options: ["Simone il mago", "Anania e Saffira", "Giuda Iscariota", "Barnaba"]
      },
      en: {
        question: "Who lied to the Holy Spirit about the price of land?",
        options: ["Simon the sorcerer", "Ananias and Sapphira", "Judas Iscariot", "Barnabas"]
      },
      es: {
        question: "¿Quién mintió al Espíritu Santo sobre el precio de un terreno?",
        options: ["Simón el mago", "Ananías y Safira", "Judas Iscariote", "Bernabé"]
      },
      pt: {
        question: "Quem mentiu ao Espírito Santo sobre o preço de uma terra?",
        options: ["Simão, o mágico", "Ananias e Safira", "Judas Iscariotes", "Barnabé"]
      },
      fr: {
        question: "Qui a menti au Saint-Esprit au sujet du prix d'un terrain?",
        options: ["Simon le magicien", "Ananie et Saphira", "Judas Iscariote", "Barnabé"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Atti degli Apostoli",
    reference: "Atti 5:1-10"
  },
  {
    id: 35,
    translations: {
      it: {
        question: "Quale famoso dottore della legge consigliò di lasciare in pace gli apostoli?",
        options: ["Nicodemo", "Gamaliele", "Caifa", "Giuseppe d'Arimatea"]
      },
      en: {
        question: "Which famous teacher of the law advised to leave the apostles alone?",
        options: ["Nicodemus", "Gamaliel", "Caiaphas", "Joseph of Arimathea"]
      },
      es: {
        question: "¿Qué famoso maestro de la ley aconsejó dejar en paz a los apóstoles?",
        options: ["Nicodemo", "Gamaliel", "Caifás", "José de Arimatea"]
      },
      pt: {
        question: "Qual famoso mestre da lei aconselhou deixar os apóstolos em paz?",
        options: ["Nicodemos", "Gamaliel", "Caifás", "José de Arimateia"]
      },
      fr: {
        question: "Quel célèbre docteur de la loi a conseillé de laisser les apôtres tranquilles?",
        options: ["Nicodème", "Gamaliel", "Caïphe", "Joseph d'Arimathie"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 5:34-39"
  },
  {
    id: 36,
    translations: {
      it: {
        question: "Dove Paolo fu morso da una vipera senza subire danni?",
        options: ["Creta", "Malta", "Cipro", "Rodi"]
      },
      en: {
        question: "Where was Paul bitten by a viper without harm?",
        options: ["Crete", "Malta", "Cyprus", "Rhodes"]
      },
      es: {
        question: "¿Dónde fue mordido Pablo por una víbora sin sufrir daño?",
        options: ["Creta", "Malta", "Chipre", "Rodas"]
      },
      pt: {
        question: "Onde Paulo foi mordido por uma víbora sem sofrer dano?",
        options: ["Creta", "Malta", "Chipre", "Rodes"]
      },
      fr: {
        question: "Où Paul a-t-il été mordu par une vipère sans subir de dommages?",
        options: ["Crète", "Malte", "Chypre", "Rhodes"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 28:3-5"
  },
  {
    id: 37,
    translations: {
      it: {
        question: "Quale fu il primo concilio della Chiesa?",
        options: ["Concilio di Nicea", "Concilio di Gerusalemme", "Concilio di Antiochia", "Concilio di Efeso"]
      },
      en: {
        question: "What was the first council of the Church?",
        options: ["Council of Nicaea", "Council of Jerusalem", "Council of Antioch", "Council of Ephesus"]
      },
      es: {
        question: "¿Cuál fue el primer concilio de la Iglesia?",
        options: ["Concilio de Nicea", "Concilio de Jerusalén", "Concilio de Antioquía", "Concilio de Éfeso"]
      },
      pt: {
        question: "Qual foi o primeiro concílio da Igreja?",
        options: ["Concílio de Niceia", "Concílio de Jerusalém", "Concílio de Antioquia", "Concílio de Éfeso"]
      },
      fr: {
        question: "Quel a été le premier concile de l'Église?",
        options: ["Concile de Nicée", "Concile de Jérusalem", "Concile d'Antioche", "Concile d'Éphèse"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 15:1-6"
  },
  {
    id: 38,
    translations: {
      it: {
        question: "Chi cercò di comprare il dono dello Spirito Santo?",
        options: ["Cornelio", "Simone il mago", "Anania", "Barnaba"]
      },
      en: {
        question: "Who tried to buy the gift of the Holy Spirit?",
        options: ["Cornelius", "Simon the sorcerer", "Ananias", "Barnabas"]
      },
      es: {
        question: "¿Quién intentó comprar el don del Espíritu Santo?",
        options: ["Cornelio", "Simón el mago", "Ananías", "Bernabé"]
      },
      pt: {
        question: "Quem tentou comprar o dom do Espírito Santo?",
        options: ["Cornélio", "Simão, o mágico", "Ananias", "Barnabé"]
      },
      fr: {
        question: "Qui a essayé d'acheter le don du Saint-Esprit?",
        options: ["Corneille", "Simon le magicien", "Ananie", "Barnabé"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Atti degli Apostoli",
    reference: "Atti 8:18-19"
  },
  {
    id: 39,
    translations: {
      it: {
        question: "Quale centurione romano fu il primo gentile convertito?",
        options: ["Giulio", "Cornelio", "Augusto", "Marco"]
      },
      en: {
        question: "Which Roman centurion was the first Gentile convert?",
        options: ["Julius", "Cornelius", "Augustus", "Marcus"]
      },
      es: {
        question: "¿Qué centurión romano fue el primer gentil convertido?",
        options: ["Julio", "Cornelio", "Augusto", "Marco"]
      },
      pt: {
        question: "Qual centurião romano foi o primeiro gentio convertido?",
        options: ["Júlio", "Cornélio", "Augusto", "Marcos"]
      },
      fr: {
        question: "Quel centurion romain fut le premier converti gentil?",
        options: ["Jules", "Corneille", "Auguste", "Marc"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Atti degli Apostoli",
    reference: "Atti 10:1-48"
  },
  {
    id: 40,
    translations: {
      it: {
        question: "Quale profezia di Agabo si avverò riguardo a Paolo?",
        options: ["Sarebbe morto a Roma", "Sarebbe stato imprigionato a Gerusalemme", "Sarebbe tornato a Tarso", "Avrebbe convertito un re"]
      },
      en: {
        question: "Which prophecy of Agabus came true regarding Paul?",
        options: ["He would die in Rome", "He would be imprisoned in Jerusalem", "He would return to Tarsus", "He would convert a king"]
      },
      es: {
        question: "¿Qué profecía de Agabo se cumplió con respecto a Pablo?",
        options: ["Moriría en Roma", "Sería encarcelado en Jerusalén", "Volvería a Tarso", "Convertiría a un rey"]
      },
      pt: {
        question: "Qual profecia de Ágabo se cumpriu em relação a Paulo?",
        options: ["Ele morreria em Roma", "Ele seria preso em Jerusalém", "Ele voltaria para Tarso", "Ele converteria um rei"]
      },
      fr: {
        question: "Quelle prophétie d'Agabus s'est réalisée concernant Paul?",
        options: ["Il mourrait à Rome", "Il serait emprisonné à Jérusalem", "Il retournerait à Tarse", "Il convertirait un roi"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Atti degli Apostoli",
    reference: "Atti 21:10-11"
  },

  // Paul's Letters (Lettere di Paolo)
  {
    id: 41,
    translations: {
      it: {
        question: "Quale lettera contiene il famoso capitolo sull'amore?",
        options: ["Romani", "1 Corinzi", "Efesini", "Filippesi"]
      },
      en: {
        question: "Which letter contains the famous chapter on love?",
        options: ["Romans", "1 Corinthians", "Ephesians", "Philippians"]
      },
      es: {
        question: "¿Qué carta contiene el famoso capítulo sobre el amor?",
        options: ["Romanos", "1 Corintios", "Efesios", "Filipenses"]
      },
      pt: {
        question: "Qual carta contém o famoso capítulo sobre o amor?",
        options: ["Romanos", "1 Coríntios", "Efésios", "Filipenses"]
      },
      fr: {
        question: "Quelle lettre contient le célèbre chapitre sur l'amour?",
        options: ["Romains", "1 Corinthiens", "Éphésiens", "Philippiens"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 13"
  },
  {
    id: 42,
    translations: {
      it: {
        question: "Quale è il frutto dello Spirito secondo Galati?",
        options: ["Fede, speranza, carità", "Amore, gioia, pace...", "Saggezza, intelletto, scienza", "Profezia, guarigione, miracoli"]
      },
      en: {
        question: "What is the fruit of the Spirit according to Galatians?",
        options: ["Faith, hope, charity", "Love, joy, peace...", "Wisdom, understanding, knowledge", "Prophecy, healing, miracles"]
      },
      es: {
        question: "¿Cuál es el fruto del Espíritu según Gálatas?",
        options: ["Fe, esperanza, caridad", "Amor, gozo, paz...", "Sabiduría, entendimiento, ciencia", "Profecía, sanidad, milagros"]
      },
      pt: {
        question: "Qual é o fruto do Espírito segundo Gálatas?",
        options: ["Fé, esperança, caridade", "Amor, alegria, paz...", "Sabedoria, entendimento, ciência", "Profecia, cura, milagres"]
      },
      fr: {
        question: "Quel est le fruit de l'Esprit selon Galates?",
        options: ["Foi, espérance, charité", "Amour, joie, paix...", "Sagesse, intelligence, science", "Prophétie, guérison, miracles"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "Galati 5:22-23"
  },
  {
    id: 43,
    translations: {
      it: {
        question: "Quale lettera fu scritta dalla prigione?",
        options: ["Romani", "1 Tessalonicesi", "Filippesi", "1 Timoteo"]
      },
      en: {
        question: "Which letter was written from prison?",
        options: ["Romans", "1 Thessalonians", "Philippians", "1 Timothy"]
      },
      es: {
        question: "¿Qué carta fue escrita desde la prisión?",
        options: ["Romanos", "1 Tesalonicenses", "Filipenses", "1 Timoteo"]
      },
      pt: {
        question: "Qual carta foi escrita da prisão?",
        options: ["Romanos", "1 Tessalonicenses", "Filipenses", "1 Timóteo"]
      },
      fr: {
        question: "Quelle lettre a été écrite de prison?",
        options: ["Romains", "1 Thessaloniciens", "Philippiens", "1 Timothée"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Filippesi 1:12-14"
  },
  {
    id: 44,
    translations: {
      it: {
        question: "Chi era Timoteo per Paolo?",
        options: ["Un fratello", "Un figlio nella fede", "Un cugino", "Un diacono"]
      },
      en: {
        question: "Who was Timothy to Paul?",
        options: ["A brother", "A son in the faith", "A cousin", "A deacon"]
      },
      es: {
        question: "¿Quién era Timoteo para Pablo?",
        options: ["Un hermano", "Un hijo en la fe", "Un primo", "Un diácono"]
      },
      pt: {
        question: "Quem era Timóteo para Paulo?",
        options: ["Um irmão", "Um filho na fé", "Um primo", "Um diácono"]
      },
      fr: {
        question: "Qui était Timothée pour Paul?",
        options: ["Un frère", "Un fils dans la foi", "Un cousin", "Un diacre"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "1 Timoteo 1:2"
  },
  {
    id: 45,
    translations: {
      it: {
        question: "Quale armatura spirituale descrive Paolo in Efesini?",
        options: ["L'armatura della fede", "L'armatura di Dio", "L'armatura dello Spirito", "L'armatura della salvezza"]
      },
      en: {
        question: "Which spiritual armor does Paul describe in Ephesians?",
        options: ["The armor of faith", "The armor of God", "The armor of the Spirit", "The armor of salvation"]
      },
      es: {
        question: "¿Qué armadura espiritual describe Pablo en Efesios?",
        options: ["La armadura de la fe", "La armadura de Dios", "La armadura del Espíritu", "La armadura de la salvación"]
      },
      pt: {
        question: "Qual armadura espiritual Paulo descreve em Efésios?",
        options: ["A armadura da fé", "A armadura de Deus", "A armadura do Espírito", "A armadura da salvação"]
      },
      fr: {
        question: "Quelle armure spirituelle Paul décrit-il dans Éphésiens?",
        options: ["L'armure de la foi", "L'armure de Dieu", "L'armure de l'Esprit", "L'armure du salut"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Efesini 6:11-17"
  },
  {
    id: 46,
    translations: {
      it: {
        question: "Quale città aveva problemi di divisioni e partiti?",
        options: ["Roma", "Corinto", "Efeso", "Filippi"]
      },
      en: {
        question: "Which city had problems with divisions and factions?",
        options: ["Rome", "Corinth", "Ephesus", "Philippi"]
      },
      es: {
        question: "¿Qué ciudad tenía problemas de divisiones y partidos?",
        options: ["Roma", "Corinto", "Éfeso", "Filipos"]
      },
      pt: {
        question: "Qual cidade tinha problemas de divisões e facções?",
        options: ["Roma", "Corinto", "Éfeso", "Filipos"]
      },
      fr: {
        question: "Quelle ville avait des problèmes de divisions et de factions?",
        options: ["Rome", "Corinthe", "Éphèse", "Philippes"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 1:10-13"
  },
  {
    id: 47,
    translations: {
      it: {
        question: "Quale lettera parla della corsa e del premio?",
        options: ["Romani", "1 Corinzi", "Galati", "Filippesi"]
      },
      en: {
        question: "Which letter talks about the race and the prize?",
        options: ["Romans", "1 Corinthians", "Galatians", "Philippians"]
      },
      es: {
        question: "¿Qué carta habla de la carrera y el premio?",
        options: ["Romanos", "1 Corintios", "Gálatas", "Filipenses"]
      },
      pt: {
        question: "Qual carta fala sobre a corrida e o prêmio?",
        options: ["Romanos", "1 Coríntios", "Gálatas", "Filipenses"]
      },
      fr: {
        question: "Quelle lettre parle de la course et du prix?",
        options: ["Romains", "1 Corinthiens", "Galates", "Philippiens"]
      }
    },
    correctAnswer: 3,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Filippesi 3:13-14"
  },
  {
    id: 48,
    translations: {
      it: {
        question: "Chi era Onesimo nella lettera a Filemone?",
        options: ["Un profeta", "Uno schiavo fuggito", "Un diacono", "Un anziano"]
      },
      en: {
        question: "Who was Onesimus in the letter to Philemon?",
        options: ["A prophet", "A runaway slave", "A deacon", "An elder"]
      },
      es: {
        question: "¿Quién era Onésimo en la carta a Filemón?",
        options: ["Un profeta", "Un esclavo fugitivo", "Un diácono", "Un anciano"]
      },
      pt: {
        question: "Quem era Onésimo na carta a Filemom?",
        options: ["Um profeta", "Um escravo fugitivo", "Um diácono", "Um ancião"]
      },
      fr: {
        question: "Qui était Onésime dans la lettre à Philémon?",
        options: ["Un prophète", "Un esclave en fuite", "Un diacre", "Un ancien"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Lettere di Paolo",
    reference: "Filemone 1:10-16"
  },
  {
    id: 49,
    translations: {
      it: {
        question: "Quale lettera sottolinea l'importanza della fede per la giustificazione?",
        options: ["Romani", "Colossesi", "1 Tessalonicesi", "Tito"]
      },
      en: {
        question: "Which letter emphasizes the importance of faith for justification?",
        options: ["Romans", "Colossians", "1 Thessalonians", "Titus"]
      },
      es: {
        question: "¿Qué carta enfatiza la importancia de la fe para la justificación?",
        options: ["Romanos", "Colosenses", "1 Tesalonicenses", "Tito"]
      },
      pt: {
        question: "Qual carta enfatiza a importância da fé para a justificação?",
        options: ["Romanos", "Colossenses", "1 Tessalonicenses", "Tito"]
      },
      fr: {
        question: "Quelle lettre souligne l'importance de la foi pour la justification?",
        options: ["Romains", "Colossiens", "1 Thessaloniciens", "Tite"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Romani 3:28"
  },
  {
    id: 50,
    translations: {
      it: {
        question: "Quale lettera parla di Cristo come capo della Chiesa?",
        options: ["Galati", "Efesini", "1 Tessalonicesi", "2 Timoteo"]
      },
      en: {
        question: "Which letter speaks of Christ as head of the Church?",
        options: ["Galatians", "Ephesians", "1 Thessalonians", "2 Timothy"]
      },
      es: {
        question: "¿Qué carta habla de Cristo como cabeza de la Iglesia?",
        options: ["Gálatas", "Efesios", "1 Tesalonicenses", "2 Timoteo"]
      },
      pt: {
        question: "Qual carta fala de Cristo como cabeça da Igreja?",
        options: ["Gálatas", "Efésios", "1 Tessalonicenses", "2 Timóteo"]
      },
      fr: {
        question: "Quelle lettre parle du Christ comme chef de l'Église?",
        options: ["Galates", "Éphésiens", "1 Thessaloniciens", "2 Timothée"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Efesini 5:23"
  },
  {
    id: 51,
    translations: {
      it: {
        question: "Dove Paolo scrisse che tutto coopera al bene di coloro che amano Dio?",
        options: ["1 Corinzi", "Romani", "Galati", "Colossesi"]
      },
      en: {
        question: "Where did Paul write that all things work together for good for those who love God?",
        options: ["1 Corinthians", "Romans", "Galatians", "Colossians"]
      },
      es: {
        question: "¿Dónde escribió Pablo que todas las cosas cooperan para bien de los que aman a Dios?",
        options: ["1 Corintios", "Romanos", "Gálatas", "Colosenses"]
      },
      pt: {
        question: "Onde Paulo escreveu que todas as coisas cooperam para o bem daqueles que amam a Deus?",
        options: ["1 Coríntios", "Romanos", "Gálatas", "Colossenses"]
      },
      fr: {
        question: "Où Paul a-t-il écrit que toutes choses concourent au bien de ceux qui aiment Dieu?",
        options: ["1 Corinthiens", "Romains", "Galates", "Colossiens"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "Romani 8:28"
  },
  {
    id: 52,
    translations: {
      it: {
        question: "Quale lettera fu scritta per correggere false dottrine sulla seconda venuta di Cristo?",
        options: ["1 Tessalonicesi", "2 Tessalonicesi", "Filippesi", "Tito"]
      },
      en: {
        question: "Which letter was written to correct false teachings about Christ's second coming?",
        options: ["1 Thessalonians", "2 Thessalonians", "Philippians", "Titus"]
      },
      es: {
        question: "¿Qué carta fue escrita para corregir falsas doctrinas sobre la segunda venida de Cristo?",
        options: ["1 Tesalonicenses", "2 Tesalonicenses", "Filipenses", "Tito"]
      },
      pt: {
        question: "Qual carta foi escrita para corrigir falsas doutrinas sobre a segunda vinda de Cristo?",
        options: ["1 Tessalonicenses", "2 Tessalonicenses", "Filipenses", "Tito"]
      },
      fr: {
        question: "Quelle lettre a été écrite pour corriger les fausses doctrines sur la seconde venue du Christ?",
        options: ["1 Thessaloniciens", "2 Thessaloniciens", "Philippiens", "Tite"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Lettere di Paolo",
    reference: "2 Tessalonicesi 2:1-3"
  },
  {
    id: 53,
    translations: {
      it: {
        question: "Quale virtù Paolo considera la più grande?",
        options: ["Fede", "Speranza", "Amore", "Pazienza"]
      },
      en: {
        question: "Which virtue does Paul consider the greatest?",
        options: ["Faith", "Hope", "Love", "Patience"]
      },
      es: {
        question: "¿Qué virtud considera Pablo la más grande?",
        options: ["Fe", "Esperanza", "Amor", "Paciencia"]
      },
      pt: {
        question: "Qual virtude Paulo considera a maior?",
        options: ["Fé", "Esperança", "Amor", "Paciência"]
      },
      fr: {
        question: "Quelle vertu Paul considère-t-il comme la plus grande?",
        options: ["Foi", "Espérance", "Amour", "Patience"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 13:13"
  },
  {
    id: 54,
    translations: {
      it: {
        question: "Quale lettera contiene l'inno cristologico che parla dell'umiltà di Cristo?",
        options: ["Colossesi", "Filippesi", "Efesini", "1 Timoteo"]
      },
      en: {
        question: "Which letter contains the Christological hymn about Christ's humility?",
        options: ["Colossians", "Philippians", "Ephesians", "1 Timothy"]
      },
      es: {
        question: "¿Qué carta contiene el himno cristológico sobre la humildad de Cristo?",
        options: ["Colosenses", "Filipenses", "Efesios", "1 Timoteo"]
      },
      pt: {
        question: "Qual carta contém o hino cristológico sobre a humildade de Cristo?",
        options: ["Colossenses", "Filipenses", "Efésios", "1 Timóteo"]
      },
      fr: {
        question: "Quelle lettre contient l'hymne christologique sur l'humilité du Christ?",
        options: ["Colossiens", "Philippiens", "Éphésiens", "1 Timothée"]
      }
    },
    correctAnswer: 1,
    difficulty: "hard",
    block: "Lettere di Paolo",
    reference: "Filippesi 2:5-11"
  },
  {
    id: 55,
    translations: {
      it: {
        question: "Quale metafora usa Paolo per descrivere la Chiesa?",
        options: ["Una vigna", "Un gregge", "Il corpo di Cristo", "Una casa"]
      },
      en: {
        question: "Which metaphor does Paul use to describe the Church?",
        options: ["A vineyard", "A flock", "The body of Christ", "A house"]
      },
      es: {
        question: "¿Qué metáfora usa Pablo para describir la Iglesia?",
        options: ["Una viña", "Un rebaño", "El cuerpo de Cristo", "Una casa"]
      },
      pt: {
        question: "Qual metáfora Paulo usa para descrever a Igreja?",
        options: ["Uma vinha", "Um rebanho", "O corpo de Cristo", "Uma casa"]
      },
      fr: {
        question: "Quelle métaphore Paul utilise-t-il pour décrire l'Église?",
        options: ["Une vigne", "Un troupeau", "Le corps du Christ", "Une maison"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 12:27"
  },
  {
    id: 56,
    translations: {
      it: {
        question: "A quale città Paolo scrisse riguardo al problema dei cibi offerti agli idoli?",
        options: ["Roma", "Corinto", "Efeso", "Tessalonica"]
      },
      en: {
        question: "To which city did Paul write about the problem of food offered to idols?",
        options: ["Rome", "Corinth", "Ephesus", "Thessalonica"]
      },
      es: {
        question: "¿A qué ciudad escribió Pablo sobre el problema de los alimentos ofrecidos a los ídolos?",
        options: ["Roma", "Corinto", "Éfeso", "Tesalónica"]
      },
      pt: {
        question: "Para qual cidade Paulo escreveu sobre o problema dos alimentos oferecidos aos ídolos?",
        options: ["Roma", "Corinto", "Éfeso", "Tessalônica"]
      },
      fr: {
        question: "À quelle ville Paul a-t-il écrit au sujet du problème de la nourriture offerte aux idoles?",
        options: ["Rome", "Corinthe", "Éphèse", "Thessalonique"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 8:1-13"
  },
  {
    id: 57,
    translations: {
      it: {
        question: "Quale lettera parla dei doni spirituali?",
        options: ["Romani", "1 Corinzi", "Galati", "Colossesi"]
      },
      en: {
        question: "Which letter talks about spiritual gifts?",
        options: ["Romans", "1 Corinthians", "Galatians", "Colossians"]
      },
      es: {
        question: "¿Qué carta habla de los dones espirituales?",
        options: ["Romanos", "1 Corintios", "Gálatas", "Colosenses"]
      },
      pt: {
        question: "Qual carta fala sobre os dons espirituais?",
        options: ["Romanos", "1 Coríntios", "Gálatas", "Colossenses"]
      },
      fr: {
        question: "Quelle lettre parle des dons spirituels?",
        options: ["Romains", "1 Corinthiens", "Galates", "Colossiens"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Lettere di Paolo",
    reference: "1 Corinzi 12"
  },
  {
    id: 58,
    translations: {
      it: {
        question: "Quale collaboratore di Paolo fu lasciato malato a Mileto?",
        options: ["Timoteo", "Tito", "Trofimo", "Luca"]
      },
      en: {
        question: "Which of Paul's co-workers was left sick in Miletus?",
        options: ["Timothy", "Titus", "Trophimus", "Luke"]
      },
      es: {
        question: "¿Qué colaborador de Pablo fue dejado enfermo en Mileto?",
        options: ["Timoteo", "Tito", "Trófimo", "Lucas"]
      },
      pt: {
        question: "Qual colaborador de Paulo foi deixado doente em Mileto?",
        options: ["Timóteo", "Tito", "Trófimo", "Lucas"]
      },
      fr: {
        question: "Quel collaborateur de Paul a été laissé malade à Milet?",
        options: ["Timothée", "Tite", "Trophime", "Luc"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Lettere di Paolo",
    reference: "2 Timoteo 4:20"
  },
  {
    id: 59,
    translations: {
      it: {
        question: "Quale lettera enfatizza la supremazia di Cristo su tutto?",
        options: ["Filippesi", "Colossesi", "1 Tessalonicesi", "Filemone"]
      },
      en: {
        question: "Which letter emphasizes the supremacy of Christ over all?",
        options: ["Philippians", "Colossians", "1 Thessalonians", "Philemon"]
      },
      es: {
        question: "¿Qué carta enfatiza la supremacía de Cristo sobre todo?",
        options: ["Filipenses", "Colosenses", "1 Tesalonicenses", "Filemón"]
      },
      pt: {
        question: "Qual carta enfatiza a supremacia de Cristo sobre tudo?",
        options: ["Filipenses", "Colossenses", "1 Tessalonicenses", "Filemom"]
      },
      fr: {
        question: "Quelle lettre met l'accent sur la suprématie du Christ sur tout?",
        options: ["Philippiens", "Colossiens", "1 Thessaloniciens", "Philémon"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Lettere di Paolo",
    reference: "Colossesi 1:15-20"
  },
  {
    id: 60,
    translations: {
      it: {
        question: "Quale donna Paolo chiama 'madre mia in Cristo'?",
        options: ["Priscilla", "Lidia", "Febe", "La madre di Rufo"]
      },
      en: {
        question: "Which woman does Paul call 'his mother in Christ'?",
        options: ["Priscilla", "Lydia", "Phoebe", "Rufus' mother"]
      },
      es: {
        question: "¿A qué mujer llama Pablo 'su madre en Cristo'?",
        options: ["Priscila", "Lidia", "Febe", "La madre de Rufo"]
      },
      pt: {
        question: "Qual mulher Paulo chama de 'sua mãe em Cristo'?",
        options: ["Priscila", "Lídia", "Febe", "A mãe de Rufo"]
      },
      fr: {
        question: "Quelle femme Paul appelle-t-il 'sa mère en Christ'?",
        options: ["Priscille", "Lydie", "Phébé", "La mère de Rufus"]
      }
    },
    correctAnswer: 3,
    difficulty: "hard",
    block: "Lettere di Paolo",
    reference: "Romani 16:13"
  },

  // Old Testament (Antico Testamento)
  {
    id: 61,
    translations: {
      it: {
        question: "Chi costruì l'arca secondo le istruzioni di Dio?",
        options: ["Abramo", "Noè", "Mosè", "Giosuè"]
      },
      en: {
        question: "Who built the ark according to God's instructions?",
        options: ["Abraham", "Noah", "Moses", "Joshua"]
      },
      es: {
        question: "¿Quién construyó el arca según las instrucciones de Dios?",
        options: ["Abraham", "Noé", "Moisés", "Josué"]
      },
      pt: {
        question: "Quem construiu a arca segundo as instruções de Deus?",
        options: ["Abraão", "Noé", "Moisés", "Josué"]
      },
      fr: {
        question: "Qui a construit l'arche selon les instructions de Dieu?",
        options: ["Abraham", "Noé", "Moïse", "Josué"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Genesi 6:14"
  },
  {
    id: 62,
    translations: {
      it: {
        question: "Quale patriarca fu venduto come schiavo dai suoi fratelli?",
        options: ["Isacco", "Giacobbe", "Giuseppe", "Beniamino"]
      },
      en: {
        question: "Which patriarch was sold into slavery by his brothers?",
        options: ["Isaac", "Jacob", "Joseph", "Benjamin"]
      },
      es: {
        question: "¿Qué patriarca fue vendido como esclavo por sus hermanos?",
        options: ["Isaac", "Jacob", "José", "Benjamín"]
      },
      pt: {
        question: "Qual patriarca foi vendido como escravo por seus irmãos?",
        options: ["Isaque", "Jacó", "José", "Benjamim"]
      },
      fr: {
        question: "Quel patriarche a été vendu en esclavage par ses frères?",
        options: ["Isaac", "Jacob", "Joseph", "Benjamin"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Genesi 37:28"
  },
  {
    id: 63,
    translations: {
      it: {
        question: "Quale re costruì il primo tempio di Gerusalemme?",
        options: ["Davide", "Salomone", "Ezechia", "Giosia"]
      },
      en: {
        question: "Which king built the first temple in Jerusalem?",
        options: ["David", "Solomon", "Hezekiah", "Josiah"]
      },
      es: {
        question: "¿Qué rey construyó el primer templo de Jerusalén?",
        options: ["David", "Salomón", "Ezequías", "Josías"]
      },
      pt: {
        question: "Qual rei construiu o primeiro templo de Jerusalém?",
        options: ["Davi", "Salomão", "Ezequias", "Josias"]
      },
      fr: {
        question: "Quel roi a construit le premier temple de Jérusalem?",
        options: ["David", "Salomon", "Ézéchias", "Josias"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "1 Re 6:1"
  },
  {
    id: 64,
    translations: {
      it: {
        question: "Quale profeta fu inghiottito da un grande pesce?",
        options: ["Isaia", "Geremia", "Giona", "Osea"]
      },
      en: {
        question: "Which prophet was swallowed by a great fish?",
        options: ["Isaiah", "Jeremiah", "Jonah", "Hosea"]
      },
      es: {
        question: "¿Qué profeta fue tragado por un gran pez?",
        options: ["Isaías", "Jeremías", "Jonás", "Oseas"]
      },
      pt: {
        question: "Qual profeta foi engolido por um grande peixe?",
        options: ["Isaías", "Jeremias", "Jonas", "Oséias"]
      },
      fr: {
        question: "Quel prophète a été avalé par un grand poisson?",
        options: ["Isaïe", "Jérémie", "Jonas", "Osée"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Giona 1:17"
  },
  {
    id: 65,
    translations: {
      it: {
        question: "Chi sconfisse Golia con una fionda?",
        options: ["Saul", "Davide", "Gionata", "Sansone"]
      },
      en: {
        question: "Who defeated Goliath with a sling?",
        options: ["Saul", "David", "Jonathan", "Samson"]
      },
      es: {
        question: "¿Quién derrotó a Goliat con una honda?",
        options: ["Saúl", "David", "Jonatán", "Sansón"]
      },
      pt: {
        question: "Quem derrotou Golias com uma funda?",
        options: ["Saul", "Davi", "Jônatas", "Sansão"]
      },
      fr: {
        question: "Qui a vaincu Goliath avec une fronde?",
        options: ["Saül", "David", "Jonathan", "Samson"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "1 Samuele 17:49-50"
  },
  {
    id: 66,
    translations: {
      it: {
        question: "Quale donna divenne regina di Persia e salvò il suo popolo?",
        options: ["Rut", "Ester", "Debora", "Giuditta"]
      },
      en: {
        question: "Which woman became queen of Persia and saved her people?",
        options: ["Ruth", "Esther", "Deborah", "Judith"]
      },
      es: {
        question: "¿Qué mujer se convirtió en reina de Persia y salvó a su pueblo?",
        options: ["Rut", "Ester", "Débora", "Judit"]
      },
      pt: {
        question: "Qual mulher se tornou rainha da Pérsia e salvou seu povo?",
        options: ["Rute", "Ester", "Débora", "Judite"]
      },
      fr: {
        question: "Quelle femme est devenue reine de Perse et a sauvé son peuple?",
        options: ["Ruth", "Esther", "Déborah", "Judith"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Ester 2:17"
  },
  {
    id: 67,
    translations: {
      it: {
        question: "Quanti giorni durò il diluvio universale?",
        options: ["30", "40", "50", "60"]
      },
      en: {
        question: "How many days did the universal flood last?",
        options: ["30", "40", "50", "60"]
      },
      es: {
        question: "¿Cuántos días duró el diluvio universal?",
        options: ["30", "40", "50", "60"]
      },
      pt: {
        question: "Quantos dias durou o dilúvio universal?",
        options: ["30", "40", "50", "60"]
      },
      fr: {
        question: "Combien de jours le déluge universel a-t-il duré?",
        options: ["30", "40", "50", "60"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Genesi 7:17"
  },
  {
    id: 68,
    translations: {
      it: {
        question: "Chi interpretò i sogni del Faraone?",
        options: ["Mosè", "Giuseppe", "Aronne", "Giacobbe"]
      },
      en: {
        question: "Who interpreted Pharaoh's dreams?",
        options: ["Moses", "Joseph", "Aaron", "Jacob"]
      },
      es: {
        question: "¿Quién interpretó los sueños del Faraón?",
        options: ["Moisés", "José", "Aarón", "Jacob"]
      },
      pt: {
        question: "Quem interpretou os sonhos do Faraó?",
        options: ["Moisés", "José", "Arão", "Jacó"]
      },
      fr: {
        question: "Qui a interprété les rêves du Pharaon?",
        options: ["Moïse", "Joseph", "Aaron", "Jacob"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Genesi 41:15-16"
  },
  {
    id: 69,
    translations: {
      it: {
        question: "Quale profeta sfidò i profeti di Baal sul monte Carmelo?",
        options: ["Elia", "Eliseo", "Isaia", "Geremia"]
      },
      en: {
        question: "Which prophet challenged the prophets of Baal on Mount Carmel?",
        options: ["Elijah", "Elisha", "Isaiah", "Jeremiah"]
      },
      es: {
        question: "¿Qué profeta desafió a los profetas de Baal en el monte Carmelo?",
        options: ["Elías", "Eliseo", "Isaías", "Jeremías"]
      },
      pt: {
        question: "Qual profeta desafiou os profetas de Baal no Monte Carmelo?",
        options: ["Elias", "Eliseu", "Isaías", "Jeremias"]
      },
      fr: {
        question: "Quel prophète a défié les prophètes de Baal sur le mont Carmel?",
        options: ["Élie", "Élisée", "Isaïe", "Jérémie"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "1 Re 18:19-40"
  },
  {
    id: 70,
    translations: {
      it: {
        question: "Chi guidò gli Israeliti attraverso il Mar Rosso?",
        options: ["Abramo", "Mosè", "Giosuè", "Aronne"]
      },
      en: {
        question: "Who led the Israelites through the Red Sea?",
        options: ["Abraham", "Moses", "Joshua", "Aaron"]
      },
      es: {
        question: "¿Quién guió a los israelitas a través del Mar Rojo?",
        options: ["Abraham", "Moisés", "Josué", "Aarón"]
      },
      pt: {
        question: "Quem guiou os israelitas através do Mar Vermelho?",
        options: ["Abraão", "Moisés", "Josué", "Arão"]
      },
      fr: {
        question: "Qui a conduit les Israélites à travers la mer Rouge?",
        options: ["Abraham", "Moïse", "Josué", "Aaron"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Esodo 14:21-22"
  },
  {
    id: 71,
    translations: {
      it: {
        question: "Quale città fu conquistata da Giosuè con le trombe?",
        options: ["Gerico", "Ai", "Gerusalemme", "Babilonia"]
      },
      en: {
        question: "Which city was conquered by Joshua with trumpets?",
        options: ["Jericho", "Ai", "Jerusalem", "Babylon"]
      },
      es: {
        question: "¿Qué ciudad fue conquistada por Josué con trompetas?",
        options: ["Jericó", "Hai", "Jerusalén", "Babilonia"]
      },
      pt: {
        question: "Qual cidade foi conquistada por Josué com trombetas?",
        options: ["Jericó", "Ai", "Jerusalém", "Babilônia"]
      },
      fr: {
        question: "Quelle ville a été conquise par Josué avec des trompettes?",
        options: ["Jéricho", "Aï", "Jérusalem", "Babylone"]
      }
    },
    correctAnswer: 0,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Giosuè 6:20"
  },
  {
    id: 72,
    translations: {
      it: {
        question: "Quale re d'Israele fu noto per la sua saggezza?",
        options: ["Saul", "Davide", "Salomone", "Ezechia"]
      },
      en: {
        question: "Which king of Israel was known for his wisdom?",
        options: ["Saul", "David", "Solomon", "Hezekiah"]
      },
      es: {
        question: "¿Qué rey de Israel era conocido por su sabiduría?",
        options: ["Saúl", "David", "Salomón", "Ezequías"]
      },
      pt: {
        question: "Qual rei de Israel era conhecido por sua sabedoria?",
        options: ["Saul", "Davi", "Salomão", "Ezequias"]
      },
      fr: {
        question: "Quel roi d'Israël était connu pour sa sagesse?",
        options: ["Saül", "David", "Salomon", "Ézéchias"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "1 Re 3:12"
  },
  {
    id: 73,
    translations: {
      it: {
        question: "Quale donna moabita divenne antenata di Davide?",
        options: ["Rut", "Noemi", "Orpa", "Raab"]
      },
      en: {
        question: "Which Moabite woman became an ancestor of David?",
        options: ["Ruth", "Naomi", "Orpah", "Rahab"]
      },
      es: {
        question: "¿Qué mujer moabita se convirtió en ancestro de David?",
        options: ["Rut", "Noemí", "Orfa", "Rahab"]
      },
      pt: {
        question: "Qual mulher moabita se tornou ancestral de Davi?",
        options: ["Rute", "Noemi", "Orfa", "Raabe"]
      },
      fr: {
        question: "Quelle femme moabite est devenue un ancêtre de David?",
        options: ["Ruth", "Naomi", "Orpa", "Rahab"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Rut 4:13-17"
  },
  {
    id: 74,
    translations: {
      it: {
        question: "Quale profeta vide una visione di ossa secche che tornano in vita?",
        options: ["Daniele", "Ezechiele", "Geremia", "Isaia"]
      },
      en: {
        question: "Which prophet saw a vision of dry bones coming to life?",
        options: ["Daniel", "Ezekiel", "Jeremiah", "Isaiah"]
      },
      es: {
        question: "¿Qué profeta vio una visión de huesos secos que volvían a la vida?",
        options: ["Daniel", "Ezequiel", "Jeremías", "Isaías"]
      },
      pt: {
        question: "Qual profeta viu uma visão de ossos secos voltando à vida?",
        options: ["Daniel", "Ezequiel", "Jeremias", "Isaías"]
      },
      fr: {
        question: "Quel prophète a vu une vision d'os secs revenant à la vie?",
        options: ["Daniel", "Ézéchiel", "Jérémie", "Isaïe"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Ezechiele 37:1-10"
  },
  {
    id: 75,
    translations: {
      it: {
        question: "Quale patriarca fu chiamato a lasciare Ur dei Caldei?",
        options: ["Noè", "Abramo", "Isacco", "Giacobbe"]
      },
      en: {
        question: "Which patriarch was called to leave Ur of the Chaldeans?",
        options: ["Noah", "Abraham", "Isaac", "Jacob"]
      },
      es: {
        question: "¿Qué patriarca fue llamado a dejar Ur de los Caldeos?",
        options: ["Noé", "Abraham", "Isaac", "Jacob"]
      },
      pt: {
        question: "Qual patriarca foi chamado a deixar Ur dos Caldeus?",
        options: ["Noé", "Abraão", "Isaque", "Jacó"]
      },
      fr: {
        question: "Quel patriarche a été appelé à quitter Ur des Chaldéens?",
        options: ["Noé", "Abraham", "Isaac", "Jacob"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Genesi 12:1"
  },
  {
    id: 76,
    translations: {
      it: {
        question: "Chi scrisse la maggior parte dei Salmi?",
        options: ["Mosè", "Salomone", "Davide", "Asaf"]
      },
      en: {
        question: "Who wrote most of the Psalms?",
        options: ["Moses", "Solomon", "David", "Asaph"]
      },
      es: {
        question: "¿Quién escribió la mayoría de los Salmos?",
        options: ["Moisés", "Salomón", "David", "Asaf"]
      },
      pt: {
        question: "Quem escreveu a maioria dos Salmos?",
        options: ["Moisés", "Salomão", "Davi", "Asafe"]
      },
      fr: {
        question: "Qui a écrit la plupart des Psaumes?",
        options: ["Moïse", "Salomon", "David", "Asaph"]
      }
    },
    correctAnswer: 2,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Salmi (vari)"
  },
  {
    id: 77,
    translations: {
      it: {
        question: "Quale re ordinò di gettare Daniele nella fossa dei leoni?",
        options: ["Nabucodonosor", "Ciro", "Dario", "Artaserse"]
      },
      en: {
        question: "Which king ordered Daniel to be thrown into the lions' den?",
        options: ["Nebuchadnezzar", "Cyrus", "Darius", "Artaxerxes"]
      },
      es: {
        question: "¿Qué rey ordenó arrojar a Daniel al foso de los leones?",
        options: ["Nabucodonosor", "Ciro", "Darío", "Artajerjes"]
      },
      pt: {
        question: "Qual rei ordenou que Daniel fosse lançado na cova dos leões?",
        options: ["Nabucodonosor", "Ciro", "Dario", "Artaxerxes"]
      },
      fr: {
        question: "Quel roi a ordonné de jeter Daniel dans la fosse aux lions?",
        options: ["Nabuchodonosor", "Cyrus", "Darius", "Artaxerxès"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Daniele 6:16"
  },
  {
    id: 78,
    translations: {
      it: {
        question: "Quale figlio di Adamo ed Eva uccise suo fratello?",
        options: ["Set", "Caino", "Abele", "Enoc"]
      },
      en: {
        question: "Which son of Adam and Eve killed his brother?",
        options: ["Seth", "Cain", "Abel", "Enoch"]
      },
      es: {
        question: "¿Qué hijo de Adán y Eva mató a su hermano?",
        options: ["Set", "Caín", "Abel", "Enoc"]
      },
      pt: {
        question: "Qual filho de Adão e Eva matou seu irmão?",
        options: ["Sete", "Caim", "Abel", "Enoque"]
      },
      fr: {
        question: "Quel fils d'Adam et Ève a tué son frère?",
        options: ["Seth", "Caïn", "Abel", "Énoch"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Genesi 4:8"
  },
  {
    id: 79,
    translations: {
      it: {
        question: "Quale profeta fu rapito in cielo su un carro di fuoco?",
        options: ["Elia", "Eliseo", "Isaia", "Enoc"]
      },
      en: {
        question: "Which prophet was taken up to heaven in a chariot of fire?",
        options: ["Elijah", "Elisha", "Isaiah", "Enoch"]
      },
      es: {
        question: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
        options: ["Elías", "Eliseo", "Isaías", "Enoc"]
      },
      pt: {
        question: "Qual profeta foi levado ao céu num carro de fogo?",
        options: ["Elias", "Eliseu", "Isaías", "Enoque"]
      },
      fr: {
        question: "Quel prophète a été enlevé au ciel dans un char de feu?",
        options: ["Élie", "Élisée", "Isaïe", "Énoch"]
      }
    },
    correctAnswer: 0,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "2 Re 2:11"
  },
  {
    id: 80,
    translations: {
      it: {
        question: "Quanti comandamenti Dio diede a Mosè sul monte Sinai?",
        options: ["7", "10", "12", "15"]
      },
      en: {
        question: "How many commandments did God give to Moses on Mount Sinai?",
        options: ["7", "10", "12", "15"]
      },
      es: {
        question: "¿Cuántos mandamientos dio Dios a Moisés en el monte Sinaí?",
        options: ["7", "10", "12", "15"]
      },
      pt: {
        question: "Quantos mandamentos Deus deu a Moisés no Monte Sinai?",
        options: ["7", "10", "12", "15"]
      },
      fr: {
        question: "Combien de commandements Dieu a-t-il donnés à Moïse sur le mont Sinaï?",
        options: ["7", "10", "12", "15"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Esodo 20:1-17"
  },
  {
    id: 81,
    translations: {
      it: {
        question: "Quale giudice d'Israele aveva forza sovrumana?",
        options: ["Gedeone", "Sansone", "Iefte", "Barac"]
      },
      en: {
        question: "Which judge of Israel had superhuman strength?",
        options: ["Gideon", "Samson", "Jephthah", "Barak"]
      },
      es: {
        question: "¿Qué juez de Israel tenía fuerza sobrehumana?",
        options: ["Gedeón", "Sansón", "Jefté", "Barac"]
      },
      pt: {
        question: "Qual juiz de Israel tinha força sobre-humana?",
        options: ["Gideão", "Sansão", "Jefté", "Baraque"]
      },
      fr: {
        question: "Quel juge d'Israël avait une force surhumaine?",
        options: ["Gédéon", "Samson", "Jephté", "Barak"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Giudici 14:6"
  },
  {
    id: 82,
    translations: {
      it: {
        question: "Quale donna giudicò Israele come profetessa?",
        options: ["Miriam", "Debora", "Giuditta", "Gael"]
      },
      en: {
        question: "Which woman judged Israel as a prophetess?",
        options: ["Miriam", "Deborah", "Judith", "Jael"]
      },
      es: {
        question: "¿Qué mujer juzgó a Israel como profetisa?",
        options: ["Miriam", "Débora", "Judit", "Jael"]
      },
      pt: {
        question: "Qual mulher julgou Israel como profetisa?",
        options: ["Miriã", "Débora", "Judite", "Jael"]
      },
      fr: {
        question: "Quelle femme a jugé Israël en tant que prophétesse?",
        options: ["Miriam", "Déborah", "Judith", "Jaël"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Giudici 4:4"
  },
  {
    id: 83,
    translations: {
      it: {
        question: "Quale profeta predisse la nascita di Gesù a Betlemme?",
        options: ["Isaia", "Geremia", "Michea", "Zaccaria"]
      },
      en: {
        question: "Which prophet predicted Jesus' birth in Bethlehem?",
        options: ["Isaiah", "Jeremiah", "Micah", "Zechariah"]
      },
      es: {
        question: "¿Qué profeta predijo el nacimiento de Jesús en Belén?",
        options: ["Isaías", "Jeremías", "Miqueas", "Zacarías"]
      },
      pt: {
        question: "Qual profeta predisse o nascimento de Jesus em Belém?",
        options: ["Isaías", "Jeremias", "Miquéias", "Zacarias"]
      },
      fr: {
        question: "Quel prophète a prédit la naissance de Jésus à Bethléem?",
        options: ["Isaïe", "Jérémie", "Michée", "Zacharie"]
      }
    },
    correctAnswer: 2,
    difficulty: "hard",
    block: "Antico Testamento",
    reference: "Michea 5:2"
  },
  {
    id: 84,
    translations: {
      it: {
        question: "Chi fu il successore di Mosè come guida d'Israele?",
        options: ["Aronne", "Giosuè", "Caleb", "Eleazaro"]
      },
      en: {
        question: "Who was Moses' successor as leader of Israel?",
        options: ["Aaron", "Joshua", "Caleb", "Eleazar"]
      },
      es: {
        question: "¿Quién fue el sucesor de Moisés como líder de Israel?",
        options: ["Aarón", "Josué", "Caleb", "Eleazar"]
      },
      pt: {
        question: "Quem foi o sucessor de Moisés como líder de Israel?",
        options: ["Arão", "Josué", "Calebe", "Eleazar"]
      },
      fr: {
        question: "Qui a succédé à Moïse en tant que chef d'Israël?",
        options: ["Aaron", "Josué", "Caleb", "Éléazar"]
      }
    },
    correctAnswer: 1,
    difficulty: "easy",
    block: "Antico Testamento",
    reference: "Deuteronomio 31:7"
  },
  {
    id: 85,
    translations: {
      it: {
        question: "Quale re di Babilonia deportò gli Israeliti?",
        options: ["Ciro", "Dario", "Nabucodonosor", "Baldassarre"]
      },
      en: {
        question: "Which king of Babylon deported the Israelites?",
        options: ["Cyrus", "Darius", "Nebuchadnezzar", "Belshazzar"]
      },
      es: {
        question: "¿Qué rey de Babilonia deportó a los israelitas?",
        options: ["Ciro", "Darío", "Nabucodonosor", "Belsasar"]
      },
      pt: {
        question: "Qual rei da Babilônia deportou os israelitas?",
        options: ["Ciro", "Dario", "Nabucodonosor", "Belsazar"]
      },
      fr: {
        question: "Quel roi de Babylone a déporté les Israélites?",
        options: ["Cyrus", "Darius", "Nabuchodonosor", "Balthazar"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "2 Re 24:14"
  },
  {
    id: 86,
    translations: {
      it: {
        question: "Quale profeta scrisse lamentazioni su Gerusalemme?",
        options: ["Isaia", "Geremia", "Ezechiele", "Daniele"]
      },
      en: {
        question: "Which prophet wrote lamentations about Jerusalem?",
        options: ["Isaiah", "Jeremiah", "Ezekiel", "Daniel"]
      },
      es: {
        question: "¿Qué profeta escribió lamentaciones sobre Jerusalén?",
        options: ["Isaías", "Jeremías", "Ezequiel", "Daniel"]
      },
      pt: {
        question: "Qual profeta escreveu lamentações sobre Jerusalém?",
        options: ["Isaías", "Jeremias", "Ezequiel", "Daniel"]
      },
      fr: {
        question: "Quel prophète a écrit des lamentations sur Jérusalem?",
        options: ["Isaïe", "Jérémie", "Ézéchiel", "Daniel"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Lamentazioni 1:1"
  },
  {
    id: 87,
    translations: {
      it: {
        question: "Quali tre giovani furono gettati nella fornace ardente?",
        options: ["Daniele, Michele, Gabriele", "Sadrac, Mesac, Abednego", "Esdra, Nehemia, Zorobabele", "Elia, Eliseo, Isaia"]
      },
      en: {
        question: "Which three young men were thrown into the fiery furnace?",
        options: ["Daniel, Michael, Gabriel", "Shadrach, Meshach, Abednego", "Ezra, Nehemiah, Zerubbabel", "Elijah, Elisha, Isaiah"]
      },
      es: {
        question: "¿Qué tres jóvenes fueron arrojados al horno ardiente?",
        options: ["Daniel, Miguel, Gabriel", "Sadrac, Mesac, Abednego", "Esdras, Nehemías, Zorobabel", "Elías, Eliseo, Isaías"]
      },
      pt: {
        question: "Quais três jovens foram lançados na fornalha ardente?",
        options: ["Daniel, Miguel, Gabriel", "Sadraque, Mesaque, Abednego", "Esdras, Neemias, Zorobabel", "Elias, Eliseu, Isaías"]
      },
      fr: {
        question: "Quels trois jeunes hommes ont été jetés dans la fournaise ardente?",
        options: ["Daniel, Michel, Gabriel", "Schadrac, Méschac, Abed-Nego", "Esdras, Néhémie, Zorobabel", "Élie, Élisée, Isaïe"]
      }
    },
    correctAnswer: 1,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Daniele 3:19-20"
  },
  {
    id: 88,
    translations: {
      it: {
        question: "Quale patriarca vide una scala che arrivava al cielo?",
        options: ["Abramo", "Isacco", "Giacobbe", "Giuseppe"]
      },
      en: {
        question: "Which patriarch saw a ladder reaching to heaven?",
        options: ["Abraham", "Isaac", "Jacob", "Joseph"]
      },
      es: {
        question: "¿Qué patriarca vio una escalera que llegaba al cielo?",
        options: ["Abraham", "Isaac", "Jacob", "José"]
      },
      pt: {
        question: "Qual patriarca viu uma escada que chegava ao céu?",
        options: ["Abraão", "Isaque", "Jacó", "José"]
      },
      fr: {
        question: "Quel patriarche a vu une échelle qui montait au ciel?",
        options: ["Abraham", "Isaac", "Jacob", "Joseph"]
      }
    },
    correctAnswer: 2,
    difficulty: "medium",
    block: "Antico Testamento",
    reference: "Genesi 28:12"
  }
];
