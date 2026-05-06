# Portal SSG Migration Guide

This guide describes how to migrate a Synapse portal from the SPA (Single-Page
Application) setup to React Router Framework Mode with Static Site Generation
(SSG). The NF portal was migrated first; use it as a reference implementation.

---

## Overview of Changes

| Area             | SPA (before)                                                                 | SSG (after)                                                      |
| ---------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Entry point      | `src/index.tsx` — `createRoot` + `<Portal>` component                        | `src/root.tsx` (HTML shell) + `src/entry.client.tsx` (hydration) |
| Routing          | `src/config/routesConfig.tsx` — `RouteObject[]` with `lazy: () => import(…)` | `src/routes.ts` — `RouteConfig` with `route(path, file)` strings |
| Build tool       | `vite build` (vanilla Vite SPA)                                              | `react-router build` (Framework Mode SSG)                        |
| Dev server       | `vite`                                                                       | `react-router dev`                                               |
| Providers        | Wired inside `<Portal>` (portal-framework)                                   | `src/pages/PortalRoot.tsx` — wraps shared `<PortalRoot>`         |
| Detail page URLs | Query-string: `/Explore/Studies/DetailsPage?studyId=X`                       | Path-segment: `/Explore/Studies/X`                               |
| Meta tags        | Client-side `useDocumentMetadata`                                            | Route `meta()` exports + `loader`/`clientLoader`                 |
| Vite config      | `export default portalsViteConfig` (one-liner)                               | `export default portalsSsgViteConfig` (one-liner)                |

The shared SSG primitives keep most of the new files at 1–2 lines. Only the
files that need portal-specific configuration (routes, sitemap, detail-page
configs, etc.) carry real content.

---

## Step-by-Step Migration

### Step 1: Update `package.json`

#### Add new dependencies

```jsonc
// dependencies
"@react-router/node": "^7.14.0",
"@tanstack/react-query": "^5.80.7",
"isbot": "^5",
"jsdom": "^28.1.0",
"react-cookie": "^7.2.2",

// devDependencies
"@react-router/dev": "^7.14.0",
"@types/node": "^22.19.13",
"vite-plugin-node-polyfills": "^0.26.0",
"vite-plugin-svgr": "^5.2.0",
```

Note: `react-router` itself is already a dependency in all portals — no need to
add or change it.

#### Update scripts

```jsonc
{
  "scripts": {
    "dev": "react-router dev", // was "start": "vite"
    "build": "pnpm save-build-date && react-router build && pnpm run generate-sitemap",
    "preview": "vite preview",
    "typegen": "react-router typegen", // NEW
    "type-check": "tsc --build",
    "lint": "eslint src",
    "build-sitemap-routes": "vite build --config sitemap.vite.config.ts && node build/sitemap-entry.mjs",
    "_generate-sitemap": "pnpm build-sitemap-routes && tsx ../../synapse-portal-framework/src/sitemap/cli.ts \"$VITE_PORTAL_KEY\" --config src/config/sitemapConfig.ts --routes build/sitemap-routes.json --output build/client",
    "generate-sitemap": "dotenv -- pnpm _generate-sitemap",
    "save-build-date": "mkdir -p public && date > public/build-date.txt"
  }
}
```

#### Add `nx` target configuration

```jsonc
{
  "nx": {
    "targets": {
      "typegen": {
        "dependsOn": ["^build"],
        "inputs": [
          "{projectRoot}/react-router.config.ts",
          "{projectRoot}/src/routes.ts"
        ],
        "outputs": ["{projectRoot}/.react-router/types"]
      },
      "type-check": {
        "dependsOn": ["^build", "typegen"]
      }
    }
  }
}
```

---

### Step 2: Replace `tsconfig.json` with the shared SSG config

```json
{
  "extends": "../../../shared/tsconfig.ssg-portal.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "references": [
    { "path": "../../synapse-portal-framework" },
    { "path": "../../../packages/synapse-react-client" },
    { "path": "../../../packages/vite-config" }
  ]
}
```

The shared `tsconfig.ssg-portal.json` captures `rootDirs`, `types`, the
React-Router-generated types include, and the `src/types.d.ts` reference. The
`@/*` path alias stays in the portal-level config because `tsx`-based tooling
(used by the sitemap CLI) resolves `paths` more reliably when they're defined
relative to the consuming tsconfig.

#### Create `src/vite-env.d.ts`

```ts
/// <reference types="vite-config/portal-env" />
```

