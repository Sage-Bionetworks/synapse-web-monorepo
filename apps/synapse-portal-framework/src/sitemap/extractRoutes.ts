import type { RouteObject } from 'react-router'

/**
 * Recursively flattens a route tree into an array of path strings.
 *
 * This function traverses the RouteObject[] tree structure, combining parent
 * and child paths to produce absolute paths suitable for sitemap generation.
 *
 * Routes are excluded from the output if they:
 * - Are wildcard routes (path === '*')
 * - Contain route parameters (path includes ':')
 * - End with '/DetailsPage' (these are handled separately via dynamic URL generation)
 * - Are sub-routes of a DetailsPage (e.g., '/DetailsPage/Details') since they require query params
 *
 * Index routes inherit the parent path (as they render at the parent URL).
 *
 * @param routes - The route tree to flatten
 * @param parentPath - The accumulated path from parent routes (used in recursion)
 * @returns An array of absolute path strings
 */
export function flattenRoutePaths(
  routes: RouteObject[],
  parentPath: string = '',
): string[] {
  const paths: string[] = []

  for (const route of routes) {
    let currentPath: string

    if (route.index) {
      // Index routes render at the parent path
      currentPath = parentPath
    } else if (route.path) {
      // Combine parent path with current route path
      // Handle leading/trailing slashes to avoid double slashes
      const normalizedParent = parentPath.replace(/\/+$/, '')
      const normalizedPath = route.path.replace(/^\/+/, '')

      if (normalizedParent && normalizedPath) {
        currentPath = `${normalizedParent}/${normalizedPath}`
      } else {
        currentPath = normalizedParent || `/${normalizedPath}`
      }
    } else {
      // Routes without path (layout routes) pass through parent path
      currentPath = parentPath
    }

    // URL-encode spaces in paths
    const encodedPath = currentPath.replace(/ /g, '%20')

    // Check if this route should be included in the sitemap
    const isWildcard = route.path === '*'
    const hasParams = route.path?.includes(':') ?? false
    const isDetailsPage = encodedPath.endsWith('/DetailsPage')
    // Also exclude sub-routes of DetailsPage (e.g., /DetailsPage/Details, /DetailsPage/AdditionalFiles)
    // These require a query param to be useful and are covered by dynamic URL generation
    const isDetailsPageSubRoute = encodedPath.includes('/DetailsPage/')

    // Add the path if it's valid and should be included
    if (
      encodedPath &&
      !isWildcard &&
      !hasParams &&
      !isDetailsPage &&
      !isDetailsPageSubRoute
    ) {
      // Normalize path to start with /
      const normalizedPath = encodedPath.startsWith('/')
        ? encodedPath
        : `/${encodedPath}`

      // Avoid duplicates (can happen with index routes)
      if (!paths.includes(normalizedPath)) {
        paths.push(normalizedPath)
      }
    }

    // Recursively process children
    if (route.children && route.children.length > 0) {
      const childPaths = flattenRoutePaths(route.children, currentPath)
      for (const childPath of childPaths) {
        if (!paths.includes(childPath)) {
          paths.push(childPath)
        }
      }
    }
  }

  return paths
}

/**
 * Writes the extracted route paths to a JSON file.
 *
 * This is the main entry point for the sitemap route extraction build step.
 * It takes the route tree, flattens it, and writes the result to the specified file.
 *
 * @param routes - The route tree to extract paths from
 * @param outputPath - The path to write the JSON output to
 */
export async function writeRoutePaths(
  routes: RouteObject[],
  outputPath: string,
): Promise<void> {
  const paths = flattenRoutePaths(routes)

  // Dynamic import of fs since this runs in Node
  const fs = await import('fs')
  const path = await import('path')

  // Ensure output directory exists
  const dir = path.dirname(outputPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(outputPath, JSON.stringify(paths, null, 2))
  console.log(`Wrote ${paths.length} routes to ${outputPath}`)
}
