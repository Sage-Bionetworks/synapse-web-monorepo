import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { standardsSearchQueryWrapperPlotNavProps } from '@/config/synapseConfigs/standards'
import { SearchIndexConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { standardsSearchIndexId } from '@/config/resources'

export const standardsSearchIndexConfig: SearchIndexConfig = {
  searchIndexId: standardsSearchIndexId,
  autocompleteFieldName: 'name',
}

export const searchPageTabs = [
  {
    title: 'Standards',
    path: 'Standards',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [standardsSearchQueryWrapperPlotNavProps]
