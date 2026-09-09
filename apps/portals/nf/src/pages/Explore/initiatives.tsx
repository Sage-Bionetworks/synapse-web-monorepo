import { portalMetadata } from '@/config/portalMetadata'
import { initiativesSearch } from '@/config/synapseConfigs/initiatives'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore Initiatives' },
  portalMetadata,
)

function ExploreInitiatives() {
  return (
    <div className="nf-initiatives-section">
      <SearchQueryWrapperPlotNav {...initiativesSearch} shouldDeepLink={true} />
    </div>
  )
}

export default ExploreInitiatives
