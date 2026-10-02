import { Study, CategoryType } from '../types/study';

export const STUDIES: Study[] = [
  {
    id: 'os-olhos-sao-as-janelas-da-alma',
    title: 'Os olhos são as janelas da alma',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    category: 'Vida cristã',
    description: 'Um estudo sobre o cuidado com aquilo que vemos, nossos desejos, pensamentos e a importância de guardar o coração.',
    pageCount: 12,
    pdfFileName: 'os-olhos-sao-as-janelas-da-alma.pdf',
    bibleReferences: ['Provérbios 20:12', 'Mateus 5:28', 'Provérbios 15:3', 'Mateus 6:22', 'Filipenses 4:8', 'Hebreus 12:2', 'Jeremias 17:9', 'Provérbios 4:23', 'Salmos 41:4', 'Romanos 6:6', 'Efésios 2:1-5']
  },
  {
    id: 'a-blasfemia-contra-o-espirito-santo',
    title: 'A blasfêmia contra o Espírito Santo',
    author: 'AD. Ministério Correndo para Deus - Ev. Renan',
    category: 'Espírito Santo',
    description: 'Um estudo sobre o significado da blasfêmia contra o Espírito Santo, a diferença entre arrependimento e remorso, e como vencer a incredulidade.',
    pageCount: 16,
    pdfFileName: 'a-blasfemia-contra-o-espirito-santo.pdf',
    bibleReferences: ['MT 12 : 30 - 32', 'João 16:7-9', 'Atos 3:19-20', 'Romanos 10:17', 'Gálatas 3:2', 'João 6:37', '1 João 1:9']
  },
  {
    id: 'adoracao-louvor',
    title: 'Adoração ≠ Louvor',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    category: 'Oração / Vida cristã',
    description: 'Entendendo a diferença entre louvor e adoração, o significado dos termos e a importância de oferecer a Deus uma adoração com o coração.',
    pageCount: 11,
    pdfFileName: 'adoracao-louvor.pdf',
    bibleReferences: ['Salmos 150:1-6', 'Mateus 15:8-9']
  },
  {
    id: 'batismos-e-dons-do-espirito-santo',
    title: 'Batismos e Dons do Espírito Santo',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    category: 'Espírito Santo',
    description: 'Estudo sobre o batismo nas águas, o batismo no Espírito Santo e os dons espirituais, seu propósito e como buscá-los.',
    pageCount: 26,
    pdfFileName: 'batismos-e-dons-do-espirito-santo.pdf',
    bibleReferences: ['Mateus 28:19', 'Marcos 16:15-16', '1 Pedro 3:21', 'Colossenses 2:11-12', 'Efésios 4:22-24', 'Atos 2', '1 Coríntios 14', 'Atos 8:36-37']
  },
  {
    id: 'a-tricotomia-humana',
    title: 'A tricotomia humana',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    category: 'Fé / Doutrina',
    description: 'Uma análise sobre as três camadas do ser humano (corpo, alma e espírito) e como cada uma se relaciona com Deus e com o mundo.',
    pageCount: 13,
    pdfFileName: 'a-tricotomia-humana.pdf',
    bibleReferences: ['1 Tessalonicenses 5:23', 'Hebreus 4:12', 'Mateus 10:28', 'Mateus 22:37', '1 Coríntios 15:51-53']
  },
  {
    id: 'desfazendo-heresias-e-analisando-citacoes',
    title: 'Desfazendo heresias e analisando citações',
    author: 'AD. Ministério Correndo para Deus - Coop. Renan',
    category: 'Bíblia',
    description: 'Um estudo focado em desfazer heresias comuns e analisar citações à luz das Sagradas Escrituras.',
    pdfFileName: 'desfazendo-heresias-e-analisando-citacoes.pdf'
  }
];

export const CATEGORIES: Exclude<CategoryType, 'Todos'>[] = [
  'Vida cristã', 'Espírito Santo', 'Oração / Vida cristã', 'Fé / Doutrina', 'Bíblia'
];
