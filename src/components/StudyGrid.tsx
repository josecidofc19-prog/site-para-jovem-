import React, { useMemo } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { Study } from '../types/study';
import { StudyCard } from './StudyCard';

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
      // Filtro de categoria (se houver categoria selecionada e categorias disponíveis)
      if (selectedCategory && selectedCategory !== 'Todos') {
        if (!study.category || normalizeText(study.category) !== normalizeText(selectedCategory)) {
          return false;
        }
      }

      if (!q) return true;

      // Busca apenas em: título, autor e, quando existirem, categoria, descrição e referências
      const title = normalizeText(study.title);
      const author = normalizeText(study.author);
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

        {/* Busca (procura apenas nos campos reais) */}
        {studies.length > 0 && (
          <div className="w-full sm:w-72 md:w-64 relative shrink-0">
            <div className="absolute left-3.5 top-2.5 pointer-events-none text-[var(--text-muted)]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Buscar estudo..."
              className="w-full pl-9 pr-8 py-2 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:border-[var(--primary)] transition-all"
              aria-label="Buscar estudo"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-[var(--text-muted)] hover:text-[var(--text-main)]"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Filtros de categoria: Mostra SÓ as categorias que existirem em algum estudo. Enquanto nenhuma tiver, ESCONDE os filtros. */}
      {availableCategories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar" role="tablist" aria-label="Filtro de categorias">
          <button
            onClick={() => onCategoryChange('Todos')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all min-h-[38px] flex items-center ${
              selectedCategory === 'Todos'
                ? 'bg-[var(--primary)] text-white font-bold'
                : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--primary-light)] border border-[var(--border)]'
            }`}
          >
            Todos
          </button>
          {availableCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
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
      )}

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
