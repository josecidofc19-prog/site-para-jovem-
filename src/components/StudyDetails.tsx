import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Download, 
  Share2, 
  Check, 
  FileText, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Layers,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Study } from '../types/study';
import { generateStudyPdf } from '../utils/pdfGenerator';

interface StudyDetailsProps {
  study: Study;
  onBack: () => void;
  onOpenPdf: (study: Study) => void;
  onSelectCategory?: (category: string) => void;
  onSelectRelatedStudy?: (study: Study) => void;
  allStudies?: Study[];
}

export const StudyDetails: React.FC<StudyDetailsProps> = ({
  study,
  onBack,
  onOpenPdf,
  onSelectCategory,
  onSelectRelatedStudy,
  allStudies = [],
}) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [expandedVerses, setExpandedVerses] = useState<Record<string, boolean>>({});

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateStudyPdf(study);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  const toggleVerse = (refKey: string) => {
    setExpandedVerses((prev) => ({
      ...prev,
      [refKey]: !prev[refKey],
    }));
  };

  const relatedStudies = allStudies
    .filter((s) => s.id !== study.id && s.category === study.category)
    .slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 animate-in fade-in duration-150">
      
      {/* Breadcrumb Navigation */}
      <nav 
        aria-label="Caminho de navegação" 
        className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-slate-500 mb-6"
      >
        <button
          onClick={onBack}
          className="hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          Início
        </button>
        <span aria-hidden="true" className="text-slate-300">/</span>
        <button
          onClick={onBack}
          className="hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          Estudos
        </button>
        <span aria-hidden="true" className="text-slate-300">/</span>
        <span className="text-slate-800 font-medium truncate max-w-xs sm:max-w-md">
          {study.title}
        </span>
      </nav>

      {/* Study Header Card */}
      <header className="bg-slate-50/90 border border-slate-200/90 rounded-3xl p-6 sm:p-10 mb-10 shadow-xs">
        
        {/* Category & Share */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            {onSelectCategory ? (
              <button
                onClick={() => onSelectCategory(study.category)}
                className="text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full border border-blue-200/60 transition-colors"
              >
                {study.category}
              </button>
            ) : (
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60">
                {study.category}
              </span>
            )}
            <span className="text-xs text-slate-500 font-medium">
              {study.studyNumber}
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">
              {study.pageCount} páginas no PDF original
            </span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 px-3 py-1.5 rounded-full transition-all shadow-2xs"
            aria-label="Copiar link do estudo"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link copiado!' : 'Compartilhar'}</span>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          {study.title}
        </h1>

        {/* Author / Subtitle */}
        <p className="text-sm sm:text-base text-blue-800 font-semibold mb-6">
          {study.author}
        </p>

        {/* Action Buttons: [Baixar PDF original] & [Modo Apresentação] */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-slate-200/80">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center justify-center gap-2 bg-[#13467B] hover:bg-[#0F355C] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.98] text-sm sm:text-base min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Gerando arquivo original...' : 'Baixar PDF original'}</span>
          </button>

          <button
            onClick={() => onOpenPdf(study)}
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 font-semibold px-6 py-3.5 rounded-xl border border-slate-300 transition-all duration-200 text-sm sm:text-base min-h-[44px]"
          >
            <Maximize2 className="w-4 h-4 text-blue-700" />
            <span>Abrir no Leitor de Apresentação</span>
          </button>
        </div>
      </header>

      {/* Notice of Unabridged Original Content */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-8 pb-3 border-b border-slate-100">
        <span className="font-semibold uppercase tracking-wider text-slate-600">
          Conteúdo Integral do Estudo Original ({study.slides.length} páginas)
        </span>
        <span>Material Oficial</span>
      </div>

      {/* COMPLETE, UNABRIDGED STUDY BODY (PAGE BY PAGE IN EXACT ORIGINAL ORDER) */}
      <div className="space-y-8 sm:space-y-10">
        {study.slides.map((slide) => {
          const isCover = slide.pageNumber === 1;
          const isFinal = slide.isEnd || slide.pageNumber === study.slides.length;

          if (isCover) {
            return (
              <section
                key={slide.pageNumber}
                aria-label={`Página ${slide.pageNumber}: Capa`}
                className="bg-[#162D5A] text-white rounded-3xl p-6 sm:p-10 shadow-md relative overflow-hidden"
              >
                {/* Decorative corner accents matching the PDF presentation */}
                <div 
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-0 h-0 border-t-[70px] sm:border-t-[100px] border-t-[#2E4F8B] border-l-[70px] sm:border-l-[100px] border-l-transparent opacity-90 pointer-events-none"
                />

                <div className="relative z-10 space-y-4">
                  <span className="text-[11px] font-mono tracking-widest text-blue-300 uppercase block">
                    Página 1 • Capa Oficial
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FEE600] tracking-tight leading-snug">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-base sm:text-lg text-slate-100 font-medium">
                      {slide.subtitle}
                    </p>
                  )}
                </div>
              </section>
            );
          }

          return (
            <section
              key={slide.pageNumber}
              aria-label={`Página ${slide.pageNumber}: ${slide.title}`}
              className="bg-white rounded-3xl border border-slate-200/90 hover:border-slate-300 p-6 sm:p-9 shadow-2xs transition-all relative"
            >
              {/* Slide Page Header */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-5 border-b border-slate-100 text-xs text-slate-500">
                <span className="font-mono font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md">
                  Página {slide.pageNumber} de {study.slides.length}
                </span>
                <span className="text-slate-500 font-medium">
                  {study.author}
                </span>
              </div>

              {/* Exact Slide Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                {slide.title}
              </h2>

              {/* Subtitle if any */}
              {slide.subtitle && (
                <p className="text-sm sm:text-base font-semibold text-blue-900 mb-5">
                  {slide.subtitle}
                </p>
              )}

              {/* Bible Verses Callout (verbatim from original PDF) */}
              {slide.bibleVerses && slide.bibleVerses.length > 0 && (
                <div className="space-y-4 my-5">
                  {slide.bibleVerses.map((bv, idx) => {
                    const verseKey = `${study.id}-${slide.pageNumber}-${idx}`;
                    const fullRef = study.bibleReferences.find((r) => r.ref.toLowerCase().includes(bv.ref.toLowerCase()) || bv.ref.toLowerCase().includes(r.ref.toLowerCase()));
                    const isExpanded = !!expandedVerses[verseKey];

                    return (
                      <div 
                        key={idx} 
                        className="bg-slate-50 rounded-2xl p-5 border border-slate-200"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="text-base sm:text-lg font-bold text-blue-950">
                            {bv.ref}
                          </span>

                          {fullRef && fullRef.verseText && (
                            <button
                              onClick={() => toggleVerse(verseKey)}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-900 transition-colors py-1 px-2 rounded-md hover:bg-blue-100/60"
                            >
                              <span>{isExpanded ? 'Ocultar versículo' : '📖 Ver versículo completo'}</span>
                              {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                            </button>
                          )}
                        </div>

                        {bv.text && (
                          <blockquote className="text-sm sm:text-base text-slate-700 italic border-l-2 border-blue-500 pl-3.5 py-1">
                            “{bv.text}”
                          </blockquote>
                        )}

                        {/* Optional interactive visual aid (does not substitute study text) */}
                        {isExpanded && fullRef && (
                          <div className="mt-3 pt-3 border-t border-slate-200/80 text-xs text-slate-600 bg-white p-3.5 rounded-xl">
                            <span className="font-semibold text-slate-800 block mb-1">
                              Texto na Bíblia Sagrada ({fullRef.ref}):
                            </span>
                            <p className="italic">“{fullRef.verseText}”</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Exact Bullet Points from original PDF */}
              {slide.bulletPoints && slide.bulletPoints.length > 0 && (
                <ul className="space-y-3.5 my-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {slide.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Exact Diagram from original PDF if present */}
              {slide.diagram && (
                <div className="my-6 p-5 sm:p-6 rounded-2xl bg-blue-50/70 border border-blue-200/80">
                  {slide.diagram.title && (
                    <h3 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-4">
                      {slide.diagram.title}
                    </h3>
                  )}
                  <div className="space-y-3">
                    {slide.diagram.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-blue-100 shadow-2xs">
                        <div className="w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                          {step.subtitle && <p className="text-xs text-slate-600 mt-0.5">{step.subtitle}</p>}
                        </div>
                        {step.verses && (
                          <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 shrink-0 self-center">
                            {step.verses}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exact Table from original PDF if present */}
              {slide.table && (
                <div className="my-6 overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm text-slate-700">
                    <thead className="bg-slate-100 text-xs uppercase font-bold text-slate-700 border-b border-slate-200">
                      <tr>
                        {slide.table.headers.map((h, i) => (
                          <th key={i} className="py-3 px-4">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {slide.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`py-3 px-4 ${cIdx === 0 ? 'font-bold text-blue-900' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Exact Options / Multiple Choice from original PDF (e.g. Blasfêmia slide 5/6) */}
              {slide.options && slide.options.length > 0 && (
                <div className="space-y-2.5 my-5 max-w-md">
                  {slide.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base font-medium text-slate-800"
                    >
                      <span className="font-bold text-blue-700">{opt.label}</span>
                      <span>{opt.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Exact Highlight Banner from original PDF */}
              {slide.highlight && (
                <div className="my-5 p-5 sm:p-6 rounded-2xl bg-blue-50 border border-blue-200 text-slate-900">
                  <p className="text-base sm:text-lg font-bold text-center text-blue-950 leading-snug">
                    {slide.highlight}
                  </p>
                </div>
              )}

              {/* Slide Footer */}
              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>AD. Ministério Correndo para Deus</span>
                <span className="font-mono">Página {slide.pageNumber}</span>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Study Conclusion & Action Footer */}
      <footer className="mt-12 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto text-xl font-bold">
          ✝
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-2">
            Fim do Estudo: {study.title}
          </h3>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            {study.author}. Este material é disponibilizado gratuitamente para estudo e edificação pessoal e comunitária.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-xs text-sm min-h-[44px]"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Gerando...' : 'Baixar PDF original'}</span>
          </button>

          <button
            onClick={() => onOpenPdf(study)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm min-h-[44px]"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Abrir no Leitor de Apresentação</span>
          </button>

          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os estudos</span>
          </button>
        </div>
      </footer>

      {/* Related Studies in same category */}
      {relatedStudies.length > 0 && onSelectRelatedStudy && (
        <section aria-labelledby="related-studies-heading" className="mt-12 pt-8 border-t border-slate-200">
          <h3 id="related-studies-heading" className="text-lg font-bold text-slate-900 mb-4">
            Outros estudos na categoria {study.category}:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedStudies.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectRelatedStudy(rel)}
                className="text-left p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xs transition-all group"
              >
                <span className="text-xs font-semibold text-blue-700 block mb-1">
                  {rel.studyNumber} • {rel.pageCount} páginas
                </span>
                <span className="text-base font-bold text-slate-900 group-hover:text-blue-900 block mb-1">
                  {rel.title}
                </span>
                <span className="text-xs text-slate-500 line-clamp-2">
                  {rel.description}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

    </article>
  );
};
