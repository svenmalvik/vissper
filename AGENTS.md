# Repository Guidelines

## Project Structure & Module Organization
The Vite + React + TypeScript app lives in `src/`. Shared UI sits in `src/components`, feature hooks in `src/hooks`, reusable helpers in `src/lib`, and route-level views under `src/pages`. Static assets (icons, audio, copy decks) belong in `src/assets` or the `public/` root when they must be served verbatim. Build and lint configuration files are located at the repository root.

## Build, Test, and Development Commands
- `npm install` installs all dependencies; rerun after pulling UI kit updates.
- `npm run dev` starts the Vite dev server with hot reload at `http://localhost:5173`.
- `npm run build` creates the production bundle consumed by the GitHub Pages workflow.
- `npm run build:dev` compiles with the development flag to mimic the Lovable preview environment.
- `npm run preview` serves the built `dist/` folder for smoke tests.
- `npm run lint` runs ESLint across the TypeScript and React sources before committing.

## Coding Style & Naming Conventions
Use TypeScript with strict typing and favor React function components. Keep two-space indentation and double quotes for imports to match the current codebase. Components and files exported from `src/components` and `src/pages` use `PascalCase`, hooks use `camelCase` with a `use` prefix, and utility modules in `src/lib` use `camelCase`. Tailwind utility strings should progress layout ➜ spacing ➜ color ➜ effects. Run `npm run lint` before committing.

## Testing Guidelines
Automated testing is not yet wired in; new contributions should introduce Vitest plus React Testing Library where sensible. Place specs alongside the code as `Component.test.tsx` or in `src/__tests__/`. Target critical user flows (recording, transcription, summary) and document coverage expectations in the PR. Until a dedicated test script is added, manually vet changes via `npm run dev` and capture UI regressions with screenshots or screen recordings.

## Commit & Pull Request Guidelines
Recent commits follow short, imperative summaries (e.g., “Add QR code to waiting list section”). Keep the first line under ~70 characters, reference issues with `Closes #123`, and batch related changes together. For pull requests, include a concise summary, testing notes, production impact, and screenshots or GIFs for UI updates. Flag any config changes (router basename, deployment settings) so reviewers can verify GitHub Pages still resolves correctly.

## Deployment Notes
GitHub Pages deploys from the `main` branch build output. The router’s `basename` switches between `/` and `/vissper`; avoid hard-coding absolute paths and test both the custom domain and the GitHub Pages path before merging.
