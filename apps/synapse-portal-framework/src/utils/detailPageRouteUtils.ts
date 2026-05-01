import type {
  DetailPageMetadataConfig,
  DetailPageMetadata,
} from './fetchDetailPageMetadata'
import { fetchDetailPageMetadata } from './fetchDetailPageMetadata'
import { getPortalOrigin } from './getPortalOrigin'
import type { MetaArgs, MetaDescriptor } from 'react-router'
import { mergeMeta } from './mergeMeta'

export type PortalMetadata = {
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
}

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
  portalMetadata: PortalMetadata,
  options: {
    /** Additional async work in the loader. Receives the base metadata and params. */
    extendLoader?: (
      baseData: BaseDetailPageLoaderData,
      params: Record<string, string | undefined>,
    ) => Promise<Partial<TLoaderData>>
    /** Additional meta descriptors derived from loader data. */
    extendMeta?: (loaderData: TLoaderData) => MetaDescriptor[]
  } = {},
) {
  const { portalName, portalKey } = portalMetadata
  const { extendLoader, extendMeta } = options

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

  function meta(args: MetaArgs<() => TLoaderData>): MetaDescriptor[] {
    const { loaderData, location } = args
    const descriptors: MetaDescriptor[] = []

    const origin = getPortalOrigin(portalKey)
    const pageUrl = origin
      ? new URL(location.pathname, origin).toString()
      : null

    if (pageUrl) {
      descriptors.push({
        tagName: 'link',
        rel: 'canonical',
        href: pageUrl,
      })

      descriptors.push({ property: 'og:url', content: pageUrl })
      descriptors.push({ name: 'twitter:url', content: pageUrl })
    }

    if (loaderData?.title) {
      const pageTitle = `${loaderData.title} | ${portalName}`
      descriptors.push({ title: pageTitle })
      descriptors.push({ property: 'og:title', content: pageTitle })
      descriptors.push({ name: 'twitter:title', content: pageTitle })
    }

    if (loaderData?.description) {
      descriptors.push({ name: 'description', content: loaderData.description })
      descriptors.push({
        property: 'og:description',
        content: loaderData.description,
      })
      descriptors.push({
        name: 'twitter:description',
        content: loaderData.description,
      })
    }
    if (extendMeta && loaderData) {
      descriptors.push(...extendMeta(loaderData as TLoaderData))
    }
    return mergeMeta(args, descriptors)
  }

  return { loader, clientLoader, meta }
}

/**
 * Creates a `meta()` export for pages with static metadata.

 *
 * @param staticMetadata  - The page-specific metadata (e.g. title/description) to merge with the portal-level defaults
 * @param portalMetadata - Portal metadata used to construct the page metadata (e.g. portalName appended to title, portalKey used for canonical URL)
 * @returns A `meta()` function that merges parent route meta descriptors and
 *   overrides `meta` tags with page-specific values.
 *
 * @example
 * ```ts
 * export const meta = createStaticMeta({ title: 'Explore Studies' }, { portalName: import.meta.env.VITE_PORTAL_NAME, portalKey: import.meta.env.VITE_PORTAL_KEY })
 * ```
 */
export function createStaticMeta(
  staticMetadata: {
    title: string
    description?: string
  },
  portalMetadata: PortalMetadata,
): (args: MetaArgs) => MetaDescriptor[] {
  const { title, description } = staticMetadata
  const { portalKey, portalName } = portalMetadata
  return args => {
    const { location } = args
    const fullTitle = `${title} | ${portalName}`
    const descriptors: MetaDescriptor[] = [
      { title: fullTitle },
      { property: 'og:title', content: fullTitle },
      { name: 'twitter:title', content: fullTitle },
    ]
    const origin = getPortalOrigin(portalKey)
    const pageUrl = origin
      ? new URL(location.pathname, origin).toString()
      : null

    if (pageUrl) {
      descriptors.push({
        tagName: 'link',
        rel: 'canonical',
        href: pageUrl,
      })

      descriptors.push({ property: 'og:url', content: pageUrl })
      descriptors.push({ name: 'twitter:url', content: pageUrl })
    }

    if (description) {
      descriptors.push({
        name: 'description',
        content: description,
      })
      descriptors.push({
        property: 'og:description',
        content: description,
      })
      descriptors.push({
        name: 'twitter:description',
        content: description,
      })
    }

    return mergeMeta(args, descriptors)
  }
}
