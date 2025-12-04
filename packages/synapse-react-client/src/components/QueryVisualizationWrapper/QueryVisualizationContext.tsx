import React from 'react'
import { ColumnType } from '@sage-bionetworks/synapse-types'
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
} from 'react'
import { ExternalAnalysisPlatform } from '../SynapseTable/export/ExternalAnalysisPlatformsConstants'

export type QueryVisualizationContextType = {
  columnsToShowInTable: string[]
  setColumnsToShowInTable: (newState: string[]) => void
  rgbIndex?: number
  unitDescription: string
  /** Whether to show when the table or view was last updated. */
  showLastUpdatedOn?: boolean
  /** Given a column name, return the display name for the column */
  getColumnDisplayName: (columnName: string, jsonPath?: string) => string
  /** Given a column name or JSON facet, return the configured help text */
  getHelpText: (columnName: string, jsonPath?: string) => string | undefined
  /** Given a cell value and a column type, returns the displayed value for the data */
  getDisplayValue: (value: string, columnType: ColumnType) => string
  /** React node to display in place of cards/table when there are no results. */
  NoContentPlaceholder: () => ReactNode
  /** The set of external analysis platforms where this component allows users to export data. If this list is empty, then
   * controls will not be shown. */
  enabledExternalAnalysisPlatforms: ExternalAnalysisPlatform[]
  /** If true, a dialog guiding the user through exporting table query data to an external platform is shown. If this
   * is true, enabledExternalAnalysisPlatforms must be non-empty */
  isShowingExportToAnalysisPlatformModal: boolean
  /** Allows toggling isShowingExportToAnalysisPlatformModal */
  setIsShowingExportToAnalysisPlatformModal: Dispatch<SetStateAction<boolean>>
  showFacetFilter: boolean
  setShowFacetFilter: Dispatch<SetStateAction<boolean>>
  hideSearchBarControl: boolean
  showSearchBar: boolean
  setShowSearchBar: Dispatch<SetStateAction<boolean>>
  showDownloadConfirmation: boolean
  setShowDownloadConfirmation: Dispatch<SetStateAction<boolean>>
  showSqlEditor: boolean
  setShowSqlEditor: Dispatch<SetStateAction<boolean>>
  showCopyToClipboard: boolean
  setShowCopyToClipboard: Dispatch<SetStateAction<boolean>>
  showPlots: boolean
  setShowPlots: Dispatch<SetStateAction<boolean>>
}
/**
 * This must be exported to use the context in class components.
 */
export const QueryVisualizationContext = createContext<
  QueryVisualizationContextType | undefined
>(undefined)
export type QueryVisualizationContextProviderProps = PropsWithChildren<{
  queryVisualizationContext: QueryVisualizationContextType
}>
/**
 * Provides fields and functions related to visualizing a Synapse table query. For actual query data, see QueryContextProvider.
 */
export const QueryVisualizationContextProvider = ({
  children,
  queryVisualizationContext,
}: QueryVisualizationContextProviderProps): React.ReactNode => {
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
      'useQueryVisualizationContext must be used within a QueryVisualizationWrapper',
    )
  }
  return context
}

export const QueryVisualizationContextConsumer =
  QueryVisualizationContext.Consumer
