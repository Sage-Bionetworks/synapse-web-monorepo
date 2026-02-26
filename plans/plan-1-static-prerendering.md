# Plan 1: Static Pre-rendering via React Router Framework Mode

## Goal

Migrate the NF portal to React Router Framework Mode with static pre-rendering (`ssr: false` + `prerender()`). This generates static HTML files for known routes at **build time** — improving SEO and time-to-first-paint for both list pages and individual record detail pages (studies, datasets, tools, etc.) with no change to the deployment infrastructure (S3 + CloudFront / Caddy continue to work as-is).

This plan is a prerequisite for [Plan 2](./plan-2-true-ssr.md), which adds true per-request SSR.

## Background

The current portal is a pure client-side SPA. `index.html` ships an empty `<div id="root">` and React bootstraps entirely in the browser. Search engines and social link previews receive no meaningful HTML content. Pre-rendering fixes this by running the React render at build time and writing the output to static `.html` files — one per route.

The React Router v7 Framework Mode migration path from the current `RouterProvider` + `createBrowserRouter` setup is officially documented at `reactrouter.com/upgrading/router-provider`.

### A note on detail pages and query string parameters

The NF portal's detail pages currently identify records via query string parameters, e.g.:

```
/Explore/Datasets/DetailsPage?id=syn123
/Explore/Studies/DetailsPage?studyId=syn456
```

React Router's `prerender()` function operates on **pathnames only** — it has no mechanism to enumerate query string variants. If the URLs remain in this shape, `prerender()` can only ever produce a single generic render of `/Explore/Datasets/DetailsPage` with no `?id=` present, which hits the "not found" branch and generates no useful content. **Static pre-rendering of individual records therefore requires moving the record identifier into the path** (P1.7 below), for example:

```
/Explore/Datasets/syn123
/Explore/Studies/syn456
```

With the `/DetailsPage` segment removed, the slug alone carries the meaning — e.g., `/Explore/Datasets/syn123` reads clearly as "the dataset syn123 within Explore". The existing sitemap tooling (`sitemapConfig.ts` + `queryTableForSitemap.ts`) already queries Synapse at build time to enumerate all record IDs per detail page type. That same logic is directly reusable as the data source for `prerender()`, making the enumeration step well-understood and low-risk. Phase 2 below describes how to wire it in.

---

## Phase 0 — Blockers (must be resolved before any SSR build attempt)

These issues will cause hard crashes in a Node.js render environment. Fix them first in `synapse-react-client` and `synapse-portal-framework` before touching any build config.

### P0.1 — Fix module-level `window.location.hostname` in `getEndpoint.ts`

**File:** `packages/synapse-react-client/src/utils/getEndpoint.ts` (line ~32)

```ts
// CURRENT — crashes Node.js at import time:
const DEFAULT_SYNAPSE_PORTAL = getSynapsePortalEndpoint(
  window.location.hostname,
)

// FIX — defer to call time:
function getDefaultSynapsePortal() {
  if (typeof window === 'undefined') return getSynapsePortalEndpoint('')
  return getSynapsePortalEndpoint(window.location.hostname)
}
```

This is the only module-level `window` access in the critical import path. It must be fixed before any SSR build will start. Confirm no other module-level (i.e., outside a function or `useEffect`) browser global accesses exist by searching for `^(const|let|var)\s.*window\.` at the top level of any file that is imported transitively from `Portal.tsx`.

> **Risk:** This file is in `synapse-react-client`, which is shared across all 15 portals, `SageAccountWeb`, and Storybook. Changes must be purely additive — the `typeof window === 'undefined'` guard is a no-op in browsers. Run `pnpm nx run synapse-react-client:test` after the change.

### P0.2 — Move `QueryClient` instantiation inside `Portal` component

**File:** `apps/synapse-portal-framework/src/Portal.tsx` (line ~14)

```ts
// CURRENT — module-level singleton, shared across all renders:
const queryClient = new QueryClient(defaultQueryClientConfig)

function Portal(props: PortalProps) { ... }

// FIX — per-render instance (stable via useRef):
function Portal(props: PortalProps) {
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )
  ...
}
```

For static pre-rendering, renders are sequential at build time so cross-request leakage is not a security issue. However this fix is required before Phase 3 (true SSR) and is cheap to do now. It also removes a subtle bug where hot-module reload in dev could share stale query state.

> **Risk:** Low. `useState` initializer runs once per component mount. No behavioral change in browser. Verify with `pnpm nx run synapse-portal-framework:test`.

### P0.3 — Audit and guard remaining `window`/`document` accesses in the render path

