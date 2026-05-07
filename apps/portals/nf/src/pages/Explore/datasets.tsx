import React from 'react'
import datasets from '@/config/synapseConfigs/datasets'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Datasets' },
  portalMetadata,
)

const ExploreDatasets = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...datasets} />
}

export default ExploreDatasets
