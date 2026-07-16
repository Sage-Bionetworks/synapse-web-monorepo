import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import datasetsQueryWrapperPlotNavProps from '@/config/synapseConfigs/datasets'

function ExploreDatasets() {
  return <QueryWrapperPlotNav {...datasetsQueryWrapperPlotNavProps} />
}

export default ExploreDatasets
