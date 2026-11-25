import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { datasetsSearch } from '@/config/synapseConfigs/datasets'
import { studiesSearch } from '@/config/synapseConfigs/studies'

export const searchPageTabs = [
  {
    title: 'Studies',
    path: 'Studies',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [studiesSearch, datasetsSearch]
