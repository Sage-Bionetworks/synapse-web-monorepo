import { studiesSearch } from '@/config/synapseConfigs/index'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreCollections() {
  return <SearchQueryWrapperPlotNav {...studiesSearch} shouldDeepLink={true} />
}

export default ExploreCollections
