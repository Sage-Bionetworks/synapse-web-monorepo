import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client/components/CardContainerLogic/index'
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
    ...datasetCollectionsCardConfiguration,
    genericCardSchema: {
      ...datasetCollectionsCardConfiguration.genericCardSchema!,
    },
  }
