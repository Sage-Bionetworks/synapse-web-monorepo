import type { CardConfiguration, GenericCardSchema } from 'synapse-react-client'
import { CardContainerLogicProps, SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { publicationSql } from '../resources'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'

const rgbIndex = 1

export const publicationSchema: GenericCardSchema = {
  type: SynapseConstants.PUBLICATION,
  title: 'title',
  subTitle: 'authors',
  description: 'abstract',
  secondaryLabels: ['year', 'journal', 'study', 'grants', 'DOI'],
}

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: publicationSchema,
  labelLinkConfig: [
    {
      URLColumnName: 'studyName',
      matchColumnName: 'study',
      isMarkdown: false,
      baseURL: 'Explore/Studies/DetailsPage',
    },
  ],
  secondaryLabelLimit: 5,
}

export const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: publicationSql,
    shouldDeepLink: true,
    hideDownload: true,
    cardConfiguration: publicationsCardConfiguration,
    searchConfiguration: {
      searchable: [
        'title',
        'authors',
        'year',
        'journal',
        'study',
        'grants',
        'DOI',
        'pubmedId',
      ],
    },
    facetsToPlot: ['study', 'grants'],
    name: 'Publications',
  },
}

export const publicationDetailPageProps: CardContainerLogicProps = {
  sql: publicationSql,
  sqlOperator: ColumnMultiValueFunction.HAS,
  ...publicationsCardConfiguration,
}
