import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  BookOpen, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  RotateCcw,
  MessageCircle, 
  Copy, 
  Check, 
  Calendar, 
  User, 
  FileText,
  Share2
} from 'lucide-react';
import { Estudo } from '../data/estudos';

interface StudyDetailViewProps {
  estudo: Estudo;
  estudoAnterior?: Estudo;
  proximoEstudo?: Estudo;
  onNavigateHome: () => void;
  onSelectEstudo: (id: string) => void;
}

export const StudyDetailView: React.FC<StudyDetailViewProps> = ({
  estudo,
  estudoAnterior,
  proximoEstudo,
  onNavigateHome,
  onSelectEstudo,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [copiado, setCopiado] = useState(false);
  const [readingMode, setReadingMode] = useState<'reader' | 'completo'>('reader');

  const totalPages = estudo.slides && estudo.slides.length > 0 ? estudo.slides.length : estudo.paginas;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(1);
  }, [estudo.id]);

  // Keyboard navigation for reader
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const currentSlide = estudo.slides ? estudo.slides[currentPage - 1] : null;

  const handleCopiarLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    }
  };

  const handleShareWhatsApp = () => {
    const texto = `📖 *${estudo.titulo}*\nEstudo bíblico - ${estudo.autor}\n\nLeia no Correndo para Deus:\n${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto">
      
      {/* Breadcrumb */}
      <nav aria-label="Navegação" className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] mb-6">
        <button
          onClick={onNavigateHome}
          className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors flex items-center gap-1 min-h-[36px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para estudos</span>
        </button>
        <span>/</span>
        <span className="text-[var(--text-main)] font-medium truncate max-w-xs sm:max-w-md">
          {estudo.titulo}
        </span>
      </nav>

      {/* Cabeçalho do Estudo */}
      <header className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-8 card-shadow mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {estudo.identificador && (
            <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1 rounded-full">
              {estudo.identificador}
            </span>
          )}
          <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-3 py-1 rounded-full">
            {estudo.categoria}
          </span>
          <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-3 py-1 rounded-full flex items-center gap-1">
            <FileText className="w-3 h-3 text-[var(--primary)]" />
            <span>{estudo.paginas} páginas</span>
          </span>
        </div>

        <h1 className="title-section font-extrabold text-[var(--primary-dark)] mb-3">
          {estudo.titulo}
        </h1>

        {estudo.subtitulo && (
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-4">
            {estudo.subtitulo}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)] text-xs sm:text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[var(--primary)]" />
            <span className="font-semibold text-[var(--text-main)]">{estudo.autor}</span>
          </div>

          {estudo.data && (
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[var(--primary)]" />
              <span>{estudo.data}</span>
            </div>
          )}
        </div>

        {/* Referências bíblicas encontradas no PDF */}
        {estudo.referencias && estudo.referencias.length > 0 && (
          <div className="mt-5 pt-4 border-t border-[var(--border)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] block mb-2">
              Referências bíblicas encontradas no PDF:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {estudo.referencias.map((ref, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-hero)] text-[var(--primary)] border border-[var(--border)]"
                >
                  {ref}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Ações principais: 📖 Ler estudo e ⬇ Baixar PDF original */}
        <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[var(--border)]">
          <button
            onClick={() => {
              setReadingMode('reader');
              const el = document.getElementById('leitor-container');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm shadow-xs transition-colors min-h-[44px]"
          >
            <BookOpen className="w-4 h-4" />
            <span>📖 Ler estudo</span>
          </button>

          <a
            href={estudo.arquivoPdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[var(--bg-page)] hover:bg-[var(--bg-surface)] text-[var(--primary-dark)] font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
          >
            <Download className="w-4 h-4 text-[var(--primary)]" />
            <span>⬇ Baixar PDF original</span>
          </a>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={handleShareWhatsApp}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-2 rounded-full transition-colors min-h-[44px]"
              aria-label="Compartilhar no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>

            <button
              onClick={handleCopiarLink}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-main)] bg-[var(--bg-surface)] hover:bg-[var(--primary-light)] border border-[var(--border)] px-3 py-2 rounded-full transition-colors min-h-[44px]"
              aria-label="Copiar link"
            >
              {copiado ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiado ? 'Copiado!' : 'Copiar link'}</span>
            </button>
          </div>
        </div>

      </header>

      {/* Leitor de PDF Integrado (Slide & Page Viewer) */}
      <div id="leitor-container" className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] card-shadow overflow-hidden mb-10">
        
        {/* Barra de Controles do Leitor */}
        <div className="bg-[var(--bg-surface)] border-b border-[var(--border)] p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          
          {/* Navegação de Páginas */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage <= 1}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] disabled:opacity-40 hover:bg-[var(--bg-hero)] text-[var(--text-main)] font-semibold transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Página anterior"
              title="Página anterior (Seta esquerda)"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="font-bold text-[var(--primary-dark)] px-2 text-xs sm:text-sm">
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] disabled:opacity-40 hover:bg-[var(--bg-hero)] text-[var(--text-main)] font-semibold transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              aria-label="Próxima página"
              title="Próxima página (Seta direita)"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Controles de Zoom */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 15, 75))}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-hero)] text-[var(--text-main)] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              title="Diminuir zoom"
              aria-label="Diminuir zoom"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-[var(--text-muted)] w-12 text-center">
              {zoomLevel}%
            </span>

            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 15, 140))}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-hero)] text-[var(--text-main)] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              title="Aumentar zoom"
              aria-label="Aumentar zoom"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            <button
              onClick={() => setZoomLevel(100)}
              className="p-2 rounded-lg border border-[var(--border)] bg-[var(--bg-page)] hover:bg-[var(--bg-hero)] text-[var(--text-main)] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              title="Redefinir zoom"
              aria-label="Redefinir zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Alternar modo de leitura */}
          <div className="flex items-center gap-1 bg-[var(--bg-page)] p-1 rounded-lg border border-[var(--border)]">
            <button
              onClick={() => setReadingMode('reader')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                readingMode === 'reader'
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--primary-dark)]'
              }`}
            >
              Slide a Slide
            </button>
            <button
              onClick={() => setReadingMode('completo')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                readingMode === 'completo'
                  ? 'bg-[var(--primary)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--primary-dark)]'
              }`}
            >
              Texto Completo
            </button>
          </div>

        </div>

        {/* Área do Slide / Página Ativa */}
        {readingMode === 'reader' ? (
          <div 
            className="p-6 sm:p-12 transition-all flex flex-col justify-between min-h-[380px] sm:min-h-[440px] bg-[var(--bg-page)]"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            {currentSlide ? (
              <div className="space-y-6">
                
                <div className="flex items-center justify-between pb-3 border-b border-[var(--border)]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)]">
                    Página {currentSlide.numero} de {totalPages}
                  </span>
                  <span className="text-xs text-[var(--text-muted)] font-medium">
                    {estudo.titulo}
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl font-extrabold text-[var(--primary-dark)] tracking-tight">
                  {currentSlide.titulo}
                </h2>

                <div className="space-y-3.5 text-base sm:text-lg text-[var(--text-main)] leading-relaxed font-normal">
                  {currentSlide.conteudo.map((paragrafo, pIdx) => (
                    <p key={pIdx}>
                      {paragrafo}
                    </p>
                  ))}
                </div>

                {currentSlide.destaque && (
                  <div className="p-4 rounded-xl bg-[var(--bg-hero)] border-l-4 border-[var(--primary)] text-[var(--primary-dark)] font-semibold text-base sm:text-lg my-4">
                    {currentSlide.destaque}
                  </div>
                )}

                {currentSlide.referencias && currentSlide.referencias.length > 0 && (
                  <div className="pt-4 border-t border-[var(--border)]">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] block mb-1.5">
                      Referências nesta página:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {currentSlide.referencias.map((ref, rIdx) => (
                        <span
                          key={rIdx}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--primary-light)] text-[var(--primary-dark)]"
                        >
                          📖 {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[var(--text-muted)]">Carregando conteúdo da página...</p>
              </div>
            )}

            {/* Navegador de rodapé do slide */}
            <div className="pt-8 mt-6 border-t border-[var(--border)] flex items-center justify-between">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage <= 1}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary)] hover:underline disabled:opacity-40"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Página anterior</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentPage === idx + 1
                        ? 'bg-[var(--primary)] w-5'
                        : 'bg-[var(--border)] hover:bg-[var(--primary-light)]'
                    }`}
                    aria-label={`Ir para página ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage >= totalPages}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary)] hover:underline disabled:opacity-40"
              >
                <span>Próxima página</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ) : (
          /* Modo Leitura Contínua de Todas as Páginas */
          <div className="p-6 sm:p-10 space-y-8 bg-[var(--bg-page)] divide-y divide-[var(--border)]">
            {estudo.slides && estudo.slides.map((slide) => (
              <div key={slide.numero} className="pt-6 first:pt-0 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-[var(--primary)]">
                  <span>Página {slide.numero}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[var(--primary-dark)]">
                  {slide.titulo}
                </h3>
                <div className="space-y-2 text-base text-[var(--text-main)] leading-relaxed">
                  {slide.conteudo.map((paragrafo, pIdx) => (
                    <p key={pIdx}>{paragrafo}</p>
                  ))}
                </div>
                {slide.referencias && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {slide.referencias.map((ref, rIdx) => (
                      <span key={rIdx} className="text-xs px-2 py-0.5 rounded bg-[var(--bg-hero)] text-[var(--primary)] font-semibold border border-[var(--border)]">
                        {ref}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Destaque Final */}
      {estudo.destaqueFinal && (
        <div className="bg-[var(--bg-hero)] border border-[var(--border)] rounded-[14px] p-6 sm:p-8 text-center mb-10 card-shadow">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] block mb-2">
            Palavra de Edificação
          </span>
          <p className="text-lg sm:text-xl font-bold text-[var(--primary-dark)] max-w-2xl mx-auto leading-relaxed">
            {estudo.destaqueFinal}
          </p>
        </div>
      )}

      {/* Navegação entre estudos anterior e próximo */}
      <nav aria-label="Estudos adjacentes" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[var(--border)]">
        {estudoAnterior ? (
          <button
            onClick={() => onSelectEstudo(estudoAnterior.id)}
            className="text-left p-4 rounded-[14px] bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] transition-all card-shadow flex flex-col justify-between group min-h-[44px]"
          >
            <span className="text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--primary)]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Estudo anterior</span>
            </span>
            <span className="text-sm sm:text-base font-bold text-[var(--primary-dark)] line-clamp-1">
              {estudoAnterior.titulo}
            </span>
          </button>
        ) : <div />}

        {proximoEstudo ? (
          <button
            onClick={() => onSelectEstudo(proximoEstudo.id)}
            className="text-right p-4 rounded-[14px] bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] transition-all card-shadow flex flex-col justify-between items-end group min-h-[44px]"
          >
            <span className="text-xs font-bold text-[var(--text-muted)] flex items-center gap-1.5 mb-1 group-hover:text-[var(--primary)]">
              <span>Próximo estudo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="text-sm sm:text-base font-bold text-[var(--primary-dark)] line-clamp-1">
              {proximoEstudo.titulo}
            </span>
          </button>
        ) : <div />}
      </nav>

    </div>
  );
};
