import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import { SynapseConfig } from 'types/portal-config'

const routeControlWrapperProps : RouteControlWrapperProps = {
  synapseConfig: {} as SynapseConfig,
  customRoutes: ['Initiatives','Studies', 'Datasets', 'Files', 'Publications', 'Tools', 'Hackathon Projects'],
}
export default routeControlWrapperProps
