import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import type { GenericCardSchema } from '../../../../../../packages/synapse-react-client/src/components/GenericCard'
import type {
  CardConfiguration,
  CardContainerLogicProps,
} from '../../../../../../packages/synapse-react-client/src/components/CardContainerLogic'
import { publicationSql } from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

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

export const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}

export const publicationDetailPageProps: CardContainerLogicProps = {
  sql: publicationSql,
  ...publicationCardConfiguration,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
}
