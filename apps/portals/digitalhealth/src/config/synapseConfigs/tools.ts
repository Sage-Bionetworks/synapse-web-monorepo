import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { toolsSql } from '../resources'

const rgbIndex = 3

export const toolsSchema: TableToGenericCardMapping = {
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
  cardConfiguration: toolsCardConfiguration,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
  columnAliases,
}
