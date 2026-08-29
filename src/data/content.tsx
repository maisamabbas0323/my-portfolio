import type { ComponentType } from 'react';
import type { IconProps } from '../components/icons';
import {
  IconAtom,
  IconAward,
  IconBook,
  IconBot,
  IconBraces,
  IconBrackets,
  IconChip,
  IconCode,
  IconCompass,
  IconCpu,
  IconDatabase,
  IconDiamond,
  IconFacebook,
  IconFlag,
  IconFolder,
  IconGitBranch,
  IconGitHub,
  IconGlobe,
  IconGradCap,
  IconHexagon,
  IconHome,
  IconAbout,
  IconInstagram,
  IconKey,
  IconKanban,
  IconLayers,
  IconLightbulb,
  IconLinkedIn,
  IconLock,
  IconMail,
  IconMessage,
  IconNeural,
  IconNetwork,
  IconPuzzle,
  IconRefresh,
  IconResumeDoc,
  IconRocket,
  IconServer,
  IconShield,
  IconSlash,
  IconSmartphone,
  IconSliders,
  IconTerminal,
  IconTikTok,
  IconUsers,
  IconWhatsApp,
  IconWind,
  IconX,
  IconYouTube,
  IconZap,
} from '../components/icons';

/* ------------------------------------------------------------------ */
/* Site identity                                                       */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: 'Maisam Abbas',
  handle: '@maisamabbas0323',
  role: 'Software Engineer',
  email: 'maisamabbas0323@gmail.com',
  location: 'Parachinar, Pakistan',
  github: 'https://github.com/maisamabbas0323',
  githubUser: 'maisamabbas0323',
  resumeUrl:
    'https://drive.google.com/file/d/1Z2j7pepU7lpUokWKGW6p1RTEKbbtf0lo/view?usp=drive_link',
  resumeId: '1Z2j7pepU7lpUokWKGW6p1RTEKbbtf0lo',
} as const;

/* ------------------------------------------------------------------ */
/* Social links                                                        */
/* ------------------------------------------------------------------ */

export type Social = {
  name: string;
  url: string;
  id: string;
  icon: ComponentType<IconProps>;
  delay: string;
};

export const SOCIALS: Social[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/maisamabbas0323',
    icon: IconGitHub,
    delay: '0s',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/maisam-abbas-a230503a6',
    icon: IconLinkedIn,
    delay: '-0.6s',
  },
  { id: 'x', name: 'X', url: 'http://x.com/maisamabbas0323', icon: IconX, delay: '-1.2s' },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'http://www.youtube.com/@MesamBuilds',
    icon: IconYouTube,
    delay: '-1.8s',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/maisamabbas0323',
    icon: IconInstagram,
    delay: '-2.4s',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@maisamabbas0323',
    icon: IconTikTok,
    delay: '-3s',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1ELBAW1EAM/',
    icon: IconFacebook,
    delay: '-3.6s',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'http://wa.me/923238895337',
    icon: IconWhatsApp,
    delay: '-4.2s',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:maisamabbas0323@gmail.com',
    icon: IconMail,
    delay: '-4.8s',
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'achievements'
  | 'works'
  | 'skills'
  | 'resume';

export type NavItem = {
  id: SectionId;
  label: string;
  icon: ComponentType<IconProps>;
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'about', label: 'About', icon: IconAbout },
  { id: 'education', label: 'Education', icon: IconGradCap },
  { id: 'achievements', label: 'Achievements', icon: IconAward },
  { id: 'works', label: 'Works', icon: IconFolder },
  { id: 'skills', label: 'Skills', icon: IconDiamond },
  { id: 'resume', label: 'Resume', icon: IconResumeDoc },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export type EducationItem = {
  id: string;
  degree: string;
  stream: string;
  school: string;
  marks: number;
  total: number;
  grade: string;
  gradeTone: 'accent' | 'soft';
  icon: ComponentType<IconProps>;
  docs: { label: string; href: string }[];
};

