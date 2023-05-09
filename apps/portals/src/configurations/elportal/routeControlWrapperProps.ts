import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import { SynapseConfig } from 'types/portal-config'

const routeControlWrapper: RouteControlWrapperProps = {
  synapseConfig: {} as SynapseConfig,
  customRoutes: [
    'Data by Files',
    'Data by Participants',
    'Species',
    'Projects',
    'Studies',
    'Publications',
    'People',
    'Computational Tools'
  ],
}

export default routeControlWrapper
