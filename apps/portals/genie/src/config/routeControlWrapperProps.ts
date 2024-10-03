import { ExploreWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'
import {
  contributors,
  genieBPCData,
  genieData,
  publications,
  tools,
} from './synapseConfigs'

const routeButtonControlProps: ExploreWrapperProps = {
  customRoutes: [
    { path: 'GENIE', synapseConfigArray: [genieData] },
    { path: 'GENIE-BPC', synapseConfigArray: [genieBPCData] },
    {
      path: 'Publications',
      synapseConfigArray: [publications],
    },
    { path: 'Contributors', synapseConfigArray: [contributors] },
    { path: 'External Resources', synapseConfigArray: [tools] },
  ],
}

export default routeButtonControlProps
