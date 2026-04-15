import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { studiesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/studies'

export const searchPageTabs = [
  {
    title: 'Studies',
    path: 'Studies',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [studiesQueryWrapperPlotNavProps]
