import { route } from '@react-router/dev/routes'
import type { RouteConfigEntry } from '@react-router/dev/routes'

/**
 * Generates legacy `/DetailsPage` redirect routes for one resource. Each
 * entry reuses `file` with a unique `id` (Framework Mode requires unique
 * ids when one file backs multiple routes).
 *
 * For tabbed detail pages, list every tab in `knownTabPaths`. Each emits an
 * explicit static route so the legacy URL outscores the real
 * `:resourceId/<tab>` route during path ranking (all-static scores 44 vs 37
 * for one dynamic segment) — without it, legacy tab URLs match the real
 * page with `resourceId="DetailsPage"` and 404. A `:tab` fallback also
 * catches removed/renamed tab names, recovered by the parent's
 * `DefaultTabWildcardRedirect`. For non-tabbed pages, omit `knownTabPaths`.
 *
 * @example
 *   ...legacyDetailsPageRoutes({
 *     basePath: 'Explore/Studies/DetailsPage',
 *     file: 'pages/LegacyStudyRedirect.tsx',
 *     idPrefix: 'legacy-study',
 *     knownTabPaths: ['Details', 'Datasets', 'Files', 'AdditionalFiles'],
 *   }),
 */
export function legacyDetailsPageRoutes(opts: {
  basePath: string
  file: string
  idPrefix: string
  knownTabPaths?: readonly string[]
}): RouteConfigEntry[] {
  const { basePath, file, idPrefix, knownTabPaths = [] } = opts
  const entries: RouteConfigEntry[] = [
    route(basePath, file, { id: `${idPrefix}-base` }),
  ]
  knownTabPaths.forEach((tab, i) => {
    entries.push(
      route(`${basePath}/${tab}`, file, { id: `${idPrefix}-tab-${i}` }),
    )
  })
  if (knownTabPaths.length > 0) {
    entries.push(
      route(`${basePath}/:tab`, file, { id: `${idPrefix}-tab-fallback` }),
    )
  }
  return entries
}
