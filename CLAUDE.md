# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vissper is an AI-powered meeting companion landing page built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. Created using Lovable (lovable.dev), it follows a component-based architecture for marketing pages.

**Live Site**: https://vissper.com

## Development Commands

- `npm run dev` - Start development server on port 8080 (IPv6 enabled)
- `npm run build` - Production build (outputs to `dist/`)
- `npm run build:dev` - Development mode build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **State Management**: TanStack Query for server state
- **UI Components**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom configuration

### Project Structure
- `src/pages/` - Page components (Index, Download, Privacy, ThankYou, NotFound)
- `src/components/` - Section components for landing pages (HeroSection, FeatureShowcase, etc.)
- `src/components/ui/` - shadcn-ui component library
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions (includes `cn` for class merging)

### Component Architecture
The landing page (`src/pages/Index.tsx`) composes multiple section components in sequence. Each section is a standalone component in `src/components/` that can be independently modified.

### Path Aliases
Use `@/` prefix for imports (configured in vite.config.ts and tsconfig):
- `@/components`, `@/lib`, `@/hooks`, `@/components/ui`

### Routing
Routes are defined in `src/App.tsx`. Custom routes must be added ABOVE the catch-all `*` route. The router dynamically detects GitHub Pages subdirectory deploys (`/vissper`) vs custom domain/local development and sets basename accordingly (src/App.tsx:16-19).

### Deployment
Automatically deploys to GitHub Pages via GitHub Actions on push to `main`. The `dist` folder is deployed.

### Lovable Integration
- Changes pushed to git reflect in Lovable
- The `lovable-tagger` plugin runs in development mode only
- Commit messages with `[skip lovable]` bypass Lovable sync

### shadcn-ui Configuration
Configured via `components.json`: default style, slate base color, CSS variables enabled. The component library includes 40+ pre-built UI components in `src/components/ui/`.

### Custom Animations
Tailwind config includes custom keyframes and animations (fade-in, fade-in-up, scale-in) used throughout landing page sections for smooth entrance effects.
