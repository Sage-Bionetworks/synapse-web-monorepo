import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { studiesSearch } from '@/config/synapseConfigs/studies'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { portalMetadata } from '../../config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Studies' },
  portalMetadata,
)

function ExploreStudies() {
  return <SearchQueryWrapperPlotNav {...studiesSearch} shouldDeepLink={true} />
}

export default ExploreStudies
