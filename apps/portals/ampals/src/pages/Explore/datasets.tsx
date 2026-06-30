import { datasetsSearch } from '@/config/synapseConfigs/datasets'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreDatasets() {
  return <SearchQueryWrapperPlotNav {...datasetsSearch} shouldDeepLink={true} />
}

export default ExploreDatasets
