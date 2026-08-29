import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks';

type Variant = 'up' | 'left' | 'right' | 'scale';

type RevealProps = {
  children: ReactNode;
  as?: keyof HTMLElementTagNameMap;
  className?: string;
  variant?: Variant;
  delay?: number;
  style?: CSSProperties;
};

const VARIANTS: Record<Variant, string> = {
  up: '',
  left: 'reveal--left',
  right: 'reveal--right',
  scale: 'reveal--scale',
};

export function Reveal({
  children,
  className = '',
  as = 'div',
  variant = 'up',
  delay = 0,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();

  const cls = [
    'reveal',
    VARIANTS[variant],
    inView ? 'is-in' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cls}
      style={{ ...style, ['--rd' as never]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}