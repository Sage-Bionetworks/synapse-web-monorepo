import { useMatches } from 'react-router'
import { useDocumentMetadata } from 'synapse-react-client/utils/context/DocumentMetadataContext'

/**
 * Uses the current routes to set the document title. The title will only be set when routes change, so if placed high
 * in the React tree, descendant components (e.g. Details pages) can implement their own logic to override the behavior
 * as long as they rerun when the routes change.
 */
export function useDocumentTitleFromRoutes() {
  const matches = useMatches()

  const portalTitleEnv: unknown = import.meta.env.VITE_PORTAL_NAME
  const portalTitle = typeof portalTitleEnv === 'string' ? portalTitleEnv : ''
  const lastMatch = matches.at(-1)
  const routeSegment = lastMatch?.pathname.split('/').at(-1) ?? ''
  const decodedSegment = routeSegment ? decodeURIComponent(routeSegment) : ''
  const documentTitle: string = decodedSegment
    ? `${portalTitle} - ${decodedSegment}`
    : portalTitle

  useDocumentMetadata({ title: documentTitle, priority: 10 })
}
