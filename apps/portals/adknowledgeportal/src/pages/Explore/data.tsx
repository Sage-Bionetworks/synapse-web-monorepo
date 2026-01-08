import { dataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExploreData() {
  return <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
}

export default ExploreData
