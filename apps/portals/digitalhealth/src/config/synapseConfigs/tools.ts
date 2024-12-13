import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import columnAliases from '../columnAliases'
import { toolsSql } from '../resources'

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

export const toolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
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
}

export const toolsDetailPageProps: CardContainerLogicProps = {
  sql: toolsSql,
  ...toolsCardConfiguration,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
  columnAliases,
}
