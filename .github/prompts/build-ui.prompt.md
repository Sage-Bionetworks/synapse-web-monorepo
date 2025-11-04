---
mode: agent
description: 'Generate a new React component given a Figma design, following Synapse code conventions.'
---

# Create a New UI Component

Create a new component that exactly matches the provided Figma design.
Focus on structure, correct file placement, and accuracy of the design.

# Code Conventions

- Analyze the layout, typography (including font weight), spacing, background colors, and interactions visible in the image.
- Use MUI components (`Box`, `Stack`, `Typography`, `Button`, etc.) for all layout, structure, and typography. Do not use raw HTML elements unless no MUI equivalent exists.
- Define explicit prop types and interfaces for all props, even if the component is not generic.
- Use minimal, named props; define data within the component unless generic/reusable.
- Use arrow function syntax for all components. Do not use class components or `React.FC`.
- Export components as default, and use named exports for subcomponents if needed.
- Use SCSS modules for styling, following BEM-style naming and leveraging SRC variables.
- Implement responsive design using SRC breakpoints.
- Do not add any styling, features, or UI elements that are not present in the design image.

```tsx
const StatContainer = () => (
  // ...component JSX...
)

export default StatContainer
```

- Do not use class components.
- Use named props for clarity.
- See the example above for structure.

## Examples

### Portal-Specific Components

- Location: `apps/synapse-portal-framework/src/components/<portal-name>/<ComponentName>/`
- Two files: `<ComponentName>.tsx` and `<ComponentName>.module.scss`
- Export via `apps/synapse-portal-framework/src/components/index.ts` using the import pattern seen in the file.

### Generic Components

- Location: `packages/synapse-react-client/src/components/<ComponentName>/`
- Four files: `<ComponentName>.tsx`, `<ComponentName>.module.scss`, `<ComponentName>.stories.tsx`, and `index.ts`
- Export using named and default exports in `index.ts`.

## File Guidelines

- Use minimal props; define data within the component unless generic/reusable.
- Use MUI components and icons as shown in the design.
- Use SCSS modules for styling, following BEM-style naming and leveraging SRC variables.
- For breakpoints, use the `$breakpoints` map from SRCVariables.
- Do not add any styling, features, or UI elements that are not present in the design image.

## Output Checklist

**For portal-specific components:**

- ✅ Create `<ComponentName>.tsx`
- ✅ Create `<ComponentName>.module.scss`
- ✅ Update `apps/synapse-portal-framework/src/components/index.ts` with export
- ✅ Output complete file paths for all created/modified files

**For generic components:**

- ✅ Create `<ComponentName>.tsx`
- ✅ Create `<ComponentName>.module.scss`
- ✅ Create `<ComponentName>.stories.tsx`
- ✅ Create `index.ts`
- ✅ Output complete file paths for all created files

## Style Rules

- Only use variables defined in SRC or imported SCSS files.
- Use class names that match selectors in `.tsx` file.
- Use BEM-style naming (e.g., `.UserProfileCard`, `.UserProfileCard__header`).
- Leverage SASS variables and CSS variables from `SrcVariables` instead of hard-coded values.
- For buttons, use MUI `<Button>` and icons, matching variant, color, and placement as shown in Figma.

# Text

Copy all visible text exactly as shown in the design (punctuation, capitalization, spacing, and line breaks).
Do not paraphrase, summarize, or alter the text in any way.

**SCSS/CSS Variable Imports for Generic Components:**

- For generic components, import shared style variables from the file:
  ```
  packages/synapse-react-client/src/style/abstracts/_variables.scss
  ```
- In your SCSS module, use the following import statement:
  ```scss
  @use '../../style/abstracts/variables' as SrcVariables;
  @use 'sass:map';
  ```
  (Adjust the relative path as needed based on your component’s location.)
- Reference breakpoints with `map.get(SrcVariables.$breakpoints, 'breakpointName')`.
