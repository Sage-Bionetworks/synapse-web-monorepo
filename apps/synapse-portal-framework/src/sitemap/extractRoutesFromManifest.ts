/**
 * Minimal structural type for a route in the ServerBuild.routes manifest.
 * Defined here instead of importing from react-router to avoid version
 * coupling between the framework package and app packages that may use
 * different react-router versions.
 */
export interface ManifestRoute {
  id: string
  parentId?: string
  path?: string
  index?: boolean
}

/**
 * A flat record of route IDs to route entries, matching the shape of
 * `ServerBuild['routes']` from react-router. Each value may be undefined
 * (per the RouteManifest generic type).
 */
export type RouteManifest = Record<string, ManifestRoute | undefined>

/**
 * Reconstructs full URL paths from the flat ServerBuild.routes manifest.
 *
 * Each entry in the manifest has only its path segment and a parentId.
 * This function walks the parentId chain to build full paths, then filters
 * out parameterized routes (:param), wildcards (*), and descendants of
 * parameterized routes — the same logic as flattenRoutePaths() but for the
 * server manifest format.
 *
 * @param routes - The ServerBuild.routes manifest (flat record of route entries)
 * @returns An array of deduplicated, absolute path strings suitable for sitemap generation
 */
export function extractStaticRoutePaths(routes: RouteManifest): string[] {
  const paths: string[] = []

  for (const routeId of Object.keys(routes)) {
    const fullPath = buildFullPath(routeId, routes)

    // Skip if any segment in the chain is a wildcard or has params
    if (fullPath === null) {
      continue
    }

    // URL-encode spaces in paths
    const encodedPath = fullPath.replace(/ /g, '%20')

    // Normalize to start with /
    const normalizedPath = encodedPath.startsWith('/')
      ? encodedPath
      : `/${encodedPath}`

    // Avoid duplicates
    if (!paths.includes(normalizedPath)) {
      paths.push(normalizedPath)
    }
  }

  return paths
}

/**
 * Walks the parentId chain to reconstruct the full URL path for a route.
 *
 * Returns null if any segment in the chain:
 * - Is a wildcard ('*')
 * - Contains a route parameter (':param')
 *
 * Index routes (no path segment) and layout routes (no path segment)
 * inherit their parent's path.
 */
function buildFullPath(routeId: string, routes: RouteManifest): string | null {
  const segments: string[] = []
  let currentId: string | undefined = routeId
  let foundRootSlash = false

  while (currentId != null) {
    const route = routes[currentId]
    if (!route) break

    const segment = route.path

    if (segment != null) {
      // Wildcard — exclude the entire route
      if (segment === '*') {
        return null
      }
      // Dynamic segment — exclude this route and all descendants
      if (segment.includes(':')) {
        return null
      }
      // The root '/' path and empty string '' are not real segments —
      // they just mean "root of the app"
      if (segment === '/' || segment === '') {
        foundRootSlash = true
      } else {
        segments.unshift(segment)
      }
    }
    // Routes without a path (layout routes, index routes) contribute
    // no segment — we just continue walking up.

    currentId = route.parentId
  }

  if (segments.length === 0) {
    // Route has no path segments.
    // Include it if: it's an index route (renders at parent URL), or
    // the route itself (or an ancestor) had path '/'.
    const route = routes[routeId]
    if (route && (route.index || route.path === '/' || foundRootSlash)) {
      return '/'
    }
    // Layout-only routes with no path don't get their own URL
    return null
  }

  return '/' + segments.join('/')
}