The following files contain browser global access that may be called during a render (not just inside `useEffect` or event handlers). Each needs a `typeof window !== 'undefined'` guard or must be moved to a `useEffect`:

| File                                                                 | Usage                                                               | Action                                                      |
| -------------------------------------------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| `synapse-portal-framework/src/components/AppInitializer.tsx`         | `window.addEventListener` (line ~61)                                | Already in effect — verify it is inside `useEffect`         |
| `synapse-portal-framework/src/utils/useSetCanonicalUrl.ts`           | `document.querySelector`, `document.head`, `document.createElement` | Move entirely to `useEffect` if not already                 |
| `synapse-react-client/src/utils/AppUtils/AppUtils.ts`                | `localStorage`, `window.location`, `window.top`                     | Verify all usages are inside hooks/effects, not render body |
| `synapse-react-client/src/utils/hooks/useDetectSSOCode.ts`           | `window.location.href` (line ~79), `localStorage`                   | Verify inside `useEffect`                                   |
| `synapse-react-client/src/utils/context/DocumentMetadataContext.tsx` | `document.title`, `document.querySelector('meta')`                  | Must be `useEffect`-only (see P0.4)                         |

The test for correctness: the `renderToString` call in Phase 2 must complete without any `ReferenceError: window is not defined` or `ReferenceError: document is not defined` errors.

> **Risk:** Broad surface area in `synapse-react-client`. Work methodically. A `renderToString` smoke test (see P2.5) is the definitive validation gate.

### P0.4 — Decouple `DocumentMetadataContext` from direct DOM writes

**File:** `packages/synapse-react-client/src/utils/context/DocumentMetadataContext.tsx`

Currently sets `document.title` and manipulates `meta` tags directly. For pre-rendering, `<title>` and `<meta name="description">` must be emitted as React elements inside `<head>` by `root.tsx` (see P1.3), reading from context. The `useEffect` DOM writes can remain as a client-side fallback, but must not execute during server render.

This is important for SEO — it is one of the primary benefits of pre-rendering.

> **Risk:** Medium. The `DocumentMetadataContext` is used across many SRC components. The change is to add server-render output (React elements in `<head>`) without removing the existing `useEffect` path. No breaking change.

---

## Phase 1 — React Router Framework Mode Migration

### P1.1 — Add `@react-router/dev` to `synapse-portal-framework`

```bash
pnpm add -D @react-router/dev --filter @sage-bionetworks/synapse-portal-framework
```

In `vite.config.ts` (or the shared `portals-vite-config.ts`), replace `@vitejs/plugin-react` with `reactRouter()` from `@react-router/dev/vite`:

```ts
// packages/vite-config/src/portals-vite-config.ts (new SSR-mode config path)
import { reactRouter } from '@react-router/dev/vite'

// NEW: separate ConfigBuilder path for Framework Mode
// The existing portalsSharedViteConfig remains for non-migrated portals
export const portalsFrameworkViteConfig = new ConfigBuilder()
  .setFrameworkMode(true) // skips @vitejs/plugin-react, adds reactRouter()
  .setIncludeVitestConfig(true)
  .build()
```

The `ConfigBuilder` needs a `setFrameworkMode(true)` option that:

- Omits `nodePolyfills()` (Node has these natively in the SSR build)
- Omits browser `resolve.alias` entries (`fs → memfs`, `stream → stream-browserify`, etc.) for the SSR build
- Adds `ssr: { noExternal: [/^@mui\//, /^@emotion\//] }` so Vite bundles MUI/Emotion (their CJS/ESM dual-publish causes issues when externalized)
- Adds `reactRouter()` plugin instead of `@vitejs/plugin-react`

> **Risk (P1.1):** The `vite-config` `ConfigBuilder` is shared across all packages. Adding a new mode must not change behavior for existing consumers. Gate the new path behind the `setFrameworkMode(true)` flag and leave existing paths unchanged.

### P1.2 — Create `react-router.config.ts` for the NF portal

**New file:** `apps/portals/nf/react-router.config.ts`

```ts
import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  ssr: false, // static pre-render only; no Node server required
  async prerender() {
    // Phase 2 will expand this list
    return [
      '/',
      '/Explore/Studies',
      '/Explore/Datasets',
      '/Explore/Files',
      '/Explore/Publications',
      '/Explore/Tools',
      '/Explore/Initiatives',
      '/About',
      '/DataAccess',
      '/News',
    ]
  },
} satisfies Config
```

> **Risk:** The `prerender()` list must exactly match routes defined in `routesConfig.tsx`. A route in the list that does not exist in the router will produce a build error. A route that exists but is missing from the list will remain client-rendered (acceptable for Phase 1).

### P1.3 — Create `root.tsx` for the NF portal

