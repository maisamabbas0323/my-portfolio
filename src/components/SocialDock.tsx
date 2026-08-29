import { SOCIALS } from '../data/content';
import type { CSSProperties } from 'react';

type SocialDockProps = {
  size?: number;
  label?: string;
  className?: string;
};

/**
 * Floating social cluster. Each platform gets a subtle, individual drift.
 * Links open in a new tab; mail uses a mailto: on the same tab.
 */
export function SocialDock({ size = 20, label, className = '' }: SocialDockProps) {
  return (
    <div className={`social-row ${className}`} role="group" aria-label={label ?? 'Social networks'}>
      {SOCIALS.map((social) => {
        const Icon = social.icon;
        const external = !social.url.startsWith('mailto:');
        return (
          <a
            key={social.id}
            href={social.url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="soc"
            title={social.name}
            aria-label={social.name}
            style={{ '--d': social.delay } as CSSProperties}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}