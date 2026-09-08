import cckpConfigs from '@/config/synapseConfigs'
import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'

export const searchPageTabs = [
  {
    title: 'Grants',
    path: 'Grants',
  },
  {
    title: 'People',
    path: 'People',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'Educational Resources',
    path: 'EducationalResources',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  cckpConfigs.grantsSearch,
  cckpConfigs.peopleSearch,
  cckpConfigs.publicationsSearch,
  cckpConfigs.datasetsSearch,
  cckpConfigs.toolsSearch,
  cckpConfigs.educationSearch,
]
