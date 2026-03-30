# Portal SSG Migration Guide

This guide describes how to migrate a Synapse portal from the SPA (Single-Page
Application) setup to React Router Framework Mode with Static Site Generation
(SSG). The NF portal was migrated first; use it as a reference implementation.

> **Prerequisite:** The shared framework changes (portal-framework utilities,
> vite-config exports, etc.) from the NF migration branch must already be merged
> before migrating another portal.

---

## Overview of Changes

| Area             | SPA (before)                                                                 | SSG (after)                                                      |
| ---------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Entry point      | `src/index.tsx` — `createRoot` + `<Portal>` component                        | `src/root.tsx` (HTML shell) + `src/entry.client.tsx` (hydration) |
| Routing          | `src/config/routesConfig.tsx` — `RouteObject[]` with `lazy: () => import(…)` | `src/routes.ts` — `RouteConfig` with `route(path, file)` strings |
| Build tool       | `vite build` (vanilla Vite SPA)                                              | `react-router build` (Framework Mode SSG)                        |
| Dev server       | `vite`                                                                       | `react-router dev`                                               |
| Providers        | Wired inside `<Portal>` (portal-framework)                                   | `src/pages/PortalRoot.tsx` — manual provider tree                |
| Detail page URLs | Query-string: `/Explore/Studies/DetailsPage?studyId=X`                       | Path-segment: `/Explore/Studies/X`                               |
| Meta tags        | Client-side `useDocumentMetadata`                                            | Route `meta()` exports + `loader`/`clientLoader`                 |
| Vite config      | `export default portalsViteConfig` (one-liner)                               | Custom `defineConfig` with `reactRouter()` plugin                |

---

## Step-by-Step Migration

### Step 1: Update `package.json`

#### Add new dependencies

```jsonc
// dependencies
"@react-router/node": "^7.13.1",
"@tanstack/react-query": "^5.80.7",
"isbot": "^5",
"jsdom": "^28.1.0",
"react-cookie": "^7.2.2",

// devDependencies
"@react-router/dev": "^7.13.1",
"@types/node": "^22.19.13",
"vite-plugin-node-polyfills": "^0.17.0",
"vite-plugin-svgr": "^4.3.0",
"vite-tsconfig-paths": "^5.1.4",
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
    // Sitemap scripts — build-sitemap-routes compiles the sitemap entry script
    // (see Step 18) and runs it to produce the static route list:
    "build-sitemap-routes": "vite build --config sitemap.vite.config.ts && node build/sitemap-entry.mjs",
    // _generate-sitemap runs the full pipeline: build routes, then invoke the
    // framework CLI to produce the sitemap XML. Output goes to build/client:
    "_generate-sitemap": "pnpm build-sitemap-routes && tsx ../../synapse-portal-framework/src/sitemap/cli.ts \"$VITE_PORTAL_KEY\" --config src/config/sitemapConfig.ts --routes build/sitemap-routes.json --output build/client",
    "generate-sitemap": "dotenv -- pnpm _generate-sitemap",
    "save-build-date": "mkdir -p public && date > public/build-date.txt"
  }
}
```

#### Add `nx` target configuration

The `typegen` step must run before `type-check`, and both depend on upstream
workspace packages being built:

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

### Step 2: Update `tsconfig.json`

```diff
 {
   "compilerOptions": {
+    "rootDirs": [".", "./.react-router/types"],
-    "types": ["vite/client"],
+    "types": ["vite/client", "node"],
   },
-  "include": ["src/**/*.tsx", "src/**/*.ts"],
+  "include": ["src/**/*.tsx", "src/**/*.ts", ".react-router/types/**/*"],
+  "files": ["src/types.d.ts"],
 }
```

This enables TypeScript to find the auto-generated route types produced by
`react-router typegen`.

#### Create `src/types.d.ts`

This file provides type-safe access to your portal's environment variables
(used in `root.tsx`, `PortalRoot.tsx`, and detail page loaders):

```ts
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_PORTAL_NAME: string
  readonly VITE_PORTAL_DESCRIPTION: string
  readonly VITE_PORTAL_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Import MUI type augmentations from 'synapse-react-client' so we can use custom property values defined for our MUI theme
import 'synapse-react-client/ThemeTypes'
```

