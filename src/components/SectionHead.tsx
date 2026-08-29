import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export type SectionHeadProps = {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
};

export function SectionHead({ eyebrow, title, sub }: SectionHeadProps) {
  return (
    <header className="section__head">
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={60}>
        <h2 className="section__title">{title}</h2>
      </Reveal>
      {sub ? (
        <Reveal delay={120}>
          <p className="section__sub">{sub}</p>
        </Reveal>
      ) : null}
    </header>
  );
}