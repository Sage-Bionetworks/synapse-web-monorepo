import { PortalSearchTabConfig } from '@sage-bionetworks/synapse-portal-framework/components/PortalSearch/PortalSearchTabs'
import { studiesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/studies'
import { projectsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/projects'
import { publicationsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/publications'
import { peopleQueryWrapperPlotNavProps } from '@/config/synapseConfigs/people'
import { experimentalToolsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/experimental_tools'
import { computationalToolsQueryWrapperPlotNavProps } from '@/config/synapseConfigs/computational_tools'
import { targetEnablingResourcesQueryWrapperPlotNavProps } from '@/config/synapseConfigs/target_enabling_resources'

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
    title: 'Experimental Tools',
    path: 'ExperimentalTools',
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
  studiesQueryWrapperPlotNavProps,
  projectsQueryWrapperPlotNavProps,
  publicationsQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  experimentalToolsQueryWrapperPlotNavProps,
  computationalToolsQueryWrapperPlotNavProps,
  targetEnablingResourcesQueryWrapperPlotNavProps,
]
