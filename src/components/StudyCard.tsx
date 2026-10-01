import React from 'react';
import { ArrowRight, FileText, User, Tag } from 'lucide-react';
import { Study } from '../types/study';

interface StudyCardProps {
  study: Study;
  onSelectStudy: (id: string) => void;
}

export const StudyCard: React.FC<StudyCardProps> = ({ study, onSelectStudy }) => {
  return (
    <article
      onClick={() => onSelectStudy(study.id)}
      className="group cursor-pointer bg-[var(--bg-page)] border border-[var(--border)] hover:border-[var(--primary)] rounded-[14px] p-6 flex flex-col justify-between card-shadow transition-all duration-200 hover:-translate-y-0.5"
    >
      <div>
        {/* Categoria (SÓ se existir) */}
        {study.category && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
              <Tag className="w-3 h-3" />
              <span>{study.category}</span>
            </span>
          </div>
        )}

        {/* Título Oficial */}
        <h3 className="title-card font-bold text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors mb-2 leading-snug">
          {study.title}
        </h3>

        {/* Autor Oficial */}
        {study.author && (
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] mb-3">
            <User className="w-3.5 h-3.5 text-[var(--primary)] shrink-0" />
            <span className="font-medium">{study.author}</span>
          </div>
        )}

        {/* Descrição (SÓ se existir) */}
        {study.description && (
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2 mb-4">
            {study.description}
          </p>
        )}
      </div>

      {/* Rodapé: Número de Páginas + Ação */}
      <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3 text-xs sm:text-sm mt-auto">
        {study.pageCount ? (
          <span className="inline-flex items-center gap-1 text-[var(--text-muted)] font-medium">
            <FileText className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span>{study.pageCount} páginas</span>
          </span>
        ) : <div />}

        <span className="inline-flex items-center gap-1.5 text-[var(--primary)] font-bold group-hover:text-[var(--primary-dark)] transition-colors">
          <span>Ver estudo</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
};