export const EDUCATION: EducationItem[] = [
  {
    id: 'matric',
    degree: 'Matric',
    stream: 'General Science',
    school:
      'Govt Nadeem Shaheed Hussain Higher Secondary School, Shalozan, District Kurram, Parachinar, Pakistan',
    marks: 938,
    total: 1100,
    grade: 'A-1',
    gradeTone: 'accent',
    icon: IconBook,
    docs: [
      {
        label: 'View DMC',
        href: 'https://drive.google.com/file/d/12b_VBwbkhlNsxgU8bZ9kVlGTrcBz2tDn/view?usp=drive_link',
      },
      {
        label: 'View Certificate',
        href: 'https://drive.google.com/file/d/1wT1K1-nbLvyvTWiDtOc_HWejuUOkO9TK/view?usp=drive_link',
      },
    ],
  },
  {
    id: 'fsc',
    degree: 'FSc',
    stream: 'Computer Science',
    school:
      'Govt Nadeem Shaheed Hussain Higher Secondary School, Shalozan, District Kurram, Parachinar, Pakistan',
    marks: 936,
    total: 1200,
    grade: 'A',
    gradeTone: 'soft',
    icon: IconGradCap,
    docs: [
      {
        label: 'View DMC',
        href: 'https://drive.google.com/file/d/1lUj5fQGqSlbV27OEhobmhtmmg-3q8fKi/view?usp=drive_link',
      },
      {
        label: 'View Certificate',
        href: 'https://drive.google.com/file/d/1ycnmxuYKyZGRkWPZT3by5Zivz5OC8oST/view?usp=drive_link',
      },
    ],
  },
];

export function percentage(marks: number, total: number): string {
  return `${((marks / total) * 100).toFixed(2)}%`;
}

/* ------------------------------------------------------------------ */
/* Achievements / certificates                                         */
/* ------------------------------------------------------------------ */

