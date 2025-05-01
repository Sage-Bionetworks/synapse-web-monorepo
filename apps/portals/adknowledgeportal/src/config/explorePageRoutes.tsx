import { lazy } from 'react'
import { RouteObject } from 'react-router'
import { programsSql } from './resources'
import { computationalToolsQueryWrapperPlotNavProps } from './synapseConfigs/computational_tools'
import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'
import { experimentalToolsQueryWrapperPlotNavProps } from './synapseConfigs/experimental_tools'
import { peopleQueryWrapperPlotNavProps } from './synapseConfigs/people'
import programs from './synapseConfigs/programs'
import { projectsQueryWrapperPlotNavProps } from './synapseConfigs/projects'
import { publicationsQueryWrapperPlotNavProps } from './synapseConfigs/publications'
import { results } from './synapseConfigs/results'
import { studiesQueryWrapperPlotNavProps } from './synapseConfigs/studies'
import { targetEnablingResourcesQueryWrapperPlotNavProps } from './synapseConfigs/target_enabling_resources'

const CardContainerLogic = lazy(
  () => import('synapse-react-client/components/CardContainerLogic'),
)
const MarkdownSynapse = lazy(
  () => import('synapse-react-client/components/Markdown/MarkdownSynapse'),
)
const QueryWrapperPlotNav = lazy(
  () => import('synapse-react-client/components/QueryWrapperPlotNav'),
)

export const explorePageRoutes: RouteObject[] = [
  {
    path: 'Programs',
    element: (
      <CardContainerLogic cardConfiguration={programs} sql={programsSql} />
    ),
  },
  {
    path: 'Projects',
    element: <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Studies',
    element: <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Data',
    element: <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'People',
    element: <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Experimental Models',
    element: (
      <QueryWrapperPlotNav {...experimentalToolsQueryWrapperPlotNavProps} />
    ),
  },
  {
    path: 'Computational Tools',
    element: (
      <QueryWrapperPlotNav {...computationalToolsQueryWrapperPlotNavProps} />
    ),
  },
  {
    path: 'Target Enabling Resources',
    element: (
      <QueryWrapperPlotNav
        {...targetEnablingResourcesQueryWrapperPlotNavProps}
      />
    ),
  },
  {
    path: 'Results',
    element: (
      <div style={results.style}>
        <MarkdownSynapse {...results.props} />
      </div>
    ),
  },
]