---

### Step 3: Create `react-router.config.ts`

This is the React Router Framework Mode configuration. It controls pre-rendering
behavior. Place it at the portal root (alongside `vite.config.ts`).

```ts
import type { Config } from '@react-router/dev/config'
import { fetchResourceIds } from '@sage-bionetworks/synapse-portal-framework/sitemap/queryTableForSitemap'
import { preloadDetailPageMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { preloadAllCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'
import sitemapConfig from './src/config/sitemapConfig'
// Import each detail page's metadata config:
import { metadataConfig as fooMetadata } from './src/pages/FooDetailsPage.config'
// ...repeat for each detail page type

/**
 * Collect all detail page metadata configs into a single array for preloading.
 */
const metadataConfigs: DetailPageMetadataConfig[] = [
  fooMetadata,
  // ...
]

export default {
  appDirectory: 'src',
  ssr: false, // SSG, not SSR — pre-render at build time; no runtime server
  prerender: {
    paths: async ({ getStaticPaths }) => {
      const isProduction = process.env.NODE_ENV === 'production'
      const dynamicRoutes: string[] = []

      // Enumerate record IDs for each detail page type.
      // In dev mode, fetch only 1 ID per type to keep startup fast.
      for (const detailPage of sitemapConfig.detailPages) {
        const result = await fetchResourceIds(
          detailPage,
          isProduction ? undefined : 1,
        )
        if (!result.success) continue
        for (const id of result.ids) {
          dynamicRoutes.push(`/${detailPage.path}/${id}`)
        }
      }

      // Hydrate caches so individual loader() calls are instant hits.
      // Only needed in production where all routes are pre-rendered.
      if (isProduction) {
        await Promise.all([
          ...metadataConfigs.map(mc => preloadDetailPageMetadata(mc)),
          preloadAllCroissantMetadata(),
        ])
      }

      return [...getStaticPaths(), ...dynamicRoutes]
    },
    unstable_concurrency: 4,
  },
} satisfies Config
```

Key points:

- `ssr: false` — we pre-render at build time; there is no runtime server.
- In dev mode, only 1 ID per detail page type is fetched to keep startup fast.
- `preloadDetailPageMetadata` hydrates an in-memory cache so individual
  loaders hit cache instead of making redundant Synapse API calls.
- If your portal does not use Croissant metadata (most portals don't — only NF
  uses it for datasets), omit the `preloadAllCroissantMetadata()` call.

---

### Step 4: Rewrite `vite.config.ts`

Replace the one-liner SPA config with a custom config that uses the
`reactRouter()` plugin:

```ts
import { reactRouter } from '@react-router/dev/vite'
import { mergeConfig, defineConfig, type Plugin } from 'vite'
import {
  baseConfig,
  vitestConfig,
  clientOnly,
  nodePolyfillsPlugin,
  reactPlugins,
  tsconfigPathsPlugin,
} from 'vite-config'

export default defineConfig(({ isSsrBuild }) =>
  mergeConfig(
    baseConfig,
    mergeConfig(vitestConfig, {
      server: { port: 3001 },
      plugins: [
        // Apply nodePolyfills only to the client environment, not SSR/prerender
        clientOnly(nodePolyfillsPlugin() as Plugin),
        reactRouter(),
        tsconfigPathsPlugin(),
        // reactRouter() includes its own React plugin, so skip the default one
        ...reactPlugins({ skipReactPlugin: true }),
      ],
      ssr: {
        noExternal: [/^@mui\//, /^@emotion\//],
        optimizeDeps: {
          include: ['@emotion/*', '@mui/*'],
        },
      },
    }),
  ),
)
```

Important details:

- `clientOnly()` wraps `nodePolyfillsPlugin` so it only runs for client builds,
  not during SSR/pre-render.
- `reactRouter()` replaces `@vitejs/plugin-react` — pass
  `skipReactPlugin: true` to `reactPlugins`.

---

### Step 5: Create `src/root.tsx`

This replaces the `index.html` template's `<head>` and `<body>` content. It is
the HTML shell rendered for every pre-rendered route.

