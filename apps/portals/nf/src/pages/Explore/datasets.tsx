import React from 'react'
import { datasetsSearch } from '@/config/synapseConfigs/datasets'
import { createStaticMeta } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import SearchQueryWrapperPlotNav from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { portalMetadata } from '@/config/portalMetadata'

export const meta = createStaticMeta(
  { title: 'Explore Datasets' },
  portalMetadata,
)

const ExploreDatasets = (): React.ReactNode => {
  return <SearchQueryWrapperPlotNav {...datasetsSearch} shouldDeepLink={true} />
}

export default ExploreDatasets
