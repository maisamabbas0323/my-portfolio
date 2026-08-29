import { useCallback } from 'react';
import { NavRibbon } from './components/NavRibbon';
import { Footer } from './components/Footer';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Education } from './sections/Education';
import { Achievements } from './sections/Achievements';
import { Works } from './sections/Works';
import { Skills } from './sections/Skills';
import { Resume } from './sections/Resume';
import { useScrollSpy } from './hooks';
import type { SectionId } from './data/content';

const SECTION_IDS: readonly SectionId[] = [
  'home',
  'about',
  'education',
  'achievements',
  'works',
  'skills',
  'resume',
];

export default function App() {
  const active = useScrollSpy(SECTION_IDS);

  const navigate = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    el.scrollIntoView({
      behavior: reduce.matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <div className="shell">
      <NavRibbon active={active} onNavigate={navigate} />

      <div className="shell__inner">
        <main>
          <Home onNavigate={navigate} />
          <About />
          <Education />
          <Achievements />
          <Works />
          <Skills />
          <Resume />
        </main>
        <Footer onNavigate={navigate} />
      </div>
    </div>
  );
}