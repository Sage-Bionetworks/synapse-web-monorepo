import { peopleSearch } from '@/config/synapseConfigs'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExplorePeople() {
  return <SearchQueryWrapperPlotNav {...peopleSearch} shouldDeepLink={true} />
}

export default ExplorePeople
