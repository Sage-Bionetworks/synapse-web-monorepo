import { experimentalModelsSearch } from '@/config/synapseConfigs/experimental_tools'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreExperimentalModels() {
  return (
    <SearchQueryWrapperPlotNav
      {...experimentalModelsSearch}
      shouldDeepLink={true}
    />
  )
}

export default ExploreExperimentalModels
