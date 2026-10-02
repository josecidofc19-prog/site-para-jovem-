import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onExploreStudies: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreStudies }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] mb-2 block select-none">
          C O N H E Ç A &nbsp; M A I S
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight">
          Nossa História
        </h1>
      </div>

      {/* Conteúdo Oficial */}
      <div className="bg-[var(--bg-hero)] border border-[var(--border)] rounded-[14px] p-8 sm:p-12 mb-10 text-center card-shadow">
        <div className="w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-xs select-none">
          ✝
        </div>

        <p className="text-lg sm:text-xl font-medium text-[var(--primary-dark)] leading-relaxed max-w-2xl mx-auto">
          O Correndo para Deus é um ministério dedicado a ajudar pessoas, especialmente jovens, a conhecer mais a Palavra de Deus e crescer na fé por meio de estudos e conteúdos bíblicos.
        </p>
      </div>

      {/* Botão para acessar os estudos */}
      <div className="text-center">
        <button
          onClick={onExploreStudies}
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3.5 rounded-full transition-colors text-sm sm:text-base min-h-[44px] shadow-xs hover:shadow"
        >
          <span>Ver estudos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
