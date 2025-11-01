import { useMatches } from 'react-router'
import { useDocumentMetadata } from 'synapse-react-client/utils/context/DocumentMetadataContext'

/**
 * Uses the current routes to set the document title. The title will only be set when routes change, so if placed high
 * in the React tree, descendant components (e.g. Details pages) can implement their own logic to override the behavior
 * as long as they rerun when the routes change.
 */
export function useDocumentTitleFromRoutes() {
  const matches = useMatches()

  const portalTitleEnv = import.meta.env.VITE_PORTAL_NAME
  let newDocumentTitle = portalTitleEnv

  const routeTitle = matches.at(-1)?.pathname.split('/').at(-1)
  if (routeTitle) {
    newDocumentTitle = `${portalTitleEnv} - ${routeTitle}`
  }

  useDocumentMetadata({ title: newDocumentTitle, priority: 10 })
}
