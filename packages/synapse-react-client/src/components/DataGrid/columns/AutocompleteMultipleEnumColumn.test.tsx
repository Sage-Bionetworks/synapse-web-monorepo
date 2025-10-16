import { beforeEach, describe, expect, it, vi } from 'vitest'
import parseFreeTextGivenJsonSchemaType from '@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType'
import { autocompleteMultipleEnumColumn } from './AutocompleteMultipleEnumColumn'

vi.mock('@/components/DataGrid/utils/parseFreeTextUsingJsonSchemaType', () => ({
  default: vi.fn(),
}))

const mockParseFreeTextUsingJsonSchemaType = vi.mocked(
  parseFreeTextGivenJsonSchemaType,
)

beforeEach(() => {
  mockParseFreeTextUsingJsonSchemaType.mockReset()
})

describe('autocompleteMultipleEnumColumn', () => {
  it('copyValue converts row data into a comma-separated string', () => {
    const column = autocompleteMultipleEnumColumn({ choices: [] })
    const copyValue = column.copyValue!
    expect(copyValue({ rowData: ['foo', 'bar'] } as any)).toBe('foo,bar')
    expect(copyValue({ rowData: 'freeText' } as any)).toBe('freeText')
    expect(copyValue({ rowData: null } as any)).toBe('')
  })

  it('pasteValue parses delimited text using the JSON schema type', () => {
    // verify split tokens and type conversions.
    mockParseFreeTextUsingJsonSchemaType.mockImplementation(
      (value, _type) => `parsed:${String(value)}` as unknown,
    )

    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    })

    const pasteValue = column.pasteValue!

    const result = pasteValue({ value: 'one, two\tthree' } as any)

    // One call per token and the transformed array result.
    expect(mockParseFreeTextUsingJsonSchemaType).toHaveBeenNthCalledWith(
      1,
      'one',
      'string',
    )
    expect(mockParseFreeTextUsingJsonSchemaType).toHaveBeenNthCalledWith(
      2,
      'two',
      'string',
    )
    expect(mockParseFreeTextUsingJsonSchemaType).toHaveBeenNthCalledWith(
      3,
      'three',
      'string',
    )

    // the returned array is the transformed (parsed) values.
    expect(result).toEqual(['parsed:one', 'parsed:two', 'parsed:three'])
  })

  it('filters out null-like parses but keeps valid ones', () => {
    const pasteValue = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'string',
    }).pasteValue!

    mockParseFreeTextUsingJsonSchemaType
      // First call: simulates a token that the parser couldn’t convert (invalid input).
      .mockImplementationOnce(() => null)
      // Second call: returns the original value → simulates a successful parse.
      .mockImplementationOnce(value => value)

    const result = pasteValue({ value: 'skip,keep' } as any)

    expect(result).toEqual(['keep'])
  })

  it('pasteValue leaves non-string inputs unchanged', () => {
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      colType: 'number',
    })
    const pasteValue = column.pasteValue!
    const array = ['someValue']
    expect(pasteValue({ value: array } as any)).toBe(array)
    expect(mockParseFreeTextUsingJsonSchemaType).not.toHaveBeenCalled()
  })

  it('cellClassName reflects value count when dynamic height is enabled', () => {
    // Ensure dynamic height class toggles based on the number of values shown.
    const column = autocompleteMultipleEnumColumn({
      choices: [],
      dynamicHeight: true,
    })
    const cellClassName = column.cellClassName
    expect(typeof cellClassName).toBe('function')

    if (typeof cellClassName === 'function') {
      // fewer than 3 values gets the multi-value-cell class
      expect(cellClassName({ rowData: ['one'] } as any)).toBe(
        'multi-value-cell',
      )
      // empty or null/undefined gets the multi-value-cell class
      expect(cellClassName({ rowData: undefined } as any)).toBe(
        'multi-value-cell',
      )
      // 3 or more values gets the multi-value-cell-large class
      expect(cellClassName({ rowData: ['1', '2', '3', '4'] } as any)).toBe(
        'multi-value-cell-large',
      )
    }
  })
})
