// PORTALS-3708: Fallback for nonmatching routes — redirect to Background & Results tab
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH } from '../../config/routeConstants'

export default function HackathonDetailsPageWildcard() {
  return (
    <RedirectWithQuery
      to={`../${HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH}`}
    />
  )
}
