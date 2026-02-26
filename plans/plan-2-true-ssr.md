# Plan 2: True Server-Side Rendering

## Goal

Add per-request server-side rendering to the NF portal. Every HTTP request is handled by a running Node.js process that renders React to HTML, sends it to the browser, and the browser then hydrates the page. This enables:

- Dynamic `<title>`, `<meta name="description">`, and JSON-LD structured data in the initial HTML response
- Croissant (Schema.org Dataset) JSON-LD for dataset detail pages, served in the HTML `<head>`
- DataCatalog JSON-LD for the homepage
- Server-driven HTTP status codes and redirects
- Streaming HTML delivery via `renderToPipeableStream`

**This plan requires [Plan 1](./plan-1-static-prerendering.md) and [Plan 1a](./plan-1a-route-loaders-and-meta.md) to be complete first.** Plan 1 migrates the portal to React Router Framework Mode. Plan 1a adds route-level loaders and `meta()` exports. This plan enables `ssr: true` and adds a Node.js/Express server.

---

## Status: Core SSR Working

The core SSR infrastructure is implemented and verified. The following has been completed:

### Completed

- [x] `react-router.config.ts` set to `ssr: true` with `prerender()` for 10 static routes
- [x] `entry.server.tsx` created — uses `renderToPipeableStream` with bot detection (`isbot`)
- [x] `server/app.ts` created — Express app using `createRequestHandler` from `@react-router/express`
- [x] `server.js` created — Node.js entry point (dev mode with Vite middleware, prod mode with static assets + server build)
- [x] `vite.config.ts` uses `defineConfig(({ isSsrBuild }) => ...)` callback form for conditional SSR entry
- [x] All React Router packages synchronized at `7.13.1`
- [x] `@types/node` added, `tsconfig.json` updated for server files
- [x] Dev server starts and renders pages
- [x] Production build succeeds (client ~21s, SSR ~18s, prerender ~118ms)
- [x] Production server starts and serves requests
- [x] All tests pass (SRC: 2950, portal-framework: 55, NF type-check: clean)

### Verified SSR Output

| Page                                             | `<title>`                                              | `<meta description>`     | JSON-LD                        |
| ------------------------------------------------ | ------------------------------------------------------ | ------------------------ | ------------------------------ |
| Homepage (`/`)                                   | NF Data Portal                                         | (from OG tags)           | DataCatalog                    |
| Study detail (`/Explore/Studies/syn2343195`)     | Synodos NF2 \| NF Data Portal                          | Full study description   | —                              |
| Dataset detail (`/Explore/Datasets/syn31802704`) | Trial Run HscWT and Hsc45 Proteomics \| NF Data Portal | Full dataset description | Croissant (Schema.org Dataset) |

### Remaining Work

- [ ] Fix `meta()` fallback: when a detail page loader returns null (invalid ID), `meta()` returns `[]` which overrides root defaults, resulting in no `<title>` at all. Should fall back to root defaults.
- [ ] Investigate `useMemo` SSR error: non-fatal `TypeError: Cannot read properties of null (reading 'useMemo')` during SSR render. Doesn't block page rendering but should be fixed for clean logs.
- [ ] Deployment infrastructure (see P3.9 below)
- [ ] Emotion/MUI critical CSS extraction (see P3.5 below) — currently deferred; FOUC acceptable for initial release
- [ ] Auth cookie reading from HTTP request (see P3.6 below) — not needed for SEO; deferred
- [ ] TanStack Query prefetching in loaders (see P3.7 below) — not needed for SEO; deferred

---

## Architecture

### File Structure

