import { LockedColumn } from '@/utils/types/LockedColumn'
import { hasResettableFilters as hasResettableFiltersUtil } from '@/utils/functions/queryUtils'
import useImmutableTableQuery from '@/utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { Provider, useSetAtom } from 'jotai'
import noop from 'lodash-es/noop'
import { PropsWithChildren, useCallback, useEffect, useMemo } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { ConfirmationDialog } from '../ConfirmationDialog'
import {
  CombineRangeFacetConfig,
  QueryContextProvider,
  QueryContextType,
} from '../QueryContext/QueryContext'
import { useTableQueryUseQueryOptions } from './TableQueryUseQueryOptions'
import {
  isRowSelectionUIFloatingAtom,
  isRowSelectionVisibleAtom,
  rowSelectionPrimaryKeyAtom,
  selectedRowsAtom,
  useHasSelectedRowsAtomValue,
} from './TableRowSelectionState'
import useComputeRowSelectionPrimaryKey from './useComputeRowSelectionPrimaryKey'
import useHasFacetedSelectColumn from './useHasFacetedSelectColumn'
import useOnQueryDataChange from './useOnQueryDataChange'
import { SessionInitializedGuard } from '@/utils/AppUtils/session/SessionInitializedGuard'

export type QueryWrapperProps = PropsWithChildren<{
  initQueryRequest: QueryBundleRequest
  componentIndex?: number //used for deep linking
  shouldDeepLink?: boolean
  onQueryChange?: (newQueryJson: string) => void
  /** Called when the query result rows change */
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
  /** If provided, will use the value in this column instead of the rowID for the access column, download column, etc */
  fileIdColumnName?: string
  fileNameColumnName?: string
  /** If provided, will use the value in this column instead of the row version number for the access column, download column, etc */
  fileVersionColumnName?: string
}>

/**
 * Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using
 * either `useQueryContext` or `QueryContextConsumer`.
 */
function QueryWrapperInternal(props: QueryWrapperProps) {
  return (
    <SessionInitializedGuard>
      <QueryWrapperInternalWithSession {...props} />
    </SessionInitializedGuard>
  )
}

/**
 * Internal component that renders after session is initialized
 */
function QueryWrapperInternalWithSession(props: QueryWrapperProps) {
  const {
    initQueryRequest,
    onQueryChange,
    onQueryResultBundleChange = noop,
    lockedColumn,
    componentIndex,
    shouldDeepLink,
    onViewSharingSettingsClicked,
    isRowSelectionVisible: isRowSelectionVisibleFromProps = false,
    isRowSelectionUIFloating: isRowSelectionUIFloatingFromProps = true,
    rowSelectionPrimaryKey: rowSelectionPrimaryKeyFromProps,
    isInfinite = false,
    combineRangeFacetConfig,
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
  } = props

  const hasSelectedRows = useHasSelectedRowsAtomValue()

  const immutableTableQueryResult = useImmutableTableQuery({
    initQueryRequest,
    shouldDeepLink,
    componentIndex,
    onQueryChange,
    requireConfirmationOnChange: hasSelectedRows,
  })
  const {
    entityId = '',
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
    resetDebounceTimer,
    currentPage,
    goToPage,
    pageSize,
    setPageSize,
  } = immutableTableQueryResult

  const lastQueryRequest = useMemo(() => {
    return getCurrentQueryRequest()
  }, [getCurrentQueryRequest])

  const {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  } = useTableQueryUseQueryOptions(lastQueryRequest, lockedColumn)

  const hasFacetedSelectColumn = useHasFacetedSelectColumn(
    queryMetadataQueryOptions,
  )

  const hasResettableFilters = useMemo(() => {
    const request = getCurrentQueryRequest()
    return hasResettableFiltersUtil(request.query, lockedColumn)
  }, [getCurrentQueryRequest, lockedColumn])

  const setIsRowSelectionVisible = useSetAtom(isRowSelectionVisibleAtom)
  useEffect(() => {
    setIsRowSelectionVisible(isRowSelectionVisibleFromProps)
  }, [isRowSelectionVisibleFromProps, setIsRowSelectionVisible])

  const setIsRowSelectionUIFloating = useSetAtom(isRowSelectionUIFloatingAtom)
  useEffect(() => {
    setIsRowSelectionUIFloating(isRowSelectionUIFloatingFromProps)
  }, [isRowSelectionUIFloatingFromProps, setIsRowSelectionUIFloating])

  const rowSelectionPrimaryKey = useComputeRowSelectionPrimaryKey({
    entityId,
    versionNumber,
    rowSelectionPrimaryKeyFromProps,
    queryMetadataQueryOptions,
  })
  const setRowSelectionPrimaryKey = useSetAtom(rowSelectionPrimaryKeyAtom)
  useEffect(() => {
    setRowSelectionPrimaryKey(rowSelectionPrimaryKey)
  }, [rowSelectionPrimaryKey, setRowSelectionPrimaryKey])

  const setSelectedRows = useSetAtom(selectedRowsAtom)
  const onChangeCallback = useCallback(
    (data: QueryResultBundle) =>
      onQueryResultBundleChange(JSON.stringify(data)),
    [onQueryResultBundleChange],
  )
  // Track changes to the query row data and propagate to callback
  useOnQueryDataChange({
    queryBundleRequest: getCurrentQueryRequest(),
    onChange: onChangeCallback,
  })

  const context: QueryContextType = useDeepCompareMemoize({
    isInfinite,
    entityId,
    versionNumber,
    nextQueryRequest,
    currentQueryRequest,
    getCurrentQueryRequest: getCurrentQueryRequest,
    getInitQueryRequest,
    executeQueryRequest: setQuery,
    hasFacetedSelectColumn,
    hasResettableFilters,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    onViewSharingSettingsClicked,
    addValueToSelectedFacet,
    combineRangeFacetConfig,
    setRangeFacetValue,
    resetDebounceTimer,
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
    currentPage,
    goToPage,
    pageSize,
    setPageSize,
    lockedColumn,
    fileIdColumnName,
    fileVersionColumnName,
    fileNameColumnName,
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
      <QueryWrapperInternal {...props} />
    </Provider>
  )
}
