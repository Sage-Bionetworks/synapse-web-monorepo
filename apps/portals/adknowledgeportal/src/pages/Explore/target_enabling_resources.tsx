import { targetEnablingResourcesSearch } from '@/config/synapseConfigs/target_enabling_resources'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreTargetEnablingResources() {
  return (
    <SearchQueryWrapperPlotNav
      {...targetEnablingResourcesSearch}
      shouldDeepLink={true}
    />
  )
}

export default ExploreTargetEnablingResources
