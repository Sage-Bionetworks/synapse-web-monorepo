import { targetEnablingResourcesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/target_enabling_resources'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreTargetEnablingResources() {
  return (
    <QueryWrapperPlotNav {...targetEnablingResourcesQueryWrapperPlotNavProps} />
  )
}

export default ExploreTargetEnablingResources
