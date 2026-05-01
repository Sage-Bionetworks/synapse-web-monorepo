import { portalMetadata } from '@/config/portalMetadata'
import hackathons from '@/config/synapseConfigs/hackathons'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Hackathon Projects' },
  portalMetadata,
)

function ExploreHackathons() {
  return <QueryWrapperPlotNav {...hackathons} />
}

export default ExploreHackathons
