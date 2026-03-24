import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Datasets',
  import.meta.env.VITE_PORTAL_NAME,
)

const ExploreDatasets = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
