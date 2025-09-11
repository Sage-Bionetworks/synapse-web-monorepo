import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  type MockedFunction,
} from 'vitest'

vi.mock('./parseValidationColumns', () => ({
  extractUniqueValidationFieldNames: vi.fn(),
}))

import { getCellClassName } from './getCellClassName'
import { extractUniqueValidationFieldNames } from './parseValidationColumns'

type Row = any

function makeRow(withValidation: boolean): Row {
  if (!withValidation) return {}
  return {
    __validationResults: {
      allValidationMessages: [{ message: 'x' }],
    },
  }
}

const mockExtract = extractUniqueValidationFieldNames as MockedFunction<
  typeof extractUniqueValidationFieldNames
>

describe('getCellClassName', () => {
  beforeEach(() => {
    mockExtract.mockReset()
  })

  it('returns undefined when not selected and no validationMessages (no columnId)', () => {
    const res = getCellClassName({
      rowData: makeRow(false),
      rowIndex: 0,
      columnId: undefined,
      selectedRowIndex: null,
    })
    expect(res).toBeUndefined()
  })

  it('returns undefined when not selected and no validationMessages (with columnId)', () => {
    const res = getCellClassName({
      rowData: makeRow(false),
      rowIndex: 0,
      columnId: 'fieldA',
      selectedRowIndex: null,
    })
    expect(res).toBeUndefined()
  })

  it('returns only selection class when selected and no validationMessages', () => {
    const res = getCellClassName({
      rowData: makeRow(false),
      rowIndex: 2,
      columnId: 'fieldA',
      selectedRowIndex: 2,
    })
    expect(res).toBe('cell-row-selected')
  })

  it('returns only selection class when selected, validation present, columnId undefined', () => {
    const res = getCellClassName({
      rowData: makeRow(true),
      rowIndex: 1,
      columnId: undefined,
      selectedRowIndex: 1,
    })
    expect(res).toBe('cell-row-selected')
  })

  it('returns only selection class when selected and invalidFields empty', () => {
    mockExtract.mockReturnValue([])
    const res = getCellClassName({
      rowData: makeRow(true),
      rowIndex: 5,
      columnId: 'fieldA',
      selectedRowIndex: 5,
    })
    expect(res).toBe('cell-row-selected')
  })

  it('returns only selection class when selected and columnId not in invalidFields', () => {
    mockExtract.mockReturnValue(['other'])
    const res = getCellClassName({
      rowData: makeRow(true),
      rowIndex: 3,
      columnId: 'fieldA',
      selectedRowIndex: 3,
    })
    expect(res).toBe('cell-row-selected')
  })

  it('returns undefined when not selected, validation present, columnId not in invalidFields', () => {
    mockExtract.mockReturnValue(['other'])
    const res = getCellClassName({
      rowData: makeRow(true),
      rowIndex: 3,
      columnId: 'fieldA',
      selectedRowIndex: null,
    })
    expect(res).toBeUndefined()
  })

  it('returns undefined when invalidFields empty and not selected', () => {
    mockExtract.mockReturnValue([])
    const res = getCellClassName({
      rowData: makeRow(true),
      rowIndex: 10,
      columnId: 'x',
      selectedRowIndex: null,
    })
    expect(res).toBeUndefined()
  })
})
