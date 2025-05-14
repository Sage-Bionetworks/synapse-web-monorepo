import computationalToolsQueryWrapperPlotNavProps from '@/config/synapseConfigs/computational_tools'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreComputationalTools() {
  return <QueryWrapperPlotNav {...computationalToolsQueryWrapperPlotNavProps} />
}
export default ExploreComputationalTools
