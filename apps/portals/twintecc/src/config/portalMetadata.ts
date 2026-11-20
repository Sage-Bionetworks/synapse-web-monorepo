import { type PortalMetadata } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const portalMetadata: PortalMetadata = {
  portalName: import.meta.env.VITE_PORTAL_NAME,
  portalKey: import.meta.env.VITE_PORTAL_KEY,
}
