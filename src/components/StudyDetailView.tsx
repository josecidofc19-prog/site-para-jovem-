import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Download, 
  ExternalLink,
  MessageCircle, 
  Copy, 
  Check, 
  Calendar, 
  User, 
  BookOpen,
  FileText
} from 'lucide-react';
import { Estudo } from '../data/estudos';

interface StudyDetailViewProps {
  estudo: Estudo;
  estudoAnterior?: Estudo;
  proximoEstudo?: Estudo;
  totalEstudos: number;
  onNavigateHome: () => void;
  onSelectEstudo: (id: string) => void;
}

export const StudyDetailView: React.FC<StudyDetailViewProps> = ({
  estudo,
  estudoAnterior,
  proximoEstudo,
  totalEstudos,
  onNavigateHome,
  onSelectEstudo,
}) => {
  const [copiado, setCopiado] = useState(false);
  const [showEmbeddedPdf, setShowEmbeddedPdf] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowEmbeddedPdf(false);
  }, [estudo.id]);

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
    const texto = `📖 *${estudo.titulo}*\n${estudo.autor ? `Estudo bíblico - ${estudo.autor}\n` : ''}\nLeia no Correndo para Deus:\n${window.location.href}`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const hasTextualContent = estudo.slides && estudo.slides.length > 0;

  return (
    <div className="py-8 sm:py-14 px-4 sm:px-6 max-w-4xl mx-auto">
      
      {/* Breadcrumb simples */}
      <nav aria-label="Navegação estrutural" className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-muted)] mb-8">
        <button
          onClick={onNavigateHome}
          className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold transition-colors flex items-center gap-1 min-h-[36px]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para estudos</span>
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-[var(--text-main)] font-medium truncate max-w-xs sm:max-w-md">
          {estudo.titulo}
        </span>
      </nav>

      {/* Artigo Principal (Estilo Revista/Estudo Editorial — Sem Cards de Dashboard) */}
      <article className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-12 card-shadow mb-10">
        
        {/* Cabeçalho do Estudo */}
        <header className="mb-8 pb-8 border-b border-[var(--border)]">
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {estudo.categoria && (
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-light)] px-3 py-1 rounded-full">
                {estudo.categoria}
              </span>
            )}
            {estudo.paginas && (
              <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-3 py-1 rounded-full flex items-center gap-1">
                <FileText className="w-3 h-3 text-[var(--primary)]" />
                <span>{estudo.paginas} páginas</span>
              </span>
            )}
          </div>

          {/* Título Oficial */}
          <h1 className="title-section font-extrabold text-[var(--primary-dark)] mb-3 leading-tight">
            {estudo.titulo}
          </h1>

          {/* Subtítulo (se fornecido) */}
          {estudo.subtitulo && (
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mb-5">
              {estudo.subtitulo}
            </p>
          )}

          {/* Autor e Data (somente se fornecidos) */}
          {(estudo.autor || estudo.data) && (
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--border)] text-xs sm:text-sm text-[var(--text-muted)]">
              {estudo.autor && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-[var(--primary)]" />
                  <span className="font-semibold text-[var(--text-main)]">{estudo.autor}</span>
                </div>
              )}

              {estudo.data && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[var(--primary)]" />
                  <span>{estudo.data}</span>
                </div>
              )}
            </div>
          )}

          {/* Referências bíblicas (se existirem) */}
          {estudo.referencias && estudo.referencias.length > 0 && (
            <div className="mt-5 pt-4 border-t border-[var(--border)]">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary-dark)] block mb-2">
                Referências bíblicas citadas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {estudo.referencias.map((ref, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-hero)] text-[var(--primary)] border border-[var(--border)]"
                  >
                    📖 {ref}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Botões Oficiais: "Abrir PDF original" e "Baixar PDF original" */}
          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-[var(--border)]">
            <a
              href={estudo.arquivoPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm shadow-xs transition-colors min-h-[44px]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir PDF original</span>
            </a>

            <a
              href={estudo.arquivoPdf}
              download
              className="inline-flex items-center justify-center gap-2 bg-[var(--bg-page)] hover:bg-[var(--bg-surface)] text-[var(--primary-dark)] font-bold py-2.5 px-5 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
            >
              <Download className="w-4 h-4 text-[var(--primary)]" />
              <span>Baixar PDF original</span>
            </a>

            <button
              onClick={() => setShowEmbeddedPdf(!showEmbeddedPdf)}
              className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--primary-dark)] px-3 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--bg-surface)] transition-colors min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>{showEmbeddedPdf ? 'Ocultar visualizador' : 'Visualizar PDF integrado'}</span>
            </button>

            {/* Compartilhamento no WhatsApp e Copiar link */}
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

        {/* Visualizador de PDF Embutido Opcional (utilizando o arquivo original) */}
        {showEmbeddedPdf && (
          <div className="mb-10 rounded-xl overflow-hidden border border-[var(--border)] card-shadow bg-slate-100">
            <div className="bg-[var(--primary-dark)] text-white text-xs px-4 py-2 flex items-center justify-between">
              <span>Visualizador do PDF Original</span>
              <a
                href={estudo.arquivoPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white underline flex items-center gap-1"
              >
                <span>Tela cheia</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <iframe
              src={`${estudo.arquivoPdf}#toolbar=1`}
              title={`PDF do estudo: ${estudo.titulo}`}
              className="w-full h-[600px] border-0"
            />
          </div>
        )}

        {/* Introdução (somente se fornecida) */}
        {estudo.descricao && (
          <div className="mb-8 p-6 rounded-xl bg-[var(--bg-hero)] border-l-4 border-[var(--primary)] text-[var(--text-main)] leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] block mb-1">
              Introdução do Estudo
            </span>
            <p className="text-base sm:text-lg font-medium">
              {estudo.descricao}
            </p>
          </div>
        )}

        {/* Conteúdo Textual Contínuo (somente se fornecido no formato textual) */}
        {hasTextualContent ? (
          <div className="space-y-8 divide-y divide-[var(--border)]">
            {estudo.slides.map((slide) => (
              <section key={slide.numero} className="pt-6 first:pt-0 space-y-3.5">
                
                {slide.titulo && (
                  <h2 className="text-lg sm:text-2xl font-bold text-[var(--primary-dark)] tracking-tight">
                    {slide.titulo}
                  </h2>
                )}

                <div className="space-y-3 text-base sm:text-lg text-[var(--text-main)] leading-relaxed">
                  {slide.conteudo.map((paragrafo, pIdx) => (
                    <p key={pIdx}>{paragrafo}</p>
                  ))}
                </div>

                {slide.destaque && (
                  <blockquote className="my-4 p-4 rounded-lg bg-[var(--bg-surface)] border-l-4 border-[var(--primary)] text-[var(--primary-dark)] font-semibold text-base">
                    {slide.destaque}
                  </blockquote>
                )}

                {slide.referencias && slide.referencias.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {slide.referencias.map((ref, rIdx) => (
                      <span key={rIdx} className="text-xs px-2 py-0.5 rounded bg-[var(--bg-hero)] text-[var(--primary)] font-semibold border border-[var(--border)]">
                        📖 {ref}
                      </span>
                    ))}
                  </div>
                )}

              </section>
            ))}
          </div>
        ) : (
          /* Quando o estudo não tiver versão textual fornecida */
          <div className="text-center py-10 bg-[var(--bg-surface)] rounded-xl border border-[var(--border)] p-6">
            <BookOpen className="w-10 h-10 text-[var(--primary)] mx-auto mb-3 opacity-70" />
            <p className="text-base font-semibold text-[var(--primary-dark)] mb-2">
              Este estudo está disponível no formato original em PDF.
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto mb-6">
              Abra ou baixe o arquivo original para ler todas as páginas e composições visuais do autor.
            </p>
            <a
              href={estudo.arquivoPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-6 rounded-full text-xs sm:text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Abrir PDF original</span>
            </a>
          </div>
        )}

        {/* Destaque Final (somente se existir no conteúdo original) */}
        {estudo.destaqueFinal && (
          <div className="mt-12 bg-[var(--bg-hero)] border border-[var(--border)] rounded-xl p-6 sm:p-8 text-center card-shadow">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] block mb-2">
              Edificação Final
            </span>
            <p className="text-base sm:text-lg font-bold text-[var(--primary-dark)] max-w-2xl mx-auto leading-relaxed">
              {estudo.destaqueFinal}
            </p>
          </div>
        )}

      </article>

      {/* Navegação entre estudos: Somente exibida quando totalEstudos > 1 */}
      {totalEstudos > 1 && (
        <nav aria-label="Navegação entre estudos" className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
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
      )}

    </div>
  );
};
