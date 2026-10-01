import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, studyId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'estudos', label: 'Estudos' },
    { id: 'categorias', label: 'Categorias' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleLinkClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-page)] border-b border-[var(--border)] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand: Símbolo cristão minimalista (cruz fina) + "CORRENDO PARA DEUS" */}
        <button
          onClick={() => handleLinkClick('inicio')}
          className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] rounded-lg py-1 px-1"
          aria-label="Ir para a página inicial - Correndo para Deus"
        >
          {/* Cruz fina minimalista */}
          <div className="w-8 h-8 rounded-lg bg-[var(--bg-hero)] text-[var(--primary)] border border-[var(--border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--primary-light)] transition-colors">
            <svg width="18" height="22" viewBox="0 0 18 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="9" y1="2" x2="9" y2="20" />
              <line x1="3" y1="7" x2="15" y2="7" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-extrabold tracking-wider text-[var(--primary-dark)] uppercase">
              CORRENDO PARA DEUS
            </span>
            <span className="text-[11px] font-medium text-[var(--text-muted)]">
              AD. Ministério Correndo para Deus
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id || (link.id === 'estudos' && currentTab === 'estudo');
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-semibold transition-colors py-1.5 min-h-[44px] flex items-center ${
                    isActive
                      ? 'text-[var(--primary)] font-bold'
                      : 'text-[var(--text-muted)] hover:text-[var(--primary)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span 
                      aria-hidden="true"
                      className="absolute bottom-1 left-0 right-0 h-0.5 bg-[var(--primary)] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA: Explorar estudos */}
          <button
            onClick={() => handleLinkClick('estudos')}
            className="inline-flex items-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-xs transition-colors min-h-[44px]"
          >
            <span>Explorar estudos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-[var(--text-main)] hover:bg-[var(--bg-surface)] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center border border-[var(--border)]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg-page)] px-4 pt-3 pb-5 space-y-2 shadow-md">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id || (link.id === 'estudos' && currentTab === 'estudo');
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between min-h-[44px] ${
                  isActive
                    ? 'bg-[var(--primary-light)] text-[var(--primary-dark)] font-bold'
                    : 'text-[var(--text-main)] hover:bg-[var(--bg-surface)]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                )}
              </button>
            );
          })}

          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('estudos')}
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--primary)] text-white text-sm font-bold py-3 rounded-lg min-h-[44px]"
            >
              <span>Explorar estudos</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
