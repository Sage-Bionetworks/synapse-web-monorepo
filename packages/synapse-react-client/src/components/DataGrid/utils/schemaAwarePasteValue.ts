import type { Column } from '@sage-bionetworks/react-datasheet-grid'
import type { SchemaPropertyInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { getEmptyValue } from './getEmptyValue'

/**
 * Coerce an empty cell value to the schema-correct blank before it reaches
 * the model, regardless of how the edit originated (paste, free-typed commit,
 * programmatic CREATE/UPDATE, etc.).
 *
 * - Optional columns -> undefined (property is absent and passes validation
 *   for any optional type).
 * - Required columns -> null (validator surfaces a substantive error the
 *   user can act on).
 *
 * "Empty" means null, undefined, or a whitespace-only string. Spreadsheet
 * clipboard formats (text/html in particular) can encode visually empty
 * cells as runs of `\n` from stacked `<br>` tags, so the trim check covers
 * those alongside literal "". Empty arrays are not coerced because some
 * columns (e.g. multi-enum) emit [] from their own paste logic and that is
 * the desired in-model representation.
 *
 * If schemaPropertyInfo is omitted, the original value is returned unchanged.
 */
export function coerceModelCellValue(
  value: unknown,
  schemaPropertyInfo?: SchemaPropertyInfo,
): unknown {
  if (!schemaPropertyInfo) {
    return value
  }
  if (
    value === null ||
    value === undefined ||
    (typeof value === 'string' && value.trim() === '')
  ) {
    return getEmptyValue(schemaPropertyInfo.isRequired)
  }
  return value
}

type PasteValueFn<T, PasteValue> = NonNullable<
  Column<T, unknown, PasteValue>['pasteValue']
>

/**
 * Wraps a keyed column's `pasteValue` so that an empty pasted cell is coerced
 * to the schema-correct blank for the column. If `schemaPropertyInfo` is
 * omitted (e.g. the grid is rendered without a JSON schema), the original
 * paste behavior is preserved.
 */
export function wrapPasteValueWithSchemaCoercion<
  T extends Record<string, unknown>,
  PasteValue,
>(
  originalPasteValue: PasteValueFn<T, PasteValue> | undefined,
  columnName: string,
  schemaPropertyInfo?: SchemaPropertyInfo,
): PasteValueFn<T, PasteValue> | undefined {
  if (!originalPasteValue || !schemaPropertyInfo) {
    return originalPasteValue
  }
  return ({ rowData, value, rowIndex }) => {
    const result = originalPasteValue({ rowData, value, rowIndex })
    const cellValue = result[columnName]
    const coerced = coerceModelCellValue(cellValue, schemaPropertyInfo)
    if (coerced === cellValue) {
      return result
    }
    return { ...result, [columnName]: coerced } as T
  }
}
