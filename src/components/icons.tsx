import type { ReactElement, SVGProps } from 'react';

export type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

type SvgProps = SVGProps<SVGSVGElement> & IconProps;

function Svg({ size = 20, className, strokeWidth = 1.6, children, ...rest }: SvgProps): ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconHome = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 10.6 12 3l9 7.6" />
    <path d="M5.2 9.2V21h13.6V9.2" />
    <path d="M9.5 21v-6h5v6" />
  </Svg>
);

export const IconAbout = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="7.5" r="3.6" />
    <path d="M4.5 20.5c.6-3.8 3.6-5.7 7.5-5.7s6.9 1.9 7.5 5.7" />
    <path d="M12 11.2v3" />
  </Svg>
);

export const IconGradCap = (p: IconProps) => (
  <Svg {...p}>
    <path d="m2.5 9.5 9.5-4.8 9.5 4.8-9.5 4.8-9.5-4.8Z" />
    <path d="M6.2 11.5v4.2c0 1.3 2.6 3.1 5.8 3.1s5.8-1.8 5.8-3.1v-4.2" />
    <path d="m22 9.5v5.5" />
  </Svg>
);

export const IconAward = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="8.6" r="5.6" />
    <path d="m8.6 13.5-1.7 7 5.1-2.6 5.1 2.6-1.7-7" />
  </Svg>
);

export const IconFolder = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 7.4A2.4 2.4 0 0 1 5.4 5h3.4l1.9 2.4h7.9A2.4 2.4 0 0 1 21 9.8v7.8A2.4 2.4 0 0 1 18.6 20H5.4A2.4 2.4 0 0 1 3 17.6V7.4Z" />
    <path d="M3 10.4h18" />
  </Svg>
);

export const IconDiamond = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.8 3h12.4L23 10 12 21 1 10l4.8-7Z" />
    <path d="m1.8 10h20.4M12 3 8.6 10 12 21l3.4-11L12 3Z" />
  </Svg>
);

export const IconResumeDoc = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 2.8h6.5l4.5 4.5V21H7V2.8Z" />
    <path d="M13.5 2.8v4.5H18" />
    <path d="M9.5 13h6M9.5 17h6" />
  </Svg>
);

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Svg>
);

export const IconExternal = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.5 4.5H19v4.5" />
    <path d="m19 4.5-9 9" />
    <path d="M19 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 18V7A1.5 1.5 0 0 1 6.5 5.5H11" />
  </Svg>
);

export const IconArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4.5 12h15" />
    <path d="m13 6.5 5.5 5.5-5.5 5.5" />
  </Svg>
);

export const IconArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M9 7h8v8" />
  </Svg>
);

export const IconArrowUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </Svg>
);

export const IconChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />
  </Svg>
);

export const IconExternalLink = (p: IconProps) => <IconExternal {...p} />;

export const IconFile = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 2.8h6.5l4.5 4.5V21H7V2.8Z" />
    <path d="M13.5 2.8v4.5H18" />
  </Svg>
);

export const IconSearch = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4.4-4.4" />
  </Svg>
);

export const IconGitBranch = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="5.5" r="2.5" />
    <circle cx="6" cy="18.5" r="2.5" />
    <circle cx="18" cy="7" r="2.5" />
    <path d="M6 8v8.5" />
    <path d="M18 9.5c0 3.2-4.5 2.5-7.5 4.2a4.3 4.3 0 0 0-2.6 3" />
  </Svg>
);

export const IconStar = (p: IconProps) => (
  <Svg {...p}>
    <path d="m12 2.8 2.9 5.9 6.5.95-4.7 4.6 1.1 6.5-5.8-3.05-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95L12 2.8Z" />
  </Svg>
);

export const IconFork = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="5" r="2.5" />
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="12" r="2.5" />
    <path d="M6 7.5v9.5" />
    <path d="M6 7.5c0-1 4.5-1.5 6.5.8.8.9 2.9 3.2 3.5 3.2" />
  </Svg>
);

export const IconClock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2.2" />
  </Svg>
);

export const IconCalendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </Svg>
);

export const IconMapPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21.2s-6.8-5-6.8-10.7a6.8 6.8 0 0 1 13.6 0c0 5.6-6.8 10.7-6.8 10.7Z" />
    <circle cx="12" cy="10.2" r="2.6" />
  </Svg>
);

export const IconSpark = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3.5v17M3.5 12h17" />
    <path d="M8.2 8.2 15.8 15.8M15.8 8.2 8.2 15.8" />
  </Svg>
);

export const IconTerminal = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 7.5 5 4.5-5 4.5" />
    <path d="M11.5 16.5h8" />
  </Svg>
);

export const IconCode = (p: IconProps) => (
  <Svg {...p}>
    <path d="m8.2 7.5-4.7 4.5 4.7 4.5" />
    <path d="m15.8 7.5 4.7 4.5-4.7 4.5" />
  </Svg>
);

