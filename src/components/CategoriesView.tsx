import React from 'react';
import { Tag, ArrowRight, BookOpen } from 'lucide-react';
import { STUDIES } from '../data/studies';

interface CategoriesViewProps {
  onSelectCategory: (category: string) => void;
  onExploreStudies: () => void;
}

export const CategoriesView: React.FC<CategoriesViewProps> = ({
  onSelectCategory,
  onExploreStudies,
}) => {
  // Coleta as categorias reais existentes e a contagem de estudos de cada uma
  const categoriesWithCount = React.useMemo(() => {
    const map = new Map<string, number>();
    STUDIES.forEach((s) => {
      if (s.category && s.category.trim()) {
        const cat = s.category.trim();
        map.set(cat, (map.get(cat) || 0) + 1);
      }
    });
    return Array.from(map.entries()).map(([name, count]) => ({ name, count }));
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] mb-2 block select-none">
          E X P L O R E &nbsp; P O R &nbsp; T E M A
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight">
          Categorias
        </h1>
      </div>

      {categoriesWithCount.length >= 2 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {categoriesWithCount.map(({ name, count }) => (
            <button
              key={name}
              onClick={() => onSelectCategory(name)}
              className="group text-left bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] rounded-[14px] p-6 card-shadow transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between min-h-[120px]"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mb-3 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                  <Tag className="w-5 h-5" />
                </div>
                <h2 className="text-base font-bold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
                  {name}
                </h2>
              </div>
              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-muted)] mt-4">
                <span>{count} {count === 1 ? 'estudo' : 'estudos'}</span>
                <span className="inline-flex items-center gap-1 text-[var(--primary)] font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>Ver estudos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-[var(--bg-surface)] rounded-[14px] border border-[var(--border)] p-8 max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-[var(--primary)] mx-auto mb-3 opacity-60" />
          <p className="text-sm text-[var(--text-muted)]">
            Explore todos os nossos estudos bíblicos disponíveis.
          </p>
        </div>
      )}

      {/* Botão Ver Todos */}
      <div className="text-center">
        <button
          onClick={onExploreStudies}
          className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold px-7 py-3 rounded-full transition-colors text-xs sm:text-sm min-h-[44px]"
        >
          <span>Ver todos os estudos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
