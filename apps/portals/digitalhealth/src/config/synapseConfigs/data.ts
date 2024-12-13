import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/index'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import { StandaloneQueryWrapperProps } from 'synapse-react-client/components/StandaloneQueryWrapper/index'
import columnAliases from '../columnAliases'
import { dataSql } from '../resources'

const dataRgbIndex = 0
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

const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: dataRgbIndex,
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
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex: dataRgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

export default dataQueryWrapperPlotNavProps
