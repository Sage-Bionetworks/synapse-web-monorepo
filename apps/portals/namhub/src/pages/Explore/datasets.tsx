import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { datasetsSearch } from '@/config/synapseConfigs/datasets'

function ExploreDatasets() {
  return <SearchQueryWrapperPlotNav {...datasetsSearch} shouldDeepLink={true} />
}

export default ExploreDatasets
