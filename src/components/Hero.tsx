import React from 'react';
import { ArrowRight, BookOpen, Heart, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreStudies: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreStudies, onLearnMore }) => {
  return (
    <section className="relative overflow-hidden bg-hero-wash pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-blue-50">
      
      {/* Subtle organic artistic backdrop shapes */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 right-0 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-10 w-80 h-80 rounded-full bg-sky-100/50 blur-3xl"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 text-xs font-semibold uppercase tracking-widest text-blue-900/80 bg-white/80 border border-blue-100/80 rounded-full shadow-xs">
          <span>BEM-VINDO AO</span>
          <span className="font-bold text-blue-700">MINISTÉRIO</span>
        </div>

        {/* Visual Brand Signature matching reference layout */}
        <div className="mb-4">
          <div className="font-script text-6xl sm:text-7xl md:text-8xl text-blue-900 leading-none drop-shadow-xs select-none">
            Jovens
          </div>
          <div className="text-base sm:text-xl font-bold tracking-[0.25em] text-slate-900 uppercase -mt-2 sm:-mt-3">
            CORRENDO PARA DEUS
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-6 mb-4 text-balance">
          Estudos para crescer na fé
        </h1>

        {/* Description requested by user */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 sm:mb-10 text-pretty">
          Conteúdos bíblicos para conhecer a Palavra de Deus, fortalecer a fé e crescer no relacionamento com Cristo.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onExploreStudies}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#13467B] hover:bg-[#0F355C] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] text-base group"
          >
            <span>Explorar estudos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onLearnMore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium px-6 py-3.5 rounded-full border border-slate-200 transition-all duration-200 text-base"
          >
            <span>Conheça o projeto</span>
          </button>
        </div>

        {/* Discreet feature pills */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-blue-100/60 max-w-2xl mx-auto grid grid-cols-3 gap-2 sm:gap-4 text-slate-600 text-xs sm:text-sm">
          <div className="flex flex-col items-center gap-1.5 p-2 text-center">
            <BookOpen className="w-5 h-5 text-blue-700 stroke-[1.75]" />
            <span className="font-semibold text-slate-800">100% Bíblico</span>
            <span className="text-[11px] text-slate-600 hidden sm:inline">Exposição fiel das Escrituras</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2 text-center">
            <Sparkles className="w-5 h-5 text-blue-700 stroke-[1.75]" />
            <span className="font-semibold text-slate-800">Leitor & Download</span>
            <span className="text-[11px] text-slate-600 hidden sm:inline">PDFs diretos e gratuitos</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 p-2 text-center">
            <Heart className="w-5 h-5 text-blue-700 stroke-[1.75]" />
            <span className="font-semibold text-slate-800">Para a Juventude</span>
            <span className="text-[11px] text-slate-600 hidden sm:inline">Temas práticos e reais</span>
          </div>
        </div>

      </div>
    </section>
  );
};
