# Figma → Code Design Token Mappings

When implementing a Figma design in this repo, prefer semantic tokens over hardcoded hex values. Use the authoritative source files below to look up the correct token — do not copy hex values from a static table in this file, as those go stale.

## How to Approach Figma-to-Code Translation

1. Look up colors in the authoritative sources below (global first, then package- or portal-specific). This applies whether you're working in `synapse-react-client`, `synapse-portal-framework`, a portal app, or any other package in the monorepo.
2. Match Figma text styles to the nearest MUI Typography variant by font size and weight. If no variant is an exact match, use the closest semantically correct one and override only the differing property (e.g. `lineHeight`) at the call site. Do not add new variants to `Typography.ts`.
3. Prefer MUI components (`Typography`, `Button`, `Chip`, `TextField`, etc.) when an existing component is a reasonable match — even if a couple of `sx` overrides or style tweaks are needed. Staying within MUI keeps components consistently themed and easier to maintain. Only fall back to plain `div` or `span` when no MUI component is a reasonable fit.
4. When applying Figma styles, only override what is meaningfully different from MUI defaults. Skip granular details (e.g. exact `letterSpacing`, `fontSize` within a point or two, `borderRadius` that is already pill-shaped) where the default is close enough. Pixel-perfect fidelity is not the goal — design intent is. If a Figma value deviates enough that it would be noticeable without the override, apply it; otherwise leave it to the theme.
5. Prefer SCSS module files for styles. CSS vars (`var(--synapse-*)`, portal-specific vars) belong in `.module.scss` files. Use the `sx` prop sparingly for one-off overrides that are directly tied to MUI theme values.
6. When Figma outputs an image asset for what looks like an icon (a URL in a `const imgX = "..."` at the top of the generated code), always fetch the node screenshot with `get_screenshot` before implementing — the color is baked into the image and won't appear in the generated CSS. Use the screenshot to identify both the icon's shape and color, then substitute an MUI icon if one matches closely. Never commit Figma asset URLs — they expire after 7 days. Do not add new icon packages; MUI Icons (`@mui/icons-material`) is the standard.

---

## Authoritative Token Sources

### Global tokens

Read these files to discover the current canonical values — do not rely on cached hex values in this document.

- **CSS custom properties** — `packages/synapse-react-client/src/style/abstracts/_cssVariables.scss`

  - Grey scale: `--synapse-gray-100` through `--synapse-gray-1000`
  - Status colors: `--synapse-info`, `--synapse-success`, `--synapse-warning`, `--synapse-error`
  - Semantic action colors: `--synapse-primary-action-color`, `--synapse-secondary-action-color`, `--synapse-tertiary-action-color`
  - Primary/secondary/tertiary palette scales: `--synapse-primary-100` through `--synapse-primary-900`, etc.

- **MUI palette** — `packages/synapse-react-client/src/theme/palette/Palettes.ts`

  - Default palette (`palette`) with primary, secondary, tertiary, grey, and status colors
  - Portal-specific palettes named `<portalName>Palette` (e.g. `adKnowledgePortalPalette`)

- **Typography variants** — `packages/synapse-react-client/src/theme/typography/Typography.ts`
  - All custom variants are defined here: `headline1`–`headline3`, `body1`, `body2`, `breadcrumb1`/`2`, `smallText1`/`2`, `smallLink`, `buttonLink`, `label`, `hintText`, `sectionTitle`, `subsectionHeader`, `dataFieldKey`, `monospace`

### Portal-specific tokens

For a portal at `apps/portals/<portalName>/`, read:

1. `src/config/paletteConfig.ts` — which named palette the portal uses
2. `src/config/style/_variable_overrides.scss` — overrides for `--synapse-primary-action-color` and `--synapse-secondary-action-color`
3. `src/config/style/_style_overrides.scss` — any portal-unique CSS custom properties defined in `:root { }` (e.g. `--adkp-accent-color`, `--adkp-button-gradient`)

Always use these named variables rather than their underlying hex values.

---

## Typography

Read `Typography.ts` and pick the variant that best matches the Figma style's font size and semantic role. If the line-height or weight doesn't match exactly, override only that property rather than picking a less-appropriate variant.

In a SCSS module:

```scss
.bodyText {
  // uses smallText1 styles from theme; override only what differs
  line-height: 21px;
}
```

The Figma style named **"Portals Body Copy"** corresponds to `smallText1` (14px / Regular).

---

## Styling Approach

- SCSS modules are preferred. Use `var(--synapse-*)` and portal-specific CSS vars inside `.module.scss` files.
- The `sx` prop is appropriate for one-off MUI theme-aware overrides (e.g. `sx={{ color: 'text.primary' }}`), but not as a general substitute for a SCSS module.
- See the CLAUDE.md in `synapse-react-client` for the full styling conventions.
