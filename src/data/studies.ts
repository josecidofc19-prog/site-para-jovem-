import { Study, CategoryType } from '../types/study';

export const STUDIES: Study[] = [
  {
    id: 'adoracao-louvor',
    slug: 'adoracao-louvor',
    studyNumber: 'Estudo 01',
    title: 'Adoração ≠ Louvor',
    subtitle: 'Compreendendo o significado dos termos bíblicos e a adoração como estilo de vida',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    description: 'Uma análise bíblica e linguística esclarecedora sobre a diferença fundamental entre louvor e adoração, mostrando por que a verdadeira adoração vai muito além da música e consiste em oferecer a própria vida a Deus.',
    summary: 'Muitas pessoas acham que louvor e adoração são sinônimos. Este estudo esclarece os significados bíblicos nos idiomas originais (hebraico Halal e Zãmar, grego Eucharestein e Eulogein para louvor; e Proskuneo para adoração). Enquanto o louvor é a manifestação e elogio pelas obras grandiosas do Senhor, a adoração bíblica requer prostração, intimidade e entrega total do coração. O material alerta contra o engano de honrar a Deus apenas com os lábios (Mateus 15:8-9) e ensina que a adoração verdadeira é um estilo de vida de obediência diária.',
    category: 'Adoração',
    topics: [
      'Significado dos termos Louvar e Adorar',
      'Adoração em espírito e em verdade (João 4:20-24)',
      'O termo grego “PROSKUNEO” e a intimidade com Deus',
      'Termos bíblicos para louvor (Halal, Zãmar, Eucharestein, Eulogein)',
      'Louvor conforme Salmos 150:1-6',
      'O alerta de Mateus 15:8-9: honrar com lábios vs coração longe',
      'Adoração como estilo de vida e entrega total',
      'Citação de Rick Warren: “Oferecer-se a Deus”',
    ],
    keywords: [
      'adoração',
      'louvor',
      'proskuneo',
      'halal',
      'zamar',
      'joão 4',
      'salmos 150',
      'mateus 15',
      'entrega',
      'coração',
      'estilo de vida',
    ],
    bibleReferences: [
      {
        ref: 'João 4:20-24',
        verseText: 'Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade; porque o Pai procura a tais que assim o adorem. Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade.',
        context: 'Jesus ensina à mulher samaritana que a adoração não está presa a um monte ou templo, mas nasce do espírito vivificado pela verdade.',
      },
      {
        ref: 'Salmos 150:1-6',
        verseText: 'Louvai ao Senhor. Louvai a Deus no seu santuário; louvai-o no firmamento do seu poder... Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.',
        context: 'O chamado universal para louvar a Deus com cânticos, instrumentos e exaltação por Seus atos poderosos.',
      },
      {
        ref: 'Mateus 15:8-9',
        verseText: 'Este povo me honra com os lábios, mas o seu coração está longe de mim. Em vão me adoram; seus ensinamentos não passam de regras ensinadas por homens.',
        context: 'A denúncia de Jesus contra a hipocrisia de louvar externamente enquanto o coração permanece distante e rebelde.',
      },
    ],
    pageCount: 11,
    publishedAt: '2024-09-10',
    readTime: '6 min de leitura',
    iconName: 'heart',
    pdfFileName: 'Adoracao-nao-e-Louvor.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'Adoração ≠ Louvor',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
      },
      {
        pageNumber: 2,
        title: 'Introdução',
        bulletPoints: [
          'Muitas pessoas acham que louvor e adoração são as mesmas coisas, acreditam que são palavras diferentes para designar coisas iguais.',
          'Mas na realidade, assim como ambas palavras são diferentes, seus significados também são.',
        ],
      },
      {
        pageNumber: 3,
        title: 'Significado dos termos.',
        bulletPoints: [
          'Louvar: Enaltecer alguém ou alguma coisa; elogio; admiração.',
          'Adorar: Prestar culto; reverenciar; amar muito; venerar.',
        ],
      },
      {
        pageNumber: 4,
        title: 'Adoração',
        bibleVerses: [
          {
            ref: 'João 4:20-24',
            text: 'Nossos antepassados adoraram neste monte, mas vocês, judeus, dizem que Jerusalém é o lugar onde se deve adorar. Jesus declarou: Creia em mim, mulher: está próxima a hora em que os verdadeiros adoradores adorarão o Pai em espírito e em verdade. Deus é espírito, e é necessário que os seus adoradores o adorem em espírito e em verdade.',
          },
        ],
      },
      {
        pageNumber: 5,
        title: 'Adoração (Raiz no Grego)',
        bulletPoints: [
          'A palavra Adoração vem do grego como “PROSKUNEO” que significa literalmente “prostrar-se”, “cair com o rosto em terra”, “render-se beijando os pés ou as mãos”.',
          'Denota humilhação e sentimento de inferioridade em relação ao homenageado. Adoramos somente ao Senhor!',
          'Para adorarmos, precisamos estar bem perto, pois adoração é intimidade.',
          'Assim, entendemos que adoração é um sentimento profundo de amor por algo ou alguém.',
        ],
      },
      {
        pageNumber: 6,
        title: 'Louvar',
        bibleVerses: [
          {
            ref: 'Salmos 150:1-6',
            text: 'Louvai ao Senhor. Louvai a Deus no seu santuário; louvai-o no firmamento do seu poder. Louvai-o pelos seus atos poderosos; louvai-o conforme a excelência da sua grandeza... Tudo quanto tem fôlego louve ao Senhor. Louvai ao Senhor.',
          },
        ],
      },
      {
        pageNumber: 7,
        title: 'Louvar (Línguas Originais)',
        bulletPoints: [
          'No AT, a palavra “Louvor” vem do hebraico “HALAL” e significa “fazer ruído”, e “ZÃMAR” que é associado à “música tocada ou cantada”.',
          'Já no NT a palavra em grego é “EUCHARISTEIN” que significa “agradecer”, e também “EULOGEIN” que é “bendizer”.',
          'Assim, entendemos que o louvor é a manifestação, ou expressão de um sentimento profundo de amor.',
          'LEMBRANDO QUE: ANTES DE EU AMAR, EU PRECISO CONHECER!',
        ],
      },
      {
        pageNumber: 8,
        title: 'Tome cuidado!',
        bulletPoints: [
          'Podemos cair no erro de louvar a Deus com nossos lábios, mas não adorá-lo de todo o coração.',
          'Portanto, não limite a sua adoração à música ou a algum estilo musical de sua preferência.',
          'A adoração é um estilo de vida. Faz parte de toda sua trajetória. É uma entrega total. É a obediência à Palavra de Deus.',
        ],
      },
      {
        pageNumber: 9,
        title: 'Mateus 15:8-9',
        bibleVerses: [
          {
            ref: 'Mateus 15:8-9',
            text: 'Este povo me honra com os lábios, mas o seu coração está longe de mim. Em vão me adoram; seus ensinamentos não passam de regras ensinadas por homens.',
          },
        ],
      },
      {
        pageNumber: 10,
        title: 'Rick Warren',
        highlight: '“A adoração consiste exatamente em oferecer-se a Deus”.',
      },
      {
        pageNumber: 11,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
        isEnd: true,
      },
    ],
  },
  {
    id: 'a-tricotomia-humana',
    slug: 'a-tricotomia-humana',
    studyNumber: 'Estudo 02',
    title: 'A tricotomia humana',
    subtitle: 'Corpo, alma e espírito: as três dimensões do ser humano e a nossa luta interior',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    description: 'Estudo aprofundado sobre a constituição tricotômica do ser humano (corpo, alma e espírito), suas funções distintas, como cada dimensão pode adoecer e o propósito único de viver para adorar a Deus.',
    summary: 'O ser humano foi constituído por Deus com camadas materiais e imateriais. Com base em passagens fundamentais como 1 Tessalonicenses 5:23 e Hebreus 4:12, este estudo examina a distinção entre corpo (tangível e temporal), alma (sede dos sentimentos, vontades e emoções) e espírito (o homem espiritual que se comunica com Deus). O material aborda a luta interior descrita em Romanos e Gálatas entre os desejos da carne e a mente guiada pelo Espírito, os distúrbios emocionais e a glorificação final na ressurreição (1 Coríntios 15:51-53).',
    category: 'Doutrina',
    topics: [
      'Conceito de Tricotomia (divisão em três partes)',
      'Diferença entre Espírito e Alma (Hb 4:12)',
      'O Corpo: visível, temporal e templo divino',
      'A Alma: sentimentos, vontades, desejos e destino',
      'O Espírito: comunhão com Deus, fé e adoração',
      'Entendendo a nossa luta interior (Rm 7 e Gl 5)',
      'Identificando os distúrbios emocionais nas três dimensões',
      'O propósito de ser triúno para adorar a Deus',
      'A transformação do corpo na eternidade (1 Co 15:51-53)',
    ],
    keywords: [
      'tricotomia',
      'corpo',
      'alma',
      'espírito',
      '1 tessalonicenses 5',
      'hebreus 4',
      'emoções',
      'luta interior',
      'ressurreição',
      'templo de deus',
    ],
    bibleReferences: [
      {
        ref: '1 Tessalonicenses 5:23',
        verseText: 'E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.',
        context: 'Paulo afirma com clareza a composição tricotômica do homem e a necessidade de santificação nas três esferas.',
      },
      {
        ref: 'Hebreus 4:12',
        verseText: 'Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.',
        context: 'A capacidade divina da Palavra de Deus em discernir o que é puramente anímico (alma) do que é genuinamente espiritual.',
      },
      {
        ref: 'Mateus 10:28',
        verseText: 'E não temais os que matam o corpo e não podem matar a alma; temei, antes, aquele que pode fazer perecer no inferno a alma e o corpo.',
        context: 'Jesus ensina a eternidade da alma em contraste com a vulnerabilidade física do corpo terreno.',
      },
      {
        ref: 'Mateus 22:37',
        verseText: 'E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.',
        context: 'O mandamento principal exigindo consagração integral das faculdades interiores ao Senhor.',
      },
      {
        ref: '1 Coríntios 15:51-53',
        verseText: 'Eis aqui vos digo um mistério: Na verdade, nem todos dormiremos, mas todos seremos transformados; num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados.',
        context: 'A promessa da transformação final do corpo mortal em incorruptibilidade na volta de Cristo.',
      },
    ],
    pageCount: 13,
    publishedAt: '2024-09-24',
    readTime: '7 min de leitura',
    iconName: 'compass',
    pdfFileName: 'A-tricotomia-humana.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'A tricotomia humana',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
      },
      {
        pageNumber: 2,
        title: 'Introdução',
        bulletPoints: [
          'O ser humano é composto por camadas, desde a material até as imateriais.',
          'Vamos estudar quais são essas camadas, suas diferenças e a importância da compreensão sobre a tricotomia para um cristão.',
          'Para iniciar, temos a pergunta: Quais são as nossas camadas???',
        ],
      },
      {
        pageNumber: 3,
        title: 'As divisões',
        bulletPoints: [
          'Tricotomia: Divisão em três partes.',
          '1. Corpo — Tangível e superficial',
          '2. Alma — Intangível e interna',
          '3. Espírito — Intangível e interno',
          'Importante: Espírito ≠ Alma!',
        ],
      },
      {
        pageNumber: 4,
        title: 'O que a bíblia fala sobre?...',
        bibleVerses: [
          {
            ref: '1 Tessalonicenses 5:23',
            text: 'E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.',
          },
          {
            ref: 'Hebreus 4:12',
            text: 'Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.',
          },
        ],
      },
      {
        pageNumber: 5,
        title: 'O que a bíblia fala sobre?...',
        bibleVerses: [
          {
            ref: 'Mateus 10:28',
            text: 'E não temais os que matam o corpo e não podem matar a alma; temei, antes, aquele que pode fazer perecer no inferno a alma e o corpo.',
          },
          {
            ref: 'Mateus 22:37',
            text: 'E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento.',
          },
        ],
      },
      {
        pageNumber: 6,
        title: 'Corpo',
        bulletPoints: [
          'Visível',
          'Temporal',
          'Alterável',
          'Sujeito à adoecer',
          'Se separa na morte física',
          'Templo divino',
        ],
      },
      {
        pageNumber: 7,
        title: 'Alma',
        bulletPoints: [
          'Invisível → Intangível',
          'Eterna',
          'Alterável → Sentimentos e vontades / desejos',
          'Sujeito à adoecer',
          'Vai para o lugar de descanso ou tormento',
        ],
      },
      {
        pageNumber: 8,
        title: 'Espírito',
        bulletPoints: [
          'Invisível → Intangível',
          'Eterno',
          'Alterável → Relacionamento com Deus - fé - adoração - novo homem',
          'Sujeito à adoecer',
          'Vai para o lugar de descanso ou tormento junto com a alma',
        ],
      },
      {
        pageNumber: 9,
        title: 'Entendendo nossa luta interior',
        bulletPoints: [
          'Deus | Reino de Deus → Vida e Paz (Rm 8:1) pela lei do Espírito da Vida.',
          'Espírito | Consciência de Deus (Rm 7:22) guiado pelo fruto do Espírito (Gl 5:22).',
          'Alma | Vontade e emoções — campo de batalha entre a carne (Gl 5:19) e o Espírito.',
          'Corpo | Consciência do mundo (1 Jo 2:16), sujeito à lei do pecado e da morte (Rm 8:1).',
          'Satanás | Império das trevas — Morte.',
        ],
        diagram: {
          title: 'Esquema Bíblico da Luta Interior',
          steps: [
            { title: 'Deus / Reino de Deus', subtitle: 'Vida e Paz • Lei do Espírito da Vida', verses: 'Romanos 8:1' },
            { title: 'Espírito', subtitle: 'Consciência de Deus • Guiado pelo Fruto do Espírito', verses: 'Rm 7:22 • Gl 5:22' },
            { title: 'Alma', subtitle: 'Vontade e Emoções • Campo de Batalha (Carne vs Espírito)', verses: 'Gálatas 5:19' },
            { title: 'Corpo', subtitle: 'Consciência do Mundo • Sujeito à Lei do Pecado', verses: '1 João 2:16 • Rm 8:1' },
            { title: 'Satanás / Império das Trevas', subtitle: 'Inimizade contra Deus • Morte Espiritual', verses: 'Rm 8:1' },
          ],
        },
      },
      {
        pageNumber: 10,
        title: '1. Identificando os distúrbios emocionais',
        subtitle: 'O ser humano, de acordo com a Bíblia Sagrada, é uma tricotomia (1 Ts 5:23 / Hb 4:12):',
        bulletPoints: [
          'Espírito: É o homem espiritual e imortal, que se comunica com Deus (o Sagrado e Eterno).',
          'Alma: É o centro das emoções e da sensibilidade humana.',
          'Corpo: É a matéria, mortal, limitada, templo e tabernáculo divino.',
          'O ser humano está sujeito a adoecer em qualquer uma dessas três dimensões.',
        ],
        table: {
          headers: ['Dimensão', 'Definição Bíblica', 'Condição'],
          rows: [
            ['Espírito', 'Homem espiritual e imortal que se comunica com Deus', 'Sujeito a adoecer'],
            ['Alma', 'Centro das emoções, sentimentos e sensibilidade humana', 'Sujeita a adoecer'],
            ['Corpo', 'Matéria, mortal, limitada, templo e tabernáculo divino', 'Sujeito a adoecer'],
          ],
        },
        highlight: 'O ser humano está sujeito a adoecer em qualquer uma dessas três dimensões.',
      },
      {
        pageNumber: 11,
        title: 'O Propósito da Unidade',
        highlight: 'Deus nos constituiu um ser triúno, mas um único indivíduo, onde cada elemento possui uma função, mas todos devem trabalhar para um único propósito: Adorar a Deus e se preparar para morar com Ele para todo sempre.',
      },
      {
        pageNumber: 12,
        title: '1 Coríntios 15:51-53',
        bibleVerses: [
          {
            ref: '1 Coríntios 15:51-53',
            text: 'Eis aqui vos digo um mistério: Na verdade, nem todos dormiremos, mas todos seremos transformados; Num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados. Porque convém que isto que é corruptível se revista da incorruptibilidade, e que isto que é mortal se revista da imortalidade.',
          },
        ],
      },
      {
        pageNumber: 13,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
        isEnd: true,
      },
    ],
  },
  {
    id: 'a-blasfemia-contra-o-espirito-santo',
    slug: 'a-blasfemia-contra-o-espirito-santo',
    studyNumber: 'Estudo 03',
    title: 'A blasfêmia contra o Espírito Santo',
    subtitle: 'Compreendendo Mateus 12:30-32, a raiz da incredulidade e a certeza do perdão em Cristo',
    author: 'AD. Ministério Correndo para Deus - Ev. Renan',
    description: 'Estudo bíblico e pastoral detalhado que esclarece o que é a blasfêmia contra o Espírito Santo, por que ela não tem perdão, a raiz na incredulidade voluntária e como ter a certeza de que aquele que se arrepende é perdoado por Jesus.',
    summary: 'Com base no texto de Mateus 12:30-32, o estudo analisa o que significa a blasfêmia contra o Espírito Santo: a rejeição consciente, obstinada e voluntária a Deus, atribuindo ao mal a obra soberana do Espírito. O material aborda a raiz da blasfêmia — a incredulidade —, diferencia arrependimento genuíno de simples remorso e tranquiliza o cristão: quem sente tristeza pelo pecado e busca a Jesus jamais cometeu a blasfêmia, pois Jesus nunca rejeita quem se achega a Ele (João 6:37; 1 João 1:9).',
    category: 'Espírito Santo',
    topics: [
      'Texto base: Mateus 12:30-32',
      'O que significa a blasfêmia contra o Espírito Santo',
      'Atribuir a Satanás a obra que Deus realiza através do Espírito Santo',
      'Onde nasce a blasfêmia? (A raiz na incredulidade)',
      'Por que a incredulidade impede a salvação (Hb 11:1, 6)',
      'Entendendo a fase do perdão (Jo 16:7-9 e At 3:19-20)',
      'Como vencer a incredulidade pela Palavra (Rm 10:17 e Gl 3:2)',
      'Como saber se já cometeu a blasfêmia: o alívio para quem se arrepende',
      'Arrependimento bíblico versus simples remorso passageiro',
      'A promessa incondicional de acolhimento em Jesus (Jo 6:37 e 1 Jo 1:9)',
    ],
    keywords: [
      'blasfêmia',
      'espírito santo',
      'mateus 12',
      'incredulidade',
      'arrependimento',
      'remorso',
      'perdão',
      'hebreus 11',
      'romanos 10',
      'salvação',
    ],
    bibleReferences: [
      {
        ref: 'Mateus 12:30-32',
        verseText: 'Aquele que não está comigo, está contra mim; e aquele que comigo não ajunta, espalha. Por esse motivo eu lhes digo: todo pecado e blasfêmia serão perdoados aos homens, mas a blasfêmia contra o Espírito não será perdoada. Todo aquele que disser uma palavra contra o Filho do homem será perdoado, mas quem falar contra o Espírito Santo não será perdoado, nem nesta era nem na era que há de vir.',
        context: 'A advertência severa de Jesus aos fariseus que, conhecendo a Lei, atribuíam as obras de cura do Espírito Santo a Belzebu.',
      },
      {
        ref: 'Hebreus 11:1, 6',
        verseText: 'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos... Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.',
        context: 'A fé como condição primária para o relacionamento e acolhimento diante do Senhor.',
      },
      {
        ref: 'Romanos 10:17',
        verseText: 'Consequentemente, a fé vem por ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.',
        context: 'O antídoto bíblico contra a incredulidade: alimentar o espírito com a Palavra viva de Jesus.',
      },
      {
        ref: 'João 6:37',
        verseText: 'Todo o que o Pai me dá virá a mim; e o que vem a mim de maneira nenhuma o lançarei fora.',
        context: 'A garantia infalível de Cristo para todo aquele que O busca sinceramente.',
      },
      {
        ref: '1 João 1:9',
        verseText: 'Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça.',
        context: 'A promessa de perdão e restauração para o coração quebrantado.',
      },
    ],
    pageCount: 16,
    publishedAt: '2024-10-02',
    readTime: '8 min de leitura',
    iconName: 'flame',
    pdfFileName: 'A-blasfemia-contra-o-Espirito-Santo.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'A blasfêmia contra o Espírito Santo',
        subtitle: 'AD. Ministério Correndo para Deus - Ev. Renan',
      },
      {
        pageNumber: 2,
        title: 'Texto base: MT 12 : 30 - 32',
        bibleVerses: [
          {
            ref: 'Mateus 12:30-32',
            text: 'Aquele que não está comigo, está contra mim; e aquele que comigo não ajunta, espalha. Por esse motivo eu lhes digo: todo pecado e blasfêmia serão perdoados aos homens, mas a blasfêmia contra o Espírito não será perdoada. Todo aquele que disser uma palavra contra o Filho do homem será perdoado, mas quem falar contra o Espírito Santo não será perdoado, nem nesta era nem na era que há de vir.',
          },
        ],
      },
      {
        pageNumber: 3,
        title: 'Características da Blasfêmia',
        bulletPoints: [
          'Rejeição à Deus.',
          'Único pecado que não tem perdão (a partir do momento de sua consciência).',
          'Atribuir a Satanás ou a outro ser, a obra que Deus realiza através do Espírito Santo.',
          'Falar contra / se opor a Deus.',
          'Rejeição ao arrependimento e à fé.',
          'Os fariseus rejeitaram Jesus, e Ele disse que até isso poderia ser perdoado. O verdadeiro perigo é rejeitar o Espírito Santo.',
        ],
      },
      {
        pageNumber: 4,
        title: 'Onde nasce a blasfêmia?',
        subtitle: 'Qual o principal pecado que gera isso???',
      },
      {
        pageNumber: 5,
        title: 'Pergunta de reflexão',
        options: [
          { label: '(a)', text: 'prostituição' },
          { label: '(b)', text: 'incredulidade' },
          { label: '(c)', text: 'idolatria' },
          { label: '(d)', text: 'orgulho' },
        ],
      },
      {
        pageNumber: 6,
        title: 'Resposta correta',
        highlight: 'A raiz é a (b) incredulidade!',
      },
      {
        pageNumber: 7,
        title: 'A incredulidade',
        bulletPoints: [
          'A incredulidade é o motivo pelo qual Deus deixa ou simplesmente não age na vida de muitos.',
          'Em alguns milagres que Jesus realizou, Ele disse no fim: “vai, a tua fé te salvou”.',
          'No tempo de Cristo muitos sofriam de enfermidades, tribulações e até possessões demoníacas, mas Cristo só curava aqueles que criam.',
          'Deus só pode salvar quem crer nele → Hebreus 11:1 e 6.',
        ],
      },
      {
        pageNumber: 8,
        title: 'Hebreus 11',
        bibleVerses: [
          {
            ref: 'Hebreus 11:1',
            text: 'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos.',
          },
          {
            ref: 'Hebreus 11:6',
            text: 'Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam.',
          },
        ],
      },
      {
        pageNumber: 9,
        title: 'Será que eu já cometi a blasfêmia?',
        subtitle: 'A grande angústia de muitos cristãos e jovens sinceros.',
      },
      {
        pageNumber: 10,
        title: 'Entendendo a fase do perdão',
        bulletPoints: [
          'Para ser salva, a pessoa precisa crer e se arrepender dos seus pecados (João 16:7-9; Atos dos Apóstolos 3:19-20).',
          'Por isso, quem blasfema contra o Espírito Santo não pode ser perdoado, porque rejeita a convicção do Espírito e não se arrepende.',
          'Rejeitar o arrependimento e a fé é blasfêmia porque insulta a Deus, que deu tudo para trazer a salvação e a libertação do pecado.',
          'A incredulidade é um pecado que, para ser perdoado, precisa de arrependimento e fé. Sem isso não há perdão.',
        ],
      },
      {
        pageNumber: 11,
        title: 'Como vencer a incredulidade?',
        bibleVerses: [
          {
            ref: 'Romanos 10:17',
            text: 'Consequentemente, a fé vem por ouvir a mensagem, e a mensagem é ouvida mediante a palavra de Cristo.',
          },
          {
            ref: 'Gálatas 3:2',
            text: 'Gostaria de saber apenas uma coisa: foi pela prática da lei que vocês receberam o Espírito, ou pela fé naquilo que ouviram?',
          },
        ],
      },
      {
        pageNumber: 12,
        title: 'Tá. Mas e eu?',
        bulletPoints: [
          'O blasfemo é aquele que se opõe a Deus em qualquer aspecto sem sentir tristeza, remorso e/ou preocupação, e pior ainda, se tem a consciência de que aquilo que fala e faz é oposto ao Reino, mas mesmo assim continua O rejeitando.',
          'Se você está arrependido, então não cometeu a blasfêmia contra o Espírito Santo!',
          'Jesus NUNCA rejeita quem vem a Ele. Confesse seu pecado e você receberá o perdão (João 6:37; 1 João 1:9).',
        ],
      },
      {
        pageNumber: 13,
        title: 'Arrependimento X Remorso',
        subtitle: 'Entendendo a diferença crucial para a vida espiritual.',
      },
      {
        pageNumber: 14,
        title: 'A diferença:',
        bulletPoints: [
          'O arrependimento consiste na transformação de atitudes, pensamentos e palavras para demonstrar o verdadeiro desdém para as coisas velhas, para o passado e para o pecado.',
          'O remorso é um sentimento passageiro de tristeza ou mágoa por conta de algo que você fez, ouviu, ou aconteceu.',
          'Sendo assim, vemos que o arrependimento é quando, além de nos entristecermos, nós mudamos!',
        ],
        table: {
          headers: ['Conceito', 'Definição Bíblica', 'Resultado'],
          rows: [
            ['Arrependimento', 'Transformação de atitudes, pensamentos e palavras (desdém para o pecado).', 'Entristecimento com MUDANÇA real de vida!'],
            ['Remorso', 'Sentimento passageiro de mágoa por algo feito ou ocorrido.', 'Tristeza temporária sem transformação.'],
          ],
        },
      },
      {
        pageNumber: 15,
        title: 'Resumo',
        highlight: 'Blasfêmia é: rejeitar a Deus, a fé e o arrependimento; falar contra e se opor ativamente a Deus; dar os créditos a outro pelas obras que Deus realiza. A falta de fé é a raiz da blasfêmia e quando consciente, impede o perdão.',
      },
      {
        pageNumber: 16,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Ev. Renan',
        isEnd: true,
      },
    ],
  },
  {
    id: 'os-olhos-sao-as-janelas-da-alma',
    slug: 'os-olhos-sao-as-janelas-da-alma',
    studyNumber: 'Estudo 04',
    title: 'Os olhos são as janelas da alma',
    subtitle: 'O perigo do olhar carnal, a pureza dos pensamentos e a guarda do coração',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    description: 'Um alerta bíblico e prático sobre a vigilância do que contemplamos, o perigo do olhar carnal e como guardar o coração mantendo os olhos fitos em Cristo.',
    summary: 'Este estudo bíblico aborda com profundidade e clareza a vigilância espiritual sobre aquilo que deixamos entrar pelos nossos olhos. A partir do alerta de Jesus no Sermão do Monte e nas advertências dos Provérbios, o material demonstra como o olhar carnal desdobra-se em cobiça (concupiscência da carne, cobiça dos olhos e soberba da vida) e atinge a alma — o centro dos sentimentos, reações emotivas e vontades. O estudo nos chama a cortar o mal pela raiz, guardar o coração, renovar os pensamentos em tudo o que é puro e nobre (Filipenses 4:8) e fixar o nosso olhar exclusivamente em Jesus (Hebreus 12:2).',
    category: 'Vida cristã',
    topics: [
      'A cobiça',
      'Concupiscência da carne',
      'Cobiça dos olhos',
      'Soberba da vida',
      '“É apenas um olhar!”',
      'Cuidado com pensamentos',
      'Para quem olhar?',
      'A alma',
      'Guardar o coração',
      'Relação entre alma, sentimentos e vontades',
    ],
    keywords: [
      'olhos',
      'alma',
      'coração',
      'cobiça',
      'pensamentos',
      'pureza',
      'santidade',
      'jesus',
      'olhar',
      'sentimentos',
      'vontades',
    ],
    bibleReferences: [
      {
        ref: 'Mateus 5:28',
        verseText: 'Eu, porém, vos digo: qualquer que olhar para uma mulher com intenção impura, no coração já cometeu adultério com ela.',
        context: 'Jesus ensina a raiz do pecado no coração e a urgência de cortar o mal logo no primeiro olhar.',
      },
      {
        ref: 'Provérbios 15:3',
        verseText: 'Os olhos do Senhor estão em todo lugar, vigiando os maus e os bons.',
        context: 'A certeza de que nada escapa aos olhos de Deus e que diante d’Ele todas as coisas são manifestas.',
      },
      {
        ref: 'Mateus 6:22',
        verseText: 'A lâmpada do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz.',
        context: 'A pureza da visão espiritual determina se a nossa vida será cheia de luz divina ou de trevas.',
      },
      {
        ref: 'Filipenses 4:8',
        verseText: 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.',
        context: 'O antídoto bíblico contra pensamentos carnais: alimentar a mente com aquilo que glorifica a Deus.',
      },
      {
        ref: 'Hebreus 12:2',
        verseText: 'Olhando firmemente para Jesus, autor e consumador da nossa fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz.',
        context: 'A resposta definitiva para onde devemos direcionar o nosso foco: Jesus Cristo.',
      },
      {
        ref: 'Provérbios 4:23',
        verseText: 'Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.',
        context: 'A proteção da alma e do íntimo como prioridade absoluta na caminhada cristã.',
      },
      {
        ref: 'Efésios 2:1-5',
        verseText: 'Ele vos deu vida, estando vós mortos nos vossos delitos e pecados... Mas Deus, sendo rico em misericórdia, pelo grande amor com que nos amou, deu-nos vida juntamente com Cristo.',
        context: 'A graça vivificadora de Deus que resgata a alma da morte espiritual e dá nova vida pelo Espírito.',
      },
    ],
    pageCount: 12,
    publishedAt: '2024-10-15',
    readTime: '7 min de leitura',
    iconName: 'book',
    pdfFileName: 'Os-olhos-sao-as-janelas-da-alma.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'Os olhos são as janelas da alma',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
      },
      {
        pageNumber: 2,
        title: 'Introdução',
        bulletPoints: [
          'Olhar o bem e desviar os olhos da maldade é um alerta bíblico.',
          'Jesus falou enfaticamente sobre os perigos de um olhar carnal e os desdobramentos catastróficos que ele pode produzir trazendo escândalo e vergonha.',
          'É por isso que já conhecendo a natureza carnal do ser humano, Jesus orienta que se corte o mal pela raiz evitando tudo que possa levá-lo ao pecado.',
        ],
      },
      {
        pageNumber: 3,
        title: 'A cobiça',
        bulletPoints: [
          'Concupiscência da carne: É o desejo propriamente dito da natureza não regenerada: É aquilo que a nossa carne deseja.',
          'Cobiça dos olhos: É o desejo de ter, de possuir, de conquistar. Pode ser dinheiro, como pode ser outras coisas.',
          'Soberba da vida: É o desejo de ser reconhecido, de dominar, de controlar, de ser exaltado, engrandecido.',
        ],
      },
      {
        pageNumber: 4,
        title: 'Está entregue a quem fez?',
        bibleVerses: [
          {
            ref: 'Provérbios 20:12',
            text: 'O ouvido que ouve e o olho que vê, o Senhor os fez a ambos.',
          },
        ],
        bulletPoints: [
          'Nossos sentidos pertencem ao Criador.',
          'Consagrar a visão Àquele que nos fez é o princípio da sabedoria.',
        ],
      },
      {
        pageNumber: 5,
        title: '“É apenas um olhar!”',
        bibleVerses: [
          {
            ref: 'Mateus 5:28',
            text: 'Eu, porém, vos digo: qualquer que olhar para uma mulher com intenção impura, no coração já cometeu adultério com ela.',
          },
          {
            ref: 'Provérbios 15:3',
            text: 'Os olhos do Senhor estão em todo lugar, vigiando os maus e os bons.',
          },
        ],
      },
      {
        pageNumber: 6,
        title: 'Definindo com intensidade',
        bibleVerses: [
          {
            ref: 'Mateus 6:22',
            text: 'A lâmpada do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz.',
          },
        ],
      },
      {
        pageNumber: 7,
        title: 'Tomando cuidado com pensamentos',
        bibleVerses: [
          {
            ref: 'Filipenses 4:8',
            text: 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.',
          },
        ],
      },
      {
        pageNumber: 8,
        title: 'Para quem olhar?',
        bibleVerses: [
          {
            ref: 'Hebreus 12:2',
            text: 'Olhando firmemente para Jesus, autor e consumador da nossa fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz.',
          },
        ],
      },
      {
        pageNumber: 9,
        title: 'A alma',
        bulletPoints: [
          'Centro dos sentimentos e das reações emotivas sustentadas pelos 5 sentidos;',
          'Nascente dos desejos;',
          'Alma = Coração → Enganoso → Jr 17:9;',
          'Guardando o seu coração: Pv 4:23;',
          'Imortal;',
          'O pecado fere → Sl 41:4;',
          'Crucificando a natureza carnal → Rm 6:6',
        ],
      },
      {
        pageNumber: 10,
        title: 'Princípio Central',
        highlight: 'A alma (coração / sentimentos / vontades) só é movida pelo espírito, se o mesmo estiver vivificado pela Palavra!',
      },
      {
        pageNumber: 11,
        title: 'Efésios 2:1-5',
        bibleVerses: [
          {
            ref: 'Efésios 2:1-5',
            text: 'Ele vos deu vida, estando vós mortos nos vossos delitos e pecados... Mas Deus, sendo rico em misericórdia, pelo grande amor com que nos amou, deu-nos vida juntamente com Cristo.',
          },
        ],
      },
      {
        pageNumber: 12,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
        isEnd: true,
      },
    ],
  },
  {
    id: 'batismos-e-dons-do-espirito-santo',
    slug: 'batismos-e-dons-do-espirito-santo',
    studyNumber: 'Estudo 05',
    title: 'Batismos e Dons do Espírito Santo',
    subtitle: 'Batismo nas águas, batismo no Espírito Santo e o detalhamento dos 9 dons espirituais',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    description: 'Estudo completo e minucioso sobre o batismo nas águas como testemunho de fé, o batismo no Espírito Santo como capacitação diária e o funcionamento prático dos 9 dons espirituais divididos em 3 grupos bíblicos.',
    summary: 'Com 26 páginas de conteúdo expositivo, este estudo analisa primeiro o batismo nas águas (ordenação de Jesus, circuncisão do coração e confissão do novo homem). Em seguida, aborda o batismo no Espírito Santo, desmistificando ideias equivocadas e mostrando que seus frutos são a transformação de vida e a busca diária. Na segunda metade, detalha cada um dos 9 dons espirituais divididos em: Dons de Revelação (Palavra de sabedoria, Palavra de conhecimento, Discernimento de espíritos); Dons de Poder (Fé, Dom de cura, Operação de maravilhas); e Dons de Fala (Profecia, Variedade de línguas, Interpretação de línguas).',
    category: 'Espírito Santo',
    topics: [
      'Significado e propósito do batismo nas águas',
      'Batismo como ordenança de Jesus (Mateus 28:19)',
      'O batismo não salva, mas acompanha a salvação (1 Pe 3:21)',
      'Circuncisão do coração e sepultamento do velho homem (Cl 2:11-12 e Ef 4:22-24)',
      'Diferença entre batismo nas águas e batismo no Espírito Santo',
      'Evidências reais do batismo no Espírito (mudança de hábitos, oração e Palavra)',
      'O que são os dons espirituais e sua finalidade na igreja',
      'Os 9 dons espirituais divididos em 3 grupos',
      'Dons de Revelação: Sabedoria, Conhecimento e Discernimento de espíritos',
      'Dons de Poder: Fé especial, Cura e Operação de maravilhas',
      'Dons de Fala: Profecia, Variedade de línguas e Interpretação de línguas',
      'Como buscar, exercitar e progredir nos dons espirituais (1 Co 14:12)',
    ],
    keywords: [
      'batismo',
      'águas',
      'espírito santo',
      'dons espirituais',
      'revelação',
      'cura',
      'profecia',
      'línguas',
      '1 coríntios 14',
      'pentecostes',
      'santidade',
    ],
    bibleReferences: [
      {
        ref: 'Mateus 28:19',
        verseText: 'Ide, portanto, fazei discípulos de todas as nações, batizando-as em nome do Pai, do Filho, e do Espírito Santo.',
        context: 'A ordenança irrevogável da Grande Comissão instituída por Jesus.',
      },
      {
        ref: 'Marcos 16:15-16',
        verseText: 'Quem crer e for batizado será salvo; quem, porém, não crer será condenado.',
        context: 'O batismo como consequência pública da fé no Senhor Jesus.',
      },
      {
        ref: '1 Pedro 3:21',
        verseText: 'Que também, como uma verdadeira figura, agora vos salva, o batismo, não do despojamento da imundícia da carne, mas da indagação de uma boa consciência para com Deus, pela ressurreição de Jesus Cristo.',
        context: 'O batismo como figura de uma consciência lavada e consagrada ao Pai.',
      },
      {
        ref: 'Colossenses 2:11-12',
        verseText: 'Nele também fostes circuncidados, não por intermédio de mãos, mas no despojamento do corpo da carne, que é a circuncisão de Cristo; tendo sido sepultados juntamente com ele no batismo...',
        context: 'A identificação espiritual da morte para o pecado e ressurreição para a vida eterna com Cristo.',
      },
      {
        ref: '1 Coríntios 14:1-12',
        verseText: 'Segui o amor, e procurai com zelo os dons espirituais, mas principalmente o de profetizar... assim também vós, já que estais desejosos de dons espirituais, procurai progredir, para a edificação da igreja.',
        context: 'A disciplina e o objetivo primordial dos dons: edificar, exortar e consolar o corpo de Cristo.',
      },
      {
        ref: 'Atos 8:36-37',
        verseText: 'E disse o eunuco: Eis aqui água; que impede que eu seja batizado? E disse Filipe: É lícito, se crês de todo o coração. E, respondendo ele, disse: Creio que Jesus Cristo é o Filho de Deus.',
        context: 'A condição bíblica fundamental para o batismo: a fé sincera e integral em Jesus.',
      },
    ],
    pageCount: 26,
    publishedAt: '2024-11-01',
    readTime: '12 min de leitura',
    iconName: 'sparkles',
    pdfFileName: 'Batismos-e-Dons-do-Espirito-Santo.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'Batismos e Dons do Espírito Santo',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
      },
      {
        pageNumber: 2,
        title: 'Acerca do batismo nas águas.',
        subtitle: 'Significado, fundamentos e ordenança bíblica.',
      },
      {
        pageNumber: 3,
        title: 'O quê e para quê?',
        bulletPoints: [
          'O batismo é a imersão de uma pessoa nas águas, e tem um lindo significado.',
          'Além de ser um testemunho público da nossa fé em Jesus, ele fala algo.',
          'É o meio através do qual externamos que tipo de fé temos depositado em Jesus Cristo.',
          'É o meio pelo qual confirmamos a vida do novo homem em nós, e a confissão de abandono da velha vida.',
        ],
      },
      {
        pageNumber: 4,
        title: 'É uma ordenança de Jesus.',
        bibleVerses: [
          {
            ref: 'Mateus 28:19',
            text: 'Ide, portanto, fazei discípulos de todas as nações, batizando-as em nome do Pai, do Filho, e do Espírito Santo.',
          },
        ],
      },
      {
        pageNumber: 5,
        title: 'Prova da fé.',
        bibleVerses: [
          {
            ref: 'Marcos 16:15-16',
            text: 'Ide por todo o mundo e pregai o evangelho a toda criatura. Quem crer e for batizado será salvo; quem, porém, não crer será condenado.',
          },
        ],
      },
      {
        pageNumber: 6,
        title: 'O batismo não salva, mas acompanha a salvação.',
        bibleVerses: [
          {
            ref: '1 Pedro 3:21',
            text: 'Que também, como uma verdadeira figura, agora vos salva, o batismo, não do despojamento da imundícia da carne, mas da indagação de uma boa consciência para com Deus, pela ressurreição de Jesus Cristo.',
          },
        ],
      },
      {
        pageNumber: 7,
        title: 'Circuncisão do coração.',
        bibleVerses: [
          {
            ref: 'Colossenses 2:11-12',
            text: 'Nele também fostes circuncidados, não por intermédio de mãos, mas no despojamento do corpo da carne, que é a circuncisão de Cristo; tendo sido sepultados juntamente com ele no batismo, no qual igualmente fostes ressuscitados pela fé no poder de Deus.',
          },
        ],
      },
      {
        pageNumber: 8,
        title: '“Nova” identidade.',
        bibleVerses: [
          {
            ref: 'Efésios 4:22,24',
            text: 'Quanto à antiga maneira de viver, vocês foram ensinados a despir-se do velho homem... a serem renovados no modo de pensar e a revestir-se do novo homem, criado para ser semelhante a Deus em justiça e em santidade provenientes da verdade.',
          },
        ],
      },
      {
        pageNumber: 9,
        title: 'Acerca do batismo com o Espírito Santo.',
        subtitle: 'A promessa do Pai e a capacitação para o ministério.',
      },
      {
        pageNumber: 10,
        title: 'Definindo…',
        bulletPoints: [
          'O batismo no Espírito Santo é diferente do batismo nas águas.',
          'O primeiro batismo no Espírito Santo foi vivido em Pentecostes (Atos 2).',
          'Não há uma forma padrão para o batismo no Espírito Santo.',
          'É encher-se do Espírito Santo diariamente.',
          'Para ser batizado no Espírito é preciso desejar e buscar.',
        ],
      },
      {
        pageNumber: 11,
        title: 'É possível saber que alguém foi batizado no Espírito Santo?',
        bulletPoints: [
          'Primeiramente vale ressaltar que falar em línguas não é a prova única e oficial de que alguém recebeu o batismo, mas pode sim acontecer de receber o dom após o batismo.',
          'O batismo no Espírito produz uma transformação real na vida de quem o recebe: mudança de hábitos e mentalidade, encontro pessoal com Jesus Cristo, busca de vida de oração, maior consciência, leitura constante da Sagrada Escritura e empenho na obra d’Ele.',
        ],
      },
      {
        pageNumber: 12,
        title: 'Acerca dos dons espirituais.',
        subtitle: 'Ferramentas celestiais para a edificação do corpo de Cristo.',
      },
      {
        pageNumber: 13,
        title: 'O quê e para quê?',
        bulletPoints: [
          'Os dons espirituais são “habilidades” que são dadas por Deus para nós, a igreja.',
          'Eles são essenciais para o nosso crescimento individual e também de todo o corpo de Cristo.',
        ],
      },
      {
        pageNumber: 14,
        title: 'Os 9 dons em 3 grupos.',
        bulletPoints: [
          'DONS DE REVELAÇÃO: Palavra de sabedoria; Palavra de conhecimento; Discernimento de espíritos.',
          'DONS DE PODER: Fé; Dom de cura; Operação de maravilhas.',
          'DONS DE FALA: Profecia; Variedade de línguas; Interpretação de línguas.',
        ],
      },
      {
        pageNumber: 15,
        title: 'Palavra de conhecimento.',
        bulletPoints: [
          'É quando você tem uma revelação de alguma coisa que já aconteceu ou está acontecendo.',
          'Geralmente, é algo em que você precisa refletir sobre o significado do que foi revelado para você.',
          'Isso pode acontecer através de um testemunho interior (aquilo que você simplesmente sabe sem ninguém precisar ter falado para você - visões, sonhos etc.).',
        ],
      },
      {
        pageNumber: 16,
        title: 'Palavra de sabedoria.',
        bulletPoints: [
          'Este dom é bem parecido com a palavra de conhecimento, mas está mais ligado ao futuro.',
          'Ele é a revelação de algo, seguido de um conselho.',
          'Esse é o dom que mais se aproxima daquilo que chamamos de “profecia” hoje em dia.',
          'Vemos muito ele na Bíblia quando Deus revela algo para que uma pessoa possa aconselhar ou dar um aviso a outra.',
        ],
      },
      {
        pageNumber: 17,
        title: 'Discernimento de espíritos.',
        bulletPoints: [
          'Ele nos dá a capacidade de perceber o mundo espiritual à nossa volta.',
          'Se você já ouviu a voz de Deus audivelmente, se já viu anjos — ou demônios — ou conseguiu identificar espíritos malignos em meio a batalhas espirituais, isso foi uma manifestação do dom de discernimento de espíritos.',
        ],
      },
      {
        pageNumber: 18,
        title: 'Cura.',
        bulletPoints: [
          'O mais simples de explicar: é a manifestação de qualquer milagre que envolva cura física ou biológica para a glória do Senhor.',
        ],
      },
      {
        pageNumber: 19,
        title: 'Fé.',
        bulletPoints: [
          'A fé também é um dom de poder. Mas este dom não é igual a fé que temos normalmente.',
          'Podemos dizer que é uma fé “especial”.',
          'Este dom é quando ocorrem milagres cujo único propósito é exaltar o Reino de Deus de forma passiva (o milagre acontece com a pessoa que recebe o dom).',
        ],
      },
      {
        pageNumber: 20,
        title: 'Operações de maravilhas.',
        bulletPoints: [
          'Este dom é quando se manifestam milagres que não sejam nem de cura e nem de fé.',
          'Você realiza o dom de forma ativa e não o recebe passivamente.',
          'O melhor exemplo disso são os milagres que Jesus realizava, como transformar a água em vinho ou andar sobre as águas.',
        ],
      },
      {
        pageNumber: 21,
        title: 'Variedade de línguas.',
        bulletPoints: [
          'O dom de variedade de línguas serve para falar qualquer língua, seja ela o que muitos chamam de “língua estranha” ou “língua dos anjos”, ou uma outra língua de um outro idioma, como em Atos 2.',
        ],
      },
      {
        pageNumber: 22,
        title: 'Interpretação de línguas.',
        bulletPoints: [
          'Este dom, como o próprio nome já diz, é quando ocorre a interpretação daquilo que está sendo dito por outra pessoa no dom de variedade de línguas.',
          'Note que a Bíblia diz que, somados, os dons de variedade de línguas e o de interpretação de línguas são iguais ao dom de profecia (1 Co 14).',
        ],
      },
      {
        pageNumber: 23,
        title: 'Profecias.',
        bulletPoints: [
          'Uma fala inspirada por Deus para o coração humano.',
          'Geralmente funciona como confirmação de algo que a pessoa já sabe.',
          'Serve para 3 propósitos específicos: EDIFICAÇÃO, ENCORAJAMENTO e CONSOLAÇÃO das pessoas e da igreja (1 Co 14).',
        ],
      },
      {
        pageNumber: 24,
        title: 'Como tê-los?',
        bulletPoints: [
          'A melhor forma de desenvolver um dom espiritual é praticando e mantendo-se em santidade.',
          'Ninguém nasce sabendo, mas sim vai melhorando no manifestar do dom (1 Co 14:12).',
          'Se é possível crescer nos dons espirituais, logo tem um progresso e uma melhora que precisa ser buscada.',
          'Requer renúncia e busca com jejuns e orações para fortalecer a igreja.',
        ],
      },
      {
        pageNumber: 25,
        title: 'Palavra para reflexão.',
        bibleVerses: [
          {
            ref: 'Atos 8:36-37',
            text: 'E, indo eles caminhando, chegaram ao pé de alguma água, e disse o eunuco: Eis aqui água; que impede que eu seja batizado? E disse Filipe: É lícito, se crês de todo o coração. E, respondendo ele, disse: Creio que Jesus Cristo é o Filho de Deus.',
          },
        ],
      },
      {
        pageNumber: 26,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
        isEnd: true,
      },
    ],
  },
  {
    id: 'desfazendo-heresias-e-analisando-citacoes',
    slug: 'desfazendo-heresias-e-analisando-citacoes',
    studyNumber: 'Estudo 06',
    title: 'Desfazendo heresias e analisando citações',
    subtitle: 'Análise criteriosa de 10 frases e “ditados populares” que muitos pensam estar na Bíblia',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    description: 'Um estudo indispensável de discernimento bíblico que analisa e corrige 10 frases populares frequentemente citadas como se fossem versículos da Bíblia, confrontando-as com o texto sagrado real.',
    summary: 'É comum ouvir em conversas entre cristãos, letras de louvor e pregações os chamados “ditados bíblicos” que não estão nas Escrituras. Este estudo examina 10 citações famosas: 1) “Vinde a mim como estás, mas não permaneceis” (confrontado com Mt 11:28); 2) “O cair é do homem, mas o levantar é de Deus” (Pv 24:16); 3) “Quem não vem pelo amor, vem pela dor”; 4) “O dinheiro é a raiz de todos os males” (1 Tm 6:10 mostra que é o amor ao dinheiro); 5) “Esforça-te, e eu te ajudarei” (Js 1:9); 6) “Eu venci o mundo, e vós vencereis” (Jo 16:33 e Rm 8:37); 7) “Diga-me com quem tu andas, e eu te direi quem és” (Pv 16:29 e 1 Co 15:33); 8) “É dando que se recebe” (Atos 20:35); 9) “Quem com ferro fere, com ferro será ferido” (Mt 26:52); 10) “Não cai uma folha da árvore sem que Deus queira” (Lc 12:7 e Sl 147:4). O estudo conclui com uma exortação solene do Coop. Renan para analisar e estudar as Escrituras antes de receber qualquer ensinamento no coração.',
    category: 'Bíblia',
    topics: [
      'Introdução: ditados populares vs verdade bíblica',
      'Citação 1: “Vinde a mim como estás” vs Mateus 11:28',
      'Citação 2: “O cair é do homem” vs Provérbios 24:16',
      'Citação 3: “Quem não vem pelo amor, vem pela dor”',
      'Citação 4: “O dinheiro é a raiz de todos os males” vs 1 Timóteo 6:10',
      'Citação 5: “Esforça-te e eu te ajudarei” vs Josué 1:9',
      'Citação 6: “Eu venci o mundo e vós vencereis” vs João 16:33 e Rm 8:37',
      'Citação 7: “Diga-me com quem andas” vs Provérbios e 1 Co 15:33',
      'Citação 8: “É dando que se recebe” vs Atos 20:35',
      'Citação 9: “Quem com ferro fere” vs Mateus 26:52',
      'Citação 10: “Não cai uma folha” vs Lucas 12:7 e Salmos 147:4',
      'Exortação final: analisar antes de receber no coração',
    ],
    keywords: [
      'heresias',
      'ditados bíblicos',
      'citações',
      'discernimento',
      'verdade',
      'bíblia',
      'mateus 11',
      '1 timóteo 6',
      'josué 1',
      'provérbios',
      'escrituras',
    ],
    bibleReferences: [
      {
        ref: 'Mateus 11:28',
        verseText: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.',
        context: 'O convite gracioso de Jesus aos exaustos, sem acréscimos humanos.',
      },
      {
        ref: 'Provérbios 24:16',
        verseText: 'Porque sete vezes cairá o justo, e se levantará; mas os ímpios tropeçarão no mal.',
        context: 'A perseverança do justo sustentado por Deus em meio às quedas e lutas.',
      },
      {
        ref: '1 Timóteo 6:10',
        verseText: 'Porque o amor ao dinheiro é a raiz de toda a espécie de males; e nessa cobiça alguns se desviaram da fé, e se traspassaram a si mesmos com muitas dores.',
        context: 'O apóstolo Paulo adverte sobre a ganância e o apego idólatra às riquezas.',
      },
      {
        ref: 'Josué 1:9',
        verseText: 'Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.',
        context: 'O encorajamento do Senhor a Josué fundamentado na Sua presença contínua.',
      },
      {
        ref: 'João 16:33',
        verseText: 'Tenho-vos dito isto para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.',
        context: 'A paz prometida por Jesus mesmo diante das tribulações do mundo.',
      },
      {
        ref: 'Atos 20:35',
        verseText: 'Tenho-vos mostrado em tudo que, trabalhando assim, é necessário auxiliar os enfermos, e recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa é dar do que receber.',
        context: 'O ensinamento autêntico de Cristo resgatado pelo apóstolo Paulo.',
      },
      {
        ref: 'Mateus 26:52',
        verseText: 'Então Jesus disse-lhe: Embainha a tua espada; porque todos os que lançarem mão da espada, à espada morrerão.',
        context: 'A repreensão de Jesus a Pedro no Getsêmani sobre a violência física.',
      },
      {
        ref: 'Lucas 12:7',
        verseText: 'E até os cabelos da vossa cabeça estão todos contados. Não temais, pois; mais valeis vós do que muitos passarinhos.',
        context: 'O cuidado meticuloso e soberano de Deus com Seus filhos.',
      },
    ],
    pageCount: 14,
    publishedAt: '2024-11-20',
    readTime: '9 min de leitura',
    iconName: 'shield',
    pdfFileName: 'Desfazendo-heresias-e-analisando-citacoes.pdf',
    slides: [
      {
        pageNumber: 1,
        title: 'Desfazendo heresias e analisando citações',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
      },
      {
        pageNumber: 2,
        title: 'Introdução',
        bulletPoints: [
          'É comum observar em conversas entre cristãos, letras de música, e até mesmo em mensagens de pregações, os “ditados bíblicos” que não estão na Bíblia.',
          'Ainda que estas frases não sejam leais às Escrituras Sagradas, muitas delas são coerentes aos princípios bíblicos – se usadas corretamente.',
        ],
      },
      {
        pageNumber: 3,
        title: '1. “Vinde a mim como estás, mas não permaneceis.”',
        bibleVerses: [
          {
            ref: 'Mateus 11:28',
            text: 'Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.',
          },
        ],
        bulletPoints: [
          'A frase em si não é errada ao pensar sobre o ponto de vista de que não devemos permanecer da mesma maneira que nos achegamos à graça.',
          'Mas erramos ao anunciar isso como algo bíblico, ou até mesmo dizer que foi Jesus quem disse isso nas Escrituras.',
        ],
      },
      {
        pageNumber: 4,
        title: '2. “O cair é do homem, mas o levantar é de Deus.”',
        bibleVerses: [
          {
            ref: 'Provérbios 24:16',
            text: 'Porque sete vezes cairá o justo, e se levantará; mas os ímpios tropeçarão no mal.',
          },
        ],
        bulletPoints: [
          'Essa frase, que é muito conhecida, não está na Bíblia.',
          'Sua acertividade e coerência é decorrente de uma correta interpretação do ato de “cair e levantar”, mas não atribua isso como um versículo bíblico.',
        ],
      },
      {
        pageNumber: 5,
        title: '3. “Quem não vem pelo amor, vem pela dor.”',
        bulletPoints: [
          'Apesar de ser algo verídico e que é possível ver muitos casos em nosso meio, esta citação não é uma citação da bíblia.',
          'Como dito, não é errado dizer essa afirmação, mas lembre-se que não há versículos na bíblia que dizem isso, apenas casos que comprovam a veracidade dessa frase.',
        ],
      },
      {
        pageNumber: 6,
        title: '4. “O dinheiro é a raiz de todos os males.”',
        bibleVerses: [
          {
            ref: '1 Timóteo 6:10',
            text: 'Porque o amor ao dinheiro é a raiz de toda a espécie de males; e nessa cobiça alguns se desviaram da fé, e se traspassaram a si mesmos com muitas dores.',
          },
        ],
        bulletPoints: [
          'A raiz de todos os males não é o dinheiro, mas sim o amor ao dinheiro.',
          'Na boca de muitos a palavra de 1 Timóteo é distorcida, colocando o dinheiro, que é um objeto, como culpado no lugar do amor a ele, que procede do coração humano.',
        ],
      },
      {
        pageNumber: 7,
        title: '5. “Esforça-te, e eu te ajudarei.”',
        bulletPoints: [
          'O termo “esforça-te” é, de fato, encontrado várias vezes na Bíblia, mas em nenhum momento está acompanhado de “e eu te ajudarei”.',
          'Exemplos bíblicos reais: “Esforça-te, e faze a obra” (1 Cr 28:10); “Esforça-te, e clama” (Gl 4:27); “Não to mandei eu? Esforça-te, e tem bom ânimo” (Josué 1:9).',
          'Podemos sim usar esta frase de outra forma, mas não diga que está na bíblia quando não está!',
        ],
      },
      {
        pageNumber: 8,
        title: '6. “Eu venci o mundo, e vós vencereis.”',
        bibleVerses: [
          {
            ref: 'João 16:33',
            text: 'Tenho-vos dito isto para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.',
          },
          {
            ref: 'Romanos 8:37',
            text: 'Mas em todas estas coisas somos mais que vencedores, por meio daquele que nos amou.',
          },
        ],
        bulletPoints: [
          'Na bíblia, não há a frase “e vós também vencereis”. Vencemos porque permanecemos ao lado de Jesus.',
        ],
      },
      {
        pageNumber: 9,
        title: '7. “Diga-me com quem tu andas, e eu te direi quem és.”',
        bulletPoints: [
          'Embora o livro de Provérbios traga essa ideia, este versículo literal não existe.',
          'Veja Provérbios 16:29: “O homem violento persuade o seu companheiro, e guia-o por caminho não bom”.',
          'Princípio comprovado por 1 Co 15:33, Sl 119:115, Pv 13:20, Pv 22:24-25, Pv 27:17 e Jr 15:17.',
        ],
      },
      {
        pageNumber: 10,
        title: '8. “É dando que se recebe.”',
        bibleVerses: [
          {
            ref: 'Atos 20:35',
            text: 'Tenho-vos mostrado em tudo que, trabalhando assim, é necessário auxiliar os enfermos, e recordar as palavras do Senhor Jesus, que disse: Mais bem-aventurada coisa é dar do que receber.',
          },
        ],
        bulletPoints: [
          'Muitos mencionam esta frase em confusão com a oração de São Francisco.',
          'Faremos o bem até por aqueles que nos afetaram de maneira ruim, sem exigir retorno humano imediato.',
        ],
      },
      {
        pageNumber: 11,
        title: '9. “Quem com ferro fere, com ferro será ferido.”',
        bibleVerses: [
          {
            ref: 'Mateus 26:52',
            text: 'Todos os que lançarem mão da espada, à espada morrerão.',
          },
        ],
        bulletPoints: [
          'Isso mostra o princípio da semeadura: o que plantarmos, colheremos cedo ou tarde.',
        ],
      },
      {
        pageNumber: 12,
        title: '10. “Não cai uma folha da árvore sem que Deus queira.”',
        bibleVerses: [
          {
            ref: 'Lucas 12:7',
            text: 'E até os cabelos da vossa cabeça estão todos contados. Não temais, pois; vocês valem mais do que muitos passarinhos.',
          },
          {
            ref: 'Salmos 147:4',
            text: 'Conta o número das estrelas, chamando-as a todas pelos seus nomes.',
          },
        ],
        bulletPoints: [
          'Não é um versículo bíblico literal (assemelha-se a frase do alcorão), mas a Bíblia ensina a soberania total de Deus sobre toda a criação.',
        ],
      },
      {
        pageNumber: 13,
        title: 'Exortação Pastoral',
        highlight: '“Estude e entenda aquilo que você escuta e analise antes de receber em seu coração, para que você não carregue palavras distorcidas das verdadeiras palavras, e nem venha passar falsas informações acerca da palavra do nosso Deus.” — Coop. Renan',
      },
      {
        pageNumber: 14,
        title: 'Fim…',
        subtitle: 'AD. Ministério Correndo para Deus - Coop. Renan',
        isEnd: true,
      },
    ],
  },
];

export const CATEGORIES: Exclude<CategoryType, 'Todos'>[] = [
  'Adoração',
  'Doutrina',
  'Espírito Santo',
  'Vida cristã',
  'Bíblia',
];

export const CATEGORY_DESCRIPTIONS: Record<Exclude<CategoryType, 'Todos'>, string> = {
  'Adoração': 'Compreensão bíblica profunda sobre a diferença entre louvor e adoração, adoração em espírito e em verdade e consagração diária da vida.',
  'Doutrina': 'Fundamentos bíblicos sobre a constituição humana (corpo, alma e espírito), antropologia cristã e santificação integral.',
  'Espírito Santo': 'Estudos bíblicos detalhados sobre a Pessoa do Espírito Santo, batismo nas águas e no Espírito, operação dos 9 dons e o esclarecimento sobre a blasfêmia.',
  'Vida cristã': 'Vigilância espiritual prática, pureza do olhar, proteção dos pensamentos e guarda do coração em Cristo.',
  'Bíblia': 'Discernimento e exegese bíblica: desfazendo falsos ditados populares e heresias para manter a fidelidade inegociável à Palavra de Deus.',
};
