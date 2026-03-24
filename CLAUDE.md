# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Overview

This is a **pnpm + Nx monorepo** for Sage Bionetworks' Synapse web applications. Key packages:

- `packages/synapse-react-client` — Main React component library, published to npm as `synapse-react-client`
- `packages/synapse-client` — REST API client generated from the Synapse OpenAPI spec
- `packages/synapse-types` — TypeScript type definitions for the Synapse API
- `packages/vite-config` — Shared Vite/Vitest config builder used by all packages
- `apps/synapse-portal-framework` — Shared library for data portals
- `apps/portals/` — 14 individual data portal apps (adknowledgeportal, nf, genie, etc.)
- `apps/SageAccountWeb` — User account management app
- `apps/synapse-oauth-signin` — OAuth2/OIDC authentication app
- `apps/portals-e2e` — Playwright E2E tests for data portal apps

**Dependency order:** `synapse-types` → `synapse-client` → `synapse-react-client` → portal apps

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

Runtime theming uses CSS variables prefixed `--synapse-*` (e.g., `--synapse-primary-action-color`). Sass compile-time functions (`color.adjust`, `color.mix`) cannot use CSS vars—use hardcoded values there. Global variables are defined in `_cssVariables.scss`.

### Nx Caching & Build Order

Nx enforces that all `^build` dependencies run before `test`, `lint`, `type-check`, or `dev` targets. This means dependencies must be built before you can run tests or the dev server in a downstream package.

### TypeScript

All projects extend `shared/tsconfig.base.json` (strict mode). The root `tsconfig.json` contains project references for all packages. Build artifacts output to each package's `dist/` directory.

### Pre-commit Hooks

Husky runs ESLint + Prettier (via lint-staged) on staged files before each commit.

## Requirements

- **Node:** >= 22, < 23
- **pnpm:** >= 10.16.0
