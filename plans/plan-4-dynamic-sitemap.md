# Plan 4: Dynamic SSR Sitemap

## Goal

Replace the build-time sitemap generation pipeline with a server-side **React Router resource route** that generates the sitemap on-demand. This ensures the sitemap always reflects current Synapse data (new datasets, studies, tools, etc.) without requiring a redeploy.

**This plan requires [Plan 2](./plan-2-true-ssr.md) to be complete first.** The NF portal must be running in SSR mode with React Router Framework Mode.

---

## Status: Not Started

---

## Background

### Current sitemap pipeline (build-time)

The NF portal's sitemap is generated during `pnpm build` via a multi-step pipeline:

1. `vite build --config sitemap.vite.config.ts` compiles `src/sitemap/entry.ts` into `build/sitemap-entry.mjs`, which imports the legacy `routesConfig.tsx` and uses a Vite plugin (`stubModulesPlugin`) to replace React/component imports with no-op Proxies
2. `node build/sitemap-entry.mjs` runs the compiled script to extract route paths into `build/sitemap-routes.json` (~30 static routes)
3. `tsx synapse-portal-framework/src/sitemap/cli.ts` reads the static routes JSON and the portal's `sitemapConfig.ts`, queries Synapse tables anonymously to fetch resource IDs, and writes `build/sitemap.xml`

### Problems with the current approach

1. **Staleness** — The sitemap is frozen at build time. When new datasets, studies, or tools are added to Synapse, the sitemap doesn't reflect them until the next deploy.
2. **Serving bug** — The sitemap is written to `build/sitemap.xml`, but the Express production server only serves static files from `build/client/`. The sitemap is unreachable at runtime.
3. **Legacy dependency** — The sitemap extraction imports from `routesConfig.tsx` (the legacy `RouteObject[]`-based route config), not the active Framework Mode `routes.ts`. This creates maintenance burden — two route configs must be kept in sync.
4. **Build complexity** — A separate Vite config (`sitemap.vite.config.ts`), a custom `stubModulesPlugin`, and a multi-step build script chain add CI time and cognitive overhead.

### Approach: Resource route with stale-while-revalidate caching

