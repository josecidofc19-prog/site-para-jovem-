import React from 'react';
import { ArrowRight, BookOpen, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreStudies: () => void;
  onAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStudies, onAbout }) => {
  return (
    <section 
      aria-labelledby="hero-main-title"
      className="bg-[var(--bg-hero)] border-b border-[var(--border)] pt-16 pb-20 sm:pt-24 sm:pb-28 text-center transition-colors"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Pré-título: CORRENDO PARA DEUS */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--primary-light)] text-[var(--primary-dark)] text-xs font-bold tracking-wider uppercase mb-5">
          <span>✝</span>
          <span>CORRENDO PARA DEUS</span>
        </div>

        {/* Título principal fluido */}
        <h1 
          id="hero-main-title"
          className="title-hero font-extrabold text-[var(--primary-dark)] tracking-tight mb-4"
        >
          Estudos para crescer na fé
        </h1>

        {/* Subtexto oficial */}
        <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed mb-8">
          Conteúdos bíblicos para conhecer a Palavra de Deus, fortalecer a fé e crescer no relacionamento com Cristo.
        </p>

        {/* Botões de Ação: Explorar estudos → e Conheça o projeto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            onClick={onExploreStudies}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-3.5 px-7 rounded-full text-sm sm:text-base shadow-xs hover:shadow transition-all min-h-[44px]"
          >
            <span>Explorar estudos</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onAbout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--bg-page)] hover:bg-[var(--bg-surface)] text-[var(--primary-dark)] font-bold py-3.5 px-6 rounded-full text-sm sm:text-base border border-[var(--border)] shadow-xs transition-colors min-h-[44px]"
          >
            <HeartHandshake className="w-4 h-4 text-[var(--primary)]" />
            <span>Conheça o projeto</span>
          </button>
        </div>

      </div>
    </section>
  );
};
