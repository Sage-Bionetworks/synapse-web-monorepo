import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { SynapseConfig } from 'types/portal-config'
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

const datasetCollections: SynapseConfig = {
  name: 'CardContainerLogic',
  isOutsideContainer: true,
  props: {
    sql: datasetCollectionsSql,
    ...datasetCollectionsCardConfiguration,
    genericCardSchema: {
      ...datasetCollectionsCardConfiguration.genericCardSchema!,
    },
  },
}

export default datasetCollections
