import { DataGridRow } from '@/components/DataGrid/DataGridTypes'
import { ValidationResults } from '@sage-bionetworks/synapse-types'
import {
  groupValidationMessagesByColumn,
  parseValidationMessage,
} from './parseValidationMessage'

export type DisplayedRowValidation = Pick<
  DataGridRow,
  '__validationStatus' | '__cellValidationResults'
>

type GetDisplayedRowValidationParams = {
  /** The hub's validation results for the row, if it has been validated */
  validationResults: ValidationResults | undefined
  /** Whether the row is unchanged since its validation results were generated */
  isValidationUpToDate: boolean
  /** Every column name in the grid, including removed columns */
  columnNames: ReadonlySet<string>
  /** Names of columns that have been removed from the grid */
  removedColumnNames: ReadonlySet<string>
}

function toValidationStatus(
  isValid: boolean,
  isValidationUpToDate: boolean,
): DataGridRow['__validationStatus'] {
  if (!isValidationUpToDate) return 'pending'
  return isValid ? 'valid' : 'invalid'
}

/**
 * Derives the validation state shown in the grid for a row. Messages about removed columns are omitted because
 * those columns are not displayed; they reappear once the column is restored. A row whose only errors are about
 * removed columns is shown as valid. A row that has changed since it was validated is shown as pending.
 */
export function getDisplayedRowValidation({
  validationResults,
  isValidationUpToDate,
  columnNames,
  removedColumnNames,
}: GetDisplayedRowValidationParams): DisplayedRowValidation {
  if (!validationResults) {
    return isValidationUpToDate ? {} : { __validationStatus: 'pending' }
  }

  const { isValid, allValidationMessages } = validationResults
  if (!allValidationMessages) {
    return {
      __validationStatus: toValidationStatus(isValid, isValidationUpToDate),
    }
  }

  const messages = allValidationMessages.flatMap(
    message => parseValidationMessage(message, columnNames) ?? [],
  )
  const displayedMessages = messages.filter(
    ({ columnName }) =>
      columnName === undefined || !removedColumnNames.has(columnName),
  )
  // Row-level messages are never omitted, so they keep the row invalid
  const allErrorsAreInRemovedColumns =
    messages.length > 0 && displayedMessages.length === 0

  return {
    __validationStatus: toValidationStatus(
      isValid || allErrorsAreInRemovedColumns,
      isValidationUpToDate,
    ),
    __cellValidationResults: groupValidationMessagesByColumn(displayedMessages),
  }
}
