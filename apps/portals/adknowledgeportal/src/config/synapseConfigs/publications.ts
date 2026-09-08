import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { publicationsSearchIndexId, publicationsSql } from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

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

export const publicationsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Publications',
  shouldDeepLink: false,
  cardConfiguration: publicationCardProps,
  facetsToPlot: ['Program', 'year', 'grant', 'journal'],
  columnAliases,
  searchIndexId: publicationsSearchIndexId,
  autocompleteFieldName: 'title',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
