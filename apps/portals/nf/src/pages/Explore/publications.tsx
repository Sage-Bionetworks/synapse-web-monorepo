import React from 'react'
import publications from '@/config/synapseConfigs/publications'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Publications' },
  portalMetadata,
)

const ExplorePublications = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...publications} />
}

export default ExplorePublications
