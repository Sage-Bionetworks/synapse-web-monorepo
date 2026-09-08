import { dataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  { title: 'Explore All Data' },
  portalMetadata,
)

function ExploreAllData() {
  return <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
}

export default ExploreAllData
