import { datasetQueryWrapperPlotNavProps } from '@/config/synapseConfigs/datasets'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreDatasets() {
  return <QueryWrapperPlotNav {...datasetQueryWrapperPlotNavProps} />
}

export default ExploreDatasets
