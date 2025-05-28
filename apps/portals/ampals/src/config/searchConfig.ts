import configs from '@/config/synapseConfigs'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'

export const searchPageTabs = [
  {
    title: 'Programs',
    path: 'Programs',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [configs.programs, configs.datasets]
