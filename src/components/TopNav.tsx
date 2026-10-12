import { NAV_ITEMS, type SectionId } from '../data/content';

type TopNavProps = {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function TopNav({ active, onNavigate }: TopNavProps) {
  const goto = (id: SectionId) => (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <header className="topnav" aria-label="Primary">
      <div className="container topnav__inner">
        <a
          href="#home"
          className="topnav__brand"
          onClick={goto('home')}
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
                onClick={goto(item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
