import configs from '@/config/synapseConfigs'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'

export const searchPageTabs = [
  {
    title: 'Programs',
    path: 'Programs',
  },
  {
    title: 'Collections',
    path: 'Collections',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Files',
    path: 'Files',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  configs.programs,
  configs.collections,
  configs.datasets,
  configs.files,
]
