# Plan 3: File-Per-Module Build for Workspace Packages

## Goal

Switch `synapse-react-client` and `synapse-portal-framework` from the current tsconfig-paths-to-source resolution strategy to producing **file-per-module `dist/` output**, then remove the tsconfig path overrides so consuming apps (starting with the NF portal) resolve to prebuilt files instead of raw TypeScript source.

This eliminates the primary cause of slow dev server startup and production build times for SSR portals: Vite having to transpile ~1,450 SRC source files and ~200 portal-framework source files on every build.

**This plan requires [Plan 2](./plan-2-true-ssr.md) (True SSR) to be complete first,** since the SSR build is the primary motivator.

---

## Status: In Progress

### Completed

- [x] Analysis of current build pipeline and path resolution
- [x] Analysis of all deep import paths across the codebase (120 unique SRC paths, 82 unique portal-framework paths)
- [x] Decision: ESM-only output (no CJS)
- [x] Decision: Migrate barrel imports to deep imports
- [x] Decision: NF portal + portal-framework first, other portals later

### In Progress

- [ ] Phase 1: Configure `synapse-react-client` for file-per-module build
- [ ] Phase 2: Add build step to `synapse-portal-framework`
- [ ] Phase 3: Remove tsconfig path overrides in NF portal and portal-framework
- [ ] Phase 4: Migrate barrel imports to deep imports
- [ ] Phase 5: Verify builds and SSR

---

## Problem

The NF portal (and future SSR portals) resolves `synapse-react-client` and `synapse-portal-framework` to their **raw TypeScript source** via two mechanisms:

1. **tsconfig.json `paths`** — e.g. `"synapse-react-client": ["../../../packages/synapse-react-client/src"]`
2. **`vite-tsconfig-paths` plugin** — reads tsconfig paths and converts them to Vite resolve aliases

This means Vite transpiles the entire source tree of these packages on every dev server start and every production build. For SSR, this is particularly painful because the server build processes everything upfront (no lazy loading).

### Current resolution strategies

| Package                            | Resolution              | Mapped to                            |
| ---------------------------------- | ----------------------- | ------------------------------------ |
| `synapse-react-client`             | tsconfig paths → source | `packages/synapse-react-client/src/` |
| `synapse-portal-framework`         | tsconfig paths → source | `apps/synapse-portal-framework/src/` |
| `@sage-bionetworks/synapse-types`  | node_modules → dist/    | Pre-built by `tsc --build`           |
| `@sage-bionetworks/synapse-client` | node_modules → dist/    | Pre-built by `tsc --build`           |

### Why tsconfig paths exist today

1. **Live-reload across packages** — Changes in SRC appear immediately in the portal dev server without rebuilding SRC. This benefit is acceptable to give up.
2. **Deep imports without a complicated build step** — Portals use 119 unique deep import paths into SRC (e.g., `synapse-react-client/components/Foo`). The current hash-chunked Vite library build doesn't produce files at those paths. A file-per-module build solves this.

---

## Solution: Rollup `preserveModules`

Configure the existing Vite library build to use Rollup's `preserveModules: true` option. This produces one output `.js` file per source module, preserving the `src/` directory structure under `dist/`.

### Why this approach

| Approach                            | Verdict    | Reason                                                                                           |
| ----------------------------------- | ---------- | ------------------------------------------------------------------------------------------------ |
| **Vite + Rollup `preserveModules`** | **Chosen** | Stays within existing Vite ecosystem, all plugins (React, SVGR, externalize-deps) keep working   |
| tsup                                | Rejected   | No native SCSS support, no `@vitejs/plugin-react` babel transforms (React Compiler for DataGrid) |
| unbuild                             | Rejected   | Not in monorepo, less mature for React + SCSS + SVG                                              |
| tsc only                            | Rejected   | No SVG-as-component, no CSS module support, no path alias rewriting                              |

### Key changes

1. **Rollup output**: `preserveModules: true` + `preserveModulesRoot: 'src'` — mirrors source structure in `dist/`
2. **Format**: ESM only (drop CJS — confirmed acceptable)
3. **Type declarations**: Switch `vite-plugin-dts` from `rollupTypes: true` (single rolled-up `index.d.ts`) to `rollupTypes: false` (per-file `.d.ts`)
4. **Externalize all deps**: Stop bundling `synapse-types` and `synapse-client` into SRC; let consuming app's bundler resolve them
5. **Package.json exports**: Wildcard `./*` mapping to `dist/*`

---

## Architecture

### Build output structure (before vs after)

**Before (hash-chunked):**

