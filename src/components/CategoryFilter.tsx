import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  // Se não houver nenhuma categoria em nenhum estudo, o filtro fica totalmente oculto
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar" role="tablist" aria-label="Filtro de categorias">
      <button
        onClick={() => onSelectCategory('Todos')}
        role="tab"
        aria-selected={selectedCategory === 'Todos'}
        className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all min-h-[38px] flex items-center ${
          selectedCategory === 'Todos'
            ? 'bg-[var(--primary)] text-white font-bold'
            : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--primary-light)] border border-[var(--border)]'
        }`}
      >
        Todos
      </button>
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            role="tab"
            aria-selected={isSelected}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all min-h-[38px] flex items-center ${
              isSelected
                ? 'bg-[var(--primary)] text-white font-bold'
                : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--primary-light)] border border-[var(--border)]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
