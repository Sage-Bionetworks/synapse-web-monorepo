import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { useDeepCompareMemoize } from 'use-deep-compare-effect'
import { useQueryContext } from './QueryContext/QueryContext'
import NoContentAvailable from './SynapseTable/NoContentAvailable'
import { NoContentPlaceholderType } from './SynapseTable/NoContentPlaceholderType'
import SearchResultsNotFound from './SynapseTable/SearchResultsNotFound'
import ThisTableIsEmpty from './SynapseTable/TableIsEmpty'
import { unCamelCase } from '../utils/functions/unCamelCase'
import { ColumnType, Row } from '@sage-bionetworks/synapse-types'
import { getDisplayValue } from '../utils/functions/getDataFromFromStorage'

export type QueryVisualizationContextType = {
  topLevelControlsState: TopLevelControlsState
  setTopLevelControlsState: React.Dispatch<
    React.SetStateAction<TopLevelControlsState>
  >
  columnsToShowInTable: string[]
  setColumnsToShowInTable: (newState: string[]) => void
  selectedRows: Row[]
  setSelectedRows: (newState: Row[]) => void
  rgbIndex?: number
  unitDescription?: string
  /** Whether to show when the table or view was last updated. */
  showLastUpdatedOn?: boolean
  /** Given a column name, return the display name for the column */
  getColumnDisplayName: (columnName?: string) => string | undefined
  /** Given a cell value and a column type, returns the displayed value for the data */
  getDisplayValue: (value: string, columnType: ColumnType) => string
  /** React node to display in place of cards/table when there are no results. */
  NoContentPlaceholder: () => JSX.Element
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
}

export type TopLevelControlsState = {
  showFacetVisualization: boolean
  showFacetFilter?: boolean
  showColumnFilter: boolean
  showSearchBar: boolean
  showDownloadConfirmation: boolean
  showColumnSelectDropdown: boolean
  showSqlEditor: boolean
  showCopyToClipboard: boolean
}

/**
 * QueryVisualizationWrapper manages UI state for components that query tables in Synapse. That state can be accessed
 * or updated using QueryVisualizationContext. A QueryVisualizationWrapper must be used within a QueryWrapper.
 */
export function QueryVisualizationWrapper(
  props: QueryVisualizationWrapperProps,
) {
  const { noContentPlaceholderType = NoContentPlaceholderType.INTERACTIVE } =
    props

  const { data, getLastQueryRequest, isFacetsAvailable, hasResettableFilters } =
    useQueryContext()

  const { columnAliases = {} } = props

  const [topLevelControlsState, setTopLevelControlsState] =
    useState<TopLevelControlsState>({
      showColumnFilter: true,
      showFacetFilter: true,
      showFacetVisualization: props.defaultShowFacetVisualization ?? true,
      showSearchBar: props.defaultShowSearchBar ?? false,
      showDownloadConfirmation: false,
      showColumnSelectDropdown: false,
      showSqlEditor: false,
      showCopyToClipboard: true,
    })

  useEffect(() => {
    if (!isFacetsAvailable) {
      setTopLevelControlsState(state => ({
        ...state,
        showFacetFilter: false,
        showFacetVisualization: false,
      }))
    }
  }, [isFacetsAvailable])
  const [visibleColumns, setVisibleColumns] = useState<string[]>([])
  const [selectedRows, setSelectedRows] = useState<Row[]>([])

  const lastQueryRequest = getLastQueryRequest()

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
    (columnName?: string) => {
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

  const context: QueryVisualizationContextType = {
    topLevelControlsState,
    setTopLevelControlsState,
    columnsToShowInTable: visibleColumns,
    setColumnsToShowInTable: setVisibleColumns,
    selectedRows,
    setSelectedRows,
    rgbIndex: props.rgbIndex,
    unitDescription: props.unitDescription,
    showLastUpdatedOn: props.showLastUpdatedOn,
    getColumnDisplayName,
    getDisplayValue,
    NoContentPlaceholder,
  }
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
