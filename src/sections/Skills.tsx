import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { SKILL_CATEGORIES } from '../data/content';

export function Skills() {
  const [activeId, setActiveId] = useState(SKILL_CATEGORIES[0].id);
  const active = SKILL_CATEGORIES.find((c) => c.id === activeId) ?? SKILL_CATEGORIES[0];
  const ActiveIcon = active.icon;

  return (
    <section id="skills" className="section section--alt">
      <span className="sec-tick" aria-hidden="true" />
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title={
            <>
              A working <em>toolkit</em>, by discipline
            </>
          }
          sub="Not a list of percentages — a map of what I reach for, grouped by the kind of work where each skill earns its keep."
        />

        <div className="skills__grid">
          <div className="skills__cats" role="tablist" aria-label="Skill disciplines" aria-orientation="vertical">
            {SKILL_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  className={`skills__cat${isActive ? ' skills__cat--active' : ''}`}
                  onClick={() => setActiveId(cat.id)}
                >
                  <span className="glyph">
                    <Icon size={17} />
                  </span>
                  <span className="skills__cat-label">{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div
            className="skills__panel"
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            key={active.id}
          >
            <span className="skills__title">
              <span className="glyph">
                <ActiveIcon size={15} />
              </span>
              {active.label}
            </span>

            <div className="skills__nodes">
              {active.nodes.map((node, idx) => {
                const NodeIcon = node.icon;
                return (
                  <Reveal key={node.name} delay={idx * 45}>
                    <div className="skill-node">
                      <span className="tile">
                        <NodeIcon size={17} />
                      </span>
                      <div>
                        <span className="skill-node__name">{node.name}</span>
                        <span className="skill-node__tag">{node.tag}</span>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}