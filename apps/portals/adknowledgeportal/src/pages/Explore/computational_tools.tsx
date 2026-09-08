import { computationalToolsSearch } from '@/config/synapseConfigs/computational_tools'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreComputationalTools() {
  return (
    <SearchQueryWrapperPlotNav
      {...computationalToolsSearch}
      shouldDeepLink={true}
    />
  )
}

export default ExploreComputationalTools
