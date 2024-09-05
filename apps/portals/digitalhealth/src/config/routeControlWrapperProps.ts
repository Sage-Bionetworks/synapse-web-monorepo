import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import { data, publications, studies, tools } from './synapseConfigs'

const routeButtonControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Collections', synapseConfigArray: [studies] },
    { path: 'Data', synapseConfigArray: [data] },
    { path: 'Tools', synapseConfigArray: [tools] },
    { path: 'Publications', synapseConfigArray: [publications] },
  ],
}

export default routeButtonControlProps
