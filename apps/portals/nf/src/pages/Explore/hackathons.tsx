import { portalMetadata } from '@/config/portalMetadata'
import { hackathonsSearch } from '@/config/synapseConfigs/hackathons'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Hackathon Projects' },
  portalMetadata,
)

function ExploreHackathons() {
  return (
    <SearchQueryWrapperPlotNav {...hackathonsSearch} shouldDeepLink={true} />
  )
}

export default ExploreHackathons
