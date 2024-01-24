import React, { useCallback, useEffect, useMemo } from 'react'
import {
  useDeepCompareEffectNoCheck,
  useDeepCompareMemoize,
} from 'use-deep-compare-effect'
import {
  hasResettableFilters as hasResettableFiltersUtil,
  isFacetAvailable,
  removeLockedColumnFromFacetData,
} from '../../utils/functions/queryUtils'
import { useGetEntity } from '../../synapse-queries'
import {
  QueryBundleRequest,
  QueryResultBundle,
  Table,
} from '@sage-bionetworks/synapse-types'
import {
  CombineRangeFacetConfig,
  InfiniteQueryContextType,
  LockedColumn,
  PaginatedQueryContextType,
  QueryContextProvider,
} from '../QueryContext/QueryContext'
import useImmutableTableQuery from '../../utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import { ConfirmationDialog } from '../ConfirmationDialog'
import {
  hasSelectedRowsAtom,
  isRowSelectionUIFloatingAtom,
  isRowSelectionVisibleAtom,
  rowSelectionPrimaryKeyAtom,
  selectedRowsAtom,
} from './TableRowSelectionState'
import useQueryWrapperData from './useQueryWrapperData'
import { useQueryWrapperPaginationControls } from './useQueryWrapperPaginationControls'
import { getDefaultPrimaryKey } from '../SynapseTable/SynapseTableUtils'
import { atom, Provider, useAtomValue, useSetAtom } from 'jotai'

export type QueryWrapperProps = React.PropsWithChildren<{
  initQueryRequest: QueryBundleRequest
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  onQueryResultBundleChange?: (newQueryResultBundleJson: string) => void
  lockedColumn?: LockedColumn
  onViewSharingSettingsClicked?: (benefactorId: string) => void
  isRowSelectionVisible?: boolean
  /** The set of columns that defines a uniqueness constraint on the table for the purposes of filtering based on row selection.
   * Note that Synapse tables have no internal concept of a primary key.
   */
  rowSelectionPrimaryKey?: string[]
  /** By default, the row selection UI will float at the bottom of the viewport.  Set to false to make it inline */
  isRowSelectionUIFloating?: boolean
  isInfinite?: boolean
  combineRangeFacetConfig?: CombineRangeFacetConfig
}>

/** The query results, which will be undefined while initially fetching a new bundle, but will not be unloaded when fetching new pages */
export const tableQueryDataAtom = atom<QueryResultBundle | undefined>(undefined)

/** The entity being queried. Will be undefined while initially fetching */
export const tableQueryEntityAtom = atom<Table | undefined>(undefined)
/** Returns true when loading a brand-new query result bundle. Will not be true when just loading the next page of query results. */
export const isLoadingNewBundleAtom = atom<boolean>(false)

/**
 * A column name may be "locked" so that it is both (1) not shown to the user that the filter is active, and (2) not modifiable by the user.
 * For example, we may show only the data matching a particular facet value on a Details Page without implying that the shown data is part of a larger table.
 * The presence of a locked filter will result in a client-side modification of the active query and result bundle data.
 */
export const lockedColumnAtom = atom<LockedColumn | undefined>(undefined)

/**
 * Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using
 * either `useQueryContext` or `QueryContextConsumer`.
 */
