import { SynapseConfig } from 'types/portal-config'
import columnAliases from '../columnAliases'
import type { LabelLinkConfig } from '../../../../../../packages/synapse-react-client/src/components/CardContainerLogic'
import type { StandaloneQueryWrapperProps } from 'synapse-react-client/dist/containers/table/StandaloneQueryWrapper'
import { dataSql } from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const rgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'dataDescriptionLocation',
    isMarkdown: true,
  },
  {
    matchColumnName: 'dataAccessInstructions',
    isMarkdown: true,
  },
  {
    matchColumnName: 'study',
    isMarkdown: false,
    baseURL: 'Explore/Collections/DetailsPage',
    URLColumnName: 'study',
  },
]

const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    hideDownload: true,
    sql: dataSql,
    name: 'Data',
    columnAliases,
    tableConfiguration: {
      showDownloadColumn: false,
      columnLinks: dataColumnLinks,
    },
    facetsToPlot: [
      'study',
      'reportedOutcome',
      'dataCollectionMethod',
      'deviceType',
      'devicePlatform',
      'deviceLocation',
      'diagnosis',
      'digitalAssessmentCategory',
      'dataType',
      'dataSubtype',
    ],
    searchConfiguration: {
      searchable: [
        'collection',
        'reportedOutcome',
        'devicePlatform',
        'diagnosis',
        'digitalAssessmentCategory',
        'digitalAssessmentDetails',
      ],
    },
  },
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  title: 'Data Files',
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

export default data
