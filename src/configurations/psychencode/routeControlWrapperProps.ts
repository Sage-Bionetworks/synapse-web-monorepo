import { SynapseConfig } from 'types/portal-config'
import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
const routeControlProps: RouteControlWrapperProps = {
  // this has to get overriden,
  synapseConfig: {} as SynapseConfig,
  customRoutes: ['Studies', 'Data', 'Publications', 'People', 'Grants'],
}

export default routeControlProps
