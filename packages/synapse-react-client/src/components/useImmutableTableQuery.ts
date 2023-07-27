import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  FacetColumnRequest,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, isEqual } from 'lodash-es'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { DEFAULT_PAGE_SIZE } from '../utils/SynapseConstants'
import { parseEntityIdAndVersionFromSqlStatement } from '../utils/functions/SqlFunctions'
import useDeepCompareEffect from 'use-deep-compare-effect'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  isFacetColumnValuesRequest,
} from '../utils/types/IsType'
import {
  queryRequestsHaveSameTotalResults,
  removeEmptyQueryParams,
} from '../utils/functions/queryUtils'
import { ReadonlyDeep } from 'type-fest'
import useCommittedState from '../utils/hooks/useCommittedState'
import { useDebouncedEffect } from '@react-hookz/web'

type QueryChangeCommitOptions =
  | {
      // This and future changes including debounce will not be committed until the debounceDelay has elapsed
      debounce: true
    }
  | {
      // The change will not be committed until the commit function is invoked.
      noCommit: true
    }

export type ImmutableTableQueryResult = {
  /** The ID of the table parsed from the SQL query */
  entityId: string
  /** The version number of the table parsed from the SQL query */
  versionNumber?: number
  /** The current query request, which is passed on to the server for results */
  currentQueryRequest: ReadonlyDeep<QueryBundleRequest>
  /** The next (uncommitted) query request. This will become the current query request when commitChanges is called, or the configured debounced timer elapses. */
  nextQueryRequest: ReadonlyDeep<QueryBundleRequest>
  /** Update the currentQueryRequest to be the nextQueryRequest */
  commitChanges: () => void
  getInitQueryRequest: () => QueryBundleRequest
  getCurrentQueryRequest: () => QueryBundleRequest
  setQuery: (
    queryRequest: React.SetStateAction<QueryBundleRequest>,
    commitOptions?: QueryChangeCommitOptions,
  ) => void
  pageSize: number
  /** The current page of results. The first page is `1` */
  currentPage: number
  setPageSize: (pageSize: number) => void
  /** pageNumber is 1-indexed */
  goToPage: (pageNumber: number) => void
  /** Resets the query to the initial state, clearing all user-specified filters */
  resetQuery: () => void
  addValueToSelectedFacet: (
    columnName: string,
    value: string,
    commitOptions?: QueryChangeCommitOptions,
  ) => void
  /** Removes a particular selected facet from the query */
  removeSelectedFacet: (facet: FacetColumnRequest) => void
  /** Removes a particular value from a selected facet. If the value is the last value in the FacetColumnRequest, the selected facet will be removed. */
  removeValueFromSelectedFacet: (
    facet: FacetColumnRequest | string,
    value: string,
    commitOptions?: QueryChangeCommitOptions,
  ) => void
  /** Removes a particular QueryFilter from the query */
  removeQueryFilter: (filter: QueryFilter) => void
  /** Removes a particular value from a QueryFilter. If the value is the last value in the filter, the filter will be removed. */
  removeValueFromQueryFilter: (filter: QueryFilter, value: string) => void
  /** If `requireConfirmationOnChange` is true, this will become true when a function that triggers a query change is invoked. */
  isConfirmingChange: boolean
  /** If `isConfirmingChange` is true, invoke this function to complete the query change */
  onConfirmChange: () => void
  /** If `isConfirmingChange` is true, invoke this function to cancel the query change */
  onCancelChange: () => void

  /**
   * TODO: This hook could handle all potential query transformations, such as
   *    - addFacetFilter, removeFacetFilter, clearFacetFilters
   *    - addAdditionalFilter, remove..., clear...
   *
   * This could be preferable to allowing any QueryContext subscriber to arbitrarily update the query with `setQuery`
   *  because we could uniformly handle all complex stateful logic in this hook
   */
}

export type UseImmutableTableQueryOptions = {
  /** The initial table query request object */
  initQueryRequest: QueryBundleRequest
  /** Whether the URL should update when the query is modified. */
  shouldDeepLink?: boolean
  /** Unique index for the component on the page so URL updates do not conflict between table query components */
  componentIndex?: number
  /** Callback invoked when the query is modified */
  onQueryChange?: (newQueryJson: string) => void
  /** Whether to require explicit user confirmation before changing the query. */
  requireConfirmationOnChange?: boolean
}

// When changing the query with the debounce option, the amount of time to wait for additional debounced changes before updating the query
export const DEBOUNCE_DELAY_MS = 1500

/**
 * Custom hook that maintains and manages the state of a Synapse Table query.
 * @param options
 * @returns
 */
