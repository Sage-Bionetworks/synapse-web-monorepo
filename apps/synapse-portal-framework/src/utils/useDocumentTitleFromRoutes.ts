import { useMatches } from 'react-router'
import { useDocumentMetadata } from 'synapse-react-client/utils/context/DocumentMetadataContext'
import { usePortalContext } from '@/components/PortalContext'

/**
 * Uses the current routes to set the document title. The title will only be set when routes change, so if placed high
 * in the React tree, descendant components (e.g. Details pages) can implement their own logic to override the behavior
 * as long as they rerun when the routes change.
 */
export function useDocumentTitleFromRoutes() {
  const matches = useMatches()
  const { portalName } = usePortalContext()

  const portalTitle = portalName || 'Synapse Portal'
  let newDocumentTitle = portalTitle

  const routeTitle = matches.at(-1)?.pathname.split('/').at(-1)
  if (routeTitle) {
    newDocumentTitle = `${portalTitle} - ${routeTitle}`
  }

  useDocumentMetadata({ title: newDocumentTitle, priority: 10 })
}
