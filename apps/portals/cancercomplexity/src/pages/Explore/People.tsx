import { peopleSearch } from '@/config/synapseConfigs'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const meta = createStaticMeta(
  { title: 'Explore People' },
  portalMetadata,
)

function ExplorePeople() {
  return <SearchQueryWrapperPlotNav {...peopleSearch} shouldDeepLink={true} />
}
export default ExplorePeople
