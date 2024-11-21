import { useEffect } from 'react'
import { useMatches } from 'react-router-dom'

/**
 * Uses the current routes to set the document title. The title will only be set when routes change, so if placed high
 * in the React tree, descendant components (e.g. Details pages) can implement their own logic to override the behavior
 * as long as they rerun when the routes change.
 */
export function useDocumentTitleFromRoutes() {
  const matches = useMatches()

  useEffect(() => {
    // As a heuristic, we get the last path string of the most specific current route.

    // To improve this, we could put custom data in the route handle returned by useMatches:
    // https://reactrouter.com/en/main/hooks/use-matches#usematches

    const portalTitle = import.meta.env.VITE_PORTAL_NAME
    const routeTitle = matches.at(-1)?.pathname.split('/').at(-1)
    if (routeTitle) {
      document.title = `${portalTitle} - ${routeTitle}`
    } else {
      // Set a default title
      document.title = portalTitle
    }
  }, [matches])
}
