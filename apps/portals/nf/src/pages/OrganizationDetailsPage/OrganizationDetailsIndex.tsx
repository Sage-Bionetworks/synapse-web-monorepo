import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { ORGANIZATION_DETAILS_TAB_PATH } from '../../config/routeConstants'

export default function OrganizationDetailsIndex() {
  return <RedirectWithQuery to={ORGANIZATION_DETAILS_TAB_PATH} />
}