export const IconBraces = (p: IconProps) => (
  <Svg {...p}>
    <path d="M8.5 3C6.3 3 6.5 5 6.5 6.8S6.3 10 4.5 10c1.8 0 2 1.8 2 3.2S6.3 13.2 6.3 15v1.2C6.3 18.4 5.5 21 8.5 21" />
  </Svg>
);

export const IconBrackets = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.5 3.5H9A2 2 0 0 0 7 5.5V8a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5v2.5a2 2 0 0 0 2 2h1.5" />
  </Svg>
);

export const IconCpu = (p: IconProps) => (
  <Svg {...p}>
    <rect x="6" y="6" width="12" height="12" rx="1.8" />
    <rect x="9.6" y="9.6" width="4.8" height="4.8" rx="1" />
    <path d="M9 2.8v3.2M15 2.8v3.2M15 18v3.2M9 18v3.2M2.8 9h3.2M2.8 15h3.2M18 9h3.2M18 15h3.2" />
  </Svg>
);

export const IconChip = (p: IconProps) => (
  <Svg {...p}>
    <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
    <rect x="10" y="10" width="4" height="4" rx="1" />
    <path d="M9 2.5V6.5M15 2.5V6.5M15 17.5v4M9 17.5v4M2.5 9h4M2.5 15h4M17.5 9h4M17.5 15h4" />
  </Svg>
);

export const IconAtom = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="1.6" />
    <ellipse cx="12" cy="12" rx="8.5" ry="3.4" />
    <ellipse cx="12" cy="12" rx="8.5" ry="3.4" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="8.5" ry="3.4" transform="rotate(120 12 12)" />
  </Svg>
);

export const IconWind = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 8h12.5a3 3 0 1 0-3-3" />
    <path d="M3 12h16a3 3 0 1 1-3 3" />
    <path d="M3 16h7.5a2.5 2.5 0 1 1-2.5 2.5" />
  </Svg>
);

export const IconGlobe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17" />
    <path d="M12 3.5a13.5 13.5 0 0 1 0 17 13.5 13.5 0 0 1 0-17Z" />
  </Svg>
);

export const IconHexagon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 20 7v10l-8 4.2L4 17V7l8-4.2ZM4.2 7 12 11.2 19.8 7M12 11.2V21" />
  </Svg>
);

export const IconDatabase = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
    <path d="M4.5 5.5v13c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13" />
    <path d="M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8" />
  </Svg>
);

export const IconLayers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 21.5 8 12 13.2 2.5 8 12 2.8Z" />
    <path d="m4 12.5 8 4.4 8-4.4" />
    <path d="m4 16.5 8 4.4 8-4.4" />
  </Svg>
);

export const IconServer = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="7" rx="2" />
    <rect x="3.5" y="13.5" width="17" height="7" rx="2" />
    <path d="M7 7h.01M7 17h.01M11 7h.01M11 17h.01" />
  </Svg>
);

export const IconShield = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 2.8 19 5.4v5.3c0 4.4-3 7.2-7 9.5-4-2.3-7-5.1-7-9.5V5.4l7-2.6Z" />
    <path d="m9 11.5 2.2 2.2 3.8-4" />
  </Svg>
);

export const IconLock = (p: IconProps) => (
  <Svg {...p}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    <path d="M12 14v3" />
  </Svg>
);

export const IconKey = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="8" cy="15.5" r="4.3" />
    <path d="m11 13 8.5-8.5M17.5 6.5 21 10M15 9l2.5 2.5" />
  </Svg>
);

export const IconLightbulb = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9 17.5h6M9.6 21h4.8" />
    <path d="M12 3.8a6 6 0 0 0-3.2 11c.1-1.2-.2-2.1 1.1-3.6.9-1 1.9-2.6 2.1-4.2" />
  </Svg>
);

export const IconNeural = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="5" r="2.4" />
    <circle cx="4.6" cy="17" r="2.4" />
    <circle cx="19.4" cy="17" r="2.4" />
    <path d="M12 7.4v3.4M6.4 15.6 10.6 12M17.6 15.6 13.4 12M6.3 16.2c.5-3 2.8-5 5.7-5.4" />
  </Svg>
);

export const IconBot = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4.5" y="8" width="15" height="10.5" rx="2.5" />
    <path d="M9.5 8V5.5H14.5V8M12 3.5V5.5" />
    <path d="M9 13.5h.01M15 13.5h.01" />
  </Svg>
);

export const IconPuzzle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.6 3.8A2 2 0 0 1 13 5.6V8h4.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2H13v4.5a2 2 0 0 1-2 2 2 2 0 0 1-2-2V12H4.5a2 2 0 0 1-2-2 2 2 0 0 1 2-2H9.6V5.6a2 2 0 0 1 0-1.8Z" />
  </Svg>
);

