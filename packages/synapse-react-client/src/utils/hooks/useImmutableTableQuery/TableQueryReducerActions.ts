import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnValuesRequest,
} from '@/utils/types/IsType'
import { UniqueFacetIdentifier } from '@/utils/types/UniqueFacetIdentifier'
import {
  FacetColumnRangeRequest,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, isEqual } from 'lodash-es'
import * as React from 'react'
import { facetObjectMatchesDefinition } from '../../functions/queryUtils'
import { DEFAULT_PAGE_SIZE } from '../../SynapseConstants'
import { QueryChangeCommitOptions } from './useTableQueryReducer'

export function getQueryFromSetStateAction(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'setQuery'
    queryOrUpdater: React.SetStateAction<QueryBundleRequest>
  },
  queryRequest: QueryBundleRequest,
): QueryBundleRequest {
  const queryRequestClone = cloneDeep(queryRequest)
  const { queryOrUpdater } = action
  if (typeof queryOrUpdater === 'function') {
    return queryOrUpdater(queryRequestClone)
  } else {
    return queryOrUpdater
  }
}

export function addValueToSelectedFacet(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'addValueToSelectedFacet'
    facet: UniqueFacetIdentifier
    value: string
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { facet, value } = action
  const newFacets = queryRequestClone.query.selectedFacets ?? []

  const existingFacetSelection = newFacets.find(
    (existingFacet): existingFacet is FacetColumnValuesRequest => {
      return (
        existingFacet.concreteType ===
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
        facetObjectMatchesDefinition(facet, existingFacet)
      )
    },
  )

  if (existingFacetSelection) {
    if (!existingFacetSelection.facetValues.includes(value)) {
      existingFacetSelection.facetValues.push(value)
    }
  } else {
    newFacets.push({
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: facet.columnName,
      jsonPath: facet.jsonPath,
      facetValues: [value],
    })
  }
  queryRequestClone.query.selectedFacets = newFacets
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function removeSelectedFacet(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'removeSelectedFacet'
    facetsToRemove: UniqueFacetIdentifier | UniqueFacetIdentifier[]
  },
  queryRequest: QueryBundleRequest,
): QueryBundleRequest {
  const queryRequestClone = cloneDeep(queryRequest)
  const { facetsToRemove } = action
  const isArray = Array.isArray(facetsToRemove)
  queryRequestClone.query.selectedFacets = (
    queryRequestClone.query.selectedFacets ?? []
  ).filter(facet => {
    // Use lodash for deep comparison
    if (isArray) {
      return !facetsToRemove.find(item => {
        return facetObjectMatchesDefinition(item, facet)
      })
    } else {
      return !facetObjectMatchesDefinition(facetsToRemove, facet)
    }
  })
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function setRangeFacetValue(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'setRangeFacetValue'
    facet: UniqueFacetIdentifier
    min?: string
    max?: string
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { facet, min, max } = action
  const newFacets = cloneDeep(queryRequestClone.query.selectedFacets ?? [])

  const existingFacetSelection = newFacets.find(
    (existingFacet): existingFacet is FacetColumnRangeRequest => {
      return (
        existingFacet.concreteType ===
          'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest' &&
        facetObjectMatchesDefinition(facet, existingFacet)
      )
    },
  )
  if (existingFacetSelection && min == null && max == null) {
    // remove the facet
    newFacets.splice(newFacets.indexOf(existingFacetSelection), 1)
  } else if (existingFacetSelection) {
    existingFacetSelection.min = min
    existingFacetSelection.max = max
  } else {
    newFacets.push({
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
      columnName: facet.columnName,
      jsonPath: facet.jsonPath,
      min,
      max,
    })
  }
  queryRequestClone.query.selectedFacets = newFacets
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function removeValueFromSelectedFacet(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'removeValueFromSelectedFacet'
    facet: UniqueFacetIdentifier
    value: string
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { facet, value } = action
  queryRequestClone.query.selectedFacets = (
    queryRequestClone.query.selectedFacets ?? []
  )
    // Modify the requested filter
    .map(facetColumnRequest => {
      if (
        isFacetColumnValuesRequest(facetColumnRequest) &&
        facetObjectMatchesDefinition(facet, facetColumnRequest)
      ) {
        // Remove the value from the filter
        facetColumnRequest.facetValues = facetColumnRequest.facetValues.filter(
          v => v !== value,
        )
      }
      return facetColumnRequest
    })
    // Remove filters that have no values
    .filter(facetColumnRequest => {
      if (isFacetColumnValuesRequest(facetColumnRequest)) {
        // Remove the value from the filter
        return (
          Array.isArray(facetColumnRequest.facetValues) &&
          facetColumnRequest.facetValues.length > 0
        )
      }
      return true
    })
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function removeQueryFilter(
  action: {
    type: 'removeQueryFilter'
    queryFilter: QueryFilter
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { queryFilter } = action
  queryRequestClone.query.additionalFilters = (
    queryRequestClone.query.additionalFilters ?? []
  ).filter(qf => {
    // Use lodash for deep comparison
    return !isEqual(qf, queryFilter)
  })
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function removeValueFromQueryFilter(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'removeValueFromQueryFilter'
    queryFilter: QueryFilter
    value: string
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { queryFilter, value } = action
  queryRequestClone.query.additionalFilters = (
    queryRequestClone.query.additionalFilters ?? []
  )
    // Modify the requested filter
    .map(qf => {
      if (
        (isColumnSingleValueQueryFilter(qf) ||
          isColumnMultiValueFunctionQueryFilter(qf)) &&
        isEqual(qf, queryFilter)
      ) {
        // Remove the value from the filter
        qf.values = qf.values.filter(v => v !== value)
      }
      return qf
    })
    // Remove filters that have no values
    .filter(qf => {
      if (
        isColumnSingleValueQueryFilter(qf) ||
        isColumnMultiValueFunctionQueryFilter(qf)
      ) {
        // Remove the value from the filter
        return Array.isArray(qf.values) && qf.values.length > 0
      }
      return true
    })
  if (!isEqual(queryRequestClone, queryRequest)) {
    queryRequestClone.query.offset = 0
  }
  return queryRequestClone
}

export function setPageSize(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'setPageSize'
    pageSize: number
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { pageSize } = action
  queryRequestClone.query.limit = pageSize
  return queryRequestClone
}

export function goToPage(
  action: { commitOptions?: QueryChangeCommitOptions } & {
    type: 'goToPage'
    pageNumber: number
  },
  queryRequest: QueryBundleRequest,
) {
  const queryRequestClone = cloneDeep(queryRequest)
  const { pageNumber } = action
  const pageSize = queryRequest.query.limit ?? DEFAULT_PAGE_SIZE
  queryRequestClone.query.offset = (pageNumber - 1) * pageSize
  return queryRequestClone
}
