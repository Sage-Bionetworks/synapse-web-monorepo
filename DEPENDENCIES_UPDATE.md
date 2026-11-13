# Dependency Security Updates

This file documents the investigation and resolution of security vulnerabilities found by `pnpm audit`.

## basic-ftp

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ basic-ftp: Uncaught TypeError in MLSD                  │
│                     │ directory-listing parser via __proto__ fact name       │
│                     │ causes DoS in Client.list()                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ basic-ftp                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=6.2.3                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.2.4                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>@openapitools/openapi-        │
│                     │ generator-cli>proxy-agent>pac-proxy-agent>get-         │
│                     │ uri>basic-ftp                                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-5pm8-86m8-9m6r      │
└─────────────────────┴────────────────────────────────────────────────────────┘
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ basic-ftp: Uncaught exception crashes the Node.js      │
│                     │ process when a password (or resumed-download path)     │
│                     │ contains CR/LF                                         │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ basic-ftp                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=6.2.2                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=6.2.3                                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__aridhia-client>@openapitools/openapi-        │
│                     │ generator-cli>proxy-agent>pac-proxy-agent>get-         │
│                     │ uri>basic-ftp                                          │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-r4jh-29pc-gfqr      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found:

- `packages__aridhia-client>@openapitools/openapi-generator-cli>proxy-agent>pac-proxy-agent>get-uri>basic-ftp`: vulnerable (6.2.1) — pinned by the existing root override `"get-uri@8.0.1>basic-ftp": "6.2.1"`.

**Fix rationale:** `get-uri@8.0.1` (latest) declares `basic-ftp@^5.3.1`, and the chain above it is exact-pinned through the latest releases (`openapi-generator-cli@2.42.2` → `proxy-agent@8.0.2` → `pac-proxy-agent@9.1.0` → `get-uri@8.0.1`), so neither a lockfile update nor a parent update reaches a patched version. The targeted override already existed; raised its exact pin to the patched version (6.2.4, published 2026-10-30, past `minimumReleaseAge`). Dev-only path (API code generation).

**Fix applied:** root `package.json` `pnpm.overrides`: `"get-uri@8.0.1>basic-ftp": "6.2.1"` → `"6.2.4"`, then `pnpm install --no-frozen-lockfile`. `pnpm why basic-ftp --recursive` → only `basic-ftp@6.2.4`.

**Testing:** `pnpm exec openapi-generator-cli version` (in `packages/aridhia-client`) → `7.10.0`; imported `get-uri` and called `getUri('ftp://127.0.0.1:1/x')` → `ECONNREFUSED` (FTP code path loads basic-ftp 6.2.4).

## minimatch

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ moderate            │ minimatch has potential denial of service via          │
│                     │ globparts amplification                                │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ minimatch                                              │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ >=7.0.0 <11.0.1                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=11.0.1                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ .>eslint-plugin-storybook>@typescript-eslint/          │
│                     │ utils>@typescript-eslint/typescript-estree>minimatch   │
│                     │                                                        │
│                     │ packages__aridhia-client>rimraf>glob>minimatch         │
│                     │                                                        │
│                     │ packages__vite-config>vite-plugin-dts>@microsoft/api-  │
│                     │ extractor>minimatch                                    │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-g3hv-75wg-m249      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

4 vulnerable versions/paths found (all dev-only):

- `.>nx@22.7.12>minimatch@10.2.5`: vulnerable — nx exact-pins `10.2.5`, including the latest `nx@24.0.6`.
- `.>eslint-plugin-storybook>@typescript-eslint/utils>@typescript-eslint/typescript-estree@8.61.0>minimatch@10.2.5`: vulnerable — latest `typescript-estree@8.72.2` still declares `^10.2.2`.
- `packages__vite-config>vite-plugin-dts@4.5.4>@microsoft/api-extractor@7.58.8>minimatch@10.2.3` and `>@vue/language-core@2.2.0>minimatch@9.0.9`: vulnerable — latest `api-extractor@7.60.1` exact-pins `10.2.3`; `@vue/language-core@3.x` drops minimatch but is only reachable via `vite-plugin-dts@5` (major; replaces the implementation with `unplugin-dts` and moves `@microsoft/api-extractor` to a peer).
- `glob@10.5.0>minimatch@9.0.9` / `glob@13.0.6>minimatch@10.2.5` (via `rimraf`, `openapi-generator-cli`, `@joshwooding/vite-plugin-react-docgen-typescript`): vulnerable — resolved by the glob fix below, because `glob@14` depends on `minimatch@^11.0.5`.

