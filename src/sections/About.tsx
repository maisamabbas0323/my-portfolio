import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { ABOUT_STORY, CURRENT_FOCUS, FOCUS_LINES, SITE } from '../data/content';

function joinTopics(topics: string[]): string {
  if (topics.length === 0) return '';
  if (topics.length === 1) return topics[0];
  return `${topics.slice(0, -1).join(', ')} and ${topics[topics.length - 1]}`;
}

export function About() {
  return (
    <section id="about" className="section section--alt">
      <span className="sec-tick" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="About"
          title={
            <>
              A working snapshot of who I am <em>and why I build</em>
            </>
          }
          sub="Not a biography page. A quick look at how I think, what I care about, and where I'm headed."
        />

        <div className="about__grid">
          <div className="about__prose">
            <Reveal>
              <p className="lede">
                <strong>{ABOUT_STORY.lead}</strong>
              </p>
            </Reveal>
            {ABOUT_STORY.body.map((paragraph, idx) => (
              <Reveal key={idx} delay={60 + idx * 50}>
                <p>{paragraph}</p>
              </Reveal>
            ))}

            <Reveal delay={100}>
              <p className="about__topics">Right now, that means {joinTopics(CURRENT_FOCUS)}.</p>
            </Reveal>
          </div>

          <div className="about__side">
            <Reveal variant="right" delay={60}>
              <aside className="field-set" aria-label="Current focus">
                <h3 className="field-set__head">Currently</h3>
                <ul className="focus-list">
                  {FOCUS_LINES.map((line) => (
                    <li key={line.t}>
                      <b className="t">{line.t}</b> {line.d}
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>

            <Reveal variant="right" delay={140}>
              <div className="about__contact">
                <span>{SITE.location}</span>
                <span aria-hidden="true">·</span>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}