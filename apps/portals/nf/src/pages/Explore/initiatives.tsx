import initiatives from '@/config/synapseConfigs/initiatives'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Navigate, useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Initiatives',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreInitiatives() {
  const [searchParams] = useSearchParams()
  const initiative = searchParams.get('initiative')
  if (initiative) {
    return (
      <Navigate
        to={`/Explore/Initiatives/${encodeURIComponent(initiative)}`}
        replace
      />
    )
  }
  return <QueryWrapperPlotNav {...initiatives} />
}

export default ExploreInitiatives
