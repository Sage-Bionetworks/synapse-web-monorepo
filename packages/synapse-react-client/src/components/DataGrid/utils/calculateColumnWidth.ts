import { SchemaPropertyInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'

/**
 * Calculates the default width for a column based on its name and schema property info.
 * The width is determined by:
 * - A base minimum width (175px for most columns, 215px for date-time columns)
 * - Character-based calculation (10px per character in the column name)
 *
 * @param columnName - The name of the column
 * @param propertyInfo - Optional schema property information for the column
 * @returns The calculated column width in pixels
 */
export function calculateDefaultColumnWidth(
  columnName: string,
  propertyInfo?: SchemaPropertyInfo,
): number {
  // Determine minimum width based on column type
  const minWidth = propertyInfo?.type?.format === 'date-time' ? 215 : 175

  // Calculate width based on column name length (11px per character)
  const characterBasedWidth = columnName.length * 11

  // Return the larger of the two
  return Math.max(minWidth, characterBasedWidth)
}
