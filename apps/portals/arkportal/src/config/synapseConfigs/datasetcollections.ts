import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  datasetCollectionsSearchIndexId,
  datasetCollectionsSql,
} from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const datasetCollectionsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Dataset Collection',
    title: 'Title',
    description: 'Summary',
    icon: 'Program',
    imageFileHandleColumnName: 'Icon',
  },
  titleLinkConfig: {
    isMarkdown: false,
    overrideLinkURLColumnName: 'Link',
    baseURL: 'Explore/Datasets',
    URLColumnName: '',
    matchColumnName: '',
  },
}

export const datasetCollectionsCardContainerLogicProps: CardContainerLogicProps =
  {
    sql: datasetCollectionsSql,
    cardConfiguration: datasetCollectionsCardConfiguration,
  }

export const datasetCollectionsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex: 0,
  name: 'Dataset Collections',
  shouldDeepLink: false,
  cardConfiguration: datasetCollectionsCardConfiguration,
  searchIndexId: datasetCollectionsSearchIndexId,
  autocompleteFieldName: 'Title',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
