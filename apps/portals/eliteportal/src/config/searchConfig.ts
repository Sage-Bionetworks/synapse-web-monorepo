import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { programsSearch } from '@/config/synapseConfigs/programs'
import { projectsSearch } from '@/config/synapseConfigs/projects'
import { studiesSearch } from '@/config/synapseConfigs/studies'
import { datasetQueryWrapperPlotNavProps } from '@/config/synapseConfigs/datasets'
import { publicationsSearch } from '@/config/synapseConfigs/publications'
import { computationalToolsSearch } from '@/config/synapseConfigs/computational_tools'
import { peopleSearch } from '@/config/synapseConfigs/people'

export const searchPageTabs = [
  {
    title: 'Programs',
    path: 'Programs',
  },
  {
    title: 'Projects',
    path: 'Projects',
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
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'Tools',
    path: 'Tools',
  },
  {
    title: 'People',
    path: 'People',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  programsSearch,
  projectsSearch,
  studiesSearch,
  { ...datasetQueryWrapperPlotNavProps, name: 'Datasets' },
  publicationsSearch,
  { ...computationalToolsSearch, name: 'Tools' },
  peopleSearch,
]
