import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH } from '../../config/routeConstants'

export default function HackathonDetailsPageIndex() {
  return (
    <RedirectWithQuery
      to={HACKATHONS_DETAILS_PAGE_BACKGROUND_AND_RESULTS_TAB_PATH}
    />
  )
}
