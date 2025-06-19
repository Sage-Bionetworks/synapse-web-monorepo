import { studiesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreCollections() {
  return <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />
}

export default ExploreCollections
