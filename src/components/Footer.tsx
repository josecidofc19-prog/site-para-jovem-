import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/contact';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Main Footer Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-blue-400">✝</span>
              <div className="flex flex-col leading-none">
                <span className="font-script text-2xl text-blue-300">Jovens</span>
                <span className="text-xs font-bold tracking-widest text-white uppercase">
                  {OFFICIAL_CONTACT.name}
                </span>
              </div>
            </div>

            <p className="text-sm font-medium text-slate-300 italic">
              “{OFFICIAL_CONTACT.tagline}”
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Plataforma dedicada a disponibilizar estudos bíblicos em PDF para conhecer a Palavra de Deus e crescer no relacionamento com Cristo.
            </p>
          </div>

          {/* Navigation Links requested by user */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studies')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Estudos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
              <li>
                <a
                  href={OFFICIAL_CONTACT.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contatos Oficiais Resumidos */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contatos Oficiais
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <a
                  href={OFFICIAL_CONTACT.maps.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  {OFFICIAL_CONTACT.address.shortFormatted}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={OFFICIAL_CONTACT.phone.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors font-mono"
                >
                  {OFFICIAL_CONTACT.phone.display}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-rose-400 shrink-0" />
                <a
                  href={OFFICIAL_CONTACT.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {OFFICIAL_CONTACT.instagram.handle}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>✝</span>
            <span className="font-medium text-slate-400">Jovens Correndo para Deus</span>
          </div>

          <div className="font-medium text-blue-300/80">
            Mais de Deus. Sempre.
          </div>

          <div>
            © {new Date().getFullYear()} AD. Ministério Correndo para Deus.
          </div>
        </div>

      </div>
    </footer>
  );
};
