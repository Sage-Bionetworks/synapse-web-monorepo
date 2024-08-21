import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useQueryContext } from '../QueryContext'
import { NoContentPlaceholderType } from '../SynapseTable'
import { unCamelCase } from '../../utils/functions/unCamelCase'
import { getDisplayValue } from '../../utils/functions/getDataFromFromStorage'
import useMutuallyExclusiveState from '../../utils/hooks/useMutuallyExclusiveState'
import NoContentPlaceholderComponent from './NoContentPlaceholder'
import { useQuery } from '@tanstack/react-query'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from './QueryVisualizationContext'

type ColumnOrFacetHelpConfig = {
  /** Text that describes the column or facet */
  helpText: string
  /** The name of the column for which the markdown applies */
  columnName: string
  /** The JSON path matching a described JSON Column facet */
  jsonPath?: string
}

export type QueryVisualizationWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  rgbIndex?: number
  /** The singular word to use to describe a what a row represents (e.g. "file"). Defaults to "result" */
  unitDescription?: string
  /** Mapping from column name to the name that should be shown for the column */
  columnAliases?: Record<string, string>
  visibleColumnCount?: number
  hiddenColumns?: string[]
  defaultShowPlots?: boolean
  defaultShowSearchBar?: boolean
  showLastUpdatedOn?: boolean
  /** Default is INTERACTIVE */
  noContentPlaceholderType?: NoContentPlaceholderType
  isRowSelectionVisible?: boolean
  /** The set of columns that defines a uniqueness constraint on the table for the purposes of filtering based on row selection.
   * Note that Synapse tables have no internal concept of a primary key.
   */
  rowSelectionPrimaryKey?: string[]
  /* Look for additional filters using the given key.  If not provided, the entity ID will be used. */
  additionalFiltersSessionStorageKey?: string
  /** Configuration to add a help popover to each corresponding column header */
  helpConfiguration?: ColumnOrFacetHelpConfig[]
  hasCustomPlots?: boolean
}

/**
 * QueryVisualizationWrapper manages UI state for components that query tables in Synapse. That state can be accessed
 * or updated using QueryVisualizationContext. A QueryVisualizationWrapper must be used within a QueryWrapper.
 */
