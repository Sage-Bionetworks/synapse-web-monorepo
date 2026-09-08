import { educationSearch } from '@/config/synapseConfigs'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Educational Resources' },
  portalMetadata,
)

function ExploreEducationalResources() {
  return (
    <SearchQueryWrapperPlotNav {...educationSearch} shouldDeepLink={true} />
  )
}

export default ExploreEducationalResources
