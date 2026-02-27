# Plan 6: Incremental Dependency Rebuilds for NF Portal Development

## Goal

Provide a fast, incremental rebuild workflow so that changes made in `synapse-react-client` or `synapse-portal-framework` appear in the NF portal dev server without requiring a full manual rebuild of the dependency chain. Decouple the JS build from type-checking so that:

- **JS builds are incremental and fast** — downstream consumers see updated code in seconds
- **Type-checking still happens** — but doesn't block the JS rebuild pipeline

**Context:** With Plan 3 (file-per-module build), the NF portal resolves workspace packages from pre-built `dist/` output instead of raw TypeScript source. This dramatically sped up build and dev server startup times, but introduced a new friction point: any change in a dependency requires a full `pnpm nx run <package>:build` before the portal sees it. The build pipeline for `synapse-react-client` runs three sequential steps (`vite build && tsc -p tsconfig.build.json && pnpm run build:copy-assets`), all of which run from scratch each time.

---

## Status: Not Started

### Phases

- [ ] Phase 1: Add `dev` (JS watch) and `dev:types` (declaration watch) scripts to library packages
- [ ] Phase 2: Handle `emptyOutDir` conflict in watch mode
- [ ] Phase 3: Enable incremental tsc for faster type re-checks
- [ ] Phase 4: Add Nx orchestration target for NF portal
- [ ] Phase 5: Validate and document the workflow

---

## Problem

### Current rebuild workflow

When a developer edits a file in `synapse-react-client` and wants to see the change in the NF portal:

```bash
# Must manually run the full build:
pnpm nx run synapse-react-client:build
# This runs: vite build && tsc -p tsconfig.build.json && pnpm run build:copy-assets
# Takes ~30-60 seconds for SRC's 1,574 source files
```

If the change is in `synapse-portal-framework` (which depends on SRC):

```bash
pnpm nx run synapse-react-client:build
pnpm nx run @sage-bionetworks/synapse-portal-framework:build
```

This is slow and disruptive. The full `vite build` re-processes all 1,441 entry files even when only one file changed. The `tsc` step does a full type-check. The `copyfiles` step re-copies all assets.

### Why live-reload doesn't work

Before Plan 3, `vite-tsconfig-paths` resolved workspace packages to their raw TypeScript source, giving the portal dev server live HMR across package boundaries. Plan 3 intentionally removed this (resolving to `dist/` instead) to speed up dev server startup and production builds. The tradeoff is that changes now require a rebuild.

### The opportunity

Vite supports `vite build --watch`, which uses Rollup's watch mode. While Rollup does a full graph rebuild each time, it caches module transforms — unchanged modules skip the transform pipeline entirely. This makes watch rebuilds significantly faster than cold builds.

TypeScript's `tsc --watch` with `incremental: true` similarly only re-checks changed files and their dependents, rather than the full source tree.

By running these as separate processes, the JS build completes quickly (no type-checking gate) and type errors are reported asynchronously.

---

## Architecture

### Decoupled build pipeline

**Current (sequential, blocking):**

```
vite build ──→ tsc -p tsconfig.build.json ──→ copyfiles
  (JS)              (declarations)              (assets)
  ~30s                  ~15s                      ~2s
```

**Proposed (parallel, non-blocking):**

```
┌─ vite build --watch ──→ emits .js/.js.map to dist/    (incremental, ~2-5s per change)
│
└─ tsc --watch -p tsconfig.build.json ──→ emits .d.ts/.d.ts.map to dist/  (incremental, ~3-8s per change)
```

The two processes write to the same `dist/` directory but produce non-overlapping file types:

- Vite: `.js`, `.js.map`, `.css`
- tsc: `.d.ts`, `.d.ts.map`

The NF portal's Vite dev server only needs the `.js` files for runtime. The `.d.ts` files are used by the IDE for type-checking and by `tsc --build` for downstream type-checks, but they don't affect the running dev server.

### Dependency ordering

```
synapse-react-client:dev (vite build --watch)
synapse-react-client:dev:types (tsc --watch)
    ↓  (writes to dist/)
synapse-portal-framework:dev (vite build --watch)
synapse-portal-framework:dev:types (tsc --watch)
    ↓  (writes to dist/)
NF portal dev server (reads from dist/ via node_modules symlinks)
```

The portal framework's Vite watch will detect changes in SRC's `dist/` (since it resolves SRC from `dist/` via the symlink). However, there may be a propagation delay — Rollup's file watcher needs to detect the change in the symlinked `dist/` directory.

---

## Phase 1: Add Watch Scripts to Library Packages

### synapse-react-client

**File:** `packages/synapse-react-client/package.json`

Add two new scripts:

```json
{
  "scripts": {
    "dev": "vite build --watch --emptyOutDir false",
    "dev:types": "tsc --watch --preserveWatchOutput -p tsconfig.build.json"
    // ...existing scripts unchanged
  }
}
```

### synapse-portal-framework

**File:** `apps/synapse-portal-framework/package.json`

Add two new scripts:

