import React from 'react';
import { 
  CATEGORIES, 
  CATEGORY_DESCRIPTIONS 
} from '../data/studies';
import { CategoryType, Study } from '../types/study';
import { 
  Book, 
  Shield, 
  Heart, 
  Compass, 
  Sparkles, 
  Users, 
  Flame, 
  Globe2, 
  ArrowRight 
} from 'lucide-react';

interface CategoriesViewProps {
  onSelectCategory: (category: CategoryType) => void;
  studies: Study[];
}

export const CategoriesView: React.FC<CategoriesViewProps> = ({
  onSelectCategory,
  studies,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Adoração':
        return <Heart className="w-6 h-6 text-blue-700" />;
      case 'Doutrina':
        return <Compass className="w-6 h-6 text-blue-700" />;
      case 'Espírito Santo':
        return <Flame className="w-6 h-6 text-blue-700" />;
      case 'Vida cristã':
        return <Shield className="w-6 h-6 text-blue-700" />;
      case 'Bíblia':
        return <Book className="w-6 h-6 text-blue-700" />;
      default:
        return <Book className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      
      {/* Page Title */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-2 block">
          TEMAS E TEMÁTICAS
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Categorias de Estudos
        </h1>
        <p className="text-slate-600 text-base sm:text-lg">
          Navegue pelos principais eixos temáticos preparados para edificar a fé e o conhecimento bíblico.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => {
          const count = studies.filter((s) => s.category === category).length;
          const description = CATEGORY_DESCRIPTIONS[category];

          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className="group text-left bg-white hover:bg-slate-50/80 rounded-2xl border border-slate-200/90 hover:border-blue-300 p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getCategoryIcon(category)}
                </div>

                <div className="flex items-center justify-between gap-2 mb-2">
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {category}
                  </h2>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors">
                    {count} {count === 1 ? 'estudo' : 'estudos'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                  {description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:text-blue-900">
                <span>Ver estudos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
