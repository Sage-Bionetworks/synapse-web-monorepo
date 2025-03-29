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

export function updateQueryUsingSearchTerm(
  queryBundleRequest: QueryBundleRequest,
  columnModels: ColumnModel[] | undefined,
  searchText: string,
  setSearchText: React.Dispatch<React.SetStateAction<string>>,
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
    const textMatchesQueryFilter: TextMatchesQueryFilter = {
      concreteType:
        'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
      searchExpression: searchText,
    }
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
