import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, category?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'studies', label: 'Estudos' },
    { id: 'categories', label: 'Categorias' },
    { id: 'about', label: 'Nossa História' },
    { id: 'contact', label: 'Contato' },
  ];

  const handleLinkClick = (tabId: string) => {
    onNavigate(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Zone: ✝ Jovens CORRENDO PARA DEUS */}
        <button
          onClick={() => handleLinkClick('home')}
          className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          aria-label="Ir para o início - Correndo para Deus"
        >
          {/* Subtle stylized cross */}
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-lg border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
            ✝
          </div>

          <div className="flex flex-col leading-none">
            <span className="font-script text-2xl sm:text-3xl text-blue-900 group-hover:text-blue-700 transition-colors">
              Jovens
            </span>
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-slate-800 uppercase">
              CORRENDO PARA DEUS
            </span>
          </div>
        </button>

        {/* Desktop Nav Zone */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-blue-800 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Zone: Explorar estudos */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleLinkClick('studies')}
            className="inline-flex items-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-800"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explorar estudos</span>
          </button>
        </div>

        {/* Mobile Burger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-900 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('studies')}
              className="w-full flex items-center justify-center gap-2 bg-[#13467B] text-white py-3 rounded-xl font-medium text-sm shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explorar estudos</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
