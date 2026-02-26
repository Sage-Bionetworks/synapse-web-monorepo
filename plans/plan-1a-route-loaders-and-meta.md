# Plan 1a: Route Loaders and `meta()` for Pre-Rendered Document Metadata

## Goal

Add page-specific `<title>`, `<meta name="description">`, and Open Graph tags to the pre-rendered HTML output of the NF portal. Currently all pre-rendered pages have generic portal-level metadata only — no page-specific titles or descriptions. Search engines and social media crawlers see the same "NF Data Portal" title on every page.

This plan is a sub-plan of [Plan 1](./plan-1-static-prerendering.md) (Phase 2.3 — Validate pre-rendered HTML output).

## Background

### Current State

The NF portal uses two systems for document metadata:

1. **Static meta tags in `root.tsx`** — hardcoded OG/Twitter/description tags populated from `VITE_PORTAL_*` environment variables. These are the same on every page. They are rendered as plain JSX `<meta>` elements in `<head>`, separate from the React Router `<Meta />` component.

2. **`DocumentMetadataContext`** — a client-side priority-based system where components register `{ title, description, priority }` via `useDocumentMetadata()`. A `useEffect` in `DocumentMetadataProvider` writes the highest-priority title to `document.title` and updates the description `<meta>` tag's `content` attribute. This runs only on the client after hydration — it has zero effect on pre-rendered HTML.

Neither system produces a `<title>` tag in the pre-rendered HTML. The `<Meta />` component from React Router is present in `root.tsx` but renders nothing because no route modules export `meta()`.

### Where Titles Come From

For detail pages (studies, datasets, tools, etc.), the title is a column value from a Synapse table row:

| Detail Page  | SQL Table   | Title Column       | URL Param       |
| ------------ | ----------- | ------------------ | --------------- |
| Study        | syn52694652 | `studyName`        | `:studyId`      |
| Dataset      | syn50913342 | `title`            | `:id`           |
| Tool         | syn51730943 | `resourceName`     | `:resourceId`   |
| Initiative   | syn24189696 | `initiative`       | `:initiative`   |
| Hackathon    | syn25585549 | `name`             | `:id`           |
| Organization | syn16858699 | `organizationName` | `:abbreviation` |

The data path is: Synapse table query → `CardContainerLogic` → `GenericCard` → `HeaderCard` → `useDocumentMetadata({ title, priority: 100 })` → `document.title = title` (client-side only).

## Design Decision: React Router Loaders + TanStack Query Coexistence

### Options Considered

**Option A — `loader` only (no TanStack Query integration)**
Add `loader` exports to fetch data at build time. The loader provides data for `meta()` and `useLoaderData()`.
Problem: Duplicates data fetching. The existing `CardContainerLogic` / `DetailsPage` components still fetch the same data again via TanStack Query hooks. Two parallel data systems with no shared state.

**Option B — `loader` seeds metadata, TanStack Query owns the client (Recommended)**
The `loader` fetches a minimal data subset (title + description) for pre-rendered HTML metadata. TanStack Query continues to own all client-side data fetching, caching, and state management. The two systems have separate responsibilities with no conflict.

