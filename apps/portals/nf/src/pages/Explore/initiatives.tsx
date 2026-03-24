import initiatives from '@/config/synapseConfigs/initiatives'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Initiatives',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreInitiatives() {
  return <QueryWrapperPlotNav {...initiatives} />
}

export default ExploreInitiatives
