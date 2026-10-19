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
