import React from 'react';
import { MapPin, Phone, Instagram, ExternalLink, ArrowRight } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/contact';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0F2B5B] text-white pt-12 pb-8 border-t border-[#1C3E78] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Assinatura Principal */}
        <div className="text-center sm:text-left pb-8 border-b border-white/10 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-base shrink-0">
              ✝
            </div>
            <div>
              <span className="text-base sm:text-lg font-extrabold tracking-wider uppercase block text-white">
                CORRENDO PARA DEUS
              </span>
              <span className="text-xs text-blue-200">
                Estudos para fortalecer a fé e aproximar você de Deus.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={OFFICIAL_CONTACT.maps.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-full transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-300" />
              <span>Ver no mapa</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.phone.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3 py-2 rounded-full transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#E1306C] hover:bg-[#C13584] text-white px-3 py-2 rounded-full transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Seguir no Instagram</span>
            </a>
          </div>
        </div>

        {/* Informações Oficiais Integradas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10 text-xs sm:text-sm text-blue-100">
          
          {/* Navegação Rápida */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('estudos')}
                  className="hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  Estudos Bíblicos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categorias')}
                  className="hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  Categorias
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="hover:text-white transition-colors min-h-[32px] flex items-center"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Sede e Endereço */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Sede da Igreja
            </h4>
            <address className="not-italic space-y-1 leading-relaxed text-blue-200">
              <p className="font-semibold text-white">AD. Ministério Correndo para Deus</p>
              <p>{OFFICIAL_CONTACT.address.street}</p>
              <p>{OFFICIAL_CONTACT.address.neighborhood}</p>
              <p>{OFFICIAL_CONTACT.address.city} - {OFFICIAL_CONTACT.address.state} — CEP {OFFICIAL_CONTACT.address.zip}</p>
            </address>
          </div>

          {/* Atendimento */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Canais Oficiais
            </h4>
            <div className="space-y-2 text-blue-200">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-300" />
                <span>{OFFICIAL_CONTACT.phone.display}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-rose-300" />
                <a 
                  href={OFFICIAL_CONTACT.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  {OFFICIAL_CONTACT.instagram.handle}
                </a>
              </p>
              <p className="text-[11px] text-blue-300/80 pt-2">
                Encontros de jovens e cultos bíblicos abertos a toda a igreja.
              </p>
            </div>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-200/80">
          <div>
            © {new Date().getFullYear()} AD. Ministério Correndo para Deus. Todos os direitos reservados.
          </div>
          <div>
            Plataforma 100% estática e fiel às Escrituras Sagradas.
          </div>
        </div>

      </div>
    </footer>
  );
};