export function QueryVisualizationWrapper(
  props: QueryVisualizationWrapperProps,
) {
  const {
    noContentPlaceholderType = NoContentPlaceholderType.INTERACTIVE,
    defaultShowSearchBar = false,
    defaultShowPlots = true,
    unitDescription = 'result',
    helpConfiguration,
    hasCustomPlots = false,
    visibleColumnCount = Infinity,
  } = props

  const columnAliases = useMemo(
    () => props.columnAliases ?? {},
    [props.columnAliases],
  )

  const {
    getCurrentQueryRequest,
    hasFacetedSelectColumn,
    hasResettableFilters,
    rowDataQueryOptions,
    queryMetadataQueryOptions,
  } = useQueryContext()
  const { data: queryMetadata } = useQuery(queryMetadataQueryOptions)

  // Get the selectColumns from either query so that creating the context isn't bottlenecked by one or the other
  // Use the previous result as placeholder data so we don't reset the selectColumns unless they have actually changed.
  const { data: selectColumnsFromRowData } = useQuery({
    ...rowDataQueryOptions,
    select: data => data.responseBody?.queryResult?.queryResults.headers,
    placeholderData: prevData => prevData,
  })
  const { data: selectColumnsFromMetadata } = useQuery({
    ...queryMetadataQueryOptions,
    select: data => data.responseBody?.selectColumns,
    placeholderData: prevData => prevData,
  })
  // We deep-compare-memoize the selectColumns so we don't reset visible columns if the reference changes, but not the contents (e.g. on page change)
  const selectColumns = useDeepCompareMemoize(
    selectColumnsFromRowData ?? selectColumnsFromMetadata ?? [],
  )

  const [showSqlEditor, setShowSqlEditor] = useState(false)
  const [showPlots, setShowPlots] = useState(defaultShowPlots)
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(true)
  const [showFacetFilter, setShowFacetFilter] = useState(true)

  // The search bar and download confirmation should not be shown at the same time.
  const [
    showSearchBar,
    setShowSearchBar,
    showDownloadConfirmation,
    setShowDownloadConfirmation,
  ] = useMutuallyExclusiveState(defaultShowSearchBar, false)

  const [isShowingExportToCavaticaModal, setIsShowingExportToCavaticaModal] =
    useState<boolean>(false)

  const [visibleColumns, setVisibleColumns] = useState<string[]>([])

  const lastQueryRequest = useMemo(
    () => getCurrentQueryRequest(),
    [getCurrentQueryRequest],
  )

  useEffect(() => {
    // SWC-6030: If sql changes, reset what columns are visible
    setVisibleColumns(
      selectColumns.slice(0, visibleColumnCount).map(el => el.name),
    )
  }, [selectColumns, lastQueryRequest.query.sql, visibleColumnCount])

  const getColumnDisplayName = useCallback(
    (columnName: string, jsonPath?: string) => {
      // SWC-5982: if force-display-original-column-names is set, then just return the string
      const forceDisplayOriginalColumnName =
        localStorage.getItem('force-display-original-column-names') === 'true'

      if (!columnName || (forceDisplayOriginalColumnName && !jsonPath)) {
        return columnName
      }
      if (columnAliases[columnName]) {
        return columnAliases[columnName]
      }
      if (jsonPath) {
        const columnModel = queryMetadata?.columnModels?.find(
          cm => cm.name === columnName,
        )
        if (columnModel?.jsonSubColumns) {
          const jsonSubColumn = columnModel.jsonSubColumns.find(
            jsc => jsc.jsonPath === jsonPath,
          )
          if (jsonSubColumn) {
            return jsonSubColumn.name
          }
        }
      }
      return unCamelCase(columnName)
    },
    [columnAliases, queryMetadata?.columnModels],
  )

  const getHelpText = useCallback(
    (columnName: string, jsonPath?: string): string | undefined => {
      if (Array.isArray(helpConfiguration)) {
        const helpConfig = helpConfiguration.find(
          config =>
            config.columnName === columnName && config.jsonPath === jsonPath,
        )
        return helpConfig?.helpText
      }
      return undefined
    },
    [helpConfiguration],
  )

  const NoContentPlaceholder = useCallback(
    () => (
      <NoContentPlaceholderComponent
        type={noContentPlaceholderType}
        hasResettableFilters={hasResettableFilters}
      />
    ),
    [noContentPlaceholderType, hasResettableFilters],
  )

  const context: QueryVisualizationContextType = useMemo(
    () => ({
      columnsToShowInTable: visibleColumns,
      setColumnsToShowInTable: setVisibleColumns,
      rgbIndex: props.rgbIndex,
      unitDescription: unitDescription,
      showLastUpdatedOn: props.showLastUpdatedOn,
      getColumnDisplayName,
      getDisplayValue,
      getHelpText,
      NoContentPlaceholder,
      isShowingExportToCavaticaModal,
      setIsShowingExportToCavaticaModal,
      showFacetFilter: hasFacetedSelectColumn ? showFacetFilter : false,
      setShowFacetFilter,
      showSearchBar,
      setShowSearchBar,
      showDownloadConfirmation,
      setShowDownloadConfirmation,
      showSqlEditor,
      setShowSqlEditor,
      showPlots: hasCustomPlots || hasFacetedSelectColumn ? showPlots : false,
      setShowPlots,
      showCopyToClipboard,
      setShowCopyToClipboard,
    }),
    [
      NoContentPlaceholder,
      getColumnDisplayName,
      getHelpText,
      hasFacetedSelectColumn,
      isShowingExportToCavaticaModal,
      props.rgbIndex,
      props.showLastUpdatedOn,
      setShowDownloadConfirmation,
      setShowSearchBar,
      showCopyToClipboard,
      showDownloadConfirmation,
      showFacetFilter,
      showPlots,
      showSearchBar,
      showSqlEditor,
      unitDescription,
      visibleColumns,
      hasCustomPlots,
    ],
  )
  /**
   * Render the children without any formatting
   */
  const { children } = props
  return (
    <QueryVisualizationContextProvider queryVisualizationContext={context}>
      {children}
    </QueryVisualizationContextProvider>
  )
}
