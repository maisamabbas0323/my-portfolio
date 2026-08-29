# Maisam Abbas — Portfolio

One page. My real story. Built by hand, on purpose.

This is the online home of **Maisam Abbas** — a software engineer who builds intelligent
systems, developer tools, and web platforms people actually use. Everything here is real:
the education, the certificates, the live GitHub archive, the actual résumé. Nothing is
placeholder copy, and nothing pretends to be better than it is.

Explore it at the source: [github.com/maisamabbas0323](https://github.com/maisamabbas0323)

---

## About this project

The portfolio is a deliberately small, fast, single-page site with a few fixed ideas:

- **It opens like a letter, not a dashboard.** A circular portrait, a slowly dancing
  "Hi," and plain, human sentences instead of boxes, badges, and jargon.
- **The work speaks from the live source.** The Works section is not a screenshot of
  projects — it pulls your public repositories straight from the GitHub API on every
  visit. Post something new and it appears on the page by itself.
- **Numbers only where they mean something.** Real marks and percentages in Education.
  No fake progress bars, no meaningless counts, no "Section 01" filler anywhere.
- **The résumé is the real file.** The page checks whether the document on Google Drive
  is shared publicly, previews it inline when it can, and always keeps a single
  "View resume" button that opens the actual PDF.
- **It treats every visitor with respect.** Semantic HTML, accessible control labels,
  safe external links, reduced-motion support, and a layout that never breaks from the
  smallest phone up to an ultra-wide display.

## What's inside

- **Home** — a quiet, confident hero: "Hi, I'm Maisam", a circular portrait, a line of
  social links that float gently, and a clear path into the work.
- **About** — a short, honest account of how and why I build, plus what I am focused on
  right now.
- **Education** — the two milestones that started it: Matric in General Science and FSc
  in Computer Science, with accurate marks, percentages, and working DMC and certificate
  links.
- **Achievements** — a curated collection of certificates from AI, data, and engineering
  programs. Each card opens its original PDF.
- **Works** — the live GitHub archive with loading, error, rate-limit, and empty states,
  plus a searchable filter.
- **Skills** — an interactive map of what I reach for, grouped by the kind of work where
  each skill earns its keep.
- **Résumé** — the real one-page document, previewed inline when sharing allows it.

## Design principles

- No emoji. No gradient-cliché noise. No fake loading tricks.
- A warm gold accent on a deep, near-black background — confident, calm, premium.
- Typography carries the design; boxes step back and let words lead.
- Hand-drawn SVG icons only; zero runtime UI libraries.
- Self-hosted variable fonts (Inter and JetBrains Mono, latin subsets only) so nothing
  depends on a third-party font service.

## The stack

- **React 18 + TypeScript** — strict mode, clean types, no dead code.
- **Vite 6** — fast dev server, and a production build that stays lean.
- **Vanilla CSS** — one global stylesheet, CSS variables, flexbox and grid.
- The only dynamic data source is the GitHub API, fetched at runtime.

## Installation

Something modern in your terminal: Node.js and npm.

```bash
# clone the repository
git clone https://github.com/maisamabbas0323/my-portfolio.git
cd my-portfolio

# install dependencies
npm install

# run the development server (hot reload)
npm run dev
```

The dev server prints a local address, usually `http://localhost:5173/`. Open it and
start poking at the code; every edit shows up immediately.

## Useful commands

| Command                | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the local development server            |
| `npm run typecheck`    | Type-check the whole project with TypeScript  |
| `npm run lint`         | Lint every file with ESLint                   |
| `npm run build`        | Create the production build in `dist/`        |
| `npm run preview`      | Serve the production build locally            |

## Deploying it

npm run build produces a static `dist/` folder with no server-side requirements, so it
deploys anywhere that serves static files.

A common route is GitHub Pages: push `dist/` to the `gh-pages` branch, or point a hosting
service (Netlify, Vercel, Cloudflare Pages) at the repository and let it run the build.
The page's deep links point at real GitHub sections, so it works under a custom domain or
your `github.io` address without extra configuration.

## Making it yours

All personal content — socials, education, certificates, resume links, and skills —
lives in one file: `src/data/content.tsx`. Swap the values, swap the portrait in
`src/assets/`, and the entire site follows. No plumbing required.

One note on the resume: for the inline preview to work, the Google Drive file must be
shared as **Anyone with the link — Viewer**. Until then the site shows a short, friendly
note, and the "View resume" button still opens the real document.

---

Designed and built by Maisam Abbas.
