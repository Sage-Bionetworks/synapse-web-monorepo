import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { studiesSearch } from '@/config/synapseConfigs/studies'
import { projectsSearch } from '@/config/synapseConfigs/projects'
import { publicationsSearch } from '@/config/synapseConfigs/publications'
import { peopleSearch } from '@/config/synapseConfigs/people'
import { experimentalModelsSearch } from '@/config/synapseConfigs/experimental_tools'
import { computationalToolsSearch } from '@/config/synapseConfigs/computational_tools'
import { targetEnablingResourcesSearch } from '@/config/synapseConfigs/target_enabling_resources'

// if searching without specifying a tab, use the defaultSearchTab
export const defaultSearchTabIndex = 0
export const searchPageTabs = [
  {
    title: 'Studies',
    path: 'Studies',
  },
  {
    title: 'Projects',
    path: 'Projects',
  },
  {
    title: 'Publications',
    path: 'Publications',
  },
  {
    title: 'People',
    path: 'People',
  },
  {
    title: 'Experimental Models',
    path: 'ExperimentalModels',
  },
  {
    title: 'Computational Tools',
    path: 'ComputationalTools',
  },
  {
    title: 'Target Enabling Resources',
    path: 'TargetEnablingResources',
  },
] as const satisfies PortalSearchTabConfig[]

export const portalSearchPageConfigs = [
  studiesSearch,
  projectsSearch,
  publicationsSearch,
  peopleSearch,
  experimentalModelsSearch,
  computationalToolsSearch,
  targetEnablingResourcesSearch,
]
