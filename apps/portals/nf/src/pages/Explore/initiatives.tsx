import { portalMetadata } from '@/config/portalMetadata'
import initiatives from '@/config/synapseConfigs/initiatives'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Initiatives' },
  portalMetadata,
)

function ExploreInitiatives() {
  return <QueryWrapperPlotNav {...initiatives} />
}

export default ExploreInitiatives
