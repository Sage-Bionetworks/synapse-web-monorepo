import { getEmptyValue } from '@/components/DataGrid/utils/getEmptyValue'
import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import {
  Column,
  createTextColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import { JSONSchema7Type } from 'json-schema'
import { castCellValueToString } from './AutocompleteColumn'

const NUMBER_FORMAT = new Intl.NumberFormat()

/**
 * Render a numeric cell value for display while the cell is not being edited.
 *
 * Real numbers are locale-formatted; anything else is stringified verbatim.
 * Numeric columns legitimately hold non-numeric values — CSV import writes
 * cells server-side without passing through any client-side parsing, and
 * parseFreeTextGivenJsonSchemaType deliberately preserves unparseable text so
 * the validator can report it. Rendering those as blank leaves the user with an
 * apparently empty cell on a row flagged invalid.
 */
export function formatNumberCellValue(value: unknown): string {
  if (typeof value === 'number') {
    return Number.isNaN(value) ? '' : NUMBER_FORMAT.format(value)
  }
  return castCellValueToString(value)
}

export type NumberColumnProps = {
  colType?: JSONSchema7Type
  isRequired?: boolean
}

/**
 * Mirrors the (unexported) columnData that createTextColumn builds, so callers
 * and tests can reach the format/parse functions it derives.
 */
export type NumberColumnData = {
  placeholder?: string
  alignRight: boolean
  continuousUpdates: boolean
  parseUserInput: (value: string) => unknown
  formatBlurredInput: (value: unknown) => string
  formatInputOnFocus: (value: unknown) => string
}

export function numberColumn({
  colType = 'number',
  isRequired,
}: NumberColumnProps): Partial<Column<unknown, NumberColumnData, string>> {
  function parse(value: string): unknown {
    if (value.trim() === '') {
      return getEmptyValue(isRequired)
    }
    return parseFreeTextGivenJsonSchemaType(value, colType)
  }

  return createTextColumn<unknown>({
    alignRight: true,
    continuousUpdates: false,
    deletedValue: getEmptyValue(isRequired),
    formatBlurredInput: formatNumberCellValue,
    // Edit against the stored value rather than the locale-formatted one so
    // grouping separators never reach the parser.
    formatInputOnFocus: castCellValueToString,
    parseUserInput: parse,
    parsePastedValue: value => parse(value.replace(/[\n\r]+/g, ' ')),
  })
}