export const IconCompass = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="m16.4 7.6-2.1 6.7-6.7 2.1 2.1-6.7 6.7-2.1Z" />
  </Svg>
);

export const IconFlag = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5.5 21V4.2" />
    <path d="M5.5 4.5h12.8l-2.6 4 2.6 4H5.5" />
  </Svg>
);

export const IconUsers = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3.4" />
    <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.3a3.4 3.4 0 0 1 0 6.2" />
    <path d="M16.5 14.6a6 6 0 0 1 4 5.4" />
  </Svg>
);

export const IconKanban = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 3.5h17" />
    <rect x="4.2" y="7" width="4.6" height="13.2" rx="1" />
    <rect x="9.7" y="7" width="4.6" height="9" rx="1" />
    <rect x="15.2" y="7" width="4.6" height="4.5" rx="1" />
  </Svg>
);

export const IconMessage = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20.5 5.6a2.1 2.1 0 0 0-2.1-2.1H5.6a2.1 2.1 0 0 0-2.1 2.1v9.8a2.1 2.1 0 0 0 2.1 2.1h2.4v2.8l4-2.8h6.4a2.1 2.1 0 0 0 2.1-2.1V5.6Z" />
    <path d="M12 8.2V11M12 13.4h.01" />
  </Svg>
);

export const IconQuote = (p: IconProps) => (
  <Svg {...p}>
    <path d="M10.5 6.5H6a2 2 0 0 0-2 2v4.5h5V17H4.5" />
    <path d="M20.5 6.5H16a2 2 0 0 0-2 2v4.5h5V17H15" />
  </Svg>
);

export const IconSmartphone = (p: IconProps) => (
  <Svg {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
    <path d="M10.5 18.5h3" />
  </Svg>
);

export const IconSliders = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20.5v-7M4 10V3.5M12 20.5v-9M12 8V3.5M20 20.5v-5M20 12V3.5" />
    <path d="M1.5 13.5h5M9.5 8h5M17.5 15.5h5" />
  </Svg>
);

export const IconZap = (p: IconProps) => (
  <Svg {...p}>
    <path d="M13 2.5 3.8 13.5h7L11 21.5l9.2-11h-7L13 2.5Z" />
  </Svg>
);

export const IconCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="m4.5 12.5 5 5 10-11" />
  </Svg>
);

export const IconRefresh = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
    <path d="M3.5 3.5v5h5" />
  </Svg>
);

export const IconAlert = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.8" />
    <path d="M12 7.5v5.5" />
    <path d="M12 16.2h.01" />
  </Svg>
);

export const IconGitHub = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export const IconX = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const IconLinkedIn = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export const IconInstagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5.2" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconYouTube = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="5.5" width="19" height="13" rx="3.6" />
    <path d="m10.2 9.6 4.6 2.4-4.6 2.4V9.6Z" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconTikTok = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const IconFacebook = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const IconWhatsApp = ({ size = 19, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const IconNetwork = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="4.4" r="2.1" />
    <circle cx="4.8" cy="18.1" r="2.1" />
    <circle cx="19.2" cy="18.1" r="2.1" />
    <path d="M12 6.5v4M5.2 16.2 10.6 12M18.8 16.2 13.4 12M10.6 12c.4-1.6 2.4-1.6 2.8 0" />
  </Svg>
);

export const IconRocket = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.6 3.8c1.6-.7 3.6-.6 5.8 0 .6 2.2.7 4.2 0 5.8l-4.2 8.4-5.8-.3-1.9-4-4-.5L14.6 3.8Z" />
    <circle cx="14.8" cy="9.2" r="1.5" />
    <path d="M9.4 14.6c-.3 1.1-1 2.5-2.4 3.9-.6-.8-1.2-1.8-1.7-3.1 1.4-.4 2.9-.7 4.1-.8ZM10.8 18.2c.2 1.2 0 2.6-.6 3.7-.7-.3-1.5-.8-2.2-1.6-.4-1.1-1.1-2.4-2-3.6 1-.1 2.6.4 3.5 1.5" />
  </Svg>
);

export const IconSlash = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.8 4.5 9 19.5" />
    <path d="M7.5 8.2 15 4.5l5 1.6-1.2 3.4-1.7.9L14.8 4.5Z" />
  </Svg>
);

export const IconBook = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 5.2A2.4 2.4 0 0 1 5.9 2.8h3.4V18.4H5.9A2.4 2.4 0 0 0 3.5 20.8V5.2Z" />
    <path d="M20.5 5.2A2.4 2.4 0 0 0 18.1 2.8h-3.4V18.4h3.4a2.4 2.4 0 0 1 2.4 2.4V5.2Z" />
    <path d="M3.5 20.8a2.4 2.4 0 0 1 2.4-2.4h14.6" />
  </Svg>
);