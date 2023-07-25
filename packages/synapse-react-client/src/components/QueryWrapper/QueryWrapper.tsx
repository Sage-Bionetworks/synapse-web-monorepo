import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect'
import {
  hasResettableFilters as hasResettableFiltersUtil,
  isFacetAvailable,
  removeLockedColumnFromFacetData,
} from '../../utils/functions/queryUtils'
import { useGetEntity } from '../../synapse-queries'
import { QueryBundleRequest, Table } from '@sage-bionetworks/synapse-types'
import {
  InfiniteQueryContextType,
  LockedColumn,
  PaginatedQueryContextType,
  QueryContextProvider,
} from '../QueryContext/QueryContext'
import useImmutableTableQuery from '../useImmutableTableQuery'
import { ConfirmationDialog } from '../ConfirmationDialog'
import useTableRowSelection from './useTableRowSelection'
import useQueryWrapperData from './useQueryWrapperData'
import { useQueryWrapperPaginationControls } from './useQueryWrapperPaginationControls'

export type QueryWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
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
  isInfinite?: boolean
}

/**
 * Component that manages the state of a Synapse table query. Data can be accessed via QueryContext using
 * either `useQueryContext` or `QueryContextConsumer`.
 */
export function QueryWrapper(props: QueryWrapperProps) {
  const {
    initQueryRequest,
    onQueryChange,
    onQueryResultBundleChange,
    lockedColumn,
    componentIndex,
    shouldDeepLink,
    onViewSharingSettingsClicked,
    isRowSelectionVisible: isRowSelectionVisibleFromProps = false,
    rowSelectionPrimaryKey: rowSelectionPrimaryKeyFromProps,
    isInfinite = false,
  } = props

  // Must store requireConfirmationOnChange in state to break dependency cycle between useImmutableTableQuery and useTableRowsSelection
  // TODO: consider combining these two hooks, or decoupling them in some other way
  const [requireConfirmationOnChange, setRequireConfirmationOnChange] =
    useState(false)

  const immutableTableQueryResult = useImmutableTableQuery({
    initQueryRequest,
    shouldDeepLink,
    componentIndex,
    onQueryChange,
    requireConfirmationOnChange,
  })
  const {
    entityId,
    versionNumber,
    getInitQueryRequest,
    getLastQueryRequest,
    setQuery,
    resetQuery,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    removeQueryFilter,
    removeValueFromQueryFilter,
    onConfirmChange,
    isConfirmingChange,
    onCancelChange,
  } = immutableTableQueryResult

  const lastQueryRequest = useMemo(() => {
    return getLastQueryRequest()
  }, [getLastQueryRequest])

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

  /**
   * Remove a particular facet name (e.g. study) and all possible values based on the parameter specified in the url
   * this is to remove the facet from the charts, search and filter.
   * @return data: QueryResultBundle
   */
  const dataWithLockedColumnFacetRemoved = useMemo(() => {
    return removeLockedColumnFromFacetData(data, lockedColumn)
  }, [data, lockedColumn])

  const hasResettableFilters = useMemo(() => {
    const request = getLastQueryRequest()
    return hasResettableFiltersUtil(request.query, lockedColumn)
  }, [getLastQueryRequest, lockedColumn])

  const getColumnModel = useCallback(
    (columnName: string) => {
      return data?.columnModels?.find(cm => cm.name === columnName) ?? null
    },
    [data?.columnModels],
  )

  const {
    isRowSelectionVisible,
    rowSelectionPrimaryKey,
    hasSelectedRows,
    selectedRows,
    setSelectedRows,
  } = useTableRowSelection({
    entity: entity,
    columnModels: data?.columnModels,
    isRowSelectionVisible: isRowSelectionVisibleFromProps,
    rowSelectionPrimaryKey: rowSelectionPrimaryKeyFromProps,
  })

  useEffect(() => {
    setRequireConfirmationOnChange(hasSelectedRows)
  }, [hasSelectedRows])

  const context: InfiniteQueryContextType | PaginatedQueryContextType = {
    data: dataWithLockedColumnFacetRemoved,
    isLoadingNewBundle: isLoadingNewBundle,
    getLastQueryRequest,
    getInitQueryRequest,
    error: error,
    entity,
    executeQueryRequest: setQuery,
    isFacetsAvailable,
    asyncJobStatus: currentAsyncStatus,
    hasResettableFilters,
    removeSelectedFacet,
    removeValueFromSelectedFacet,
    resetQuery,
    removeQueryFilter,
    removeValueFromQueryFilter,
    lockedColumn,
    getColumnModel,
    onViewSharingSettingsClicked,
    isRowSelectionVisible,
    rowSelectionPrimaryKey,
    hasSelectedRows,
    selectedRows,
    setSelectedRows,
    ...paginationControls,
  }

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
        confirmButtonText={'Clear Selection and Update Query'}
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
