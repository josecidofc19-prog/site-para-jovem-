import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Minimize, 
  LayoutGrid, 
  RotateCcw, 
  Download, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { getPdfOriginalUrl } from '../utils/pdfOriginal';

// Configura o worker do pdfjs de forma nativa para Vite e GitHub Pages
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

interface PdfViewerProps {
  pdfFileName: string;
  title: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfFileName, title }) => {
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [zoomScale, setZoomScale] = useState<number>(1.0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const renderTaskRef = useRef<any>(null);

  const pdfUrl = getPdfOriginalUrl(pdfFileName);

  // Carrega o documento PDF original
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setError(false);
    setCurrentPage(1);

    const loadingTask = pdfjsLib.getDocument({
      url: pdfUrl,
      cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/cmaps/',
      cMapPacked: true,
    });

    loadingTask.promise
      .then((doc) => {
        if (!isCancelled) {
          setPdfDoc(doc);
          setNumPages(doc.numPages);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Erro ao carregar PDF:', err);
        if (!isCancelled) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      isCancelled = true;
      loadingTask.destroy();
    };
  }, [pdfUrl]);

  // Renderiza a página atual no Canvas
  const renderPage = useCallback(
    async (pageNum: number) => {
      if (!pdfDoc || !canvasRef.current || !containerRef.current) return;

      try {
        // Cancela tarefa de renderização anterior se estiver em andamento
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
          renderTaskRef.current = null;
        }

        const page = await pdfDoc.getPage(pageNum);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Calcula a largura disponível no container para celular e desktop
        const containerWidth = containerRef.current.clientWidth || 800;
        const baseViewport = page.getViewport({ scale: 1.0 });

        // Ajusta a escala para preencher a largura no celular com padding
        const horizontalPadding = window.innerWidth < 640 ? 16 : 32;
        const fitScale = (containerWidth - horizontalPadding) / baseViewport.width;
        const finalScale = fitScale * zoomScale;

        const viewport = page.getViewport({ scale: finalScale });

        // Multiplicador para alta resolução em telas Retina/HD
        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;

        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        const renderContext = {
          canvasContext: ctx,
          canvas: canvas,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== 'RenderingCancelledException') {
          console.error('Erro ao renderizar página:', err);
        }
      }
    },
    [pdfDoc, zoomScale]
  );

  // Re-renderiza quando a página ou o zoom mudam
  useEffect(() => {
    if (pdfDoc && !loading && !error) {
      renderPage(currentPage);
    }
  }, [currentPage, zoomScale, pdfDoc, loading, error, renderPage]);

  // Atalhos de teclado (Setas Esquerda e Direita)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentPage((prev) => Math.min(prev + 1, numPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [numPages]);

  // Resize listener para manter largura total no celular
  useEffect(() => {
    const handleResize = () => {
      if (pdfDoc && !loading && !error) {
        renderPage(currentPage);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, pdfDoc, loading, error, renderPage]);

  // Tela cheia
  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`bg-[var(--bg-surface)] border border-[var(--border)] rounded-[14px] overflow-hidden flex flex-col ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-slate-900 border-none' : 'card-shadow my-8'
      }`}
    >
      {/* Barra de Ferramentas Superior */}
      <div className="bg-[var(--primary-dark)] text-white px-3 sm:px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 select-none">
        
        {/* Navegação de Páginas */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage <= 1 || loading || error}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
            title="Página anterior (Seta esquerda)"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-100">
            <span>Página</span>
            <input
              type="number"
              min={1}
              max={numPages || 1}
              value={currentPage}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if (!isNaN(val) && val >= 1 && val <= numPages) {
                  setCurrentPage(val);
                }
              }}
              disabled={loading || error}
              className="w-12 text-center bg-white/10 border border-white/20 rounded py-0.5 px-1 text-white font-bold outline-none focus:ring-1 focus:ring-blue-300"
              aria-label="Número da página"
            />
            <span>de {numPages || '...'}</span>
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))}
            disabled={currentPage >= numPages || loading || error}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
            title="Próxima página (Seta direita)"
            aria-label="Próxima página"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Ferramentas de Zoom, Miniaturas e Tela Cheia */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            disabled={loading || error}
            className={`p-1.5 rounded-lg hover:bg-white/10 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center ${
              showThumbnails ? 'bg-white/20 text-white' : 'text-blue-200'
            }`}
            title="Miniaturas das páginas"
            aria-label="Alternar miniaturas"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>

          <button
            onClick={() => setZoomScale((z) => Math.max(0.6, z - 0.15))}
            disabled={loading || error || zoomScale <= 0.6}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center text-blue-200"
            title="Reduzir zoom"
            aria-label="Reduzir zoom"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-mono text-blue-200 px-1 hidden sm:inline">
            {Math.round(zoomScale * 100)}%
          </span>

          <button
            onClick={() => setZoomScale((z) => Math.min(2.5, z + 0.15))}
            disabled={loading || error || zoomScale >= 2.5}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center text-blue-200"
            title="Ampliar zoom"
            aria-label="Ampliar zoom"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={() => setZoomScale(1.0)}
            disabled={loading || error || zoomScale === 1.0}
            className="p-1.5 rounded-lg hover:bg-white/10 disabled:opacity-30 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center text-blue-200"
            title="Ajustar zoom original"
            aria-label="Resetar zoom"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center text-blue-200"
            title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Conteúdo Principal com Miniaturas Laterais */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Painel de Miniaturas */}
        {showThumbnails && !loading && !error && numPages > 0 && (
          <aside className="w-36 sm:w-44 bg-[var(--bg-hero)] border-r border-[var(--border)] overflow-y-auto p-2.5 flex flex-col gap-2 shrink-0">
            <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-1 block px-1">
              Páginas ({numPages})
            </span>
            {Array.from({ length: numPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`p-2 rounded-lg text-xs font-semibold text-left transition-colors flex items-center justify-between min-h-[36px] ${
                  currentPage === pageNum
                    ? 'bg-[var(--primary)] text-white font-bold'
                    : 'bg-[var(--bg-page)] text-[var(--text-main)] hover:bg-[var(--primary-light)] border border-[var(--border)]'
                }`}
              >
                <span>Página {pageNum}</span>
                {currentPage === pageNum && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </button>
            ))}
          </aside>
        )}

        {/* Área de Visualização do Canvas */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6 min-h-[420px] sm:min-h-[580px] bg-slate-100">
          
          {/* Estado: Carregando */}
          {loading && (
            <div className="flex flex-col items-center justify-center p-8 text-center text-[var(--primary-dark)]">
              <Loader2 className="w-10 h-10 animate-spin text-[var(--primary)] mb-3" />
              <p className="text-base font-bold text-[var(--primary-dark)]">
                Carregando estudo...
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Carregando o PDF oficial ({title})
              </p>
            </div>
          )}

          {/* Estado: Erro */}
          {error && (
            <div className="flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto bg-white rounded-xl border border-[var(--border)] card-shadow">
              <AlertCircle className="w-12 h-12 text-rose-500 mb-3" />
              <p className="text-base font-bold text-[var(--primary-dark)] mb-2">
                Não foi possível abrir este estudo.
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-5 leading-relaxed">
                Tente novamente ou baixe o PDF original para ler em seu dispositivo.
              </p>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Baixar PDF original</span>
              </a>
            </div>
          )}

          {/* Canvas da Página Real do PDF */}
          <canvas
            ref={canvasRef}
            className={`shadow-md bg-white rounded transition-opacity duration-150 ${
              loading || error ? 'hidden' : 'block'
            }`}
          />

        </div>

      </div>

      {/* Barra Inferior com Informações de Atalhos */}
      <div className="bg-[var(--bg-page)] border-t border-[var(--border)] px-4 py-2 flex items-center justify-between text-xs text-[var(--text-muted)]">
        <span>Use as teclas ◀ e ▶ para avançar e voltar páginas</span>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] font-semibold hover:underline"
        >
          Abrir arquivo em nova aba
        </a>
      </div>

    </div>
  );
};
