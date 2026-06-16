import { projectsSearch } from '@/config/synapseConfigs/projects'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

function ExploreProjects() {
  return <SearchQueryWrapperPlotNav {...projectsSearch} shouldDeepLink={true} />
}

export default ExploreProjects
