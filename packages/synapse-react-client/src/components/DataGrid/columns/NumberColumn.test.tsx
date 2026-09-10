import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { formatNumberCellValue, numberColumn } from './NumberColumn'

/**
 * Renders the column's cell component and returns the underlying input, whose
 * value reflects `formatBlurredInput` while idle and `formatInputOnFocus` while
 * focused.
 */
function renderCell(
  value: unknown,
  { isRequired = false, colType = 'number' } = {},
) {
  const column = numberColumn({ colType, isRequired })
  const Component = column.component!
  render(
    <Component
      rowData={value}
      setRowData={() => {}}
      focus={false}
      active={false}
      rowIndex={0}
      columnIndex={0}
      columnData={column.columnData!}
      disabled={false}
      stopEditing={() => {}}
      insertRowBelow={() => {}}
      duplicateRow={() => {}}
      deleteRow={() => {}}
      getContextMenuItems={() => []}
    />,
  )
  return screen.getByRole<HTMLInputElement>('textbox')
}

describe('numberColumn', () => {
  describe('displays the stored value regardless of whether it is a number', () => {
    // Regression: the stock floatColumn formatted only `typeof value ===
    // 'number'` and returned '' for everything else, so values written by
    // server-side CSV import were invisible until the cell was focused.
    it.each([
      ['an integer', 0, '0'],
      ['a float', 1.5, '1.5'],
      ['a large number with grouping separators', 1234567, '1,234,567'],
      ['a negative number', -42, '-42'],
      ['a numeric string', '42', '42'],
      ['a non-numeric string', 'N/A', 'N/A'],
      ['a partially numeric string', '12abc', '12abc'],
      ['a boolean', true, 'true'],
      ['an object', { a: 1 }, '{"a":1}'],
    ])('renders %s', (_label, value, expected) => {
      expect(renderCell(value).value).toBe(expected)
    })

    it.each([
      ['null', null],
      ['undefined', undefined],
      ['NaN', NaN],
    ])('renders %s as an empty cell', (_label, value) => {
      expect(renderCell(value).value).toBe('')
    })
  })

  describe('formatInputOnFocus', () => {
    function formatInputOnFocus(value: unknown) {
      return numberColumn({ colType: 'number' }).columnData!.formatInputOnFocus(
        value,
      )
    }

    it('edits against the raw value rather than the grouped display value', () => {
      expect(formatInputOnFocus(1234567)).toBe('1234567')
    })

    it('shows an unparseable value so it can be corrected', () => {
      expect(formatInputOnFocus('N/A')).toBe('N/A')
    })

    it.each([
      ['null', null],
      ['undefined', undefined],
    ])('shows an empty input for %s', (_label, value) => {
      expect(formatInputOnFocus(value)).toBe('')
    })
  })

  describe('parseUserInput', () => {
    function parse(
      value: string,
      opts?: { isRequired?: boolean; colType?: string },
    ) {
      return numberColumn({
        colType: 'number',
        ...opts,
      }).columnData!.parseUserInput(value)
    }

    it('parses a valid number', () => {
      expect(parse('42.5')).toBe(42.5)
    })

    it('preserves text that is not a number so the validator can report it', () => {
      expect(parse('N/A')).toBe('N/A')
    })

    it('coerces empty input to undefined for an optional column', () => {
      expect(parse('   ')).toBeUndefined()
    })

    it('coerces empty input to null for a required column', () => {
      expect(parse('   ', { isRequired: true })).toBeNull()
    })
  })

  describe('parsePastedValue', () => {
    function paste(value: string) {
      return numberColumn({ colType: 'number' }).pasteValue!({
        rowData: undefined,
        value,
        rowIndex: 0,
      })
    }

    it('parses a valid number', () => {
      expect(paste('42')).toBe(42)
    })

    it('preserves text that is not a number', () => {
      expect(paste('N/A')).toBe('N/A')
    })

    it('collapses newlines before parsing', () => {
      expect(paste('42\n')).toBe(42)
    })
  })

  describe('isCellEmpty', () => {
    function isEmpty(rowData: unknown) {
      return numberColumn({ colType: 'number' }).isCellEmpty!({
        rowData,
        rowIndex: 0,
      })
    }

    it.each([
      ['null', null, true],
      ['undefined', undefined, true],
      ['a number', 0, false],
      ['an unparseable string', 'N/A', false],
    ])('reports %s', (_label, rowData, expected) => {
      expect(isEmpty(rowData)).toBe(expected)
    })
  })
})

describe('formatNumberCellValue', () => {
  it('formats integers without a decimal', () => {
    expect(formatNumberCellValue(1000)).toBe('1,000')
  })

  it('returns an empty string for NaN', () => {
    expect(formatNumberCellValue(NaN)).toBe('')
  })

  it('stringifies arrays', () => {
    expect(formatNumberCellValue([1, 2])).toBe('[1,2]')
  })
})
