---
allowed-tools: Bash(npm run dev:*), mcp__plugin_playwright_playwright__browser_navigate, mcp__plugin_playwright_playwright__browser_snapshot, mcp__plugin_playwright_playwright__browser_take_screenshot, mcp__plugin_playwright_playwright__browser_resize, mcp__plugin_playwright_playwright__browser_click, mcp__plugin_playwright_playwright__browser_close
description: Check the visual design and layout using Playwright browser automation
---

# Design Check with Playwright

Perform a visual design review of the Vissper landing page using Playwright.

## Workflow

1. **Start Dev Server** (if not running):
   - Run `npm run dev` in the background
   - Wait for server to be ready on port 8080

2. **Navigate to Page**:
   - Open `http://localhost:8080` in browser
   - Take initial viewport screenshot

3. **Desktop View Check**:
   - Resize browser to 1920x1080 (desktop)
   - Take a snapshot to analyze the accessibility tree
   - Take screenshot of the full page
   - Check: Hero section, navigation, CTA buttons, feature sections

4. **Tablet View Check**:
   - Resize to 768x1024 (tablet)
   - Take snapshot and screenshot
   - Verify responsive layout adjustments

5. **Mobile View Check**:
   - Resize to 375x812 (iPhone X)
   - Take snapshot and screenshot
   - Verify mobile menu, stacking, touch targets

6. **Dark Mode Check** (if applicable):
   - Toggle dark mode
   - Take screenshots in dark theme
   - Verify color contrast and readability

7. **Interactive Elements**:
   - Hover over buttons and links
   - Check dropdown menus
   - Verify all CTAs are clickable

8. **Report Findings**:
   - Summarize visual consistency
   - Note any layout issues
   - Check text readability
   - Verify image loading
   - Report any broken elements

## Key Areas to Review
- Hero section gradient and text contrast
- Feature cards alignment and spacing
- Footer layout and links
- Animation smoothness (fade-in effects)
- Button styling consistency
- Typography hierarchy

After checking, provide a detailed report of the design status with any issues found.
