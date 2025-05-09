import { individualsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/people'
import { QueryWrapperPlotNav } from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExplorePeople() {
  return <QueryWrapperPlotNav {...individualsQueryWrapperPlotNavProps} />
}

export default ExplorePeople
