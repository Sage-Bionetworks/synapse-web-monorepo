# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Overview

This is a **pnpm + Nx monorepo** for Sage Bionetworks' Synapse web applications. Key packages:

- `packages/synapse-react-client` — Main React component library, published to npm as `synapse-react-client`
- `packages/synapse-client` — REST API client and TypeScript types generated from the Synapse OpenAPI spec
- `packages/synapse-types` — Legacy TypeScript type definitions for the Synapse API (prefer using synapse-client over synapse-types)
- `packages/vite-config` — Shared Vite/Vitest config builder used by all packages
- `apps/synapse-portal-framework` — Shared library for data portals
- `apps/portals/` — 14 individual data portal apps (adknowledgeportal, nf, genie, etc.)
- `apps/SageAccountWeb` — User account management app
- `apps/synapse-oauth-signin` — OAuth2/OIDC authentication app
- `apps/portals-e2e` — Playwright E2E tests for data portal apps

**Dependency order:** `synapse-client` → `synapse-react-client` → `synapse-portal-framework` → portal apps

## Commands

### Root-level (runs across all packages via Nx)

```bash
pnpm build          # Build all packages
pnpm lint           # Lint all packages
pnpm test           # Test all packages with coverage
pnpm type-check     # TypeScript type-check all packages
pnpm clean          # Remove build artifacts
```

### Nx-targeted commands (preferred for development)

```bash
# Run a specific target in one package
pnpm nx run synapse-react-client:test
pnpm nx run synapse-react-client:build
pnpm nx run SageAccountWeb:start        # Dev server

# Only run against packages changed since main (fast CI mode)
pnpm nx affected --target=test --base=remotes/origin/main
```

### Running a single test file

```bash
# From the package directory
cd packages/synapse-react-client
pnpm test DataGrid.test.tsx

# Or with filter from root
pnpm --filter synapse-react-client test DataGrid.test.tsx
```

### Storybook (synapse-react-client)

```bash
cd packages/synapse-react-client
pnpm start
```

### Regenerate synapse-client from OpenAPI spec

```bash
cd packages/synapse-client
pnpm get-spec:prod   # or get-spec:staging
pnpm generate
pnpm build
```

## Architecture

### Test Setup

Tests use **Vitest** with jsdom. Each package has a `vite.config.ts` that uses the shared `ConfigBuilder` from `packages/vite-config`. Test setup files are at `src/testutils/vitest.setup.ts` (synapse-react-client) and `src/vitest.setup.ts` (synapse-client).

Coverage reports are written to `./coverage/report/index.html`.

### Vite Config Pattern

All packages compose their Vite config using `ConfigBuilder`:

```typescript
import { ConfigBuilder } from '@sage-bionetworks/vite-config'

const config = new ConfigBuilder()
  .setIncludeVitestConfig(true)
  .setIncludeReactConfig(true)
  .setIncludeLibraryConfig(true, { except: ['...external deps...'] })
  .build()
```

### CSS/Theming

Prefer using SCSS module files. Runtime theming uses CSS variables prefixed `--synapse-*` (e.g., `--synapse-primary-action-color`). Sass compile-time functions (`color.adjust`, `color.mix`) cannot use CSS vars—use hardcoded values there. Global variables are defined in `_cssVariables.scss`.

### Nx Caching & Build Order

Nx enforces that all `^build` dependencies run before `test`, `lint`, `type-check`, or `dev` targets. This means dependencies must be built before you can run tests or the dev server in a downstream package.

### TypeScript

All projects extend `shared/tsconfig.base.json` (strict mode). The root `tsconfig.json` contains project references for all packages. Build artifacts output to each package's `dist/` directory.

### Pre-commit Hooks

Husky runs ESLint + oxfmt (via lint-staged) on staged files before each commit.

## Comments

Default to no comment. Code should be self-explanatory through clear naming and structure; a comment is a last resort for genuinely non-obvious intent — a subtle invariant, a workaround for external behavior, or a "why this and not the obvious thing" that the code can't express on its own. Never comment to restate what the code does, and don't narrate routine logic. It is always useful to document regex patterns - i.e. what they are intended to match. When in doubt, leave it out. 
Never write "historical context" comments in a refactor — e.g. `// previously this used X`, `// changed from the old approach`, `// no longer does Y`. Once a PR merges, the old behavior is irrelevant and lives in git history. Comment what the code does now, not what it used to do.

