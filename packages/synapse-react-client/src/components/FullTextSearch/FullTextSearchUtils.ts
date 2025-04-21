import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import {
  ColumnModel,
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  QueryBundleRequest,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import * as React from 'react'
import { getFileColumnModelId } from '../SynapseTable/SynapseTableUtils'
import { FTSConfig } from '../SynapseTable/SearchV2'

// Convert the user-provided searchText into a search expression given the current FTS configuration.
// If configured to search using BOOLEAN mode, search expression will wrap the search text in double quotes and include the distance.
export function getTextMatchesQueryFilter(
  searchText: string,
  ftsConfig: FTSConfig = {
    textMatchesMode: 'NATURAL_LANGUAGE',
  },
) {
  const { textMatchesMode, distance } = ftsConfig
  let searchExpression = searchText
  if (textMatchesMode == 'BOOLEAN') {
    searchExpression = `"${searchText.replaceAll('"', '')}" @${distance}`
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
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
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
  // reset the search text after adding this filter
  setSearchText('')
  return queryBundleRequest
}
