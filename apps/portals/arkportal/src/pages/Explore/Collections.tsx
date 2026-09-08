import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { datasetCollectionsSearch } from '@/config/synapseConfigs/datasetcollections'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  { title: 'Explore Collections' },
  portalMetadata,
)

function ExploreCollections() {
  return (
    <SearchQueryWrapperPlotNav
      {...datasetCollectionsSearch}
      shouldDeepLink={true}
    />
  )
}
export default ExploreCollections