**New file:** `apps/portals/nf/src/root.tsx`

This replaces the role of `index.html` + `vite-plugin-html`. It renders the full HTML document shell.

```tsx
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />   {/* React Router injects route-level <title> and <meta> here */}
        <Links />  {/* React Router injects stylesheet links here */}
        {/* GTM script — moved from vite-plugin-html headContent */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})(...)` }} />
      </head>
      <body>
        {/* GTM noscript — moved from vite-plugin-html gtmNoscript */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPW4KS62" ... />
        </noscript>
        <div id="root">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}
```

The `Meta` component in Framework Mode renders whatever is returned by route `meta()` functions, including the `<title>` and `<meta name="description">` that `DocumentMetadataContext` previously wrote via `document.title`. See P0.4 for how to connect route meta to the portal's document metadata context.

> **Risk:** `vite-plugin-html` is no longer used in Framework Mode. Remove it from the NF portal's vite config to avoid conflicts. The Bootstrap CSS `<link>` currently injected by `vite-plugin-html` must also move to `root.tsx` or a CSS import.

### P1.4 — Create `entry.client.tsx`

**New file:** `apps/portals/nf/src/entry.client.tsx`

```tsx
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter />
    </StrictMode>,
  )
})
```

This replaces `src/index.tsx`. The `HydratedRouter` component picks up the pre-rendered HTML and hydrates it. Note that it hydrates the entire `document` (not just `#root`) because `root.tsx` owns `<html>`.

> **Risk:** The existing `src/index.tsx` must be removed or excluded from the build. Framework Mode will error if both are present. Rename the old file to `_index.tsx.bak` during migration and delete it once validated.

### P1.5 — Convert `Portal.tsx` to Framework Mode

**File:** `apps/synapse-portal-framework/src/Portal.tsx`

`createBrowserRouter` + `RouterProvider` are removed. The Framework Mode router is provided automatically by `HydratedRouter` on the client and the Framework Mode Vite plugin on the server. `Portal.tsx` becomes a provider-only component that wraps `<Outlet />`:

```tsx
// Portal.tsx in Framework Mode
import { Outlet } from 'react-router'

function Portal(props: PortalProps) {
  const { palette, ...context } = props
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )
  const theme = useMemo(() => createTheme(mergeTheme({ palette })), [palette])
  const defaultTitle = import.meta.env.VITE_PORTAL_NAME ?? undefined

  return (
    <PortalContextProvider value={context}>
      <CookiesProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <DocumentMetadataProvider defaultTitle={defaultTitle}>
              <Outlet />
            </DocumentMetadataProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </CookiesProvider>
    </PortalContextProvider>
  )
}
```

The route tree (`routesConfig.tsx`) still provides the child routes. `Portal` is now a layout route component rather than the router owner.

> **Risk:** This is the most invasive change to `synapse-portal-framework`. All 15 portals use this component. Once changed, all portals must use Framework Mode. Consider keeping both versions (`Portal.tsx` and `PortalFramework.tsx`) during the transition, migrating portals one by one, then deleting the old version.

### P1.6 — Update `routes.ts` or keep `routesConfig.tsx`

Framework Mode supports both a `routes.ts` file (with `file:` references) and the existing `RouteObject[]` array via `flatRoutes()` or explicit listing. For a lower-risk migration, keep the existing `routesConfig.tsx` and reference it from a `routes.ts` shim:

```ts
// apps/portals/nf/src/routes.ts
import { routeConfig } from './config/routesConfig'
export default routeConfig
```

Framework Mode accepts the same `lazy: () => import(...)` pattern used today. No immediate change to individual route files is required.

> **Risk:** Low. This is the minimal-change path. Converting to `file:` references is a future optimization, not required for pre-rendering.

---

### P1.7 — Migrate detail page routes from query params to clean path slugs

**This is the prerequisite for pre-rendering individual records.** See the "Background" section above for why.

Each detail page route currently uses a fixed pathname ending in `/DetailsPage` and a query string parameter to identify the record. Both change: the `/DetailsPage` suffix is dropped (it is redundant once the record slug is in the path), and the identifier moves from the query string into a path segment. The page component reads it from `useParams()` instead of `useGetPortalComponentSearchParams()`.

#### Route definition changes (`routesConfig.tsx`)

Each detail page route is replaced. The old `/DetailsPage` static segment is removed and the record identifier becomes the dynamic final segment:

```ts
// BEFORE:
{
  path: 'Explore/Datasets/DetailsPage',
  lazy: () => import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
}

// AFTER:
{
  path: 'Explore/Datasets/:id',
  lazy: () => import('@/pages/DatasetDetailsPage').then(convertModuleToRouteObject),
}
```

