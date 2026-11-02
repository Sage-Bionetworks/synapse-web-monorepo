# Dependency Security Updates

This file documents the investigation and resolution of security vulnerabilities found by `pnpm audit` (cross-checked against open Dependabot alerts).

## follow-redirects

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ follow-redirects array-form headers bypass             │
│                     │ cross-origin credential stripping                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ follow-redirects                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.16.0 <1.16.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.16.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx>follow-redirects                                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-q3jh-wrc6-jgq8      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ follow-redirects sensitiveHeaders regex escaping can   │
│                     │ expose credential headers                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ follow-redirects                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.16.0 <1.16.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.16.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx>follow-redirects                                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-8r9p-f939-6h3c      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ follow-redirects: Cross-realm sensitiveHeaders arrays  │
│                     │ are discarded and custom credentials can follow        │
│                     │ redirects                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ follow-redirects                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=1.16.0 <=1.16.1                                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=1.16.2                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>nx>follow-redirects                                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-mrwp-f3q8-3g9p      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

2 path(s) found (dev-only tooling):

- `.>nx@22.7.12>follow-redirects@1.16.0`: vulnerable — nx 22.7.12 (latest 22.x) hard-pins `follow-redirects: 1.16.0`. nx 23+/24 drop the dependency, but that is a major Nx upgrade requiring `nx migrate`.
- `.>nx>axios@1.20.0>follow-redirects`: axios declares `^1.16.0`, so it dedupes to the patched version once nx's pin is overridden.

**Fix rationale:** Targeted override scoped to `nx@22.7.12` (same pattern as the existing `nx@22.7.12>smol-toml` override). 1.16.2 is a patch release, published >72h ago. A Nx 22 → 23 major migration was rejected as too disruptive for a security patch.

**Fix applied:** Added `"nx@22.7.12>follow-redirects": "1.16.2"` to root `pnpm.overrides`; `pnpm install --no-frozen-lockfile`. Remove the override when Nx is upgraded to 23+.

**Testing:** `pnpm why follow-redirects --recursive` → only 1.16.2; `pnpm nx --version`, `pnpm nx show projects` OK.

## vite

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ launch-editor: `fs.existsSync()` existence check can   │
│                     │ be bypassed on Windows                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=8.0.0 <=8.1.5                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=8.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-587h-7wmj-h5pm      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ launch-editor: escapeCmdArgs() omits % escaping on     │
│                     │ Windows                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=8.0.0 <=8.1.5                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=8.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-698v-4r3x-3vcv      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ launch-editor: Editor CLI flag misinterpretation       │
│                     │ causing arbitrary command execution for some editors   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=8.0.0 <=8.1.5                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=8.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-r825-w8mm-5pxw      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Vite: Files outside `server.fs.allow` could be served  │
│                     │ when project paths match system paths on non-Windows   │
│                     │ machine                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=8.0.0 <=8.1.5                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=8.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-rq7h-c2jc-7f22      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ Vite: Cross origin script execution through Vite       │
│                     │ custom middleware                                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ vite                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=8.0.0 <=8.1.5                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=8.1.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>vite                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-9jrq-w75r-8gcw      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 vulnerable version installed: `vite@8.0.16`, a direct dev dependency (`^8.0.16`) of every app/package (audit reports only the first path, `apps__SageAccountWeb>vite`). `vite@7.3.7` (via `vite-node`) is outside the vulnerable range.

**Fix rationale:** Direct dep with a caret range — `pnpm update vite --recursive` resolved to the latest 8.x (8.3.5, includes the fix; 8.1.6/8.2.4/8.3.3 were the backport releases) and raised the manifest lower bound so the vulnerable version can't be re-resolved. Minor-version bump within Vite 8; no breaking changes hit.

**Fix applied:** `pnpm update vite --recursive` → `"vite": "^8.3.5"` in 26 package.json files (peer range in `packages/vite-config` left at `^8.0.0`).

**Testing:** `pnpm nx run-many -t build -p SageAccountWeb synapse-oauth-signin adknowledgeportal` (15 tasks incl. synapse-react-client, synapse-portal-framework) passed; `synapse-oauth-signin` vitest suite passed. The existing unmet-peer warning (`vite@"^2 … ^7"` plugin peer) is unchanged.

## zod

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ Zod can exhaust memory while validating oversized      │
│                     │ constrained collections                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ zod                                                    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <4.6.6                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.6.6                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>zod                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-mrhx-c7xc-m3w5      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (production):

- `packages__synapse-react-client>zod@4.4.3`: vulnerable — direct prod dependency (`^4.4.3`), used only by the `TableColumnSchemaEditor` form validators.

