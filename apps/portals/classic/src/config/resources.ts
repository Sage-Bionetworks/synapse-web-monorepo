import { SearchV2Props } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const whatWeDoSql = 'SELECT * FROM syn69806893'
export const featuredResearchSql =
  'SELECT * FROM syn69806889 ORDER BY order ASC'
export const publicationsSql = 'SELECT * FROM syn69806872 ORDER BY "Year" DESC'
export const studiesSql =
  'SELECT * FROM syn70760510 ORDER BY isFeatured DESC, studyName ASC'

export const defaultSearchConfiguration: Omit<
  SearchV2Props,
  'queryContext' | 'queryVisualizationContext'
> = {
  ftsConfig: {
    textMatchesMode: 'NATURAL_LANGUAGE',
    searchHelpURL: 'https://help.classicportal.org/help/search-tips',
  },
}

export const goalsTable = 'syn69883160'
