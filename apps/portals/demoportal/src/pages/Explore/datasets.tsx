import { datasetsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/datasets'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function ExploreDatasets() {
  return <QueryWrapperPlotNav {...datasetsQueryWrapperPlotNavProps} />
}

export default ExploreDatasets
