import { SchemaPropertyInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'

// Icon and spacing width constants for header content
const HEADER_ELEMENT_WIDTHS = {
  // Approximate effective width of each header IconButton (icon + padding)
  pin: 28,
  help: 28,
  spacing: 4, // gap between elements
  padding: 4, // container padding
} as const

export type HeaderOptions = {
  showPinIcon?: boolean
  hasDescription?: boolean
}

/**
 * Calculates the default width for a column based on its name and schema property info.
 * The width is determined by:
 * - A base minimum width (175px for most columns, 215px for date-time columns)
 * - Character-based calculation (11px per character in the column name)
 * - Additional width for header icons (pin icon, help tooltip)
 *
 * @param columnName - The name of the column
 * @param propertyInfo - Optional schema property information for the column
 * @param headerOptions - Optional header content options that affect width
 * @returns The calculated column width in pixels
 */
export function calculateDefaultColumnWidth(
  columnName: string,
  propertyInfo?: SchemaPropertyInfo,
  headerOptions?: HeaderOptions,
): number {
  // Determine minimum width based on column type
  const minWidth = propertyInfo?.type?.format === 'date-time' ? 215 : 175

  // Calculate width based on column name length (11px per character)
  const characterBasedWidth = columnName.length * 11

  // Calculate additional width needed for header icons
  let additionalWidth = 0
  if (headerOptions?.showPinIcon) {
    additionalWidth += HEADER_ELEMENT_WIDTHS.pin + HEADER_ELEMENT_WIDTHS.spacing
  }
  if (headerOptions?.hasDescription) {
    additionalWidth +=
      HEADER_ELEMENT_WIDTHS.help + HEADER_ELEMENT_WIDTHS.spacing
  }
  // Only add container padding if we have icons
  if (additionalWidth > 0) {
    additionalWidth += HEADER_ELEMENT_WIDTHS.padding
  }

  // Calculate total width needed for text + icons
  const contentBasedWidth = characterBasedWidth + additionalWidth

  // Return the larger of minimum width or content-based width
  return Math.max(minWidth, contentBasedWidth)
}
