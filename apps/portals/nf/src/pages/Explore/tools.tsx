import { portalMetadata } from '@/config/portalMetadata'
import { toolsSearch } from '@/config/synapseConfigs/tools'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const meta = createStaticMeta({ title: 'Explore Tools' }, portalMetadata)

function ExploreTools() {
  return <SearchQueryWrapperPlotNav {...toolsSearch} shouldDeepLink={true} />
}

export default ExploreTools
