# CLAUDE.md

Personal portfolio/resume website for Jiahong at j1ah0ng.xyz.

## Tech Stack

- **Framework**: Astro 5 (static output)
- **Interactivity**: React 19 (islands architecture for Splash component)
- **Styling**: Astro scoped styles + global utility CSS
- **Animations**: windups (typewriter effect)
- **Package Manager**: Yarn 4

## Structure

```
src/
├── layouts/BaseLayout.astro    # HTML shell, fonts, meta
├── components/
│   ├── Splash.tsx              # React island (client:load)
│   ├── Resume.astro            # Skills, Experience, Education
│   ├── Highlights.astro        # What's new section
│   ├── Footer.astro            # Contact links
│   ├── Card.astro              # Content card
│   ├── Sep.astro               # Colored separator
│   └── ...                     # Other components
├── pages/index.astro           # Main page
└── styles/global.css           # Utility CSS classes
```

## Commands

```bash
yarn install    # Install dependencies
yarn dev        # Dev server at localhost:4321
yarn build      # Build to ./dist
yarn preview    # Preview production build
```

## Deployment

GitHub Actions deploys to GitHub Pages on push to `master` using `withastro/action`.

## Color Palette (Nord)

- Aqua: #8fbcbb / Frost: #88c0d0
- Orange: #d08770 / Green: #a3be8c
- Red: #bf616a / Snow: #d8dee9
