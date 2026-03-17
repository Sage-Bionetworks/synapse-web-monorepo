import { peopleQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

function ExplorePeople() {
  return <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />
}
export default ExplorePeople
