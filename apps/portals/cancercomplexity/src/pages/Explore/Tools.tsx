import { toolsQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

export const meta = createStaticMeta({ title: 'Explore Tools' }, portalMetadata)

function ExploreTools() {
  return <QueryWrapperPlotNav {...toolsQueryWrapperPlotNavProps} />
}
export default ExploreTools
