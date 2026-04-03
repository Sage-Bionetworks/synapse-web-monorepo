import React from 'react'
import publications from '@/config/synapseConfigs/publications'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

export const meta = createStaticMeta(
  'Explore Publications',
  import.meta.env.VITE_PORTAL_NAME,
)

const ExplorePublications = (): React.ReactNode => {
  return <QueryWrapperPlotNav {...publications} />
}

export default ExplorePublications
