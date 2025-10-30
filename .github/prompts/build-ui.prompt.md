---
mode: agent
description: 'Generate a new React component given a Figma design, following Synapse code conventions.'
---

# Create a New UI Component

Create a new component that exactly matches the provided Figma design.
Focus on structure, correct file placement, and accuracy of the design.

# Text

Copy all visible text exactly as shown in the design (punctuation, capitalization, spacing, and line breaks).
Do not paraphrase, summarize, or alter the text in any way.

# Typography

**For each text element:**

# Code Conventions

1. Analyze the layout, typography (including font weight), spacing, background colors, and interactions visible in the image
2. Use the component structure, file placement, and styling conventions shown in the examples below.
3. When creating new components, use MUI components (such as `<Box>`, `<Stack>`, etc.) directly instead of HTML elements like `<div>`, whenever a `className` or style is present or for layout purposes.
   - Use MUI `<Box>` for elements with a `className` or style.
   - Use MUI `<Stack>` for vertical or horizontal layouts.
   - Only use raw HTML elements if no MUI equivalent exists.
4. **All new components must be functional components using the arrow function syntax:**

   ```tsx
   const StatContainer = () => (
   	 // ...component JSX...
   )

   export default StatContainer
   ```

   - Do not use class components.
   - Use named props for clarity.
   - See the example above for structure.

Do not use `React.FC`, just use the arrow function syntax as shown above.

## Examples

### Portal-Specific Components

Refer to **ChallengeMetrics** for structure, file placement, and export conventions.

- Location: `apps/synapse-portal-framework/src/components/<portal-name>/<ComponentName>/`
- Two files: `<ComponentName>.tsx` and `<ComponentName>.module.scss`
- Export via `apps/synapse-portal-framework/src/components/index.ts` using the import pattern seen in the file.

**Example:**

- `apps/synapse-portal-framework/src/components/challenges/ChallengeMetrics/ChallengeMetrics.tsx`
- `apps/synapse-portal-framework/src/components/challenges/ChallengeMetrics/ChallengeMetrics.module.scss`

### Generic Components

Refer to **ShareThisPage** for structure, file placement, and export conventions.

- Location: `packages/synapse-react-client/src/components/<ComponentName>/`
- Four files: `<ComponentName>.tsx`, `<ComponentName>.module.scss`, `<ComponentName>.stories.tsx`, and `index.ts`
- Export using named and default exports in `index.ts`.

**Example:**

- `packages/synapse-react-client/src/components/ShareThisPage/ShareThisPage.tsx`
- `packages/synapse-react-client/src/components/ShareThisPage/ShareThisPage.module.scss`
- `packages/synapse-react-client/src/components/ShareThisPage/ShareThisPage.stories.tsx`
- `packages/synapse-react-client/src/components/ShareThisPage/index.ts`

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
