import { experimentalToolsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/experimental_tools'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreExperimentalModels() {
  return <QueryWrapperPlotNav {...experimentalToolsQueryWrapperPlotNavProps} />
}

export default ExploreExperimentalModels
