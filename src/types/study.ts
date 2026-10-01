export type CategoryType = 'Todos' | 'Vida cristã' | 'Espírito Santo' | 'Oração / Vida cristã' | 'Fé / Doutrina' | 'Bíblia';

export interface Study {
  id: string;
  title: string;
  author?: string;
  description?: string;
  category?: Exclude<CategoryType, 'Todos'>;
  pageCount?: number;
  pdfFileName: string;
  bibleReferences?: string[];
}
