import { dataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExploreData() {
  return <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
}

export default ExploreData
