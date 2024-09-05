import { RouteControlWrapperProps } from '@sage-bionetworks/synapse-portal-framework/components/RouteControlWrapper'
import {
  data,
  datasetCollections,
  datasets,
  programs,
  projects,
} from './synapseConfigs'

const routeButtonControlProps: RouteControlWrapperProps = {
  customRoutes: [
    { path: 'Programs', synapseConfigArray: [programs] },
    { path: 'Projects', synapseConfigArray: [projects] },
    {
      path: 'Collections',
      synapseConfigArray: [
        { className: 'CollectionList', ...datasetCollections },
      ],
    },
    { path: 'Datasets', synapseConfigArray: [datasets] },
    { path: 'All Data', synapseConfigArray: [data] },
  ],
}

export default routeButtonControlProps
