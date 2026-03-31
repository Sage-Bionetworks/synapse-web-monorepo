import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { standardsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/standards'

export const searchPageTabs = [
  {
    title: 'Standards',
    path: 'Standards',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [standardsQueryWrapperPlotNavProps]
