import React from 'react';
import { 
  BookOpen, 
  Crown, 
  Flame, 
  Heart, 
  Leaf, 
  Compass, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CATEGORIAS, ESTUDOS } from '../data/estudos';

interface CategoriasViewProps {
  onSelectCategory: (categoria: string) => void;
}

export const CategoriasView: React.FC<CategoriasViewProps> = ({ onSelectCategory }) => {
  const getCategoryDetails = (cat: string) => {
    switch (cat) {
      case 'Bíblia':
        return {
          icon: <BookOpen className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Estudos bíblicos detalhados e análise de textos das Escrituras Sagradas.',
        };
      case 'Fé':
        return {
          icon: <Sparkles className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Crescimento espiritual, certeza da salvação e firmeza doutrinária.',
        };
      case 'Oração':
        return {
          icon: <Crown className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Adoração genuína, comunhão íntima e diálogo diário com Deus.',
        };
      case 'Vida cristã':
        return {
          icon: <Compass className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Prática cristã diária, guarda do coração, decisões e integridade moral.',
        };
      case 'Jovens':
        return {
          icon: <Heart className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Temas contemporâneos, vocação, relacionamentos e desafios da juventude.',
        };
      case 'Espírito Santo':
        return {
          icon: <Flame className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Batismo no Espírito, os 9 dons espirituais e discernimento bíblico.',
        };
      default:
        return {
          icon: <Leaf className="w-6 h-6 text-[var(--primary)]" />,
          desc: 'Todos os estudos bíblicos do ministério Correndo para Deus.',
        };
    }
  };

  const categoriesToShow = CATEGORIAS.filter((c) => c !== 'Todos');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-2 block">
          TEMAS E ASSUNTOS
        </span>
        <h1 className="title-section font-extrabold text-[var(--primary-dark)] tracking-tight mb-3">
          Categorias de Estudos
        </h1>
        <p className="text-[var(--text-muted)] text-sm sm:text-base">
          Escolha um tema para filtrar os conteúdos e aprofundar sua caminhada cristã
        </p>
      </div>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesToShow.map((cat) => {
          const count = ESTUDOS.filter((e) => e.categoria.toLowerCase() === cat.toLowerCase()).length;
          const details = getCategoryDetails(cat);

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className="text-left bg-[var(--bg-page)] rounded-[14px] border border-[var(--border)] hover:border-[var(--primary)] p-6 card-shadow transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-hero)] border border-[var(--border)] flex items-center justify-center mb-4 group-hover:bg-[var(--primary-light)] transition-colors">
                  {details.icon}
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-[var(--primary-dark)] group-hover:text-[var(--primary)] transition-colors">
                    {cat}
                  </h3>
                  <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-light)] px-2.5 py-0.5 rounded-full">
                    {count} {count === 1 ? 'estudo' : 'estudos'}
                  </span>
                </div>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                  {details.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs sm:text-sm font-bold text-[var(--primary)]">
                <span>Explorar categoria</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
