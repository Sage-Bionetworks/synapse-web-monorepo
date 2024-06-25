import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import { studies } from './synapseConfigs/studies'
import { data } from './synapseConfigs/data'
import { grants } from './synapseConfigs/grants'
import { publications } from './synapseConfigs/publications'
import { people } from './synapseConfigs/people'

const routeControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Studies', synapseConfigArray: [studies] },
    { path: 'Data', synapseConfigArray: [data] },
    { path: 'Grants', synapseConfigArray: [grants] },
    { path: 'Publications', synapseConfigArray: [publications] },
    { path: 'People', synapseConfigArray: [people] },
  ],
}

export default routeControlProps
