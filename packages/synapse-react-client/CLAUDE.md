# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from the `packages/synapse-react-client` directory (or use `pnpm nx run synapse-react-client:<script>` from the monorepo root):

```bash
pnpm test                    # Run all tests (Vitest, interactive watch mode)
pnpm test -- --run           # Run tests once (non-interactive)
pnpm test -- src/components/Foo/Foo.test.tsx   # Run a single test file
pnpm test -- --reporter=verbose                # Run with verbose output
pnpm build                   # Build the library (Vite + tsc + copy assets)
pnpm start                   # Run Storybook dev server on port 6060
pnpm lint                    # ESLint
pnpm type-check              # TypeScript type check
```

## Architecture

### Monorepo context

This package (`synapse-react-client`) lives in a pnpm monorepo. Key sibling packages it depends on:

- `@sage-bionetworks/synapse-client` — auto-generated Synapse REST API client (OpenAPI-derived)
- `@sage-bionetworks/synapse-types` — shared TypeScript types for Synapse data models
- `vite-config` — shared Vite/Vitest configuration

### Two entry points

- **`src/index.ts`** — public ESM library, consumed by portals and external apps
- **`src/SWC.index.ts`** — entry for SynapseWebClient (the GWT-based Java app). Components exported here are lazy-loaded and must account for SWC's excluded dependencies. See `vite.config.ts` for the build setup.

### Source layout

```
src/
  components/       React UI components (one folder per component, with index.ts re-export)
  synapse-queries/  TanStack Query hooks wrapping Synapse API calls (organized by domain)
  synapse-client/   Low-level REST API call functions (thin wrappers over synapse-client package)
  utils/
    context/        React context providers (SynapseContext, FullContextProvider)
    hooks/          Reusable custom hooks
    functions/      Pure utility functions
  theme/            MUI theme definitions and palette
  style/            SCSS stylesheets (BEM methodology)
  mocks/            Mock data and MSW request handlers for tests/Storybook
  testutils/        Test helper utilities (wrappers, custom matchers)
  stories/          Storybook stories
  assets/           SVGs, images
```

### Context system

All components require `SynapseContextProvider` (or the higher-level `FullContextProvider`). The context provides:

- `accessToken` — user's auth token (undefined = unauthenticated)
- `synapseClient` — typed API client instance
- `keyFactory` — react-query cache key factory

`FullContextProvider` additionally wraps `QueryClientProvider` and `ApplicationSessionContextProvider`. Use this in tests via `createWrapper()` from `src/testutils/TestingLibraryUtils.tsx`.

### Data fetching pattern

API calls are organized in two layers:

1. `src/synapse-client/` — raw async functions calling the REST API
2. `src/synapse-queries/` — TanStack Query hooks (`useQuery`, `useMutation`, `useInfiniteQuery`) per domain (entity, user, table, etc.)

Cache keys are centralized in `src/synapse-queries/KeyFactory.ts`.

### Testing approach

- **Framework**: Vitest + Testing Library (`@testing-library/react`)
- **API mocking**: MSW (Mock Service Worker) via `src/mocks/msw/server.ts` and per-domain handlers in `src/mocks/msw/handlers/`
- **Test wrapper**: Use `createWrapper()` or `createWrapperAndQueryClient()` from `src/testutils/TestingLibraryUtils.tsx` to render components with proper context and an isolated query cache
- **Hook state mocking**: Use `getUseQueryMock()` from `src/testutils/ReactQueryMockUtils.ts` when mocking entire hooks rather than intercepting at the network level
- Test files live co-located with source: `src/components/Foo/Foo.test.tsx`

### Styling

- Primary: MUI v7 with custom theme in `src/theme/`
- Secondary: SCSS (`src/style/`, `src/template_style/`) using BEM methodology
  - Top-level block class names are PascalCase (e.g., `UserProfile`)
  - Elements: `ComponentName__element` (e.g., `UserProfile__icon`)
  - Modifiers: `ComponentName--modifier` (e.g., `UserProfile--disabled`)
- Do not add to `src/style/base/_core.scss` — it is legacy and scheduled for removal

### Exposing new components

- To expose via the main npm package: export from `src/components/index.ts` → `src/index.ts`
- To expose to SWC (GWT): export from `src/SWC.index.ts`
- Each component should have its own folder under `src/components/` with an `index.ts` re-exporting its public API
