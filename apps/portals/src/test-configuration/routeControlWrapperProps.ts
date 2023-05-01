import { SynapseConfig } from '../types/portal-config'
import { RouteControlWrapperProps } from '../portal-components/RouteControlWrapper'
const routeControlProps: RouteControlWrapperProps = {
  // this has to get overriden,
  synapseConfig: {} as SynapseConfig,
  customRoutes: ['Data', 'Publications'],
}

export default routeControlProps
