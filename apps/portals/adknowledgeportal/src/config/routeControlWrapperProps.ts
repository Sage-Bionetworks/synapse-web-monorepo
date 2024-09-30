import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/ExploreWrapper'
import {
  data,
  people,
  programs,
  projects,
  publications,
  studies,
} from './synapseConfigs'
import { programsSql } from './resources'
import experimentalTools from './synapseConfigs/experimental_tools'
import computationalTools from './synapseConfigs/computational_tools'
import targetEnablingResources from './synapseConfigs/target_enabling_resources'
import { results } from './synapseConfigs/results'

const routeControlWrapper: RouteControlWrapperProps = {
  customRoutes: [
    {
      path: 'Programs',
    },
    { path: 'Projects' },
    { path: 'Studies' },
    { path: 'Data' },
    { path: 'Publications' },
    { path: 'People' },
    { path: 'Experimental Models' },
    { path: 'Computational Tools' },
    {
      path: 'Target Enabling Resources',
    },
    { path: 'Results' },
  ],
}

export default routeControlWrapper