**Fix rationale:** Direct caret dep; `pnpm update zod --recursive` resolved to latest 4.x (4.6.7) and raised the manifest lower bound. Minor bump within zod 4.

**Fix applied:** `pnpm update zod --recursive` → `"zod": "^4.6.7"` in `packages/synapse-react-client/package.json`.

**Testing:** `pnpm vitest run src/components/TableColumnSchemaEditor` (13 files, 171 tests) passed; `pnpm nx run synapse-react-client:type-check` passed.

## undici

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to Denial of Service via unhandled   │
│                     │ error on excessive content-encodings                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.18.0 <7.30.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-xjj6-f33q-929c      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to Denial of Service via unhandled   │
│                     │ error on excessive content-encodings                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=6.23.0 <6.29.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.29.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>undici                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-xjj6-f33q-929c      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to cache poisoning and cross-user    │
│                     │ disclosure via cross-origin redirects                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <7.30.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-4w7w-5xrc-9h26      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to TLS certificate validation bypass │
│                     │ via dropped tls options in Agent                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <7.30.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-2m5v-pch6-74hx      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to TLS certificate validation bypass │
│                     │ via dropped tls options in Agent                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.0.0 <6.29.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.29.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>undici                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-2m5v-pch6-74hx      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to Denial of Service via TLS 1.2     │
│                     │ certificate-changing renegotiation                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <7.30.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-qrxm-fqhp-jwvm      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ high                │ undici vulnerable to Denial of Service via TLS 1.2     │
│                     │ certificate-changing renegotiation                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.2.1 <6.29.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.29.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>undici                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-qrxm-fqhp-jwvm      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici vulnerable to Denial of Service via unbounded   │
│                     │ memory in the EventSource parser                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <7.30.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-4qv8-2p9j-2685      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici vulnerable to Denial of Service via unbounded   │
│                     │ memory in the EventSource parser                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=6.5.0 <6.29.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.29.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>undici                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-4qv8-2p9j-2685      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici vulnerable to Subresource Integrity bypass via  │
│                     │ non-lowercase algorithm tokens                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.15.0 <7.30.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-f72v-6w45-q472      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici WebSocket client vulnerable to Denial of        │
│                     │ Service via unbounded automatic PONG buffering         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <7.30.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-9fm3-97px-rjf6      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici WebSocket client vulnerable to Denial of        │
│                     │ Service via unbounded automatic PONG buffering         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=5.15.0 <6.29.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.29.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>undici                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-9fm3-97px-rjf6      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ undici vulnerable to Denial of Service via unhandled   │
│                     │ exception in the decompress interceptor                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ undici                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.15.0 <7.30.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.30.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__portals__adknowledgeportal>vitest>jsdom>undici   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-55wc-3pg8-jfw6      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

2 vulnerable versions installed (all dev/Node-only; none bundled for the browser):

- `undici@6.29.0`: direct devDependency (`^6.29.0`) of `packages/synapse-client` (used by the `get-spec` codegen script) and `packages/aridhia-client`. Audit only reports the aridhia path.
- `undici@7.29.1`: via `jsdom@28.1.0` (`^7.21.0`) and `jsdom@29.1.1` (`^7.25.0`, also through `isomorphic-dompurify`) — pinned by the existing root override `undici@>=7.0.0 <7.29.1 → 7.29.1`.

**Fix rationale:** Both jsdom ranges already cover 7.30.1, but the existing global override would have kept forcing 7.29.1, so its floor was raised rather than adding a second override. Direct 6.x deps were raised via recursive update (stays on 6.x; undici 7/8 not considered).

**Fix applied:** Root override → `"undici@>=7.0.0 <7.30.1": "7.30.1"`; `pnpm update undici --recursive` → `"undici": "^6.29.1"` in `packages/synapse-client` and `packages/aridhia-client`.

**Testing:** `pnpm why undici --recursive` → only 6.29.1 and 7.30.1. Smoke: `undici.request` of the prod OpenAPI spec (as `downloadSpec.ts` does) → 200; `isomorphic-dompurify` sanitize and `new JSDOM()` from `apps/portals/nf` work.

