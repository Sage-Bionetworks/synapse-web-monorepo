import type {
  CardConfiguration,
  GenericCardSchema,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
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

export const computationalToolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps =
  {
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
  }
