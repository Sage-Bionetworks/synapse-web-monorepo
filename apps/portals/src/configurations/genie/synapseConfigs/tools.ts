import type { GenericCardSchema } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import type { CardConfiguration } from 'synapse-react-client'
import { toolsSql } from '../resources'

const schema: GenericCardSchema = {
  type: SynapseConstants.EXPERIMENTAL,
  title: 'name',
  description: 'summary',
  link: 'url',
  secondaryLabels: [
    'modelType',
    'alzforumInformation',
    'mouseModelReport',
    'availableData',
    'supplementaryInformation',
    'contributor',
    'grant',
    'program',
  ],
}

export const cardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: schema,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'alzforumInformation',
    },
    {
      isMarkdown: false,
      matchColumnName: 'availableData',
      URLColumnName: 'modelSystemName',
      baseURL: 'Explore/Data',
    },
    {
      isMarkdown: true,
      matchColumnName: 'mouseModelReport',
    },
    {
      isMarkdown: true,
      matchColumnName: 'supplementaryInformation',
    },
    {
      isMarkdown: false,
      matchColumnName: 'data',
      URLColumnName: 'Study_Name',
      baseURL: 'Explore/Studies/DetailsPage',
    },
    {
      isMarkdown: false,
      matchColumnName: 'grant',
      URLColumnName: 'Grant Number',
      baseURL: 'Explore/Projects/DetailsPage',
    },
  ],
}

const rgbIndex = 6

const tools: SynapseConfig = {
  name: 'CardContainerLogic',
  props: {
    rgbIndex,
    sql: toolsSql,
    name: 'Tools',
    ...cardConfiguration,
    genericCardSchema: schema,
  },
}

export default tools
