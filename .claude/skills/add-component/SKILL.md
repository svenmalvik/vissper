---
allowed-tools: Bash(npx shadcn@latest:*), Read, Glob, Edit
description: Add a new shadcn-ui component to the project
---

# Add shadcn-ui Component

Add a new component from the shadcn-ui library.

**Usage**: `/add-component <component-name>`

1. **Install Component**: Run `npx shadcn@latest add <component-name>`
   - Components are installed to `src/components/ui/`
   - Dependencies are automatically added to package.json

2. **Available Components** (commonly used):
   - `button`, `card`, `dialog`, `dropdown-menu`
   - `form`, `input`, `label`, `select`, `textarea`
   - `table`, `tabs`, `toast`, `tooltip`
   - `avatar`, `badge`, `calendar`, `checkbox`
   - `command`, `popover`, `sheet`, `skeleton`

3. **After Installation**:
   - Import using: `import { ComponentName } from "@/components/ui/component-name"`
   - Components use Tailwind CSS and Radix UI primitives
   - Customize styles in the component file or via className props

**Configuration**: See `components.json` for shadcn-ui settings (default style, slate base color, CSS variables enabled).

**Example**:
```bash
npx shadcn@latest add accordion
```

If no component name is provided in the arguments, ask the user which component they want to add.
