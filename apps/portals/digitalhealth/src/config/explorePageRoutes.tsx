import React from 'react'
import { RouteObject } from 'react-router-dom'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import {
  dataQueryWrapperPlotNavProps,
  publicationsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
  toolsQueryWrapperPlotNavProps,
} from './synapseConfigs'

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