**Fix rationale:** No consumer outside glob has adopted `minimatch@11` (published 2026-10-27), and 11.0 is a breaking release: it removes `makeRe()`, `Minimatch#regexp`, the `AST` class and `matchOne()`. nx 22.7.12 calls `minimatch.makeRe()` in `find-matching-projects` (project-pattern matching for `run-many`/`affected`), `generators/utils/glob` and release git-tag matching, so overriding nx's copy would break Nx. `typescript-estree`, `api-extractor` and `@vue/language-core` only call `minimatch(path, pattern)`, so an override would work there, but the advisory would remain open through nx regardless, and the vulnerable patterns all come from repo-controlled config (Nx project globs, `allowDefaultProject`, api-extractor bundled-package names, Vue `dataAttributes`). Deferred: no untrusted pattern input, dev-only, and no non-breaking upstream fix.

**Fix applied:** None for the nx/typescript-estree/api-extractor/@vue/language-core paths (accepted risk). The glob-owned paths are fixed in the glob section.

**Follow-up:** Re-check when nx, typescript-eslint and `@microsoft/api-extractor` move to `minimatch@11`.

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

5 paths found (all dev-only):

- `.>rimraf@6.1.3>glob@13.0.6` (also via `react-datasheet-grid`, `synapse-client`, `synapse-types`): vulnerable — `rimraf@6.1.4` (2026-11-03) depends on `glob@^14.0.3`.
- `packages__aridhia-client>rimraf@5.0.10>glob@10.5.0`: vulnerable — rimraf 5 declares `glob@^10.3.7`; pinned by the root override `"glob@>=10.0.0 <11.0.0": "10.5.0"`.
- `packages__aridhia-client|packages__synapse-client>@openapitools/openapi-generator-cli@2.41.0>glob@13.0.6`: vulnerable — exact pin. `2.42.2` pins `glob@14.0.4` but was published 2026-11-11 and is blocked by `minimumReleaseAge` (72h); `2.42.0`/`2.42.1` still pin `13.0.6`.
- `packages__synapse-react-client>@storybook/react-vite@10.6.1>@joshwooding/vite-plugin-react-docgen-typescript@0.7.0>glob@13.0.6`: vulnerable — `@storybook/react-vite@10.6.7` (latest) still declares `^0.7.0`, and 0.7.0 is the newest 0.7.x; the plugin drops glob only in 0.9.x.

