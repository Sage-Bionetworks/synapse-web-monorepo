import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import { getFileColumnModelId } from '../SynapseTable/SynapseTableUtils'
import { FTSConfig } from '../SynapseTable/SearchV2'
import { getWordCount } from '../TextField/TextFieldWithWordLimit'

/**
 * Expects a search expression of the form: "searchText" @3
 * In this example, this function will return the following string via a regex: searchText
 */
export function getSearchTextFromBooleanModeSearchExpression(
  searchExpression: string,
) {
  /**
   * ^"(.+?)": Matches the opening double quote and lazily captures any characters until the next quote.
   * \s*@\d+$: Matches optional whitespace, the @ symbol, and one or more digits at the end.
   */
  const match = searchExpression.match(/^"(.+?)"\s*@\d+$/)
  if (match) {
    return match[1]
  } else {
    return ''
  }
}

// Convert the user-provided searchText into a search expression given the current FTS configuration.
// If configured to search using BOOLEAN mode, search expression will wrap the search text in double quotes and include the distance.
export function getTextMatchesQueryFilter(
  searchText: string,
  ftsConfig: FTSConfig = {
    textMatchesMode: 'NATURAL_LANGUAGE',
  },
) {
  const { textMatchesMode, distance = 0 } = ftsConfig
  let searchExpression = searchText
  if (textMatchesMode == 'BOOLEAN') {
    //split by non-word character and ignore empty strings
    const searchTextWordLength = getWordCount(searchText)
    const distanceToUse = Math.max(distance, searchTextWordLength)
    searchExpression = `"${searchText.replaceAll('"', '')}" @${distanceToUse}`
  }
  const textMatchesQueryFilter: TextMatchesQueryFilter = {
    concreteType: 'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
    searchExpression,
    searchMode: ftsConfig.textMatchesMode,
  }
  return textMatchesQueryFilter
}

export function updateQueryUsingSearchTerm(
  queryBundleRequest: QueryBundleRequest,
  columnModels: ColumnModel[] | undefined,
  searchText: string,
  ftsConfig?: FTSConfig,
): QueryBundleRequest {
  const { additionalFilters = [] } = queryBundleRequest.query
  const synIdColumnModelId = getFileColumnModelId(columnModels)
  const isSynapseID = searchText.match(SYNAPSE_ENTITY_ID_REGEX)
  if (isSynapseID && synIdColumnModelId) {
    const idColumnModel = columnModels?.filter(
      el => el.id === synIdColumnModelId,
    )
    const singleValueQueryFilter: ColumnSingleValueQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: idColumnModel![0].name,
      operator: ColumnSingleValueFilterOperator.IN,
      values: [searchText],
    }
    // Replace the active filter on the column, if one exists
    const matchingFilter = additionalFilters.find(
      filter =>
        filter.concreteType == singleValueQueryFilter.concreteType &&
        filter.columnName == singleValueQueryFilter.columnName,
    ) as ColumnSingleValueQueryFilter
    if (matchingFilter) {
      if (!matchingFilter.values.includes(searchText)) {
        matchingFilter.values.push(searchText)
      }
      return queryBundleRequest
    }
    additionalFilters.push(singleValueQueryFilter)
  } else {
    const textMatchesQueryFilter = getTextMatchesQueryFilter(
      searchText,
      ftsConfig,
    )
    // PORTALS-2093: does this additional filter already exist?
    const found = additionalFilters.find(
      filter =>
        filter.concreteType == textMatchesQueryFilter.concreteType &&
        filter.searchExpression == textMatchesQueryFilter.searchExpression,
    )
    if (found) {
      return queryBundleRequest
    }
    additionalFilters.push(textMatchesQueryFilter)
  }
  queryBundleRequest.query.additionalFilters = additionalFilters
  return queryBundleRequest
}
