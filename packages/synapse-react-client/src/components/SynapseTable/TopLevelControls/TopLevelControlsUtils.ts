import { QueryContextType } from '../../QueryContext/QueryContext'
import { QueryVisualizationContextType } from '../../QueryVisualizationWrapper'
import pluralize from 'pluralize'
import { upperFirst } from 'lodash-es'
import { Row } from '@sage-bionetworks/synapse-types'

const TO_DOWNLOAD_CART = 'to Download Cart'

/**
 * If the user invokes an action on the table (such as "Send to CAVATICA"), we want to tell the user how many rows they
 * will perform the action on.
 *
 * If selection is enabled and rows have been selected, return the number of selected rows.
 * If no rows have been selected, return the total number of query results.
 * If the total number of query results is unknown, return undefined.
 * @param hasSelectedRows
 * @param selectedRows
 * @param totalNumberOfRows
 */
export function getNumberOfResultsToInvokeAction(
  hasSelectedRows: boolean,
  selectedRows: Row[],
  totalNumberOfRows?: number,
) {
  return hasSelectedRows ? selectedRows.length : totalNumberOfRows
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
 * @param hasSelectedRows
 * @param selectedRows
 * @param totalNumberOfRows
 * @param unitDescription
 */
export function getNumberOfResultsToInvokeActionCopy(
  hasResettableFilters: QueryContextType['hasResettableFilters'],
  hasSelectedRows: boolean,
  selectedRows: Row[],
  totalNumberOfRows: number | undefined,
  unitDescription: QueryVisualizationContextType['unitDescription'],
) {
  if (!hasResettableFilters && !hasSelectedRows) {
    return `all ${pluralize(unitDescription)}`
  }

  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    hasSelectedRows,
    selectedRows,
    totalNumberOfRows,
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

/**
 * Returns copy for how to reference the number of results that will be sent to the download list.
 * Utilizes the unit description to return a count and pluralized unit description.
 * @param hasResettableFilters
 * @param hasSelectedRows
 * @param selectedRows
 * @param totalNumberOfRows
 * @param unitDescription
 */
export function getNumberOfResultsToAddToDownloadListCopy(
  hasResettableFilters: QueryContextType['hasResettableFilters'],
  hasSelectedRows: boolean,
  selectedRows: Row[],
  totalNumberOfRows: number | undefined,
  unitDescription: QueryVisualizationContextType['unitDescription'],
) {
  if (!hasResettableFilters && !hasSelectedRows) {
    return `Add All ${upperFirst(
      pluralize(unitDescription),
    )} ${TO_DOWNLOAD_CART}`
  }

  const numberOfResultsToInvokeAction = getNumberOfResultsToInvokeAction(
    hasSelectedRows,
    selectedRows,
    totalNumberOfRows,
  )
  if (numberOfResultsToInvokeAction != null) {
    return `Add ${numberOfResultsToInvokeAction.toLocaleString()} Selected ${upperFirst(
      pluralize(unitDescription, numberOfResultsToInvokeAction),
    )} ${TO_DOWNLOAD_CART}`
  }
  // Null count
  return `Add ${TO_DOWNLOAD_CART}`
}
