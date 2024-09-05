import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import projects from './synapseConfigs/projects'
import studies from './synapseConfigs/studies'
import tools from './synapseConfigs/tools'
import people from './synapseConfigs/people'
import publications from './synapseConfigs/publications'

const routeControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Projects', synapseConfigArray: [projects] },
    { path: 'Data', synapseConfigArray: [studies] },
    { path: 'Tools', synapseConfigArray: [tools] },
    { path: 'People', synapseConfigArray: [people] },
    { path: 'Publications', synapseConfigArray: [publications] },
  ],
}

export default routeControlProps
