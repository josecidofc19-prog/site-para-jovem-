import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

interface SobreViewProps {
  onExploreStudies: () => void;
}

export const SobreView: React.FC<SobreViewProps> = ({ onExploreStudies }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2 block">
          QUEM SOMOS
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight mb-3">
          Sobre o Correndo para Deus
        </h1>
        <p className="text-[var(--text-muted)] text-sm sm:text-base">
          Ministério de Jovens da Assembléia de Deus
        </p>
      </div>

      {/* Declaração Oficial Fornecida (Texto Fidedigno) */}
      <div className="bg-[var(--bg-hero)] border border-[var(--border)] rounded-[14px] p-8 sm:p-12 mb-10 text-center card-shadow">
        <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold shadow-xs">
          ✝
        </div>

        <p className="text-lg sm:text-xl font-semibold text-[var(--primary-dark)] leading-relaxed max-w-2xl mx-auto">
          “O Correndo para Deus é um ministério dedicado a ajudar pessoas, especialmente jovens, a conhecer mais a Palavra de Deus e crescer na fé por meio de estudos e conteúdos bíblicos.”
        </p>

        <div className="mt-8 pt-6 border-t border-[var(--border)] max-w-md mx-auto text-xs sm:text-sm text-[var(--text-muted)] font-bold uppercase tracking-wider">
          AD. Ministério Correndo para Deus
        </div>
      </div>

      {/* Fotografia Oficial da Juventude (Arquivo Original Fornecido) */}
      <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] overflow-hidden card-shadow mb-10">
        <div className="p-6 border-b border-[var(--border)] flex items-center gap-2">
          <Users className="w-5 h-5 text-[var(--primary)]" />
          <h2 className="text-base sm:text-lg font-bold text-[var(--primary-dark)]">
            Foto Oficial do Ministério
          </h2>
        </div>

        <div className="p-4 sm:p-8 bg-[var(--bg-surface)] flex justify-center">
          <img
            src="/PHOTO-2026-09-30-22-44-36.jpg"
            alt="Grupo de Jovens Correndo para Deus — Foto Oficial"
            className="w-full max-w-lg h-auto rounded-xl object-contain border border-[var(--border)] shadow-xs"
            onError={(e) => {
              // Graceful fallback if image file is stored with alternative extension
              const target = e.target as HTMLImageElement;
              if (!target.src.endsWith('.jpeg')) {
                target.src = '/PHOTO-2026-09-30-22-44-36.jpeg';
              }
            }}
          />
        </div>
      </div>

      {/* CTA Direto para os Estudos */}
      <div className="text-center pt-2">
        <button
          onClick={onExploreStudies}
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm sm:text-base min-h-[44px]"
        >
          <span>Ver estudos bíblicos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
