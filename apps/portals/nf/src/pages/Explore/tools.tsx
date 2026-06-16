import tools from '@/config/synapseConfigs/tools'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Navigate, useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Tools',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreTools() {
  const [searchParams] = useSearchParams()
  const resourceId = searchParams.get('resourceId')
  if (resourceId) {
    return (
      <Navigate
        to={`/Explore/Tools/${encodeURIComponent(resourceId)}`}
        replace
      />
    )
  }
  return <QueryWrapperPlotNav {...tools} />
}

export default ExploreTools
