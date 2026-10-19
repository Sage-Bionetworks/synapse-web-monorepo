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

## braces

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ braces vulnerable to stack-exhaustion denial of        │
│                     │ service through deeply nested patterns                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ braces                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=3.0.3                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ <0.0.0                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>lint-staged>micromatch>braces                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-vfj7-8cjw-p6xm      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

No patched version exists (`Patched versions: <0.0.0`); `braces@3.0.3` is the latest release (unchanged since 2024). One installed version, 5 paths, all dev-only:

- `.>lint-staged@15.5.2>micromatch>braces`: vulnerable — lint-staged ≥16 uses picomatch instead (latest 17.6.0, requires Node ≥22.22.1).
- `markdown-it-container>mocha@10.8.2>chokidar@3>braces`: vulnerable — mocha 12 uses chokidar 5 (no braces).
- `synapse-react-client`, `synapse-portal-framework>vite-plugin-static-copy@4.1.1>chokidar@3>braces`: vulnerable — **latest** vite-plugin-static-copy (4.1.1) still depends on `chokidar ^3.6.0`.
- `vite-config>vite-plugin-html@3.2.2>fast-glob@3>micromatch>braces`: vulnerable — **latest** vite-plugin-html (3.2.2) still depends on `fast-glob ^3.2.11`.
- `synapse-react-client>jest-environment-jsdom@29.7.0>@jest/environment>@jest/fake-timers>jest-message-util>micromatch>braces`: vulnerable.

**Fix rationale:** Not fixed — accepted risk. No version of braces is patched, and the current releases of `vite-plugin-static-copy` and `vite-plugin-html` still depend on it, so no set of upgrades removes the advisory. Major bumps of lint-staged (15→17) and mocha (10→12) would remove only 2 of the 5 paths and add breaking-change risk with no change to the audit result. The advisory is a stack-exhaustion DoS triggered by deeply nested brace patterns. Every consumer is build/test tooling that expands developer-authored glob patterns from repo config, not untrusted input. An override isn't possible because there's no version to override to.

**Fix applied:** None. Revisit when braces publishes a fix, or when vite-plugin-static-copy / vite-plugin-html move off chokidar 3 / fast-glob 3.

**Testing:** N/A (no changes).

## source-map-js

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ source-map-js allows event-loop denial of service      │
│                     │ through indexed source-map section offsets             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ source-map-js                                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.0.0 <1.2.2                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.2.2                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>@vitest/coverage-                 │
│                     │ v8>magicast>source-map-js                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-68fv-2mgg-jv7q      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

7 parents of a single installed `source-map-js@1.2.1`, all with flexible ranges covering 1.2.2:

- `magicast@0.5.3` (`^1.2.1`, via `@vitest/coverage-v8`): vulnerable — stale lockfile. Dev-only.
- `postcss@8.5.25` (`^1.2.1`), `sass@1.100.0` (`>=0.6.2 <2.0.0`), `css-tree@2.3.1` / `3.2.1` (`^1.0.1` / `^1.2.1`): vulnerable — stale lockfile. Build-time CSS tooling, not shipped to browsers.
- `css-tree@2.2.1` (`^1.0.1`), `@vue/compiler-core@3.5.35` (`^1.2.1`): vulnerable — stale lockfile. Dev-only.

**Fix rationale:** Lockfile-only update within every declared range. No package.json changes.

**Fix applied:** `pnpm update source-map-js --recursive`

**Testing:** `pnpm why source-map-js --recursive` → only `source-map-js@1.2.2`; `sass` compile of `synapse-react-client/src/style/main.scss` with source map succeeds; `pnpm exec vitest run --coverage` in `apps/SageAccountWeb` → 57 passed / 1 skipped, coverage report generated.

## smol-toml

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ smol-toml: Quadratic-time parse() from parseKey        │
│                     │ rescanning to end of document on each key line         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ smol-toml                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=1.8.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.9.0                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx>smol-toml                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-r4xh-jqrq-34v2      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (dev/CI tooling):

- `.>nx@22.7.12>smol-toml@1.8.0`: vulnerable — nx 22.7.12 hard-pins `smol-toml@1.6.1`. The existing targeted override `"nx@22.7.12>smol-toml": "^1.7.2"` (from an earlier advisory) locked 1.8.0.

nx 23.3.0 pins `smol-toml@1.9.0`, but that's a major nx upgrade, already ruled out in the nx section.

**Fix rationale:** Raise the existing nx-scoped override instead of a major nx upgrade. The override is already targeted at this exact nx version, so the blast radius doesn't change. smol-toml 1.9.1 was published 2026-10-09, outside the `minimumReleaseAge` window.

