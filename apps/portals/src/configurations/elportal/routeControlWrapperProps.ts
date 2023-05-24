import { RouteControlWrapperProps } from 'portal-components/RouteControlWrapper'
import { SynapseConfig } from 'types/portal-config'

const routeControlWrapper: RouteControlWrapperProps = {
  synapseConfig: {} as SynapseConfig,
  customRoutes: [
    'Data by Files',
    'Data by Participants',
    'Projects',
    'Species',
    'Studies',
    'Publications',
    'Computational Tools',
    'People',
  ],
}

export default routeControlWrapper
