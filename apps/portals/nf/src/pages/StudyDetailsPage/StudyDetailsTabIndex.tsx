import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { STUDY_DETAILS_PAGE_DETAILS_TAB_PATH } from '../../config/routeConstants'

export default function StudyDetailsTabIndex() {
  return <RedirectWithQuery to={STUDY_DETAILS_PAGE_DETAILS_TAB_PATH} />
}
