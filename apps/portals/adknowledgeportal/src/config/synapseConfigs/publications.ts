import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { publicationsSql } from '../resources'

const rgbIndex = 5

export const publicationCardProps: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'title',
    subTitle: 'authors',
    includeCitation: true,
    defaultCitationFormat: 'nature',
    link: 'DOI',
    secondaryLabels: [
      'year',
      'journal',
      'Program',
      'grant',
      'DOI',
      'pubmed_id',
    ],
  },
}

const columnAliases = {
  pubmed_id: 'Pubmed ID',
}

export const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: publicationsSql,
  name: 'Publications',
  shouldDeepLink: true,
  facetsToPlot: ['Program', 'year', 'grant', 'journal'],
  cardConfiguration: publicationCardProps,
  columnAliases,
}

export const PUBLICATIONS_TABLE_COLUMN_NAMES = {
  GRANT: 'grant',
}