```
dist/
  index.js                          # ESM entry (4KB re-export wrapper)
  index.cjs                         # CJS entry
  index.d.ts                        # Single rolled-up type declarations (340KB, 7543 lines)
  index.css                         # Global CSS bundle (232KB)
  SWC.index-BIiLGbvO.js            # Main chunk (1.5MB)
  AccessRequirementList-B7DUU7m3.js # Code-split chunk
  ... (175 ES chunks + 174 CJS chunks)
```

**After (file-per-module):**

```
dist/
  index.js                          # Barrel re-export (same as src/index.ts)
  index.d.ts                        # Barrel type re-export
  index.css                         # Global CSS bundle (unchanged)
  SWC.index.js                      # SWC entry (lazy imports preserved)
  SWC.index.d.ts
  components/
    CardContainerLogic/
      CardContainerLogic.js
      CardContainerLogic.d.ts
    Goals/
      index.js
      Goals.js
      Goals.d.ts
    ...
  utils/
    SynapseConstants.js
    SynapseConstants.d.ts
    context/
      SynapseContext.js
      SynapseContext.d.ts
    ...
  synapse-queries/
    ...
  theme/
    ...
  style/
    main.scss                       # Raw SCSS (copied by build:copy-assets)
    ...
```

### Package.json exports (synapse-react-client)

```json
{
  "type": "module",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./*": { "types": "./dist/*.d.ts", "import": "./dist/*.js" },
    "./package.json": "./package.json",
    "./ThemeTypes": "./dist/types/ThemeTypes.d.ts"
  }
}
```

### Dependency chain (build order)

```
synapse-client (tsc --build → dist/)
    ↓
synapse-types (tsc --build → dist/)
    ↓
synapse-react-client (vite build with preserveModules → dist/)
    ↓
synapse-portal-framework (vite build with preserveModules → dist/)
    ↓
NF portal (vite build — resolves all deps from dist/ via node_modules)
```

---

## Implementation Phases

### Phase 1: Configure `synapse-react-client` for file-per-module build

#### 1.1 Update `vite-config` ConfigBuilder

Add a `setPreserveModules(true)` option to the `ConfigBuilder` class. When enabled:

- Override `rollupOptions.output` with `preserveModules: true` and `preserveModulesRoot: 'src'`
- Override `lib.formats` to `['es']` (ESM only)
- Remove `lib.fileName: 'index'` (incompatible with preserveModules)

#### 1.2 Update `pluginConfig.ts`

Make `rollupTypes` configurable via the `PluginConfigOptions`:

- When `preserveModules` is true, set `rollupTypes: false` (emit per-file `.d.ts`)
- When `preserveModules` is false (default), keep `rollupTypes: true` (current behavior)

#### 1.3 Update `vite-library-config.ts`

Make the library config aware of `preserveModules`:

- When true: set `output.preserveModules`, `output.preserveModulesRoot`, `output.entryFileNames`
- When false: keep current behavior (`formats: ['es', 'cjs']`, `fileName: 'index'`)

#### 1.4 Update SRC's `vite.config.ts`

- Call `.setPreserveModules(true)` on ConfigBuilder
- Remove the `except` option on `externalizeDeps` (stop bundling synapse-types and synapse-client)
- Entry point: `src/index.ts` (not `SWC.index.ts` — that becomes just another module in the output)

#### 1.5 Update SRC's `package.json`

- Update `exports` map (see above)
- Remove `"module"` and CJS-related fields
- Keep `"main": "./dist/index.js"` and `"types": "./dist/index.d.ts"`

#### 1.6 Build and verify

- `pnpm nx run synapse-react-client:build`
- Verify `dist/` contains file-per-module structure
- Verify deep import paths resolve (e.g., `dist/components/CardContainerLogic/CardContainerLogic.js` exists)
- Verify `.d.ts` files are generated alongside each `.js` file
- Verify `@/` alias imports are rewritten to relative paths in output

### Phase 2: Add build step to `synapse-portal-framework`

#### 2.1 Add `build` script

```json
"build": "vite build"
```

#### 2.2 Configure file-per-module output

Same approach as SRC: use ConfigBuilder with `.setPreserveModules(true)`.

#### 2.3 Add `exports`, `main`, `types` to package.json

```json
{
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": { "types": "./dist/index.d.ts", "import": "./dist/index.js" },
    "./*": { "types": "./dist/*.d.ts", "import": "./dist/*.js" }
  }
}
```

### Phase 3: Remove tsconfig path overrides

#### 3.1 NF portal `tsconfig.json`

Remove `paths` entries for `synapse-react-client`, `synapse-portal-framework`, `vite-config` that point to source. Keep only `@/*` for the local alias.

