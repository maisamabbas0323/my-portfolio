import { Reveal } from '../components/Reveal';
import { SocialDock } from '../components/SocialDock';
import { IconArrowUpRight, IconChevronDown } from '../components/icons';
import { SITE, type SectionId } from '../data/content';
import profile from '../assets/profile.webp';

type HomeProps = {
  onNavigate: (id: SectionId) => void;
};

export function Home({ onNavigate }: HomeProps) {
  const scrollTo = (id: SectionId) => () => onNavigate(id);

  return (
    <section id="home" aria-label="Introduction">
      <div className="hero">
        <div className="container">
          <div className="hero__grid">
            <div className="hero__content">
              <Reveal>
                <p className="hero__topline">
                  <span className="dot dot--accent" aria-hidden="true" />
                  Portfolio <b>© 2026</b> — Software Engineer
                </p>
              </Reveal>

              <Reveal delay={60}>
                <h1 className="hero__name">
                  <span className="line">
                    <span className="hero__wave">Hi,</span>{' '}
                    I&apos;m Maisam
                  </span>
                  <span className="line">
                    <em>Abbas.</em>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p className="hero__role">Software Engineer &amp; Builder</p>
              </Reveal>

              <Reveal delay={160}>
                <p className="hero__lede">
                  I build <strong>intelligent systems</strong>, developer tools and modern web
                  platforms — working at the intersection of <strong>software engineering</strong>,
                  cloud systems and practical <strong>AI applications</strong>.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="hero__cta">
                  <button type="button" className="btn btn--solid" onClick={scrollTo('works')}>
                    See my work
                    <IconArrowUpRight size={16} />
                  </button>
                  <a className="btn btn--ghost" href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer">
                    View resume
                  </a>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <p className="hero__facts">
                  Open to opportunities — based in {SITE.location}.
                </p>
              </Reveal>

              <Reveal delay={340}>
                <SocialDock />
              </Reveal>
            </div>

            <div className="hero__visual">
              <Reveal variant="scale" delay={180}>
                <div className="portrait">
                  <div className="portrait__halo" aria-hidden="true" />
                  <div className="portrait__disc" aria-hidden="true" />
                  <div className="portrait__frame">
                    <img src={profile} alt="Portrait of Maisam Abbas" width="1254" height="1254" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Reveal delay={200}>
          <button
            type="button"
            className="scroll-hint"
            onClick={scrollTo('about')}
            aria-label="Continue to About"
          >
            <IconChevronDown size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}