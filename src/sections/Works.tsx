import { useMemo, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import {
  IconAlert,
  IconArrowUpRight,
  IconFork,
  IconRefresh,
  IconSearch,
  IconStar,
} from '../components/icons';
import { SITE } from '../data/content';
import {
  compact,
  langColor,
  timeAgo,
  useGitHubRepos,
  type GitHubRepo,
} from '../hooks';

function RepoCardSkeleton() {
  return (
    <div className="skeleton" aria-hidden="true">
      <div className="sk-line" style={{ width: '46%' }} />
      <div className="sk-line" style={{ width: '88%' }} />
      <div className="sk-line" style={{ width: '68%' }} />
      <div style={{ height: 14 }} />
      <div className="sk-line" style={{ width: '34%', marginBottom: 0 }} />
    </div>
  );
}

function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <article className="repo-card">
      <div className="repo-card__top">
        <h3 className="repo-card__name">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </h3>
        <div className="repo-card__meta" aria-label="Popularity">
          <span title="Stars">
            <IconStar size={13} />
            &nbsp;{compact(repo.stargazers_count)}
          </span>
          <span title="Forks">
            <IconFork size={13} />
            &nbsp;{compact(repo.forks_count)}
          </span>
        </div>
      </div>
      <p className="repo-card__desc">
        {repo.description ?? 'No description published yet — the repository is on the shelf.'}
      </p>
      <div className="repo-card__foot">
        <div className="repo-card__meta">
          <span className="lang">
            <span
              className="lang-dot"
              style={{ backgroundColor: langColor(repo.language) }}
              aria-hidden="true"
            />
            {repo.language ?? 'Code'}
          </span>
          <span>updated {timeAgo(repo.updated_at)}</span>
        </div>
        <a
          className="repo-card__open"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open
          <IconArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}

function Spotlight({ repo }: { repo: GitHubRepo }) {
  return (
    <Reveal>
      <article className="repo-spot">
        <span className="repo-spot__tag">Latest push</span>
        <div>
          <h3 className="repo-card__name" style={{ marginBottom: 10 }}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h3>
          <p className="repo-card__desc" style={{ fontSize: 14.5, maxWidth: '62ch' }}>
            {repo.description ?? 'No description published yet.'}
          </p>
          <div className="repo-card__meta" style={{ marginTop: 14 }}>
            <span className="lang">
              <span
                className="lang-dot"
                style={{ backgroundColor: langColor(repo.language) }}
                aria-hidden="true"
              />
              {repo.language ?? 'Code'}
            </span>
            <span>
              <IconStar size={13} /> {compact(repo.stargazers_count)}
            </span>
            <span>
              <IconFork size={13} /> {compact(repo.forks_count)}
            </span>
            <span>sync {timeAgo(repo.updated_at)}</span>
          </div>
        </div>
        <a
          className="btn btn--ghost btn--small"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
          <IconArrowUpRight size={14} />
        </a>
      </article>
    </Reveal>
  );
}

export function Works() {
  const { status, repos, error, retry } = useGitHubRepos(SITE.githubUser);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return repos;
    return repos.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.description ?? '').toLowerCase().includes(q) ||
        (r.language ?? '').toLowerCase().includes(q),
    );
  }, [repos, query]);

  const [spotlightRepo, ...rest] = filtered;

  return (
    <section id="works" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Works"
          title={
            <>
              The live <em>engineering archive</em>
            </>
          }
          sub="Everything here is fetched in real time from my GitHub profile. New public repositories appear here automatically — no manual updates."
        />

        <div className="works__toolbar">
          <div className="search">
            <IconSearch size={16} />
            <input
              type="search"
              placeholder="Filter by name, description, or language…"
              aria-label="Filter repositories"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <span className="works__live">
            <span className="dot" aria-hidden="true" />
            live from{' '}
            <a href={SITE.github} target="_blank" rel="noopener noreferrer">
              {SITE.githubUser}
            </a>
          </span>
        </div>

        {status === 'loading' ? (
          <div className="repo-grid" role="status" aria-live="polite">
            <RepoCardSkeleton />
            <RepoCardSkeleton />
            <RepoCardSkeleton />
            <RepoCardSkeleton />
          </div>
        ) : status === 'error' ? (
          <div className="state-box">
            <span className="glyph">
              <IconAlert size={30} />
            </span>
            <p>{error}</p>
            <button type="button" className="btn btn--ghost btn--small" onClick={retry}>
              <IconRefresh size={14} />
              Try again
            </button>
          </div>
        ) : status === 'empty' ? (
          <div className="state-box">
            <span className="glyph">
              <IconSearch size={30} />
            </span>
            <p>No public repositories match this filter yet.</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="state-box">
            <span className="glyph">
              <IconSearch size={30} />
            </span>
            <p>
              Nothing matches "{query}" right now. Try a different keyword or clear the filter.
            </p>
            <button
              type="button"
              className="btn btn--ghost btn--small"
              onClick={() => setQuery('')}
            >
              Clear filter
            </button>
          </div>
        ) : (
          <>
            {spotlightRepo ? <Spotlight repo={spotlightRepo} /> : null}
            {rest.length > 0 ? (
              <div className="repo-grid">
                {rest.map((repo) => (
                  <Reveal key={repo.id} delay={0}>
                    <RepoCard repo={repo} />
                  </Reveal>
                ))}
              </div>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}