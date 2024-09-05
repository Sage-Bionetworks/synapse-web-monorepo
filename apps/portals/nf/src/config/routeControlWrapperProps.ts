import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import {
  datasets,
  files,
  hackathons,
  initiatives,
  publications,
  studies,
  tools,
} from './synapseConfigs'

const routeControlWrapperProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Initiatives', synapseConfigArray: [initiatives] },
    { path: 'Studies', synapseConfigArray: [studies] },
    { path: 'Datasets', synapseConfigArray: [datasets] },
    { path: 'Files', synapseConfigArray: [files] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'Tools', synapseConfigArray: [tools] },
    {
      path: 'Hackathon',
      displayName: 'Hackathon Projects',
      synapseConfigArray: [hackathons],
    },
  ],
}
export default routeControlWrapperProps
