import { toolsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/tools'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreTools() {
  return <QueryWrapperPlotNav {...toolsQueryWrapperPlotNavProps} />
}

export default ExploreTools
