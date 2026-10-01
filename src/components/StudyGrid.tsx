import React from 'react';
import { Study } from '../types/study';
import { StudyCard } from './StudyCard';
import { SearchX, RotateCcw } from 'lucide-react';

interface StudyGridProps {
  studies: Study[];
  onSelectStudy: (study: Study) => void;
  onResetFilters?: () => void;
}

export const StudyGrid: React.FC<StudyGridProps> = ({
  studies,
  onSelectStudy,
  onResetFilters,
}) => {
  if (studies.length === 0) {
    return (
      <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 sm:p-12 text-center my-6 max-w-lg mx-auto">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-6 h-6 stroke-[1.75]" />
        </div>
        <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
          Nenhum estudo encontrado.
        </h4>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">
          Experimente outro termo de busca ou selecione outra categoria.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-semibold px-4 py-2.5 rounded-xl border border-slate-200 text-sm shadow-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Limpar filtros e busca</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studies.map((study) => (
        <StudyCard
          key={study.id}
          study={study}
          onSelectStudy={onSelectStudy}
        />
      ))}
    </div>
  );
};
