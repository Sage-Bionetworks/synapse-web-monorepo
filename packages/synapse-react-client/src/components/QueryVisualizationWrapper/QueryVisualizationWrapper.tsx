import { getDisplayValue } from '@/utils/functions/getDataFromFromStorage'
import { unCamelCase } from '@/utils/functions/unCamelCase'
import useMutuallyExclusiveState from '@/utils/hooks/useMutuallyExclusiveState'
import { useQuery } from '@tanstack/react-query'
import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useQueryContext } from '../QueryContext'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { NoContentPlaceholderType } from '../NoContentPlaceholder/NoContentPlaceholderType'
import { ExternalAnalysisPlatform } from '../SynapseTable/export/ExternalAnalysisPlatformsConstants'
import NoContentPlaceholderComponent from '../NoContentPlaceholder/NoContentPlaceholder'
import {
  QueryVisualizationContextProvider,
  QueryVisualizationContextType,
} from './QueryVisualizationContext'

// By default, show no external analysis platforms.
const DEFAULT_ENABLED_ANALYSIS_PLATFORMS: ExternalAnalysisPlatform[] = []

type ColumnOrFacetHelpConfig = {
  /** Text that describes the column or facet */
  helpText: string
  /** The name of the column for which the markdown applies */
  columnName: string
  /** The JSON path matching a described JSON Column facet */
  jsonPath?: string
}

export type QueryVisualizationWrapperProps = {
  children: ReactNode | ReactNode[]
  rgbIndex?: number
  /** The singular word to use to describe a what a row represents (e.g. "file"). Defaults to "result" */
  unitDescription?: string
  /** Mapping from column name to the name that should be shown for the column */
  columnAliases?: Record<string, string>
  visibleColumnCount?: number
  hiddenColumns?: string[]
  defaultShowPlots?: boolean
  hideCopyToClipboard?: boolean
  hideSearchBarControl?: boolean
  defaultShowSearchBar?: boolean
  showLastUpdatedOn?: boolean
  /** Default is INTERACTIVE */
  noContentPlaceholderType?: NoContentPlaceholderType
  isRowSelectionVisible?: boolean
  /** The set of columns that defines a uniqueness constraint on the table for the purposes of filtering based on row selection.
   * Note that Synapse tables have no internal concept of a primary key.
   */
  rowSelectionPrimaryKey?: string[]
  /** Look for additional filters using the given key.  If not provided, the entity ID will be used.
   * @deprecated - configure the filter before passing a query */
  additionalFiltersSessionStorageKey?: string
  /** Configuration to add a help popover to each corresponding column header */
  helpConfiguration?: ColumnOrFacetHelpConfig[]
  hasCustomPlots?: boolean
  /** The set of external analysis platform to which the UI will support exporting data.
   * @default [] (no platforms are enabled) */
  enabledExternalAnalysisPlatforms?: ExternalAnalysisPlatform[]
  hideVisualizationsControl?: boolean
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
    hideCopyToClipboard = false,
    hideSearchBarControl = false,
    unitDescription = 'result',
    helpConfiguration,
    hasCustomPlots = false,
    visibleColumnCount = Infinity,
    enabledExternalAnalysisPlatforms = DEFAULT_ENABLED_ANALYSIS_PLATFORMS,
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
  } = useQueryContext()
  const { data: queryMetadata } = useGetQueryMetadata()

  // Get the selectColumns from either query so that creating the context isn't bottlenecked by one or the other
  // Use the previous result as placeholder data so we don't reset the selectColumns unless they have actually changed.
  const { data: selectColumnsFromRowData } = useQuery({
    ...rowDataQueryOptions,
    select: data => data.responseBody?.queryResult?.queryResults.headers,
    placeholderData: prevData => prevData,
  })
  const { data: selectColumnsFromMetadata } = useGetQueryMetadata({
    select: data => data.responseBody?.selectColumns,
    placeholderData: prevData => prevData,
  })
  // We deep-compare-memoize the selectColumns so we don't reset visible columns if the reference changes, but not the contents (e.g. on page change)
  const selectColumns = useDeepCompareMemoize(
    selectColumnsFromRowData ?? selectColumnsFromMetadata ?? [],
  )

  const [showSqlEditor, setShowSqlEditor] = useState(false)
  const [showPlots, setShowPlots] = useState(defaultShowPlots)
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(
    !hideCopyToClipboard,
  )
  const [showFacetFilter, setShowFacetFilter] = useState(true)

  // The search bar and download confirmation should not be shown at the same time.
  const [
    showSearchBar,
    setShowSearchBar,
    showDownloadConfirmation,
    setShowDownloadConfirmation,
  ] = useMutuallyExclusiveState(
    defaultShowSearchBar && !hideSearchBarControl,
    false,
  )

  const [
    isShowingExportToAnalysisPlatformModal,
    setIsShowingExportToAnalysisPlatformModal,
  ] = useState<boolean>(false)

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
      isShowingExportToAnalysisPlatformModal:
        isShowingExportToAnalysisPlatformModal,
      setIsShowingExportToAnalysisPlatformModal:
        setIsShowingExportToAnalysisPlatformModal,
      showFacetFilter: hasFacetedSelectColumn ? showFacetFilter : false,
      setShowFacetFilter,
      hideSearchBarControl,
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
      enabledExternalAnalysisPlatforms,
    }),
    [
      NoContentPlaceholder,
      getColumnDisplayName,
      getHelpText,
      hasFacetedSelectColumn,
      isShowingExportToAnalysisPlatformModal,
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
      enabledExternalAnalysisPlatforms,
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
