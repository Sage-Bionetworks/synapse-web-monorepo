import { RouteObject } from 'react-router'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import { individualsQueryWrapperPlotNavProps } from './synapseConfigs/people'
import { projectsQueryWrapperPlotNavProps } from './synapseConfigs/projects'
import { publicationsQueryWrapperPlotNavProps } from './synapseConfigs/publications'
import { studiesQueryWrapperPlotNavProps } from './synapseConfigs/studies'
import { toolsQueryWrapperPlotNavProps } from './synapseConfigs/tools'

const explorePageRoutes: RouteObject[] = [
  {
    path: 'Projects',
    element: <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Data',
    element: <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Tools',
    element: <QueryWrapperPlotNav {...toolsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'People',
    element: <QueryWrapperPlotNav {...individualsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />,
  },
]

export default explorePageRoutes
