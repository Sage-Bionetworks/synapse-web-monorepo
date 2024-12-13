import { Direction } from '@sage-bionetworks/synapse-types'
import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { publicationsSql } from '../resources'
import { columnAliases } from './commonProps'

export const newPublicationsSql = `${publicationsSql} order by ROW_ID desc limit 3`
const type = SynapseConstants.GENERIC_CARD
const rgbIndex = 0

export const publicationsCardConfiguration: CardConfiguration = {
  type,
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Studies/DetailsPage',
      URLColumnName: 'studyName',
      matchColumnName: 'studyName',
    },
    {
      isMarkdown: true,
      matchColumnName: 'doi',
    },
  ],
  genericCardSchema: {
    title: 'title',
    type: SynapseConstants.PUBLICATION,
    subTitle: 'author',
    link: 'doi',
    secondaryLabels: [
      'journal',
      'year',
      'studyName',
      'diseaseFocus',
      'manifestation',
      'fundingAgency',
      'pmid',
      'doi',
    ],
  },
}

const publications: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: publicationsSql,
  shouldDeepLink: true,
  name: 'Publications',
  cardConfiguration: publicationsCardConfiguration,
  columnAliases,
  facetValueSortConfigs: [{ columnName: 'year', direction: Direction.DESC }],
  searchConfiguration: {
    searchable: [
      'title',
      'author',
      'journal',
      'pmid',
      'year',
      'fundingAgency',
      'studyName',
      'diseaseFocus',
      'manifestation',
    ],
  },
}

///////// utilize NF GFF database

export const publicationsV2CardConfiguration: CardConfiguration = {
  type,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'doi',
    },
  ],
  genericCardSchema: {
    title: 'publicationTitle',
    type: SynapseConstants.PUBLICATION,
    subTitle: 'authors',
    link: 'doi',
    secondaryLabels: [
      'journal',
      'publicationDate',
      'applications',
      'pmid',
      'doi',
    ],
  },
}

export default publications