This is the pattern TanStack Query maintainer TkDodo [explicitly recommends](https://tkdodo.eu/blog/react-query-meets-react-router): "React Router is about _when_, data caching libs are about _what_." As Ryan Florence (React Router) puts it: "React Router is not a cache."

**Option C — Refactor all data fetching into loaders**
Move all Synapse queries into route loaders, replace TanStack Query entirely.
Problem: Massive refactor. TanStack Query provides caching, background refetching, stale-while-revalidate, pagination, infinite queries — all heavily used across `synapse-react-client`. Not practical.

### Chosen Approach: Option B

For each detail page route, add three exports:

1. **`loader`** — runs at **build time** during pre-rendering. Makes a lightweight Synapse table query for just the title and description columns. With `ssr: false`, this only runs at build time (and produces `.data` files for client navigation to pre-rendered paths).

2. **`meta()`** — uses `loaderData` to return `{ title }` and `{ name: 'description', content }` descriptors. React Router's `<Meta />` component (already in `root.tsx`) renders these into the `<head>` during pre-rendering.

3. **`clientLoader`** — runs on the **client** for both hydration of pre-rendered pages and SPA fallback for non-pre-rendered pages. Required to handle new resources added between builds (see below).

No changes to existing components. `CardContainerLogic`, `DetailsPage`, `HeaderCard`, `DocumentMetadataContext` all continue working unchanged on the client.

## CSR Fallback for New Resources

### The Problem

With `ssr: false` + `prerender`, routes are pre-rendered at build time. New resources added to Synapse tables between builds won't have pre-rendered HTML. When a user visits `/Explore/Studies/syn99999999` (a new resource), the static file server can't find `Explore/Studies/syn99999999/index.html` and falls back to `__spa-fallback.html`.

If a route has a `loader` export, `route.hasLoader` is `true` in the build manifest. React Router's client-side code would attempt to fetch a `.data` file that doesn't exist, causing a 404 error.

### The Solution: `clientLoader` with `serverLoader()` Fallback

The `clientLoader` export intercepts the data loading on the client. It receives a `serverLoader()` callback that fetches the `.data` file. By wrapping it in a try/catch, we handle both scenarios:

```ts
export async function clientLoader({ params, serverLoader }) {
  try {
    // Pre-rendered paths: .data file exists, returns build-time data
    return await serverLoader()
  } catch {
    // New resources (SPA fallback): no .data file, fetch from Synapse directly
    return fetchDetailPageMetadata(/* config */, params.studyId)
  }
}
```

### Behavior Matrix

| Scenario                        | HTML Served           | Data Source                                  | `<title>` in HTML        |
| ------------------------------- | --------------------- | -------------------------------------------- | ------------------------ |
| Pre-rendered, direct visit      | Pre-rendered `.html`  | `loader` at build → `.data` → `clientLoader` | Yes (page-specific)      |
| Pre-rendered, client navigation | Already hydrated SPA  | `clientLoader` → `.data` file                | Updated via `meta()`     |
| New resource, direct visit      | `__spa-fallback.html` | `clientLoader` → Synapse API directly        | No (generic portal meta) |
| New resource, client navigation | Already hydrated SPA  | `clientLoader` → Synapse API directly        | Updated via `meta()`     |

New resources degrade gracefully to the same behavior as today's pure SPA — no pre-rendered content, but fully functional via client-side rendering. They gain pre-rendered HTML on the next build.

### React Router Source Confirmation

Verified in `react-router/dist/production/chunk-DZM3VO5F.mjs`:

- **Line 8606-8608**: `fetchServerLoader()` checks `route.hasLoader` — if `false`, returns `null` immediately (no network request). If `true`, fetches the `.data` file.
- **Line 8671-8674**: If `routeModule.clientLoader` exists, it is called **instead of** `fetchServerLoader()`. The `clientLoader` receives `serverLoader()` as a callback.
- **Line 8893-8894**: `shouldHydrateRouteLoader()` returns `true` for all non-root routes when `isSpaMode` is `true`, meaning `clientLoader` runs during SPA fallback hydration.
- **Line 8548**: In SPA mode, all child routes are lazy-loaded — only root is pre-loaded in `__spa-fallback.html`.

## Implementation

### Shared Utility: `fetchDetailPageMetadata`

A shared function that queries a Synapse table for the title and description of a single resource. Used by both `loader` (build time) and `clientLoader` (client fallback).

```ts
// apps/portals/nf/src/utils/fetchDetailPageMetadata.ts

export interface DetailPageMetadataConfig {
  sql: string // e.g. 'SELECT * FROM syn52694652'
  titleColumn: string // e.g. 'studyName'
  descriptionColumn?: string // e.g. 'summary'
  paramName: string // e.g. 'studyId' — the Synapse column to filter by
}

export interface DetailPageMetadata {
  title: string | null
  description: string | null
}

export async function fetchDetailPageMetadata(
  config: DetailPageMetadataConfig,
  paramValue: string,
): Promise<DetailPageMetadata>
```

This function:

1. Extracts the entity ID from the SQL string
2. Builds a `QueryBundleRequest` with a `ColumnSingleValueQueryFilter` for the param
3. Calls the Synapse table query API anonymously (same pattern as `fetchResourceIds`)
4. Extracts the title and description column values from the first matching row
5. Returns `{ title, description }`

### Route Module Pattern

Each detail page route module adds three exports:

```ts
// Example: StudyDetailsPage.tsx

import type { Route } from './+types/StudyDetailsPage'

const metadataConfig: DetailPageMetadataConfig = {
  sql: studiesSql,
  titleColumn: 'studyName',
  descriptionColumn: 'summary',
  paramName: 'studyId',
}

// Build-time: runs during pre-rendering, produces .data file
export async function loader({ params }: Route.LoaderArgs) {
  return fetchDetailPageMetadata(metadataConfig, params.studyId!)
}

// Client-side: runs on hydration and client navigation
export async function clientLoader({
  params,
  serverLoader,
}: Route.ClientLoaderArgs) {
  try {
    return await serverLoader()
  } catch {
    return fetchDetailPageMetadata(metadataConfig, params.studyId!)
  }
}

// Produces <title> and <meta> tags via <Meta /> in root.tsx
export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.title) return []
  return [
    { title: `${loaderData.title} | NF Data Portal` },
    { name: 'description', content: loaderData.description ?? '' },
  ]
}
```

### `root.tsx` Updates

The hardcoded `<meta name="description">` in `root.tsx` may conflict with route-level `meta()` exports (duplicate tags). Options:

1. Remove the hardcoded `<meta name="description">` from `root.tsx` and add a `meta()` export to `root.tsx` that provides the default description. Routes that export their own `meta()` will override it (React Router uses the deepest matching route's `meta()` only).

2. Keep the hardcoded tag and accept that pre-rendered detail pages will have two `description` meta tags (the hardcoded one + the route-level one). Browsers use the first one; crawlers vary.

Option 1 is cleaner. The OG/Twitter tags can remain hardcoded in `root.tsx` for now (they use `property=` not `name=` attributes, and route-level `meta()` can override specific ones as needed).

### Detail Page Configurations

| Route File                    | `titleColumn`      | `descriptionColumn` | `paramName`    |
| ----------------------------- | ------------------ | ------------------- | -------------- |
| `StudyDetailsPage.tsx`        | `studyName`        | `summary`           | `studyId`      |
| `DatasetDetailsPage.tsx`      | `title`            | (none)              | `id`           |
| `ToolDetailsPage.tsx`         | `resourceName`     | (none)              | `resourceId`   |
| `InitiativeDetailsPage.tsx`   | `initiative`       | (none)              | `initiative`   |
| `HackathonDetailsPage.tsx`    | `name`             | (none)              | `id`           |
| `OrganizationDetailsPage.tsx` | `organizationName` | (none)              | `abbreviation` |

### Static Pages

For static pages (Home, Explore tabs, Search), add simple `meta()` exports with hardcoded titles:

```ts
// pages/HomePage.tsx
export function meta() {
  return [{ title: 'NF Data Portal' }]
}

// pages/Explore/studies.tsx
export function meta() {
  return [{ title: 'Explore Studies | NF Data Portal' }]
}
```

These don't need loaders — the titles are known at build time.

## Risk Assessment

| Risk                                                                                                                   | Severity | Mitigation                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientLoader` `serverLoader()` 404 handling: unclear if error is a standard `Error` or React Router specific response | Low      | Test with a non-pre-rendered path. Use a broad `catch` clause.                                                                                                                  |
| Build time increase: each detail page now makes one additional Synapse query per resource for the loader               | Low      | The loader query is a simple single-row filter query. ~1700 queries at build time is acceptable (each takes <100ms). Can be parallelized with `unstable_concurrency` if needed. |
| `clientLoader` runs on every client navigation to a detail page                                                        | Low      | The fetch is lightweight (single row, two columns). Can be optimized later by seeding TanStack Query cache to avoid redundant fetches.                                          |
| Duplicate `<meta name="description">` tags in pre-rendered HTML                                                        | Medium   | Remove the hardcoded tag from `root.tsx` and use `meta()` exports exclusively.                                                                                                  |
| `fetchDetailPageMetadata` must be isomorphic (runs in Node at build time and in browser at runtime)                    | Medium   | Use the `synapse-client` package's `SynapseClient` class which works in both environments. No `window`/`document` access.                                                       |

## JSON-LD Structured Data Pre-Rendering

### Problem

Two components inject JSON-LD structured data into the page, but both use a `useEffect`-based hook (`useJsonLdScriptElement`) that only runs client-side. During pre-rendering, no `<script type="application/ld+json">` tags appear in the HTML.

1. **`JsonLdScript`** on the HomePage — injects a static `DataCatalog` Schema.org object (hardcoded, no data fetching needed).
2. **`DatasetJsonLdScript`** on the DatasetDetailsPage — fetches [Croissant](https://mlcommons.org/working-groups/data/croissant/) metadata from Synapse (a JSON-LD file conforming to `Schema.org Dataset`) and injects the raw content.

### Solution: `"script:ld+json"` in `meta()`

React Router's `MetaDescriptor` type has a first-class `"script:ld+json"` variant:

```ts
{
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "DataCatalog",
    // ...
  }
}
```

The `<Meta />` component renders this as `<script type="application/ld+json">` inside `<head>`. Since `<Meta />` is already in `root.tsx`, this works out of the box during pre-rendering.

The existing `useJsonLdScriptElement` hook and `JsonLdScript`/`DatasetJsonLdScript` components continue to work client-side — they will inject duplicate `<script>` tags after hydration (via `useEffect`), but this is harmless. Search engines read the pre-rendered HTML, and duplicate JSON-LD scripts on the same page are handled gracefully by structured data parsers.

### Implementation: HomePage `DataCatalog` JSON-LD

The `DataCatalog` object is entirely static (hardcoded in `HomePage.tsx`). Add it to the existing `meta()` export:

```ts
// pages/HomePage.tsx
export function meta(): MetaDescriptor[] {
  return [
    { title: 'NF Data Portal' },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'DataCatalog',
        '@id': 'https://nf.synapse.org',
        keywords: ['neurofibromatosis', ...],
        description: '...',
        name: 'NF Data Portal',
        provider: [...],
        alternateName: 'Neurofibromatosis Data Portal',
      },
    },
  ]
}
```

No loader needed — the data is static.

### Implementation: DatasetDetailsPage Croissant JSON-LD

The Croissant metadata requires two Synapse API calls:

1. Query table `syn65903895` to get the S3 URL of the Croissant file for the dataset
2. Fetch the raw file content from that URL

Extend the existing `loader` to also fetch the Croissant content:

1. **Add a `fetchCroissantMetadata` utility** (in `synapse-portal-framework/src/utils/`) that:

   - Queries `syn65903895` with a `dataset = <entityId>` filter (same as `DatasetJsonLdScript`)
   - Fetches the S3 file content
   - Parses the JSON and returns it as a `Record<string, unknown>` (for use with `"script:ld+json"`)

2. **Extend the DatasetDetailsPage `loader`** to call `fetchCroissantMetadata` alongside `fetchDetailPageMetadata`. Return `{ title, description, croissantJsonLd }`.

3. **Extend the DatasetDetailsPage `meta()`** to include a `"script:ld+json"` descriptor when Croissant data is available.

4. **Extend the `clientLoader`** to handle the Croissant data in the same try/catch pattern.

The existing `<DatasetJsonLdScript entityId={id} />` component in the JSX can remain — it provides a client-side fallback (injecting the data after hydration). For pre-rendered pages, the `meta()` will already have the JSON-LD in `<head>`.

### Behavior Matrix (updated with JSON-LD)

| Page                              | JSON-LD in pre-rendered HTML?      | JSON-LD source (pre-rendered)               | Client-side JSON-LD (after hydration)          |
| --------------------------------- | ---------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| HomePage                          | Yes — `DataCatalog`                | `meta()` static object                      | `JsonLdScript` component (duplicate, harmless) |
| DatasetDetailsPage (pre-rendered) | Yes — `Dataset` (Croissant)        | `loader` → `meta()` with `"script:ld+json"` | `DatasetJsonLdScript` component (duplicate)    |
| DatasetDetailsPage (SPA fallback) | No                                 | N/A                                         | `DatasetJsonLdScript` component (client-only)  |
| Other detail pages                | No JSON-LD (none exists currently) | N/A                                         | N/A                                            |

## Success Criteria

- [ ] Pre-rendered HTML for `/` has `<title>NF Data Portal</title>`
- [ ] Pre-rendered HTML for `/` has `<script type="application/ld+json">` with `DataCatalog` schema
- [ ] Pre-rendered HTML for `/Explore/Studies` has `<title>Explore Studies | NF Data Portal</title>`
- [ ] Pre-rendered HTML for `/Explore/Studies/syn12345` has `<title>{Study Name} | NF Data Portal</title>` with the actual study name from Synapse
- [ ] Pre-rendered HTML for detail pages has `<meta name="description" content="...">` with page-specific content where available
- [ ] Pre-rendered HTML for `/Explore/Datasets/<id>` has `<script type="application/ld+json">` with Croissant `Dataset` metadata (when available)
- [ ] Non-pre-rendered paths (new resources added after build) still work via CSR — the SPA fallback loads, `clientLoader` fetches metadata from Synapse, and the page renders correctly
- [ ] `pnpm nx run nf:build` completes without errors
- [ ] All existing tests pass
- [ ] No hydration mismatch warnings in the browser console
