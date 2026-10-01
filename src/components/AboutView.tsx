import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onExploreStudies: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onExploreStudies }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight mb-2">
          Sobre o Correndo para Deus
        </h1>
      </div>

      {/* Conteúdo Oficial Fornecido */}
      <div className="bg-[var(--bg-hero)] border border-[var(--border)] rounded-[14px] p-8 sm:p-12 mb-10 text-center card-shadow">
        <div className="w-10 h-10 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-xs">
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
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm sm:text-base min-h-[44px]"
        >
          <span>Ver estudos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
