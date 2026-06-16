import studies from '@/config/synapseConfigs/studies'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Navigate, useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Studies',
  import.meta.env.VITE_PORTAL_NAME,
)

function ExploreStudies() {
  const [searchParams] = useSearchParams()
  const studyId = searchParams.get('studyId')
  if (studyId) {
    return (
      <Navigate
        to={`/Explore/Studies/${encodeURIComponent(studyId)}`}
        replace
      />
    )
  }
  return <QueryWrapperPlotNav {...studies} />
}

export default ExploreStudies
