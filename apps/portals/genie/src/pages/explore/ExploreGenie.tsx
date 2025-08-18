import { genieDataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreGenie() {
  return <QueryWrapperPlotNav {...genieDataQueryWrapperPlotNavProps} />
}

export default ExploreGenie
