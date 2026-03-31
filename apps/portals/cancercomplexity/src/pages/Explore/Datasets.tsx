import { datasetsQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreDatasets() {
  return <QueryWrapperPlotNav {...datasetsQueryWrapperPlotNavProps} />
}
export default ExploreDatasets
