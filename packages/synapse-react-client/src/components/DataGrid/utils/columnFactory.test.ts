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

    describe('Custom Width Support', () => {
      it('should use customWidth when provided for text column', () => {
        const config = {
          columnName: 'description',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          customWidth: 300,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(300)
        expect(column.basis).toBe(300)
      })

      it('should use customWidth when provided for number column', () => {
        const config = {
          columnName: 'count',
          typeInfo: { type: 'number', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          customWidth: 150,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(150)
        expect(column.basis).toBe(150)
      })

      it('should use customWidth when provided for enumerated column', () => {
        const config = {
          columnName: 'status',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: ['active', 'inactive'],
          isRequired: false,
          customWidth: 200,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(200)
        expect(column.basis).toBe(200)
      })

      it('should use customWidth when provided for boolean column', () => {
        const config = {
          columnName: 'isActive',
          typeInfo: { type: 'boolean', isArray: false },
          enumeratedValues: [true, false],
          isRequired: false,
          customWidth: 120,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(120)
        expect(column.basis).toBe(120)
      })

      it('should use customWidth when provided for multipleEnum column', () => {
        const config = {
          columnName: 'tags',
          typeInfo: { type: 'string', isArray: true },
          enumeratedValues: ['tag1', 'tag2', 'tag3'],
          isRequired: false,
          customWidth: 250,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(250)
        expect(column.basis).toBe(250)
      })

      it('should use customWidth when provided for date-time column', () => {
        const config = {
          columnName: 'createdAt',
          typeInfo: { type: 'string', format: 'date-time', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          customWidth: 280,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBe(280)
        expect(column.basis).toBe(280)
      })

      it('should calculate width based on column name when customWidth not provided', () => {
        const config = {
          columnName: 'shortName',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        // Width calculation: Math.max(175, 'shortName'.length * 10) = Math.max(175, 90) = 175
        expect(column.minWidth).toBe(175)
        expect(column.basis).toBe(175)
      })

      it('should ensure minimum width of 215 for date-time columns', () => {
        const config = {
          columnName: 'dt',
          typeInfo: { type: 'string', format: 'date-time', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        // Date-time columns have special handling: Math.max(calculateColumnWidth(columnName), 215)
        expect(column.minWidth).toBeGreaterThanOrEqual(215)
        expect(column.basis).toBeGreaterThanOrEqual(215)
      })
    })

    describe('Fixed Width Sizing for Column Resize', () => {
      it('should set grow:0 and shrink:0 for all column types to support manual resize', () => {
        const configs = [
          {
            columnName: 'text',
            typeInfo: { type: 'string', isArray: false },
            enumeratedValues: [],
            isRequired: false,
          },
          {
            columnName: 'number',
            typeInfo: { type: 'number', isArray: false },
            enumeratedValues: [],
            isRequired: false,
          },
          {
            columnName: 'boolean',
            typeInfo: { type: 'boolean', isArray: false },
            enumeratedValues: [true, false],
            isRequired: false,
          },
          {
            columnName: 'enum',
            typeInfo: { type: 'string', isArray: false },
            enumeratedValues: ['a', 'b'],
            isRequired: false,
          },
          {
            columnName: 'multiEnum',
            typeInfo: { type: 'string', isArray: true },
            enumeratedValues: ['x', 'y'],
            isRequired: false,
          },
          {
            columnName: 'datetime',
            typeInfo: { type: 'string', format: 'date-time', isArray: false },
            enumeratedValues: [],
            isRequired: false,
          },
        ]

        configs.forEach(config => {
          const column = createColumn(config)
          expect(column.grow).toBe(0)
          expect(column.shrink).toBe(0)
        })
      })

      it('should set basis property equal to width for fixed sizing', () => {
        const config = {
          columnName: 'testColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          customWidth: 350,
        }

        const column = createColumn(config)

        expect(column.basis).toBe(350)
        expect(column.minWidth).toBe(350)
        expect(column.grow).toBe(0)
        expect(column.shrink).toBe(0)
      })

      it('should maintain fixed sizing when width is calculated', () => {
        const config = {
          columnName: 'veryLongColumnNameThatExceedsMinimum',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        // Width should be calculaßted based on name length
        // 11px
        const expectedWidth = Math.max(
          175,
          'veryLongColumnNameThatExceedsMinimum'.length * 11,
        )
        expect(column.basis).toBe(expectedWidth)
        expect(column.minWidth).toBe(expectedWidth)
        expect(column.grow).toBe(0)
        expect(column.shrink).toBe(0)
      })
    })

    describe('Disabled Column Support', () => {
      it('should set disabled property when provided', () => {
        const config = {
          columnName: 'readOnlyField',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          disabled: true,
        }

        const column = createColumn(config)

        expect(column.disabled).toBe(true)
      })

      it('should not set disabled property when not provided', () => {
        const config = {
          columnName: 'editableField',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        expect(column.disabled).toBeUndefined()
      })

      it('should work with customWidth and disabled together', () => {
        const config = {
          columnName: 'lockedField',
          typeInfo: { type: 'number', isArray: false },
          enumeratedValues: [],
          isRequired: true,
          disabled: true,
          customWidth: 180,
        }

        const column = createColumn(config)

        expect(column.disabled).toBe(true)
        expect(column.minWidth).toBe(180)
        expect(column.basis).toBe(180)
        expect(column.grow).toBe(0)
        expect(column.shrink).toBe(0)
        expect(column.headerClassName).toBe('header-cell-required')
      })
    })
  })
})
