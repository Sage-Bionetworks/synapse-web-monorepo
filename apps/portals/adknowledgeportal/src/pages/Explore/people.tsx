import { peopleSearch } from '@/config/synapseConfigs/people'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExplorePeople() {
  return <SearchQueryWrapperPlotNav {...peopleSearch} shouldDeepLink={true} />
}

export default ExplorePeople
