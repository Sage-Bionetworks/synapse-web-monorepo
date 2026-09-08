import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { datasetsSearch } from '@/config/synapseConfigs/datasets'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { portalMetadata } from '../../config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Datasets' },
  portalMetadata,
)

function ExploreDatasets() {
  return <SearchQueryWrapperPlotNav {...datasetsSearch} shouldDeepLink={true} />
}

export default ExploreDatasets
