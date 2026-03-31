import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetCollectionsSql } from '../resources'

const datasetCollectionsCardConfiguration: CardConfiguration = {
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
