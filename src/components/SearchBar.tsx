import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = 'Buscar estudo...',
}) => {
  return (
    <div className="w-full sm:w-72 md:w-64 relative shrink-0">
      <div className="absolute left-3.5 top-2.5 pointer-events-none text-[var(--text-muted)]">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-8 py-2 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full text-xs sm:text-sm text-[var(--text-main)] placeholder:text-[var(--text-muted)] outline-none focus:ring-2 focus:ring-[var(--primary-light)] focus:border-[var(--primary)] transition-all"
        aria-label="Buscar estudo"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 top-2.5 text-[var(--text-muted)] hover:text-[var(--text-main)]"
          aria-label="Limpar busca"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