A React Router [resource route](https://reactrouter.com/how-to/resource-routes) at `/sitemap.xml` that:

- Exports only a `loader` (no default component export) — returns `application/xml`
- Extracts static route paths from the React Router `ServerBuild.routes` manifest at runtime (no separate build step)
- Queries Synapse tables for dynamic resource IDs using the existing `fetchResourceIds()` utility
- Caches the generated sitemap XML in memory with a 24-hour TTL
- Uses stale-while-revalidate: always returns a cached sitemap instantly, kicks off background regeneration when the TTL expires
- On cold start: returns a static-only sitemap immediately (fast, ~30 routes), starts full generation in the background

---

## Risk Mitigations (investigate first)

Before implementing, validate these assumptions. If any fail, revisit the plan.

### R1. `virtual:react-router/server-build` is importable from a resource route loader

The resource route's `loader` runs server-side. We need to import the server build module to access `ServerBuild.routes`. The `virtual:react-router/server-build` module is a Vite virtual module resolved by `@react-router/dev`. Verify:

- In **dev mode**: Does `import('virtual:react-router/server-build')` work inside a route `loader`?
- In **production**: The virtual module is compiled into `build/server/index.js`. Does the import resolve correctly at runtime?
- **Fallback**: If the virtual import doesn't work from a loader, we can import the built module directly from `build/server/index.js`, or pass the build object through `AppLoadContext` from `server/app.ts`.

**How to test**: Create a minimal resource route that imports the server build and returns `JSON.stringify(Object.keys(build.routes))`. Hit it in dev and prod modes.

### R2. Extracting full route paths from `ServerBuild.routes`

`ServerBuild.routes` is a flat `Record<string, { id, parentId, path?, index?, module }>`. Each entry has only its path **segment** (e.g., `"Studies"`), not the full URL path (e.g., `/Explore/Studies`). We need to walk the `parentId` chain to reconstruct full paths.

**Verify**: Write the path reconstruction utility and confirm it produces the same output as the existing `flattenRoutePaths()` from `extractRoutes.ts` (which operates on `RouteObject[]`). Compare against the known `build/sitemap-routes.json` for the NF portal.

### R3. `fetchResourceIds()` works at runtime in the SSR server process

The existing `fetchResourceIds()` creates an anonymous `SynapseClient` and makes HTTP requests to `https://repo-prod.prod.sagebase.org`. Verify it works when called from within a React Router loader (Node.js runtime), not just from a standalone CLI script.

**How to test**: Import and call `fetchResourceIds()` in a test resource route loader.

### R4. React Router resource route serves `/sitemap.xml` correctly

React Router Framework Mode derives route paths from file names. The file `src/pages/sitemap[.xml].ts` should map to the URL path `/sitemap.xml` — but the bracket notation and dots may not work as expected. Alternatively, an explicit path can be set in `routes.ts`:

```ts
route('sitemap.xml', 'pages/sitemap.ts')
```

**Verify**: Confirm that a request to `http://localhost:3001/sitemap.xml` hits the resource route's `loader`.

### R5. Pre-rendered static files don't shadow the resource route

The Express production server has `express.static('build/client', { maxAge: '1h' })` **before** the React Router handler. If a `sitemap.xml` file exists in `build/client/` (e.g., from a stale build or accidental copy), it would shadow the resource route.

**Verify**: Ensure no `sitemap.xml` exists in `build/client/` after the build, and that the Express middleware order allows the resource route to handle `/sitemap.xml`.

---

## Implementation

### Step 1: Validate risk mitigations (R1–R5)

Create a throwaway resource route to validate R1–R5. This should be done first before any other implementation work. If any risk fails, update this plan.

### Step 2: Create route path extraction utility

Create a new function in `synapse-portal-framework/src/sitemap/` that extracts static route paths from a `ServerBuild.routes` manifest. This replaces `flattenRoutePaths()` (which operates on `RouteObject[]`) with a version that operates on the flat server manifest.

**File**: `synapse-portal-framework/src/sitemap/extractRoutesFromManifest.ts`

```ts
import type { ServerBuild } from 'react-router'

type ServerRouteManifest = ServerBuild['routes']

/**
 * Reconstructs full URL paths from the flat ServerBuild.routes manifest.
 *
 * Each entry in the manifest has only its path segment and a parentId.
 * This function walks the parentId chain to build full paths, then filters
 * out parameterized routes (:param) and wildcards (*) — the same logic
 * as flattenRoutePaths() but for the server manifest format.
 */
export function extractStaticRoutePaths(routes: ServerRouteManifest): string[] {
  // Walk parentId chains, filter :param and *, deduplicate
}
```

**Unit test**: Compare output against the known `build/sitemap-routes.json` for the NF portal.

### Step 3: Create the sitemap resource route

**File**: `apps/portals/nf/src/pages/sitemap.ts`

Resource route (loader only, no default component export):

```ts
import type { Route } from './+types/sitemap'

const BASE_URL = 'https://nf.synapse.org'
const TTL_MS = 24 * 60 * 60 * 1000 // 24 hours

let cache: { xml: string; generatedAt: number } | null = null
let regenerating = false

export async function loader(_args: Route.LoaderArgs) {
  // 1. If cached and fresh → return immediately
  // 2. If cached but stale → return stale, trigger background regen
  // 3. If no cache → generate static-only sitemap, return it, trigger full regen
}
```

The loader:

1. Imports the server build to extract static routes (via the utility from Step 2)
2. Imports `sitemapConfig` from `src/config/sitemapConfig.ts`
3. Uses `generateStaticUrls()`, `generateDynamicUrls()`, `generateSitemapXml()` from the portal framework
4. Returns `new Response(xml, { headers: { 'Content-Type': 'application/xml' } })`

### Step 4: Register the route in `routes.ts`

Add the sitemap route **outside** the `PortalRoot` layout (it doesn't need the React app shell):

```ts
export default [
  route('sitemap.xml', 'pages/sitemap.ts'),
  layout('pages/PortalRoot.tsx', [
    // ... existing routes
  ]),
] satisfies RouteConfig
```

### Step 5: Remove the build-time sitemap pipeline

- Remove `pnpm run generate-sitemap` from the `build` script in `package.json`
- Remove the `build-sitemap-routes`, `_generate-sitemap`, `generate-sitemap` scripts
- Delete `apps/portals/nf/sitemap.vite.config.ts`
- Delete `apps/portals/nf/src/sitemap/entry.ts`

### Step 6: Clean up `routesConfig.tsx` usage

`routesConfig.tsx` is imported in 3 places:

| File                       | Usage                                                       | Action                                                                                                                                   |
| -------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/sitemap/entry.ts`     | Sitemap extraction                                          | Removed in Step 5                                                                                                                        |
| `src/index.tsx`            | Legacy SPA entry point (`createRoot` + `Portal` component)  | Verify dead code (not referenced by `vite.config.ts` or Framework Mode); delete if safe                                                  |
| `src/pages/PortalRoot.tsx` | Passes `routes` to `PortalContextProvider` as `routeConfig` | No consumer reads `routeConfig` from context in SSR mode; remove import, pass `[]` or make `routeConfig` optional in `PortalContextType` |

After removing all consumers, delete `src/config/routesConfig.tsx`.

**Note**: Making `routeConfig` optional in `PortalContextType` affects the portal framework. Other portals still using SPA mode may depend on it. If so, keep it required and pass `[]` from `PortalRoot.tsx`.

### Step 7: Update Dockerfile

Update the comment on line 68 that references "sitemap" in the build output. No functional changes needed — the sitemap is now served by the SSR server, not as a static file.

### Step 8: Tests

- Unit test `extractStaticRoutePaths()` (Step 2) — compare against known NF portal routes
- Unit test the sitemap loader's caching behavior (mock `fetchResourceIds`)
- Verify `pnpm build` succeeds without the sitemap pipeline step
- Verify `pnpm start` serves `/sitemap.xml` correctly (manual integration test)
- Verify all existing tests still pass

---

## Design Decisions

### Why a resource route instead of an Express endpoint?

A resource route participates in React Router's request handling pipeline, benefits from the same middleware chain, and is colocated with the app's route tree. An Express endpoint in `server.js` would work but is outside the React Router lifecycle and wouldn't benefit from framework-level features like middleware (if added later).

### Why stale-while-revalidate instead of on-demand generation?

Sitemap generation takes several minutes (due to paginated Synapse table queries). Blocking a request for minutes is unacceptable. Stale-while-revalidate ensures:

- Every request gets a response in milliseconds
- The sitemap is refreshed in the background
- Search crawlers always get a complete (if slightly stale) sitemap

### Why 24-hour TTL?

Search engine crawlers typically re-fetch sitemaps at most once per day. A 24-hour TTL is a good balance between freshness and Synapse API load. The TTL can be tuned later.

### Why extract routes from `ServerBuild.routes` instead of hardcoding?

Hardcoding the ~30 static routes would be simpler but creates another place to update when routes change. Extracting from the server manifest keeps the sitemap automatically in sync with the route tree — if a route is added to `routes.ts`, it appears in the sitemap without any additional work.

### Why module-level cache instead of a file or external store?

The sitemap XML for the NF portal is small (<1MB). Module-level variables persist for the lifetime of the Node.js process. This is the simplest approach that works. If the portal is deployed to multiple instances, each maintains its own cache — this is fine since sitemap generation is idempotent and the Synapse API load is minimal (one set of queries per instance per day).

---

## File Changes Summary

| File                                                                     | Action                                                      |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `synapse-portal-framework/src/sitemap/extractRoutesFromManifest.ts`      | **Create** — extract static paths from `ServerBuild.routes` |
| `synapse-portal-framework/src/sitemap/extractRoutesFromManifest.test.ts` | **Create** — unit tests                                     |
| `synapse-portal-framework/src/sitemap/index.ts`                          | **Edit** — re-export new utility                            |
| `apps/portals/nf/src/pages/sitemap.ts`                                   | **Create** — resource route with loader                     |
| `apps/portals/nf/src/routes.ts`                                          | **Edit** — add `route('sitemap.xml', 'pages/sitemap.ts')`   |
| `apps/portals/nf/package.json`                                           | **Edit** — remove sitemap build scripts                     |
| `apps/portals/nf/sitemap.vite.config.ts`                                 | **Delete**                                                  |
| `apps/portals/nf/src/sitemap/entry.ts`                                   | **Delete**                                                  |
| `apps/portals/nf/src/index.tsx`                                          | **Delete** (if confirmed dead code)                         |
| `apps/portals/nf/src/config/routesConfig.tsx`                            | **Delete** (after removing all consumers)                   |
| `apps/portals/nf/src/pages/PortalRoot.tsx`                               | **Edit** — remove `routesConfig` import                     |
| `apps/portals/nf/Dockerfile`                                             | **Edit** — update comment                                   |

---

## Success Criteria

- [ ] `curl http://localhost:3001/sitemap.xml` returns valid XML with both static and dynamic URLs
- [ ] Sitemap includes dynamically-fetched resource IDs from Synapse tables (datasets, studies, tools, etc.)
- [ ] Subsequent requests return cached sitemap in <100ms
- [ ] After 24 hours, a request triggers background regeneration while still returning the cached version
- [ ] Cold start returns a static-only sitemap immediately, with full sitemap available after background generation completes
- [ ] `pnpm build` succeeds without the sitemap pipeline step (no `generate-sitemap`)
- [ ] `routesConfig.tsx` is deleted (no legacy route config)
- [ ] All existing tests pass
- [ ] The sitemap route is not pre-rendered (handled dynamically by SSR server)
