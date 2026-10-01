import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Navigation, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/contact';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, informe seu nome.');
      return;
    }

    if (!email.trim() || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Por favor, insira um e-mail válido.');
      return;
    }

    if (!message.trim() || message.trim().length < 5) {
      setStatus('error');
      setErrorMessage('Por favor, escreva uma mensagem com ao menos 5 caracteres.');
      return;
    }

    setStatus('submitted');
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 animate-in fade-in duration-150">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2 block">
          CONTATOS OFICIAIS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Entre em contato
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Canais oficiais do ministério <strong>CORRENDO PARA DEUS</strong>. Estamos à disposição para tirar dúvidas, receber pedidos de oração e acolher você.
        </p>
      </div>

      {/* 3 Main Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
        
        {/* Card 1: 📍 Endereço */}
        <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 border border-blue-100 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6 stroke-[1.8]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block mb-1">
              Localização
            </span>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Endereço
            </h2>

            <address className="not-italic text-sm text-slate-600 leading-relaxed space-y-0.5 mb-6">
              <p className="font-semibold text-slate-800">{OFFICIAL_CONTACT.address.street}</p>
              <p>{OFFICIAL_CONTACT.address.neighborhood}</p>
              <p>{OFFICIAL_CONTACT.address.city} - {OFFICIAL_CONTACT.address.state}</p>
              <p className="text-xs text-slate-500 pt-1 font-mono">CEP: {OFFICIAL_CONTACT.address.zip}</p>
            </address>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100">
            <a
              href={OFFICIAL_CONTACT.maps.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-2xs min-h-[44px]"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver no mapa</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-xl border border-slate-200 text-sm transition-colors min-h-[44px]"
            >
              <Navigation className="w-4 h-4 text-blue-700" />
              <span>Como chegar</span>
            </a>
          </div>
        </div>

        {/* Card 2: 📞 Telefone / WhatsApp */}
        <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6 stroke-[1.8]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Atendimento Direto
            </span>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Telefone / WhatsApp
            </h2>

            <div className="text-sm text-slate-600 leading-relaxed mb-6">
              <p className="text-xl font-bold text-slate-900 tracking-tight font-mono">
                {OFFICIAL_CONTACT.phone.display}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Linha telefônica e mensagens instantâneas para atendimento e informações.
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-slate-100">
            <a
              href={OFFICIAL_CONTACT.phone.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-2xs min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={OFFICIAL_CONTACT.phone.telLink}
              className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-xl border border-slate-200 text-sm transition-colors min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-slate-700" />
              <span>Ligar</span>
            </a>
          </div>
        </div>

        {/* Card 3: 📷 Instagram */}
        <div className="bg-white rounded-3xl border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center mb-5">
              <Instagram className="w-6 h-6 stroke-[1.8]" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
              Redes Sociais
            </span>
            <h2 className="text-lg font-bold text-slate-900 mb-3">
              Instagram
            </h2>

            <div className="text-sm text-slate-600 leading-relaxed mb-6">
              <p className="text-lg font-bold text-slate-900">
                {OFFICIAL_CONTACT.instagram.handle}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                Acompanhe avisos de novos estudos bíblicos, versículos diários e programações do ministério de jovens.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a
              href={OFFICIAL_CONTACT.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E1306C] hover:bg-[#C13584] text-white font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors shadow-2xs min-h-[44px]"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

      </div>

      {/* Section: 🗺️ Encontre-nos (Mapa / Localização) */}
      <section aria-labelledby="map-section-title" className="mb-14">
        <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-1">
                MAPA E LOCALIZAÇÃO
              </span>
              <h2 id="map-section-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Encontre-nos
              </h2>
              <address className="not-italic text-sm text-slate-600 mt-1">
                {OFFICIAL_CONTACT.address.fullFormatted}
              </address>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={OFFICIAL_CONTACT.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold py-2.5 px-5 rounded-xl text-sm transition-colors shadow-xs min-h-[44px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Como chegar</span>
              </a>

              <a
                href={OFFICIAL_CONTACT.maps.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-xl border border-slate-200 text-sm transition-colors min-h-[44px]"
              >
                <MapPin className="w-4 h-4 text-blue-700" />
                <span>Ver no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Map Embed Container */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 shadow-inner bg-slate-200 relative">
            <iframe
              title="Mapa de Localização - Correndo para Deus"
              src={OFFICIAL_CONTACT.maps.embedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-xs text-slate-500 mt-4 text-center">
            Localização oficial: {OFFICIAL_CONTACT.address.street}, {OFFICIAL_CONTACT.address.neighborhood}, {OFFICIAL_CONTACT.address.city} - {OFFICIAL_CONTACT.address.state}.
          </p>
        </div>
      </section>

      {/* Message Form Area */}
      <section aria-labelledby="form-section-title" className="max-w-2xl mx-auto">
        <div className="text-center mb-6">
          <h2 id="form-section-title" className="text-xl sm:text-2xl font-bold text-slate-900">
            Envie uma mensagem
          </h2>
          <p className="text-sm text-slate-600">
            Prefere escrever? Preencha os campos abaixo.
          </p>
        </div>

        {status === 'submitted' ? (
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 stroke-[1.8]" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Formulário validado com sucesso!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Obrigado pelo seu contato, <span className="font-semibold text-slate-800">{name}</span>. Você também pode falar conosco imediatamente pelo WhatsApp no número <a href={OFFICIAL_CONTACT.phone.whatsappLink} className="text-emerald-700 font-semibold underline">{OFFICIAL_CONTACT.phone.display}</a>.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                Enviar outra mensagem
              </button>
            </div>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs space-y-5"
            noValidate
          >
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label 
                htmlFor="contact-name" 
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
              >
                Nome completo
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-3.5 pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all duration-200 focus:ring-3 focus:ring-blue-100"
                  required
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="contact-email" 
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
              >
                E-mail
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-3.5 pointer-events-none text-slate-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seuemail@exemplo.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all duration-200 focus:ring-3 focus:ring-blue-100"
                  required
                />
              </div>
            </div>

            <div>
              <label 
                htmlFor="contact-message" 
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-1.5"
              >
                Mensagem
              </label>
              <div className="relative">
                <div className="absolute left-3.5 top-3.5 pointer-events-none text-slate-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escreva sua mensagem ou pedido de oração..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm outline-none transition-all duration-200 focus:ring-3 focus:ring-blue-100 resize-none"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-sm active:scale-[0.99] text-sm sm:text-base min-h-[44px]"
              >
                <Send className="w-4 h-4" />
                <span>Enviar mensagem</span>
              </button>
            </div>
          </form>
        )}
      </section>

    </div>
  );
};
