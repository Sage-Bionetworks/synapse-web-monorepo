import type {
  DetailPageMetadataConfig,
  DetailPageMetadata,
} from './fetchDetailPageMetadata'
import { fetchDetailPageMetadata } from './fetchDetailPageMetadata'
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
 * `portalName` must be passed explicitly from the portal (e.g.
 * `import.meta.env.VITE_PORTAL_NAME`). It cannot be read inside this library
 * because the framework package is pre-built separately from each portal's
 * Vite build, so `import.meta.env` variables are not available here at
 * runtime.
 *
 * @param config - Metadata config with sql, titleColumn, descriptionColumn, paramName
 * @param options.portalName   - Portal display name appended to the `<title>`, e.g. "NF Data Portal"
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
    /** Additional async work in the loader. Receives the base metadata and params. */
    extendLoader?: (
      baseData: BaseDetailPageLoaderData,
      params: Record<string, string | undefined>,
    ) => Promise<Partial<TLoaderData>>
    /** Additional meta descriptors derived from loader data. */
    extendMeta?: (loaderData: TLoaderData) => MetaDescriptor[]
  },
) {
  const { portalName, extendLoader, extendMeta } = options

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
  }: {
    loaderData?: TLoaderData
    matches: Array<{ meta: MetaDescriptor[] }>
  }): MetaDescriptor[] {
    if (!loaderData?.title) {
      return matches.flatMap(match => match.meta ?? [])
    }
    const descriptors: MetaDescriptor[] = [
      { title: `${loaderData.title} | ${portalName}` },
    ]
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
