import { studiesSearch } from '@/config/synapseConfigs/studies'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function exploreStudies() {
  return <SearchQueryWrapperPlotNav {...studiesSearch} shouldDeepLink={true} />
}

export default exploreStudies
