import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { studiesSearch } from '@/config/synapseConfigs/studies'

function ExploreStudies() {
  return <SearchQueryWrapperPlotNav {...studiesSearch} shouldDeepLink={true} />
}

export default ExploreStudies
