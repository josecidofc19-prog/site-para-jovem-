import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, BookOpen, HeartHandshake, Compass, MapPin, Phone, Instagram, Users, Upload, Camera } from 'lucide-react';
import { OFFICIAL_CONTACT } from '../data/contact';

interface AboutViewProps {
  onExploreStudies: () => void;
  onContact: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onExploreStudies,
  onContact,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>('/PHOTO-2026-09-30-22-44-36.jpg');
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded / cached the group photo locally
    const cached = localStorage.getItem('cpd_official_group_photo');
    if (cached) {
      setPhotoUrl(cached);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setHasError(false);
          localStorage.setItem('cpd_official_group_photo', result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 animate-in fade-in duration-150">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2 block">
          MINISTÉRIO DE JOVENS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Nossa História
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Conheça o propósito e a essência do projeto Correndo para Deus
        </p>
      </div>

      {/* Main Core Statement Box (Exact text provided, no invented history) */}
      <div className="bg-blue-50/70 border border-blue-100 rounded-3xl p-8 sm:p-12 mb-12 text-center shadow-xs">
        <div className="w-12 h-12 rounded-2xl bg-[#13467B] text-white flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-xs">
          ✝
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-800 font-medium leading-relaxed max-w-2xl mx-auto">
          “O Correndo para Deus é um ministério dedicado a ajudar pessoas, especialmente jovens, a conhecer mais a Palavra de Deus e crescer na fé por meio de estudos e conteúdos bíblicos.”
        </p>

        <div className="mt-8 pt-6 border-t border-blue-200/60 max-w-md mx-auto text-xs sm:text-sm text-slate-600 font-medium">
          AD. Ministério Correndo para Deus
        </div>
      </div>

      {/* Real Group Photo Frame (Section 20: FOTO DO GRUPO — NOSSA HISTÓRIA) */}
      <section aria-labelledby="group-photo-heading" className="mb-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-700" />
                <h2 id="group-photo-heading" className="text-lg sm:text-xl font-bold text-slate-900">
                  Fotografia Oficial do Grupo
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-200/70 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Selecionar foto oficial</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500">
              Jovens da Assembléia de Deus — Ministério Correndo para Deus reunidos em comunhão com a camiseta YESHUA.
            </p>
          </div>

          {/* Group Photo Display Container (Portrait aspect ratio matching real photograph) */}
          <div className="relative w-full max-w-lg mx-auto bg-slate-100 flex items-center justify-center overflow-hidden border-t border-b border-slate-200 my-2 rounded-2xl shadow-inner">
            {!hasError ? (
              <img
                src={photoUrl}
                alt="Fotografia Oficial do Grupo de Jovens Correndo para Deus - Assembléia de Deus"
                className="w-full h-auto max-h-[640px] object-contain transition-opacity duration-300"
                onError={() => {
                  if (photoUrl === '/PHOTO-2026-09-30-22-44-36.jpg') {
                    setPhotoUrl('/grupo-jovens.jpg');
                  } else {
                    setHasError(true);
                  }
                }}
              />
            ) : (
              <div className="p-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-300 flex items-center justify-center text-slate-700 mx-auto shadow-2xs">
                  <Camera className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-800">
                  Fotografia Oficial da Juventude
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Clique no botão acima para carregar o arquivo <strong>PHOTO-2026-09-30-22-44-36.jpg</strong> do grupo.
                </p>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-5 bg-slate-50/80 flex items-center justify-between text-xs text-slate-500">
            <span>Juventude AD. Correndo para Deus</span>
            <span className="font-medium">Indaiatuba — SP</span>
          </div>
        </div>
      </section>

      {/* Pillars / Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Fidelidade Bíblica
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Estudos fundamentados diretamente nas Escrituras Sagradas, incentivando a leitura atenta e a reflexão da Palavra de Deus.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Foco na Juventude
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Linguagem acessível, clara e objetiva para que jovens encontrem respostas reais para os dilemas da vida cristã prática.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h2 className="text-base font-bold text-slate-900">
            Acesso Livre e Gratuito
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Todos os materiais em PDF estão abertos para leitura online ou download para uso pessoal, em pequenos grupos e igrejas.
          </p>
        </div>
      </div>

      {/* Secondary Official Contact Box */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-12">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 block">
          Endereço e Contatos Oficiais
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <a 
              href={OFFICIAL_CONTACT.maps.viewUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-900 transition-colors"
            >
              {OFFICIAL_CONTACT.address.shortFormatted}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
            <a 
              href={OFFICIAL_CONTACT.phone.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-900 transition-colors font-mono"
            >
              {OFFICIAL_CONTACT.phone.display}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Instagram className="w-4 h-4 text-rose-600 shrink-0" />
            <a 
              href={OFFICIAL_CONTACT.instagram.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-rose-900 transition-colors"
            >
              {OFFICIAL_CONTACT.instagram.handle}
            </a>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onExploreStudies}
          className="inline-flex items-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm text-sm min-h-[44px]"
        >
          <span>Acessar estudos bíblicos</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onContact}
          className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 py-3.5 rounded-full border border-slate-200 text-sm transition-colors min-h-[44px]"
        >
          <span>Entre em contato</span>
        </button>
      </div>

    </div>
  );
};
