import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { IconArrowUpRight, IconFile } from '../components/icons';
import { ACHIEVEMENTS, type Achievement } from '../data/content';

function AchievementCard({ item, delay }: { item: Achievement; delay: number }) {
  const Icon = item.icon;
  return (
    <Reveal delay={delay} className={item.featured ? 'ach-col--wide' : ''}>
      <article className={`ach-card${item.featured ? ' ach-card--wide' : ''}`}>
        <div className="ach-card__group">
          <span className="ach-card__seal">
            <Icon size={21} />
          </span>
          <div className="ach-card__info">
            <h3 className="ach-card__title">{item.title}</h3>
            <div className="ach-card__meta">
              <span>Certificate of Participation</span>
              <span className="split" aria-hidden="true" />
              <span>{item.kind}</span>
              <span className="split" aria-hidden="true" />
              <span>PDF</span>
            </div>
          </div>
        </div>

        <a
          className="ach-card__view"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the ${item.title} certificate`}
        >
          <IconFile size={15} />
          View certificate
          <IconArrowUpRight size={14} />
        </a>
      </article>
    </Reveal>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <span className="sec-tick" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="Achievements"
          title={
            <>
              Certificates that mark the <em>learning</em>
            </>
          }
          sub="A small but deliberate collection — each one a door into AI, data and engineering practice. Every certificate opens to its original PDF."
        />

        <div className="ach-grid">
          {ACHIEVEMENTS.map((item) => (
            <AchievementCard key={item.title} item={item} delay={0} />
          ))}
        </div>
      </div>
    </section>
  );
}