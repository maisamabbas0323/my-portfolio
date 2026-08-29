import { NAV_ITEMS, type SectionId } from '../data/content';

type NavRibbonProps = {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
};

export function NavRibbon({ active, onNavigate }: NavRibbonProps) {
  const goto = (id: SectionId) => (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <>
      {/* desktop — floating left ribbon */}
      <nav className="ribbon" aria-label="Primary">
        <div className="ribbon__rail">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ribbon__item${isActive ? ' ribbon__item--active' : ''}`}
                onClick={goto(item.id)}
                aria-current={isActive ? 'true' : undefined}
                aria-label={item.label}
              >
                <Icon size={20} />
                <span className="ribbon__tip" role="tooltip">
                  {item.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* mobile/tablet — floating bottom navigation */}
      <nav className="bottomnav" aria-label="Primary compact">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === active;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`bottomnav__item${isActive ? ' bottomnav__item--active' : ''}`}
              onClick={goto(item.id)}
              aria-current={isActive ? 'true' : undefined}
              aria-label={item.label}
              title={item.label}
            >
              <Icon size={20} />
              <span className="bottomnav__label">
                {item.id === 'home' ? 'Home' : item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </>
  );
}