**Fix applied:** root `pnpm.overrides` `"nx@22.7.12>smol-toml": "^1.7.2"` → `"^1.9.0"`; `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why smol-toml --recursive` → only `smol-toml@1.9.1`; `pnpm nx show projects` builds the project graph.

## pbkdf2

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ pbkdf2 rehashes long passwords on every iteration,     │
│                     │ enabling denial of service                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ pbkdf2                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=3.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.1.7                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite-plugin-node-polyfills>node-  │
│                     │ stdlib-browser>crypto-browserify>pbkdf2                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-477h-4r7f-fvrx      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

2 parents of a single installed `pbkdf2@3.1.6`, both with flexible ranges covering 3.1.7:

- `vite-plugin-node-polyfills>node-stdlib-browser>crypto-browserify@3.12.1` (`^3.1.2`): vulnerable — stale lockfile.
- `…>browserify-sign>parse-asn1@5.1.9` (`^3.1.5`): vulnerable — stale lockfile.

Production-relevant: the `crypto` polyfill is bundled into SageAccountWeb's browser build.

**Fix rationale:** Lockfile-only update within declared ranges. No package.json changes.

**Fix applied:** `pnpm update pbkdf2 --recursive`

**Testing:** `pnpm why pbkdf2 --recursive` → only `pbkdf2@3.1.7`; installed module reproduces the RFC 6070 PBKDF2-HMAC-SHA1 vector (`password`/`salt`/4096 → `4b0079…29c1`); `pnpm nx run SageAccountWeb:build` succeeds.

## sprintf-js

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ sprintf-js vulnerable to denial of service through     │
│                     │ unbounded precision specifiers                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ sprintf-js                                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=1.1.3                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ <0.0.0                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__vite-config>vite-plugin-dts>@microsoft/api-  │
│                     │ extractor>@rushstack/ts-command-line>argparse>sprintf- │
│                     │ js                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-hp3w-g68c-fv3c      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

No patched version exists (`Patched versions: <0.0.0`); latest is `sprintf-js@1.1.3`. 1 path found (build-time only):

- `vite-config>vite-plugin-dts@4.5.4>@microsoft/api-extractor@7.58.8>@rushstack/ts-command-line@5.3.9>argparse@1.0.10>sprintf-js@1.0.3`: vulnerable.

Upstream check: the latest `@rushstack/ts-command-line` (5.3.17, used by the latest `@microsoft/api-extractor` 7.59.4) still pins `argparse ~1.0.9`, and argparse 1.x depends on sprintf-js. vite-plugin-dts 5.x makes api-extractor an optional peer, but `vite-config` uses `dts({ rollupTypes: true })`, which requires api-extractor, so the chain stays.

**Fix rationale:** Not fixed — accepted risk. No version of sprintf-js is patched, and no parent upgrade removes it. The DoS needs attacker-controlled format strings with huge precision specifiers. argparse 1.x uses sprintf-js only to format its own CLI help/error text, and vite-plugin-dts calls api-extractor programmatically during library builds, not through its CLI argument parser. No untrusted input reaches it.

**Fix applied:** None. Revisit when @rushstack/ts-command-line moves to argparse 2 (which has no dependencies).

**Testing:** N/A (no changes).

## elliptic

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ Elliptic Uses a Cryptographic Primitive with a Risky   │
│                     │ Implementation                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ elliptic                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=6.6.1                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ <0.0.0                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite-plugin-node-polyfills>node-  │
│                     │ stdlib-browser>crypto-browserify>browserify-           │
│                     │ sign>elliptic                                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-848j-6mx2-7j84      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

No patched version exists (`Patched versions: <0.0.0`); `elliptic@6.6.1` is the latest release. One installed version, reached two ways through the same polyfill:

- `vite-plugin-node-polyfills@0.28.0>node-stdlib-browser@1.3.1>crypto-browserify@3.12.1>browserify-sign@4.2.6>elliptic`: vulnerable.
- `…>crypto-browserify@3.12.1>create-ecdh@4.0.4>elliptic`: vulnerable.

`vite-plugin-node-polyfills` is a devDependency of SageAccountWeb, synapse-oauth-signin, synapse-react-client, vite-config and every portal. 0.28.0 is its latest release.

Bundle check: a fresh `SageAccountWeb` production build and the existing portal / synapse-oauth-signin builds contain none of elliptic's curve definitions (`secp256k1`, `ed25519`, `createECDH`). The `crypto` polyfill is tree-shaken out because no app code calls the affected signing/ECDH APIs. (A raw `elliptic` string match was a false positive: d3-geo's `hyperelliptical` projection, bundled through plotly.)

