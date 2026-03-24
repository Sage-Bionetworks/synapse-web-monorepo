import tools from '@/config/synapseConfigs/tools'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Tools',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreTools() {
  return <QueryWrapperPlotNav {...tools} />
}

export default ExploreTools
