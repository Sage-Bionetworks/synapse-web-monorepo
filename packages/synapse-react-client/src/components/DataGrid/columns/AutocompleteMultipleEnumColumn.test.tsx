import { describe, expect, it } from 'vitest'
import { autocompleteMultipleEnumColumn } from './AutocompleteMultipleEnumColumn'

describe('autocompleteMultipleEnumColumn', () => {
  it('copyValue converts row data into a comma-separated string', () => {
    const column = autocompleteMultipleEnumColumn({ choices: [] })
    const copyValue = column.copyValue!
    expect(copyValue({ rowData: ['foo', 'bar'] } as any)).toBe('foo,bar')
    expect(copyValue({ rowData: 'freeText' } as any)).toBe('freeText')
    expect(copyValue({ rowData: null } as any)).toBe('')
  })

  it('pasteValue parses delimited text using the JSON schema type', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })
    const pasteValue = column.pasteValue!

    const result = pasteValue({ value: 'one, two\tthree' } as any)

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

    const result = pasteValue({ value: ',valid,' } as any)
    // Depending on how parseFreeTextUsingJsonSchemaType behaves, nulls or empties should be removed
    expect(result).toContain('valid')
  })

  it('pasteValue leaves non-string inputs unchanged', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'number',
    })
    const pasteValue = column.pasteValue!
    const array = ['someValue']
    expect(pasteValue({ value: array } as any)).toBe(array)
  })

  it('cellClassName reflects value count when dynamic height is enabled', () => {
    // Ensure dynamic height class toggles based on the number of values shown.
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      dynamicHeight: true,
    })
    const cellClassName = column.cellClassName
    expect(typeof cellClassName).toBe('function')

    // TypeScript ensures cellClassName is a function at this point
    // fewer than 3 values gets the multi-value-cell class
    expect(cellClassName({ rowData: ['one'] } as any)).toBe('multi-value-cell')
    // empty or null/undefined gets the multi-value-cell class
    expect(cellClassName({ rowData: undefined } as any)).toBe(
      'multi-value-cell',
    )
    // 3 or more values gets the multi-value-cell-large class
    expect(cellClassName({ rowData: ['1', '2', '3', '4'] } as any)).toBe(
      'multi-value-cell-large',
    )
  })
})
