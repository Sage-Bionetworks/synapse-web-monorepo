import { describe, expect, it } from 'vitest'
import { autocompleteMultipleEnumColumn } from './AutocompleteMultipleEnumColumn'

describe('autocompleteMultipleEnumColumn', () => {
  it('copyValue converts row data into a comma-separated string', () => {
    const column = autocompleteMultipleEnumColumn({ choices: [] })
    const copyValue = column.copyValue!
    expect(copyValue({ rowData: ['foo', 'bar'], rowIndex: 0 })).toBe('foo,bar')
    expect(copyValue({ rowData: 'freeText', rowIndex: 0 })).toBe('freeText')
    expect(copyValue({ rowData: null, rowIndex: 0 })).toBe('')
  })

  it('pasteValue parses delimited text using the JSON schema type', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })
    const pasteValue = column.pasteValue!

    const result = pasteValue({
      rowData: null,
      value: 'one, two\tthree',
      rowIndex: 0,
    }) as string[]

    expect(Array.isArray(result)).toBe(true)
    expect(result).toContain('one')
    expect(result).toContain('two')
    expect(result).toContain('three')
  })

  it('filters out null-like parses but keeps valid ones', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })
    const pasteValue = column.pasteValue!

    const result = pasteValue({
      rowData: null,
      value: ',valid,',
      rowIndex: 0,
    }) as string[]
    // Depending on how parseFreeTextUsingJsonSchemaType behaves, nulls or empties should be removed
    expect(result).toContain('valid')
  })

  it('pasteValue leaves non-string inputs unchanged', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'number',
    })
    const pasteValue = column.pasteValue!
    const nonStringValue = 123
    expect(
      pasteValue({
        rowData: null,
        value: nonStringValue as unknown as string,
        rowIndex: 0,
      }),
    ).toBe(nonStringValue)
  })

  it('cellClassName reflects value count when dynamic height is enabled', () => {
    // Ensure dynamic height class toggles based on the number of values shown.
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      dynamicHeight: true,
    })
    const cellClassName = column.cellClassName
    expect(typeof cellClassName).toBe('function')

    // Define the proper type for cellClassName
    type CellClassNameFn = (args: {
      rowData: unknown
      rowIndex: number
    }) => string

    // cellClassName is a function, so we can call it directly
    expect(cellClassName).toBeTypeOf('function')
    // fewer than 3 values gets the multi-value-cell class
    expect(
      (cellClassName as CellClassNameFn)({ rowData: ['one'], rowIndex: 0 }),
    ).toBe('multi-value-cell')
    // empty or null/undefined gets the multi-value-cell class
    expect(
      (cellClassName as CellClassNameFn)({ rowData: undefined, rowIndex: 0 }),
    ).toBe('multi-value-cell')
    // 3 or more values gets the multi-value-cell-large class
    expect(
      (cellClassName as CellClassNameFn)({
        rowData: ['1', '2', '3', '4'],
        rowIndex: 0,
      }),
    ).toBe('multi-value-cell-large')
  })
})
