import React, { useMemo } from 'react';
import { Instagram } from 'lucide-react';
import { STUDIES } from '../data/studies';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  // Verifica se existem 2 ou mais categorias reais
  const hasMultipleCategories = useMemo(() => {
    const cats = new Set<string>();
    STUDIES.forEach((s) => {
      if (s.category && s.category.trim()) cats.add(s.category.trim());
    });
    return cats.size >= 2;
  }, []);

  return (
    <footer className="bg-[#13467B] text-white pt-10 pb-8 border-t border-[#1b5591] transition-colors mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Identidade e Navegação Real */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-base shrink-0 select-none">
              ✝
            </div>
            <div>
              <span className="text-base font-extrabold tracking-wider uppercase block text-white">
                CORRENDO PARA DEUS
              </span>
              <span className="text-xs text-blue-100">
                Estudos para fortalecer a fé e aproximar você de Deus.
              </span>
            </div>
          </div>

          {/* Links de navegação oficiais */}
          <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-5 sm:gap-6 text-xs sm:text-sm text-blue-100" aria-label="Navegação do rodapé">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-white transition-colors min-h-[36px] flex items-center"
            >
              Início
            </button>
            <button
              onClick={() => onNavigate('estudos')}
              className="hover:text-white transition-colors min-h-[36px] flex items-center"
            >
              Estudos
            </button>
            {hasMultipleCategories && (
              <button
                onClick={() => onNavigate('categorias')}
                className="hover:text-white transition-colors min-h-[36px] flex items-center"
              >
                Categorias
              </button>
            )}
            <button
              onClick={() => onNavigate('sobre')}
              className="hover:text-white transition-colors min-h-[36px] flex items-center"
            >
              Nossa História
            </button>
            <button
              onClick={() => onNavigate('contato')}
              className="hover:text-white transition-colors min-h-[36px] flex items-center"
            >
              Contato
            </button>
            <a
              href="https://www.instagram.com/ad_correndoparadeus/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors min-h-[36px] flex items-center gap-1.5 text-yellow-300 hover:text-yellow-200 font-semibold"
              title="Instagram Oficial @ad_correndoparadeus"
              aria-label="Instagram Oficial @ad_correndoparadeus"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </nav>
        </div>

        {/* Rodapé inferior */}
        <div className="pt-6 text-center sm:text-left text-xs text-blue-200/70">
          © {new Date().getFullYear()} AD. Ministério Correndo para Deus. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};
