import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { datasetCollectionsSearch } from '@/config/synapseConfigs/datasetcollections'

function ExploreCollections() {
  return (
    <SearchQueryWrapperPlotNav
      {...datasetCollectionsSearch}
      shouldDeepLink={true}
    />
  )
}
export default ExploreCollections
