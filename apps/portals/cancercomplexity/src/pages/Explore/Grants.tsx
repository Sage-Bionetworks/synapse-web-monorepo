import { grantQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

export const meta = createStaticMeta(
  { title: 'Explore Grants' },
  portalMetadata,
)

function ExploreGrants() {
  return <QueryWrapperPlotNav {...grantQueryWrapperPlotNavProps} />
}
export default ExploreGrants
