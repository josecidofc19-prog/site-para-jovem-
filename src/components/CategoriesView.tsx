import React from 'react';

interface CategoriesViewProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoriesView: React.FC<CategoriesViewProps> = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <h1 className="title-section font-bold text-[var(--primary-dark)] mb-4">
        Categorias
      </h1>
      <p className="text-sm text-[var(--text-muted)]">
        Nenhuma categoria cadastrada no momento.
      </p>
    </div>
  );
};
