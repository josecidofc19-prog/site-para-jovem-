import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0F2B5B] text-white pt-10 pb-8 border-t border-[#1C3E78] transition-colors mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Identidade e Navegação Real */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-base shrink-0">
              ✝
            </div>
            <div>
              <span className="text-base font-extrabold tracking-wider uppercase block text-white">
                CORRENDO PARA DEUS
              </span>
              <span className="text-xs text-blue-200">
                Estudos bíblicos para crescer na fé.
              </span>
            </div>
          </div>

          {/* Links de navegação oficiais */}
          <nav className="flex items-center gap-6 text-xs sm:text-sm text-blue-200" aria-label="Navegação do rodapé">
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
            <button
              onClick={() => onNavigate('sobre')}
              className="hover:text-white transition-colors min-h-[36px] flex items-center"
            >
              Sobre
            </button>
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
