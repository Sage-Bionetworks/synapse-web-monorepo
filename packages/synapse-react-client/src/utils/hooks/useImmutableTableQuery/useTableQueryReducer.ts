import {
  FacetColumnRangeRequest,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import React, { useReducer, useState } from 'react'
import { UniqueFacetIdentifier } from '../../types/UniqueFacetIdentifier'
import { cloneDeep, isEqual } from 'lodash-es'
import {
  facetObjectMatchesDefinition,
  queryRequestsHaveSameTotalResults,
  removeEmptyQueryParams,
} from '../../functions/queryUtils'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnValuesRequest,
} from '../../types/IsType'
import { DEFAULT_PAGE_SIZE } from '../../SynapseConstants'
import { useDebouncedEffect } from '@react-hookz/web'
import { DEBOUNCE_DELAY_MS } from './useImmutableTableQuery'

export type QueryChangeCommitOptions =
  | {
      // This and future changes including debounce will not be committed until the debounceDelay has elapsed
      debounce: true
    }
  | {
      // The change will not be committed until the commit function is invoked.
      noCommit: true
    }

export type TableQueryReducerState = {
  currentQueryRequest: QueryBundleRequest
  nextQueryRequest: QueryBundleRequest
  isConfirmingChange: boolean
}

export type TableQueryReducerAction = {
  commitOptions?: QueryChangeCommitOptions
} & (
  | {
      type: 'setQuery'
      queryOrUpdater: React.SetStateAction<QueryBundleRequest>
    }
  | {
      type: 'addValueToSelectedFacet'
      facet: UniqueFacetIdentifier
      value: string
    }
  | {
      type: 'removeSelectedFacet'
      facetsToRemove: UniqueFacetIdentifier | UniqueFacetIdentifier[]
    }
  | {
      type: 'setRangeFacetValue'
      facet: UniqueFacetIdentifier
      min?: string
      max?: string
    }
  | {
      type: 'removeValueFromSelectedFacet'
      facet: UniqueFacetIdentifier
      value: string
    }
  | {
      type: 'setPageSize'
      pageSize: number
    }
  | {
      type: 'goToPage'
      pageNumber: number
    }
  | {
      type: 'resetQuery'
    }
  | {
      type: 'removeQueryFilter'
      queryFilter: QueryFilter
    }
  | {
      type: 'removeValueFromQueryFilter'
      queryFilter: QueryFilter
      value: string
    }
  | {
      type: 'resetUncommittedChanges'
    }
  | { type: 'commitChanges' }
  | { type: 'confirmChanges' }
  | { type: 'cancelChanges' }
)

/**
 * Utility hook that internally uses a reducer to manage the state of a table query.
 * @param initQueryRequest
 * @param requireConfirmationOnChange
 * @param onQueryChange
 */
