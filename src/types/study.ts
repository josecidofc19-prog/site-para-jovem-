export type CategoryType = 
  | 'Todos'
  | 'Adoração'
  | 'Doutrina'
  | 'Espírito Santo'
  | 'Vida cristã'
  | 'Bíblia';

export interface BibleReference {
  ref: string;
  verseText: string;
  context?: string;
}

export interface SlideContent {
  pageNumber: number;
  title: string;
  subtitle?: string;
  bulletPoints?: string[];
  bibleVerses?: { ref: string; text?: string }[];
  highlight?: string;
  options?: { label: string; text: string; correct?: boolean }[];
  table?: { headers: string[]; rows: string[][] };
  diagram?: { title?: string; steps: { title: string; subtitle?: string; verses?: string }[] };
  isEnd?: boolean;
}

export interface Study {
  id: string;
  slug: string;
  studyNumber: string; // e.g. "Estudo 01"
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  summary: string;
  category: Exclude<CategoryType, 'Todos'>;
  topics: string[];
  keywords: string[];
  bibleReferences: BibleReference[];
  pageCount: number;
  publishedAt: string;
  readTime: string;
  iconName: 'book' | 'crown' | 'cross' | 'heart' | 'flame' | 'leaf' | 'sparkles' | 'compass' | 'shield';
  pdfFileName: string;
  slides: SlideContent[];
}
