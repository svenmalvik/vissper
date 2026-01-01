# Vissper

AI-powered meeting companion that writes notes for you. Record, transcribe, copyedit, and summarize—all with one click.

**Live Site**: https://vissper.com

This is the marketing landing page for Vissper, built with modern web technologies and designed for performance and developer experience.

## Tech Stack

- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query for server state
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom animations
- **Form Handling**: React Hook Form with Zod validation

## Quick Start

```bash
# Clone the repository
git clone https://github.com/svenmalvik/vissper.git
cd vissper

# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Project Structure

```
src/
├── pages/          # Page components (Index, Download, Privacy, etc.)
├── components/     # Landing page sections (HeroSection, FeatureShowcase, etc.)
│   └── ui/         # shadcn-ui component library (40+ components)
├── hooks/          # Custom React hooks
└── lib/            # Utility functions
```

## Development

The project uses path aliases configured via `@/` prefix:
- `@/components` - React components
- `@/lib` - Utility functions
- `@/hooks` - Custom hooks
- `@/components/ui` - shadcn-ui components

### Routing

Routes are defined in `src/App.tsx`. When adding new routes, place them **above** the catch-all `*` route. The router automatically detects GitHub Pages subdirectory deploys vs custom domains.

### Component Architecture

The landing page (`src/pages/Index.tsx`) uses a compositional approach with standalone section components that can be independently modified.

## Deployment

This project automatically deploys to GitHub Pages via GitHub Actions on push to `main`:

1. Builds the project using `npm run build`
2. Deploys the `dist` folder to GitHub Pages
3. Site becomes available at https://vissper.com (custom domain configured via CNAME)

The deployment configuration is in `.github/workflows/deploy.yml`.

## Lovable Integration

This project was created with [Lovable](https://lovable.dev/projects/8435078f-1a62-4077-8398-bba91eb9b386) and maintains integration:

- Changes pushed to this repo are reflected in Lovable
- Changes made via Lovable are automatically committed here
- The `lovable-tagger` plugin runs in development mode only
- Use `[skip lovable]` in commit messages to bypass Lovable sync

You can also deploy directly via Lovable: Project > Share > Publish.

## License

This project is part of the Vissper AI meeting companion ecosystem.
