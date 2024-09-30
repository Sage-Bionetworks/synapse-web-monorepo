import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/ExploreWrapper'
import {
  datasets,
  education,
  grants,
  people,
  publications,
  tools,
} from './synapseConfigs'

const routeControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Grants', synapseConfigArray: [grants] },
    { path: 'People', synapseConfigArray: [people] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'Datasets', synapseConfigArray: [datasets] },
    { path: 'Tools', synapseConfigArray: [tools] },
    { path: 'Educational Resources', synapseConfigArray: [education] },
  ],
}

export default routeControlProps
