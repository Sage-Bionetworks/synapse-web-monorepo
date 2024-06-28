import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
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
      synapseConfigArray: [
        {
          className: 'ProgramCardList',
          name: 'CardContainerLogic',
          props: {
            ...programs,
            sql: programsSql,
          },
        },
      ],
    },
    { path: 'Projects', synapseConfigArray: [projects] },
    { path: 'Studies', synapseConfigArray: [studies] },
    { path: 'Data', synapseConfigArray: [data] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'People', synapseConfigArray: [people] },
    { path: 'Experimental Models', synapseConfigArray: [experimentalTools] },
    { path: 'Computational Tools', synapseConfigArray: [computationalTools] },
    {
      path: 'Target Enabling Resources',
      synapseConfigArray: [targetEnablingResources],
    },
    { path: 'Results', synapseConfigArray: [results] },
  ],
}

export default routeControlWrapper
