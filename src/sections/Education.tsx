import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { IconExternalLink } from '../components/icons';
import { EDUCATION, percentage } from '../data/content';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Education"
          title={
            <>
              A quiet path through <em>school</em>
            </>
          }
          sub="Two academic milestones that laid the foundation — one in general science, one in computer science."
        />

        <div className="timeline">
          {EDUCATION.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className="timeline__item" key={item.id}>
                <Reveal variant="scale" delay={0}>
                  <div className="timeline__node" aria-hidden="true">
                    <Icon size={19} />
                  </div>
                </Reveal>

                <Reveal delay={80 + idx * 40}>
                  <div className="edu-card">
                    <div className="edu-card__head">
                      <div>
                        <div className="stat-strip" style={{ marginBottom: 6 }}>
                          {item.stream}
                        </div>
                        <h3 className="edu-card__degree">{item.degree}</h3>
                      </div>
                      <div className="edu-card__meta">
                        <span className={`badge ${item.gradeTone === 'soft' ? 'badge--soft' : ''}`}>
                          Grade {item.grade}
                        </span>
                      </div>
                    </div>

                    <p className="edu-card__school">{item.school}</p>

                    <div className="edu-card__marks" role="list">
                      <div className="marks-cell" role="listitem">
                        <span className="marks-cell__label">Obtained</span>
                        <span className="marks-cell__value">
                          {item.marks}
                          <small> / {item.total}</small>
                        </span>
                      </div>
                      <div className="marks-cell" role="listitem">
                        <span className="marks-cell__label">Percentage</span>
                        <span className="marks-cell__value">{percentage(item.marks, item.total)}</span>
                      </div>
                      <div className="marks-cell" role="listitem">
                        <span className="marks-cell__label">Grade</span>
                        <span className="marks-cell__value">{item.grade}</span>
                      </div>
                    </div>

                    <div className="edu-card__docs">
                      {item.docs.map((doc) => (
                        <a
                          key={doc.label}
                          className="btn btn--ghost btn--small"
                          href={doc.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconExternalLink size={14} />
                          {doc.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}