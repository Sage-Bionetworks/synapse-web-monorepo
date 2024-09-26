import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import {
  filesView,
  individualsView,
  people,
  projects,
  publications,
  studies,
} from './synapseConfigs'
import computationalTools from './synapseConfigs/computational_tools'

const routeControlWrapper: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Data', synapseConfigArray: [filesView] },
    {
      path: 'Cohort Builder',
      synapseConfigArray: [individualsView],
    },
    { path: 'Projects', synapseConfigArray: [projects] },
    { path: 'Studies', synapseConfigArray: [studies] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'Computational Tools', synapseConfigArray: [computationalTools] },
    { path: 'People', synapseConfigArray: [people] },
  ],
}

export default routeControlWrapper
