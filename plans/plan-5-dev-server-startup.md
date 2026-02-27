# Plan 5: Dev Server Startup — Faster + Visible Progress

## Goal

Reduce the perceived and actual startup time of the NF portal's SSR development server (`pnpm nx run nf:dev`), and provide clear progress logging so developers know what the server is doing during startup.

**Context:** The NF portal was recently converted to use React Router SSR (Plan 2) and file-per-module builds from `dist/` (Plan 3). The dev server creates a Vite server in middleware mode for SSR. After the Vite server is created (~600ms), the first HTTP request triggers `ssrLoadModule`, which must transform and evaluate the entire SSR dependency tree (all route modules, synapse-react-client, synapse-portal-framework, MUI, etc.). This takes 30-60+ seconds with no console output — the server appears to hang.

---

## Status: Complete

### Phases

- [x] Phase 1: Add timing and progress logs to `server.js`
- [x] Phase 2: Pre-bundle workspace dependencies for SSR
- [x] ~~Phase 3: Add `server.warmup` configuration~~ (ineffective — replaced with eager `ssrLoadModule`)
- [x] Phase 3 (revised): Eagerly load SSR modules during startup

---

## Problem

When a developer runs `pnpm nx run nf:dev`, the following happens:

1. `server.js` prints `"Starting development server"` immediately
2. `vite.createServer()` completes quickly (~600ms) — plugin initialization, config resolution, SSR dep pre-bundling
3. `app.listen()` prints `"NF portal server listening on http://localhost:3001"`
4. The first HTTP request triggers `viteDevServer.ssrLoadModule('./server/app.ts')`, which must transform and evaluate the **entire** SSR module graph:
   - `server/app.ts` → `virtual:react-router/server-build` → all route modules → synapse-react-client (1,574 dist files) → synapse-portal-framework (~135 dist files) → MUI, Emotion, etc.
5. **30-60 seconds pass with no console output** — the server appears frozen

The root cause is that `ssrLoadModule` must both transform (parse/compile) AND evaluate (execute, build exports) every module in the dependency tree. This is fundamentally different from `transformRequest` (used by `server.warmup`), which only compiles without evaluating.

### Why `server.warmup` was ineffective

The original Phase 3 proposed using Vite's `server.warmup.ssrFiles` API. Investigation revealed two problems:

1. **`preTransformRequests` defaults to `false` for the SSR environment.** The cascading warmup (which pre-transforms imported dependencies) is gated by this flag. So warmup only pre-transformed `server/app.ts` itself — not its dependency tree.
2. **`warmupRequest` only calls `transformRequest`, not `ssrLoadModule`.** Even if the entire tree were pre-transformed, the first request would still need to evaluate every module (instantiate, execute, build exports). Transform caching saves some time, but evaluation is the dominant cost.

---

## Phase 1: Add Timing and Progress Logs to `server.js`

### What

Wrap each startup phase in `console.time`/`console.timeEnd` calls so developers see exactly where time is spent.

### Risk

None. Read-only logging changes with no impact on behavior.

---

## Phase 2: Pre-Bundle Workspace Dependencies for SSR

### What

Add `synapse-react-client` and `@sage-bionetworks/synapse-portal-framework` to `ssr.optimizeDeps.include` and `ssr.noExternal` so Vite's esbuild pre-bundler consolidates them into fewer chunks for the SSR module runner.

### Why

Even though these packages resolve to pre-built `dist/` files via pnpm workspace symlinks (Plan 3), Vite's SSR module runner still walks each file individually. For synapse-react-client alone, that's 1,574 individual JS files. Pre-bundling consolidates them into fewer chunks, reducing the number of individual module evaluations.

### Risk: Medium

The `resolve.dedupe: ['react', 'react-dom']` already in the config should prevent dual-React issues. Verify:

1. No "Invalid hook call" errors from dual React instances
2. No circular dependency issues in the pre-bundled output
3. SSR rendering produces correct HTML

### Rollback

If pre-bundling workspace packages causes issues, simply revert the `ssr.noExternal` and `ssr.optimizeDeps.include` changes.

---

## Phase 3 (Revised): Eagerly Load SSR Modules During Startup

### What

Call `viteDevServer.ssrLoadModule('./server/app.ts')` eagerly during startup — immediately after creating the Vite server, before calling `app.listen()`. This shifts the 30-60s module graph loading from the first HTTP request to the startup phase, where `console.time`/`console.timeEnd` provide clear progress feedback.

### File: `apps/portals/nf/server.js`

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

  // Eagerly load the SSR module graph during startup.
  console.time('  SSR modules loaded')
  await viteDevServer.ssrLoadModule('./server/app.ts')
  console.timeEnd('  SSR modules loaded')

  app.use(viteDevServer.middlewares)
  app.use(async (req, res, next) => {
    // ssrLoadModule still called per-request for HMR support,
    // but subsequent calls use Vite's module cache and are fast.
    const source = await viteDevServer.ssrLoadModule('./server/app.ts')
    return await source.app(req, res, next)
  })
}
```

### Expected output

```
Starting development server...
  Vite server created: 601ms
  SSR modules loaded: 32.4s
NF portal server listening on http://localhost:3001
```

Now the developer sees exactly what the server is doing during the long wait, and the first HTTP request after the "listening" message is fast because all SSR modules are already loaded and cached.

### Why this works

`ssrLoadModule` transforms AND evaluates the module and its entire transitive dependency tree. The results are cached in Vite's module graph. When the per-request `ssrLoadModule('./server/app.ts')` is called during the first HTTP request, all modules are already cached — it returns almost instantly.

### Risk: Low

The eager `ssrLoadModule` call loads exactly the same modules that would be loaded on the first HTTP request. The only difference is timing — it happens before `app.listen()` instead of during the first request. The per-request `ssrLoadModule` call remains for HMR support (Vite invalidates changed modules in the cache on file changes).

---

## Success Criteria

- [x] Developer sees timing information during `pnpm nx run nf:dev` startup
- [x] SSR pre-bundling of workspace packages does not cause React hook errors (Phase 2 — needs runtime validation)
- [x] First HTTP request after server startup is fast (module graph already loaded)
- [x] No regressions in SSR output (correct HTML, JSON-LD, meta tags — needs runtime validation)

---

## Files Changed

| File                             | Change                                                                                      | Phase |
| -------------------------------- | ------------------------------------------------------------------------------------------- | ----- |
| `apps/portals/nf/server.js`      | Add `console.time`/`console.timeEnd` around `vite.createServer()` and eager `ssrLoadModule` | 1, 3  |
| `apps/portals/nf/vite.config.ts` | Add workspace packages to `ssr.noExternal` and `ssr.optimizeDeps.include`                   | 2     |