```tsx
import type { MetaDescriptor } from 'react-router'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

/**
 * Default meta tags inherited by all routes that don't export their own meta().
 */
export function meta(): MetaDescriptor[] {
  const portalName = import.meta.env.VITE_PORTAL_NAME
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION
  return [
    { title: portalName },
    ...(portalDescription
      ? [{ name: 'description', content: portalDescription }]
      : []),
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css',
      integrity:
        'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u',
      crossOrigin: 'anonymous',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  const portalKey = import.meta.env.VITE_PORTAL_KEY ?? ''
  const portalName = import.meta.env.VITE_PORTAL_NAME ?? ''
  const portalDescription = import.meta.env.VITE_PORTAL_DESCRIPTION ?? ''
  const baseUrl = `https://${portalKey}.synapse.org`

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Facebook / Open Graph */}
        <meta property="og:url" content={`${baseUrl}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={portalName} />
        <meta property="og:description" content={portalDescription} />
        <meta
          name="image"
          property="og:image"
          content={`${baseUrl}/socialmedia.png`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="synapse.org" />
        <meta property="twitter:url" content={`${baseUrl}/`} />
        <meta name="twitter:title" content={portalName} />
        <meta name="twitter:description" content={portalDescription} />
        <meta name="twitter:image" content={`${baseUrl}/socialmedia.png`} />

        {/*
          Note: <meta name="description"> is injected by route-level meta() exports
          via <Meta /> below. Do NOT hard-code it here to avoid duplicate tags.
        */}

        <link rel="shortcut icon" href="/favicon.svg" />

        {/* React Router injects route-level <title>, <meta>, and <link> elements here */}
        <Meta />
        <Links />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPW4KS62"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
```

This moves the `<head>` metadata, GTM snippet, and other boilerplate out of
`index.html` and into a React component that React Router controls. The
`<Meta />` and `<Links />` components inject route-level meta tags and
stylesheets.

---

### Step 6: Create `src/entry.client.tsx`

```tsx
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydratedRouter } from 'react-router/dom'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <HydratedRouter unstable_useTransitions />
    </StrictMode>,
  )
})
```

This replaces `createRoot` + render from the old `src/index.tsx`. The
pre-rendered HTML is hydrated on the client.

---

### Step 7: Create `src/pages/PortalRoot.tsx`

This is a layout route that sets up all providers (theme, query client, portal
context, etc.). It replaces the `<Portal>` component from the SPA setup.

```tsx
/**
 * PortalRoot — root layout route for Framework Mode.
 *
 * Replaces the role of Portal.tsx + index.tsx in the SPA setup:
 * - Provides all context (theme, query client, portal context)
 * - Renders <Outlet /> to host child routes
 */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { CookiesProvider } from 'react-cookie'
import { Outlet } from 'react-router'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'
import { DocumentMetadataProvider } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { ThemeProvider } from 'synapse-react-client/theme/ThemeProvider'
import { PortalContextProvider } from '@sage-bionetworks/synapse-portal-framework/components/PortalContext'
import { CssBaseline } from '@mui/material'

// Import your portal's configs:
import { navbarConfig } from '../config/navbarConfig'
import palette from '../config/paletteConfig'
import footerConfig from '../config/footerConfig'
import logoHeaderConfig from '../config/logoHeaderConfig'
import logoFooterConfig from '../config/logoFooterConfig'
import headerConfig from '../config/headerConfig'

// Import global styles (katex, portal-specific SCSS, etc.)
import 'katex/dist/katex.css' // only if your portal uses KaTeX
import '../App.scss'

const portalContext = {
  portalName: import.meta.env.VITE_PORTAL_NAME ?? '',
  portalKey: import.meta.env.VITE_PORTAL_KEY ?? '',
  // routeConfig is unused in Framework Mode — routing is handled by routes.ts
  routeConfig: [],
  headerConfig,
  footerConfig,
  logoHeaderConfig,
  logoFooterConfig,
  navbarConfig,
}

export default function PortalRoot() {
  const [queryClient] = useState(
    () => new QueryClient(defaultQueryClientConfig),
  )
  const portalTitleEnv: unknown = import.meta.env.VITE_PORTAL_NAME
  const defaultTitle =
    typeof portalTitleEnv === 'string' ? portalTitleEnv : undefined

  return (
    <PortalContextProvider value={portalContext}>
      <CookiesProvider>
        <ThemeProvider theme={{ palette }}>
          <CssBaseline />
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

---

### Step 8: Create `src/pages/RootApp.tsx`

This is the app shell layout route. It renders the `<App>` component from the
portal framework (which includes Navbar, Footer, CookieNotification, etc.)
and any portal-specific children.

```tsx
import App from '@sage-bionetworks/synapse-portal-framework/App'

function RootApp() {
  return <App />
}

export default RootApp
```

If your portal passes children to `<App>` (e.g. a `<SurveyToast>` or
`<RepositoryUnderReviewAlert>`), include them here:

```tsx
import App from '@sage-bionetworks/synapse-portal-framework/App'
import SurveyToast from '@sage-bionetworks/synapse-portal-framework/components/SurveyToast'

function RootApp() {
  return (
    <App>
      <SurveyToast
        localStorageKey="org.sagebionetworks.security.cookies.portal.mysurvey.dismissed"
        description="Help us improve by completing a survey!"
        surveyURL="https://..."
      />
    </App>
  )
}

export default RootApp
```

Check your portal's current `routesConfig.tsx` — if the `<App>` component
receives any props (e.g. `requireAuthentication`, `defaultRealmId`), pass them
here as well.

---

### Step 9: Create `src/pages/Explore/layout.tsx`

This layout route wraps the Explore section and provides tab navigation. It
renders the `<ExploreWrapper>` component with your portal's Explore tab paths.

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
        // If the display name differs from the path, use:
        // { path: 'Hackathon', displayName: 'Hackathon Projects' },
      ]}
    />
  )
}

export default ExploreLayout
```

The `explorePaths` entries must correspond to the child routes defined under
the `Explore` route in `src/routes.ts` (see Step 10).

---

### Step 10: Create `src/routes.ts`

Replace `src/config/routesConfig.tsx` with Framework Mode route definitions.

Key differences from the old `RouteObject[]`:

- Uses `route(path, file)` / `index(file)` / `layout(file)` / `prefix()` helpers
  from `@react-router/dev/routes`
- File paths are **strings** relative to `appDirectory` (`src/`)
- No `lazy: () => import(…)` — the framework handles code splitting automatically
- Inline JSX elements (e.g. `<Navigate>`, `<RedirectWithQuery>`) must be
  extracted into their own route files (see Steps 11 and 13)

```ts
import { index, layout, prefix, route } from '@react-router/dev/routes'
import type { RouteConfig } from '@react-router/dev/routes'

export default [
  // Top-level providers layout (ThemeProvider, QueryClientProvider, etc.)
  layout('pages/PortalRoot.tsx', [
    // Root layout route — app shell (Navbar, Footer, etc.)
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

      // Explore section (layout with tab navigation)
      route('Explore', 'pages/Explore/layout.tsx', [
        route('Studies', 'pages/Explore/studies.tsx'),
        route('Datasets', 'pages/Explore/datasets.tsx'),
        // ... add all Explore tabs for this portal
      ]),

      // Detail pages — path-param style (replace old /DetailsPage?param=value)
      route(
        'Explore/Studies/:studyId',
        'pages/StudyDetailsPage/StudyDetailsPage.tsx',
        [
          index('pages/StudyDetailsPage/StudyDetailsPageIndex.tsx'),
          route('*', 'pages/StudyDetailsPage/StudyDetailsPageWildcard.tsx'),
          route('Details', 'pages/StudyDetailsPage/StudyDetailsTab.tsx'),
          // ... add all sub-tabs
        ],
      ),
      // ... repeat for each detail page type

      // Legacy redirects — keep old ?param=value URLs working
      route('Explore/Studies/DetailsPage', 'pages/LegacyStudyRedirect.tsx'),
      // ... repeat for each detail page type
    ]),
  ]),
] satisfies RouteConfig
```

Note: When the same route file is used for multiple routes (e.g.
`FileEntityPage.tsx` for both versioned and unversioned URLs), pass a unique
`{ id: '...' }` option to disambiguate them.

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
```

#### Redirect pages

For routes that were inline `<Navigate>` or `<RedirectWithQuery>`:

```tsx
// src/pages/HomeRedirect.tsx
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
export default function HomeRedirect() {
  return <RedirectWithQuery to="/" />
}
```

#### Test error page (optional but useful for debugging)

```tsx
// src/pages/TestInitError.tsx
// In SPA/pre-render mode (ssr:false), server-side loaders are not supported.
// Use clientLoader instead to simulate the init error for testing purposes.
export function clientLoader() {
  throw new ReferenceError(
    "Cannot access 'SomeComponent' before initialization",
  )
}
export default function TestInitError() {
  return null
}
```

---

### Step 12: Migrate detail pages to path-segment URLs

This is the most involved step. Each detail page needs several changes.

#### 12a. Create route path constants (recommended)

Extract tab path strings into a constants file so they can be shared between
`routes.ts`, detail page tab configs, and redirect components:

```ts
// src/config/routeConstants.ts
export const STUDY_DETAILS_PAGE_DETAILS_TAB_PATH = 'Details'
export const STUDY_DETAILS_PAGE_DATASETS_TAB_PATH = 'Datasets'
export const STUDY_DETAILS_PAGE_FILES_TAB_PATH = 'Files'
// ... repeat for each tabbed detail page type
```

#### 12b. Create a metadata config file

```ts
// src/pages/StudyDetailsPage/StudyDetailsPage.config.ts
import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { studiesSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: studiesSql,
  titleColumn: 'studyName', // column containing the display title
  descriptionColumn: 'summary', // column for <meta name="description"> (optional)
  paramName: 'studyId', // must match the URL param name in routes.ts
}
```

#### 12c. Add `loader`, `clientLoader`, and `meta` exports to the detail page

```tsx
// In StudyDetailsPage.tsx:
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { useParams } from 'react-router'
import { metadataConfig } from './StudyDetailsPage.config'

export { metadataConfig } // re-export so react-router.config.ts can import it

const _routeExports = createDetailPageRouteExports(metadataConfig, {
  portalName: import.meta.env.VITE_PORTAL_NAME,
})
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta
```

For detail pages that need extra loader data (e.g. Croissant JSON-LD for
dataset pages), use the extended form:

```tsx
import {
  createDetailPageRouteExports,
  type BaseDetailPageLoaderData,
} from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { fetchCroissantMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/fetchCroissantMetadata'

interface DatasetLoaderData extends BaseDetailPageLoaderData {
  croissantJsonLd: Record<string, unknown> | null
}

const _routeExports = createDetailPageRouteExports<DatasetLoaderData>(
  metadataConfig,
  {
    portalName: import.meta.env.VITE_PORTAL_NAME,
    extendLoader: async (_base, params) => ({
      croissantJsonLd: params.id
        ? await fetchCroissantMetadata(params.id)
        : null,
    }),
    extendMeta: data =>
      data.croissantJsonLd ? [{ 'script:ld+json': data.croissantJsonLd }] : [],
  },
)
export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta
```

#### 12d. Switch from `useGetPortalComponentSearchParams` to `useParams`

```diff
-const { studyId } = useGetPortalComponentSearchParams()
+const { studyId } = useParams<{ studyId: string }>()
```

#### 12e. Add a null guard for the URL parameter

Always guard against the param being undefined (e.g. if the user navigates to
the detail page without a valid ID):

```tsx
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

function StudyDetailsPage() {
  const { studyId } = useParams<{ studyId: string }>()

  if (!studyId) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      sql={studiesSql}
      searchParams={{ studyId }}
      resourcePrimaryKey={['studyId']}
      // ...
    >
      {/* For tabbed detail pages: */}
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}
```

#### 12f. Pass `searchParams` prop to `<DetailsPage>`

The `DetailsPage` component now accepts an explicit `searchParams` prop, which
merges with (and takes priority over) URL query-string params:

```diff
 <DetailsPage
   sql={studiesSql}
+  searchParams={{ studyId }}
+  resourcePrimaryKey={['studyId']}
   // ...
 >
```

#### 12g. Create index and wildcard route files for tabbed detail pages

For detail pages with sub-tabs, extract the inline `<RedirectWithQuery>` that
was nested inside `routesConfig.tsx` into files:

```tsx
// src/pages/StudyDetailsPage/StudyDetailsPageIndex.tsx
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { STUDY_DETAILS_PAGE_DETAILS_TAB_PATH } from '../../config/routeConstants'
export default function StudyDetailsPageIndex() {
  return <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
}

// src/pages/StudyDetailsPage/StudyDetailsPageWildcard.tsx
// PORTALS-3708: Fallback for nonmatching routes — redirect to default tab
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { STUDY_DETAILS_PAGE_DETAILS_TAB_PATH } from '../../config/routeConstants'
export default function StudyDetailsPageWildcard() {
  return <RedirectWithQuery to={`../${STUDY_DETAILS_PAGE_DETAILS_TAB_PATH}`} />
}
```

---

### Step 13: Create legacy redirect pages

To preserve backward compatibility with old `?param=value` URLs, add redirect
routes that promote the query param to a path segment using the
`LegacyDetailsPageRedirect` component from the portal framework:

```tsx
// src/pages/LegacyStudyRedirect.tsx
import LegacyDetailsPageRedirect from '@sage-bionetworks/synapse-portal-framework/components/LegacyDetailsPageRedirect'

export default function LegacyStudyRedirect() {
  return <LegacyDetailsPageRedirect paramName="studyId" />
}
```

The `paramName` must match the query parameter used in the old URL (e.g.
`/Explore/Studies/DetailsPage?studyId=syn123` → `/Explore/Studies/syn123`).

Register the redirect route in `routes.ts`:

```ts
route('Explore/Studies/DetailsPage', 'pages/LegacyStudyRedirect.tsx'),
```

---

### Step 14: Update card/link configurations

All `CardConfiguration` and card link configs in `src/config/synapseConfigs/`
that reference `DetailsPage` query-string URLs must be updated to path-segment
style by adding `urlParamStyle: 'path'` and removing `/DetailsPage` from the
base URL:

```diff
 titleLinkConfig: {
   isMarkdown: false,
-  baseURL: 'Explore/Studies/DetailsPage',
+  baseURL: 'Explore/Studies',
   URLColumnName: 'studyId',
+  urlParamStyle: 'path',
   matchColumnName: 'studyId',
 },
```

Apply this change to all `titleLinkConfig`, `labelLinkConfig`, and other link
config objects across the synapseConfigs directory. This includes cross-entity
links (e.g. a publication card linking to a study detail page).

---

### Step 15: Update `sitemapConfig.ts`

Change detail page paths from the `/DetailsPage` form to the new base path, and
add `urlStyle: 'path-segment'` to each entry:

```diff
 {
-  path: 'Explore/Studies/DetailsPage',
+  path: 'Explore/Studies',
   sql: studiesSql,
   primaryKeyColumn: 'studyId',
+  urlStyle: 'path-segment',
 },
```

---

### Step 16: Add `meta()` exports to Explore tab pages

Each Explore tab page should export a `meta()` function so that React Router
can set the `<title>` tag during pre-rendering:

```tsx
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  'Explore Studies', // page-specific title fragment
  import.meta.env.VITE_PORTAL_NAME, // appended as "... | NF Data Portal"
)
```

---

### Step 17: Update HomePage meta and JSON-LD

Move any `<JsonLdScript>` component usage from JSX to a `meta()` export using
the `'script:ld+json'` key:

```tsx
import type { MetaDescriptor } from 'react-router'

export function meta(): MetaDescriptor[] {
  return [
    { title: import.meta.env.VITE_PORTAL_NAME },
    { name: 'description', content: import.meta.env.VITE_PORTAL_DESCRIPTION },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        // ... structured data specific to this portal
      },
    },
  ]
}
```

Remove the corresponding `<JsonLdScript>` call from the component's JSX.

Note: Dataset-level Croissant JSON-LD is handled differently — it is injected
via the `extendMeta` option in `createDetailPageRouteExports` (see Step 12c).

---

### Step 18: Create sitemap build files

The sitemap generation pipeline requires two files: a Vite config to build the
sitemap entry script, and the entry script itself.

#### 18a. Create `sitemap.vite.config.ts`

Place this at the portal root (alongside `vite.config.ts`):

```ts
import { mergeConfig } from 'vite'
import { sitemapViteConfig } from 'vite-config'
import { resolve } from 'path'

