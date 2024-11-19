import React from 'react'
import { RouteObject } from 'react-router-dom'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'
import {
  contributorsQueryWrapperPlotNavProps,
  genieBPCDataQueryWrapperPlotNavProps,
  genieDataQueryWrapperPlotNavProps,
} from './synapseConfigs'
import { publicationsProps } from './synapseConfigs/publications'
import { toolProps } from './synapseConfigs/tools'

const explorePageRoutes: RouteObject[] = [
  {
    path: 'GENIE',
    element: <QueryWrapperPlotNav {...genieDataQueryWrapperPlotNavProps} />,
  },
  {
    path: 'GENIE-BPC',
    element: <QueryWrapperPlotNav {...genieBPCDataQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <CardContainerLogic {...publicationsProps} />,
  },
  {
    path: 'Contributors',
    element: <QueryWrapperPlotNav {...contributorsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'External Resources',
    element: <CardContainerLogic {...toolProps} />,
  },
]

export default explorePageRoutes
