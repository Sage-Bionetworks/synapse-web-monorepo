# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run from the `packages/synapse-react-client` directory (or use `pnpm nx run synapse-react-client:<script>` from the monorepo root):

```bash
pnpm test                                        # Run all tests (Vitest, interactive watch mode)
pnpm test run                                    # Run all tests once (non-interactive)
pnpm test run src/components/Foo/Foo.test.tsx    # Run a single test file once
pnpm test run src/features/entity/metadata-task  # Run all tests under a directory once
pnpm test --reporter=verbose                     # Run with verbose output (watch mode)
pnpm build                                       # Build the library (Vite + tsc + copy assets)
pnpm start                                       # Run Storybook dev server on port 6060
pnpm lint                                        # Oxlint
pnpm type-check                                  # TypeScript type check
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
  style/            Legacy global SCSS (prefer CSS Modules in new components)
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

1. `src/synapse-client/` — raw async functions calling the REST API (legacy; prefer the generated client instead)
2. `src/synapse-queries/` — TanStack Query hooks (`useQuery`, `useMutation`, `useInfiniteQuery`) per domain (entity, user, table, etc.)

**Preferred pattern**: Call the generated `@sage-bionetworks/synapse-client` directly inside hooks rather than adding new functions to `src/synapse-client/`. The `src/synapse-client/` layer is legacy and should not be extended.

Cache keys are centralized in `src/synapse-queries/KeyFactory.ts`.

### Testing approach

- **Framework**: Vitest + Testing Library (`@testing-library/react`)
- **API mocking**: MSW (Mock Service Worker) via `src/mocks/msw/server.ts` and per-domain handlers in `src/mocks/msw/handlers/`
  - **Importing `@/mocks/msw/server` is what turns MSW on for a test file.** The module registers `beforeAll(server.listen)`, `afterEach(server.resetHandlers)` and `afterAll(server.close)` as a side effect, so test files must NOT add their own `server.listen()` / `resetHandlers()` / `restoreHandlers()` / `close()` hooks (a second `listen()` throws `Invariant Violation: ... cannot configure an already enabled network`). A test that needs the network mocked but doesn't call `server.use` itself still needs the side-effect import: `import '@/mocks/msw/server'`.
  - The server is deliberately not started from `vitest.setup.ts`: that would load every handler and fixture for every test file, including the many that never touch the network.
  - The server runs with `onUnhandledRequest: 'error'`, so a request with no matching handler fails the test. Add a default handler under `src/mocks/msw/handlers/` (preferred when other tests will need it) or register one with `server.use(...)`.
  - Handlers are reset after every test, so `server.use(...)` overrides apply to a single test. Register overrides in the test or in `beforeEach`, never in `beforeAll` or at module scope, where they would be dropped after the first test.
  - If a test replaces a module with `vi.mock` that the shared handlers also import, use a partial mock (`vi.mock(import('...'), async importOriginal => ({ ...(await importOriginal()), ... }))`) so the handlers keep working.
  - Default handler paths must match an operation in the Synapse OpenAPI spec (method and templated path); a handler with a path that doesn't exist silently matches nothing.
- **Test wrapper**: Use `createWrapper()` or `createWrapperAndQueryClient()` from `src/testutils/TestingLibraryUtils.tsx` to render components with proper context and an isolated query cache
- **Hook state mocking**: Don't mock TanStack Query hooks' return values. Run the real hooks inside `createWrapper()` and mock the network with `server.use(...)` (MSW). Faking hook results couples tests to TanStack's result types, which change often. Only mock a hook module when the hook isn't a data-fetching query (e.g. it wraps browser file uploads), and return only the fields the code under test reads
- Test files live co-located with source: `src/components/Foo/Foo.test.tsx`

### Styling

- Primary: MUI v7 with custom theme in `src/theme/`
- Secondary: CSS Modules (`*.module.scss`) with simple camelCase class names (e.g., `.searchField`, `.portalCard`)
  - BEM naming (`ComponentName__element`) is legacy — CSS Modules provide scoping, so BEM is unnecessary
  - Prefer simple descriptive names over BEM structure in new components
  - Never `@use`/`@import` `style/abstracts/_cssVariables` (or anything that emits a `:root`/selector block) from a `*.module.scss`. Doing so copies the default `--synapse-*` values into the code-split module CSS, which loads after a portal's theme override and silently reverts it. Modules should reference tokens with `var(--synapse-*)` and only `@use` side-effect-free partials (`abstracts/variables`, `abstracts/mixins`, `sass:*`).
- Do not add to `src/style/base/_core.scss` — it is legacy and scheduled for removal

### Exposing new components

- To expose via the main npm package: export from `src/components/index.ts` → `src/index.ts`
- To expose to SWC (GWT): export from `src/SWC.index.ts`
- Each component should have its own folder under `src/components/` with an `index.ts` re-exporting its public API
