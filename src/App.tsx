import { useCallback, useRef, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ProjectSheet from './components/ProjectSheet';
import Work from './components/Work';
import { useScrolledPast } from './hooks';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sheetId, setSheetId] = useState<string | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  // 첫 화면 60% 를 지나면 떠 있는 메뉴 버튼 표시
  const fabShown = useScrolledPast(useCallback(() => window.innerHeight * 0.6, []));

  const openMenu = (trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setMenuOpen(true);
  };
  const closeMenu = useCallback((after?: () => void) => {
    setMenuOpen(false);
    setTimeout(() => (after ? after() : lastTrigger.current?.focus({ preventScroll: true })), 450);
  }, []);

  const openSheet = (id: string, trigger: HTMLElement) => {
    lastTrigger.current = trigger;
    setSheetId(id);
  };
  const closeSheet = useCallback(() => {
    setSheetId(null);
    setTimeout(() => lastTrigger.current?.focus({ preventScroll: true }), 600);
  }, []);

  return (
    <>
      <a className="skip-link" href="#about">본문 바로가기</a>
      <Hero menuOpen={menuOpen} onOpenMenu={openMenu} />
      <main>
        <About />
        <Experience />
        <Work onOpen={openSheet} />
        <Contact />
      </main>

      <button
        className={`menu-btn fab${fabShown ? ' show' : ''}`}
        type="button"
        aria-label="메뉴 열기"
        aria-controls="menu"
        aria-expanded={menuOpen}
        tabIndex={fabShown ? 0 : -1}
        onClick={(e) => openMenu(e.currentTarget)}
      >
        <span />
      </button>
      <Menu open={menuOpen} onClose={closeMenu} />
      <ProjectSheet id={sheetId} onChange={setSheetId} onClose={closeSheet} />
    </>
  );
}
