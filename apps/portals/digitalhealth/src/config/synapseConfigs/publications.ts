import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { publicationSql } from '../resources'

const rgbIndex = 7

export const publicationSchema: GenericCardSchema = {
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
