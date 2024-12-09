import { RouteObject } from 'react-router-dom'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import {
  datasetsQueryWrapperPlotNavProps,
  educationQueryWrapperPlotNavProps,
  grantQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  publicationsQueryWrapperPlotNavProps,
  toolsQueryWrapperPlotNavProps,
} from './synapseConfigs'

const explorePageRoutes = [
  {
    path: 'Grants',
    element: <QueryWrapperPlotNav {...grantQueryWrapperPlotNavProps} />,
  },
  {
    path: 'People',
    element: <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Datasets',
    element: <QueryWrapperPlotNav {...datasetsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Tools',
    element: <QueryWrapperPlotNav {...toolsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Educational Resources',
    element: <QueryWrapperPlotNav {...educationQueryWrapperPlotNavProps} />,
  },
] satisfies RouteObject[]
export default explorePageRoutes