## Code review norms

Recurring expectations from this repo's PR review history. Following them up front avoids review churn — reviewers ask for these repeatedly.

### Tests

- New components, hooks, and bug fixes get tests. A fix should include a test that captures the bug; a new behavior should include a test that exercises it (e.g. "add a test that the button is hidden when `canDelete` is false").
- **Query priority (React Testing Library): prefer accessible queries — `getByRole`, `getByText`, `getByLabelText` — over `data-testid`.** Find banners, buttons, etc. by `role`; it's more robust and higher priority. Add a `data-testid` only when there's no accessible query, and delete test IDs that are no longer used.
- For data-driven logic, prefer exhaustive tests that fail when a new case is added (e.g. iterate every `EntityType` and assert no throw) rather than spot-checking one value.
- Don't stub `fetch` directly — mock at the network layer with MSW. Group Storybook MSW handlers as `Record<string, HttpHandler[]>` so a story can override one group.

### Storybook

- New components and new visual states get a Storybook story — do **not** commit throwaway demo HTML or one-off pages for visual testing. Demonstrate states (loading / empty / error, or different data like DUO values) with MSW mock responses.

### React patterns

- Prefer the `key` prop to reset component state instead of a `useEffect` that watches a prop and resets.
- Run post-action logic in a callback, not an effect — e.g. a react-query mutation's `onSuccess`, not a `useEffect` watching the result.
- Memoize objects passed to query hooks or children so references are stable across renders (`useMemo` for request objects) — don't build a new object inline on every render.
- A `useQuery` result's `data` is possibly `undefined`; handle the loading/undefined state, don't assume it's always present. Handle loading and error states explicitly by using the `isLoading`, and `error` values returned by `useQuery`.
- `import React from 'react'` is unnecessary (automatic JSX runtime).

### Types & the generated client

- Use the generated type guards (e.g. `instanceOfOAuthIdentityProvider`) from `@sage-bionetworks/synapse-client` rather than hand-writing type-guard helpers.
- Prefer using the generated enums/values when possible. Some components use the legacy manually-maintained types in `@sage-bionetworks/synapse-types`. Use these only when necessary for compatibility.

### Reuse over duplication

- Before adding a helper, component, or route, check whether one already exists and reuse it (e.g. `displayToast`, existing `parseX`/`href` helpers, shared routes). Reviewers frequently flag duplicated functions and components.
- If a new component would closely duplicate an existing one (e.g. another plot like `SynapsePlot`), extend the existing component to cover the missing case rather than forking a near-copy.
- Extract repeated style declarations into an SCSS module class (preferred) or a shared `SxProps` constant (MUI-only) instead of copy-pasting them.

### Constants over hardcoded values

- Pull magic numbers, repeated strings, and limits into named constants, and reference the **same** constant from both the component and its tests so they can't drift. Keep a single source of truth for repeated theme values.
- Hardcoding is acceptable when there's genuinely no variation yet — don't over-parameterize prematurely. But hardcode _deliberately_: make the source obvious, and be wary of hardcoding data (counts, stats, page content) that a reader would expect to be query- or config-driven, and be ready to say where a value comes from.

### Accessibility

- Icon-only buttons need an `aria-label` or a MUI `Tooltip`; use MUI `IconButton` for interactive command-bar buttons.
- Interactive non-button elements need `role` + `tabIndex={0}`.
- For MUI `Select`, set/reference the `labelId` from the component (MUI a11y wants this direction).
- Decorative images may use blank `alt`.

### Module boundaries

- No circular dependencies — the Vite (Rolldown) build is strict and will fail on cycles. Break a cycle by moving the shared constant/type into a neutral module.
- Avoid referencing, creating, or extending barrel files unless necessary.

### PR hygiene

- Reference the Jira ticket in the branch, PR title, and commit subject (`PORTALS-XXXX`, `SWC-XXXX`). Track follow-up or out-of-scope work in a new ticket instead of growing the PR.
- When you fix something or adopt a convention, apply it consistently across every file the change touches — not just the first instance a reviewer points at.
- Don't leave `console.*`, commented-out code, or other dead code in the diff.

### Process & ownership

- Whoever submits a change owns it going forward: maintainers will ask you to address future issues found in components you add or change, and to coordinate any required production updates. Factor this in before adding or expanding scope.

## Requirements

- **Node:** >= 22, < 23
- **pnpm:** >= 10.16.0
