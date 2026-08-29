import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { IconArrowUpRight, IconCheck } from '../components/icons';
import { SITE } from '../data/content';

export function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Resume"
          title={
            <>
              The one-page <em>story</em>
            </>
          }
          sub="My actual résumé — no placeholder, no reconstruction. One real document, kept current."
        />

        <div className="resume__panel">
          <Reveal>
            <h3>One page, no filler.</h3>
          </Reveal>
          <Reveal delay={60}>
            <p>
              {SITE.name} — software engineer by title, builder by habit, based in{' '}
              {SITE.location}. The document carries my real background in software
              engineering, AI applications, and the fundamentals underneath, and it&apos;s
              kept current alongside this portfolio.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="resume__list">
              <li>
                <IconCheck size={14} />
                Accurate, current, version-controlled
              </li>
              <li>
                <IconCheck size={14} />
                A single page, written to be read quickly
              </li>
              <li>
                <IconCheck size={14} />
                Opens safely in a new tab
              </li>
            </ul>
          </Reveal>
          <Reveal delay={180}>
            <div className="resume__actions">
              <a
                className="btn btn--solid"
                href={SITE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume
                <IconArrowUpRight size={15} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="resume__note">PDF · one page · opens in a new tab</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="resume__meta">
              <span>{SITE.location}</span>
              <span aria-hidden="true">·</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <span aria-hidden="true">·</span>
              <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                {SITE.githubUser}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}