import { RouteObject } from 'react-router'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'
// import { dataQueryWrapperPlotNavProps } from './synapseConfigs/data'
import { datasetCollectionsCardContainerLogicProps } from './synapseConfigs/datasetcollections'
import { datasetQueryWrapperPlotNavProps } from './synapseConfigs/datasets'
import { programsCardContainerLogicProps } from './synapseConfigs/programs'
import { FullWidthAlert } from 'synapse-react-client'
import { filesQueryWrapperPlotNavProps } from './synapseConfigs/files'

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
    path: 'Files',
    element: <QueryWrapperPlotNav {...filesQueryWrapperPlotNavProps} />,
  },
  {
    path: 'All Data',
    // element: <QueryWrapperPlotNav {...dataQueryWrapperPlotNavProps} />,
    element: (
      <FullWidthAlert
        sx={{ m: 0 }}
        isGlobal={false}
        variant={'warning'}
        show={true}
        title={''}
        description={'This area is under construction'}
      />
    ),
  },
]

export default explorePageRoutes
