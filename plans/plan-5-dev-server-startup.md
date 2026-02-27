# Plan 5: Dev Server Startup — Faster + Visible Progress

## Goal

Reduce the perceived and actual startup time of the NF portal's SSR development server (`pnpm nx run nf:dev`), and provide clear progress logging so developers know what the server is doing during startup.

**Context:** The NF portal was recently converted to use React Router SSR (Plan 2) and file-per-module builds from `dist/` (Plan 3). The dev server creates a Vite server in middleware mode for SSR, which involves significant upfront work (SSR dependency pre-bundling, plugin initialization, module graph construction). During this time, there is no console output — the server appears to hang.

---

## Status: Not Started

### Phases

- [ ] Phase 1: Add timing and progress logs to `server.js`
- [ ] Phase 2: Pre-bundle workspace dependencies for SSR
- [ ] Phase 3: Add `server.warmup` configuration

---

## Problem

When a developer runs `pnpm nx run nf:dev`, the following happens:

1. `server.js` prints `"Starting development server"` immediately
2. `vite.createServer()` is called, which:
   - Initializes all plugins (reactRouter, nodePolyfills, tsconfigPaths, svgr)
   - `vite-tsconfig-paths` crawls all `tsconfig.json` files in the monorepo to build resolver maps
   - esbuild pre-bundles `@mui/*` and `@emotion/*` for SSR (configured in `ssr.optimizeDeps.include`)
   - Prepares the SSR module runner
3. `app.listen()` prints `"NF portal server listening on http://localhost:3001"`
4. The first HTTP request triggers SSR module loading: Vite walks all imported modules from `server/app.ts` through the dependency chain

Between steps 1 and 3, there is **no console output** — the server appears frozen for 10-30+ seconds depending on cache state.

Additionally, even after the server is listening, the **first HTTP request** is slow because Vite lazily resolves and transforms SSR modules. The workspace packages (`synapse-react-client` with 1,574 dist files, `synapse-portal-framework` with ~135 dist files) are resolved one file at a time through Vite's SSR module runner.

---

## Phase 1: Add Timing and Progress Logs to `server.js`

### What

Wrap each startup phase in `console.time`/`console.timeEnd` calls so developers see exactly where time is spent.

### File: `apps/portals/nf/server.js`

**Before:**

```js
if (DEVELOPMENT) {
  console.log('Starting development server')
  const viteDevServer = await import('vite').then(vite =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  )
  app.use(viteDevServer.middlewares)
  app.use(async (req, res, next) => {
    // ...
  })
}
```

**After:**

```js
if (DEVELOPMENT) {
  console.log('Starting development server...')
  console.time('  Vite server created')
  const viteDevServer = await import('vite').then(vite =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  )
  console.timeEnd('  Vite server created')
  app.use(viteDevServer.middlewares)
  app.use(async (req, res, next) => {
    // ...
  })
}
```

### Expected output

```
Starting development server...
  Vite server created: 8.2s
NF portal server listening on http://localhost:3001
```

### Risk

None. Read-only logging changes with no impact on behavior.

---

## Phase 2: Pre-Bundle Workspace Dependencies for SSR

### What

Add `synapse-react-client` and `@sage-bionetworks/synapse-portal-framework` to `ssr.optimizeDeps.include` so Vite's esbuild pre-bundler consolidates them into fewer chunks for the SSR module runner.

### Why

Even though these packages resolve to pre-built `dist/` files via pnpm workspace symlinks (Plan 3), Vite's SSR module runner still walks each file individually during the first request. For synapse-react-client alone, that's 1,574 individual JS files. Pre-bundling consolidates them into fewer chunks, reducing the number of individual module evaluations.

The same approach already mitigates the `@mui/icons-material` barrel import problem (13,000+ re-exports) — extending it to workspace packages follows the same pattern.

### File: `apps/portals/nf/vite.config.ts`

**Before:**

```ts
ssr: {
  noExternal: [/^@mui\//, /^@emotion\//],
  optimizeDeps: {
    include: ['@emotion/*', '@mui/*'],
  },
},
```

**After:**

```ts
ssr: {
  noExternal: [
    /^@mui\//,
    /^@emotion\//,
    /^synapse-react-client/,
    /^@sage-bionetworks\/synapse-portal-framework/,
  ],
  optimizeDeps: {
    include: [
      '@emotion/*',
      '@mui/*',
      'synapse-react-client',
      '@sage-bionetworks/synapse-portal-framework',
    ],
  },
},
```

