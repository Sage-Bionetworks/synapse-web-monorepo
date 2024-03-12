import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import {
  contributors,
  genieBPCData,
  genieData,
  publications,
  tools,
} from './synapseConfigs'

const routeButtonControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'GENIE', synapseConfigArray: [genieData] },
    // { path: 'GENIE-BPC', synapseConfigArray: [genieBPCData] },
    // {
    //   path: 'Publications',
    //   synapseConfigArray: [publications],
    // },
    // { path: 'Contributors', synapseConfigArray: [contributors] },
    // { path: 'Tools', synapseConfigArray: [tools] },
  ],
}

export default routeButtonControlProps
