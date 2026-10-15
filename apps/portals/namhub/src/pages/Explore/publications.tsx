import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import publicationsQueryWrapperPlotNavProps from '@/config/synapseConfigs/publications'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { portalMetadata } from '../../config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Publications' },
  portalMetadata,
)

function ExplorePublications() {
  return (
    <QueryWrapperPlotNav
      {...publicationsQueryWrapperPlotNavProps}
      shouldDeepLink={true}
    />
  )
}

export default ExplorePublications
