import filesPlotNavProps from '@/config/synapseConfigs/files'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Files',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesPlotNavProps} />
}

export default ExploreFiles
