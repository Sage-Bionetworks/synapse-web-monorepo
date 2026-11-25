import { DataGridRow } from '@/components/DataGrid/DataGridTypes'

/** A grid row with only a validation status and its cell errors, keyed by column name, for tests of the validation summaries. */
export default function createValidationTestRow(
  status: DataGridRow['__validationStatus'],
  cellErrors: Record<string, string[]> = {},
): DataGridRow {
  return {
    __validationStatus: status,
    __cellValidationResults: new Map(Object.entries(cellErrors)),
  }
}