export default function useImmutableTableQuery(
  options: UseImmutableTableQueryOptions,
): ImmutableTableQueryResult {
  const {
    initQueryRequest: initQueryRequestFromProps,
    componentIndex = 0,
    shouldDeepLink = false,
    onQueryChange,
    requireConfirmationOnChange = false,
  } = options

  const initQueryRequest = useMemo(() => {
    const request = cloneDeep(initQueryRequestFromProps)
    request.query = removeEmptyQueryParams(request.query)
    return request
  }, [initQueryRequestFromProps])

  const {
    committedState: currentQueryRequest,
    uncommittedState: nextQueryRequest,
    commit,
    setUncommittedState: setNextQueryRequest,
  } = useCommittedState<QueryBundleRequest>(initQueryRequest, queryRequest => {
    if (onQueryChange) {
      const queryJsonString = JSON.stringify(queryRequest.query)
      onQueryChange(queryJsonString)
    }
  })

  const [isConfirmingChange, setIsConfirmingChange] = useState(false)

  // State variable to track the operation that should be invoked when the user confirms a query change
  const [onConfirmChangeQuery, setOnConfirmChangeQuery] = useState<() => void>(
    () => {
      setIsConfirmingChange(false)
    },
  )

  /**
   * Pass down a deep clone (so no side effects on the child's part) of the
   * next query request
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getNextQueryRequest = useCallback(() => {
    return cloneDeep(nextQueryRequest)
  }, [nextQueryRequest])

  /**
   * Pass down a deep clone (so no side effects on the child's part) of the
   * current query request
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getCurrentQueryRequest = useCallback(() => {
    return cloneDeep(currentQueryRequest)
  }, [currentQueryRequest])

  /**
   * Pass down a deep clone (so no side effects on the child's part) of the
   * first query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getInitQueryRequest = useCallback((): QueryBundleRequest => {
    return cloneDeep(initQueryRequest)
  }, [initQueryRequest])

  const [commitAfterDebounce, setCommitAfterDebounce] = useState(false)

  useDebouncedEffect(
    () => {
      if (commitAfterDebounce) {
        commit()
        setCommitAfterDebounce(false)
      }
    },
    // nextQueryRequest MUST be included in the dependencies to ensure the debounce resets when it changes
    [nextQueryRequest, commit, commitAfterDebounce],
    DEBOUNCE_DELAY_MS,
  )

  /**
   * Execute the given query request, updating all the data in the QueryContext to match the new query
   * @param {*} queryRequest Query request as specified by
   *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   */
  const setQuery: ImmutableTableQueryResult['setQuery'] = useCallback(
    (
      queryRequest: React.SetStateAction<QueryBundleRequest>,
      commitOptions?: QueryChangeCommitOptions,
    ): void => {
      const nextQueryRequest =
        typeof queryRequest === 'function'
          ? queryRequest(getNextQueryRequest())
          : queryRequest

      // Remove null/empty array fields
      nextQueryRequest.query = removeEmptyQueryParams(nextQueryRequest.query)

      setNextQueryRequest(nextQueryRequest)
      if (commitOptions) {
        if ('debounce' in commitOptions && commitOptions.debounce) {
          setCommitAfterDebounce(true)
        }
      } else {
        commit()
      }
    },
    [commit, getNextQueryRequest, setNextQueryRequest],
  )

  const setQueryOrPromptConfirmation: ImmutableTableQueryResult['setQuery'] =
    useCallback(
      (
        queryRequest: React.SetStateAction<QueryBundleRequest>,
        commitOptions?: QueryChangeCommitOptions,
      ) => {
        const nextQueryRequest =
          typeof queryRequest === 'function'
            ? queryRequest(getNextQueryRequest())
            : queryRequest
        // Check if we need to confirm the change, and eventually call _setQuery
        if (
          requireConfirmationOnChange &&
          !queryRequestsHaveSameTotalResults(
            currentQueryRequest.query,
            nextQueryRequest.query,
          )
        ) {
          setOnConfirmChangeQuery(() => () => {
            setQuery(queryRequest, commitOptions)
            setIsConfirmingChange(false)
          })
          setIsConfirmingChange(true)
        } else {
          setQuery(queryRequest, commitOptions)
        }
      },
      [
        getNextQueryRequest,
        requireConfirmationOnChange,
        currentQueryRequest.query,
        setQuery,
      ],
    )

  /**
   * Inspect the URL on mount to see if we have a particular query request that we must show.
   */
  useEffect(() => {
    const queryRequestFromLink = DeepLinkingUtils.getQueryRequestFromLink(
      'QueryWrapper',
      componentIndex,
    )
    if (queryRequestFromLink && queryRequestFromLink.query) {
      setQuery(prevState => ({
        ...prevState,
        ...queryRequestFromLink,
        query: {
          ...prevState.query,
          ...queryRequestFromLink.query,
        },
      }))
      commit()
    }
    // should only run on mount, or if the component index changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentIndex])

  // If `shouldDeepLink` is true, synchronize the URL
  useEffect(() => {
    if (shouldDeepLink) {
      if (isEqual(initQueryRequest, currentQueryRequest)) {
        DeepLinkingUtils.updateUrlWithNewSearchParam(
          'QueryWrapper',
          componentIndex,
          null,
        )
      } else {
        const queryJsonString = JSON.stringify(currentQueryRequest.query)
        DeepLinkingUtils.updateUrlWithNewSearchParam(
          'QueryWrapper',
          componentIndex,
          queryJsonString,
        )
      }
    }
  }, [componentIndex, currentQueryRequest, initQueryRequest, shouldDeepLink])

  const onCancelChangeQuery = useCallback(() => {
    setIsConfirmingChange(false)
    setNextQueryRequest(currentQueryRequest)
  }, [currentQueryRequest, setNextQueryRequest])

  const { entityId, versionNumber } = useMemo(
    () =>
      parseEntityIdAndVersionFromSqlStatement(currentQueryRequest.query.sql)!,
    [currentQueryRequest.query.sql],
  )

  const pageSize = currentQueryRequest.query.limit ?? DEFAULT_PAGE_SIZE
  const currentPage = Math.ceil(
    ((currentQueryRequest.query.offset ?? 0) + Number(pageSize)) / pageSize,
  )

  const setPageSize = useCallback(
    (pageSize: number) => {
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.limit = pageSize
        return currentQuery
      })
    },
    [setQueryOrPromptConfirmation],
  )

  const goToPage = useCallback(
    (pageNumber: number) => {
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.offset = (pageNumber - 1) * pageSize
        return currentQuery
      })
    },
    [pageSize, setQueryOrPromptConfirmation],
  )

  const resetQuery = useCallback(() => {
    setQueryOrPromptConfirmation(initQueryRequest)
  }, [initQueryRequest, setQueryOrPromptConfirmation])

  /* If the initial query changes, then reset the query to match the new prop */
  useDeepCompareEffect(() => {
    if (currentQueryRequest != initQueryRequest) {
      resetQuery()
    }
  }, [initQueryRequest])

  const addValueToSelectedFacet = useCallback(
    (
      columnName: string,
      value: string,
      commitOptions?: QueryChangeCommitOptions,
    ) => {
      setQueryOrPromptConfirmation(request => {
        const newFacets = request.query.selectedFacets ?? []

        const existingFacetSelection = newFacets.find(
          (facet): facet is FacetColumnValuesRequest =>
            facet.concreteType ===
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest' &&
            facet.columnName === columnName,
        )

        if (existingFacetSelection) {
          if (!existingFacetSelection.facetValues.includes(value)) {
            existingFacetSelection.facetValues.push(value)
          }
        } else {
          newFacets.push({
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            columnName: columnName,
            facetValues: [value],
          })
        }
        request.query.selectedFacets = newFacets
        return request
      }, commitOptions)
    },
    [setQueryOrPromptConfirmation],
  )

  const removeSelectedFacet = useCallback(
    (facetColumnRequest: FacetColumnRequest) => {
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.selectedFacets = (
          currentQuery.query.selectedFacets ?? []
        ).filter(facet => {
          // Use lodash for deep comparison
          return !isEqual(facet, facetColumnRequest)
        })
        return currentQuery
      })
    },
    [setQueryOrPromptConfirmation],
  )

  const removeValueFromSelectedFacet = useCallback(
    (
      facet: FacetColumnRequest | string,
      value: string,
      commitOptions?: QueryChangeCommitOptions,
    ) => {
      const facetColumnName =
        typeof facet === 'object' ? facet.columnName : facet
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.selectedFacets = (
          currentQuery.query.selectedFacets ?? []
        )
          // Modify the requested filter
          .map(facetColumnRequest => {
            if (
              isFacetColumnValuesRequest(facetColumnRequest) &&
              isEqual(facetColumnRequest.columnName, facetColumnName)
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
        return currentQuery
      }, commitOptions)
    },
    [setQueryOrPromptConfirmation],
  )

  const removeQueryFilter = useCallback(
    (queryFilter: QueryFilter) => {
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.additionalFilters = (
          currentQuery.query.additionalFilters ?? []
        ).filter(qf => {
          // Use lodash for deep comparison
          return !isEqual(qf, queryFilter)
        })
        return currentQuery
      })
    },
    [setQueryOrPromptConfirmation],
  )

  const removeValueFromQueryFilter = useCallback(
    (queryFilter: QueryFilter, value: string) => {
      setQueryOrPromptConfirmation(currentQuery => {
        currentQuery.query.additionalFilters = (
          currentQuery.query.additionalFilters ?? []
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
        return currentQuery
      })
    },
    [setQueryOrPromptConfirmation],
  )

  return {
    entityId,
    commitChanges: commit,
    currentQueryRequest,
    nextQueryRequest,
    versionNumber,
    getInitQueryRequest,
    getCurrentQueryRequest: getCurrentQueryRequest,
    setQuery: setQueryOrPromptConfirmation,
    pageSize,
    currentPage,
    setPageSize,
    goToPage,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
    isConfirmingChange,
    onConfirmChange: onConfirmChangeQuery,
    onCancelChange: onCancelChangeQuery,
    addValueToSelectedFacet,
  }
}
