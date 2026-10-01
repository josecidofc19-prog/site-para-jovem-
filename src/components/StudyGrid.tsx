import React, { useMemo } from 'react';
import { Search, X, BookOpen } from 'lucide-react';
import { Estudo, CATEGORIAS } from '../data/estudos';
import { StudyCard } from './StudyCard';

interface StudyGridProps {
  estudos: Estudo[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onSelectEstudo: (id: string) => void;
}

// Utility to normalize string for accent-insensitive and case-insensitive search
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export const StudyGrid: React.FC<StudyGridProps> = ({
  estudos,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onSelectEstudo,
}) => {
  const filteredEstudos = useMemo(() => {
    const q = normalizeText(searchQuery.trim());

    return estudos.filter((estudo) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'Todos' ||
        normalizeText(estudo.categoria) === normalizeText(selectedCategory);

      if (!matchesCategory) return false;
      if (!q) return true;

      // Full text search: title, description, subtitle, topics, keywords, references
      const title = normalizeText(estudo.titulo);
      const desc = normalizeText(estudo.descricao);
      const subtitulo = estudo.subtitulo ? normalizeText(estudo.subtitulo) : '';
      const autor = normalizeText(estudo.autor);
      const assuntos = estudo.assuntos.map(normalizeText).join(' ');
      const palavras = estudo.palavrasChave.map(normalizeText).join(' ');
      const referencias = estudo.referencias.map(normalizeText).join(' ');

      return (
        title.includes(q) ||
        desc.includes(q) ||
        subtitulo.includes(q) ||
        autor.includes(q) ||
        assuntos.includes(q) ||
        palavras.includes(q) ||
        referencias.includes(q)
      );
    });
  }, [estudos, searchQuery, selectedCategory]);

  return (
    <section id="secao-estudos" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Título da Seção & Barra de Busca */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] block mb-1">
            CONTEÚDOS BÍBLICOS
          </span>
          <h2 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight">
            Nossos estudos
          </h2>
          <p className="text-sm text-[var(--text-muted)] mt-1">
            {filteredEstudos.length} {filteredEstudos.length === 1 ? 'estudo disponível' : 'estudos disponíveis'} para leitura completa
          </p>
        </div>

        {/* Barra de Busca Instantânea */}
        <div className="w-full sm:w-80 relative shrink-0">
          <div className="absolute left-3.5 top-3 pointer-events-none text-[var(--text-muted)]">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Pesquisar por tema, versículo ou título..."
            className="w-full pl-10 pr-9 py-2.5 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:border-[var(--primary)] transition-all"
            aria-label="Buscar estudos bíblicos"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-3 text-[var(--text-muted)] hover:text-[var(--text-main)]"
              aria-label="Limpar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filtros de Categoria em Pílulas (Pills) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar" role="tablist" aria-label="Filtro de categorias">
        {CATEGORIAS.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              role="tab"
              aria-selected={isSelected}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all min-h-[40px] flex items-center ${
                isSelected
                  ? 'bg-[var(--primary)] text-white font-bold shadow-xs'
                  : 'bg-[var(--bg-surface)] text-[var(--text-muted)] hover:bg-[var(--primary-light)] hover:text-[var(--primary-dark)] border border-[var(--border)]'
              }`}
            >
              {cat}
            </button>
          );
        })}

        {(searchQuery || selectedCategory !== 'Todos') && (
          <button
            onClick={() => {
              onSearchChange('');
              onCategoryChange('Todos');
            }}
            className="text-xs font-semibold text-[var(--primary)] hover:underline ml-2 shrink-0 py-2"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Grade Responsiva: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      {filteredEstudos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEstudos.map((estudo) => (
            <StudyCard
              key={estudo.id}
              estudo={estudo}
              onSelectEstudo={onSelectEstudo}
            />
          ))}
        </div>
      ) : (
        /* Estado Vazio Padronizado */
        <div className="text-center py-16 bg-[var(--bg-surface)] rounded-[14px] border border-[var(--border)] p-8 max-w-lg mx-auto">
          <BookOpen className="w-12 h-12 text-[var(--primary)] mx-auto mb-3 opacity-60" />
          <h3 className="text-lg font-bold text-[var(--primary-dark)] mb-1">
            Nenhum estudo encontrado.
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
            Experimente buscar outro termo ou remover os filtros.
          </p>
          <button
            onClick={() => {
              onSearchChange('');
              onCategoryChange('Todos');
            }}
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-full transition-colors min-h-[44px]"
          >
            <span>Ver todos os estudos</span>
          </button>
        </div>
      )}

    </section>
  );
};
