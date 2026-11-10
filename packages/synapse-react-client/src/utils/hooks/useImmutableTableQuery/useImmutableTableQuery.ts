import { UniqueFacetIdentifier } from '@/utils/types/UniqueFacetIdentifier'
import {
  QueryBundleRequest,
  QueryFilter,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, isEqual } from 'lodash-es'
import * as React from 'react'
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from 'react'
import { ReadonlyDeep } from 'type-fest'
import useDeepCompareEffect from 'use-deep-compare-effect'
import * as DeepLinkingUtils from '../../functions/deepLinkingUtils'
import { removeEmptyQueryParams } from '../../functions/queryUtils'
import { useConstant } from '../useConstant'
import { parseEntityIdAndVersionFromSqlStatement } from '../../functions/SqlFunctions'
import { DEFAULT_PAGE_SIZE } from '../../SynapseConstants'
import {
  QueryChangeCommitOptions,
  useTableQueryReducer,
} from './useTableQueryReducer'

export type ImmutableTableQueryResult = {
  /** The ID of the table parsed from the SQL query */
  entityId?: string
  /** The version number of the table parsed from the SQL query */
  versionNumber?: number
  /** The current query request, which is passed on to the server for results */
  currentQueryRequest: ReadonlyDeep<QueryBundleRequest>
  /** The next (uncommitted) query request. This will become the current query request when commitChanges is called, or the configured debounced timer elapses. */
  nextQueryRequest: ReadonlyDeep<QueryBundleRequest>
  /** Resets the debounce timer to delay committing changes in `nextQueryRequest` */
  resetDebounceTimer: () => void
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
   * True while a query saved in the URL is being restored (only when `shouldDeepLink` is true and the URL holds a query
   * for this component). Until then, the current query is the initial query.
   */
  isRestoringQueryFromUrl: boolean

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

// The saved query is read once, so there is nothing to subscribe to.
const subscribeToNothing = () => () => {}
/**
 * Utility to synchronize the URL with the current query request. Synchronization only occurs if `shouldDeepLink` is true.
 * @param shouldDeepLink whether the query should be synchronized with the URL
 * @param componentIndex the index of the component to synchronize with the URL - essential if multiple components to synchronize are on the page
 * @param setQuery - callback used to update the current query
 * @param initQueryRequest - the initial query request passed via props
 * @param currentQueryRequest - the query request that is currently used
 * @returns whether a query saved in the URL is still being restored
 */
function useSynchronizeQueryWithUrl(
  shouldDeepLink: boolean,
  componentIndex: number,
  setQuery: (
    queryRequest: React.SetStateAction<QueryBundleRequest>,
    commitOptions?: QueryChangeCommitOptions,
  ) => void,
  initQueryRequest: QueryBundleRequest,
  currentQueryRequest: QueryBundleRequest,
): boolean {
  // Captured on the first client render, so a page without a saved query never waits for the restore. The URL sync
  // below rewrites the param, but only the URL the page was opened with matters.
  const hasQueryInUrlOnMount = useConstant(
    () =>
      typeof window !== 'undefined' &&
      shouldDeepLink &&
      DeepLinkingUtils.hasQueryRequestInLink(
        componentIndex,
        window.location.search,
      ),
  )
  // A prerendered page has no URL to read, so it renders (and hydrates) as if there were no saved query. React then
  // re-renders with the client value.
  const hasQueryInUrl = useSyncExternalStore(
    subscribeToNothing,
    () => hasQueryInUrlOnMount,
    () => false,
  )
  const [isQueryFromUrlApplied, setIsQueryFromUrlApplied] = useState(false)
  // Read from the captured value, not the hydration snapshot, so the URL is also left alone while hydrating.
  const isRestorePending = hasQueryInUrlOnMount && !isQueryFromUrlApplied

  /**
   * Inspect the URL on mount to see if we have a particular query request that we must show.
   */
  useEffect(() => {
    // Only run this effect if deep linking is enabled
    if (!shouldDeepLink) {
      return
    }
    // StrictMode runs this effect twice; only the restore that is still mounted may apply its result.
    let isCancelled = false
    void DeepLinkingUtils.getQueryRequestFromLink(
      componentIndex,
      initQueryRequest.query,
    ).then(queryRequestFromLink => {
      if (isCancelled) {
        return
      }
      if (queryRequestFromLink?.query) {
        setQuery(prevState => ({
          ...prevState,
          ...queryRequestFromLink,
          query: {
            ...prevState.query,
            ...queryRequestFromLink.query,
          },
        }))
      }
      setIsQueryFromUrlApplied(true)
    })
    return () => {
      isCancelled = true
    }
    // should only run on mount, or if the component index changes
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [componentIndex])

  // If `shouldDeepLink` is true, synchronize the URL
  useEffect(() => {
    // Until the saved query is applied, the current query is the initial one: writing it would remove the saved query
    // from the URL before a remount (e.g. under StrictMode) could read it.
    if (!shouldDeepLink || isRestorePending) {
      return
    }
    if (isEqual(initQueryRequest, currentQueryRequest)) {
      void DeepLinkingUtils.updateUrlWithNewSearchParam(
        DeepLinkingUtils.QUERY_SEARCH_PARAM_PREFIX,
        componentIndex,
        null,
        null,
      ).catch(error => {
        console.error('Failed to update URL with search param:', error)
      })
    } else {
      void DeepLinkingUtils.updateUrlWithNewSearchParam(
        DeepLinkingUtils.QUERY_SEARCH_PARAM_PREFIX,
        componentIndex,
        currentQueryRequest.query,
        initQueryRequest.query,
      ).catch(error => {
        console.error('Failed to update URL with search param:', error)
      })
    }
    // Clean up the URL param when this component unmounts or deep linking is disabled
    return () => {
      void DeepLinkingUtils.updateUrlWithNewSearchParam(
        DeepLinkingUtils.QUERY_SEARCH_PARAM_PREFIX,
        componentIndex,
        null,
        initQueryRequest.query,
      )
    }
  }, [
    componentIndex,
    currentQueryRequest,
    initQueryRequest,
    shouldDeepLink,
    isRestorePending,
  ])

  return hasQueryInUrl && !isQueryFromUrlApplied
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

  const isRestoringQueryFromUrl = useSynchronizeQueryWithUrl(
    shouldDeepLink,
    componentIndex,
    setQuery,
    initQueryRequest,
    currentQueryRequest,
  )

  const onCancelChange = useCallback(() => {
    dispatch({ type: 'cancelChanges' })
  }, [dispatch])

  const { entityId, versionNumber } = useMemo(
    () =>
      parseEntityIdAndVersionFromSqlStatement(currentQueryRequest.query.sql),
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

  const resetDebounceTimer = useCallback(() => {
    dispatch({ type: 'resetDebounce' })
  }, [dispatch])

  return {
    entityId,
    commitChanges,
    resetDebounceTimer,
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
    isRestoringQueryFromUrl,
    addValueToSelectedFacet,
    setRangeFacetValue,
  }
}
