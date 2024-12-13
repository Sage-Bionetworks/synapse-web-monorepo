import { RouteObject } from 'react-router-dom'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import QueryWrapperPlotNav from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'
import { datasetCollectionsCardContainerLogicProps } from './synapseConfigs/datasetcollections'
import { datasetQueryWrapperPlotNavProps } from './synapseConfigs/datasets'
import { programsQueryWrapperPlotNavProps } from './synapseConfigs/programs'
import { projectsQueryWrapperPlotNavProps } from './synapseConfigs/projects'

const explorePageRoutes: RouteObject[] = [
  {
    path: 'Programs',
    element: <QueryWrapperPlotNav {...programsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Projects',
    element: <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Collections',
    element: (
      <div className={'CollectionList'}>
        <CardContainerLogic {...datasetCollectionsCardContainerLogicProps} />
      </div>
    ),
  },
  {
    path: 'Datasets',
    element: <QueryWrapperPlotNav {...datasetQueryWrapperPlotNavProps} />,
  },
  {
    path: 'All Data',
    element: <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />,
  },
]

export default explorePageRoutes
