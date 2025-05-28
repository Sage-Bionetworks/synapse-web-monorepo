import { dataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreAllData() {
  return <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
}

export default ExploreAllData
