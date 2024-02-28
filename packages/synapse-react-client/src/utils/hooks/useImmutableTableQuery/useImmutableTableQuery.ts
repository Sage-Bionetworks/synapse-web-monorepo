import React, { useCallback, useEffect, useMemo } from 'react'
import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, isEqual } from 'lodash-es'
import * as DeepLinkingUtils from '../../functions/deepLinkingUtils'
import { DEFAULT_PAGE_SIZE } from '../../SynapseConstants'
import { parseEntityIdAndVersionFromSqlStatement } from '../../functions/SqlFunctions'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { removeEmptyQueryParams } from '../../functions/queryUtils'
import { ReadonlyDeep } from 'type-fest'
import { UniqueFacetIdentifier } from '../../types/UniqueFacetIdentifier'
import {
  QueryChangeCommitOptions,
  useTableQueryReducer,
} from './useTableQueryReducer'

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
    facet: UniqueFacetIdentifier,
    value: string,
    commitOptions?: QueryChangeCommitOptions,
  ) => void
  /** Removes a particular selected facet from the query */
  removeSelectedFacet: (
    facet: UniqueFacetIdentifier | UniqueFacetIdentifier[],
  ) => void
  /** Removes a particular value from a selected facet. If the value is the last value in the FacetColumnRequest, the selected facet will be removed. */
  removeValueFromSelectedFacet: (
    facet: UniqueFacetIdentifier,
    value: string,
    commitOptions?: QueryChangeCommitOptions,
  ) => void
  setRangeFacetValue: (
    facet: UniqueFacetIdentifier,
    min?: string,
    max?: string,
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
export const DEBOUNCE_DELAY_MS = 750

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
    currentQueryRequest,
    nextQueryRequest,
    isConfirmingChange,
    dispatch,
  } = useTableQueryReducer(
    initQueryRequest,
    requireConfirmationOnChange,
    onQueryChange,
  )

  const onConfirmChange = useCallback(() => {
    dispatch({ type: 'confirmChanges' })
  }, [dispatch])

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
      dispatch({
        type: 'setQuery',
        queryOrUpdater: queryRequest,
        commitOptions,
      })
    },
    [dispatch],
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

  const onCancelChange = useCallback(() => {
    dispatch({ type: 'cancelChanges' })
  }, [dispatch])

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
      dispatch({ type: 'setPageSize', pageSize })
    },
    [dispatch],
  )

  const goToPage = useCallback(
    (pageNumber: number) => {
      dispatch({ type: 'goToPage', pageNumber })
    },
    [dispatch],
  )

  const resetQuery = useCallback(() => {
    dispatch({
      type: 'resetQuery',
    })
  }, [dispatch])

  /* If the initial query changes, then reset the query to match the new prop */
  useDeepCompareEffect(() => {
    if (currentQueryRequest != initQueryRequest) {
      resetQuery()
    }
  }, [initQueryRequest])

  const addValueToSelectedFacet = useCallback(
    (
      facet: UniqueFacetIdentifier,
      value: string,
      commitOptions?: QueryChangeCommitOptions,
    ) => {
      dispatch({
        type: 'addValueToSelectedFacet',
        facet: facet,
        value: value,
        commitOptions: commitOptions,
      })
    },
    [dispatch],
  )

  const setRangeFacetValue = useCallback(
    (
      facet: UniqueFacetIdentifier,
      min?: string,
      max?: string,
      commitOptions?: QueryChangeCommitOptions,
    ) => {
      dispatch({
        type: 'setRangeFacetValue',
        facet,
        min,
        max,
        commitOptions,
      })
    },
    [dispatch],
  )

  const removeSelectedFacet = useCallback(
    (facetsToRemove: UniqueFacetIdentifier | UniqueFacetIdentifier[]) => {
      dispatch({
        type: 'removeSelectedFacet',
        facetsToRemove: facetsToRemove,
      })
    },
    [dispatch],
  )

  const removeValueFromSelectedFacet = useCallback(
    (
      facet: UniqueFacetIdentifier,
      value: string,
      commitOptions?: QueryChangeCommitOptions,
    ) => {
      dispatch({
        type: 'removeValueFromSelectedFacet',
        facet,
        value,
        commitOptions,
      })
    },
    [dispatch],
  )

  const removeQueryFilter = useCallback(
    (queryFilter: QueryFilter) => {
      dispatch({
        type: 'removeQueryFilter',
        queryFilter,
      })
    },
    [dispatch],
  )

  const removeValueFromQueryFilter = useCallback(
    (queryFilter: QueryFilter, value: string) => {
      dispatch({
        type: 'removeValueFromQueryFilter',
        queryFilter,
        value,
      })
    },
    [dispatch],
  )
  const commitChanges = useCallback(() => {
    dispatch({ type: 'commitChanges' })
  }, [dispatch])

  return {
    entityId,
    commitChanges,
    currentQueryRequest,
    nextQueryRequest,
    versionNumber,
    getInitQueryRequest,
    getCurrentQueryRequest,
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
    isConfirmingChange,
    onConfirmChange,
    onCancelChange,
    addValueToSelectedFacet,
    setRangeFacetValue,
  }
}
