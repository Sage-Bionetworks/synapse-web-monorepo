import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { toolsSql } from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const rgbIndex = 3

export const toolsSchema: GenericCardSchema = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'softwareName',
  subTitle: 'softwareType',
  description: 'summary',
  secondaryLabels: [
    'digitalAssessmentCategory',
    'inputDataType',
    'outputDataType',
    'softwareLanguage',
    'softwareAuthor',
  ],
  link: 'url',
}

export const toolsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: toolsSchema,
}

export const tools: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: toolsCardConfiguration,
    sql: toolsSql,
    hideDownload: true,
    shouldDeepLink: true,
    defaultColumn: 'softwareType',
    name: 'Tools',
    columnAliases,
    facetsToPlot: [
      'digitalAssessmentCategory',
      'inputDataType',
      'outputDataType',
      'softwareLanguage',
      'softwareType',
    ],
    searchConfiguration: {
      searchable: [
        'digitalAssessmentCategory',
        'inputDataType',
        'outputDataType',
        'softwareAuthor',
        'softwareName',
      ],
    },
  },
}

export const toolsDetailPageProps: CardContainerLogicProps = {
  sql: toolsSql,
  ...toolsCardConfiguration,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
  columnAliases,
}

export const toolsDetailsLandingPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,

      ...toolsCardConfiguration,
      titleLinkConfig: undefined,
      columnAliases,
      genericCardSchema: toolsSchema,
      rgbIndex,
      sql: toolsSql,
    },
  },
  {
    name: 'DetailsPage',
    props: {
      sql: toolsSql,
      synapseConfigArray: [],
    },
  },
]
