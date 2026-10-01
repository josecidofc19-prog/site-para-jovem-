import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Crown, 
  Heart, 
  Flame, 
  Leaf,
  FileText
} from 'lucide-react';
import { Estudo } from '../data/estudos';

interface StudyCardProps {
  estudo: Estudo;
  onSelectEstudo: (id: string) => void;
}

export const StudyCard: React.FC<StudyCardProps> = ({ estudo, onSelectEstudo }) => {
  const renderIcon = () => {
    switch (estudo.icone) {
      case 'crown':
        return <Crown className="w-6 h-6 text-[var(--primary)] stroke-[1.8]" />;
      case 'cross':
        return (
          <div className="w-6 h-6 text-[var(--primary)] flex items-center justify-center font-bold text-xl leading-none">
            ✝
          </div>
        );
      case 'heart':
        return <Heart className="w-6 h-6 text-[var(--primary)] stroke-[1.8]" />;
      case 'flame':
        return <Flame className="w-6 h-6 text-[var(--primary)] stroke-[1.8]" />;
      case 'leaf':
        return <Leaf className="w-6 h-6 text-[var(--primary)] stroke-[1.8]" />;
      case 'book':
      default:
        return <BookOpen className="w-6 h-6 text-[var(--primary)] stroke-[1.8]" />;
    }
  };

  const previewDescription = estudo.subtitulo || estudo.descricao || '';

  return (
    <article 
      onClick={() => onSelectEstudo(estudo.id)}
      className="group cursor-pointer bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] rounded-[14px] p-6 flex flex-col justify-between card-shadow transition-all duration-200 hover:-translate-y-0.5"
    >
      <div>
        {/* Top bar: Ícone em azul + Categoria real */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-hero)] border border-[var(--border)] flex items-center justify-center shrink-0">
            {renderIcon()}
          </div>

          <div className="flex items-center gap-1.5">
            {estudo.categoria && (
              <span className="text-xs font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
                {estudo.categoria}
              </span>
            )}
          </div>
        </div>

        {/* Título Oficial do Estudo */}
        <h3 className="title-card font-bold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors mb-2.5 line-clamp-2">
          {estudo.titulo}
        </h3>

        {/* Descrição curta real (somente se fornecida) */}
        {previewDescription ? (
          <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">
            {previewDescription}
          </p>
        ) : null}
      </div>

      {/* Rodapé do Card: Tag de Páginas + Ação */}
      <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3 text-xs sm:text-sm mt-auto">
        {estudo.paginas ? (
          <span className="inline-flex items-center gap-1 text-[var(--text-muted)] font-medium">
            <FileText className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span>{estudo.paginas} páginas</span>
          </span>
        ) : <div />}

        <span className="inline-flex items-center gap-1.5 text-[var(--primary)] font-bold group-hover:text-[var(--primary-dark)] transition-colors">
          <span>Acessar estudo</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};