#### 3.2 NF portal `vite.config.ts`

Keep `vite-tsconfig-paths` only for the `@/*` local alias.

#### 3.3 `synapse-portal-framework` `tsconfig.json`

Remove `paths` entries pointing to SRC and synapse-types source.

#### 3.4 Other portals and apps

Deferred. Classic portals continue using tsconfig paths until ready.

### Phase 4: Migrate barrel imports to deep imports

#### 4.1 In NF portal and portal-framework

Replace barrel imports like:

```ts
import { CardContainerLogic, Goals, RssFeedCards } from 'synapse-react-client'
```

with deep imports:

```ts
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic'
import { Goals } from 'synapse-react-client/components/Goals'
import { RssFeedCards } from 'synapse-react-client/components/RssFeedCards'
```

This is ~350 barrel import sites across the codebase. Deep imports improve tree-shaking and align with the barrel file deprecation note already in `components/index.ts`.

#### 4.2 Fix `src/` prefix imports

Update ~27 occurrences of `@sage-bionetworks/synapse-portal-framework/src/sitemap/types` to `@sage-bionetworks/synapse-portal-framework/sitemap/types`.

### Phase 5: Verify

- Build the full dependency chain: `synapse-client` → `synapse-types` → `synapse-react-client` → `synapse-portal-framework` → NF portal
- `pnpm nx run nf:dev` — verify dev server starts quickly
- `pnpm nx run nf:build` — verify production build completes faster than before
- Run tests: `pnpm nx run synapse-react-client:test`, `pnpm nx run synapse-portal-framework:test`
- Run type-check: `pnpm type-check`
- Verify SSR works (detail pages, JSON-LD, meta tags)

---

## Challenges and Mitigations

### `@/` path alias (3,198 uses in SRC source)

Rollup with `vite-tsconfig-paths` resolves `@/` imports during bundling. With `preserveModules`, the output `.js` files will contain relative imports (not `@/` references). **Verify this works correctly.**

### SVG-as-React-component (~105 imports)

`vite-plugin-svgr` transforms SVG imports at the Vite transform phase, before Rollup output. Each SVG becomes a separate module in the `preserveModules` output. **Verify SVGR output is correct.**

### CSS/SCSS handling

- **Global SCSS** (`main.scss` → `index.css`): Single compiled CSS bundle, unchanged
- **CSS Modules** (11 files): Compiled to classname mappings at build time, CSS merged into global bundle
- **Raw SCSS copies**: `build:copy-assets` continues to copy raw SCSS/CSS/SVG to `dist/`

### `vite-plugin-dts` with `rollupTypes: false`

Previously, `rollupTypes: true` caused issues with synapse-client and synapse-types (requiring tsconfig paths to be commented out). With `rollupTypes: false`, these issues should be resolved. **Verify this.**

### Node polyfill aliases

The current build shims `fs`, `path`, `process`, etc. for browser use. With `preserveModules`, Rollup resolves these aliases per-file during bundling. **These should NOT be resolved for a library build** — they should remain as bare imports for the consuming app to resolve. The `externalizeDeps` plugin should handle this, but verify.

### Bundle size for consuming apps

File-per-module means the portal's Vite build can tree-shake at the module level. Deep imports (119 unique paths) are efficient. Barrel imports through `index.ts` will still pull the entire chain — hence Phase 4 migrating to deep imports.

---

## Development Workflow Changes

### Before (live-reload)

```bash
pnpm nx run nf:dev  # Changes in SRC source appear immediately via HMR
```

### After (watch + rebuild)

```bash
# Terminal 1: Watch SRC and rebuild on changes
pnpm nx watch --projects=synapse-react-client -- pnpm nx run synapse-react-client:build

# Terminal 2: Run portal dev server
pnpm nx run nf:dev
```

Or configure `nx watch` to rebuild the full upstream chain.

---

## Success Criteria

- [ ] `synapse-react-client` produces file-per-module `dist/` with individual `.js` + `.d.ts` per source file
- [ ] `synapse-portal-framework` produces file-per-module `dist/` similarly
- [ ] NF portal resolves workspace packages from `dist/` (not source)
- [ ] NF portal dev server starts significantly faster than before
- [ ] NF portal production build completes significantly faster than before
- [ ] All deep import paths resolve correctly (119 SRC paths + 81 portal-framework paths)
- [ ] SSR works correctly (detail pages, JSON-LD, meta tags, streaming)
- [ ] All tests pass (SRC, portal-framework, NF portal)
- [ ] Type-check passes (`pnpm type-check`)
- [ ] Barrel imports in NF portal and portal-framework migrated to deep imports
