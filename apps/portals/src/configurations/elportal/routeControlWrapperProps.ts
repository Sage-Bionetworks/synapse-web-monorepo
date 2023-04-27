import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import { SynapseConfig } from 'types/portal-config'

const routeControlWrapper: RouteControlWrapperProps = {
  synapseConfig: {} as SynapseConfig,
  customRoutes: [
    'Projects',
    'Studies',
    'Data',
    'Publications',
    'People',
    'Results',
  ],
}

export default routeControlWrapper
