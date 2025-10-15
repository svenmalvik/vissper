# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vissper is a landing page built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. This project was created using Lovable (lovable.dev) and follows a component-based architecture for marketing pages.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin for fast compilation
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM (v6)
- **State Management**: TanStack Query for server state
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom configuration
- **Development**: Lovable integration via `lovable-tagger` plugin (dev mode only)

### Project Structure
- `src/pages/` - Page components (Index, NotFound)
- `src/components/` - Feature section components (HeroSection, ProblemSection, etc.)
- `src/components/ui/` - shadcn-ui components (fully configured library)
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions (includes `cn` utility for class merging)

### Component Architecture
The landing page follows a sectional architecture where `src/pages/Index.tsx` composes multiple section components in sequence:
1. HeroSection
2. ProblemSection
3. FeatureShowcase
4. TechnicalSection
5. ComparisonSection
6. UseCasesSection
7. RoadmapSection
8. FooterCTA

Each section is a standalone component in `src/components/` that can be independently modified.

### Path Aliases
Use `@/` prefix for imports (configured in vite.config.ts):
- `@/components` - Components directory
- `@/lib` - Lib directory
- `@/hooks` - Hooks directory
- `@/components/ui` - UI components

### Routing Configuration
Routes are defined in `src/App.tsx`. Custom routes must be added ABOVE the catch-all `*` route for NotFound.

### Lovable Integration
- This project syncs with Lovable (Project URL in README.md)
- Changes pushed to git will reflect in Lovable
- The `lovable-tagger` plugin runs in development mode only
- Commit messages with `[skip lovable]` bypass Lovable sync

### shadcn-ui Configuration
shadcn-ui is fully configured via `components.json`:
- Style: default
- Base color: slate
- CSS variables enabled
- Components use Tailwind CSS with custom theming

## Important Notes
- Development server runs on port 8080 (IPv6 enabled)
- All UI components are pre-installed from shadcn-ui
- Use `npm i` to install dependencies (supports both npm and bun)
