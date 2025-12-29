# j1ah0ng.xyz

Personal portfolio site built with [Astro](https://astro.build).

## Stack

- Astro 5 (static site generation)
- React 19 (for interactive components)
- TypeScript
- Nord color palette

## Development

```bash
yarn install    # Install dependencies
yarn dev        # Start dev server at localhost:4321
```

## Build & Deploy

```bash
yarn build      # Build static site to ./dist
yarn preview    # Preview production build locally
```

Deployment is automated via GitHub Actions on push to `master`. Uses the official [withastro/action](https://github.com/withastro/action) to build and deploy to GitHub Pages.

## License

See [COPYING](./COPYING).
