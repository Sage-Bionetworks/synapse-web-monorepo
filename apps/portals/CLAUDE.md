# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run all commands from the portal's directory (`apps/portals/<portalName>/`) unless noted.

```bash
# Start dev server — use the nx command from the repo root to ensure
# workspace dependencies (SRC, synapse-portal-framework) are built first
pnpm nx run <portalName>:start

# Production build (also generates sitemap)
pnpm nx build <portalName>

# Type check
pnpm nx type-check <portalName>

# Lint
pnpm nx lint <portalName>
```

There are no unit tests for portal code — portals are configuration-heavy and tested via the shared `synapse-portal-framework` and `synapse-react-client` packages.

## Dependency Builds

Portals import from workspace packages (`synapse-react-client`, `@sage-bionetworks/synapse-portal-framework`) that compile to a `dist/` folder. The portal dev server reads those compiled artifacts — it does **not** watch the source of those packages.

**When you change code in `synapse-react-client` or `synapse-portal-framework`**, you must rebuild that package to see your changes in the portal:

```bash
# From the repo root
pnpm nx run synapse-react-client:build
pnpm nx run synapse-portal-framework:build
```

Vite's HMR will pick up the new `dist/` files automatically once the rebuild completes. The `pnpm nx run <portalName>:start` command handles this on first run (nx builds all dependencies in topological order before starting the dev server), but not for subsequent changes.

## Portal Architecture Overview

Each portal in `apps/portals/` is a themed web application built on the shared `synapse-portal-framework`. Portals share common infrastructure but have unique configurations for routes, styling, and data sources.

### Data Flow

The key data flow for a resource (e.g., Studies) is:

1. **`src/config/resources.ts`** — defines SQL queries against Synapse tables
2. **`src/config/synapseConfigs/<resource>.ts`** — consumes SQL from `resources.ts` to build `QueryWrapperPlotNavProps` (for Explore pages) and `CardConfiguration` (for cards/detail headers)
3. **`src/pages/Explore/<resource>.tsx`** — renders `<QueryWrapperPlotNav {...resourceConfig} />` from SRC
4. **`src/pages/<Resource>DetailsPage/`** — uses `DetailsPage` + `DetailsPageTabs` from the framework; reads the primary key from URL search params via `useGetPortalComponentSearchParams()`

### Page Structure

Each portal has two types of pages:

- **Explore pages** (`src/pages/Explore/`): Thin wrappers that render `<QueryWrapperPlotNav>` with config from `synapseConfigs/`. The `Explore/layout.tsx` wraps them in `<ExploreWrapper>` which provides the tab navigation.
- **Detail pages** (`src/pages/<Resource>DetailsPage/`): Multi-tab pages built with `DetailsPage` + `DetailsPageTabs`. The parent page component fetches row data by primary key (from URL query param); each tab is a separate lazy-loaded route rendered via `<Outlet />`.

### Route Pattern

Routes are lazy-loaded using `convertModuleToRouteObject`:

```typescript
{
  path: 'Explore/Studies/DetailsPage',
  lazy: () => import('@/pages/StudyDetailsPage/StudyDetailsPage').then(convertModuleToRouteObject),
  children: [
    { index: true, element: <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} /> },
    { path: STUDY_DETAILS_PAGE_DETAILS_TAB_PATH, lazy: () => import('@/pages/StudyDetailsPage/StudyDetailsTab').then(convertModuleToRouteObject) },
    // ...more tabs
  ],
}
```

Tab path constants live in `src/config/routeConstants.ts`. Detail pages redirect unknown child routes to the default tab.

The `@/` alias resolves to `src/`.

## Portal Directory Structure

Each portal follows this structure:

```
apps/portals/<portal-name>/
├── .env                           # Portal-specific environment variables (VITE_PORTAL_KEY, etc.)
├── index.html                     # HTML entry point
├── package.json                   # Portal dependencies and scripts
├── vite.config.ts                 # Vite build configuration (usually just re-exports shared portalsViteConfig)
├── sitemap.vite.config.ts         # Vite config for sitemap route extraction
├── public/                        # Static assets
└── src/
    ├── config/
    │   ├── routesConfig.tsx       # Route definitions (RouteObject[])
    │   ├── routeConstants.ts      # Constants for DetailsPage tab paths
    │   ├── resources.ts           # Synapse SQL queries
    │   ├── sitemapConfig.ts       # Sitemap detail page configurations
    │   ├── navbarConfig.ts        # Navigation bar routes
    │   ├── headerConfig.tsx       # Home page header text
    │   ├── footerConfig.ts        # Footer links
    │   ├── paletteConfig.ts       # MUI color palette
    │   ├── logoHeaderConfig.ts    # Header logo SVG
    │   ├── logoFooterConfig.ts    # Footer logo SVG
    │   ├── searchConfig.tsx       # Portal search tab configuration (optional)
    │   ├── style/                 # SCSS overrides and SVG assets
    │   │   ├── _variable_overrides.scss
    │   │   └── _style_overrides.scss
    │   └── synapseConfigs/        # QueryWrapperPlotNavProps and CardConfiguration per resource
    ├── pages/
    │   ├── RootApp.tsx            # App shell (wraps synapse-portal-framework's <App>)
    │   ├── HomePage.tsx           # Home page content
    │   ├── Explore/
    │   │   ├── layout.tsx         # ExploreWrapper with tab paths
    │   │   └── <resource>.tsx     # One file per Explore tab
    │   └── <Resource>DetailsPage/ # One folder per detail page
    └── sitemap/
        └── entry.ts               # Sitemap route extraction entry point
```