```
apps/portals/nf/
├── server.js                  # Node.js entry point (dev/prod modes)
├── server/
│   └── app.ts                 # Express app with createRequestHandler
├── src/
│   ├── root.tsx               # Document shell, <Meta />, default meta()
│   ├── entry.client.tsx       # HydratedRouter entry
│   ├── entry.server.tsx       # SSR with renderToPipeableStream + isbot
│   ├── routes.ts              # RouteConfigEntry[] route tree
│   └── pages/
│       ├── PortalRoot.tsx     # Providers (theme, query client, portal context)
│       ├── RootApp.tsx        # App shell (navbar, footer)
│       ├── HomePage.tsx       # meta() with DataCatalog JSON-LD
│       ├── DatasetDetailsPage.tsx  # loader + meta() with Croissant JSON-LD
│       ├── StudyDetailsPage/      # loader + meta()
│       └── ...                    # Other detail pages with loader + meta()
├── react-router.config.ts     # ssr: true, prerender() for static routes
├── vite.config.ts             # Framework Mode config
└── package.json               # express, @react-router/express, isbot
```

### Request Flow

```
Client request
  → server.js (Express)
    → [dev] Vite middleware → ssrLoadModule('./server/app.ts')
    → [prod] Static assets middleware → server build (build/server/index.js)
      → createRequestHandler (@react-router/express)
        → Route matching → loader() execution → entry.server.tsx handleRequest()
          → renderToPipeableStream(<ServerRouter />)
            → HTML response with <title>, <meta>, JSON-LD, rendered content
```

### Key Dependencies

```
express (^5.2.1)                    # HTTP server
@react-router/express (7.13.1)     # Express adapter for React Router
@react-router/node (7.13.1)        # Node utilities (createReadableStreamFromReadable)
@react-router/dev (7.13.1)         # Framework Mode Vite plugin
react-router (7.13.1)              # Core routing
isbot (^5)                         # Bot detection for SSR strategy
```

---

## Discoveries & Lessons Learned

### 1. `@mui/icons-material` barrel import hangs SSR dev mode

`@mui/icons-material/esm/index.js` has 13,000+ re-exports. Vite's SSR module runner processes each import individually in dev mode, effectively hanging the server.

**Fix:** Add `ssr.optimizeDeps.include` in `vite.config.ts` to pre-bundle MUI packages for SSR:

```ts
ssr: {
  noExternal: [/^@mui\//, /^@emotion\//],
  optimizeDeps: {
    include: ['@mui/icons-material', '@mui/material'],
  },
}
```

### 2. `rollupOptions.input` must be conditional on `isSsrBuild`

Setting `rollupOptions.input: './server/app.ts'` unconditionally causes the client build to fail with "Server-only module referenced by client." The official React Router template uses `defineConfig(({ isSsrBuild }) => ...)` to conditionally set the input.

**Caveat:** vitest's `mergeConfig()` does not support callback-style `defineConfig`. Solution: inline the test config inside the callback return value instead of using `mergeConfig`.

### 3. `virtual:react-router/server-build` must be an explicit entry

When `server/app.ts` dynamically imports `virtual:react-router/server-build`, Rollup treats it as a chunk, not an entry. React Router's `writeBundle` hook expects it as a manifest entry. Fix: provide both as inputs:

```ts
rollupOptions: isSsrBuild
  ? { input: ['./server/app.ts', 'virtual:react-router/server-build'] }
  : undefined,
```

### 4. `@react-router/express` is the Express adapter (not `@react-router/node`)

`@react-router/node` provides Node.js utilities like `createReadableStreamFromReadable`. The Express adapter that exports `createRequestHandler` is `@react-router/express`.

### 5. All React Router packages must be the same version

Version mismatches between `react-router`, `@react-router/dev`, `@react-router/express`, and `@react-router/node` cause subtle issues. Pin all to the same version (currently `7.13.1`).

### 6. Bot detection controls streaming strategy

`entry.server.tsx` uses `isbot` to detect search engine crawlers. Bots get `onAllReady` (wait for full render including Suspense), browsers get `onShellReady` (stream the shell immediately).

### 7. `nodePolyfills()` must be client-only

The `vite-plugin-node-polyfills` plugin injects browser polyfills for Node.js APIs (`fs → memfs`, `stream → stream-browserify`, etc.). These conflict with the SSR environment which uses native Node.js modules. The `clientOnlyPlugin()` wrapper strips the plugin's `config`, `configResolved`, `resolveId`, `load`, and `transform` hooks when `this.environment.name !== 'client'`.

---

## Remaining Phases

### P3.5 — Wire Emotion/MUI critical CSS extraction (DEFERRED)