The `vite-config` package exposes the `VITE_PORTAL_NAME`, `VITE_PORTAL_DESCRIPTION`,
and `VITE_PORTAL_KEY` types — no need to redeclare them per portal.

#### Create `src/types.d.ts`

```ts
// Import MUI type augmentations from 'synapse-react-client' so we can use custom property values defined for our MUI theme
import 'synapse-react-client/ThemeTypes'
```

---

### Step 3: Create `react-router.config.ts`

```ts
import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
import sitemapConfig from './src/config/sitemapConfig'
// Import each detail page's metadata config:
import { metadataConfig as fooMetadata } from './src/pages/FooDetailsPage.config'
// ...repeat for each detail page type

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [
    fooMetadata,
    // ...
  ],
})
```

The shared `createReactRouterConfig` handles all of: enumerating dynamic
detail-page routes, hydrating metadata caches in production, filtering out
legacy `/DetailsPage` paths, and the standard `ssr: false` + concurrency
settings.

If a portal needs additional preloading (e.g. NF's Croissant JSON-LD), pass an
`additionalPreloads` array:

```ts
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'

export default createReactRouterConfig({
  sitemapConfig,
  metadataConfigs: [
    /* ... */
  ],
  additionalPreloads: [preloadAllCroissantMetadata],
})
```

---

### Step 4: Create `vite.config.ts`

```ts
export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/portalsSsgViteConfig'
```

That's the entire file. The shared `portalsSsgViteConfig` wires up the React
Router plugin, the SSR-compatible `nodePolyfills`, MUI/Emotion SSR settings,
and the standard portal port (3001).

To override the port:

```ts
import { createPortalsSsgViteConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/portalsSsgViteConfig'
export default createPortalsSsgViteConfig({ port: 3002 })
```

---

### Step 5: Create `src/root.tsx`

```ts
import {
  createRootMeta,
  Layout,
  links,
} from '@sage-bionetworks/synapse-portal-framework/ssg/root'

export const meta = createRootMeta({
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalDescription: import.meta.env.VITE_PORTAL_DESCRIPTION,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
})
export { Layout, links }
export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/root'
```

`Layout` and `links` are portal-agnostic (Bootstrap CDN, favicon, GTM noscript)
and re-export directly. Only `meta()` reads portal env values, which the portal
must read on its side and pass into `createRootMeta()` — the framework cannot
read `import.meta.env.VITE_*` because those values are baked in at the
consuming app's Vite build.

---

### Step 6: Create `src/entry.client.tsx`

```ts
import '@sage-bionetworks/synapse-portal-framework/ssg/entry.client'
```

Side-effect import only — the framework module performs the `hydrateRoot` call.
The file must live under `src/` because React Router framework mode discovers
it by convention.

---

### Step 7: Create `src/pages/PortalRoot.tsx`

Wrap the shared `<PortalRoot>` component, passing portal config + env values:

```tsx
import PortalRoot from '@sage-bionetworks/synapse-portal-framework/ssg/PortalRoot'
import { navbarConfig } from '../config/navbarConfig'
import palette from '../config/paletteConfig'
import footerConfig from '../config/footerConfig'
import logoHeaderConfig from '../config/logoHeaderConfig'
import logoFooterConfig from '../config/logoFooterConfig'
import headerConfig from '../config/headerConfig'

// CSS side-effects must live in the portal-side wrapper, not the framework.
import '../App.scss'

export default function MyPortalRoot() {
  return (
    <PortalRoot
      portalName={import.meta.env.VITE_PORTAL_NAME ?? ''}
      portalKey={import.meta.env.VITE_PORTAL_KEY ?? ''}
      palette={palette}
      navbarConfig={navbarConfig}
      headerConfig={headerConfig}
      footerConfig={footerConfig}
      logoHeaderConfig={logoHeaderConfig}
      logoFooterConfig={logoFooterConfig}
      // Optional — only set on portals that enable Synapse Chat:
      // synapseChatProps={synapseChatConfig}
    />
  )
}
```

The shared `<PortalRoot>` provides the full provider stack
(`PortalContextProvider` → `CookiesProvider` → `ThemeProvider` →
`CssBaseline` → `QueryClientProvider` → `DocumentMetadataProvider` →
`Outlet`) — portals only supply their config and env values.

If your portal uses KaTeX, also `import 'katex/dist/katex.css'` here.

---

### Step 8: Create `src/pages/RootApp.tsx`

The app shell layout route. Renders the `<App>` component from the framework,
plus any portal-specific children:

```tsx
import App from '@sage-bionetworks/synapse-portal-framework/App'

function RootApp() {
  return <App />
}

export default RootApp
```

If your portal renders extra components inside the shell (e.g.
`<SurveyToast>`, `<RepositoryUnderReviewAlert>`), include them as children, or
pass props (`requireAuthentication`, `defaultRealmId`) that some portals need.
Check your portal's existing `routesConfig.tsx` for what props/children
`<App>` currently receives.

---

### Step 9: Create `src/pages/Explore/layout.tsx`

```tsx
import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        { path: 'Studies' },
        { path: 'Datasets' },
        { path: 'Files' },
        // ... add all Explore tabs for this portal
        // If display name differs from path:
        // { path: 'Hackathon', displayName: 'Hackathon Projects' },
      ]}
    />
  )
}

export default ExploreLayout
```

---

### Step 10: Create `src/routes.ts`

Replace `src/config/routesConfig.tsx` with Framework Mode route definitions.

Key differences from the old `RouteObject[]`:

- Uses `route(path, file)` / `index(file)` / `layout(file)` / `prefix()` helpers
  from `@react-router/dev/routes`
- File paths are **strings** relative to `appDirectory` (`src/`)
- No `lazy: () => import(…)` — the framework handles code splitting automatically
- Inline JSX elements (e.g. `<Navigate>`, `<RedirectWithQuery>`) must be
  extracted into their own route files (see Step 11)
- Shared default-tab redirect components are referenced from a single pair of
  portal-side wrapper files (see Step 12f)

```ts
import { index, layout, prefix, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'

export default [
  layout('pages/PortalRoot.tsx', [
    route('/', 'pages/RootApp.tsx', [
      // Shared utility routes
      route('*', 'pages/ErrorPage.tsx'),
      route('Home', 'pages/HomeRedirect.tsx'),
      route('DownloadCart', 'pages/DownloadCartPage.tsx'),
      route('FileEntity/:entityId', 'pages/FileEntityPage.tsx'),
      route(
        'FileEntity/:entityId/version/:versionNumber',
        'pages/FileEntityPage.tsx',
        { id: 'file-entity-versioned' },
      ),
      route('test-init-error', 'pages/TestInitError.tsx'),

      // Home page
      index('pages/HomePage.tsx'),

      // Explore section
      route('Explore', 'pages/Explore/layout.tsx', [
        route('Studies', 'pages/Explore/studies.tsx'),
        route('Datasets', 'pages/Explore/datasets.tsx'),
        // ...
      ]),

      // Tabbed detail pages — point all index/wildcard routes at the shared
      // wrapper files (see Step 12f). Each route needs a unique `id` since
      // the same file backs multiple routes.
      route(
        'Explore/Studies/:studyId',
        'pages/StudyDetailsPage/StudyDetailsPage.tsx',
        [
          index('pages/DefaultTabIndexRedirect.tsx', { id: 'study-index' }),
          route('*', 'pages/DefaultTabWildcardRedirect.tsx', {
            id: 'study-wildcard',
          }),
          route('Details', 'pages/StudyDetailsPage/StudyDetailsTab.tsx'),
          // ... add all sub-tabs
        ],
      ),
      // ... repeat for each tabbed detail page type

      // Legacy redirects — keep old ?param=value URLs working
      route('Explore/Studies/DetailsPage', 'pages/LegacyStudyRedirect.tsx'),
      // ... repeat for each detail page type
    ]),
  ]),
] satisfies RouteConfig
```

Note: When the same route file is used for multiple routes (e.g. `FileEntityPage.tsx`,
`DefaultTabIndexRedirect.tsx`), pass a unique `{ id: '...' }` option to disambiguate them.

---

### Step 11: Create shared route page files

Framework Mode requires every route to point to a file. Several routes that
were previously inline JSX need small wrapper files.

#### Re-export shared pages from the portal framework

```tsx
// src/pages/ErrorPage.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/ErrorPage'

// src/pages/DownloadCartPage.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/DownloadCartPage'

// src/pages/FileEntityPage.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/FileEntityPage/FileEntityPage'

// src/pages/HomeRedirect.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/HomeRedirect'

// src/pages/TestInitError.tsx
export {
  default,
  clientLoader,
} from '@sage-bionetworks/synapse-portal-framework/pages/TestInitError'
```

---

### Step 12: Migrate detail pages to path-segment URLs

This is the most involved step. Each detail page needs several changes.

#### 12a. Create `src/config/portalMetadata.ts`

This file stays per-portal because it reads `import.meta.env`:

```ts
import { type PortalMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const portalMetadata: PortalMetadata = {
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
}
```

Detail pages and Explore tab pages import from this file rather than reading
`import.meta.env` inline.

#### 12b. Create route path constants (recommended)

Extract tab path strings into a constants file so they can be shared between
`routes.ts`, detail page tab configs, and the outlet context that drives the
shared `DefaultTabIndexRedirect` / `DefaultTabWildcardRedirect`:

```ts
// src/config/routeConstants.ts
export const STUDY_DETAILS_PAGE_DETAILS_TAB_PATH = 'Details'
export const STUDY_DETAILS_PAGE_DATASETS_TAB_PATH = 'Datasets'
export const STUDY_DETAILS_PAGE_FILES_TAB_PATH = 'Files'
// ... repeat for each tabbed detail page type
```

#### 12c. Create a metadata config file

```ts
// src/pages/StudyDetailsPage/StudyDetailsPage.config.ts
import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { studiesSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: studiesSql,
  titleColumn: 'studyName',
  descriptionColumn: 'summary',
  paramName: 'studyId',
}
```

#### 12d. Add `loader`, `clientLoader`, and `meta` exports to the detail page

```tsx
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { useParams } from 'react-router'
import { metadataConfig } from './StudyDetailsPage.config'
import { portalMetadata } from '../../config/portalMetadata'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta
```

For pages that need extra loader data (e.g. Croissant JSON-LD), pass an
`options` object as a third argument (see
[`utils/detailPageRouteUtils.ts`](../synapse-portal-framework/src/utils/detailPageRouteUtils.ts)
for the `extendLoader` / `extendMeta` hooks).

#### 12e. Switch from `useGetPortalComponentSearchParams` to `useParams`

```diff
-const { studyId } = useGetPortalComponentSearchParams()
+const { studyId } = useParams<{ studyId: string }>()
```

Add a null guard:

```tsx
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

if (!studyId) {
  return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
}
```

And update the `<DetailsPage>` props:

```tsx
<DetailsPage
  sql={studiesSql}
  searchParams={{ studyId }}
  resourcePrimaryKey={['studyId']}
  disableCanonicalUrl
  // ...
>
  <DetailsPageTabs tabConfig={tabConfig} />
  <Outlet context={{ defaultTabPath: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH }} />
</DetailsPage>
```

`disableCanonicalUrl` prevents the client-side `DetailsPageDocumentMetadata`
hook from overwriting the static canonical tag with an incorrect query-param
URL. The `<Outlet context={...} />` exposes the default tab path to the shared
`DefaultTabIndexRedirect` and `DefaultTabWildcardRedirect` components.

#### 12f. Create the shared default-tab redirect wrappers

Just **one** of each per portal — they're shared across every tabbed detail
page via outlet context:

```tsx
// src/pages/DefaultTabIndexRedirect.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/DefaultTabIndexRedirect'

// src/pages/DefaultTabWildcardRedirect.tsx
export { default } from '@sage-bionetworks/synapse-portal-framework/pages/DefaultTabWildcardRedirect'
```

In `routes.ts`, point every detail page's `index(...)` and `route('*', ...)`
at these two files, with unique `id` options to disambiguate (see Step 10).

---

### Step 13: Create legacy redirect pages

To preserve backward compatibility with old `?param=value` URLs:

```tsx
// src/pages/LegacyStudyRedirect.tsx
import LegacyDetailsPageRedirect from '@sage-bionetworks/synapse-portal-framework/components/LegacyDetailsPageRedirect'

export default function LegacyStudyRedirect() {
  return <LegacyDetailsPageRedirect paramName="studyId" />
}
```

`paramName` must match the query parameter used in the old URL. Register the
redirect route in `routes.ts`:

```ts
route('Explore/Studies/DetailsPage', 'pages/LegacyStudyRedirect.tsx'),
```

---

### Step 14: Update card/link configurations

All `CardConfiguration` and card link configs in `src/config/synapseConfigs/`
that reference `DetailsPage` query-string URLs must be updated to path-segment
style by adding `urlParamStyle: 'path-segment'` and removing `/DetailsPage` from the
base URL:

```diff
 titleLinkConfig: {
   isMarkdown: false,
-  baseURL: 'Explore/Studies/DetailsPage',
+  baseURL: 'Explore/Studies',
   URLColumnName: 'studyId',
+  urlParamStyle: 'path-segment',
   matchColumnName: 'studyId',
 },
```

Apply this change to all `titleLinkConfig`, `labelLinkConfig`, and other link
config objects across the synapseConfigs directory, including cross-entity
links (e.g. a publication card linking to a study detail page).

---

### Step 15: Update `sitemapConfig.ts`

Change detail page paths from the `/DetailsPage` form to the new base path, and
add `urlParamStyle: 'path-segment'` to each entry:

```diff
 {
-  path: 'Explore/Studies/DetailsPage',
+  path: 'Explore/Studies',
   sql: studiesSql,
   primaryKeyColumn: 'studyId',
+  urlParamStyle: 'path-segment',
 },
```

---

### Step 16: Add `meta()` exports to Explore tab pages

Each Explore tab page should export a `meta()` function so that React Router
can set the `<title>` tag during pre-rendering:

```tsx
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { portalMetadata } from '../../config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Studies' },
  portalMetadata,
)
```

If the page has a distinct description (uncommon for Explore tabs), pass it in
the first argument:

```tsx
export const meta = createStaticMeta(
  { title: 'About', description: 'Learn about the NF Data Portal.' },
  portalMetadata,
)
```

---

### Step 17: Update HomePage meta and JSON-LD

Move any `<JsonLdScript>` component usage from JSX to a `meta()` export using
the `'script:ld+json'` key:

```tsx
import type { MetaDescriptor } from 'react-router'
import { mergeMeta } from '@sage-bionetworks/synapse-portal-framework/utils/mergeMeta'

export function meta(args): MetaDescriptor[] {
  return mergeMeta(args, [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: import.meta.env.VITE_PORTAL_DESCRIPTION },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        // ... structured data specific to this portal
      },
    },
  ])
}
```

Remove the corresponding `<JsonLdScript>` call from the component's JSX.

Note: Dataset-level Croissant JSON-LD is handled differently — it is injected
via the `extendMeta` option in `createDetailPageRouteExports` (see Step 12d).

---

### Step 18: Create sitemap build files

#### 18a. Create `sitemap.vite.config.ts`

```ts
export { default } from '@sage-bionetworks/synapse-portal-framework/ssg/sitemapViteConfig'
```

The shared config defaults the entry to `<portal>/src/sitemap/entry.ts`.

#### 18b. Create `src/sitemap/entry.ts`

```ts
import * as fs from 'fs'
import * as path from 'path'

// List all static routes that should appear in the sitemap.
// Dynamic routes (detail pages) are enumerated by the sitemap CLI via sitemapConfig.
const staticRoutes = [
  '/',
  '/Explore/Studies',
  '/Explore/Datasets',
  // ... add all static Explore tabs and other pages for this portal
]

const outputPath = path.join(process.cwd(), 'build', 'sitemap-routes.json')
const dir = path.dirname(outputPath)
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(outputPath, JSON.stringify(staticRoutes, null, 2))
console.log(`Wrote ${staticRoutes.length} routes to ${outputPath}`)
```

The Framework Mode `RouteConfigEntry[]` format used in `routes.ts` is not
compatible with the older `generateSitemapRoutesFile` helper, so we enumerate
the static routes manually. Dynamic detail-page routes are still enumerated by
the sitemap CLI from `sitemapConfig.ts`.

---

### Step 19: Delete old files

Remove the files that are no longer needed:

- `index.html` — replaced entirely by `src/root.tsx` (React Router Framework
  Mode generates its own HTML; the old `index.html` is unused)
- `src/index.tsx` — replaced by `src/entry.client.tsx` + `src/root.tsx`
- `src/config/routesConfig.tsx` — replaced by `src/routes.ts`

---

## Portal-Specific Considerations

Not all portals follow the exact same pattern as NF. Watch for these variations
when migrating:

### `<App>` component props

Some portals pass props to `<App>` that most portals don't use:

- **`arcusbio`**: passes `requireAuthentication={true}` and `defaultRealmId`
- Other portals may pass children like `<RepositoryUnderReviewAlert>`

These must be handled in `RootApp.tsx` (Step 8).

### Inline JSX route elements

Some portals define routes with inline `element: <JSX>` instead of `lazy`
imports (e.g. `arcusbio`, `genie`). These inline elements must be extracted
into separate page files before they can be referenced by `routes.ts`.

### Dynamic sub-route patterns

The `challenges` portal uses a dynamic `:taskId` sub-route with conditional
tab visibility (`hideIfColumnValueNull`). This is more complex than the
static tab patterns shown in this guide and may require custom handling.

### Portals without detail pages

Several portals (`stopadportal`, `genie`, `arcusbio`) have no detail pages.
For these, Steps 12–15 can be largely skipped. The `react-router.config.ts`
becomes effectively empty:

```ts
import { createReactRouterConfig } from '@sage-bionetworks/synapse-portal-framework/ssg/createReactRouterConfig'
export default createReactRouterConfig({
  sitemapConfig: { detailPages: [] },
  metadataConfigs: [],
})
```

---

## Verification Checklist

### Configuration files

- [ ] `package.json` — dependencies, scripts, and nx targets updated
- [ ] `tsconfig.json` — extends `shared/tsconfig.ssg-portal.json` + project references
- [ ] `src/vite-env.d.ts` — single triple-slash reference to `vite-config/portal-env`
- [ ] `src/types.d.ts` — MUI type augmentations
- [ ] `react-router.config.ts` — uses `createReactRouterConfig`
- [ ] `vite.config.ts` — re-exports `portalsSsgViteConfig`

### New entry/root files

- [ ] `src/root.tsx` — uses `createRootMeta` + re-exports
- [ ] `src/entry.client.tsx` — side-effect import of shared entry
- [ ] `src/pages/PortalRoot.tsx` — wraps shared `<PortalRoot>` component
- [ ] `src/pages/RootApp.tsx` — app shell layout (with portal-specific children)
- [ ] `src/pages/Explore/layout.tsx` — Explore tab navigation layout

### Routing

- [ ] `src/routes.ts` — Framework Mode route config created
- [ ] `src/config/routeConstants.ts` — tab path constants extracted
- [ ] `src/config/portalMetadata.ts` — `PortalMetadata` constant created
- [ ] `src/config/routesConfig.tsx` — deleted
- [ ] `src/index.tsx` — deleted
- [ ] `index.html` — deleted

### Shared route page files

- [ ] `src/pages/ErrorPage.tsx`
- [ ] `src/pages/DownloadCartPage.tsx`
- [ ] `src/pages/FileEntityPage.tsx`
- [ ] `src/pages/HomeRedirect.tsx`
- [ ] `src/pages/TestInitError.tsx`
- [ ] `src/pages/DefaultTabIndexRedirect.tsx` (one per portal)
- [ ] `src/pages/DefaultTabWildcardRedirect.tsx` (one per portal)

### Detail pages (repeat for each detail page type)

- [ ] `*.config.ts` metadata file created
- [ ] `loader`, `clientLoader`, `meta` exports added (using `portalMetadata`)
- [ ] `useGetPortalComponentSearchParams` → `useParams`
- [ ] Null guard added for URL parameter
- [ ] `searchParams`, `resourcePrimaryKey`, `disableCanonicalUrl` props on `<DetailsPage>`
- [ ] `<Outlet context={{ defaultTabPath }} />` in tabbed detail page parents
- [ ] `routes.ts` index/wildcard entries point at the shared wrapper files with unique `id`s

### Legacy compatibility

- [ ] Legacy redirect pages created (one per detail page type)
- [ ] Legacy redirect routes registered in `routes.ts`

### Data and configuration

- [ ] Card/link configs updated (`baseURL`, `urlParamStyle: 'path-segment'`)
- [ ] `sitemapConfig.ts` updated (paths, `urlParamStyle: 'path-segment'`)

### Meta tags

- [ ] Explore tab pages — `meta()` exports added
- [ ] `HomePage.tsx` — JSON-LD moved from `<JsonLdScript>` to `meta()` export

### Sitemap

- [ ] `sitemap.vite.config.ts` — re-exports shared config
- [ ] `src/sitemap/entry.ts` — static route list

### Quality checks

- [ ] `pnpm install` succeeds
- [ ] `pnpm build` succeeds
- [ ] Dev server starts with `pnpm dev`
- [ ] Home page renders correctly
- [ ] Explore tabs render correctly
- [ ] Detail pages render correctly (spot-check a few)
- [ ] Tabbed detail pages: index URL (`/Resource/:id`) redirects to default tab
- [ ] Tabbed detail pages: garbage sub-paths (`/Resource/:id/foo`) redirect to default tab
- [ ] Legacy redirect URLs redirect to new path-segment URLs
- [ ] `pnpm type-check` passes
- [ ] `pnpm lint` passes
