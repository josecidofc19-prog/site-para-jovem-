import { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { StudyGrid } from './components/StudyGrid';
import { StudyDetails } from './components/StudyDetails';
import { PdfViewer } from './components/PdfViewer';
import { CategoriesView } from './components/CategoriesView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { STUDIES, CATEGORIES } from './data/studies';
import { CategoryType, Study } from './types/study';
import { BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedStudy, setSelectedStudy] = useState<Study | null>(null);
  const [readingStudy, setReadingStudy] = useState<Study | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('Todos');

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Synchronize hash on load and popstate
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) return;

      if (hash.startsWith('estudo-')) {
        const slug = hash.replace('estudo-', '');
        const found = STUDIES.find((s) => s.slug === slug || s.id === slug);
        if (found) {
          setSelectedStudy(found);
          return;
        }
      }

      if (hash === 'estudos') {
        setSelectedStudy(null);
        setCurrentTab('studies');
      } else if (hash === 'categorias') {
        setSelectedStudy(null);
        setCurrentTab('categories');
      } else if (hash === 'sobre' || hash === 'nossa-historia') {
        setSelectedStudy(null);
        setCurrentTab('about');
      } else if (hash === 'contato') {
        setSelectedStudy(null);
        setCurrentTab('contact');
      } else if (hash === 'inicio' || hash === '') {
        setSelectedStudy(null);
        setCurrentTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title and meta description dynamically for SEO
  useEffect(() => {
    if (selectedStudy) {
      document.title = `${selectedStudy.title} — Estudo Bíblico | Correndo para Deus`;
    } else if (currentTab === 'studies') {
      document.title = 'Estudos Bíblicos para Crescer na Fé | Correndo para Deus';
    } else if (currentTab === 'categories') {
      document.title = 'Categorias de Estudos Bíblicos | Correndo para Deus';
    } else if (currentTab === 'about') {
      document.title = 'Nossa História | Correndo para Deus';
    } else if (currentTab === 'contact') {
      document.title = 'Contato Oficial | Correndo para Deus';
    } else {
      document.title = 'Correndo para Deus — Estudos para crescer na fé';
    }
  }, [selectedStudy, currentTab]);

  const handleNavigate = (tab: string, category?: string) => {
    setCurrentTab(tab);
    setSelectedStudy(null);
    if (category) {
      setSelectedCategory(category as CategoryType);
    }
    const targetHash = tab === 'home' ? 'inicio' : tab === 'about' ? 'nossa-historia' : tab;
    window.location.hash = targetHash;
    scrollToTop();
  };

  const handleSelectStudy = (study: Study) => {
    setSelectedStudy(study);
    window.location.hash = `estudo-${study.slug}`;
    scrollToTop();
  };

  const handleBackToStudies = () => {
    setSelectedStudy(null);
    window.location.hash = 'estudos';
    scrollToTop();
  };

  const handleOpenPdf = (study: Study) => {
    setReadingStudy(study);
  };

  const handleSelectCategoryFromView = (category: CategoryType) => {
    setSelectedCategory(category);
    setCurrentTab('studies');
    window.location.hash = 'estudos';
    scrollToTop();
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('Todos');
  };

  // Filtered studies logic: search across title, description, summary, category, topics, keywords, and bible references
  const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return STUDIES.filter((study) => {
      // Category match
      if (selectedCategory !== 'Todos' && study.category !== selectedCategory) {
        return false;
      }

      // Search query match
      if (!q) return true;

      const titleMatch = study.title.toLowerCase().includes(q);
      const descMatch = study.description.toLowerCase().includes(q);
      const summaryMatch = study.summary.toLowerCase().includes(q);
      const categoryMatch = study.category.toLowerCase().includes(q);
      const topicMatch = study.topics.some((t) => t.toLowerCase().includes(q));
      const keywordMatch = study.keywords.some((k) => k.toLowerCase().includes(q));
      const bibleMatch = study.bibleReferences.some(
        (b) => b.ref.toLowerCase().includes(q) || b.verseText.toLowerCase().includes(q)
      );

      return (
        titleMatch ||
        descMatch ||
        summaryMatch ||
        categoryMatch ||
        topicMatch ||
        keywordMatch ||
        bibleMatch
      );
    });
  }, [searchQuery, selectedCategory]);

  // Compute category counts for filter buttons
  const studyCounts = useMemo(() => {
    const counts: Record<string, number> = {
      Todos: STUDIES.length,
    };
    CATEGORIES.forEach((cat) => {
      counts[cat] = STUDIES.filter((s) => s.category === cat).length;
    });
    return counts;
  }, []);

  const allCategories: CategoryType[] = ['Todos', ...CATEGORIES];

  // Prevent background scrolling when PDF modal is open
  useEffect(() => {
    if (readingStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [readingStudy]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      
      {/* Header */}
      <Header
        currentTab={selectedStudy ? 'studies' : currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* If a study is selected, show StudyDetails */}
        {selectedStudy ? (
          <StudyDetails
            study={selectedStudy}
            onBack={handleBackToStudies}
            onOpenPdf={handleOpenPdf}
            onSelectCategory={(cat) => {
              setSelectedStudy(null);
              setSelectedCategory(cat as CategoryType);
              setCurrentTab('studies');
              window.location.hash = 'estudos';
              scrollToTop();
            }}
            onSelectRelatedStudy={handleSelectStudy}
            allStudies={STUDIES}
          />
        ) : (
          <>
            {/* HOME TAB */}
            {currentTab === 'home' && (
              <>
                <Hero
                  onExploreStudies={() => {
                    const el = document.getElementById('studies-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onLearnMore={() => handleNavigate('about')}
                />

                {/* Quick Category Bar on Home */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                        TEMAS PRINCIPAIS
                      </span>
                      <h2 className="text-lg font-bold text-slate-900">
                        Categorias de estudos
                      </h2>
                    </div>
                    <button
                      onClick={() => handleNavigate('categories')}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-900 flex items-center gap-1 self-start sm:self-auto"
                    >
                      <span>Ver todas as categorias</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mt-4">
                    {CATEGORIES.map((cat) => {
                      const count = STUDIES.filter((s) => s.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setSelectedCategory(cat);
                            const el = document.getElementById('studies-section');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200/80 hover:border-blue-200 text-left transition-all group"
                        >
                          <span className="text-xs font-bold text-slate-800 group-hover:text-blue-900 block truncate">
                            {cat}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {count} {count === 1 ? 'estudo' : 'estudos'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Studies Section on Home */}
                <section
                  id="studies-section"
                  className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
                  aria-labelledby="studies-heading"
                >
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1.5 block">
                        ESTUDOS BÍBLICOS
                      </span>
                      <h2
                        id="studies-heading"
                        className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
                      >
                        Estudos disponíveis
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
                        Explore os estudos bíblicos preparados pelo ministério. Clique para ver os temas, ler o PDF online ou baixar gratuitamente.
                      </p>
                    </div>

                    {/* Search Bar aligned right on desktop */}
                    <div className="w-full md:w-80 shrink-0">
                      <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        resultCount={filteredStudies.length}
                        totalCount={STUDIES.length}
                      />
                    </div>
                  </div>

                  {/* Category Filter bar */}
                  <div className="mb-8">
                    <CategoryFilter
                      categories={allCategories}
                      selectedCategory={selectedCategory}
                      onSelectCategory={setSelectedCategory}
                      studyCounts={studyCounts}
                    />
                  </div>

                  {/* Studies Grid */}
                  <StudyGrid
                    studies={filteredStudies}
                    onSelectStudy={handleSelectStudy}
                    onResetFilters={handleResetFilters}
                  />

                  {/* Proposal brief explanation card */}
                  <div className="mt-16 bg-blue-50/60 rounded-3xl border border-blue-100 p-8 sm:p-12">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto text-lg font-bold">
                        ✝
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                        Por que Correndo para Deus?
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        O Correndo para Deus é um ministério dedicado a ajudar pessoas, especialmente jovens, a conhecer mais a Palavra de Deus e crescer na fé por meio de estudos e conteúdos bíblicos fiéis às Escrituras.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-left">
                        <div className="bg-white p-4 rounded-2xl border border-blue-100/80 shadow-2xs">
                          <BookOpen className="w-5 h-5 text-blue-700 mb-2" />
                          <h4 className="text-xs font-bold text-slate-900 mb-1">Conteúdo Fiel</h4>
                          <p className="text-xs text-slate-500">Textos fundamentados exclusivamente na Bíblia Sagrada.</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-blue-100/80 shadow-2xs">
                          <Sparkles className="w-5 h-5 text-blue-700 mb-2" />
                          <h4 className="text-xs font-bold text-slate-900 mb-1">Leitor Online</h4>
                          <p className="text-xs text-slate-500">Leia os slides diretamente no navegador pelo celular ou PC.</p>
                        </div>

                        <div className="bg-white p-4 rounded-2xl border border-blue-100/80 shadow-2xs">
                          <ShieldCheck className="w-5 h-5 text-blue-700 mb-2" />
                          <h4 className="text-xs font-bold text-slate-900 mb-1">Download Gratuito</h4>
                          <p className="text-xs text-slate-500">Baixe os PDFs completos para imprimir, estudar ou compartilhar.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to explore all studies */}
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => handleNavigate('studies')}
                      className="inline-flex items-center gap-2 bg-[#13467B] hover:bg-[#0E335A] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-sm text-sm sm:text-base min-h-[44px]"
                    >
                      <span>Ver todos os estudos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </section>
              </>
            )}

            {/* STUDIES TAB */}
            {currentTab === 'studies' && (
              <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-1.5 block">
                    BIBLIOTECA BÍBLICA
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Estudos
                  </h1>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Todos os estudos bíblicos do ministério para leitura, aprendizado e aprofundamento da fé.
                  </p>
                </div>

                {/* Search Bar centered */}
                <div className="max-w-xl mx-auto mb-6">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    resultCount={filteredStudies.length}
                    totalCount={STUDIES.length}
                  />
                </div>

                {/* Category Filters */}
                <div className="mb-8 flex justify-center">
                  <CategoryFilter
                    categories={allCategories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                    studyCounts={studyCounts}
                  />
                </div>

                {/* Studies Grid */}
                <StudyGrid
                  studies={filteredStudies}
                  onSelectStudy={handleSelectStudy}
                  onResetFilters={handleResetFilters}
                />
              </section>
            )}

            {/* CATEGORIES TAB */}
            {currentTab === 'categories' && (
              <CategoriesView
                onSelectCategory={handleSelectCategoryFromView}
                studies={STUDIES}
              />
            )}

            {/* ABOUT TAB */}
            {currentTab === 'about' && (
              <AboutView
                onExploreStudies={() => handleNavigate('studies')}
                onContact={() => handleNavigate('contact')}
              />
            )}

            {/* CONTACT TAB */}
            {currentTab === 'contact' && <ContactView />}
          </>
        )}
      </main>

      {/* Built-in PDF Viewer Modal */}
      {readingStudy && (
        <PdfViewer
          study={readingStudy}
          onClose={() => setReadingStudy(null)}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
