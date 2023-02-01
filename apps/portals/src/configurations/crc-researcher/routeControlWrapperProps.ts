import { SynapseConfig } from 'types/portal-config'
import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
const routeControlProps: RouteControlWrapperProps = {
  // this has to get overriden,
  synapseConfig: {} as SynapseConfig,
  customRoutes: ['1. Uncategorized', '2. Potential', '3. Invited', '4. Scheduled', '5. Tested', 'Hidden'],
}

export default routeControlProps
