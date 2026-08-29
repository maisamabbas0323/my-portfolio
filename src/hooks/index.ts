import { useCallback, useEffect, useRef, useState } from 'react';

/* ------------------------------------------------------------------ */
/* Scroll spy — which section is currently in view                     */
/* ------------------------------------------------------------------ */

export function useScrollSpy<T extends string>(ids: readonly T[]): T {
  const [active, setActive] = useState<T>(ids[0]);

  useEffect(() => {
    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const probe = window.innerHeight * 0.4;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe) current = id;
      }
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (nearBottom) current = ids[ids.length - 1];
      setActive(current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}

/* ------------------------------------------------------------------ */
/* In-view detection for scroll reveals                                */
/* ------------------------------------------------------------------ */

export function useInView<T extends HTMLElement>(
  options?: { threshold?: number; rootMargin?: string; once?: boolean },
) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', once = true } = options ?? {};
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}

/* ------------------------------------------------------------------ */
/* GitHub repositories                                                 */
/* ------------------------------------------------------------------ */

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
};

type RawRepo = GitHubRepo & { fork: boolean };

export type ReposState =
  | { status: 'loading'; repos: GitHubRepo[]; error: null }
  | { status: 'ready'; repos: GitHubRepo[]; error: null }
  | { status: 'empty'; repos: GitHubRepo[]; error: null }
  | { status: 'error'; repos: GitHubRepo[]; error: string };

export function useGitHubRepos(user: string) {
  const [state, setState] = useState<ReposState>({
    status: 'loading',
    repos: [],
    error: null,
  });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let ignore = false;
    const ctrl = new AbortController();
    setState({ status: 'loading', repos: [], error: null });

    fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=60&type=public`, {
      signal: ctrl.signal,
    })
      .then(async (res) => {
        if (res.status === 403) throw new Error('rate-limit');
        if (!res.ok) throw new Error(`Server responded ${res.status}`);
        const data: unknown = await res.json();
        if (!Array.isArray(data)) throw new Error('Unexpected response');
        if (ignore) return;
        const repos: GitHubRepo[] = (data as RawRepo[])
          .filter((r) => !r.fork)
          .sort((a, b) => b.updated_at.localeCompare(a.updated_at));
        setState({
          status: repos.length > 0 ? 'ready' : 'empty',
          repos,
          error: null,
        });
      })
      .catch((err: unknown) => {
        if (ignore || (err instanceof DOMException && err.name === 'AbortError')) return;
        const error =
          err instanceof Error && err.message === 'rate-limit'
            ? 'GitHub is rate-limiting public requests right now. Give it a moment and retry.'
            : err instanceof TypeError
              ? 'Could not reach GitHub. Check your connection and retry.'
              : err instanceof Error
                ? err.message
                : 'Something went wrong while loading repositories.';
        setState({ status: 'error', repos: [], error });
      });

    return () => {
      ignore = true;
      ctrl.abort();
    };
  }, [user, attempt]);

  const retry = useCallback(() => setAttempt((a) => a + 1), []);

  return { ...state, retry };
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export function timeAgo(iso: string): string {
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return 'recently';
  const seconds = Math.round((Date.now() - then) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.round(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.round(months / 12)}y ago`;
}

// GitHub language accent colours (subset, widely used)
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  Go: '#00add8',
  Rust: '#dea584',
  Java: '#b07219',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
  PHP: '#4f5d95',
  Swift: '#f05138',
  Kotlin: '#a97bff',
  Dart: '#00b4ab',
  Lua: '#000080',
  Ruby: '#701516',
  Dockerfile: '#384d54',
  'Objective-C': '#438eff',
  Markdown: '#083fa1',
};

export function langColor(lang: string | null): string {
  if (!lang) return '#8c8c96';
  return LANG_COLORS[lang] ?? '#8c8c96';
}

export function compact(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`;
  return String(n);
}