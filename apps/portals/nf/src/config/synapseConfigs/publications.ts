import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { columnAliases } from './commonProps'

import { Direction } from '@sage-bionetworks/synapse-types'
import { publicationsSql } from '../resources'

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
    includeCitation: true,
    defaultCitationFormat: 'nature',
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
