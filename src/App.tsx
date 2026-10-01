import React, { useState, useEffect, useMemo } from 'react';
import { ESTUDOS, Estudo } from './data/estudos';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StudyGrid } from './components/StudyGrid';
import { StudyDetailView } from './components/StudyDetailView';
import { CategoriasView } from './components/CategoriasView';
import { SobreView } from './components/SobreView';
import { ContatoView } from './components/ContatoView';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'inicio' | 'estudos' | 'categorias' | 'estudo' | 'sobre' | 'contato'>('inicio');
  const [selectedStudyId, setSelectedStudyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Enforce 100% light mode (no dark class)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Sort studies by date or identifier
  const sortedStudies = useMemo(() => {
    return [...ESTUDOS];
  }, []);

  // Current selected study
  const currentEstudo = useMemo(() => {
    if (!selectedStudyId) return null;
    return ESTUDOS.find((e) => e.id === selectedStudyId) || null;
  }, [selectedStudyId]);

  // Previous and Next study
  const { estudoAnterior, proximoEstudo } = useMemo(() => {
    if (!currentEstudo) return { estudoAnterior: undefined, proximoEstudo: undefined };
    const index = sortedStudies.findIndex((e) => e.id === currentEstudo.id);
    return {
      estudoAnterior: index > 0 ? sortedStudies[index - 1] : undefined,
      proximoEstudo: index < sortedStudies.length - 1 ? sortedStudies[index + 1] : undefined,
    };
  }, [currentEstudo, sortedStudies]);

  // URL Hash Routing synchronization
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      
      if (hash.startsWith('estudo/')) {
        const id = hash.replace('estudo/', '');
        const found = ESTUDOS.find((e) => e.id === id);
        if (found) {
          setSelectedStudyId(id);
          setCurrentTab('estudo');
          return;
        }
      }

      if (hash === 'sobre') {
        setSelectedStudyId(null);
        setCurrentTab('sobre');
      } else if (hash === 'contato') {
        setSelectedStudyId(null);
        setCurrentTab('contato');
      } else if (hash === 'categorias') {
        setSelectedStudyId(null);
        setCurrentTab('categorias');
      } else if (hash === 'estudos') {
        setSelectedStudyId(null);
        setCurrentTab('estudos');
      } else {
        setSelectedStudyId(null);
        setCurrentTab('inicio');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Sync document title and meta description dynamically for SEO
  useEffect(() => {
    if (currentTab === 'estudo' && currentEstudo) {
      document.title = `${currentEstudo.titulo} — Correndo para Deus`;
      updateMetaDescription(`${currentEstudo.titulo}: ${currentEstudo.descricao}`);
    } else if (currentTab === 'sobre') {
      document.title = 'Sobre o Projeto — Correndo para Deus';
      updateMetaDescription('Conheça o ministério de jovens AD. Ministério Correndo para Deus e nossos princípios bíblicos.');
    } else if (currentTab === 'contato') {
      document.title = 'Contato e Localização — Correndo para Deus';
      updateMetaDescription('Canais oficiais de atendimento, localização da igreja em Indaiatuba/SP, WhatsApp e Instagram.');
    } else if (currentTab === 'categorias') {
      document.title = 'Categorias de Estudos Bíblicos — Correndo para Deus';
      updateMetaDescription('Navegue pelos estudos bíblicos categorizados por temas: Fé, Oração, Bíblia, Vida Cristã e Espírito Santo.');
    } else if (currentTab === 'estudos') {
      document.title = 'Nossos Estudos — Correndo para Deus';
      updateMetaDescription('Conteúdos bíblicos para conhecer a Palavra de Deus, fortalecer a fé e crescer no relacionamento com Cristo.');
    } else {
      document.title = 'Correndo para Deus — Estudos para crescer na fé';
      updateMetaDescription('Conteúdos bíblicos para conhecer a Palavra de Deus, fortalecer a fé e crescer no relacionamento com Cristo.');
    }
  }, [currentTab, currentEstudo]);

  const updateMetaDescription = (text: string) => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', text);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', text);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);
  };

  const handleNavigate = (tab: string, studyId?: string) => {
    if (tab === 'estudo' && studyId) {
      setSelectedStudyId(studyId);
      setCurrentTab('estudo');
      window.location.hash = `#/estudo/${studyId}`;
    } else if (tab === 'sobre') {
      setSelectedStudyId(null);
      setCurrentTab('sobre');
      window.location.hash = '#/sobre';
    } else if (tab === 'contato') {
      setSelectedStudyId(null);
      setCurrentTab('contato');
      window.location.hash = '#/contato';
    } else if (tab === 'categorias') {
      setSelectedStudyId(null);
      setCurrentTab('categorias');
      window.location.hash = '#/categorias';
    } else if (tab === 'estudos') {
      setSelectedStudyId(null);
      setCurrentTab('estudos');
      window.location.hash = '#/estudos';
    } else {
      setSelectedStudyId(null);
      setCurrentTab('inicio');
      window.location.hash = '#/inicio';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategoryFromCategoriesView = (category: string) => {
    setSelectedCategory(category);
    handleNavigate('estudos');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-main)] transition-colors">
      
      {/* 1. Header (Fundo branco limpo, cruz fina, marca, links, CTA) */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW: STUDY READING & PDF VIEWER */}
        {currentTab === 'estudo' && currentEstudo && (
          <StudyDetailView
            estudo={currentEstudo}
            estudoAnterior={estudoAnterior}
            proximoEstudo={proximoEstudo}
            totalEstudos={sortedStudies.length}
            onNavigateHome={() => handleNavigate('estudos')}
            onSelectEstudo={(id) => handleNavigate('estudo', id)}
          />
        )}

        {/* VIEW: CATEGORIES */}
        {currentTab === 'categorias' && (
          <CategoriasView
            onSelectCategory={handleSelectCategoryFromCategoriesView}
          />
        )}

        {/* VIEW: ABOUT */}
        {currentTab === 'sobre' && (
          <SobreView
            onExploreStudies={() => handleNavigate('estudos')}
          />
        )}

        {/* VIEW: CONTACT */}
        {currentTab === 'contato' && (
          <ContatoView />
        )}

        {/* VIEW: HOME & STUDIES GRID */}
        {(currentTab === 'inicio' || currentTab === 'estudos') && (
          <div>
            
            {/* 2. Hero (Fundo azul muito claro, conforme a referência visual) */}
            {currentTab === 'inicio' && (
              <Hero
                onExploreStudies={() => {
                  const el = document.getElementById('secao-estudos');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}

            {/* 3. Área de Estudos (StudyGrid & SearchBar) */}
            <StudyGrid
              estudos={sortedStudies}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onSelectEstudo={(id) => handleNavigate('estudo', id)}
            />

          </div>
        )}

      </main>

      {/* 7. Contato & Rodapé Azul Escuro (#0F2B5B) */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
};

export default App;
