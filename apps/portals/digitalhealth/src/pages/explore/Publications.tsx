import { publicationsSearch } from '@/config/synapseConfigs/index'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExplorePublications() {
  return (
    <SearchQueryWrapperPlotNav {...publicationsSearch} shouldDeepLink={true} />
  )
}

export default ExplorePublications
