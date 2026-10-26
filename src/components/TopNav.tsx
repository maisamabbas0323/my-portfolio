import { useEffect, useState } from 'react';
import { NAV_ITEMS, type SectionId } from '../data/content';
import { MenuIcon, CloseIcon } from './icons';

type TopNavProps = {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function TopNav({ active, onNavigate }: TopNavProps) {
  /* scrolled state — adds a subtle border/shadow once the page moves */
  const [scrolled, setScrolled] = useState(false);
  /* mobile dropdown open state */
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* close the mobile menu when the active section changes, and on Escape */
  useEffect(() => {
    setMenuOpen(false);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navigate = (id: SectionId) => (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`topnav${scrolled ? ' topnav--scrolled' : ''}${menuOpen ? ' topnav--menu-open' : ''}`}
      aria-label="Primary"
    >
      <div className="container topnav__inner">
        <a
          href="#home"
          className="topnav__brand"
          onClick={navigate('home')}
          aria-label="Go to home"
        >
          MA
        </a>
        <nav className="topnav__links" aria-label="Sections">
          {NAV_ITEMS.map((item) => {
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`topnav__link${isActive ? ' topnav__link--active' : ''}`}
                onClick={navigate(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
        {/* mobile menu toggle — only visible via CSS on small screens */}
        <button
          type="button"
          className="topnav__menu-btn"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* mobile dropdown menu */}
      <nav
        id="mobile-menu"
        className="topnav__mobile"
        aria-label="Sections"
        hidden={!menuOpen}
      >
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === active;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`topnav__mobile-link${isActive ? ' topnav__mobile-link--active' : ''}`}
              onClick={navigate(item.id)}
              aria-current={isActive ? 'true' : undefined}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