/**
 * Vite configuration for building the sitemap route extraction script.
 *
 * This is built separately from the main portal build and runs in Node.js
 * to extract the route tree for sitemap generation.
 */
export default mergeConfig(sitemapViteConfig, {
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/sitemap/entry.ts'),
    },
  },
})
```

#### 18b. Rewrite `src/sitemap/entry.ts`

Replace the old `generateSitemapRoutesFile(routes)` call with a simple script
that writes the static route list directly to JSON. The Framework Mode
`RouteConfigEntry[]` format used in `routes.ts` is not compatible with
`generateSitemapRoutesFile`, so we enumerate routes manually:

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
prerender config simplifies to just `getStaticPaths()` with no dynamic routes.

---

## Verification Checklist

Use this checklist to track progress during migration:

### Configuration files

- [ ] `package.json` — dependencies, scripts, and nx targets updated
- [ ] `tsconfig.json` — `rootDirs`, `types`, `include`, and `files` updated
- [ ] `src/types.d.ts` — environment variable types declared
- [ ] `react-router.config.ts` — created with prerender config
- [ ] `vite.config.ts` — rewritten with `reactRouter()` plugin
- [ ] `sitemap.vite.config.ts` — created for sitemap build

### New entry/root files

- [ ] `src/root.tsx` — HTML shell, `meta()`, `links()`, `Layout`, `Root`
- [ ] `src/entry.client.tsx` — `hydrateRoot` with `HydratedRouter`
- [ ] `src/pages/PortalRoot.tsx` — provider tree layout route
- [ ] `src/pages/RootApp.tsx` — app shell layout route (with portal-specific children)
- [ ] `src/pages/Explore/layout.tsx` — Explore tab navigation layout

### Routing

- [ ] `src/routes.ts` — Framework Mode route config created
- [ ] `src/config/routeConstants.ts` — tab path constants extracted (if applicable)
- [ ] `src/config/routesConfig.tsx` — deleted
- [ ] `src/index.tsx` — deleted
- [ ] `index.html` — deleted

### Shared route page files

- [ ] `src/pages/ErrorPage.tsx`
- [ ] `src/pages/DownloadCartPage.tsx`
- [ ] `src/pages/FileEntityPage.tsx`
- [ ] `src/pages/HomeRedirect.tsx`
- [ ] `src/pages/TestInitError.tsx`

### Detail pages (repeat for each detail page type)

- [ ] `*.config.ts` metadata file created
- [ ] `loader`, `clientLoader`, `meta` exports added
- [ ] `useGetPortalComponentSearchParams` → `useParams`
- [ ] Null guard added for URL parameter
- [ ] `searchParams` prop added to `<DetailsPage>`
- [ ] `resourcePrimaryKey` prop added to `<DetailsPage>`
- [ ] Index redirect file created (for tabbed detail pages)
- [ ] Wildcard redirect file created (for tabbed detail pages)

### Legacy compatibility

- [ ] Legacy redirect pages created (one per detail page type)
- [ ] Legacy redirect routes registered in `routes.ts`

### Data and configuration

- [ ] Card/link configs updated (`baseURL`, `urlParamStyle: 'path'`)
- [ ] `sitemapConfig.ts` updated (paths, `urlStyle: 'path-segment'`)

### Meta tags

- [ ] Explore tab pages — `meta()` exports added
- [ ] `HomePage.tsx` — JSON-LD moved from `<JsonLdScript>` to `meta()` export

### Sitemap

- [ ] `sitemap.vite.config.ts` — created
- [ ] `src/sitemap/entry.ts` — rewritten with static route list

### Quality checks

- [ ] `pnpm install` succeeds
- [ ] `pnpm build` succeeds
- [ ] Dev server starts with `pnpm dev`
- [ ] Home page renders correctly
- [ ] Explore tabs render correctly
- [ ] Detail pages render correctly (spot-check a few)
- [ ] Legacy redirect URLs redirect to new path-segment URLs
- [ ] `pnpm type-check` passes
- [ ] `pnpm lint` passes
