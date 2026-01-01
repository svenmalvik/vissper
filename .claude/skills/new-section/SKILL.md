---
allowed-tools: Read, Write, Edit, Glob
description: Create a new landing page section component following project conventions
---

# Create New Landing Page Section

Create a new section component for the Vissper landing page.

**Usage**: `/new-section <SectionName>`

## Component Template

1. **Create Component File**: `src/components/<SectionName>.tsx`

2. **Follow Project Patterns**:
   - Use TypeScript with proper types
   - Import from `@/components/ui/` for UI primitives
   - Use Tailwind CSS for styling
   - Include entrance animations (fade-in, fade-in-up)
   - Support dark mode with appropriate color classes

3. **Standard Structure**:
```tsx
const SectionName = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
          Section Title
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Content here */}
        </div>
      </div>
    </section>
  );
};

export default SectionName;
```

4. **Common UI Components Used**:
   - `Card`, `CardHeader`, `CardContent` for feature cards
   - `Button` for CTAs
   - `Badge` for labels/tags
   - Icons from `lucide-react`

5. **Add to Index.tsx**:
   - Import the new component
   - Add it in the appropriate position in the page flow

## Design Guidelines
- Use primary color (`text-primary`) for accents
- Use `glass` or `glass-dark` classes for card backgrounds
- Include proper responsive breakpoints (sm, md, lg, xl)
- Add hover states for interactive elements

If no section name is provided, ask the user what section they want to create.
