import React, { useState, useEffect, useMemo } from 'react';
import { STUDIES } from './data/studies';
import { Study } from './types/study';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StudyGrid } from './components/StudyGrid';
import { StudyDetails } from './components/StudyDetails';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<'inicio' | 'estudos' | 'estudo' | 'sobre'>('inicio');
  const [selectedStudyId, setSelectedStudyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Enforce 100% light theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  // Estudo selecionado atualmente
  const currentStudy = useMemo(() => {
    if (!selectedStudyId) return null;
    return STUDIES.find((s) => s.id === selectedStudyId) || null;
  }, [selectedStudyId]);

  // Estudo anterior e próximo estudo na ordem oficial
  const { prevStudy, nextStudy } = useMemo(() => {
    if (!currentStudy) return { prevStudy: undefined, nextStudy: undefined };
    const index = STUDIES.findIndex((s) => s.id === currentStudy.id);
    return {
      prevStudy: index > 0 ? STUDIES[index - 1] : undefined,
      nextStudy: index < STUDIES.length - 1 ? STUDIES[index + 1] : undefined,
    };
  }, [currentStudy]);

  // Roteamento seguro por Hash compatível com GitHub Pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');

      if (hash.startsWith('estudo/')) {
        const id = hash.replace('estudo/', '');
        const found = STUDIES.find((s) => s.id === id);
        if (found) {
          setSelectedStudyId(id);
          setCurrentTab('estudo');
          return;
        }
      }

      if (hash === 'sobre') {
        setSelectedStudyId(null);
        setCurrentTab('sobre');
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

  // Metadados dinâmicos e SEO por estudo
  useEffect(() => {
    if (currentTab === 'estudo' && currentStudy) {
      document.title = `${currentStudy.title} — Correndo para Deus`;
      updateMetaTags(
        `${currentStudy.title} — Correndo para Deus`,
        currentStudy.description || `Estudo bíblico: ${currentStudy.title}. Autor: ${currentStudy.author}.`
      );
    } else if (currentTab === 'sobre') {
      document.title = 'Sobre o Ministério — Correndo para Deus';
      updateMetaTags(
        'Sobre o Ministério — Correndo para Deus',
        'O Correndo para Deus é um ministério dedicado a ajudar pessoas, especialmente jovens, a conhecer mais a Palavra de Deus e crescer na fé por meio de estudos e conteúdos bíblicos.'
      );
    } else if (currentTab === 'estudos') {
      document.title = 'Nossos Estudos — Correndo para Deus';
      updateMetaTags(
        'Nossos Estudos — Correndo para Deus',
        'Estudos bíblicos para fortalecer a fé e aproximar você de Deus.'
      );
    } else {
      document.title = 'Correndo para Deus — Estudos para crescer na fé';
      updateMetaTags(
        'Correndo para Deus — Estudos para crescer na fé',
        'Estudos bíblicos oficiais do ministério Correndo para Deus.'
      );
    }
  }, [currentTab, currentStudy]);

  const updateMetaTags = (title: string, description: string) => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

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

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-page)] text-[var(--text-main)] transition-colors">
      
      {/* Cabeçalho */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1">
        
        {/* PÁGINA DO ESTUDO: Leitor de PDF Real + Metadados */}
        {currentTab === 'estudo' && currentStudy && (
          <StudyDetails
            study={currentStudy}
            prevStudy={prevStudy}
            nextStudy={nextStudy}
            totalStudies={STUDIES.length}
            onBack={() => handleNavigate('estudos')}
            onSelectStudy={(id) => handleNavigate('estudo', id)}
          />
        )}

        {/* PÁGINA SOBRE: Apenas texto oficial */}
        {currentTab === 'sobre' && (
          <AboutView
            onExploreStudies={() => handleNavigate('estudos')}
          />
        )}

        {/* PÁGINA INICIAL E LISTA DE ESTUDOS */}
        {(currentTab === 'inicio' || currentTab === 'estudos') && (
          <div>
            {currentTab === 'inicio' && (
              <Hero
                onExploreStudies={() => {
                  const el = document.getElementById('secao-estudos');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}

            <StudyGrid
              studies={STUDIES}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              onSelectStudy={(id) => handleNavigate('estudo', id)}
            />
          </div>
        )}

      </main>

      {/* Rodapé */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
};

export default App;