## fast-uri

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ fast-uri vulnerable to URI scheme spoofing via         │
│                     │ percent-encoded scheme decoding                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ fast-uri                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=3.0.0 <3.1.9                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.1.9                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>@rjsf/utils>fast-uri    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-w74x-v6f9-j3xg      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ fast-uri vulnerable to host confusion via unchecked    │
│                     │ WHATWG host canonicalization                           │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ fast-uri                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=3.1.3 <3.1.9                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.1.9                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>@rjsf/utils>fast-uri    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-wjr9-j795-jxcr      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ fast-uri vulnerable to improper path equivalence in    │
│                     │ relative reference normalization                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ fast-uri                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=3.0.0 <3.1.9                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.1.9                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>@rjsf/utils>fast-uri    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-xhq7-xmqj-769h      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ fast-uri vulnerable to scheme injection via an         │
│                     │ unescaped first-segment colon in suffix references     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ fast-uri                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=3.0.0 <3.1.9                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=3.1.9                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>@rjsf/utils>fast-uri    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-333x-w4r6-6crp      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 version installed (`fast-uri@3.1.8`), reached through `ajv@8` from `@rjsf/utils` / `@rjsf/validator-ajv8` (production, synapse-react-client) and `@microsoft/api-extractor` (dev). All resolution is controlled by the existing global root override `"fast-uri": "^3.1.8"`.

**Fix rationale:** Raise the existing override's floor instead of adding a new one; patch release within 3.1.x.

**Fix applied:** Root override → `"fast-uri": "^3.1.9"`; `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why fast-uri --recursive` → only 3.1.9; `pnpm vitest run src/components/SchemaDrivenAnnotationEditor` (rjsf + ajv8 validation, 52 tests) passed.

## @vitest/mocker

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Vitest: Code injection via unauthenticated manual mock │
│                     │ registration                                           │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ @vitest/mocker                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=2.1.0-beta.7 <4.1.12                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.1.12                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>@vitest/browser-                  │
│                     │ playwright>@vitest/mocker                              │
│                     │                                                        │
│                     │ apps__portals__demoportal>vitest>@vitest/mocker        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-qxg6-89mg-rqv8      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Vitest: Windows backslash traversal bypasses the       │
│                     │ @vitest/mocker redirect allowlist fix                  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ @vitest/mocker                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.1.11 <4.1.12                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=4.1.12                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__SageAccountWeb>@vitest/browser-                  │
│                     │ playwright>@vitest/mocker                              │
│                     │                                                        │
│                     │ apps__portals__demoportal>vitest>@vitest/mocker        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-xp26-3454-mjgp      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

`@vitest/mocker@4.1.11` (dev-only) comes from `vitest@4.1.11` and `@vitest/browser-playwright@4.1.11`, both of which pin `@vitest/mocker` to their own exact version. The vitest packages are released in lockstep, so the whole family was moved to 4.1.12.

**Fix rationale:** Patch release within vitest 4.1.x (vitest 5 not considered). `@vitest/browser-playwright` was exact-pinned in `apps/SageAccountWeb`, so its pin was bumped to the exact patched version (pin style preserved); the rest are caret ranges updated by `pnpm update`.

**Fix applied:** `apps/SageAccountWeb/package.json` `"@vitest/browser-playwright": "4.1.12"`; `pnpm update vitest "@vitest/*" --recursive` → `^4.1.12` for `vitest`, `@vitest/coverage-v8`, `@vitest/ui`, `@vitest/utils`, `@vitest/spy` across 26 manifests (`vite-config` peer `^4.0.0` unchanged).

**Testing:** `pnpm why @vitest/mocker --recursive` → only 4.1.12. `apps/SageAccountWeb` `pnpm test --run` (76 tests) and synapse-react-client `TableColumnSchemaEditor` + `SchemaDrivenAnnotationEditor` (223 tests) passed.

## ip-address

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ ip-address: Address6 matches a zone identifier in      │
│                     │ quadratic time ahead of its length limit, allowing a   │
│                     │ single long string to stall the process                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ ip-address                                             │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=10.7.3                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=10.7.4                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>@openapitools/openapi-        │
│                     │ generator-cli>proxy-agent>socks-proxy-agent>socks>ip-  │
│                     │ address                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-rxp7-6hxx-x8q5      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (dev-only): `packages__aridhia-client>@openapitools/openapi-generator-cli>proxy-agent>socks-proxy-agent>socks>ip-address@10.7.2`, resolved through the existing global root override `"ip-address": "^10.7.1"`.

**Fix rationale:** Raise the existing override's floor; patch release within 10.7.x.

**Fix applied:** Root override → `"ip-address": "^10.7.4"` (resolves 10.7.5); `pnpm install --no-frozen-lockfile`.

**Testing:** `pnpm why ip-address --recursive` → only 10.7.5; `pnpm exec openapi-generator-cli version` in `packages/aridhia-client` works.

