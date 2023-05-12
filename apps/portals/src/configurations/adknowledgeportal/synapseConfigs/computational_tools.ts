import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import type { CardConfiguration } from '../../../../../../packages/synapse-react-client/src/components/CardContainerLogic'
import { computationalSql } from '../resources'
import type { GenericCardSchema } from '../../../../../../packages/synapse-react-client/src/components/GenericCard'

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
