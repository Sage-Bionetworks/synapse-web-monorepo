import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { studiesSearch } from '@/config/synapseConfigs/studies'
import { publicationsSearch } from '@/config/synapseConfigs/publications'
import metadataPlotNavProps from '@/config/synapseConfigs/metadata'

export const searchPageTabs = [
  {
    title: 'Studies',
    path: 'Studies',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Metadata',
    path: 'Metadata',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  studiesSearch,
  publicationsSearch,
  metadataPlotNavProps,
]
