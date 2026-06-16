import hackathons from '@/config/synapseConfigs/hackathons'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Navigate, useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Hackathon Projects',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreHackathons() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  if (id) {
    return (
      <Navigate to={`/Explore/Hackathon/${encodeURIComponent(id)}`} replace />
    )
  }
  return <QueryWrapperPlotNav {...hackathons} />
}

export default ExploreHackathons
