import { projectsSearch } from '@/config/synapseConfigs/projects'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'

export const meta = createStaticMeta(
  { title: 'Explore Projects' },
  portalMetadata,
)

function ExploreProjects() {
  return <SearchQueryWrapperPlotNav {...projectsSearch} shouldDeepLink={true} />
}

export default ExploreProjects
