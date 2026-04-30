import { portalMetadata } from '@/config/portalMetadata'
import studies from '@/config/synapseConfigs/studies'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Studies' },
  portalMetadata,
)

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studies} />
}

export default ExploreStudies
