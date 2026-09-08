import { programsSearch } from '@/config/synapseConfigs/programs'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExplorePrograms() {
  return <SearchQueryWrapperPlotNav {...programsSearch} shouldDeepLink={true} />
}

export default ExplorePrograms