Apply this change for all six detail page types defined in `sitemapConfig.ts`:

| Old route path                    | New route path                    | Old query param  | New path param   |
| --------------------------------- | --------------------------------- | ---------------- | ---------------- |
| `Explore/Initiatives/DetailsPage` | `Explore/Initiatives/:initiative` | `?initiative=`   | `/:initiative`   |
| `Explore/Datasets/DetailsPage`    | `Explore/Datasets/:id`            | `?id=`           | `/:id`           |
| `Explore/Studies/DetailsPage`     | `Explore/Studies/:studyId`        | `?studyId=`      | `/:studyId`      |
| `Explore/Tools/DetailsPage`       | `Explore/Tools/:resourceId`       | `?resourceId=`   | `/:resourceId`   |
| `Explore/Hackathon/DetailsPage`   | `Explore/Hackathon/:id`           | `?id=`           | `/:id`           |
| `Organizations/DetailsPage`       | `Organizations/:abbreviation`     | `?abbreviation=` | `/:abbreviation` |

Detail pages with tabs (Studies, Tools, Hackathon, Organizations) have child routes. The path param belongs on the parent route; child tab routes continue to use relative paths:

```ts
{
  path: 'Explore/Studies/:studyId',
  lazy: () => import('@/pages/StudyDetailsPage/StudyDetailsPage').then(convertModuleToRouteObject),
  children: [
    { index: true, element: <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} /> },
    { path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH, lazy: () => import(...) },
    // ...
  ]
}
```

#### Page component changes

Each detail page component calls `useGetPortalComponentSearchParams()` to extract the record ID. Replace this with `useParams()` from `react-router`:

```tsx
// BEFORE (DatasetDetailsPage.tsx):
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
function DatasetDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()
  ...
}

// AFTER:
import { useParams } from 'react-router'
function DatasetDetailsPage() {
  const { id } = useParams<{ id: string }>()
  ...
}
```

The `id` value is then passed to `DetailsPage` and `CardContainerLogic` exactly as before — those components accept the identifier as a prop and are not affected by this change.

#### `baseURL` config changes

Card link generators throughout the portal use a `baseURL` string to construct detail page links. These are defined in `src/config/synapseConfigs/` and build URLs of the form `${baseURL}?${paramName}=${value}`. With the new routing shape, they must instead produce `${baseURL}/${value}` — which requires either updating the `CardLink` configuration shape, or changing how the URL is constructed in the card renderer.

Files that need `baseURL` values updated (the `/DetailsPage` segment is removed from each):

| File                              | Current `baseURL`                                                 | New `baseURL`                                                                  |
| --------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `synapseConfigs/tools.tsx`        | `'Explore/Tools/DetailsPage'`                                     | `'Explore/Tools'`                                                              |
| `synapseConfigs/publications.ts`  | `'Explore/Studies/DetailsPage'`                                   | `'Explore/Studies'`                                                            |
| `synapseConfigs/hackathons.ts`    | `'Explore/Hackathon/DetailsPage'`                                 | `'Explore/Hackathon'`                                                          |
| `synapseConfigs/organizations.ts` | `'Organizations/DetailsPage'`                                     | `'Organizations'`                                                              |
| `synapseConfigs/initiatives.ts`   | `'Explore/Initiatives/DetailsPage'`                               | `'Explore/Initiatives'`                                                        |
| `synapseConfigs/datasets.ts` (×2) | `'Explore/Datasets/DetailsPage'`, `'Explore/Studies/DetailsPage'` | `'Explore/Datasets'`, `'Explore/Studies'`                                      |
| `synapseConfigs/studies.ts` (×3)  | `'Explore/Studies/DetailsPage'`                                   | `'Explore/Studies'`                                                            |
| `pages/HomePage.tsx`              | `baseURL: 'Explore/Studies/DetailsPage'`                          | `'Explore/Studies'`                                                            |
| `navbarConfig.ts` (×6 entries)    | `'/Organizations/DetailsPage?abbreviation=CTF'` etc.              | `'/Organizations/CTF'` etc. (hardcoded paths, not `baseURL` — update directly) |

Also update the one hardcoded URL in `synapse-portal-framework`:

- `apps/synapse-portal-framework/src/components/nf/NFBrowseToolsPage.tsx` line 238: `toolDetailPageURL={'/Explore/Tools/DetailsPage?resourceId='}` → `toolDetailPageURL={'/Explore/Tools/'}`

The `CardLink` configuration's URL construction logic (in `synapse-react-client`) appends the param as a query string (`?paramName=value`). Once `baseURL` no longer contains `/DetailsPage`, the card renderer must append the value as a **path segment** instead. This is a change to either:

