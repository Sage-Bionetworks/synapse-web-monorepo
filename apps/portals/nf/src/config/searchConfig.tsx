import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import nfConfigs from '@/config/synapseConfigs'

export const searchPageTabs = [
  {
    title: 'Initiatives',
    path: 'Initiatives',
  },
  {
    title: 'Studies',
    path: 'Studies',
  },
  {
    title: 'Datasets',
    path: 'Datasets',
  },
  {
    title: 'Files',
    path: 'Files',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'Hackathons',
    path: 'Hackathons',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  nfConfigs.initiatives,
  nfConfigs.studies,
  nfConfigs.datasets,
  nfConfigs.files,
  nfConfigs.publications,
  nfConfigs.tools,
  nfConfigs.hackathons,
]