## qs

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ qs : qs.stringify with arrayFormat 'comma' throws an   │
│                     │ uncaught TypeError on array elements carrying a        │
│                     │ non-callable own toString (DoS)                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ qs                                                     │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=6.7.0 <=6.16.0                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.16.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ apps__synapse-oauth-signin>url>qs                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-6pq8-jhm2-2vcw      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 version installed (`qs@6.16.0`) via the `url@0.11.4` browser polyfill (`qs: ^6.12.3`), a devDependency of `synapse-oauth-signin`, `synapse-portal-framework`, and `node-stdlib-browser`.

**Fix rationale:** Parent range covers the patched version — lockfile-only update.

**Fix applied:** `pnpm update qs --recursive` → `qs@6.17.1` (no package.json changes).

**Testing:** `pnpm why qs --recursive` → only 6.17.1; `require('url/').parse(…, true).query` parses correctly; `pnpm nx run synapse-oauth-signin:build` passed.

## minimatch

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ minimatch has potential denial of service via          │
│                     │ globparts amplification                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ minimatch                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <11.0.1                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=11.0.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>eslint-plugin-barrel-files>eslint>minimatch          │
│                     │                                                        │
│                     │ .>eslint-plugin-storybook>@typescript-eslint/          │
│                     │ utils>@typescript-eslint/typescript-estree>minimatch   │
│                     │                                                        │
│                     │ apps__SageAccountWeb>source-map-                       │
│                     │ explorer>ejs>jake>filelist>minimatch                   │
│                     │                                                        │
│                     │ ... Found 5 paths, run `pnpm why minimatch` for more   │
│                     │ information                                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-g3hv-75wg-m249      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

5 vulnerable versions installed, all dev-only (`pnpm why minimatch --recursive --prod` is empty):

- `minimatch@3.1.5`: `eslint@9`, `@eslint/config-array`, `@eslint/eslintrc`, `glob@7`, `test-exclude@6`
- `minimatch@5.1.9`: `filelist` (jake), `glob@8`, `mocha@10`
- `minimatch@9.0.9`: `@vue/language-core` (vite-plugin-dts), `glob@10`
- `minimatch@10.2.3` / `10.2.5`: `@microsoft/api-extractor` (exact pin), `@typescript-eslint/typescript-estree`, `glob@13`, `nx@22.7.12`

The only patched release is minimatch **11.0.1** (published 2026-10-27; advisory published 2026-10-30). No 3.x/5.x/9.x/10.x backport exists.

**Status: DEFERRED (no compatible fix).** minimatch 11 is a rewrite: it removes `makeRe()`, `Minimatch#regexp`, the `AST` class, `debug`, `matchOne()`, and changes matching semantics. Not one current upstream consumer has adopted it — the latest `eslint` (10.14.0), `@eslint/config-array`, `@typescript-eslint/typescript-estree` (8.72.1), `@microsoft/api-extractor` (7.60.1), `test-exclude` (8.0.0), `mocha` (12.0.3), and `nx` (24.0.3) all still declare minimatch 10.x. Forcing 11 via an override would push a breaking API onto lint/build tooling, and the minimatch 3 → 11 jump also changes the CJS export shape. Exposure is limited: the DoS requires attacker-controlled glob patterns fed to local dev tooling.

**Recommended follow-up:** Re-run `pnpm audit` once eslint / typescript-eslint / nx ship minimatch 11 support (or minimatch publishes a 10.x backport), then update the parents.

## glob

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ Glob: AbortSignal cancellation bypass allows           │
│                     │ post-timeout filesystem traversal                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ glob                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=9.0.0 <=14.0.1                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=14.0.2                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>rimraf>glob                                          │
│                     │                                                        │
│                     │ packages__aridhia-client>rimraf>glob                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-3g3m-2fjr-6pw4      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

2 vulnerable versions installed, dev-only:

- `glob@13.0.6`: `rimraf@6.1.3` (latest; `^13.0.3`), `@openapitools/openapi-generator-cli@2.41.0` (latest 2.42.0 exact-pins `13.0.6`), `@joshwooding/vite-plugin-react-docgen-typescript` (latest 0.9.0: `^13.0.6`)
- `glob@10.5.0`: `rimraf@5.0.10`, forced by the existing root override `glob@>=10.0.0 <11.0.0 → 10.5.0`

The only patched release is glob **14.0.2** (published 2026-10-27), a major that moves to minimatch 11.