- The `CardLink` type to add a `urlParamStyle: 'path' | 'query'` discriminator, or
- The card renderer to detect the new routing convention from the absence of `/DetailsPage` in `baseURL`

Prefer the explicit discriminator — it is clearer and avoids fragile string-sniffing.

#### Redirect from old URLs

Existing bookmarks and external links use both the old path form (`/DetailsPage`) and the old query string form. Both must redirect to the new clean slug URL. A single redirect route at each old path handles this:

```ts
// In routesConfig.tsx — add alongside each new slug route:
{
  path: 'Explore/Datasets/DetailsPage',  // catches the old path with ?id= query string
  lazy: () => import('@/pages/LegacyDetailsPageRedirect').then(convertModuleToRouteObject),
}
```

The redirect component reads the query string param and navigates to the new path-only URL:

```tsx
// apps/portals/nf/src/pages/LegacyDetailsPageRedirect.tsx
import { Navigate, useLocation } from 'react-router'

export default function LegacyDetailsPageRedirect({
  paramName,
}: {
  paramName: string
}) {
  const { search, pathname } = useLocation()
  const params = new URLSearchParams(search)
  const id = params.get(paramName)
  // Redirect /Explore/Datasets/DetailsPage?id=syn123 → /Explore/Datasets/syn123
  const newBase = pathname.replace(/\/DetailsPage$/, '')
  if (!id) return <Navigate to={newBase} replace />
  return <Navigate to={`${newBase}/${encodeURIComponent(id)}`} replace />
}
```

A single parameterized component covers all six detail page types.

#### Sitemap config and `extractRoutes.ts` updates

`sitemapConfig.ts` currently stores `path: 'Explore/Datasets/DetailsPage'` and `generateDynamicUrls` constructs `?id=` query-string URLs. Both must be updated to the new path form.

In `sitemapConfig.ts`, update each `path` to the new base (without `/DetailsPage`):

```ts
// BEFORE:
{ path: 'Explore/Datasets/DetailsPage', primaryKeyColumn: 'id', ... }
// AFTER:
{ path: 'Explore/Datasets', primaryKeyColumn: 'id', ... }
```

In `generateSitemap.ts`, `generateDynamicUrls` currently produces:

```ts
;`${baseUrl}/${config.path}?${encodedParamName}=${encodedId}`
```

Change to a path segment:

```ts
;`${baseUrl}/${config.path}/${encodeURIComponent(id)}`
```

