import React from 'react';
import { 
  BookOpen, 
  HeartHandshake, 
  Compass, 
  ArrowRight,
  Users
} from 'lucide-react';

interface SobreViewProps {
  onExploreStudies: () => void;
}

export const SobreView: React.FC<SobreViewProps> = ({ onExploreStudies }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
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

      {/* Declaração Principal Oficial */}
      <div className="bg-[var(--bg-hero)] border border-[var(--border)] rounded-[14px] p-8 sm:p-12 mb-12 text-center card-shadow">
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

      {/* Fotografia Oficial da Juventude */}
      <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] overflow-hidden card-shadow mb-12">
        <div className="p-6 border-b border-[var(--border)]">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-[var(--primary)]" />
            <h2 className="text-base sm:text-lg font-bold text-[var(--primary-dark)]">
              Juventude em Comunhão
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--text-muted)]">
            Jovens reunidos para glorificar a Deus e crescer no conhecimento bíblico.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-[var(--bg-surface)] flex justify-center">
          <img
            src="/PHOTO-2026-09-30-22-44-36.jpg"
            alt="Grupo de Jovens Correndo para Deus na Igreja"
            className="w-full max-w-md h-auto rounded-xl object-contain border border-[var(--border)] shadow-xs"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Três Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-[var(--bg-hero)] text-[var(--primary)] flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[var(--primary-dark)] text-base">Fidelidade Bíblica</h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Conteúdos fundamentados exclusivamente nas Escrituras Sagradas, incentivando a reflexão pessoal e a oração.
          </p>
        </div>

        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-[var(--bg-hero)] text-[var(--primary)] flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[var(--primary-dark)] text-base">Foco na Juventude</h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Linguagem acessível, clara e prática para que jovens encontrem respostas reais para os dilemas da vida cristã.
          </p>
        </div>

        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow space-y-2.5">
          <div className="w-9 h-9 rounded-lg bg-[var(--bg-hero)] text-[var(--primary)] flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-[var(--primary-dark)] text-base">Acesso Gratuito</h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Todos os estudos e PDFs estão livres para download e consulta em celulares, tablets e computadores.
          </p>
        </div>
      </div>

      {/* CTA de Rodapé */}
      <div className="text-center pt-4">
        <button
          onClick={onExploreStudies}
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3 rounded-full transition-colors text-sm sm:text-base min-h-[44px]"
        >
          <span>Acessar estudos bíblicos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
