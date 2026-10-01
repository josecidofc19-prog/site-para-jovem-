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

// Utilitário para normalizar texto (sem diferenciar maiúsculas ou acentos)
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
      // Filtro de Categoria
      const matchesCategory =
        selectedCategory === 'Todos' ||
        normalizeText(estudo.categoria) === normalizeText(selectedCategory);

      if (!matchesCategory) return false;
      if (!q) return true;

      // Busca abrangente: título, descrição, subtítulo, assuntos, palavras-chave, referências
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
    <section id="secao-estudos" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 bg-[var(--bg-page)]">
      
      {/* Cabeçalho da Seção idêntico à referência visual */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[var(--border)]">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] mb-2 block select-none">
            N O S S O S &nbsp; E S T U D O S
          </span>
          <h2 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight leading-snug mb-2">
            A Palavra de Deus para a nossa geração
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
            Aqui você encontra todos os estudos realizados pelo ministério de jovens. Aproveite e aprofunde seu relacionamento com Deus!
          </p>
        </div>

        {/* Busca por estudo (somente se houver estudos cadastrados) */}
        {estudos.length > 0 && (
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

      {/* Pílulas de filtro por categoria */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar" role="tablist" aria-label="Filtro de categorias">
        {CATEGORIAS.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              role="tab"
              aria-selected={isSelected}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold shrink-0 transition-all min-h-[38px] flex items-center ${
                isSelected
                  ? 'bg-[var(--primary)] text-white font-bold shadow-2xs'
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
            className="text-xs font-semibold text-[var(--primary)] hover:underline ml-2 shrink-0 py-1"
          >
            Limpar filtros
          </button>
        )}
      </div>

      {/* Grade de Estudos: 1 coluna no celular, 2 no tablet, 3 no desktop */}
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
        /* Estado Vazio */
        <div className="text-center py-16 bg-[var(--bg-surface)] rounded-[14px] border border-[var(--border)] p-8 max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-[var(--primary)] mx-auto mb-3 opacity-60" />
          <h3 className="text-base font-bold text-[var(--primary-dark)] mb-1">
            Nenhum estudo encontrado.
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4">
            Experimente buscar outro termo ou remover os filtros.
          </p>
          <button
            onClick={() => {
              onSearchChange('');
              onCategoryChange('Todos');
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--primary)] hover:underline"
          >
            <span>Ver todos os estudos</span>
          </button>
        </div>
      )}

    </section>
  );
};