```json
{
  "scripts": {
    "dev": "vite build --watch --emptyOutDir false",
    "dev:types": "tsc --watch --preserveWatchOutput -p tsconfig.build.json"
    // ...existing scripts unchanged
  }
}
```

### Why `--preserveWatchOutput`

By default, `tsc --watch` clears the terminal on each re-check. `--preserveWatchOutput` keeps the full log history, which is important when running alongside other watch processes in the same terminal.

### Why `--emptyOutDir false`

See Phase 2 below.

---

## Phase 2: Handle `emptyOutDir` Conflict in Watch Mode

### Problem

The shared Vite library config (`packages/vite-config/src/vite-library-config.ts`) sets `emptyOutDir: true`. In watch mode, Vite's `prepareOutDir` plugin re-runs on every rebuild and **deletes the entire `dist/` directory** before writing new output. This would delete the `.d.ts` files that `tsc --watch` emitted.

### Solution

Pass `--emptyOutDir false` as a CLI flag in the `dev` script. Vite CLI flags override config file values, so this cleanly disables the directory wipe for watch mode without changing the production build behavior.

```json
"dev": "vite build --watch --emptyOutDir false"
```

**Why this is safe:** In watch mode, the developer has already done an initial full build (via `pnpm nx run <package>:build` or Nx's `dependsOn: ["^build"]`). The `dist/` directory is populated. Subsequent watch rebuilds only need to overwrite changed files, not clean the directory.

**Alternative considered:** Detect `build.watch` in the Vite config and conditionally set `emptyOutDir: false`. This is more implicit and harder to understand than the explicit CLI flag.

---

## Phase 3: Enable Incremental tsc for Faster Type Re-Checks

### Problem

`tsconfig.build.json` in both SRC and portal-framework has `"composite": false` and no `"incremental"` setting. Without incremental mode, `tsc --watch` performs a full type-check of all source files on every change — ~1,441 files for SRC, ~135 files for portal-framework.

### Solution

Add `"incremental": true` to both `tsconfig.build.json` files. This enables tsc to produce a `.tsbuildinfo` file that tracks which files have changed, allowing subsequent re-checks to only process changed files and their dependents.

### File: `packages/synapse-react-client/tsconfig.build.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "emitDeclarationOnly": true,
    "declaration": true,
    "declarationMap": true,
    "composite": false,
    "incremental": true,
    "types": ["vitest/globals"],
    "paths": {
      "@/*": ["./src/*"]
    }
  }
  // ...rest unchanged
}
```

### File: `apps/synapse-portal-framework/tsconfig.build.json`

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist",
    "emitDeclarationOnly": true,
    "declaration": true,
    "declarationMap": true,
    "composite": false,
    "incremental": true
  }
  // ...rest unchanged
}
```

### Side effect

The `incremental` flag causes tsc to write a `.tsbuildinfo` file. Since `outDir` is `./dist`, the file will be written to `dist/tsconfig.build.tsbuildinfo`. This should be added to `.gitignore` if it isn't already covered by a `dist/` ignore rule.

---

## Phase 4: Nx Orchestration Target

### What

Add an Nx target to the NF portal that runs all four watch processes (SRC JS, SRC types, SPF JS, SPF types) in parallel using the `nx:run-commands` executor.

### File: `apps/portals/nf/package.json`

Add to the existing `nx.targets` section:

```json
{
  "nx": {
    "targets": {
      "typegen": {
        /* ...existing */
      },
      "type-check": {
        /* ...existing */
      },
      "dev:deps": {
        "executor": "nx:run-commands",
        "options": {
          "commands": [
            {
              "command": "pnpm nx run synapse-react-client:dev",
              "prefix": "src:js"
            },
            {
              "command": "pnpm nx run synapse-react-client:dev:types",
              "prefix": "src:dts"
            },
            {
              "command": "pnpm nx run @sage-bionetworks/synapse-portal-framework:dev",
              "prefix": "spf:js"
            },
            {
              "command": "pnpm nx run @sage-bionetworks/synapse-portal-framework:dev:types",
              "prefix": "spf:dts"
            }
          ],
          "parallel": true
        }
      }
    }
  }
}
```

### Developer workflow

```bash
# Terminal 1: Start the NF portal dev server (Nx auto-builds all deps first)
pnpm nx run nf:dev

# Terminal 2: Watch and incrementally rebuild all upstream dependencies
pnpm nx run nf:dev:deps
```

The separation into two terminals is intentional:

1. **Terminal 1** (`nf:dev`): Nx's `dependsOn: ["^build"]` ensures a clean initial build of all dependencies before the dev server starts. This is a one-shot operation.
2. **Terminal 2** (`nf:dev:deps`): Starts four long-running watch processes. Changes in SRC or SPF source files trigger incremental rebuilds, writing updated `.js` and `.d.ts` files to their respective `dist/` directories. The NF portal's Vite dev server detects the changed `dist/` files via its file watcher and triggers HMR or a full reload.

### Why not a single terminal?

In Nx 19.7.3, there is no `"continuous": true` flag (introduced in Nx 21+). If we put the watch processes and the dev server in a single `nx:run-commands` target, we can't express that the dev server should wait for `^build` to complete first — the watch processes would start immediately and potentially interfere with the initial build. The two-terminal approach keeps the initial build clean and the watch processes separate.

