import { createTextColumn, floatColumn, keyColumn } from 'react-datasheet-grid'
import { autocompleteColumn } from '../columns/AutocompleteColumn'
import { mocked } from 'storybook/test'
import { describe, expect, it } from 'vitest'
import { autocompleteMultipleEnumColumn } from '../columns/AutocompleteMultipleEnumColumn'
import { dateTimeColumn } from '../columns/DateTimeColumn'
import { createColumn } from './columnFactory'

vi.mock('react-datasheet-grid', async importActual => {
  const actual = await importActual<typeof import('react-datasheet-grid')>()
  return {
    ...actual,
    keyColumn: vi.fn().mockImplementation(actual.keyColumn),
    createTextColumn: vi.fn(),
  }
})

vi.mock('../columns/AutocompleteColumn', () => ({
  autocompleteColumn: vi.fn(),
}))

vi.mock('../columns/DateTimeColumn', () => ({
  dateTimeColumn: vi.fn(),
}))

vi.mock('../columns/AutocompleteMultipleEnumColumn', () => ({
  autocompleteMultipleEnumColumn: vi.fn(),
}))

const fakeColumn = {
  component: () => null,
}

const keyColumnSpy = vi.mocked(keyColumn)
const mockCreateTextColumn =
  mocked(createTextColumn).mockReturnValue(fakeColumn)
const mockAutocompleteColumn =
  mocked(autocompleteColumn).mockReturnValue(fakeColumn)
const mockAutocompleteMultipleEnumColumn = mocked(
  autocompleteMultipleEnumColumn,
).mockReturnValue(fakeColumn)
const mockDateTimeColumn = mocked(dateTimeColumn).mockReturnValue(fakeColumn)

describe('columnFactory', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('createColumn', () => {
    it('should create a multipleEnum column for array types', () => {
      const config = {
        columnName: 'tags',
        typeInfo: {
          type: 'string',
          isArray: true,
        },
        enumeratedValues: ['tag1', 'tag2', 'tag3'],
        isRequired: true,
      }

      const column = createColumn(config)
      expect(mockAutocompleteMultipleEnumColumn).toHaveBeenCalled()

      expect(column.title).toBe('tags')
      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should create a boolean column for boolean type', () => {
      const config = {
        columnName: 'isActive',
        typeInfo: { type: 'boolean', isArray: false },
        enumeratedValues: [true, false],
        isRequired: false,
      }

      const column = createColumn(config)
      expect(mockAutocompleteColumn).toHaveBeenCalled()

      expect(column.title).toBe('isActive')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should create a date-time column for string type and date-time format', () => {
      const config = {
        columnName: 'isActive',
        typeInfo: { type: 'string', format: 'date-time', isArray: false },
        enumeratedValues: [true, false],
        isRequired: false,
      }

      const column = createColumn(config)
      expect(mockDateTimeColumn).toHaveBeenCalled()

      expect(column.title).toBe('isActive')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should create a number column for number type', () => {
      const config = {
        columnName: 'count',
        typeInfo: { type: 'number', isArray: false },
        enumeratedValues: [],
        isRequired: true,
      }

      const column = createColumn(config)
      expect(keyColumnSpy).toHaveBeenCalledWith('count', floatColumn)

      expect(column.title).toBe('count')
      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should create a number column for integer type', () => {
      const config = {
        columnName: 'age',
        typeInfo: { type: 'integer', isArray: false },
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)

      expect(column.title).toBe('age')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should create an enumerated column when enumeratedValues are provided', () => {
      const config = {
        columnName: 'status',
        typeInfo: { type: 'string', isArray: false },
        enumeratedValues: ['active', 'inactive', 'pending'],
        isRequired: true,
      }

      const column = createColumn(config)
      expect(mockAutocompleteColumn).toHaveBeenCalled()

      expect(column.title).toBe('status')
      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should create a text column as default', () => {
      const config = {
        columnName: 'description',
        typeInfo: null,
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)
      expect(mockCreateTextColumn).toHaveBeenCalled()

      expect(column.title).toBe('description')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should set required header class when isRequired is true', () => {
      const config = {
        columnName: 'name',
        typeInfo: { type: 'string', isArray: false },
        enumeratedValues: [],
        isRequired: true,
      }

      const column = createColumn(config)

      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should set normal header class when isRequired is false', () => {
      const config = {
        columnName: 'name',
        typeInfo: { type: 'string', isArray: false },
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)

      expect(column.headerClassName).toBe('header-cell')
    })
  })
})
