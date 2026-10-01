export interface SlideEstudo {
  numero: number;
  titulo: string;
  conteudo: string[];
  referencias?: string[];
  destaque?: string;
}

export interface Estudo {
  id: string;
  identificador?: string; // "Estudo 01", "Estudo 02", etc.
  titulo: string;
  subtitulo?: string;
  autor: string;
  descricao: string;
  categoria: string;
  assuntos: string[];
  palavrasChave: string[];
  referencias: string[];
  arquivoPdf: string; // caminho público: /estudos/[arquivo].pdf
  paginas: number;
  data?: string;
  icone: string;
  slides: SlideEstudo[];
  destaqueFinal?: string;
}

export const CATEGORIAS = [
  'Todos',
  'Bíblia',
  'Fé',
  'Oração',
  'Vida cristã',
  'Jovens',
  'Espírito Santo',
] as const;

export const ESTUDOS: Estudo[] = [
  {
    id: 'os-olhos-sao-as-janelas-da-alma',
    identificador: 'Estudo 01',
    titulo: 'Os olhos são as janelas da alma',
    subtitulo: 'O perigo do olhar carnal e a guarda do coração',
    autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
    categoria: 'Vida cristã',
    paginas: 12,
    data: '2024-10-22',
    icone: 'flame',
    descricao: 'Um estudo sobre o cuidado com aquilo que vemos, nossos desejos, pensamentos e a importância de guardar o coração.',
    assuntos: [
      'A cobiça (concupiscência da carne, cobiça dos olhos, soberba da vida)',
      'Está entregue a quem fez?',
      'É apenas um olhar!',
      'Definindo com intensidade',
      'Tomando cuidado com pensamentos',
      'Para quem olhar?',
      'A alma (coração, sentimentos, vontades)',
      'Efésios 2:1-5',
    ],
    palavrasChave: ['olhos', 'alma', 'coração', 'cobiça', 'pensamentos', 'vigilância', 'santidade'],
    referencias: [
      'Provérbios 20:12',
      'Mateus 5:28',
      'Provérbios 15:3',
      'Mateus 6:22',
      'Filipenses 4:8',
      'Hebreus 12:2',
      'Jeremias 17:9',
      'Provérbios 4:23',
      'Salmos 41:4',
      'Romanos 6:6',
      'Efésios 2:1-5',
    ],
    arquivoPdf: '/estudos/Os olhos sao as janelas da alma.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'Os olhos são as janelas da alma',
        conteudo: [
          'AD. Ministério Correndo para Deus - Coop. Renan',
          'Um alerta bíblico e prático para a juventude cristã.',
        ],
      },
      {
        numero: 2,
        titulo: 'Introdução',
        conteudo: [
          'Olhar o bem e desviar os olhos da maldade é um alerta bíblico.',
          'Jesus falou enfaticamente sobre os perigos de um olhar carnal e os desdobramentos catastróficos que ele pode produzir trazendo escândalo e vergonha.',
          'É por isso que já conhecendo a natureza carnal do ser humano, Jesus orienta que se corte o mal pela raiz evitando tudo que possa levá-lo ao pecado.',
        ],
      },
      {
        numero: 3,
        titulo: 'A cobiça',
        conteudo: [
          '• Concupiscência da carne: É o desejo propriamente dito da natureza não regenerada: É aquilo que a nossa carne deseja.',
          '• Cobiça dos olhos: É o desejo de ter, de possuir, de conquistar. Pode ser dinheiro, como pode ser outras coisas.',
          '• Soberba da vida: É o desejo de ser reconhecido, de dominar, de controlar, de ser exaltado, engrandecido.',
        ],
      },
      {
        numero: 4,
        titulo: 'Está entregue a quem fez?',
        conteudo: [
          'Provérbios 20:12: “O ouvido que ouve, e o olho que vê, o Senhor os fez a ambos.”',
          'Se Deus nos deu a visão, ela deve ser consagrada para honrar o Criador.',
        ],
        referencias: ['Provérbios 20:12'],
      },
      {
        numero: 5,
        titulo: '“É apenas um olhar!”',
        conteudo: [
          'Mateus 5:28: “Eu, porém, vos digo: qualquer que olhar para uma mulher com intenção impura, no coração já cometeu adultério com ela.”',
          'Provérbios 15:3: “Os olhos do Senhor estão em todo lugar, contemplando os maus e os bons.”',
        ],
        referencias: ['Mateus 5:28', 'Provérbios 15:3'],
      },
      {
        numero: 6,
        titulo: 'Definindo com intensidade',
        conteudo: [
          'Mateus 6:22: “A lâmpada do corpo são os olhos; de sorte que, se os teus olhos forem bons, todo o teu corpo terá luz.”',
          'A visão direciona as atitudes e reflete o estado interior do coração.',
        ],
        referencias: ['Mateus 6:22'],
      },
      {
        numero: 7,
        titulo: 'Tomando cuidado com pensamentos',
        conteudo: [
          'Filipenses 4:8: “Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.”',
        ],
        referencias: ['Filipenses 4:8'],
      },
      {
        numero: 8,
        titulo: 'Para quem olhar?',
        conteudo: [
          'Hebreus 12:2: “Olhando firmemente para Jesus, autor e consumador da nossa fé.”',
        ],
        referencias: ['Hebreus 12:2'],
      },
      {
        numero: 9,
        titulo: 'A alma',
        conteudo: [
          '• Centro dos sentimentos e das reações emotivas sustentadas pelos 5 sentidos;',
          '• Nascente dos desejos;',
          '• Alma = Coração → Enganoso → Jr 17:9;',
          '• Guardando o seu coração: Pv 4:23;',
          '• Imortal;',
          '• O pecado fere → Sl 41:4;',
          '• Crucificando a natureza carnal → Rm 6:6.',
        ],
        referencias: ['Jeremias 17:9', 'Provérbios 4:23', 'Salmos 41:4', 'Romanos 6:6'],
      },
      {
        numero: 10,
        titulo: 'Edificação Interior',
        conteudo: [
          'A alma (coração / sentimentos / vontades) só é movida pelo espírito, se o mesmo estiver vivificado pela Palavra!',
        ],
        destaque: 'A alma só é movida pelo espírito se o mesmo estiver vivificado pela Palavra de Deus!',
      },
      {
        numero: 11,
        titulo: 'Efésios 2:1-5',
        conteudo: [
          '“Ele vos vivificou, estando vós mortos nos vossos delitos e pecados... Mas Deus, sendo rico em misericórdia, pelo seu muito amor com que nos amou, deu-nos vida juntamente com Cristo.”',
        ],
        referencias: ['Efésios 2:1-5'],
      },
      {
        numero: 12,
        titulo: 'Conclusão',
        conteudo: [
          'Fim do estudo.',
          'Consagre seus olhos e guarde o seu coração em fidelidade a Cristo.',
        ],
      },
    ],
    destaqueFinal: '“A alma só é movida pelo espírito se o mesmo estiver vivificado pela Palavra de Deus!” — Coop. Renan',
  },
  {
    id: 'batismos-e-dons-do-espirito-santo',
    identificador: 'Estudo 02',
    titulo: 'Batismos e Dons do Espírito Santo',
    subtitulo: 'Acerca do batismo nas águas, batismo no Espírito e os 9 dons espirituais',
    autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
    categoria: 'Espírito Santo',
    paginas: 26,
    data: '2024-11-05',
    icone: 'leaf',
    descricao: 'Estudo bíblico abrangente dividido em três partes: o batismo nas águas, o batismo com o Espírito Santo e a manifestação dos 9 dons espirituais.',
    assuntos: [
      'Acerca do batismo nas águas (o quê, para quê, ordenança de Jesus, prova da fé)',
      'Circuncisão do coração e nova identidade (Ef 4:22-24)',
      'Acerca do batismo com o Espírito Santo (Pentecostes em Atos 2, busca diária)',
      'Sinais da transformação real no Espírito',
      'Os 9 dons em 3 grupos: revelação, poder e fala',
      'Como buscar e exercitar os dons com jejuns e oração',
    ],
    palavrasChave: ['batismo', 'águas', 'espírito santo', 'dons espirituais', 'pentecostes', 'profecia', 'línguas'],
    referencias: [
      'Mateus 28:19',
      'Marcos 16:15-16',
      '1 Pedro 3:21',
      'Colossenses 2:11-12',
      'Efésios 4:22-24',
      'Atos 2:1-4',
      '1 Coríntios 12:7-11',
      '1 Coríntios 14:1-12',
      'Atos 8:36-37',
    ],
    arquivoPdf: '/estudos/Batismos e Dons do Espirito Santo.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'Batismos e Dons do Espírito Santo',
        conteudo: ['AD. Ministério Correndo para Deus - Coop. Renan'],
      },
      {
        numero: 2,
        titulo: 'Acerca do batismo nas águas',
        conteudo: [
          'O quê e para quê?',
          'O batismo é a imersão de uma pessoa nas águas, e tem um lindo significado: além de ser um testemunho público da nossa fé em Jesus, ele fala algo.',
          'Na verdade é o meio através do qual externamos que tipo de fé temos depositado em Jesus Cristo, confirmamos a vida do novo homem em nós e a confissão de abandono da velha vida.',
        ],
        referencias: ['Mateus 28:19', 'Marcos 16:15-16'],
      },
      {
        numero: 3,
        titulo: 'O batismo não salva, mas acompanha a salvação',
        conteudo: [
          'Marcos 16:16: “Quem crer e for batizado será salvo. Quem não crer será condenado.”',
          '1 Pedro 3:21: O batismo não é despojamento da imundícia da carne, mas a indagação de uma boa consciência para com Deus.',
        ],
        referencias: ['Marcos 16:16', '1 Pedro 3:21'],
      },
      {
        numero: 4,
        titulo: 'Circuncisão do coração e Nova Identidade',
        conteudo: [
          'Colossenses 2:11-12: Despojamento do corpo da carne, sepultados juntamente com Ele no batismo e ressuscitados pela fé.',
          'Efésios 4:22-24: Despir-se do velho homem e revestir-se do novo homem, criado para ser semelhante a Deus.',
        ],
        referencias: ['Colossenses 2:11-12', 'Efésios 4:22-24'],
      },
      {
        numero: 5,
        titulo: 'Acerca do batismo com o Espírito Santo',
        conteudo: [
          '• O batismo no Espírito Santo é diferente do batismo nas águas.',
          '• O primeiro batismo no Espírito Santo foi vivido em Pentecostes (Atos 2).',
          '• Não há uma forma padrão para o batismo no Espírito Santo.',
          '• É encher-se do Espírito Santo diariamente.',
          '• Para ser batizado no Espírito é preciso desejar e buscar.',
        ],
        referencias: ['Atos 2:1-4'],
      },
      {
        numero: 6,
        titulo: 'É possível saber que alguém foi batizado no Espírito Santo?',
        conteudo: [
          'Falar em línguas não é a prova única e oficial de que alguém recebeu o batismo, mas pode sim acontecer de receber o dom após o batismo.',
          'O batismo no Espírito produz uma transformação real na vida de quem o recebe: mudança de hábitos e mentalidade, encontro pessoal com Jesus Cristo, busca de vida de oração, leitura constante das Escrituras e capacitação divina.',
        ],
      },
      {
        numero: 7,
        titulo: 'Os 9 dons em 3 grupos',
        conteudo: [
          '• Dons de revelação: Palavra de sabedoria; Palavra de conhecimento; Discernimento de espíritos.',
          '• Dons de poder: Fé; Dom de cura; Operação de maravilhas.',
          '• Dons de fala: Profecia; Variedade de línguas; Interpretação de línguas.',
        ],
        referencias: ['1 Coríntios 12:7-11', '1 Coríntios 14'],
      },
      {
        numero: 8,
        titulo: 'Como tê-los e desenvolvê-los?',
        conteudo: [
          'A melhor forma de desenvolver um dom espiritual é praticando e mantendo-se em santidade.',
          'Ninguém nasce sabendo, mas vai melhorando no manifestar do dom (1 Co 14:12).',
          'Requer de nós dedicação, busca com jejuns e orações para edificação da igreja.',
        ],
        referencias: ['1 Coríntios 14:12'],
      },
    ],
    destaqueFinal: '“Os dons espirituais existem para a edificação, encorajamento e consolação do corpo de Cristo.” — Coop. Renan',
  },
  {
    id: 'a-blasfemia-contra-o-espirito-santo',
    identificador: 'Estudo 03',
    titulo: 'A blasfêmia contra o Espírito Santo',
    subtitulo: 'Análise bíblica do pecado imperdoável e a segurança do arrependimento genuíno',
    autor: 'AD. Ministério Correndo para Deus — Ev. Renan',
    categoria: 'Espírito Santo',
    paginas: 16,
    data: '2024-10-08',
    icone: 'heart',
    descricao: 'Análise profunda e bíblica sobre Mateus 12:30-32, a raiz da incredulidade, a diferença entre arrependimento e remorso, e o acolhimento seguro de Cristo.',
    assuntos: [
      'Texto base: Mateus 12:30-32',
      'Características da blasfêmia (rejeição consciente à obra de Deus)',
      'Onde nasce a blasfêmia: a raiz na incredulidade',
      'Como vencer a incredulidade pela Palavra de Cristo (Rm 10:17)',
      'Entendendo o perdão: Jesus nunca rejeita quem se arrepende',
      'Arrependimento X Remorso (tristeza transitória versus mudança de vida)',
    ],
    palavrasChave: ['blasfêmia', 'espírito santo', 'perdão', 'incredulidade', 'arrependimento', 'fé'],
    referencias: [
      'Mateus 12:30-32',
      'Hebreus 11:1',
      'Hebreus 11:6',
      'João 16:7-9',
      'Atos 3:19-20',
      'Romanos 10:17',
      'Gálatas 3:2',
      'João 6:37',
      '1 João 1:9',
    ],
    arquivoPdf: '/estudos/A blasfemia contra o Espirito Santo.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'A blasfêmia contra o Espírito Santo',
        conteudo: ['AD. Ministério Correndo para Deus - Ev. Renan'],
      },
      {
        numero: 2,
        titulo: 'Texto base: Mateus 12:30-32',
        conteudo: [
          '“Aquele que não está comigo, está contra mim; e aquele que comigo não ajunta, espalha.',
          'Por esse motivo eu lhes digo: todo pecado e blasfêmia serão perdoados aos homens, mas a blasfêmia contra o Espírito não será perdoada.',
          'Todo aquele que disser uma palavra contra o Filho do homem será perdoado, mas quem falar contra o Espírito Santo não será perdoado, nem nesta era nem na era que há de vir.”',
        ],
        referencias: ['Mateus 12:30-32'],
      },
      {
        numero: 3,
        titulo: 'Características da Blasfêmia',
        conteudo: [
          '• Rejeição a Deus;',
          '• Único pecado que não tem perdão (a partir do momento de sua consciência);',
          '• Atribuir a Satanás ou a outro ser, a obra que Deus realiza através do Espírito Santo;',
          '• Falar contra / se opor ativamente a Deus;',
          '• Rejeição deliberada ao arrependimento e à fé.',
        ],
        destaque: 'Os fariseus rejeitaram Jesus, e Ele disse que até isso poderia ser perdoado. O verdadeiro perigo é rejeitar a convicção do Espírito Santo.',
      },
      {
        numero: 4,
        titulo: 'A Raiz: Incredulidade',
        conteudo: [
          'A incredulidade é o motivo pelo qual Deus deixa de agir na vida de muitos.',
          'Hebreus 11:1: A fé é a certeza do que se espera e a prova do que não se vê.',
          'Hebreus 11:6: Sem fé é impossível agradar a Deus.',
        ],
        referencias: ['Hebreus 11:1', 'Hebreus 11:6'],
      },
      {
        numero: 5,
        titulo: 'Tá. Mas e eu? Será que já cometi?',
        conteudo: [
          'O blasfemo se opõe a Deus sem sentir tristeza, remorso ou preocupação, rejeitando conscientemente a salvação.',
          'Se você está arrependido, então NÃO cometeu a blasfêmia contra o Espírito Santo!',
          'Jesus NUNCA rejeita quem vem a Ele. Confesse seu pecado e você receberá o perdão (João 6:37; 1 João 1:9).',
        ],
        referencias: ['João 6:37', '1 João 1:9'],
      },
      {
        numero: 6,
        titulo: 'Arrependimento X Remorso',
        conteudo: [
          '• Arrependimento: transformação de atitudes, pensamentos e palavras, abandonando as coisas velhas e o pecado. Quando nos entristecemos e mudamos!',
          '• Remorso: sentimento passageiro de mágoa ou tristeza por algo feito ou ocorrido, sem conversão.',
        ],
        destaque: 'Arrependimento é quando, além de nos entristecermos, nós mudamos!',
      },
    ],
    destaqueFinal: '“Se você sente tristeza pelo pecado e deseja a Deus, venha a Jesus: Ele jamais rejeita um coração arrependido.” — Ev. Renan',
  },
  {
    id: 'a-tricotomia-humana',
    identificador: 'Estudo 04',
    titulo: 'A tricotomia humana',
    subtitulo: 'Compreendendo as divisões entre Corpo, Alma e Espírito segundo a Bíblia',
    autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
    categoria: 'Fé',
    paginas: 13,
    data: '2024-09-24',
    icone: 'cross',
    descricao: 'Estudo bíblico sobre a constituição do ser humano em corpo, alma e espírito, a batalha entre carne e espírito e o propósito eterno da criação.',
    assuntos: [
      'Tricotomia: divisão do ser humano em três partes (1 Ts 5:23 / Hb 4:12)',
      'Diferença fundamental: Espírito ≠ Alma',
      'Características do Corpo (visível, temporal, templo divino)',
      'Características da Alma (centro das emoções, sentimentos e vontades)',
      'Características do Espírito (imortal, canal de comunhão com o Pai)',
      'Identificando distúrbios emocionais e o propósito da unidade para morar com Deus',
    ],
    palavrasChave: ['tricotomia', 'corpo', 'alma', 'espírito', 'luta interior', 'emoções', 'eternidade'],
    referencias: [
      '1 Tessalonicenses 5:23',
      'Hebreus 4:12',
      'Mateus 10:28',
      'Mateus 22:37',
      'Romanos 8:1',
      'Gálatas 5:19-22',
      '1 Coríntios 15:51-53',
    ],
    arquivoPdf: '/estudos/A tricotomia humana.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'A tricotomia humana',
        conteudo: ['AD. Ministério Correndo para Deus - Coop. Renan'],
      },
      {
        numero: 2,
        titulo: 'Introdução e Base Bíblica',
        conteudo: [
          '1 Tessalonicenses 5:23: “E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.”',
          'Hebreus 4:12: A Palavra penetra até à divisão da alma e do espírito.',
        ],
        referencias: ['1 Tessalonicenses 5:23', 'Hebreus 4:12'],
      },
      {
        numero: 3,
        titulo: 'As Três Camadas',
        conteudo: [
          '1. Corpo — Tangível, superficial, visível, temporal, templo divino.',
          '2. Alma — Intangível, centro dos sentimentos, desejos e vontades.',
          '3. Espírito — Intangível, homem espiritual e imortal que se comunica com o Deus eterno.',
        ],
        referencias: ['Mateus 10:28', 'Mateus 22:37'],
      },
      {
        numero: 4,
        titulo: 'Entendendo Nossa Luta Interior',
        conteudo: [
          'A alma é o campo de batalha entre as inclinações da carne (Gl 5:19) e o fruto do Espírito (Gl 5:22).',
          'Pela lei do Espírito da Vida em Cristo Jesus, encontramos paz e vitória.',
        ],
        referencias: ['Romanos 8:1', 'Gálatas 5:19-22'],
      },
      {
        numero: 5,
        titulo: 'Propósito Eterno',
        conteudo: [
          'Deus nos constituiu um ser triúno para um único propósito: Adorar a Deus e se preparar para morar com Ele para todo o sempre (1 Co 15:51-53).',
        ],
        destaque: 'Adorar a Deus e se preparar para morar com Ele para todo sempre.',
        referencias: ['1 Coríntios 15:51-53'],
      },
    ],
    destaqueFinal: '“Deus nos constituiu para adorá-Lo com todo o nosso ser: corpo, alma e espírito.” — Coop. Renan',
  },
  {
    id: 'adoracao-nao-e-louvor',
    identificador: 'Estudo 05',
    titulo: 'Adoração ≠ Louvor',
    subtitulo: 'Compreendendo o significado dos termos bíblicos e a adoração como estilo de vida',
    autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
    categoria: 'Oração',
    paginas: 11,
    data: '2024-09-10',
    icone: 'crown',
    descricao: 'Diferenciação bíblica e etimológica entre louvar e adorar, o verdadeiro significado de Proskuneo e a adoração como entrega total.',
    assuntos: [
      'Significado dos termos: Louvar versus Adorar',
      'A raiz grega Proskuneo (prostrar-se, reverência e intimidade)',
      'A raiz hebraica Halal e Zamar (música e celebração)',
      'O diálogo de Jesus com a mulher samaritana (João 4:20-24)',
      'O perigo de louvar com os lábios com o coração distante (Mateus 15:8-9)',
      'Adoração como estilo de vida prático e obediência à Palavra',
    ],
    palavrasChave: ['adoração', 'louvor', 'proskuneo', 'intimidade', 'joão 4', 'estilo de vida'],
    referencias: [
      'João 4:20-24',
      'Salmos 150:1-6',
      'Mateus 15:8-9',
    ],
    arquivoPdf: '/estudos/Adoracao nao e louvor.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'Adoração ≠ Louvor',
        conteudo: ['AD. Ministério Correndo para Deus - Coop. Renan'],
      },
      {
        numero: 2,
        titulo: 'Significado dos Termos',
        conteudo: [
          '• Louvar: Enaltecer alguém ou alguma coisa; elogio; admiração.',
          '• Adorar: Prestar culto; reverenciar; amar muito; venerar.',
          'Ambas as palavras são diferentes e seus significados espirituais também são.',
        ],
      },
      {
        numero: 3,
        titulo: 'O que é Adoração?',
        conteudo: [
          'Vem do grego “PROSKUNEO”: prostrar-se, cair com o rosto em terra, render-se com profunda reverência.',
          'Adoramos somente ao Senhor! Para adorarmos, precisamos estar bem perto, pois adoração é intimidade e amor profundo.',
        ],
        referencias: ['João 4:20-24'],
      },
      {
        numero: 4,
        titulo: 'O que é Louvor?',
        conteudo: [
          'No AT, vem do hebraico “HALAL” (fazer ruído jubiloso) e “ZÃMAR” (música tocada ou cantada). No NT, “EUCHARISTEIN” (agradecer) e “EULOGEIN” (bendizer).',
          'Louvor é a expressão e manifestação exterior desse amor.',
        ],
        destaque: 'Lembrando que: antes de eu amar, eu preciso conhecer!',
        referencias: ['Salmos 150:1-6'],
      },
      {
        numero: 5,
        titulo: 'Tome cuidado!',
        conteudo: [
          'Podemos cair no erro de louvar a Deus com os lábios, mas não adorá-Lo de todo o coração (Mt 15:8-9).',
          'Não limite a adoração à música. Adoração é um estilo de vida, entrega total e obediência contínua à Palavra de Deus.',
        ],
        referencias: ['Mateus 15:8-9'],
      },
    ],
    destaqueFinal: '“A adoração consiste exatamente em oferecer-se a Deus.” — Rick Warren',
  },
  {
    id: 'desfazendo-heresias-e-analisando-citacoes',
    identificador: 'Estudo 06',
    titulo: 'Desfazendo heresias e analisando citações',
    subtitulo: 'Análise criteriosa e bíblica de 10 ditados populares atribuídos erroneamente à Bíblia',
    autor: 'AD. Ministério Correndo para Deus — Coop. Renan',
    categoria: 'Bíblia',
    paginas: 14,
    data: '2024-08-20',
    icone: 'book',
    descricao: 'Exame bíblico minucioso de 10 frases populares comumente confundidas com versículos bíblicos, resgatando os textos bíblicos autênticos.',
    assuntos: [
      '1. Vinde a mim como estás, mas não permaneceis (Bíblia: Mt 11:28)',
      '2. O cair é do homem, mas o levantar é de Deus (Bíblia: Pv 24:16)',
      '3. Quem não vem pelo amor, vem pela dor',
      '4. O dinheiro é a raiz de todos os males (Bíblia: 1 Tm 6:10)',
      '5. Esforça-te, e eu te ajudarei (Bíblia: Js 1:9 / 1 Cr 28:10)',
      '6. Eu venci o mundo, e vós vencereis (Bíblia: Jo 16:33 / Rm 8:37)',
      '7. Diga-me com quem tu andas...',
      '8. É dando que se recebe (Bíblia: At 20:35)',
      '9. Quem com ferro fere, com ferro será ferido (Bíblia: Mt 26:52)',
      '10. Não cai uma folha da árvore sem Deus querer (Bíblia: Lc 12:7 / Sl 147:4)',
    ],
    palavrasChave: ['heresias', 'ditados populares', 'bíblia', 'doutrina', 'verdade', 'escrituras'],
    referencias: [
      'Mateus 11:28',
      'Provérbios 24:16',
      '1 Timóteo 6:10',
      'Josué 1:9',
      'João 16:33',
      'Romanos 8:37',
      'Provérbios 16:29',
      'Atos 20:35',
      'Mateus 26:52',
      'Lucas 12:7',
    ],
    arquivoPdf: '/estudos/Desfazendo heresias e analisando citacoes.pdf',
    slides: [
      {
        numero: 1,
        titulo: 'Desfazendo heresias e analisando citações',
        conteudo: ['AD. Ministério Correndo para Deus - Coop. Renan'],
      },
      {
        numero: 2,
        titulo: 'Introdução',
        conteudo: [
          'É comum observar em conversas entre cristãos, letras de música e pregações os “ditados bíblicos” que na verdade NÃO estão na Bíblia.',
          'Ainda que algumas frases carreguem bons conselhos, erramos ao atribuí-las como palavras de Jesus ou Escritura Sagrada.',
        ],
      },
      {
        numero: 3,
        titulo: 'Ditados 1 a 4',
        conteudo: [
          '1. “Vinde a mim como estás...” → Bíblia diz: “Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei” (Mt 11:28).',
          '2. “O cair é do homem...” → Texto que remete: “Sete vezes cairá o justo, e se levantará” (Pv 24:16).',
          '3. “Quem não vem pelo amor...” → Não há versículo com esta citação.',
          '4. “O dinheiro é a raiz...” → Bíblia diz: “O amor ao dinheiro é a raiz de toda a espécie de males” (1 Tm 6:10). O problema é a cobiça do coração humano, não o papel moeda.',
        ],
        referencias: ['Mateus 11:28', 'Provérbios 24:16', '1 Timóteo 6:10'],
      },
      {
        numero: 4,
        titulo: 'Ditados 5 a 10',
        conteudo: [
          '5. “Esforça-te e eu te ajudarei” → Bíblia diz: “Esforça-te, e tem bom ânimo” (Js 1:9).',
          '6. “Eu venci o mundo e vós vencereis” → Bíblia diz: “No mundo tereis aflições, mas tende bom ânimo, eu venci o mundo” (Jo 16:33; Rm 8:37).',
          '8. “É dando que se recebe” → Jesus disse: “Mais bem-aventurada coisa é dar do que receber” (At 20:35).',
          '9. “Quem com ferro fere...” → Jesus disse: “Todos os que lançarem mão da espada, à espada morrerão” (Mt 26:52).',
          '10. “Não cai uma folha...” → Bíblia afirma o cuidado soberano de Deus (Lc 12:7; Sl 147:4).',
        ],
        referencias: ['Josué 1:9', 'João 16:33', 'Atos 20:35', 'Mateus 26:52', 'Lucas 12:7'],
      },
    ],
    destaqueFinal: '“Estude e entenda aquilo que você escuta e analise antes de receber em seu coração, para que você não carregue palavras distorcidas das verdadeiras palavras de Deus.” — Coop. Renan',
  },
];
