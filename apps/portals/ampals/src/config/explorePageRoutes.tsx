import { RouteObject } from 'react-router'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'
import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'
import { datasetCollectionsCardContainerLogicProps } from './synapseConfigs/datasetcollections'
import { datasetQueryWrapperPlotNavProps } from './synapseConfigs/datasets'
import { programsCardContainerLogicProps } from './synapseConfigs/programs'

const explorePageRoutes: RouteObject[] = [
  {
    path: 'Programs',
    element: <CardContainerLogic {...programsCardContainerLogicProps} />,
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