## Key Files to Keep in Sync

When making changes to portals, ensure these files stay consistent:

### 1. Routes and Sitemap Configuration

When adding or modifying DetailsPage routes in `routesConfig.tsx`:

- **Update `sitemapConfig.ts`** to include the new detail page with:
  - `path`: The route path (e.g., `Explore/Studies/DetailsPage`)
  - `sql`: SQL query to fetch resource IDs from a Synapse table
  - `primaryKeyColumn`: The column containing resource identifiers

### 2. Package.json Scripts

All portals should have these sitemap-related scripts:

- build-sitemap-routes
- generate-sitemap
- \_generate-sitemap

### 3. Sitemap Vite Config

Each portal needs `sitemap.vite.config.ts`:

```typescript
import sitemapViteConfig from '@sage-bionetworks/vite-config/sitemap-vite-config'
export default sitemapViteConfig
```

### 4. Sitemap Entry Point

Each portal needs `src/sitemap/entry.ts`:

```typescript
import routes from '@/config/routesConfig'
import { generateSitemapRoutesFile } from '@sage-bionetworks/synapse-portal-framework/sitemap/generateSitemapEntry'

generateSitemapRoutesFile(routes)
```

## Adding a New Portal

When creating a new portal, copy the structure from an existing portal (e.g., `nf` or `adknowledgeportal`) and update:

1. `.env` with the new `VITE_PORTAL_KEY`
2. `package.json` with the portal name and all required scripts
3. `routesConfig.tsx` with portal-specific routes
4. `sitemapConfig.ts` with detail page configurations (if applicable)
5. Styling overrides in `src/style/`

## Common Patterns

### Detail Pages

Detail pages use query parameters to display resource-specific content:

- Route: `Explore/Studies/DetailsPage`. A details page may have child routes that refer to different tabs shown in the details page.
- The content of a details page comes from a row in a Synapse table identified by a primary key, which is retrieved from a query parameter.
- The row data of a details page may be referential; e.g. a Study row may include a column that references a wiki that can be retrieved from Synapse.
- URL: `https://portal.synapse.org/Explore/Studies/DetailsPage?Study=syn12345`
- The sitemap generator creates URLs for each resource by querying Synapse tables

### Shared Routes

Portals import shared routes from the framework:

```typescript
import sharedRoutes from '@sage-bionetworks/synapse-portal-framework/shared-config/sharedRoutes'

const routes: RouteObject[] = [
  {
    path: '/',
    lazy: () => import('@/pages/RootApp').then(convertModuleToRouteObject),
    children: [...sharedRoutes /* portal-specific routes */],
  },
]
```

## Configuration Files Reference

### Environment Variables (`.env`)

| Variable                  | Purpose                                         |
| ------------------------- | ----------------------------------------------- |
| `VITE_PORTAL_NAME`        | Display name (e.g., "NF Data Portal")           |
| `VITE_PORTAL_DESCRIPTION` | Meta description for SEO                        |
| `VITE_PORTAL_KEY`         | URL subdomain key (e.g., "nf" → nf.synapse.org) |

### synapseConfigs Folder

Resource-specific configurations for portal objects. Each file typically exports:

- A default `QueryWrapperPlotNavProps` object used by the Explore page
- Named exports for `CardConfiguration` and other config objects reused on detail pages and the home page

### Styling (`src/config/style/`)

| File                       | Purpose                                             |
| -------------------------- | --------------------------------------------------- |
| `_variable_overrides.scss` | Primary/secondary colors, header/footer backgrounds |
| `_style_overrides.scss`    | Custom CSS overrides                                |
| `*.svg`                    | Custom icons for cards, tabs, etc.                  |

Example `_variable_overrides.scss`:

```scss
@use '@sage-bionetworks/synapse-portal-framework/style/variables' with (
  $primary-action-color: #125e81,
  $secondary-action-color: #404b63,
  $header-url: 'config/style/molecule-back.svg'
);
```