**Fix rationale:** Not fixed — accepted risk. No version of elliptic is patched, and the polyfill chain has no newer release. The vulnerable code is installed but not shipped to browsers.

**Fix applied:** None. Revisit if elliptic publishes a fix or app code starts using `crypto` sign/ECDH APIs in the browser.

**Testing:** `grep -rlE "secp256k1|ed25519|createECDH"` over `apps/*/build` and `apps/portals/*/build` → 0 files.

## esbuild

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ esbuild allows arbitrary file read when running the    │
│                     │ development server on Windows                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ esbuild                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=0.27.3 <0.28.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=0.28.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__arkportal>@react-router/dev>vite-       │
│                     │ node>vite>esbuild                                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-g7r4-m6w7-qqqr      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 vulnerable instance, dev-only (dev server / build tooling):

- `@react-router/dev@7.18.2>vite-node@3.2.4>vite@7.3.5>esbuild@0.27.7`: vulnerable — vite 7.3.5 declares `esbuild ^0.27.0`. vite 7.3.6+ declares `^0.27.0 || ^0.28.0`, and vite-node's own range (`^5.0.0 || ^6.0.0 || ^7.0.0-0`) allows it, so the lockfile was just stale.
- Every workspace's direct `vite@8.0.16` already resolves `esbuild@0.28.2`: patched.

The advisory affects only the esbuild dev server on Windows.

**Fix rationale:** Lockfile-only. `pnpm update vite --recursive` would also bump the direct vite 8.0.16 → 8.3.x and rewrite the specifier in 27 package.json files, too broad for this advisory. All @react-router/dev 7.x releases depend on `vite-node ^3.2.2`, so a parent update doesn't help (8.x is a major). Instead, the transitive vite was re-resolved within vite-node's declared range: a scoped override `"vite-node@3.2.4>vite": "^7.3.6"` was added, installed, then removed and reinstalled. pnpm keeps the in-range `vite@7.3.7` in the lockfile, so no override stays behind. esbuild now dedupes to one `0.28.2`, which drops the 0.27.7 platform binaries.

**Fix applied:** `pnpm-lock.yaml` only (transitive `vite@7.3.5` → `7.3.7`, `esbuild@0.27.7` removed).

**Testing:** `pnpm why esbuild --recursive` → only `esbuild@0.28.2`; `pnpm install --frozen-lockfile` passes with the unchanged package.json; `pnpm nx run arkportal:build` (react-router build via `@react-router/dev`) succeeds.

## katex

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ KaTeX: Existing prototype pollution can bypass trust   │
│                     │ restrictions                                           │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ katex                                                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=0.11.0 <0.18.2                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=0.18.2                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>katex                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-238p-pmpm-9mq7      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

20 paths, all direct production dependencies declared `"katex": "^0.16.47"` (0.x caret → `<0.17.0`): `synapse-react-client`, `synapse-portal-framework`, SageAccountWeb, synapse-oauth-signin, and all 17 portals. Installed `katex@0.16.47`: vulnerable. No range covers 0.18.2, so a lockfile update can't fix it.

Breaking changes crossed: 0.17.0 changed the internal `__defineFunction` API (not used here). 0.18.0 prefixed KaTeX's CSS classes, which breaks custom styles or allowlists that target internal classes. Neither applies here: KaTeX output is rendered in one place (`synapse-react-client` `MarkdownUtils`, `katex.render(..., { output: 'html', throwOnError: false })`) after markdown sanitization, so no sanitizer allowlist sees KaTeX classes. Every app imports `katex/dist/katex.css` from the same package, so markup and styles move together, and no repo SCSS targets KaTeX internals. 0.19.0 (strict-mode changes) was deliberately not taken.

**Fix rationale:** Bump the direct dependency (production). Confirmed with the user: `^0.18.2`, the smallest range containing the fix, over `^0.19.0` or accepting the risk. Resolves to 0.18.11 (outside the `minimumReleaseAge` window). Caret style kept.

**Fix applied:** `"katex": "^0.16.47"` → `"^0.18.2"` in all 20 package.json files; `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why katex --recursive` → only `katex@0.18.11`; `pnpm exec vitest run Markdown` in `synapse-react-client` → 9 files, 72 passed; `pnpm nx run synapse-react-client:type-check` passes; throwaway render check: every styled class emitted by `katex.renderToString` has a matching selector in the shipped `katex.css`. The only unmatched names (`mord`, `mopen`, `mclose`, `mbin`, `mtight`) are semantic-only and also unstyled in 0.16.47.
