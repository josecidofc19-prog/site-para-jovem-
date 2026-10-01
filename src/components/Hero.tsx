import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreStudies: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStudies }) => {
  return (
    <section 
      aria-labelledby="hero-title"
      className="bg-[var(--bg-hero)] border-b border-[var(--border)] pt-16 pb-20 sm:pt-22 sm:pb-28 text-center transition-colors relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Kicker superior conforme a referência */}
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-[var(--primary)] mb-2 block select-none">
          B E M - V I N D O &nbsp; A O
        </span>

        {/* Destaque visual para "Jovens" e "CORRENDO PARA DEUS" */}
        <div className="my-2 select-none">
          <span className="font-script text-6xl sm:text-8xl md:text-9xl text-[var(--primary-dark)] font-bold leading-none block -mb-3 sm:-mb-5">
            Jovens
          </span>
          <h1 
            id="hero-title"
            className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--primary-dark)] tracking-[0.08em] uppercase"
          >
            CORRENDO PARA DEUS
          </h1>
        </div>

        {/* Texto de apoio da referência visual */}
        <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-lg mx-auto leading-relaxed mt-5 mb-8 font-medium">
          Estudos que fortalecem a sua fé, te aproximam de Deus e te preparam para o propósito que Ele tem para você.
        </p>

        {/* Botão azul principal "Ver estudos" */}
        <div>
          <button
            onClick={onExploreStudies}
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold text-sm sm:text-base px-7 py-3 rounded-full shadow-xs hover:shadow transition-all min-h-[44px] group"
          >
            <span>Ver estudos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
