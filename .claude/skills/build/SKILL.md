---
allowed-tools: Bash(npm run build:*), Bash(npm run lint:*)
description: Build the project for production with TypeScript and ESLint checks
---

# Production Build

Execute a complete production build:

1. **Lint Check**: Run `npm run lint` first to catch any code issues
2. **Production Build**: Run `npm run build` to create optimized production bundle

**Build Details**:
- Output directory: `dist/`
- Minification and tree-shaking enabled
- Code splitting for optimal loading
- Assets are hashed for cache busting

**If linting fails**:
- Review the errors shown
- Fix any critical issues before building
- Use `--fix` flag for auto-fixable issues if needed

**After successful build**:
- Preview locally with `npm run preview`
- The `dist/` folder is ready for deployment
- GitHub Actions will auto-deploy on push to `main`

Execute the build now and report any issues.