In `extractRoutes.ts`, the `isDetailsPage` filter (`encodedPath.endsWith('/DetailsPage')`) and `isDetailsPageSubRoute` filter (`encodedPath.includes('/DetailsPage/')`) are no longer meaningful once the routes are renamed. Remove or update these filters — the new routes with `:param` segments are already excluded by the existing `hasParams` check, which is correct behaviour (static sitemap paths don't include the param; dynamic paths come from `sitemapConfig`).

> **Risk (P1.7):** This is a **breaking URL change on two axes**: the `/DetailsPage` segment is removed AND the query string becomes a path segment. Both the old-path-with-query-string form (`/Explore/Datasets/DetailsPage?id=syn123`) and any hypothetical path-only form (`/Explore/Datasets/DetailsPage`) must redirect. Verify redirects QA before deploying. The `CardLink` URL construction change (query → path segment) in `synapse-react-client` affects card rendering across all portals that use `baseURL`-based card links — scope that change carefully. The navbar hardcoded paths in `navbarConfig.ts` are simple string replacements but must be tested end-to-end since they point to specific organization records.

---

## Phase 2 — Static Pre-rendering

### P2.1 — Configure `prerender()` for static list routes

Update `react-router.config.ts` (created in P1.2) with the static routes — routes whose content does not depend on a record identifier or user authentication:

```ts
async prerender() {
  return [
    '/',
    '/Explore/Studies',
    '/Explore/Datasets',
    '/Explore/Files',
    '/Explore/Publications',
    '/Explore/Tools',
    '/Explore/Initiatives',
    '/Explore/Hackathon',
    '/Research Tools Central/Browse Tools',
    '/Organizations',
    '/Search',
  ]
},
```

Run `pnpm nx run nf:build` and verify that `build/` contains individual `.html` files for each of these routes.

### P2.2 — Enumerate record IDs at build time and pre-render detail pages

With path params in place (P1.7), `prerender()` can return individual detail page paths — one per record. The `fetchResourceIds` function from `queryTableForSitemap.ts` already implements exactly this enumeration: it queries Synapse anonymously, paginates through all rows, and returns an array of primary key values. Reuse it directly in `react-router.config.ts`.

```ts
// apps/portals/nf/react-router.config.ts
import type { Config } from '@react-router/dev/config'
import { fetchResourceIds } from '@sage-bionetworks/synapse-portal-framework/sitemap/queryTableForSitemap'
import sitemapConfig from './src/config/sitemapConfig'

export default {
  appDirectory: 'src',
  ssr: false,
  async prerender() {
    const staticRoutes = [
      '/',
      '/Explore/Studies',
      '/Explore/Datasets',
      // ... (full list from P2.1)
    ]

    const dynamicRoutes: string[] = []

    for (const detailPage of sitemapConfig.detailPages) {
      const result = await fetchResourceIds(detailPage)
      if (!result.success) {
        console.warn(
          `Skipping pre-render for ${detailPage.path}: ${result.error}`,
        )
        continue
      }
      for (const id of result.ids) {
        // e.g. '/Explore/Datasets/syn123'  (detailPage.path is now 'Explore/Datasets')
        dynamicRoutes.push(`/${detailPage.path}/${encodeURIComponent(id)}`)
      }
    }

    console.log(
      `Pre-rendering ${staticRoutes.length} static + ${dynamicRoutes.length} dynamic routes`,
    )
    return [...staticRoutes, ...dynamicRoutes]
  },
} satisfies Config
```

This reuses the existing `sitemapConfig.ts` (the single source of truth for which detail pages exist and which SQL and column to use), and `fetchResourceIds` (the paginated Synapse query logic). No new API integration work is required.

The queries in `queryTableForSitemap.ts` run **anonymously** (no auth token) via a bare `SynapseClient`. This means only publicly accessible tables can be enumerated. If a detail page's backing table requires authentication, the enumeration will fail gracefully (the `result.success` check above skips and warns, falling back to no pre-rendering for that type). In practice the NF portal's tables are all public.

> **Risk:** Build time increases proportionally with total record count across all detail page types. Each pre-rendered path triggers a full React render cycle. Measure actual build time after P1.7 is in place before setting expectations. If build time becomes prohibitive, consider limiting pre-rendering to a subset (e.g., most recently modified records, using `ORDER BY modifiedOn DESC LIMIT 200` in the SQL). Also: the build will fail the Synapse API calls if the Synapse production environment is unreachable during CI. Add retry logic or a `--skip-dynamic-prerender` flag to the build script as a fallback.

### P2.3 — Validate pre-rendered HTML output

After `pnpm nx run nf:build`:

1. Check that `build/index.html` contains meaningful HTML (not just `<div id="root"></div>`).
2. Check that `<title>` and `<meta name="description">` are present and correct.
3. Check Open Graph tags (`og:title`, `og:description`, `og:image`).
4. Serve the build locally (`pnpm nx run nf:preview`) and inspect the network tab — the initial HTML response should contain rendered content.

### P2.4 — Validate hydration (no hydration mismatches)

In the browser console after loading the pre-rendered page, check for React hydration warnings:

```
Warning: Text content did not match. Server: "..." Client: "..."
Warning: An error occurred during hydration.
```

These warnings indicate that the server-rendered HTML does not match what React renders on the client. Common causes:

- A component reads `window.location` during render (should be `useEffect`-only)
- A component uses `Math.random()` or `Date.now()` without a stable seed
- A component conditionally renders based on `typeof window !== 'undefined'` without suppressing the hydration mismatch

Fix each mismatch before proceeding. This is the validation gate for Phase 0 work (P0.1–P0.4).

### P2.5 — Add a Node.js SSR smoke test

Add a Vitest test that imports the portal's route tree and calls `renderToString`:

```ts
// apps/portals/nf/src/__tests__/ssr-smoke.test.ts
import { renderToString } from 'react-dom/server'
import {
  createStaticRouter,
  createStaticHandler,
  StaticRouterProvider,
} from 'react-router'
import { routeConfig } from '../config/routesConfig'

test('renders homepage without throwing', async () => {
  const { query, dataRoutes } = createStaticHandler(routeConfig)
  const context = await query(new Request('http://localhost/'))
  if (context instanceof Response) throw new Error('Unexpected redirect')
  const router = createStaticRouter(dataRoutes, context)
  const html = renderToString(
    <StaticRouterProvider router={router} context={context} />,
  )
  expect(html).toContain('NF') // portal name appears in rendered output
})
```

This test will catch any `ReferenceError: window is not defined` regressions in the shared library code.

### P2.6 — Verify S3 / CloudFront deployment compatibility

The current deployment serves `index.html` as a fallback for all unmatched paths (SPA pattern). With pre-rendering, each route has its own `index.html` file (e.g., `build/Explore/Studies/index.html`). Both patterns can coexist:

- CloudFront's custom error response (404 → `index.html`) handles routes that are NOT pre-rendered (dynamic params, client-only routes).
- Pre-rendered routes are served directly as static files.

Verify the S3 bucket policy and CloudFront distribution settings allow this. No change should be required if the existing 404-fallback is in place.

---

## Phase 3 — MUI / Emotion SSR Configuration

With Framework Mode using `hydrateRoot(document, ...)`, MUI and Emotion require additional setup to function correctly during pre-rendering and hydration. Without this, the pre-rendered HTML is missing Emotion-generated `<style>` tags (causing FOUC) and MUI hooks like `useMediaQuery` produce incorrect server-side defaults (causing hydration mismatches).

### P3.1 — Create a custom `entry.server.tsx` with Emotion cache extraction

The default `entry.server.tsx` renders `<ServerRouter>` without an Emotion `CacheProvider`. This means MUI component styles are not collected during pre-rendering — the HTML ships with the correct DOM structure but no inline `<style>` tags. On hydration the styles appear, causing a flash of unstyled content.

**New file:** `apps/portals/nf/src/entry.server.tsx`

The custom server entry must:

1. Create a fresh `@emotion/cache` instance per render request
2. Wrap `<ServerRouter>` with `<CacheProvider>`
3. Use `@emotion/server/create-instance`'s `extractCriticalToChunks` + `constructStyleTagsFromChunks` to extract the generated CSS
4. Inject the extracted `<style>` tags into the response HTML

This requires adding `@emotion/server` to the NF portal's dependencies:

```bash
pnpm add @emotion/server --filter nf
```

> **Risk:** Low. This is an additive change — the existing client-side Emotion cache is unaffected. The server cache is per-request. Verify styles appear in the pre-rendered HTML with `pnpm nx run nf:build` then inspect `build/client/index.html`.

### P3.2 — Configure `useMediaQuery` for SSR hydration

MUI's `useMediaQuery` defaults to `false` on the server (no `window.matchMedia`). For pre-rendered static HTML with `ssr: false`, the server has no knowledge of the client's viewport width. This causes `DropdownNavButton`'s `isSmallView` to be `false` during pre-render, so the HTML always contains the desktop navbar layout.

On a narrow viewport, hydration sees the desktop HTML but immediately switches to the mobile Accordion layout, causing a hydration mismatch warning and a re-render.

Options (in order of preference):

1. **Use CSS media queries for responsive layout** — Instead of `{isSmallView && <Accordion>}` / `{!isSmallView && <Button>}`, render both variants and use CSS `display: none` to hide the inactive one. This avoids any JS-based hydration mismatch. This is what the MUI docs recommend: _"Try relying on client-side CSS media queries first."_

2. **Accept the two-pass render** — MUI's `useMediaQuery` already does a two-pass render during hydration (first with `defaultMatches`, then with the real value). The hydration mismatch warning is expected and React recovers gracefully. Document this as a known warning.

3. **Provide `ssrMatchMedia` via the theme** — Set a default assumed width (e.g., 1024px) in the MUI theme's `MuiUseMediaQuery.defaultProps.ssrMatchMedia`. This makes the server render match desktop browsers, reducing mismatches on wide viewports but not eliminating them on mobile.

> **Risk:** Option 1 requires refactoring `DropdownNavButton` to render both mobile and desktop variants simultaneously. Medium effort but eliminates the category of bug entirely. Option 2 is zero-effort but leaves the warning and a brief layout shift. Option 3 is low-effort but only reduces (not eliminates) mismatches.

### P3.3 — Audit `hydrateRoot(document)` event delegation implications

React Router Framework Mode uses `hydrateRoot(document, ...)`, which attaches React's event delegation to `document` itself. This differs from the old SPA setup where `createRoot(rootElement)` attached delegation to a child element (e.g., `#root`).

**Consequence:** `event.stopPropagation()` inside a React synthetic event handler **cannot** prevent a native `document.addEventListener('click', ...)` listener from firing, because both operate at the same DOM level. Code that relies on this pattern will break.

**Already fixed:** `Navbar.tsx`'s `handleClickOutside` was updated to use DOM containment checks (`navRef.current.contains(node)`) instead of relying on `stopPropagation()`.

**Action:** Audit all `document.addEventListener` / `window.addEventListener` listeners in the codebase that are paired with `stopPropagation()` calls in React handlers. Each instance is a potential bug. See the systematic search approach below.

> **Risk:** Any component using `document.addEventListener` + `stopPropagation()` coordination will break silently. The fix pattern is the same as Navbar: replace `stopPropagation()` reliance with explicit DOM containment or ref checks.

---

## Success Criteria

- [ ] `pnpm nx run nf:build` completes without errors
- [ ] `build/` contains `.html` files with rendered content for all static routes in `prerender()`
- [ ] `build/Explore/Datasets/` contains one `.html` file per dataset record ID (e.g., `build/Explore/Datasets/syn123.html`), each with the dataset's unique content rendered in the initial HTML response
- [ ] `<title>` and `<meta name="description">` are populated in pre-rendered HTML for both list pages and individual record pages
- [ ] No React hydration warnings in the browser console
- [ ] Old query-string URLs (e.g., `/Explore/Datasets/DetailsPage?id=syn123`) redirect correctly to new slug URLs (`/Explore/Datasets/syn123`)
- [ ] The SSR smoke test passes: `pnpm nx run nf:test -- src/__tests__/ssr-smoke.test.ts`
- [ ] Existing portal behavior is unchanged for routes not in the `prerender()` list
- [ ] All existing tests pass: `pnpm nx run synapse-react-client:test` and `pnpm nx run synapse-portal-framework:test`

---

## Risk Summary

| Risk                                                                                                                      | Severity       | Mitigation                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Module-level `window.location.hostname` in `getEndpoint.ts` crashes Node at import                                        | **Critical**   | P0.1 — must be fixed first. Verify with smoke test.                                                                                                                                                                                                               |
| Detail page URL change (dropping `/DetailsPage`, moving `?id=` to path slug) breaks existing external links and bookmarks | **High**       | P1.7 — redirect from `/Explore/Datasets/DetailsPage?id=syn123` → `/Explore/Datasets/syn123` for each detail page type. Verify redirects in QA before deploying. Communicate URL change if portal links appear in publications or external sites.                  |
| `CardLink` URL construction in `synapse-react-client` appends query strings — must change to path segments                | **High**       | P1.7 — add a `urlParamStyle: 'path' \| 'query'` discriminator to `CardLink`. Change affects card rendering across all portals using `baseURL`-based links. Scope carefully; run all portal smoke tests.                                                           |
| `synapse-portal-framework/Portal.tsx` refactor breaks all portals simultaneously                                          | **High**       | Keep old `Portal.tsx` alongside new `PortalFramework.tsx`. Migrate portals one at a time. Delete old version last.                                                                                                                                                |
| `synapse-react-client` changes affect all 15 portals, SageAccountWeb, and Storybook                                       | **High**       | Changes are purely additive (`typeof window` guards). Run full SRC test suite before merging.                                                                                                                                                                     |
| Hardcoded navbar paths in `navbarConfig.ts` reference specific org record URLs                                            | **Medium**     | P1.7 — update 6 entries from `/Organizations/DetailsPage?abbreviation=X` to `/Organizations/X`. Test each navbar link end-to-end in QA.                                                                                                                           |
| Hydration mismatches cause broken UI or console noise                                                                     | **Medium**     | Fix all browser-API-in-render usages in P0.3. Hydration smoke test in P2.5 is the gate.                                                                                                                                                                           |
| `vite-plugin-html` template tokens (`<%- headContent %>`) not carried over                                                | **Medium**     | P1.3 — move all injected content to `root.tsx`. Verify meta tags and GTM script in pre-rendered HTML output.                                                                                                                                                      |
| Build time grows proportionally with record count (one render per detail page record)                                     | **Medium**     | Measure after P1.7. If excessive, limit pre-rendering to a capped subset (e.g., `LIMIT 200` in the SQL) and let the remainder be client-rendered.                                                                                                                 |
| Synapse API unavailable during CI breaks the build                                                                        | **Medium**     | Add a `--skip-dynamic-prerender` fallback flag. `fetchResourceIds` already returns `success: false` gracefully — the `prerender()` implementation should warn and continue rather than throw.                                                                     |
| `sitemapConfig.ts` paths and `generateDynamicUrls` must both be updated to the new URL shape                              | **Low**        | P1.7 — update `path` values in `sitemapConfig.ts` (drop `/DetailsPage`) and change `generateDynamicUrls` to produce path segments instead of query strings. Also remove now-irrelevant `isDetailsPage` / `isDetailsPageSubRoute` filters from `extractRoutes.ts`. |
| Pre-rendered HTML has unstyled flash (FOUC) during hydration                                                              | **Low-Medium** | Emotion critical CSS extraction is deferred to Plan 2. Acceptable for this phase; note in QA sign-off.                                                                                                                                                            |
| `vite-config` ConfigBuilder changes affect other consumers                                                                | **Low**        | New `setFrameworkMode(true)` path is opt-in. Existing paths are unchanged.                                                                                                                                                                                        |

---
