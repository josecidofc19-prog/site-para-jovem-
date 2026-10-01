export interface Study {
  id: string;
  title: string;
  author: string;
  pageCount: number;
  pdfFileName: string;
  category?: string;
  description?: string;
  publishedAt?: string;
  bibleReferences?: string[];
}
