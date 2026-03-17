import { genieDataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreGenie() {
  return <QueryWrapperPlotNav {...genieDataQueryWrapperPlotNavProps} />
}

export default ExploreGenie
