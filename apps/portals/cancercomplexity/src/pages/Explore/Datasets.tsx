import { datasetsQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreDatasets() {
  return <QueryWrapperPlotNav {...datasetsQueryWrapperPlotNavProps} />
}
export default ExploreDatasets