export type Achievement = {
  title: string;
  href: string;
  kind: string;
  icon: ComponentType<IconProps>;
  featured?: boolean;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'AI for Beginners',
    href: 'https://drive.google.com/file/d/1hPAMfAeQVM-ziV_zkmNx-NhfWn7oYAZN/view?usp=drive_link',
    kind: 'Artificial Intelligence',
    icon: IconNeural,
    featured: true,
  },
  {
    title: 'AI for Business Professionals',
    href: 'https://drive.google.com/file/d/1pgMqnRpAS-t-4vNgxjyqYxZnyFSF2Vyn/view?usp=drive_link',
    kind: 'Artificial Intelligence',
    icon: IconUsers,
  },
  {
    title: 'AI Hackathon',
    href: 'https://drive.google.com/file/d/1QLUp-0KYXllX2pZI529CDKYb8vhLM1Bw/view?usp=drive_link',
    kind: 'Hackathon',
    icon: IconZap,
  },
  {
    title: 'Data Science & Analytics',
    href: 'https://drive.google.com/file/d/1RsH_ssVqCpEbRxSjHTuBnVIYUsUecDLE/view?usp=drive_link',
    kind: 'Data Science',
    icon: IconDatabase,
  },
  {
    title: 'Frame Foundation',
    href: 'https://drive.google.com/file/d/1B-c-wJ4bRzJmiXO8roD_IfleZHEGkUD0/view?usp=drive_link',
    kind: 'Program',
    icon: IconDiamond,
  },
  {
    title: 'Innovation Hacks',
    href: 'https://drive.google.com/file/d/1g_Z1WzNqs-1v4sQUgoVqxjcLDsqjYFr4/view?usp=drive_link',
    kind: 'Innovation',
    icon: IconLightbulb,
  },
  {
    title: 'Success Mindset',
    href: 'https://drive.google.com/file/d/1X772_kh6boBW5myxokkW1gEiikkIqeW-/view?usp=drive_link',
    kind: 'Personal Development',
    icon: IconCompass,
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export type SkillNode = {
  name: string;
  tag: string;
  icon: ComponentType<IconProps>;
};

export type SkillCategory = {
  id: string;
  label: string;
  icon: ComponentType<IconProps>;
  nodes: SkillNode[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    label: 'Programming & Development',
    icon: IconCode,
    nodes: [
      { name: 'Python', tag: 'systems & scripting', icon: IconBraces },
      { name: 'JavaScript', tag: 'language core', icon: IconBrackets },
      { name: 'TypeScript', tag: 'typed across the stack', icon: IconBrackets },
      { name: 'Node.js', tag: 'server-side runtime', icon: IconServer },
      { name: 'API Integration', tag: 'REST & SDKs', icon: IconNetwork },
      { name: 'Software Architecture', tag: 'structure, scale, clarity', icon: IconLayers },
    ],
  },
  {
    id: 'web',
    label: 'Web Development',
    icon: IconGlobe,
    nodes: [
      { name: 'React', tag: 'component systems', icon: IconAtom },
      { name: 'Next.js', tag: 'full-stack framework', icon: IconHexagon },
      { name: 'HTML & CSS', tag: 'semantic & responsive', icon: IconBrackets },
      { name: 'Tailwind CSS', tag: 'utility-first styling', icon: IconWind },
      { name: 'Supabase', tag: 'backend & auth', icon: IconZap },
      { name: 'Modern Web', tag: 'performance-first', icon: IconRocket },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Intelligent Systems',
    icon: IconNeural,
    nodes: [
      { name: 'AI Applications', tag: 'practical products', icon: IconBot },
      { name: 'AI Agents', tag: 'task orchestration', icon: IconChip },
      { name: 'Local LLMs', tag: 'privacy-first inference', icon: IconCpu },
      { name: 'Model Experimentation', tag: 'GGUF & llama.cpp', icon: IconAtom },
      { name: 'Prompt Engineering', tag: 'precision prompting', icon: IconMessage },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    icon: IconSmartphone,
    nodes: [
      { name: 'Mobile Applications', tag: 'touch-first builds', icon: IconSmartphone },
      { name: 'Responsive Interfaces', tag: 'adapt everywhere', icon: IconSliders },
    ],
  },
  {
    id: 'tools',
    label: 'Developer Tools',
    icon: IconSlash,
    nodes: [
      { name: 'Git', tag: 'version control', icon: IconGitBranch },
      { name: 'GitHub', tag: 'collaboration & CI', icon: IconGitHub },
      { name: 'CLI Development', tag: 'terminal tooling', icon: IconTerminal },
      { name: 'Electron', tag: 'desktop applications', icon: IconSmartphone },
    ],
  },
  {
    id: 'cloud',
    label: 'Linux, Cloud & Networking',
    icon: IconServer,
    nodes: [
      { name: 'Linux', tag: 'daily driver & servers', icon: IconTerminal },
      { name: 'Cloud Systems', tag: 'AWS & managed services', icon: IconGlobe },
      { name: 'Networking', tag: 'protocols & connectivity', icon: IconNetwork },
    ],
  },
  {
    id: 'security',
    label: 'Security Fundamentals',
    icon: IconShield,
    nodes: [
      { name: 'Ethical Hacking', tag: 'methodical testing', icon: IconKey },
      { name: 'Cybersecurity Basics', tag: 'hardening & hygiene', icon: IconLock },
    ],
  },
  {
    id: 'craft',
    label: 'Professional Craft',
    icon: IconFlag,
    nodes: [
      { name: 'Project Management', tag: 'delivery & scope', icon: IconKanban },
      { name: 'Effective Leadership', tag: 'teams & ownership', icon: IconUsers },
      { name: 'Problem Solving', tag: 'first-principles thinking', icon: IconPuzzle },
      { name: 'Continuous Learning', tag: 'always improving', icon: IconRefresh },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Focus / notebook lines                                              */
/* ------------------------------------------------------------------ */

export const FOCUS_LINES: { t: string; d: string }[] = [
  { t: 'Building', d: 'practical products and developer tools that people actually use.' },
  { t: 'Exploring', d: 'AI agents, local LLM inference, and privacy-first intelligence.' },
  { t: 'Engineering', d: 'web platforms, cloud systems, and dependable architecture.' },
  { t: 'Learning', d: 'something new in software every single week.' },
];

export const CURRENT_FOCUS = [
  'multi-agent tooling and orchestration',
  'local LLM workflows with GGUF models',
  'high-performance React and TypeScript interfaces',
  'desktop and CLI tooling that respects your machine',
  'cloud architecture with AWS and Supabase',
];

/* ------------------------------------------------------------------ */
/* About story                                                         */
/* ------------------------------------------------------------------ */

export const ABOUT_STORY: { lead: string; body: string[] } = {
  lead: "I build software the way I like to learn things — hands-on, curious, and a little bit experimental.",
  body: [
    "I'm Maisam Abbas, a software engineer from Parachinar, Pakistan. My pull toward software started with a simple question: how do the things we use every day actually work? That question turned into a habit of taking things apart, rebuilding them, and eventually building my own.",
    'Most days you will find me writing Python or TypeScript, wiring up React interfaces, experimenting with local LLM models, or poking at cloud infrastructure on AWS and Supabase. I care about the foundations — Linux, networking, how systems really behave under load — because the details almost always matter.',
    "These days I'm focused on AI applications and agent workflows, developer tooling, and clean web platforms. I like projects that solve a real problem, teach me something, and end up being useful to someone.",
  ],
};