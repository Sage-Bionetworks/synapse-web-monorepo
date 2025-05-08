import { STUDY_DETAILS_PAGE_DETAILS_TAB_PATH } from '@/config/routeConstants'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'

function StudyDetailsPageIndex() {
  // A tab is always shown -- redirect to the details tab
  return <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
}

export default StudyDetailsPageIndex
