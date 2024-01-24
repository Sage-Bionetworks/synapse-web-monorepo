import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import {
  filesView,
  individualsView,
  people,
  projects,
  publications,
  species,
  studies,
} from './synapseConfigs'
import computationalTools from './synapseConfigs/computational_tools'

const routeControlWrapper: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Data by Files', synapseConfigArray: [filesView] },
    {
      path: 'Data by Participants',
      synapseConfigArray: [individualsView],
    },
    { path: 'Projects', synapseConfigArray: [projects] },
    { path: 'Species', synapseConfigArray: [species] },
    { path: 'Studies', synapseConfigArray: [studies] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'Computational Tools', synapseConfigArray: [computationalTools] },
    { path: 'People', synapseConfigArray: [people] },
  ],
}

export default routeControlWrapper
