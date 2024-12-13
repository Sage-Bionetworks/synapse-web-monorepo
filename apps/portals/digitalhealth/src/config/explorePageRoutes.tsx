import { RouteObject } from 'react-router-dom'

import {
  dataQueryWrapperPlotNavProps,
  publicationsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
  toolsQueryWrapperPlotNavProps,
} from './synapseConfigs'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'

const routeButtonControlProps: RouteObject[] = [
  {
    path: 'Collections',
    element: <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Data',
    element: <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Tools',
    element: <QueryWrapperPlotNav {...toolsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />,
  },
]

export default routeButtonControlProps
