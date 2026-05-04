import { portalMetadata } from '@/config/portalMetadata'
import filesPlotNavProps from '@/config/synapseConfigs/files'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta({ title: 'Explore Files' }, portalMetadata)

function ExploreFiles() {
  return <QueryWrapperPlotNav {...filesPlotNavProps} />
}

export default ExploreFiles
