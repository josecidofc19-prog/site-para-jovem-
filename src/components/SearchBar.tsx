import React from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  resultCount?: number;
  totalCount?: number;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  resultCount,
  totalCount,
}) => {
  return (
    <div className="w-full">
      <div className="relative flex items-center">
        <div className="absolute left-4 pointer-events-none text-slate-400">
          <Search className="w-5 h-5 text-slate-600" />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar um estudo..."
          aria-label="Buscar estudo bíblico por título, assunto, versículo ou palavra-chave"
          className="w-full pl-11 pr-10 py-3.5 bg-slate-50 hover:bg-slate-100/80 focus:bg-white border border-slate-200 focus:border-blue-700 rounded-xl text-slate-900 placeholder:text-slate-500 text-sm md:text-base outline-none transition-all duration-200 focus:ring-3 focus:ring-blue-100"
        />

        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute right-3.5 p-1 rounded-full text-slate-600 hover:text-slate-800 hover:bg-slate-200 transition-colors"
            aria-label="Limpar termo de busca"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {value && resultCount !== undefined && totalCount !== undefined && (
        <div className="mt-2 text-xs text-slate-500 flex items-center justify-between px-1">
          <span>
            {resultCount === 0
              ? 'Nenhum resultado'
              : `${resultCount} ${resultCount === 1 ? 'estudo encontrado' : 'estudos encontrados'}`}
            {` para "${value}"`}
          </span>
          <button
            onClick={() => onChange('')}
            className="text-blue-700 hover:underline font-medium"
          >
            Limpar busca
          </button>
        </div>
      )}
    </div>
  );
};
