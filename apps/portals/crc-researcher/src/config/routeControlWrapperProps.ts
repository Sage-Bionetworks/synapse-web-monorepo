import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import {
  hidden,
  invited,
  potential,
  scheduled,
  tested,
  uncategorized,
} from './synapseConfigs'
const routeControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: '1. Uncategorized', synapseConfigArray: [uncategorized] },
    { path: '2. Potential', synapseConfigArray: [potential] },
    { path: '3. Invited', synapseConfigArray: [invited] },
    { path: '4. Scheduled', synapseConfigArray: [scheduled] },
    { path: '5. Tested', synapseConfigArray: [tested] },
    { path: 'Hidden', synapseConfigArray: [hidden] },
  ],
}

export default routeControlProps