Without this, SSR responses ship unstyled HTML until client JS applies MUI styles (FOUC). React Router Framework Mode in Vite 7 may handle some CSS extraction automatically via `react-router-critical-css` style tags. Investigate before implementing the manual two-pass Emotion extraction approach.

**Current status:** The production SSR response includes a `<style data-react-router-critical-css="">` tag with extracted CSS (including katex fonts and app styles). MUI/Emotion styles may not be fully captured. FOUC is acceptable for the initial SEO-focused release.

### P3.6 — Read auth cookie from HTTP request in route loaders (DEFERRED)

Not needed for the SEO use case (search crawlers don't have auth cookies). When needed:

1. Read `Cookie` header in a root route `loader`
2. Pass the access token via React Router's `AppLoadContext`
3. Thread it to `ApplicationSessionManager` for server-side authenticated rendering

### P3.7 — TanStack Query prefetching in route loaders (DEFERRED)

Not needed for the SEO use case. When needed:

1. Create a per-request `QueryClient` in the route `loader`
2. `prefetchQuery` the data the page needs
3. `dehydrate(queryClient)` and return in loader data
4. Wrap the route component in `<HydrationBoundary state={dehydratedState}>`

### P3.8 — Fix `meta()` fallback for missing loader data (COMPLETE)

All 6 detail page `meta()` functions now accept a `matches` parameter. When the loader
returns no title (e.g. invalid entity ID), `meta()` falls back to
`matches.flatMap(match => match.meta ?? [])` — inheriting the ancestor route's defaults
(title and description from `root.tsx`). The homepage `meta()` also now includes a
`<meta name="description">` tag sourced from `VITE_PORTAL_DESCRIPTION`.

### P3.9 — Deployment infrastructure

**This is the highest-priority remaining item for production launch.**

Currently: S3 + CloudFront (static files) or Caddy serving static site.

Required for SSR: A running Node.js process that handles HTTP requests.

Options:

| Option                   | Description                                                                    | Effort      |
| ------------------------ | ------------------------------------------------------------------------------ | ----------- |
| **Docker + ECS/Fargate** | Container runs `node server.js`. ALB + CloudFront.                             | Medium      |
| **Lambda + API Gateway** | Bundle SSR handler as Lambda. Use `@react-router/architect` or custom adapter. | Medium-High |
| **Fly.io**               | Deploy Docker container. Simple DX.                                            | Low-Medium  |

**Caching strategy:**

| Path                                   | Cache behavior                                              |
| -------------------------------------- | ----------------------------------------------------------- |
| `/assets/*`                            | Immutable, 1 year (Vite content hashes)                     |
| Static resources (favicon, etc.)       | 1 hour                                                      |
| Pre-rendered pages (`/`, `/Explore/*`) | Serve from static files, 1 hour                             |
| SSR routes (detail pages)              | `no-cache` or short TTL (60s) with `stale-while-revalidate` |

### P3.10 — Investigate `useMemo` SSR error

**Priority:** Low (non-fatal)

`TypeError: Cannot read properties of null (reading 'useMemo')` appears during SSR rendering. The page still renders successfully. This typically indicates a React context issue or a component trying to use hooks outside a valid React tree. Need to identify which component triggers it.

---

## Success Criteria

- [x] `react-router build` produces `build/client/` and `build/server/` directories
- [x] `node apps/portals/nf/server.js` starts and serves requests
- [x] `curl http://localhost:3001/` returns HTML with rendered content (not empty shell)
- [x] `<title>` and `<meta name="description">` are correct in SSR responses for detail pages
- [x] JSON-LD (DataCatalog and Croissant) appears in server-rendered HTML
- [x] Pre-rendered static pages (10 routes) are generated at build time
- [x] All existing tests pass (SRC, portal-framework, type-check)
- [x] `meta()` returns root defaults when loader data is missing
- [ ] No `useMemo` SSR error in server logs
- [ ] Deployment infrastructure is in place and DNS points to SSR server
- [ ] MUI styles are present in the SSR response (no FOUC) — deferred, acceptable for initial release
