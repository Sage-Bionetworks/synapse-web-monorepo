import type {
  DetailPageMetadataConfig,
  DetailPageMetadata,
} from './fetchDetailPageMetadata'
import { fetchDetailPageMetadata } from './fetchDetailPageMetadata'
import { getPortalOrigin } from './getPortalOrigin'
import type { MetaDescriptor } from 'react-router'

/** Base loader data shape for standard detail pages. */
export type BaseDetailPageLoaderData = DetailPageMetadata

/**
 * Creates `loader`, `clientLoader`, and `meta` exports for a detail page route.
 *
 * All 6 NF portal detail pages (and future portal pages) follow the same
 * pattern: fetch title + optional description from a Synapse table, then
 * surface them as `<title>` and `<meta name="description">` tags.
 *
 * The optional `extendLoader` / `extendMeta` hooks let a single page augment
 * the base data (e.g. DatasetDetailsPage adding Croissant JSON-LD) without
 * forking the core logic.
 *
 * `portalName` and `portalKey` must be passed explicitly from the portal (e.g.
 * `import.meta.env.VITE_PORTAL_NAME` and `import.meta.env.VITE_PORTAL_KEY`). 
 * They cannot be read inside this library because the framework package is 
 * pre-built separately from each portal's Vite build, so `import.meta.env`
 * variables are not available here at runtime.
 *
 * @param config - Metadata config with sql, titleColumn, descriptionColumn, paramName
 * @param options.portalName   - Portal display name appended to the `<title>`, e.g. "NF Data Portal"
 * @param options.portalKey    - Portal key used to construct the canonical URL, e.g. "nf"
 * @param options.extendLoader - Additional async work; receives the base metadata and params
 * @param options.extendMeta  - Additional meta descriptors derived from loader data
 * @returns Object with `loader`, `clientLoader`, and `meta` exports ready to spread
 *
 * @example Standard usage (5 of 6 NF detail pages)
 * ```ts
 * export const metadataConfig: DetailPageMetadataConfig = { ... }
 * export const { loader, clientLoader, meta } = createDetailPageRouteExports(
 *   metadataConfig,
 *   { portalName: import.meta.env.VITE_PORTAL_NAME },
 * )
 * ```
 *
 * @example Extended usage (DatasetDetailsPage)
 * ```ts
 * interface DatasetLoaderData extends BaseDetailPageLoaderData {
 *   croissantJsonLd: Record<string, unknown> | null
 * }
 * export const { loader, clientLoader, meta } =
 *   createDetailPageRouteExports<DatasetLoaderData>(metadataConfig, {
 *     portalName: import.meta.env.VITE_PORTAL_NAME,
 *     extendLoader: async (_base, params) => ({
 *       croissantJsonLd: params.id ? await fetchCroissantMetadata(params.id) : null,
 *     }),
 *     extendMeta: (data) =>
 *       data.croissantJsonLd ? [{ 'script:ld+json': data.croissantJsonLd }] : [],
 *   })
 * ```
 */
export function createDetailPageRouteExports<
  TLoaderData extends BaseDetailPageLoaderData = BaseDetailPageLoaderData,
>(
  config: DetailPageMetadataConfig,
  options: {
    /** Portal display name appended to each `<title>`, e.g. "NF Data Portal". */
    portalName: string
    /**
     * Portal key used to construct the canonical URL (e.g. "nf" → https://nf.synapse.org).
     * When provided, a `<link rel="canonical">` tag is emitted in the route's meta() output,
     * which ensures the canonical URL appears in pre-rendered HTML for SSG portals.
     * Must be passed explicitly from the portal (e.g. `import.meta.env.VITE_PORTAL_KEY`)
     * because `import.meta.env` is not available inside this pre-built library.
     */
    portalKey: string
    /** Additional async work in the loader. Receives the base metadata and params. */
    extendLoader?: (
      baseData: BaseDetailPageLoaderData,
      params: Record<string, string | undefined>,
    ) => Promise<Partial<TLoaderData>>
    /** Additional meta descriptors derived from loader data. */
    extendMeta?: (loaderData: TLoaderData) => MetaDescriptor[]
  },
) {
  const { portalName, portalKey, extendLoader, extendMeta } = options

  async function loader({
    params,
  }: {
    params: Record<string, string | undefined>
  }): Promise<TLoaderData> {
    const paramValue = params[config.paramName]
    const nullData = { title: null, description: null } as TLoaderData
    if (!paramValue) return nullData

    const base = await fetchDetailPageMetadata(config, paramValue)
    if (extendLoader) {
      const extra = await extendLoader(base, params)
      return { ...base, ...extra } as TLoaderData
    }
    return base as TLoaderData
  }

  async function clientLoader({
    params,
    serverLoader,
  }: {
    params: Record<string, string | undefined>
    serverLoader: () => Promise<TLoaderData>
  }): Promise<TLoaderData> {
    try {
      return await serverLoader()
    } catch {
      return loader({ params })
    }
  }

  function meta({
    loaderData,
    matches,
    location,
  }: {
    loaderData?: TLoaderData
    matches: Array<{ meta: MetaDescriptor[] }>
    location: { pathname: string }
  }): MetaDescriptor[] {
    const descriptors: MetaDescriptor[] = []

    if (portalKey) {
      const origin = getPortalOrigin(portalKey)
      descriptors.push({
        tagName: 'link',
        rel: 'canonical',
        href: new URL(location.pathname, origin).toString(),
      })
    }

    if (!loaderData?.title) {
      return [...matches.flatMap(match => match.meta ?? []), ...descriptors]
    }

    descriptors.push({ title: `${loaderData.title} | ${portalName}` })
    if (loaderData.description) {
      descriptors.push({ name: 'description', content: loaderData.description })
    }
    if (extendMeta) {
      descriptors.push(...extendMeta(loaderData))
    }
    return descriptors
  }

  return { loader, clientLoader, meta }
}

/**
 * Creates a static `meta()` export for pages whose title never changes.
 *
 * Intended for Explore tab pages where the title is always the same string
 * (e.g. "Explore Studies | NF Data Portal"). Eliminates the boilerplate
 * two-line function body that was repeated across 7 Explore pages.
 *
 * `portalName` must be passed explicitly from the portal (e.g.
 * `import.meta.env.VITE_PORTAL_NAME`). It cannot be read inside this library
 * because the framework package is pre-built separately from each portal's
 * Vite build, so `import.meta.env` variables are not available here at
 * runtime.
 *
 * @param pageTitle  - The page-specific portion of the title, e.g. "Explore Studies"
 * @param portalName - Portal display name appended to the title, e.g. "NF Data Portal"
 * @returns A `meta()` function that returns `[{ title: "<pageTitle> | <portalName>" }]`
 *
 * @example
 * ```ts
 * export const meta = createStaticMeta('Explore Studies', import.meta.env.VITE_PORTAL_NAME)
 * ```
 */
export function createStaticMeta(
  pageTitle: string,
  portalName: string,
): () => MetaDescriptor[] {
  return () => [{ title: `${pageTitle} | ${portalName}` }]
}
