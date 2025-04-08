import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type {
  CardConfiguration,
  CardContainerLogicProps,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { publicationSql } from '../resources'

const rgbIndex = 7

export const publicationSchema: TableToGenericCardMapping = {
  type: SynapseConstants.PUBLICATION,
  title: 'Title',
  subTitle: 'Author',
  secondaryLabels: [
    'Year',
    'Journal',
    'doi',
    'PMID',
    'Study',
    'Tools',
    'sensorType',
    'digitalAssessmentCategory',
  ],
  link: 'url',
}

export const publicationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: publicationSchema,
  labelLinkConfig: [
    {
      matchColumnName: 'Tools',
      URLColumnName: 'softwareName',
      baseURL: 'Explore/Tools/DetailsPage',
      isMarkdown: false,
    },
    {
      matchColumnName: 'studyOrProject',
      isMarkdown: true,
    },
    {
      matchColumnName: 'Study',
      isMarkdown: false,
      baseURL: 'Explore/Collections/DetailsPage',
      URLColumnName: 'study',
    },
  ],
}

export const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  hideDownload: true,
  sql: publicationSql,
  name: 'Publications',
  cardConfiguration: publicationCardConfiguration,
  visibleColumnCount: Infinity,
  searchConfiguration: {
    searchable: [
      'Author',
      'Diagnosis',
      'Journal',
      'Title',
      'Year',
      'digitalAssessmentCategory',
      'sensorType',
      'Tools',
      'Study',
    ],
  },
}

export const publicationDetailPageProps: CardContainerLogicProps = {
  sql: publicationSql,
  ...publicationCardConfiguration,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
}
