import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Navigation, 
  ExternalLink 
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/contact';

export const ContatoView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2 block">
          CANAIS OFICIAIS
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight mb-3">
          Entre em Contato
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-muted)]">
          Venha nos visitar ou tire dúvidas diretamente com a liderança do ministério
        </p>
      </div>

      {/* 3 Cartões de Contato */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        
        {/* Endereço */}
        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-hero)] text-[var(--primary)] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--primary-dark)] text-base mb-2">
              Sede Oficial
            </h3>
            <address className="not-italic text-sm text-[var(--text-muted)] space-y-1 mb-6 leading-relaxed">
              <p className="font-semibold text-[var(--text-main)]">{OFFICIAL_CONTACT.address.street}</p>
              <p>{OFFICIAL_CONTACT.address.neighborhood}</p>
              <p>{OFFICIAL_CONTACT.address.city} - {OFFICIAL_CONTACT.address.state}</p>
              <p className="text-xs font-mono">CEP: {OFFICIAL_CONTACT.address.zip}</p>
            </address>
          </div>

          <div className="space-y-2 pt-4 border-t border-[var(--border)]">
            <a
              href={OFFICIAL_CONTACT.maps.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver no mapa</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--bg-surface)] hover:bg-[var(--primary-light)] text-[var(--primary-dark)] font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
            >
              <Navigation className="w-4 h-4" />
              <span>Como chegar</span>
            </a>
          </div>
        </div>

        {/* Telefone / WhatsApp */}
        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--primary-dark)] text-base mb-2">
              Telefone / WhatsApp
            </h3>
            <div className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
              <p className="text-xl font-bold text-[var(--primary-dark)] font-mono">
                {OFFICIAL_CONTACT.phone.display}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Atendimento direto para oração, dúvidas e informações dos cultos de jovens.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-[var(--border)]">
            <a
              href={OFFICIAL_CONTACT.phone.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.phone.telLink}
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--bg-surface)] hover:bg-[var(--primary-light)] text-[var(--primary-dark)] font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm border border-[var(--border)] transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4" />
              <span>Ligar agora</span>
            </a>
          </div>
        </div>

        {/* Instagram Oficial */}
        <div className="bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] p-6 card-shadow flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
              <Instagram className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-[var(--primary-dark)] text-base mb-2">
              Instagram Oficial
            </h3>
            <div className="text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
              <p className="text-lg font-bold text-[var(--primary-dark)]">
                {OFFICIAL_CONTACT.instagram.handle}
              </p>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Acompanhe avisos de encontros, devocionais e novidades da juventude.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <a
              href={OFFICIAL_CONTACT.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E1306C] hover:bg-[#C13584] text-white font-bold py-2.5 px-4 rounded-full text-xs sm:text-sm transition-colors min-h-[44px]"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Mapa Embed */}
      <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 card-shadow">
        <h3 className="text-base font-bold text-[var(--primary-dark)] mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[var(--primary)]" />
          <span>Localização da Igreja no Google Maps</span>
        </h3>
        <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-[var(--border)]">
          <iframe
            title="Localização da Assembléia de Deus Correndo para Deus"
            src={OFFICIAL_CONTACT.maps.embedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-xs text-[var(--text-muted)] mt-3 text-center">
          {OFFICIAL_CONTACT.address.fullFormatted}
        </p>
      </div>

    </div>
  );
};