### Expected output (Terminal 2)

```
[src:js ] watching for file changes...
[src:dts] Starting compilation in watch mode...
[spf:js ] watching for file changes...
[spf:dts] Starting compilation in watch mode...

# After editing a file in SRC:
[src:js ] build started...
[src:js ] ✓ built in 3.2s
[src:dts] File change detected. Starting incremental compilation...
[src:dts] Found 0 errors. Watching for file changes.
```

---

## Phase 5: Validate and Document

### Validation steps

1. **Initial build works:** `pnpm nx run nf:dev` starts successfully (builds all deps, then starts dev server)
2. **Watch JS works:** Edit a component in SRC → `vite build --watch` detects the change → rebuilt `.js` appears in `dist/` → NF portal serves updated code
3. **Watch types works:** Edit a type in SRC → `tsc --watch` detects the change → updated `.d.ts` appears in `dist/` → IDE picks up new types
4. **No file conflicts:** Vite and tsc write to `dist/` simultaneously without overwriting each other's output (`.js` vs `.d.ts`)
5. **Portal picks up changes:** After a watched rebuild, refreshing the NF portal page shows the updated component
6. **Full build still works:** `pnpm nx run synapse-react-client:build` (the original full build script) still works correctly for CI and production

### Known limitations

1. **New/deleted/renamed files require a watch restart.** Vite's `--watch` evaluates the glob entry pattern (`src/**/*.{ts,tsx}`) once at startup. New files added after the watch starts won't be included as top-level entries — though they will be bundled if imported by an existing entry. For most development scenarios (editing existing files), this is not an issue.

2. **No automatic propagation from SRC → SPF → NF.** The SPF watch process will detect changes in SRC's `dist/` via the symlink, but there may be a delay. Rollup's file watcher uses `chokidar` which handles symlinks, but propagation timing is not guaranteed to be instant.

3. **HMR may not work across package boundaries.** When SRC's `dist/` files change, the NF portal's Vite dev server may detect the change but not trigger HMR — it may require a full page reload. This is because Vite's HMR module graph tracks `node_modules` dependencies differently from local source. A full page reload is still much faster than a full rebuild cycle.

4. **The `build:copy-assets` step is not watched.** SRC's build copies CSS, SCSS, and SVG files to `dist/` via `copyfiles`. The `vite build --watch` does not run this step. If a developer modifies an SCSS or SVG file, they need to run `pnpm run build:copy-assets` manually or add a separate file watcher for assets. In practice, asset changes are rare compared to code changes.

---

## Files Changed

| File                                                | Change                                          | Phase |
| --------------------------------------------------- | ----------------------------------------------- | ----- |
| `packages/synapse-react-client/package.json`        | Add `dev` and `dev:types` scripts               | 1     |
| `apps/synapse-portal-framework/package.json`        | Add `dev` and `dev:types` scripts               | 1     |
| `packages/synapse-react-client/tsconfig.build.json` | Add `"incremental": true`                       | 3     |
| `apps/synapse-portal-framework/tsconfig.build.json` | Add `"incremental": true`                       | 3     |
| `apps/portals/nf/package.json`                      | Add `dev:deps` Nx target with `nx:run-commands` | 4     |

---

## Success Criteria

- [ ] `pnpm nx run nf:dev:deps` starts four watch processes (SRC JS, SRC types, SPF JS, SPF types) in a single terminal
- [ ] Editing a `.tsx` file in SRC triggers an incremental Vite rebuild completing in <10 seconds
- [ ] Editing a `.tsx` file in SRC triggers an incremental tsc re-check completing in <15 seconds
- [ ] Updated `.js` files in SRC's `dist/` are picked up by the NF portal dev server (visible after page refresh)
- [ ] Updated `.d.ts` files in SRC's `dist/` are picked up by the IDE for type-checking
- [ ] The original `build` scripts for SRC and SPF are unchanged and continue to work for CI/production
- [ ] `emptyOutDir` is disabled in watch mode, preventing deletion of `.d.ts` files during Vite rebuilds
- [ ] Incremental tsc (`incremental: true`) produces a `.tsbuildinfo` file and subsequent re-checks are faster

---

## Future Improvements

### Nx 21+ `continuous` flag

When the monorepo upgrades to Nx 21+, the `dev:deps` and `dev` targets could be combined into a single command using `"continuous": true` on the watch targets. This would allow Nx to start the NF dev server after the initial `^build` completes, while the watch processes continue running:

```json
{
  "dev": {
    "dependsOn": ["^build"],
    "continuous": true
  }
}
```

### Asset watcher

A future enhancement could add a `chokidar`-based watcher or `nodemon` to detect changes to `.scss`, `.css`, and `.svg` files in SRC and automatically run `build:copy-assets`. This would complete the watch story for all file types.

### Vite 6+ Environment API

Vite 6 introduced a new Environment API that may provide better SSR dev server performance. When the monorepo upgrades Vite, investigate whether the new API eliminates the need for `ssr.optimizeDeps.include` and provides faster SSR module resolution.
