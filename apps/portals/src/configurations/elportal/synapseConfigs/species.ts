import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { SynapseConfig } from 'types/portal-config'
import { speciesSql } from '../resources'

const speciesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Species',
    title: 'Title',
    description: 'Summary',
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

const species: SynapseConfig = {
  name: 'CardContainerLogic',
  isOutsideContainer: true,
  props: {
    sql: speciesSql,
    ...speciesCardConfiguration,
    genericCardSchema: {
      ...speciesCardConfiguration.genericCardSchema!,
    },
  },
}

export default species
