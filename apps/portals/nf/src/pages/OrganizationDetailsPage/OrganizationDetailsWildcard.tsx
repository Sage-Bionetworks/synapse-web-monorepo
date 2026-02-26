// PORTALS-3708: Fallback for nonmatching routes — redirect to Details tab
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { ORGANIZATION_DETAILS_TAB_PATH } from '../../config/routeConstants'

export default function OrganizationDetailsWildcard() {
  return <RedirectWithQuery to={`../${ORGANIZATION_DETAILS_TAB_PATH}`} />
}
