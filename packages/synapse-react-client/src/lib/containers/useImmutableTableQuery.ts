import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  FacetColumnRequest,
  isFacetColumnValuesRequest,
  QueryBundleRequest,
} from '../utils/synapseTypes'
import { cloneDeep, isEqual } from 'lodash-es'
import * as DeepLinkingUtils from '../utils/functions/deepLinkingUtils'
import { DEFAULT_PAGE_SIZE } from '../utils/SynapseConstants'
import { parseEntityIdAndVersionFromSqlStatement } from '../utils/functions/sqlFunctions'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  QueryFilter,
} from '../utils/synapseTypes/Table/QueryFilter'
import useDeepCompareEffect from 'use-deep-compare-effect'

export type ImmutableTableQueryResult = {
  /** The ID of the table parsed from the SQL query */
  entityId: string
  /** The version number of the table parsed from the SQL query */
  versionNumber?: number
  getInitQueryRequest: () => QueryBundleRequest
  getLastQueryRequest: () => QueryBundleRequest
  setQuery: (
    queryRequest:
      | QueryBundleRequest
      | ((lastQueryRequest: QueryBundleRequest) => QueryBundleRequest),
  ) => void
  pageSize: number
  /** The current page of results. The first page is `1` */
  currentPage: number
  setPageSize: (pageSize: number) => void
  /** pageNumber is 1-indexed */
  goToPage: (pageNumber: number) => void
  /** Resets the query to the initial state, clearing all user-specified filters */
  resetQuery: () => void
  /** Removes a particular selected facet from the query */
  removeSelectedFacet: (facet: FacetColumnRequest) => void
  /** Removes a particular value from a selected facet. If the value is the last value in the FacetColumnRequest, the selected facet will be removed. */
  removeValueFromSelectedFacet: (
    facet: FacetColumnRequest,
    value: string,
  ) => void
  /** Removes a particular QueryFilter from the query */
  removeQueryFilter: (filter: QueryFilter) => void
  /** Removes a particular value from a QueryFilter. If the value is the last value in the filter, the filter will be removed. */
  removeValueFromQueryFilter: (filter: QueryFilter, value: string) => void

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
}

/**
 * Custom hook that maintains and manages the state of a Synapse Table query.
 * @param options
 * @returns
 */
export default function useImmutableTableQuery(
  options: UseImmutableTableQueryOptions,
): ImmutableTableQueryResult {
  const {
    initQueryRequest,
    componentIndex = 0,
    shouldDeepLink = false,
    onQueryChange,
  } = options

  const [lastQueryRequest, setLastQueryRequest] =
    useState<QueryBundleRequest>(initQueryRequest)

  /**
   * Inspect the URL on mount to see if we have a particular query request that we must show.
   */
  useEffect(() => {
    const query = DeepLinkingUtils.getQueryRequestFromLink(
      'QueryWrapper',
      componentIndex,
    )
    if (query) {
      setLastQueryRequest(query)
    }
  }, [componentIndex])

  /**
   * Pass down a deep clone (so no side effects on the child's part) of the
   * last query request made
   *
   * @returns
   * @memberof QueryWrapper
   */
  const getLastQueryRequest = useCallback(() => {
    return cloneDeep(lastQueryRequest)
  }, [lastQueryRequest])

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

  /**
   * Execute the given query request, updating all the data in the QueryContext to match the new query
   * @param {*} queryRequest Query request as specified by
   *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
   */
  const setQuery = useCallback(
    (
      queryRequest:
        | QueryBundleRequest
        | ((lastQueryRequest: QueryBundleRequest) => QueryBundleRequest),
    ): void => {
      let newQueryRequest: QueryBundleRequest
      if (typeof queryRequest === 'function') {
        newQueryRequest = queryRequest(getLastQueryRequest())
      } else {
        newQueryRequest = queryRequest
      }

      // Clone the query request before storing it in state, in case the original is mutated
      const clonedQueryRequest = cloneDeep(newQueryRequest)
      setLastQueryRequest(clonedQueryRequest)

      if (clonedQueryRequest.query) {
        const clonedQueryJson = JSON.stringify(clonedQueryRequest.query)
        if (shouldDeepLink) {
          const encodedQuery = encodeURIComponent(clonedQueryJson)
          DeepLinkingUtils.updateUrlWithNewSearchParam(
            'QueryWrapper',
            componentIndex,
            encodedQuery,
          )
        }
        if (onQueryChange) {
          onQueryChange(clonedQueryJson)
        }
      }
    },
    [componentIndex, getLastQueryRequest, onQueryChange, shouldDeepLink],
  )

  const { entityId, versionNumber } = useMemo(
    () => parseEntityIdAndVersionFromSqlStatement(lastQueryRequest.query.sql)!,
    [lastQueryRequest.query.sql],
  )

  const pageSize = lastQueryRequest.query.limit ?? DEFAULT_PAGE_SIZE
  const currentPage = Math.ceil(
    ((lastQueryRequest.query.offset ?? 0) + Number(pageSize)) / pageSize,
  )

  const setPageSize = useCallback(
    (pageSize: number) => {
      setQuery(currentQuery => {
        currentQuery.query.limit = pageSize
        return currentQuery
      })
    },
    [setQuery],
  )

  const goToPage = useCallback(
    (pageNumber: number) => {
      setQuery(currentQuery => {
        currentQuery.query.offset = (pageNumber - 1) * pageSize
        return currentQuery
      })
    },
    [pageSize, setQuery],
  )

  const resetQuery = useCallback(() => {
    setQuery(initQueryRequest)
  }, [initQueryRequest, setQuery])

  /* If the initial query changes, then reset the query to match the new prop */
  useDeepCompareEffect(() => {
    if (lastQueryRequest != initQueryRequest) {
      resetQuery()
    }
  }, [initQueryRequest])

  const removeSelectedFacet = useCallback(
    (facetColumnRequest: FacetColumnRequest) => {
      setQuery(currentQuery => {
        currentQuery.query.selectedFacets = (
          currentQuery.query.selectedFacets ?? []
        ).filter(facet => {
          // Use lodash for deep comparison
          return !isEqual(facet, facetColumnRequest)
        })
        return currentQuery
      })
    },
    [setQuery],
  )

  const removeValueFromSelectedFacet = useCallback(
    (facet: FacetColumnRequest, value: string) => {
      setQuery(currentQuery => {
        currentQuery.query.selectedFacets = (
          currentQuery.query.selectedFacets ?? []
        )
          // Modify the requested filter
          .map(facetColumnRequest => {
            if (
              isFacetColumnValuesRequest(facetColumnRequest) &&
              isEqual(facetColumnRequest, facet)
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
      })
    },
    [setQuery],
  )

  const removeQueryFilter = useCallback(
    (queryFilter: QueryFilter) => {
      setQuery(currentQuery => {
        currentQuery.query.additionalFilters = (
          currentQuery.query.additionalFilters ?? []
        ).filter(qf => {
          // Use lodash for deep comparison
          return !isEqual(qf, queryFilter)
        })
        return currentQuery
      })
    },
    [setQuery],
  )

  const removeValueFromQueryFilter = useCallback(
    (queryFilter: QueryFilter, value: string) => {
      setQuery(currentQuery => {
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
    [setQuery],
  )

  return {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
    pageSize,
    currentPage,
    setPageSize,
    goToPage,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
  }
}
