import { dataQueryWrapperPlotNavProps } from '@/config/synapseConfigs/data'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

function exploreData() {
  return <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />
}

export default exploreData
