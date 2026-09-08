import React from 'react'
import { publicationsSearch } from '@/config/synapseConfigs/publications'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Publications' },
  portalMetadata,
)

const ExplorePublications = (): React.ReactNode => {
  return (
    <SearchQueryWrapperPlotNav {...publicationsSearch} shouldDeepLink={true} />
  )
}

export default ExplorePublications
