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
- [x] ~~Investigate `useMemo` SSR error~~ — Fixed. Root cause: `ssr.optimizeDeps.include` pre-bundled MUI/Emotion packages with esbuild, which inlined their own copy of React, causing dual-React hook errors. Fix: add all `@emotion/*` and `@mui/*` packages to `ssr.optimizeDeps.include` so they share deps, and add `resolve.dedupe: ['react', 'react-dom']` to force a single React copy.
- [x] ~~Emotion/MUI critical CSS extraction~~ — No action needed. Emotion already inlines 47+ `<style>` tags (~39KB) during streaming SSR.
- [x] ~~Deployment infrastructure~~ — Dockerfile created and verified. Remaining: CI/CD pipeline, ECS provisioning, DNS cutover.
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

**Fix:** Add `ssr.optimizeDeps.include` in `vite.config.ts` to pre-bundle all MUI/Emotion packages for SSR, plus `resolve.dedupe` to prevent dual-React:

```ts
resolve: {
  dedupe: ['react', 'react-dom'],
},
ssr: {
  noExternal: [/^@mui\//, /^@emotion\//],
  optimizeDeps: {
    include: ['@emotion/*', '@mui/*'],
  },
}
```

**Important:** If only `@mui/icons-material` is included (not the full set), esbuild inlines its own React copy into the pre-bundle, causing dual-React hook errors. Including all `@mui/*` and `@emotion/*` packages together, combined with `resolve.dedupe`, ensures a single React instance.

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

### P3.5 — Wire Emotion/MUI critical CSS extraction (COMPLETE — no action needed)

Emotion's default SSR behavior already handles this. During `renderToPipeableStream`, Emotion
injects `<style data-emotion="css ...">` tags inline in the HTML, right before the elements
that reference them. The production SSR response contains 47+ inline Emotion style tags (~39KB)
covering all MUI component styles. Non-Emotion CSS (CSS modules, plain CSS) is loaded via
`<link rel="stylesheet">` tags in `<head>`, which block rendering per standard browser behavior.

No two-pass Emotion extraction (`CacheProvider` + `extractCriticalToChunks`) is needed.
There is no meaningful FOUC.

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

### P3.9 — Deployment infrastructure (DOCKERFILE COMPLETE)

**Dockerfile created and verified.** The Docker image builds and runs the SSR server correctly.

#### What's done

- **`apps/portals/nf/Dockerfile`** — Multi-stage build:
  - Stage 1 (`build`): `node:22-slim` + Java (for `openapi-generator-cli`), installs full monorepo deps, runs `pnpm nx run nf:build`, then `pnpm deploy --legacy --filter=nf` to create pruned `node_modules`
  - Stage 2 (`production`): `node:22-slim` only — copies build output, server.js, pruned node_modules
- **`.dockerignore`** at monorepo root — excludes `node_modules`, build outputs, `.nx` cache, `.git`, etc.
- **`/health` endpoint** added to `server.js` — returns `{"status":"ok"}` for ALB health checks
- **`HEALTHCHECK`** instruction in Dockerfile — uses `/health` endpoint
- **Non-root user** (`appuser`) for security
- **Image size:** ~909MB (includes full `node_modules` for runtime deps)

#### Build and run

```bash
# From monorepo root:
docker build -f apps/portals/nf/Dockerfile -t nf-portal .
docker run -p 3001:3001 nf-portal

# With custom env:
docker run -p 3001:3001 -e PORT=8080 nf-portal
```

#### Build arguments (Vite env vars, baked in at build time)

| Arg                       | Default                                          | Description         |
| ------------------------- | ------------------------------------------------ | ------------------- |
| `VITE_PORTAL_NAME`        | `NF Data Portal`                                 | Portal display name |
| `VITE_PORTAL_DESCRIPTION` | `Exploring the neurofibromatosis data landscape` | Meta description    |
| `VITE_PORTAL_KEY`         | `nf`                                             | Portal key          |

#### Verified Docker SSR output

| Page                            | `<title>`                      | JSON-LD     | Emotion CSS |
| ------------------------------- | ------------------------------ | ----------- | ----------- |
| `/`                             | NF Data Portal                 | DataCatalog | Yes         |
| `/Explore/Studies/syn2343195`   | Synodos NF2 \| NF Data Portal  | —           | Yes         |
| `/Explore/Datasets/syn31802704` | Trial Run... \| NF Data Portal | Croissant   | Yes         |
| `/Explore/Studies/syn99999999`  | NF Data Portal (fallback)      | —           | Yes         |

#### Caching strategy (implemented in `server.js`)

| Path                                   | Cache behavior                          |
| -------------------------------------- | --------------------------------------- |
| `/assets/*`                            | Immutable, 1 year (Vite content hashes) |
| Static resources (favicon, etc.)       | 1 hour                                  |
| Pre-rendered pages (`/`, `/Explore/*`) | Served from static files, 1 hour        |
| SSR routes (detail pages)              | No explicit cache header (default)      |

#### Remaining for production launch

- [ ] CI/CD workflow to build and push Docker image to ECR
- [ ] ECS/Fargate service + ALB provisioning (infra team)
- [ ] DNS cutover from S3/CloudFront to ALB
- [ ] CloudFront in front of ALB for edge caching (optional)

### P3.10 — Investigate `useMemo` SSR error (COMPLETE)

**Root cause:** `ssr.optimizeDeps.include` with only `@mui/icons-material` caused esbuild to pre-bundle that package with its own inlined copy of React. When the SSR runtime resolved `react` from the pre-bundled `@mui/icons-material` bundle, it got a different React instance than the one used by `react-dom/server`, causing the null hook dispatcher error (`useMemo`/`useContext` of null).

**Fix:** Two changes in `vite.config.ts`:

1. Broadened `ssr.optimizeDeps.include` to `['@emotion/*', '@mui/*']` so all MUI/Emotion packages are pre-bundled together and share dependencies.
2. Added `resolve.dedupe: ['react', 'react-dom']` to force all imports (including from pre-bundled SSR deps) to resolve to a single copy of React.

Both dev and production servers now have clean logs with no hook errors.

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
- [x] No `useMemo` SSR error in server logs
- [x] Dockerfile builds and runs SSR server correctly (remaining: CI/CD + infra provisioning + DNS)
- [x] MUI styles are present in the SSR response (no FOUC) — Emotion inlines 47+ style tags (~39KB) during streaming SSR
