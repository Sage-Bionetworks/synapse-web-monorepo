// PORTALS-3708: Fallback for nonmatching routes — redirect to Details tab
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH } from '../../config/routeConstants'

export default function ToolDetailsPageWildcard() {
  return <RedirectWithQuery to={`../${TOOLS_DETAILS_PAGE_DETAILS_TAB_PATH}`} />
}
