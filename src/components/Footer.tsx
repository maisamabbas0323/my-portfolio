import { Reveal } from './Reveal';
import {
  IconArrowUp,
  IconGitHub,
  IconMail,
  IconLinkedIn,
  IconX,
} from './icons';
import { NAV_ITEMS, SITE, type SectionId } from '../data/content';

type FooterProps = {
  onNavigate: (id: SectionId) => void;
};

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Reveal>
              <div className="footer__mono">
                <span className="footer__logo" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M9 22 16 11l7 11"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 17.5h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span>
                  <strong className="mono" style={{ color: 'var(--text-1)', fontSize: 13.5 }}>
                    Maisam Abbas
                  </strong>
                  <span
                    className="mono"
                    style={{ display: 'block', color: 'var(--text-3)', fontSize: 11.5 }}
                  >
                    Software Engineer
                  </span>
                </span>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <p>
                Building intelligent systems, developer tools, and the occasional experiment that
                quietly turns into something useful.
              </p>
            </Reveal>
          </div>

          <nav className="footer__col" aria-label="Footer navigation">
            <h4>Jump to</h4>
            <div className="footer__links">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => onNavigate(item.id)}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="footer__col">
            <h4>Elsewhere</h4>
            <div className="footer__social">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                aria-label="GitHub"
              >
                <IconGitHub size={18} />
              </a>
              <a
                href="https://linkedin.com/in/maisam-abbas-a230503a6"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <IconLinkedIn size={17} />
              </a>
              <a href="http://x.com/maisamabbas0323" target="_blank" rel="noopener noreferrer" title="X" aria-label="X">
                <IconX size={16} />
              </a>
              <a href={`mailto:${SITE.email}`} title="Email" aria-label="Email">
                <IconMail size={18} />
              </a>
            </div>
            <a
              className="btn btn--ghost btn--small"
              href="#home"
              onClick={() => onNavigate('home')}
            >
              Back to top
              <IconArrowUp size={14} />
            </a>
          </div>
        </div>

        <div className="footer__colophon">
          <span className="rule" aria-hidden="true" />
          <span className="footer__diamond" aria-hidden="true" />
          <span>
            © {year} {SITE.name} — designed &amp; built with intent
          </span>
          <span className="rule rule--r" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}