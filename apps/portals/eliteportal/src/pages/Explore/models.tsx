import modelsQueryWrapperPlotNavProps from '@/config/synapseConfigs/models'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreModels() {
  return <QueryWrapperPlotNav {...modelsQueryWrapperPlotNavProps} />
}

export default ExploreModels
