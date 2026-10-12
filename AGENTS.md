# AGENTS.md

This document provides instructions and context for AI coding agents working in this repository.

## Project Overview
- **Name**: Maisam Portfolio (v2.0.0)
- **Description**: Hand-built personal portfolio of Maisam Abbas - a single-page React + TypeScript application
- **Tech Stack**: React 18, TypeScript, Vite 6, Vanilla CSS
- **Purpose**: Fast, accessible, humanized portfolio showcasing work, education, skills and resume

## Project Structure
```
/src
  /assets - Images and static assets
  /components - Reusable UI components
  /data - Content (content.tsx - all personal data lives here)
  /hooks - Custom React hooks
  /sections - Page sections (Home, About, Education, Achievements, Works, Skills, Resume)
  /styles - Global styles (global.css)
  App.tsx - Main app with section routing
  main.tsx - App entry point
```

## Key Commands
| Command | Purpose |
|---|---|
| `npm run dev` | Start development server (localhost:5173) |
| `npm run typecheck` | TypeScript type checking |
| `npm run lint` | ESLint linting |
| `npm run build` | Production build to dist/ |
| `npm run preview` | Preview production build locally |

## Content Management
All personal content is centralized in `src/data/content.tsx`:
- Site identity, resume URL, metadata
- Social links (GitHub, LinkedIn only - others removed)
- Navigation items (SectionId types)
- Education data (marks, grades, percentages)
- Achievements/certificates
- Skills by categories
- About story and focus lines

To update portfolio content, edit only `src/data/content.tsx` and assets. No plumbing changes needed.

## Design Principles
- Clean, humanized, premium aesthetic (deep near-black + warm gold accent #d9b878)
- Typography-first (Inter Variable + JetBrains Mono Variable, latin subsets)
- Fully responsive (mobile-first approach)
- Accessibility focused (semantic HTML, ARIA, reduced-motion support)
- No emoji, no fake progress bars, no gradients overused
- Self-hosted fonts, zero runtime UI libraries
- Works section pulls live from GitHub API (dynamic)

## Code Style & Conventions
- TypeScript strict mode
- React functional components with hooks
- Clean, readable code with proper types
- Consistent with existing patterns in codebase
- CSS variables for theming in global.css
- Use existing icon components from components/icons
- Preserve accessibility and reduced-motion considerations

## Architecture Notes
- Single Page Application (SPA) with smooth scroll navigation
- Scroll spy for active section highlighting (useScrollSpy hook)
- GitHub API integration in Works section with loading/error states
- Resume preview logic (checks Google Drive sharing state)
- Section IDs: home, about, education, achievements, works, skills, resume

## Recent Changes
- Removed all social media links except GitHub and LinkedIn
- Removed education document links (DMC/Certificates) for cleaner presentation
- Updated resume link to new Google Drive URL
- Replaced left sidebar ribbon with top navigation bar for better UX
- Enhanced responsive design across all breakpoints
- Added AGENTS.md for AI agent guidance

## Development Guidelines
1. Read existing code and follow established patterns
2. Keep changes minimal and consistent with codebase style
3. Test responsiveness on mobile, tablet, desktop
4. Maintain TypeScript types (no any without reason)
5. Run typecheck and lint before considering changes complete
6. Respect prefers-reduced-motion for animations
7. Use semantic HTML and proper accessibility attributes
8. Don't modify node_modules or build artifacts

## Deployment
- Static build in `dist/` folder
- Deployable to GitHub Pages, Netlify, Vercel, Cloudflare Pages
- No server-side requirements

## Contact
Maisam Abbas - maisamabbas0323@gmail.com
GitHub: https://github.com/maisamabbas0323
LinkedIn: https://linkedin.com/in/maisam-abbas-a230503a6
