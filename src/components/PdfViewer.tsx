import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  Download, 
  X, 
  LayoutGrid,
  BookOpen
} from 'lucide-react';
import { Study, SlideContent } from '../types/study';
import { generateStudyPdf } from '../utils/pdfGenerator';

interface PdfViewerProps {
  study: Study;
  onClose: () => void;
  initialPage?: number;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  study,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalPages = study.slides.length;
  const currentSlide: SlideContent = study.slides[currentPage - 1] || study.slides[0];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          handleToggleFullscreen();
        } else {
          onClose();
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentPage(totalPages);
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, totalPages, isFullscreen]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 160));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 75));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {
        setIsFullscreen(!isFullscreen);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateStudyPdf(study);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col text-white select-none animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={`Leitor de PDF: ${study.title}`}
    >
      {/* Top Controls Bar */}
      <header className="h-16 px-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
        
        {/* Left: Close & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 text-xs font-semibold"
            aria-label="Voltar para a página do estudo"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar ao estudo</span>
            <span className="sm:hidden">Voltar</span>
          </button>

          <div className="min-w-0 hidden md:block">
            <h2 className="text-sm font-semibold text-white truncate max-w-xs lg:max-w-md">
              {study.title}
            </h2>
            <p className="text-[11px] text-slate-400 truncate">
              {study.author}
            </p>
          </div>
        </div>

        {/* Center: Slide Pager with Direct Jump Selector */}
        <div className="flex items-center gap-1 sm:gap-2 bg-slate-800/80 px-2 sm:px-3 py-1.5 rounded-xl border border-slate-700/60 text-xs sm:text-sm font-medium">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1 px-1">
            <label htmlFor="jump-page-select" className="sr-only">Ir para página</label>
            <select
              id="jump-page-select"
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="bg-slate-700 text-white font-semibold text-xs rounded px-1.5 py-0.5 border border-slate-600 outline-none focus:ring-1 focus:ring-blue-400 cursor-pointer"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                <option key={pg} value={pg}>
                  {pg}
                </option>
              ))}
            </select>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">{totalPages}</span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md text-slate-300 hover:text-white hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Zoom, Thumbnails, Download, Fullscreen */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Zoom controls */}
          <div className="hidden md:flex items-center gap-1 bg-slate-800/60 p-1 rounded-lg border border-slate-700/40">
            <button
              onClick={handleZoomOut}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700"
              aria-label="Diminuir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleResetZoom}
              className="px-1.5 py-0.5 text-[11px] text-slate-300 hover:text-white font-mono"
              aria-label="Resetar zoom"
            >
              {zoomLevel}%
            </button>
            <button
              onClick={handleZoomIn}
              className="p-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-700"
              aria-label="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>

          {/* Toggle Thumbnails */}
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className={`p-2 rounded-lg transition-colors ${
              showThumbnails
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            aria-label="Alternar miniaturas de páginas"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors hidden sm:inline-flex"
            aria-label={isFullscreen ? 'Sair da tela cheia' : 'Entrar em tela cheia'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Download button */}
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm px-3 py-2 rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-60"
            aria-label="Baixar estudo em PDF"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">
              {isDownloading ? 'Gerando...' : 'Baixar PDF'}
            </span>
          </button>
        </div>
      </header>

      {/* Main Workspace (Thumbnails + Presentation Slide Canvas) */}
      <div className="flex-1 overflow-hidden flex relative">
        
        {/* Thumbnails Drawer */}
        {showThumbnails && (
          <aside className="w-48 sm:w-64 bg-slate-900 border-r border-slate-800 p-3 overflow-y-auto shrink-0 flex flex-col gap-2.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 px-1">
              Todas as páginas ({totalPages})
            </div>
            {study.slides.map((s) => {
              const isSelected = s.pageNumber === currentPage;
              return (
                <button
                  key={s.pageNumber}
                  onClick={() => setCurrentPage(s.pageNumber)}
                  className={`text-left p-2 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-blue-950/70 border-blue-500 text-white shadow-sm ring-1 ring-blue-500'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-1">
                    <span>Pág. {s.pageNumber}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-blue-400" />}
                  </div>
                  <div className="text-xs font-medium line-clamp-1">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </aside>
        )}

        {/* Slide Display Area */}
        <main className="flex-1 overflow-auto flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-slate-950">
          <div 
            style={{ 
              transform: `scale(${zoomLevel / 100})`, 
              transformOrigin: 'center center',
              transition: 'transform 0.15s ease-out'
            }}
            className="w-full max-w-4xl aspect-[16/9] relative rounded-2xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col justify-between"
          >
            {/* Authentic Slide Background matching the PDF reference: deep navy #142952 */}
            <div className="absolute inset-0 bg-[#162D5A] z-0">
              {/* Top right geometric polygon accents matching the PDF presentation */}
              <div 
                className="absolute top-0 right-0 w-0 h-0 border-t-[80px] sm:border-t-[130px] border-t-[#2E4F8B] border-l-[80px] sm:border-l-[130px] border-l-transparent opacity-90"
              />
              <div 
                className="absolute top-0 right-0 w-0 h-0 border-t-[45px] sm:border-t-[75px] border-t-[#3C64AD] border-l-[45px] sm:border-l-[75px] border-l-transparent"
              />
            </div>

            {/* Slide Body Content */}
            <div className="relative z-10 p-6 sm:p-10 md:p-14 flex-1 flex flex-col justify-between">
              
              {/* SLIDE 1: Cover */}
              {currentSlide.pageNumber === 1 ? (
                <div className="h-full flex flex-col justify-between">
                  <div className="mt-8 sm:mt-12 md:mt-16">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#FEE600] tracking-tight leading-tight max-w-2xl drop-shadow-xs">
                      {currentSlide.title}
                    </h1>
                    {currentSlide.subtitle && (
                      <p className="text-sm sm:text-lg md:text-xl text-slate-100 font-medium mt-4 sm:mt-6 opacity-95">
                        {currentSlide.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Open Bible Graphic in Bottom Right */}
                  <div className="flex items-end justify-between">
                    <div className="text-xs text-blue-200/60 font-medium">
                      AD. Ministério Correndo para Deus
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 bg-white rounded-lg p-2.5 sm:p-3 shadow-lg flex items-center justify-center transform rotate-6 border border-slate-900">
                        <BookOpen className="w-full h-full text-slate-950 stroke-[1.8]" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* SLIDES 2 to 12: Content slides */
                <div className="h-full flex flex-col justify-between">
                  <div>
                    {/* Slide Header: Golden Yellow Title */}
                    <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#FEE600] tracking-tight mb-4 sm:mb-6">
                      {currentSlide.title}
                    </h2>

                    {/* Subtitle if any */}
                    {currentSlide.subtitle && (
                      <p className="text-xs sm:text-sm text-blue-200 mb-4">
                        {currentSlide.subtitle}
                      </p>
                    )}

                    {/* Bible Verses Callout */}
                    {currentSlide.bibleVerses && currentSlide.bibleVerses.length > 0 && (
                      <div className="space-y-3 sm:space-y-4 mb-4">
                        {currentSlide.bibleVerses.map((bv, idx) => (
                          <div key={idx} className="space-y-1">
                            <span className="inline-block text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                              {bv.ref}
                            </span>
                            {bv.text && (
                              <p className="text-xs sm:text-base md:text-lg text-blue-100 italic leading-relaxed pl-2 border-l-2 border-[#FEE600]/80">
                                “{bv.text}”
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet Points */}
                    {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
                      <ul className="space-y-3 sm:space-y-4 text-xs sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal">
                        {currentSlide.bulletPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                            <span className="w-2 h-2 rounded-full bg-[#FEE600] mt-2 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Options (quiz / reflection) */}
                    {currentSlide.options && currentSlide.options.length > 0 && (
                      <div className="space-y-2.5 sm:space-y-3.5 my-4">
                        {currentSlide.options.map((opt, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-blue-900/40 border border-blue-400/30 text-white font-medium text-sm sm:text-base md:text-lg"
                          >
                            <span className="font-bold text-[#FEE600]">{opt.label}</span>
                            <span>{opt.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlight Box (like Slide 10 or Slide 12) */}
                    {currentSlide.highlight && (
                      <div className="mt-4 sm:mt-8 p-4 sm:p-6 rounded-xl bg-blue-900/60 border border-[#FEE600]/70 text-white shadow-inner">
                        <p className="text-sm sm:text-xl md:text-2xl font-bold text-center leading-snug text-[#FEE600]">
                          {currentSlide.highlight}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Slide Bottom Bar */}
                  <div className="pt-3 border-t border-blue-400/20 flex items-center justify-between text-[11px] sm:text-xs text-blue-200/70">
                    <span>AD. Ministério Correndo para Deus</span>
                    <span className="font-mono">Página {currentSlide.pageNumber} de {totalPages}</span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </main>
      </div>

      {/* Bottom Floating Navigation on Mobile */}
      <footer className="sm:hidden h-14 bg-slate-900 border-t border-slate-800 px-4 flex items-center justify-between text-xs">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 rounded-lg text-white disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <span className="text-slate-400 font-medium">
          {currentPage} de {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 rounded-lg text-white disabled:opacity-40"
        >
          <span>Próxima</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
};
