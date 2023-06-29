import { QueryContextType } from '../../QueryContext'
import { QueryVisualizationContextType } from '../../QueryVisualizationWrapper'
import pluralize from 'pluralize'

/**
 * If the user invokes an action on the table (such as "Send to CAVATICA"), we want to tell the user how many rows they
 * will perform the action on.
 *
 * If selection is enabled and rows have been selected, return the number of selected rows.
 * If no rows have been selected, return the total number of query results.
 * If the total number of query results is unknown, return undefined.
 * @param isRowSelectionVisible
 * @param selectedRows
 * @param data
 */
export function getNumberOfResultsToInvokeAction(
  isRowSelectionVisible: QueryVisualizationContextType['isRowSelectionVisible'],
  selectedRows: QueryVisualizationContextType['selectedRows'],
  data: QueryContextType['data'],
) {
  const hasSelectedRows = isRowSelectionVisible && selectedRows.length > 0
  return hasSelectedRows ? selectedRows.length : data?.queryCount
}

/**
 * Returns copy for how to reference the number of results that will be affected by an action, such as "Send to CAVATICA".
 * Utilizes the unit description to return a count and pluralized unit description.
 *
 * If the user has not selected rows or applied any filters, return "all <unit>s".
 * If the user has applied filters but not selected rows, return the total number of query results to indicate that the filtered result set is used. e.g. '2 <unit>s'
 *   - If the total number of query results is unknown, the count is not included. e.g. '<unit>s'
 * If the user has selected rows, return the number of selected rows. e.g. '2 <unit>s'
 * @param hasResettableFilters
 * @param isRowSelectionVisible
 * @param selectedRows
 * @param data
 * @param unitDescription
 */
export function getNumberOfResultsToInvokeActionCopy(
  hasResettableFilters: QueryContextType['hasResettableFilters'],
  isRowSelectionVisible: QueryVisualizationContextType['isRowSelectionVisible'],
  selectedRows: QueryVisualizationContextType['selectedRows'],
  data: QueryContextType['data'],
  unitDescription: QueryVisualizationContextType['unitDescription'],
) {
  const hasSelectedRows = isRowSelectionVisible && selectedRows.length > 0
  if (!hasResettableFilters && !hasSelectedRows) {
    return `all ${pluralize(unitDescription)}`
  }

  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    isRowSelectionVisible,
    selectedRows,
    data,
  )
  if (numberOfResultsToInvokeAction != null) {
    return `${numberOfResultsToInvokeAction.toLocaleString()} ${pluralize(
      unitDescription,
      numberOfResultsToInvokeAction,
    )}`
  }
  // Null count, so just return the pluralized unit description
  return pluralize(unitDescription)
}