**Fix rationale:** rimraf: parent update (all workspaces raised to `^6.1.4`; aridhia-client moves from rimraf 5 to 6, which only changes the CLI's Node floor to 20 — its scripts pass shell-expanded paths, so behavior is unchanged). That leaves no `glob@10`, so the obsolete `glob@>=10.0.0 <11.0.0` override was removed. openapi-generator-cli and the docgen plugin have no usable patched parent today, so targeted overrides were added. Both only call `glob.sync(pattern, { cwd })` / `globSync(pattern, { absolute, cwd, ignore, nodir })`, which glob 14 keeps (its breaking changes are to `Pattern`/`GlobWalker` internals, the `debug` option, and absolute `ignore` roots). `glob@14.0.4` is the version openapi-generator-cli 2.42.2 itself ships. Upgrading the `glob@14` line also removes the `glob>minimatch` paths from the minimatch advisory.

**Fix applied:**

- `pnpm update "rimraf@^6.1.4" --recursive` (root, aridhia-client, react-datasheet-grid, synapse-client, synapse-types).
- Root `pnpm.overrides`: removed `"glob@>=10.0.0 <11.0.0": "10.5.0"`; added `"@openapitools/openapi-generator-cli@2.41.0>glob": "^14.0.4"` and `"@joshwooding/vite-plugin-react-docgen-typescript@0.7.0>glob": "^14.0.4"`; `pnpm install --no-frozen-lockfile`.
- `pnpm why glob --recursive` → only `glob@7.2.3`, `8.1.0` (outside the vulnerable range) and `14.0.4`.

**Testing:** `pnpm generate` in `packages/aridhia-client` (rimraf 6 + openapi-generator-cli 2.41.0 on glob 14) succeeded; `aridhia-client` and `synapse-types` `clean`/`build` succeeded (rimraf 6); `storybook build` for synapse-react-client succeeded with react-docgen-typescript on glob 14 (371 output chunks carry `__docgenInfo`).

**Follow-up:** Once `@openapitools/openapi-generator-cli@2.42.2` clears `minimumReleaseAge`, bump to it and drop the openapi-generator-cli glob override. Drop the docgen override when `@storybook/react-vite` moves to `@joshwooding/vite-plugin-react-docgen-typescript@>=0.9`.

## fast-xml-parser

```
┌─────────────────────┬────────────────────────────────────────────────────────┐
│ low                 │ fast-xml-parser: Quadratic CPU consumption scanning    │
│                     │ unterminated stop-node tags                            │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Package             │ fast-xml-parser                                        │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Vulnerable versions │ <=5.11.2                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Patched versions    │ >=5.12.0                                               │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ Paths               │ packages__synapse-react-client>@aws-sdk/client-        │
│                     │ s3>@aws-sdk/core>@aws-sdk/xml-builder>fast-xml-parser  │
├─────────────────────┼────────────────────────────────────────────────────────┤
│ More info           │ https://github.com/advisories/GHSA-474x-hrwr-fgx4      │
└─────────────────────┴────────────────────────────────────────────────────────┘
```

**Analysis:**

1 path found (production):

- `packages__synapse-react-client>@aws-sdk/client-s3@3.1064.0>@aws-sdk/core@3.974.19>@aws-sdk/xml-builder@3.972.29>fast-xml-parser@5.7.3`: vulnerable — xml-builder 3.972.29/30 exact-pin `fast-xml-parser@5.7.3`; 3.972.31+ drops the dependency.

**Fix rationale:** `@aws-sdk/core@3.974.19` declares `@aws-sdk/xml-builder@^3.972.29`, so a lockfile-only update reaches `3.972.43` (published 2026-11-09, past `minimumReleaseAge`), which no longer depends on fast-xml-parser. No package.json changes and no `@aws-sdk/client-s3` bump needed.

**Fix applied:** `pnpm update @aws-sdk/xml-builder --recursive`. `pnpm why fast-xml-parser --recursive` → no results; `@aws-sdk/xml-builder@3.972.43` only. Also adds `@smithy/types@4.20.0` (xml-builder's own dep) alongside the existing 4.14.3.

**Testing:** Throwaway script ran the real `S3` client and `lib-storage` `Upload` against a local HTTP server returning S3 XML: `ListObjectsV2` parsed keys/sizes/ETags (including `&amp;` entity), a 403 `<Error>` body surfaced as `AccessDenied: nope`, and an 11 MiB multipart upload parsed `InitiateMultipartUploadResult`/`CompleteMultipartUploadResult`. `pnpm test run src/synapse-queries/file/UploadToS3.test.ts src/synapse-queries/file/useDirectUploadToS3.test.ts` → 4 passed.

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

1 path found: `apps__SageAccountWeb>vite-plugin-node-polyfills>node-stdlib-browser>crypto-browserify>browserify-sign>elliptic@6.6.1` — vulnerable; 6.6.1 is the latest elliptic and no patched version exists. `browserify-sign@4.2.6` (latest) still requires `elliptic@^6.6.1`.

**Fix rationale:** No fix available upstream. Accepted risk (unchanged from previous audits).

**Fix applied:** None.

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

2 paths found (deepmerge@4.3.1 is the latest release; no patched version exists):

- `packages__markdown-it-container>@rollup/plugin-node-resolve@15.3.1>deepmerge`: dev-only; `@rollup/plugin-node-resolve@16.0.3` (latest) still declares `^4.2.2`.
- `packages__synapse-react-client>clickable-json>nice-ui>react-embed>react-player@1.15.3>deepmerge`: production; merges developer-supplied player config, not user input.

**Fix rationale:** No fix available upstream. Accepted risk (unchanged from previous audits).

**Fix applied:** None.
