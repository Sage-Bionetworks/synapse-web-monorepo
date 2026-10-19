# Dependency Security Updates

This file documents the investigation and resolution of security vulnerabilities found by `pnpm audit`.

## tinypool

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ critical            │ Tinypool: Prototype Pollution gadget in worker options │
│                     │ leads to Remote Code Execution                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ tinypool                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=2.1.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=2.1.1                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>oxfmt>tinypool                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-5gmw-xhrv-c9v3      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ critical            │ Tinypool: Prototype Pollution Gadget to RCE in run()   │
│                     │ options                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ tinypool                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <2.1.2                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=2.1.2                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>oxfmt>tinypool                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-85c8-ppgw-ccpr      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found:

- `.>oxfmt@0.52.0>tinypool@2.1.0`: vulnerable — oxfmt hard-pins `tinypool` to an exact version (`2.1.0`), and the root `oxfmt` range `^0.52.0` (0.x caret → `<0.53.0`) can't reach a fixed oxfmt release. Dev-only (formatter).

oxfmt releases pin `tinypool@2.1.0` through 0.66.0, `2.1.2` from 0.67.0, and `2.2.0` from 0.71.0 (latest 0.73.0, published 2026-10-13, older than the `minimumReleaseAge` window).

**Fix rationale:** Updating the parent beats an override. The investigation script printed "no upstream fix" for `oxfmt@0.73.0` declaring `tinypool@2.2.0`, which is a false negative: 2.2.0 ≥ 2.1.2. Both 0.67.0 and 0.73.0 reformat the same 10 files (whitespace/line-wrapping only, mainly arrow-callback hugging and a single-line SCSS `calc`), so there's no reason to stop at the minimum patched version. Those 10 files are reformatted in this change so the codebase matches the new formatter; otherwise lint-staged would reformat them on the next unrelated edit. Two files were already unformatted under 0.52.0 (`apps/portals/nf/src/config/resources.ts`, `pnpm-workspace.yaml`) and are left as they were.

**Fix applied:** root `package.json` devDependency `"oxfmt": "^0.52.0"` → `"^0.73.0"` (caret style kept) via `pnpm add -Dw oxfmt@^0.73.0`; `pnpm exec oxfmt --write` on the 10 newly flagged files.

**Testing:** `pnpm why tinypool --recursive` → only `tinypool@2.2.0`; `pnpm exec oxfmt --check .` → only the 2 pre-existing baseline files flagged.

## shell-quote

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ critical            │ shell-quote: `quote()` command injection via a line    │
│                     │ terminator in a token after a `{ comment }` token      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ shell-quote                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.8.4 <1.11.0                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.11.0                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>@openapitools/openapi-        │
│                     │ generator-cli>concurrently>shell-quote                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-pqg4-j6r4-53mv      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (dev-only codegen tooling, used by `aridhia-client` and `synapse-client`):

- `@openapitools/openapi-generator-cli@2.39.0>concurrently@10.0.3>shell-quote@1.10.0`: vulnerable — concurrently 10.0.3 hard-pins `shell-quote@1.8.4`, and the existing global override `"shell-quote": "^1.9.0"` (added for an earlier advisory) had locked 1.10.0.

concurrently 10.0.6 pins `shell-quote@1.12.0`, and openapi-generator-cli 2.41.0 depends on `concurrently ^10.0.5`. Both workspace packages declare `@openapitools/openapi-generator-cli ^2.39.0`, which already allows 2.41.0.

**Fix rationale:** A lockfile-range update of the parent pulls the fixed concurrently release without a new override. The investigation script printed "no upstream fix" for `concurrently@10.0.6` → `shell-quote@1.12.0`, which is a false negative. After the update, the global `shell-quote` override isn't needed anymore: its only consumer now pins a patched version. Removing it avoids a stale global override that could mask future pins.

**Fix applied:** `pnpm update @openapitools/openapi-generator-cli --recursive` (specifiers in `packages/aridhia-client` and `packages/synapse-client` go `^2.39.0` → `^2.41.0`); removed `"shell-quote": "^1.9.0"` from root `pnpm.overrides`; ran `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why shell-quote --recursive` → only `shell-quote@1.12.0`; `pnpm generate` in `packages/aridhia-client` succeeds.

## nx

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ Nx: OS command injection via git revisions and remote  │
│                     │ refs                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ nx                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=14.0.0 <22.7.8                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=22.7.8                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-w2vw-w76x-qr89      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ Nx daemon and plugin worker sockets are accessible to  │
│                     │ other local users                                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ nx                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=14.6.0 <22.7.9                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=22.7.9                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-w3vv-58gj-gw77      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Nx: Path traversal in nx migrate package-migrations    │
│                     │ extraction                                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ nx                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=13.10.0 <22.7.10                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=22.7.10                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-hrvq-x7jp-36xv      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found:

- `.>nx@22.7.7`: vulnerable — a direct root devDependency, exact-pinned. Dev/CI tooling only. The investigation script reported it as "not a direct dep" because it doesn't trace the workspace root's own dependencies.

nx 22.7.10 fixes all three advisories. 22.7.12 is the newest 22.7.x patch release (published 2026-09-10, outside the `minimumReleaseAge` window). nx 23.x also fixes them but is a major upgrade (migrations via `nx migrate`) that doesn't belong in a security patch.

nx 22.7.12 still hard-pins `smol-toml@1.6.1`, so the version-targeted override `nx@22.7.7>smol-toml` would stop matching after the bump and an older smol-toml would come back. The override key is moved to `nx@22.7.12`; the smol-toml advisory itself is handled in its own section.

**Fix rationale:** Update the parent directly within the same minor line. Keeps the existing exact-pin style.

**Fix applied:** root `package.json` `"nx": "22.7.7"` → `"22.7.12"`; override key `"nx@22.7.7>smol-toml"` → `"nx@22.7.12>smol-toml"` (value unchanged); `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why nx --recursive` → only `nx@22.7.12`; `pnpm why smol-toml --recursive` → still `smol-toml@1.8.0` (override still applies); `pnpm nx show projects` lists all 29 projects; `pnpm nx run-many -t lint -p synapse-types,synapse-client --skip-nx-cache` passes.

## probe-image-size

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ probe-image-size: Quadratic-time Denial of Service in  │
│                     │ the SVG Parser                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ probe-image-size                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=7.3.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.4.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>plotly.js>probe-image-  │
│                     │ size                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-gjj5-9665-rwrc      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (production — `synapse-react-client` runtime dep via plotly.js):

- `plotly.js@2.28.0>probe-image-size@7.3.0`: vulnerable — plotly.js declares `^7.2.3`, which already covers 7.4.0. The lockfile was just stale.

**Fix rationale:** Lockfile-only update within the declared range. No package.json changes.

**Fix applied:** `pnpm update probe-image-size --recursive`

**Testing:** `pnpm why probe-image-size --recursive` → only `probe-image-size@7.4.0`; `pnpm exec vitest run Plot` in `packages/synapse-react-client` → 11 files, 41 passed / 2 skipped.
