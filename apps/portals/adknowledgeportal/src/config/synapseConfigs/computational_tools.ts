import type { CardConfiguration, GenericCardSchema } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { computationalSql } from '../resources'

const computationalSchema: GenericCardSchema = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: ['contributor', 'program', 'grant', 'documentation'],
  link: 'url',
}

export const computationalCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: computationalSchema,
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'grant',
      URLColumnName: 'Grant Number',
      baseURL: 'Explore/Projects/DetailsPage',
    },
  ],
}

const rgbIndex = 7

const computationalTools: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: computationalSql,
    cardConfiguration: computationalCardConfiguration,
    shouldDeepLink: true,
    name: 'Computational Tools',
    facetsToPlot: ['grant', 'program', 'softwareType'],
    searchConfiguration: {
      searchable: [
        'contributor',
        'name',
        'grant',
        'program',
        'softwareType',
        'summary',
      ],
    },
  },
}

export default computationalTools
