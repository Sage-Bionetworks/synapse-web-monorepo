import { publicationsSearch } from '@/config/synapseConfigs/publications'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  { title: 'Explore Publications' },
  portalMetadata,
)

function ExplorePublications() {
  return (
    <SearchQueryWrapperPlotNav {...publicationsSearch} shouldDeepLink={true} />
  )
}

export default ExplorePublications
