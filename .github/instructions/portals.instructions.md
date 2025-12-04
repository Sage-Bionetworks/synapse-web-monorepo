---
applyTo: 'apps/portals/**'
---

# Portal Development Instructions

## Portal Architecture Overview

Each portal in `apps/portals/` is a themed web application built on the shared `synapse-portal-framework`. Portals share common infrastructure but have unique configurations for routes, styling, and data sources.

## Portal Directory Structure

Each portal follows this structure:

```
apps/portals/<portal-name>/
├── .env                           # Portal-specific environment variables (VITE_PORTAL_KEY, etc.)
├── index.html                     # HTML entry point
├── package.json                   # Portal dependencies and scripts
├── vite.config.ts                 # Vite build configuration
├── sitemap.vite.config.ts         # Vite config for sitemap route extraction
├── public/                        # Static assets
└── src/
    ├── config/
    │   ├── routesConfig.tsx       # Route definitions (RouteObject[])
    │   ├── sitemapConfig.ts       # Sitemap detail page configurations
    │   └── ...                    # Other portal-specific configs
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

```json
{
  "scripts": {
    "build-sitemap-routes": "vite build --config sitemap.vite.config.ts && node build/sitemap-entry.mjs",
    "generate-sitemap": "dotenv -- pnpm _generate-sitemap",
    "_generate-sitemap": "pnpm build-sitemap-routes && tsx ../../synapse-portal-framework/src/sitemap/cli.ts \"$VITE_PORTAL_KEY\" --config src/config/sitemapConfig.ts --routes build/sitemap-routes.json"
  }
}
```

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

## Running Portal Commands

```bash
# Start development server
cd apps/portals/<portal-name>
pnpm start

# Build for production (also generates the sitemap)
pnpm build
```

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
    element: <App />,
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

### Config Files (`src/config/`)

| File                  | Purpose                                                     |
| --------------------- | ----------------------------------------------------------- |
| `routesConfig.tsx`    | Route definitions (`RouteObject[]`)                         |
| `navbarConfig.ts`     | Navigation bar routes with nested dropdowns                 |
| `headerConfig.tsx`    | Home page header summary text                               |
| `footerConfig.ts`     | Footer links (contact, terms, additional logos)             |
| `paletteConfig.ts`    | Color palette                                               |
| `logoHeaderConfig.ts` | Header logo SVG                                             |
| `logoFooterConfig.ts` | Footer logo SVG                                             |
| `resources.ts`        | Synapse SQL queries that define the resources in the portal |
| `routeConstants.ts`   | Constants for DetailsPage tab paths                         |
| `searchConfig.tsx`    | Portal search tab configuration (optional)                  |
| `sitemapConfig.ts`    | Sitemap detail page configurations                          |

### synapseConfigs Folder

Resource-specific configurations for portal objects. Each file contains UI settings to describe the cards and/or tables that display that resource.

### Styling (`src/config/style/`)

| File                       | Purpose                                             |
| -------------------------- | --------------------------------------------------- |
| `_variable_overrides.scss` | Primary/secondary colors, header/footer backgrounds |
| `_style_overrides.scss`    | Custom CSS overrides                                |
| `*.svg`                    | Custom icons for cards, tabs, etc.                  |

Example `_variable_overrides.scss`:

```scss
@use '@sage-bionetworks/synapse-portal-framework/src/style/variables' with (
  $primary-action-color: #125e81,
  $secondary-action-color: #404b63,
  $header-url: 'config/style/molecule-back.svg'
);
```
