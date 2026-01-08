import { peopleQueryWrapperPlotNavProps } from '@/config/synapseConfigs/people'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav'

function ExplorePeople() {
  return <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />
}

export default ExplorePeople