**Status: DEFERRED (no compatible fix).** glob 14 is breaking (minimatch 11 matching, `walk()` returns arrays, `Pattern#isRegExp()` renamed, `ignore` semantics changed), and no parent has adopted it (latest rimraf, openapi-generator-cli, and react-docgen-typescript still declare glob 13). Overriding glob across two majors (10 → 14 and 13 → 14) is a breaking change in build tooling for a low-impact issue: it only matters when an `AbortSignal` is passed to a glob walk, and the repo's `rimraf` scripts delete literal paths (`rimraf build coverage`) without `--glob`.

**Recommended follow-up:** Update `rimraf` / `@openapitools/openapi-generator-cli` once they release glob 14 support; same trigger as minimatch.

## serialize-javascript

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ Serialize JavaScript: Cross-site scripting (XSS) via   │
│                     │ unescaped </script at the end of a serialized function │
│                     │ body                                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ serialize-javascript                                   │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <7.1.3                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=7.1.3                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__markdown-it-container>@rollup/plugin-        │
│                     │ terser>serialize-javascript                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-m5mm-p8h7-m29v      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 version installed (`serialize-javascript@7.0.5`), dev-only, in `packages/markdown-it-container`:

- `@rollup/plugin-terser@1.0.0` (`^7.0.3`): covers the patched version.
- `mocha@10.8.2`: forced to 7.0.5 by the existing root override `mocha@10.8.2>serialize-javascript → 7.0.5` (mocha 10 declares `^6.0.2`).

**Fix rationale:** Raise the existing exact-pinned override to the latest patched version (pin style preserved); the terser plugin dedupes to it.

**Fix applied:** Root override → `"mocha@10.8.2>serialize-javascript": "7.1.4"`; `pnpm install --no-frozen-lockfile` + `pnpm update serialize-javascript --recursive`.

**Testing:** `pnpm why serialize-javascript --recursive` → only 7.1.4; `packages/markdown-it-container` `pnpm test` (lint + rollup build with terser + mocha, 28 passing).

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

**Analysis:** Unchanged from the previous audit: no patched release exists (`<=6.6.1`, latest 6.6.1). Only path is `apps__SageAccountWeb>vite-plugin-node-polyfills@0.28.0 (latest)>node-stdlib-browser>crypto-browserify>browserify-sign>elliptic`; it is not in the `--prod` tree and was previously verified as absent from built bundles.

**Status: ACCEPTED RISK (no patch available).**

## deepmerge

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ deepmerge mergeObject() allows prototype poisoning of  │
│                     │ returned objects                                       │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ deepmerge                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=4.2.0 <=4.3.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ <0.0.0                                                 │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__markdown-it-container>@rollup/plugin-node-   │
│                     │ resolve>deepmerge                                      │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-gcqx-w48m-w2h4      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

No patched release exists (`>=4.2.0 <=4.3.1`; 4.3.1 is latest). 2 paths:

- `packages__markdown-it-container>@rollup/plugin-node-resolve@15.3.1>deepmerge` — dev-only build tooling; latest `@rollup/plugin-node-resolve` (16.0.3) still depends on `deepmerge ^4.2.2`.
- `synapse-react-client>clickable-json@1.15.1>nice-ui@1.32.0>react-embed@3.7.0>react-player@1.15.3>deepmerge` — production, but every package in the chain is already at its latest version. react-player only merges component config props supplied by the developer, not end-user input, so the prototype-poisoning precondition (an attacker-controlled object merged with `__proto__` keys) doesn't apply.

**Status: ACCEPTED RISK (no patch available).** Re-check when deepmerge publishes a fix.

## Summary

`pnpm audit`: 42 findings (12 high, 24 moderate, 6 low) → 9 findings across 4 advisories (7 moderate, 2 low). No high or critical findings remain.

| Advisory                      | Severity | Status                                                                               |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------ |
| minimatch GHSA-g3hv-75wg-m249 | moderate | Deferred — fix only in minimatch 11 (breaking); no upstream consumer supports it yet |
| glob GHSA-3g3m-2fjr-6pw4      | moderate | Deferred — fix only in glob 14 (breaking); no upstream consumer supports it yet      |
| elliptic GHSA-848j-6mx2-7j84  | low      | Accepted — no patch exists                                                           |
| deepmerge GHSA-gcqx-w48m-w2h4 | low      | Accepted — no patch exists                                                           |

**Full-build verification:** `pnpm nx run-many -t build` passed everywhere except `arkportal`, `cancercomplexity`, `namhub`, and `nf`. Those four fail during build-time prerendering (`fetchCroissantMetadata` → `TableServicesApi.postRepoV1EntityIdTableQueryAsyncStart`) because the Synapse production stack returned `Synapse is in READ_ONLY mode while migrating...` — an environmental failure, not a dependency regression. Re-run those builds after the migration finishes.
