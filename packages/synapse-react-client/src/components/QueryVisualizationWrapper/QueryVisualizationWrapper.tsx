import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useQueryContext } from '../QueryContext/QueryContext'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'
import { NoContentPlaceholderType } from '../SynapseTable/NoContentPlaceholderType'
import SearchResultsNotFound from '../SynapseTable/SearchResultsNotFound'
import ThisTableIsEmpty from '../SynapseTable/TableIsEmpty'
import { unCamelCase } from '../../utils/functions/unCamelCase'
import { ColumnType } from '@sage-bionetworks/synapse-types'
import { getDisplayValue } from '../../utils/functions/getDataFromFromStorage'
import useMutuallyExclusiveState from '../../utils/hooks/useMutuallyExclusiveState'
import { useAtomValue } from 'jotai'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'

export type QueryVisualizationContextType = {
  columnsToShowInTable: string[]
  setColumnsToShowInTable: (newState: string[]) => void
  rgbIndex?: number
  unitDescription: string
  /** Whether to show when the table or view was last updated. */
  showLastUpdatedOn?: boolean
  /** Given a column name, return the display name for the column */
  getColumnDisplayName: (columnName: string) => string
  /** Given a cell value and a column type, returns the displayed value for the data */
  getDisplayValue: (value: string, columnType: ColumnType) => string
  /** React node to display in place of cards/table when there are no results. */
  NoContentPlaceholder: () => JSX.Element
  isShowingExportToCavaticaModal: boolean
  setIsShowingExportToCavaticaModal: React.Dispatch<
    React.SetStateAction<boolean>
  >
  showFacetFilter: boolean
  setShowFacetFilter: React.Dispatch<React.SetStateAction<boolean>>
  showSearchBar: boolean
  setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>
  showDownloadConfirmation: boolean
  setShowDownloadConfirmation: React.Dispatch<React.SetStateAction<boolean>>
  showSqlEditor: boolean
  setShowSqlEditor: React.Dispatch<React.SetStateAction<boolean>>
  showCopyToClipboard: boolean
  setShowCopyToClipboard: React.Dispatch<React.SetStateAction<boolean>>
  showFacetVisualization: boolean
  setShowFacetVisualization: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * This must be exported to use the context in class components.
 */
export const QueryVisualizationContext = createContext<
  QueryVisualizationContextType | undefined
>(undefined)

export type QueryVisualizationContextProviderProps = React.PropsWithChildren<{
  queryVisualizationContext: QueryVisualizationContextType
}>

/**
 * Provides fields and functions related to visualizing a Synapse table query. For actual query data, see QueryContextProvider.
 */
export const QueryVisualizationContextProvider = ({
  children,
  queryVisualizationContext,
}: QueryVisualizationContextProviderProps) => {
  return (
    <QueryVisualizationContext.Provider value={queryVisualizationContext}>
      {children}
    </QueryVisualizationContext.Provider>
  )
}

export function useQueryVisualizationContext(): QueryVisualizationContextType {
  const context = useContext(QueryVisualizationContext)
  if (context === undefined) {
    throw new Error(
      'useQueryVisualizationContext must be used within a QueryWrapper',
    )
  }
  return context
}

export const QueryVisualizationContextConsumer =
  QueryVisualizationContext.Consumer

export type QueryVisualizationWrapperProps = {
  children: React.ReactNode | React.ReactNode[]
  rgbIndex?: number
  /** The singular word to use to describe a what a row represents (e.g. "file"). Defaults to "result" */
  unitDescription?: string
  /** Mapping from column name to the name that should be shown for the column */
  columnAliases?: Record<string, string>
  visibleColumnCount?: number
  hiddenColumns?: string[]
  defaultShowFacetVisualization?: boolean
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
  additionalFiltersLocalStorageKey?: string
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
    defaultShowFacetVisualization = true,
    unitDescription = 'result',
  } = props

  const columnAliases = useMemo(
    () => props.columnAliases ?? {},
    [props.columnAliases],
  )

  const { getCurrentQueryRequest, isFacetsAvailable, hasResettableFilters } =
    useQueryContext()
  const data = useAtomValue(tableQueryDataAtom)

  const [showSqlEditor, setShowSqlEditor] = useState(false)
  const [showFacetVisualization, setShowFacetVisualization] = useState(
    defaultShowFacetVisualization,
  )
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

  const lastQueryRequest = getCurrentQueryRequest()

  // We deep-compare-memoize the selectColumns so we don't reset visible columns when the reference changes, but not the contents (e.g. on page change)
  const selectColumns = useDeepCompareMemoize(data?.selectColumns)

  useEffect(() => {
    // SWC-6030: If sql changes, reset what columns are visible
    setVisibleColumns(
      selectColumns
        ?.slice(0, props.visibleColumnCount ?? Infinity)
        .map(el => el.name) ?? [],
    )
  }, [selectColumns, lastQueryRequest.query.sql, props.visibleColumnCount])

  const getColumnDisplayName = useCallback(
    (columnName: string) => {
      // SWC-5982: if force-display-original-column-names is set, then just return the string
      const forceDisplayOriginalColumnName =
        localStorage.getItem('force-display-original-column-names') === 'true'

      if (!columnName || forceDisplayOriginalColumnName) {
        return columnName
      }
      if (columnAliases[columnName]) {
        return columnAliases[columnName]
      }
      return unCamelCase(columnName)
    },
    [columnAliases],
  )

  const NoContentPlaceholder = useCallback(() => {
    switch (noContentPlaceholderType) {
      case NoContentPlaceholderType.INTERACTIVE:
        if (hasResettableFilters) {
          return <SearchResultsNotFound />
        } else {
          return <ThisTableIsEmpty />
        }
      case NoContentPlaceholderType.STATIC:
      default:
        return <NoContentAvailable />
    }
  }, [noContentPlaceholderType, hasResettableFilters])

  const context: QueryVisualizationContextType = useMemo(
    () => ({
      columnsToShowInTable: visibleColumns,
      setColumnsToShowInTable: setVisibleColumns,
      rgbIndex: props.rgbIndex,
      unitDescription: unitDescription,
      showLastUpdatedOn: props.showLastUpdatedOn,
      getColumnDisplayName,
      getDisplayValue,
      NoContentPlaceholder,
      isShowingExportToCavaticaModal,
      setIsShowingExportToCavaticaModal,
      showFacetFilter: isFacetsAvailable ? showFacetFilter : false,
      setShowFacetFilter,
      showSearchBar,
      setShowSearchBar,
      showDownloadConfirmation,
      setShowDownloadConfirmation,
      showSqlEditor,
      setShowSqlEditor,
      showFacetVisualization: isFacetsAvailable
        ? showFacetVisualization
        : false,
      setShowFacetVisualization,
      showCopyToClipboard,
      setShowCopyToClipboard,
    }),
    [
      NoContentPlaceholder,
      getColumnDisplayName,
      isFacetsAvailable,
      isShowingExportToCavaticaModal,
      props.rgbIndex,
      props.showLastUpdatedOn,
      setShowDownloadConfirmation,
      setShowSearchBar,
      showCopyToClipboard,
      showDownloadConfirmation,
      showFacetFilter,
      showFacetVisualization,
      showSearchBar,
      showSqlEditor,
      unitDescription,
      visibleColumns,
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
