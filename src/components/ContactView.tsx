import React from 'react';
import { MessageCircle, Instagram, MapPin, ExternalLink, Phone } from 'lucide-react';

export const ContactView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Cabeçalho */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[var(--primary)] mb-2 block select-none">
          F A L E &nbsp; C O N O S C O
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight">
          Contato
        </h1>
      </div>

      {/* Grade de Contatos Oficiais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* WhatsApp / Telefone */}
        <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between card-shadow text-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-[var(--primary-dark)] mb-1">
              WhatsApp / Telefone
            </h2>
            <p className="text-base font-extrabold text-[var(--primary)] mb-4">
              (19) 98199-8747
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-[var(--border)]">
            <a
              href="https://wa.me/5519981998747"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-full transition-colors min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Conversar no WhatsApp</span>
            </a>
            <a
              href="tel:+5519981998747"
              className="inline-flex items-center justify-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--primary)] font-semibold py-1.5 transition-colors min-h-[38px]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ligar (19) 98199-8747</span>
            </a>
          </div>
        </div>

        {/* Instagram Oficial */}
        <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between card-shadow text-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-[var(--primary-dark)] mb-1">
              Instagram
            </h2>
            <p className="text-base font-extrabold text-[var(--primary)] mb-4">
              @ad_correndoparadeus
            </p>
          </div>

          <div className="pt-2 border-t border-[var(--border)]">
            <a
              href="https://www.instagram.com/ad_correndoparadeus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-full transition-colors min-h-[44px] w-full"
            >
              <Instagram className="w-4 h-4" />
              <span>Acessar perfil</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Endereço Oficial */}
        <div className="bg-[var(--bg-page)] border border-[var(--border)] rounded-[14px] p-6 sm:p-8 flex flex-col justify-between card-shadow text-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h2 className="text-base font-bold text-[var(--primary-dark)] mb-2">
              Endereço
            </h2>
            <address className="not-italic text-xs sm:text-sm text-[var(--text-main)] leading-relaxed space-y-0.5">
              <p className="font-semibold text-[var(--primary-dark)]">Rua Orlando Barnabé, 229</p>
              <p className="text-[var(--text-muted)]">Jardim Morada do Sol</p>
              <p className="text-[var(--text-muted)]">Indaiatuba - SP</p>
              <p className="text-[var(--text-muted)] font-mono text-xs mt-1">CEP 13348-220</p>
            </address>
          </div>

          <div className="pt-4 border-t border-[var(--border)] mt-4">
            <span className="text-xs text-[var(--text-muted)] block">
              AD. Ministério Correndo para Deus
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};
