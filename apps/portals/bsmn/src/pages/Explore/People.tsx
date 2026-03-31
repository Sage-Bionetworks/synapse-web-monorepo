import { individualsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/people'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExplorePeople() {
  return <QueryWrapperPlotNav {...individualsQueryWrapperPlotNavProps} />
}

export default ExplorePeople