function _QueryWrapper(props: QueryWrapperProps) {
  const {
    initQueryRequest,
    onQueryChange,
    onQueryResultBundleChange,
    lockedColumn,
    componentIndex,
    shouldDeepLink,
    onViewSharingSettingsClicked,
    isRowSelectionVisible: isRowSelectionVisibleFromProps = false,
    isRowSelectionUIFloating: isRowSelectionUIFloatingFromProps = true,
    rowSelectionPrimaryKey: rowSelectionPrimaryKeyFromProps,
    isInfinite = false,
    combineRangeFacetConfig,
  } = props

  const hasSelectedRows = useAtomValue(hasSelectedRowsAtom)

  const immutableTableQueryResult = useImmutableTableQuery({
    initQueryRequest,
    shouldDeepLink,
    componentIndex,
    onQueryChange,
    requireConfirmationOnChange: hasSelectedRows,
  })
  const {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getCurrentQueryRequest,
    setQuery,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
    onConfirmChange,
    isConfirmingChange,
    onCancelChange,
    nextQueryRequest,
    currentQueryRequest,
    addValueToSelectedFacet,
    setRangeFacetValue,
  } = immutableTableQueryResult

  const lastQueryRequest = useMemo(() => {
    return getCurrentQueryRequest()
  }, [getCurrentQueryRequest])

  const queryWrapperData = useQueryWrapperData(lastQueryRequest, isInfinite)

  const { data, isLoadingNewBundle, error, currentAsyncStatus } =
    queryWrapperData

  const paginationControls = useQueryWrapperPaginationControls({
    immutableTableQueryResult,
    queryWrapperData,
    isInfinite,
  })

  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  // data is sometimes undefined, which useDeepCompareEffect doesn't like, so use useDeepCompareEffectNoCheck instead
  useDeepCompareEffectNoCheck(() => {
    if (data && onQueryResultBundleChange) {
      onQueryResultBundleChange(JSON.stringify(data))
    }
  }, [data, onQueryResultBundleChange])

  const isFacetsAvailable = data
    ? isFacetAvailable(data.facets, data.selectColumns)
    : true

  const setIsLoadingNewBundle = useSetAtom(isLoadingNewBundleAtom)
  useEffect(() => {
    setIsLoadingNewBundle(isLoadingNewBundle)
  }, [isLoadingNewBundle, setIsLoadingNewBundle])

  const setLockedColumn = useSetAtom(lockedColumnAtom)
  useEffect(() => {
    setLockedColumn(lockedColumn)
  }, [lockedColumn, setLockedColumn])

  /**
   * Remove a particular facet name (e.g. study) and all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedColumnFacetRemoved = useMemo(() => {
    return removeLockedColumnFromFacetData(data, lockedColumn)
  }, [data, lockedColumn])

  const setTableQueryData = useSetAtom(tableQueryDataAtom)
  useEffect(() => {
    setTableQueryData(dataWithLockedColumnFacetRemoved)
  }, [dataWithLockedColumnFacetRemoved, setTableQueryData])

  const setTableQueryEntityData = useSetAtom(tableQueryEntityAtom)
  useEffect(() => {
    setTableQueryEntityData(entity)
  }, [entity, setTableQueryEntityData])

  const hasResettableFilters = useMemo(() => {
    const request = getCurrentQueryRequest()
    return hasResettableFiltersUtil(request.query, lockedColumn)
  }, [getCurrentQueryRequest, lockedColumn])

  const getColumnModel = useCallback(
    (columnName: string) => {
      return data?.columnModels?.find(cm => cm.name === columnName) ?? null
    },
    [data?.columnModels],
  )

  const setIsRowSelectionVisible = useSetAtom(isRowSelectionVisibleAtom)
  useEffect(() => {
    setIsRowSelectionVisible(isRowSelectionVisibleFromProps)
  }, [isRowSelectionVisibleFromProps, setIsRowSelectionVisible])

  const setIsRowSelectionUIFloating = useSetAtom(isRowSelectionUIFloatingAtom)
  useEffect(() => {
    setIsRowSelectionUIFloating(isRowSelectionUIFloatingFromProps)
  }, [isRowSelectionUIFloatingFromProps, setIsRowSelectionUIFloating])

  const rowSelectionPrimaryKey = useMemo(() => {
    if (rowSelectionPrimaryKeyFromProps) {
      return rowSelectionPrimaryKeyFromProps
    } else {
      return getDefaultPrimaryKey(entity, data?.columnModels)
    }
  }, [data?.columnModels, entity, rowSelectionPrimaryKeyFromProps])

  const setRowSelectionPrimaryKey = useSetAtom(rowSelectionPrimaryKeyAtom)
  useEffect(() => {
    setRowSelectionPrimaryKey(rowSelectionPrimaryKey)
  }, [rowSelectionPrimaryKey, setRowSelectionPrimaryKey])

  const setSelectedRows = useSetAtom(selectedRowsAtom)

  const context: InfiniteQueryContextType | PaginatedQueryContextType =
    useDeepCompareMemoize({
      nextQueryRequest,
      currentQueryRequest,
      isLoadingNewBundle: isLoadingNewBundle,
      getCurrentQueryRequest: getCurrentQueryRequest,
      getInitQueryRequest,
      error: error,
      executeQueryRequest: setQuery,
      isFacetsAvailable,
      asyncJobStatus: currentAsyncStatus,
      hasResettableFilters,
      removeSelectedFacet,
      removeValueFromSelectedFacet,
      resetQuery,
      removeQueryFilter,
      removeValueFromQueryFilter,
      getColumnModel,
      onViewSharingSettingsClicked,
      addValueToSelectedFacet,
      combineRangeFacetConfig,
      setRangeFacetValue,
      ...paginationControls,
    })

  /**
   * Render the children without any formatting
   */
  const { children } = props
  return (
    <QueryContextProvider queryContext={context}>
      <ConfirmationDialog
        open={isConfirmingChange}
        title={'Change Query and Clear Selection?'}
        content={
          'Changing the current query will cause your current selection to be lost. Are you sure you want to proceed?'
        }
        confirmButtonProps={{
          children: 'Clear Selection and Update Query',
        }}
        onConfirm={() => {
          setSelectedRows([])
          onConfirmChange()
        }}
        onCancel={() => {
          onCancelChange()
        }}
      />
      {children}
    </QueryContextProvider>
  )
}

export function QueryWrapper(props: QueryWrapperProps) {
  // Wrap in a Jotai provider to ensure the Jotai atomic state is unique to this component tree
  // i.e. other instances of QueryWrapper will not share state with this instance
  return (
    <Provider>
      <_QueryWrapper {...props} />
    </Provider>
  )
}
