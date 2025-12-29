# CLAUDE.md

Personal portfolio/resume website for Jiahong at j1ah0ng.xyz.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with static export (`output: 'export'`)
- **Language**: TypeScript
- **Styling**: styled-components + utility CSS classes
- **State**: Redux Toolkit (for app state and network/date fetching)
- **Package Manager**: Yarn 4 (berry)
- **Math Rendering**: react-hook-mathjax + KaTeX CSS
- **Animations**: windups (typewriter effect)
- **Icons**: FontAwesome

## Repository Structure

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout (fonts, metadata)
│   │   ├── global.css          # Global styles, CSS imports
│   │   └── [[...slug]]/        # Catch-all route (SPA behavior)
│   │       ├── page.tsx        # Server component entry
│   │       └── client.tsx      # Client component wrapper
│   │
│   ├── lib/                    # React components
│   │   ├── approot.tsx         # Main app shell (Splash, Resume, Footer)
│   │   ├── splash.tsx          # Hero section with rotating taglines
│   │   ├── resume.tsx          # Skills, Experience, Education sections
│   │   ├── highlights.tsx      # Featured projects/highlights
│   │   ├── footer.tsx          # Contact links
│   │   ├── card.tsx            # Expandable card component
│   │   ├── buttonlink.tsx      # Anchor-styled button links
│   │   ├── modals.tsx          # Loading modal
│   │   ├── sep.tsx             # Colored separator between sections
│   │   ├── resumecardinterior.tsx  # Resume entry layout
│   │   └── styled.tsx          # Shared styled-components (StackDiv, SectionDiv, etc.)
│   │
│   ├── redux/                  # Redux state management
│   │   ├── store.ts            # Redux store config
│   │   ├── app-slice.ts        # App initialization state
│   │   └── network-slice.ts    # Date string fetching
│   │
│   ├── styles/                 # Utility CSS classes
│   │   ├── colors.css          # Nord-inspired color classes (.red, .orange, etc.)
│   │   ├── font-styles.css     # Typography utilities (.bold, .large, .italic)
│   │   ├── spacing.css         # Margin/padding utilities (.mt-m, .mb-xl)
│   │   └── divs.css            # Layout utilities
│   │
│   ├── util/
│   │   └── data-provider.ts    # Axios data fetching utilities
│   │
│   ├── App.tsx                 # Legacy root (wraps AppRoot with providers)
│   └── App.css                 # Legacy app styles
│
├── public/                     # Static assets
│   ├── me.webp                 # Profile photo
│   ├── favicon.ico
│   └── logo*.png               # PWA icons
│
├── .github/workflows/
│   └── github-actions.yml      # CI/CD: build & deploy to GitHub Pages
│
├── next.config.ts              # Next.js config (static export to ./build)
├── package.json
├── tsconfig.json
└── yarn.lock
```

## Commands

```bash
yarn install      # Install dependencies
yarn dev          # Start dev server (Turbopack)
yarn build        # Build static site to ./build
yarn start        # Serve built site locally
```

## Deployment

GitHub Actions workflow triggers on push to `master`:
1. Installs deps with Yarn
2. Runs `yarn build` (Next.js static export)
3. Uploads `./build` directory to GitHub Pages

Custom domain: j1ah0ng.xyz (configured via CNAME file)

## Page Sections

1. **Splash**: Full-viewport hero with profile photo and rotating taglines (windups typewriter effect)
2. **Highlights**: Featured projects section
3. **Resume**: Skills, Work Experience, Education cards (collapsible)
4. **Footer**: Contact/social links

## Color Palette

Uses Nord theme colors:
- Red: #bf616a
- Orange: #d08770
- Yellow: #ebcb8b
- Green: #a3be8c
- Purple: #b48ead
- Aqua/Frost: #88c0d0
- Snow: #d8dee9

## Notes for Astro Migration

Key considerations when porting to Astro:

1. **Static Content**: Most content is static (resume data in resume.tsx). Can be moved to Markdown/MDX or Astro components.

2. **Interactivity**: The windups typewriter animation in splash.tsx requires client-side JS. Use Astro's `client:*` directives for React islands.

3. **Styled-components**: Replace with Astro's scoped styles or keep styled-components with `client:load` on interactive components.

4. **Redux**: Only used for initialization and date fetching - likely unnecessary in Astro. Date can be computed at build time or with a simple `<script>`.

5. **MathJax/KaTeX**: Used sparingly in resume.tsx for LaTeX symbols. Consider static rendering or minimal client-side hydration.

6. **Fonts**: Currently loaded via Google Fonts CDN in layout.tsx. Can use `@fontsource` packages or Astro's font optimization.

7. **Build Output**: Both Next.js and Astro can output static sites. GitHub Actions workflow needs minor updates.

Suggested Astro structure:
```
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── Splash.astro (or .tsx for interactivity)
│   │   ├── Resume.astro
│   │   └── ...
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
```
