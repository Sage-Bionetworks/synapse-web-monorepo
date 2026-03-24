import studies from '@/config/synapseConfigs/studies'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Studies',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreStudies() {
  return <QueryWrapperPlotNav {...studies} />
}

export default ExploreStudies
