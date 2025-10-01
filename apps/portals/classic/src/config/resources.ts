import { SearchV2Props } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const whatWeDoSql = 'SELECT * FROM syn69806893'

export const publicationsSql = 'SELECT * FROM syn51407023 ORDER BY "Year" DESC'
export const studiesSql =
  'SELECT * FROM syn51523775 ORDER BY isFeatured DESC, dataStatus ASC, studyName ASC'

export const defaultSearchConfiguration: Omit<
  SearchV2Props,
  'queryContext' | 'queryVisualizationContext'
> = {
  ftsConfig: {
    textMatchesMode: 'NATURAL_LANGUAGE',
    searchHelpURL: 'https://help.eliteportal.org/help/search-tips',
  },
}
