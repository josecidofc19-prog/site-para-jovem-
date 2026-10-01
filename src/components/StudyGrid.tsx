import React, { useMemo } from 'react';
import { BookOpen } from 'lucide-react';
import { Study } from '../types/study';
import { StudyCard } from './StudyCard';
import { SearchBar } from './SearchBar';
import { CategoryFilter } from './CategoryFilter';

interface StudyGridProps {
  studies: Study[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSelectStudy: (id: string) => void;
}

// Normaliza texto para busca sem distinção de acentos ou maiúsculas
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const StudyGrid: React.FC<StudyGridProps> = ({
  studies,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onSelectStudy,
}) => {
  // Extrai somente as categorias que realmente existem em pelo menos um estudo
  const availableCategories = useMemo(() => {
    const cats = new Set<string>();
    studies.forEach((s) => {
      if (s.category && s.category.trim()) {
        cats.add(s.category.trim());
      }
    });
    return Array.from(cats);
  }, [studies]);

  // Busca apenas nos campos reais existentes
  const filteredStudies = useMemo(() => {
    const q = normalizeText(searchQuery.trim());

    return studies.filter((study) => {
      // Filtro de categoria
      if (selectedCategory && selectedCategory !== 'Todos') {
        if (!study.category || normalizeText(study.category) !== normalizeText(selectedCategory)) {
          return false;
        }
      }

      if (!q) return true;

      // Busca apenas em: título, autor e, quando existirem, categoria, descrição e referências
      const title = normalizeText(study.title);
      const author = study.author ? normalizeText(study.author) : '';
      const category = study.category ? normalizeText(study.category) : '';
      const description = study.description ? normalizeText(study.description) : '';
      const refs = study.bibleReferences ? study.bibleReferences.map(normalizeText).join(' ') : '';

      return (
        title.includes(q) ||
        author.includes(q) ||
        category.includes(q) ||
        description.includes(q) ||
        refs.includes(q)
      );
    });
  }, [studies, searchQuery, selectedCategory]);

  return (
    <section id="secao-estudos" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 bg-[var(--bg-page)]">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[var(--border)]">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] mb-2 block select-none">
            N O S S O S &nbsp; E S T U D O S
          </span>
          <h2 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight leading-snug">
            Estudos Bíblicos
          </h2>
        </div>

        {/* Busca */}
        {studies.length > 0 && (
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
          />
        )}
      </div>

      {/* Filtros de categoria (aparecem apenas se houver categorias cadastradas) */}
      <CategoryFilter
        categories={availableCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={onCategoryChange}
      />

      {/* Grade com os 6 estudos */}
      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <StudyCard
              key={study.id}
              study={study}
              onSelectStudy={onSelectStudy}
            />
          ))}
        </div>
      ) : (
        /* Estado Vazio */
        <div className="text-center py-16 bg-[var(--bg-surface)] rounded-[14px] border border-[var(--border)] p-8 max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-[var(--primary)] mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-bold text-[var(--primary-dark)] mb-1">
            Nenhum estudo encontrado.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Experimente buscar outro termo ou remover os filtros.
          </p>
          {(searchQuery || (selectedCategory && selectedCategory !== 'Todos')) && (
            <button
              onClick={() => {
                onSearchChange('');
                onCategoryChange('Todos');
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary)] hover:underline"
            >
              <span>Ver todos os estudos</span>
            </button>
          )}
        </div>
      )}

    </section>
  );
};
