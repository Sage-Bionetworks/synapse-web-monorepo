import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { Navigate, useSearchParams } from 'react-router'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Datasets',
  import.meta.env.VITE_PORTAL_NAME,
)

const ExploreDatasets = (): React.ReactNode => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')
  if (id) {
    return (
      <Navigate to={`/Explore/Datasets/${encodeURIComponent(id)}`} replace />
    )
  }
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