export function useTableQueryReducer(
  initQueryRequest: QueryBundleRequest,
  requireConfirmationOnChange: boolean,
  onQueryChange?: (queryJsonString: string) => void,
) {
  const [commitAfterDebounce, setCommitAfterDebounce] = useState(false)

  // Note: we must use a reducer because we're tracking interrelated state variables. Attempts to separate these will
  // likely result in bugs such as dropped state changes when React performs a batch update.
  const [state, dispatch] = useReducer(
    (
      prevState: TableQueryReducerState,
      action: TableQueryReducerAction,
    ): TableQueryReducerState => {
      const currentQueryRequest = prevState.currentQueryRequest
      let nextQueryRequestClone = cloneDeep(prevState.nextQueryRequest)
      switch (action.type) {
        case 'setQuery': {
          const { queryOrUpdater } = action
          if (typeof queryOrUpdater === 'function') {
            nextQueryRequestClone = queryOrUpdater(nextQueryRequestClone)
          } else {
            nextQueryRequestClone = queryOrUpdater
          }
          break
        }
        case 'addValueToSelectedFacet': {
          const { facet, value } = action
          const newFacets = nextQueryRequestClone.query.selectedFacets ?? []

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
          nextQueryRequestClone.query.selectedFacets = newFacets
          break
        }
        case 'removeSelectedFacet': {
          const { facetsToRemove } = action
          const isArray = Array.isArray(facetsToRemove)
          nextQueryRequestClone.query.selectedFacets = (
            nextQueryRequestClone.query.selectedFacets ?? []
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
          break
        }
        case 'setRangeFacetValue': {
          const { facet, min, max } = action
          const newFacets = cloneDeep(
            nextQueryRequestClone.query.selectedFacets ?? [],
          )

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
          nextQueryRequestClone.query.selectedFacets = newFacets
          break
        }
        case 'removeValueFromSelectedFacet': {
          const { facet, value } = action
          nextQueryRequestClone.query.selectedFacets = (
            nextQueryRequestClone.query.selectedFacets ?? []
          )
            // Modify the requested filter
            .map(facetColumnRequest => {
              if (
                isFacetColumnValuesRequest(facetColumnRequest) &&
                facetObjectMatchesDefinition(facet, facetColumnRequest)
              ) {
                // Remove the value from the filter
                facetColumnRequest.facetValues =
                  facetColumnRequest.facetValues.filter(v => v !== value)
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
          break
        }
        case 'removeQueryFilter': {
          const { queryFilter } = action
          nextQueryRequestClone.query.additionalFilters = (
            nextQueryRequestClone.query.additionalFilters ?? []
          ).filter(qf => {
            // Use lodash for deep comparison
            return !isEqual(qf, queryFilter)
          })
          break
        }
        case 'removeValueFromQueryFilter': {
          const { queryFilter, value } = action
          nextQueryRequestClone.query.additionalFilters = (
            nextQueryRequestClone.query.additionalFilters ?? []
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
          break
        }
        case 'setPageSize': {
          const { pageSize } = action
          nextQueryRequestClone.query.limit = pageSize
          break
        }
        case 'goToPage': {
          const { pageNumber } = action
          const pageSize = currentQueryRequest.query.limit ?? DEFAULT_PAGE_SIZE
          nextQueryRequestClone.query.offset = (pageNumber - 1) * pageSize
          break
        }
        case 'resetQuery': {
          nextQueryRequestClone = initQueryRequest
          break
        }
        case 'cancelChanges':
        case 'resetUncommittedChanges': {
          nextQueryRequestClone = currentQueryRequest
          break
        }
        case 'confirmChanges':
        case 'commitChanges': {
          // commit the changes
          break
        }
      }

      nextQueryRequestClone.query = removeEmptyQueryParams(
        nextQueryRequestClone.query,
      )

      const isConfirmingChange =
        requireConfirmationOnChange &&
        !queryRequestsHaveSameTotalResults(
          currentQueryRequest.query,
          nextQueryRequestClone.query,
        )

      if (
        (isConfirmingChange &&
          action.type !== 'confirmChanges' &&
          action.type !== 'cancelChanges') ||
        (action.commitOptions && 'noCommit' in action.commitOptions)
      ) {
        return {
          currentQueryRequest: currentQueryRequest,
          nextQueryRequest: nextQueryRequestClone,
          isConfirmingChange: isConfirmingChange,
        }
      } else if (action.commitOptions && 'debounce' in action.commitOptions) {
        setCommitAfterDebounce(true)
        return {
          currentQueryRequest: currentQueryRequest,
          nextQueryRequest: nextQueryRequestClone,
          isConfirmingChange: isConfirmingChange,
        }
      } else {
        // commit right away
        setCommitAfterDebounce(false)
        if (
          onQueryChange &&
          !isEqual(currentQueryRequest, nextQueryRequestClone)
        ) {
          const queryJsonString = JSON.stringify(nextQueryRequestClone.query)
          onQueryChange(queryJsonString)
        }
        return {
          currentQueryRequest: nextQueryRequestClone,
          nextQueryRequest: nextQueryRequestClone,
          isConfirmingChange: false,
        }
      }
    },
    {
      currentQueryRequest: initQueryRequest,
      nextQueryRequest: initQueryRequest,
      isConfirmingChange: false,
    },
  )

  useDebouncedEffect(
    () => {
      if (commitAfterDebounce) {
        dispatch({ type: 'commitChanges' })
        setCommitAfterDebounce(false)
      }
    },
    // nextQueryRequest MUST be included in the dependencies to ensure the debounce resets when it changes
    [state.nextQueryRequest, commitAfterDebounce, setCommitAfterDebounce],
    DEBOUNCE_DELAY_MS,
  )

  return {
    currentQueryRequest: state.currentQueryRequest,
    nextQueryRequest: state.nextQueryRequest,
    isConfirmingChange: state.isConfirmingChange,
    dispatch,
  }
}