**Note:** Adding the packages to `noExternal` (in addition to `include`) tells Vite to bundle them into the SSR output rather than leaving them as external `import` statements. This is required for `optimizeDeps.include` to take effect — Vite only pre-bundles packages that are not externalized.

### Risk: Medium

The `resolve.dedupe: ['react', 'react-dom']` already in the config should prevent dual-React issues (the same problem we encountered with MUI pre-bundling, documented in Plan 2 section P3.10). However, workspace packages have more complex dependency trees than MUI, so we need to verify:

1. No "Invalid hook call" errors from dual React instances
2. No circular dependency issues in the pre-bundled output
3. SSR rendering produces correct HTML (compare with current output)

### Validation

```bash
pnpm nx run nf:dev
# Wait for server to start, then:
curl -s http://localhost:3001/ | head -50  # Check for rendered HTML
curl -s http://localhost:3001/Explore/Studies | head -50
# Check terminal for any React hook errors or SSR warnings
```

### Rollback

If pre-bundling workspace packages causes issues, simply revert the `ssr.noExternal` and `ssr.optimizeDeps.include` changes. The config is isolated to the NF portal's vite.config.ts.

---

## Phase 3: Add `server.warmup` Configuration

### What

Use Vite's `server.warmup` API to proactively transform the SSR entry module during server startup, rather than waiting for the first HTTP request.

### Why

After `vite.createServer()` completes, the Vite dev server is listening but has not yet loaded any SSR modules. The first HTTP request triggers a cascade of module resolution and transformation:

```
server/app.ts
  → virtual:react-router/server-build
    → src/root.tsx
    → src/routes.ts
      → all 50+ route page modules
        → synapse-react-client components
        → synapse-portal-framework components
```

This makes the first page load significantly slower than subsequent loads. `server.warmup` front-loads this work.

### File: `apps/portals/nf/vite.config.ts`

**Before:**

```ts
server: { port: 3001 },
```

**After:**

```ts
server: {
  port: 3001,
  warmup: {
    ssrFiles: ['./server/app.ts'],
  },
},
```

### How it works

Vite 5+ supports `server.warmup.ssrFiles` (in addition to `server.warmup.clientFiles`). When specified, Vite calls `server.transformRequest()` or `server.ssrLoadModule()` for each listed file immediately after the server is created, before any HTTP requests arrive. This pre-populates the module graph cache.

Since `server/app.ts` imports `virtual:react-router/server-build`, which in turn imports the route tree, warming up this single file should trigger transformation of the entire SSR dependency chain.

### Risk: Low

`server.warmup` is a documented Vite API (introduced in Vite 5.1). The only concern is:

- Whether it works correctly with `middlewareMode: true` (the NF portal creates Vite in middleware mode, not standalone mode). The warmup should still work since it only calls `transformRequest` internally.
- Whether React Router's virtual modules (`virtual:react-router/server-build`) are available during warmup. They should be, since the `reactRouter()` plugin registers them during the `configResolved` phase, before warmup runs.

### Validation

```bash
# Measure time to first response with and without warmup:
pnpm nx run nf:dev
# Once "listening" message appears:
time curl -s http://localhost:3001/ > /dev/null
```

Compare the `time` output with the warmup config vs. without it (revert and re-test).

---

## Success Criteria

- [ ] Developer sees timing information during `pnpm nx run nf:dev` startup (Phase 1)
- [ ] SSR pre-bundling of workspace packages does not cause React hook errors (Phase 2)
- [ ] First HTTP request after server startup is measurably faster (Phases 2 + 3)
- [ ] No regressions in SSR output (correct HTML, JSON-LD, meta tags)

---

## Files Changed

| File                             | Change                                                                    | Phase |
| -------------------------------- | ------------------------------------------------------------------------- | ----- |
| `apps/portals/nf/server.js`      | Add `console.time`/`console.timeEnd` around `vite.createServer()`         | 1     |
| `apps/portals/nf/vite.config.ts` | Add workspace packages to `ssr.noExternal` and `ssr.optimizeDeps.include` | 2     |
| `apps/portals/nf/vite.config.ts` | Add `server.warmup.ssrFiles` configuration                                | 3     |
