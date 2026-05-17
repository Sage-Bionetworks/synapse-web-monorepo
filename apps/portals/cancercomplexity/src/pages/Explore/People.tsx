import { peopleQueryWrapperPlotNavProps } from '@/config/synapseConfigs'
import { portalMetadata } from '@/config/portalMetadata'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/index'

export const meta = createStaticMeta(
  { title: 'Explore People' },
  portalMetadata,
)

function ExplorePeople() {
  return <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />
}
export default ExplorePeople
