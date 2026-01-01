---
allowed-tools: Bash(npm run build:*), Bash(npm run preview:*), mcp__plugin_playwright_playwright__browser_navigate, mcp__plugin_playwright_playwright__browser_take_screenshot
description: Build and preview the production version locally
---

# Preview Production Build

Build the project and preview the production version locally.

## Workflow

1. **Build for Production**:
   - Run `npm run build` to create optimized bundle
   - Wait for build to complete successfully

2. **Start Preview Server**:
   - Run `npm run preview` to serve the `dist/` folder
   - Server typically runs on port 4173

3. **Verify in Browser**:
   - Navigate to the preview URL
   - Take screenshots to verify the build looks correct

4. **Check Key Aspects**:
   - All assets loading correctly (images, fonts)
   - Routing works (test navigation to /download, /privacy)
   - No console errors
   - Performance feels snappy

## Production Differences from Dev
- Code is minified and optimized
- Source maps are production-ready
- No HMR or dev warnings
- Lovable tagger is disabled
- Cache headers are optimized

## Deployment Info
After verifying the preview:
- Push to `main` branch triggers auto-deployment
- GitHub Actions runs the build
- Deploys to GitHub Pages at https://svenmalvik.github.io/vissper/
- Custom domain: https://vissper.com

Execute the build and preview workflow now.
