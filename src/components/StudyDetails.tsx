import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Download, 
  User, 
  FileText, 
  Tag, 
  BookOpen 
} from 'lucide-react';
import { Study } from '../types/study';
import { PdfViewer } from './PdfViewer';
import { getPdfOriginalUrl } from '../utils/pdfOriginal';

interface StudyDetailsProps {
  study: Study;
  prevStudy?: Study;
  nextStudy?: Study;
  totalStudies: number;
  onBack: () => void;
  onSelectStudy: (id: string) => void;
}

export const StudyDetails: React.FC<StudyDetailsProps> = ({
  study,
  prevStudy,
  nextStudy,
  totalStudies,
  onBack,
  onSelectStudy,
}) => {
  const pdfUrl = getPdfOriginalUrl(study.pdfFileName);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [study.id]);

  const hasBibleReferences = study.bibleReferences && study.bibleReferences.length > 0;

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* 1. ← Voltar para estudos */}
      <nav aria-label="Navegação" className="mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para estudos</span>
        </button>
      </nav>

      {/* Artigo Oficial do Estudo */}
      <article className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-10 card-shadow mb-8">
        
        {/* 2. Título */}
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] mb-4 leading-tight">
          {study.title}
        </h1>

        {/* 3. Autor, Categoria e Número de Páginas (SÓ os que existem) */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--text-muted)] pb-6 border-b border-[var(--border)]">
          {study.author && (
            <div className="flex items-center gap-1.5 font-medium text-[var(--text-main)]">
              <User className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>{study.author}</span>
            </div>
          )}

          {study.category && (
            <div className="flex items-center gap-1 font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              <span>{study.category}</span>
            </div>
          )}

          {study.pageCount && (
            <div className="flex items-center gap-1.5 font-medium text-[var(--text-muted)]">
              <FileText className="w-4 h-4 text-[var(--primary)] shrink-0" />
              <span>{study.pageCount} páginas</span>
            </div>
          )}
        </div>

        {/* 4. ABRIR PDF ORIGINAL (Primeiro Botão) */}
        <div className="flex flex-wrap items-center gap-3 pt-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm shadow-xs transition-colors min-h-[44px]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>ABRIR PDF ORIGINAL</span>
          </a>

          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 bg-[var(--bg-page)] hover:bg-[var(--bg-surface)] text-[var(--primary-dark)] font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
          >
            <Download className="w-4 h-4 text-[var(--primary)]" />
            <span>Baixar PDF original</span>
          </a>
        </div>

        {/* 5. Leitor com as páginas reais do PDF */}
        <div className="mt-4 mb-6">
          <PdfViewer pdfFileName={study.pdfFileName} title={study.title} />
        </div>

        {/* 6. Referências bíblicas (SÓ se existirem) */}
        {hasBibleReferences && (
          <div className="mt-6 pt-6 border-t border-[var(--border)]">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[var(--primary)]" />
              <span>Referências bíblicas citadas</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {study.bibleReferences!.map((ref, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-[var(--bg-hero)] text-[var(--primary)] border border-[var(--border)]"
                >
                  📖 {ref}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* 7. ABRIR PDF ORIGINAL (Segundo Botão abaixo do leitor) */}
        <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[var(--border)]">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm shadow-xs transition-colors min-h-[44px]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>ABRIR PDF ORIGINAL</span>
          </a>

          <a
            href={pdfUrl}
            download
            className="inline-flex items-center justify-center gap-2 bg-[var(--bg-page)] hover:bg-[var(--bg-surface)] text-[var(--primary-dark)] font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
          >
            <Download className="w-4 h-4 text-[var(--primary)]" />
            <span>Baixar PDF original</span>
          </a>
        </div>

      </article>

      {/* 8. Estudo anterior e Próximo estudo (somente quando houver mais de um) */}
      {totalStudies > 1 && (
        <nav aria-label="Navegação entre estudos" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevStudy ? (
            <button
              onClick={() => onSelectStudy(prevStudy.id)}
              className="text-left p-4 rounded-[14px] bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] transition-all card-shadow flex flex-col justify-between group min-h-[44px]"
            >
              <span className="text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--primary)]">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Estudo anterior</span>
              </span>
              <span className="text-sm sm:text-base font-bold text-[var(--primary-dark)] line-clamp-1">
                {prevStudy.title}
              </span>
            </button>
          ) : <div />}

          {nextStudy ? (
            <button
              onClick={() => onSelectStudy(nextStudy.id)}
              className="text-right p-4 rounded-[14px] bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] transition-all card-shadow flex flex-col justify-between items-end group min-h-[44px]"
            >
              <span className="text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--primary)]">
                <span>Próximo estudo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm sm:text-base font-bold text-[var(--primary-dark)] line-clamp-1">
                {nextStudy.title}
              </span>
            </button>
          ) : <div />}
        </nav>
      )}

    </div>
  );
};
