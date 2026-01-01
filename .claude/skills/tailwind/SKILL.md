---
allowed-tools: Read, Grep, Glob
description: Look up Tailwind CSS classes and custom utilities defined in this project
---

# Tailwind CSS Reference

Look up Tailwind CSS classes and custom utilities for this project.

## Custom CSS Utilities (from src/index.css)

**Glass Effects**:
- `.glass` - Glassmorphism with backdrop blur
- `.glass-dark` - Dark variant with transparency

**Gradients**:
- `.gradient-hero` - Primary to accent gradient
- `.gradient-mesh` - Radial gradient mesh background

**Shadows**:
- `.shadow-glow` - Glowing shadow effect
- `.shadow-card` - Subtle card shadow

**Transitions**:
- `.transition-smooth` - Smooth all-property transition

## Custom Animations (from tailwind.config.ts)

- `animate-fade-in` - 0.6s fade in with translateY
- `animate-fade-in-up` - 0.5s shorter fade in up
- `animate-scale-in` - 0.4s zoom effect
- `animate-accordion-down` / `animate-accordion-up` - Radix accordion

## Color Palette

**Primary**: Purple `#8B5CF6` (use `text-primary`, `bg-primary`)
**Accent**: Cyan `#06B6D4` (use `text-accent`, `bg-accent`)

**CSS Variables** (HSL format in :root):
- `--primary`, `--secondary`, `--accent`
- `--background`, `--foreground`
- `--card`, `--card-foreground`
- `--muted`, `--muted-foreground`
- `--destructive`, `--border`, `--ring`

## Common Patterns in This Project

**Section Layout**:
```
py-20 px-4 md:px-8 bg-background
max-w-6xl mx-auto
```

**Responsive Grid**:
```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
```

**Heading Style**:
```
text-3xl md:text-4xl font-bold text-center mb-12
```

**Card Hover**:
```
hover:shadow-lg transition-shadow duration-300
```

When asked about a specific class, look it up and provide usage examples from the codebase.
