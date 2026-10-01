import React from 'react';
import { 
  ArrowRight,
  FileText
} from 'lucide-react';
import { Study } from '../types/study';

interface StudyCardProps {
  study: Study;
  onSelectStudy: (study: Study) => void;
  onReadPdf?: (study: Study) => void;
}

export const StudyCard: React.FC<StudyCardProps> = ({ study, onSelectStudy }) => {
  return (
    <div 
      className="group relative flex flex-col justify-between bg-white rounded-3xl border border-slate-200/90 hover:border-blue-400 overflow-hidden transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
    >
      <div>
        {/* 2. Imagem de capa correspondente (Apresentação Visual do PDF Original) */}
        <div 
          onClick={() => onSelectStudy(study)}
          className="relative w-full aspect-[16/9] bg-[#162D5A] p-5 flex flex-col justify-between cursor-pointer overflow-hidden select-none"
        >
          {/* Top right geometric polygon accents matching the PDF presentation */}
          <div 
            aria-hidden="true"
            className="absolute top-0 right-0 w-0 h-0 border-t-[60px] sm:border-t-[80px] border-t-[#2E4F8B] border-l-[60px] sm:border-l-[80px] border-l-transparent opacity-90 pointer-events-none"
          />
          <div 
            aria-hidden="true"
            className="absolute top-0 right-0 w-0 h-0 border-t-[35px] sm:border-t-[45px] border-t-[#3C64AD] border-l-[35px] sm:border-l-[45px] border-l-transparent pointer-events-none"
          />

          {/* Top cover badge */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-blue-200 relative z-10">
            <span className="bg-blue-900/80 px-2 py-0.5 rounded text-[#FEE600] font-mono border border-blue-400/30">
              {study.studyNumber}
            </span>
            <span className="text-white/80 font-mono text-[10px]">
              {study.pageCount} págs
            </span>
          </div>

          {/* Golden cover title */}
          <div className="relative z-10 my-auto py-2">
            <h4 className="text-lg sm:text-xl font-extrabold text-[#FEE600] leading-snug line-clamp-2 drop-shadow-xs">
              {study.title}
            </h4>
            <p className="text-[11px] text-slate-200 font-medium mt-1 truncate">
              {study.author}
            </p>
          </div>

          {/* Bottom cover brand */}
          <div className="flex items-center justify-between text-[10px] text-blue-200/80 relative z-10 pt-1 border-t border-blue-400/20">
            <span>Correndo para Deus</span>
            <span className="font-bold text-white">✝</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Metadata pill */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              {study.category}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-medium">
              {study.readTime}
            </span>
          </div>

          {/* 1. Título oficial do estudo */}
          <h3 
            onClick={() => onSelectStudy(study)}
            className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug mb-2.5 cursor-pointer"
          >
            {study.title}
          </h3>

          {/* 3. Uma breve prévia/descrição de apresentação (sem resumir a conclusão ou o ensinamento) */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {study.description}
          </p>
        </div>
      </div>

      {/* 4. Botão funcional "[Ler estudo completo]" */}
      <div className="px-6 pb-6 pt-0 mt-auto">
        <button
          onClick={() => onSelectStudy(study)}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.99] text-sm group/btn min-h-[44px]"
          aria-label={`Ler estudo completo: ${study.title}`}
        >
          <span>Ler estudo completo</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
};
