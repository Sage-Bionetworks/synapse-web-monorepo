import { toolsSearch } from '@/config/synapseConfigs/index'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreTools() {
  return <SearchQueryWrapperPlotNav {...toolsSearch} shouldDeepLink={true} />
}

export default ExploreTools
