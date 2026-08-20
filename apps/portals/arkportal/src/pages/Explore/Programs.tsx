import { programsSearch } from '@/config/synapseConfigs/programs'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  { title: 'Explore Programs' },
  portalMetadata,
)

function ExplorePrograms() {
  return <SearchQueryWrapperPlotNav {...programsSearch} shouldDeepLink={true} />
}

export default ExplorePrograms
