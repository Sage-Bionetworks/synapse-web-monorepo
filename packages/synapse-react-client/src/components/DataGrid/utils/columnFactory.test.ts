import {
  createTextColumn,
  floatColumn,
  keyColumn,
} from '@sage-bionetworks/react-datasheet-grid'
import { autocompleteColumn } from '../columns/AutocompleteColumn'
import { mocked } from 'storybook/test'
import { describe, expect, it } from 'vitest'
import { autocompleteMultipleEnumColumn } from '../columns/AutocompleteMultipleEnumColumn'
import { dateTimeColumn } from '../columns/DateTimeColumn'
import { createColumn } from './columnFactory'
import React, { isValidElement, ReactElement } from 'react'

vi.mock('../components/ColumnHeaderWithTooltip', () => ({
  ColumnHeaderWithTooltip: ({ name }: { name: string }) => name,
}))

vi.mock('@sage-bionetworks/react-datasheet-grid', async importActual => {
  const actual = await importActual<
    typeof import('@sage-bionetworks/react-datasheet-grid')
  >()
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

/** Helper to extract props from ColumnHeaderWithTooltip React element */
function getHeaderProps(title: unknown): {
  name?: string
  description?: string
  showPinIcon?: boolean
  isPinned?: boolean
  onTogglePin?: () => void
} {
  if (isValidElement(title)) {
    const element = title as ReactElement<{
      name: string
      description?: string
      showPinIcon?: boolean
      isPinned?: boolean
      onTogglePin?: () => void
    }>
    return {
      name: element.props.name,
      description: element.props.description,
      showPinIcon: element.props.showPinIcon,
      isPinned: element.props.isPinned,
      onTogglePin: element.props.onTogglePin,
    }
  }
  return {}
}

// For these tests, the mock column returns a concrete React element (not null)
// so the grid always has something to render during assertions.
const fakeColumn = {
  component: () => React.createElement('div'),
}

// Width calculation constants (from calculateColumnWidth.ts)
const CHAR_WIDTH_PX = 11
const DEFAULT_MIN_WIDTH = 175
const DATETIME_MIN_WIDTH = 215

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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('tags')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('isActive')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('isActive')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('count')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('age')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('status')
      expect(headerProps.description).toBeUndefined()
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

      const headerProps = getHeaderProps(column.title)
      expect(headerProps.name).toBe('description')
      expect(headerProps.description).toBeUndefined()
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
      it('should use customWidth when provided', () => {
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

      it('should calculate width based on column name when customWidth not provided', () => {
        const config = {
          columnName: 'shortName',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        const expectedWidth = Math.max(
          DEFAULT_MIN_WIDTH,
          'shortName'.length * CHAR_WIDTH_PX,
        )
        expect(column.minWidth).toBe(expectedWidth)
        expect(column.basis).toBe(expectedWidth)
      })

      it('should ensure minimum width for date-time columns', () => {
        const config = {
          columnName: 'dt',
          typeInfo: { type: 'string', format: 'date-time', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        expect(column.minWidth).toBeGreaterThanOrEqual(DATETIME_MIN_WIDTH)
        expect(column.basis).toBeGreaterThanOrEqual(DATETIME_MIN_WIDTH)
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

      it('should set basis equal to calculated width for fixed sizing', () => {
        const config = {
          columnName: 'veryLongColumnNameThatExceedsMinimum',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        const expectedWidth = Math.max(
          DEFAULT_MIN_WIDTH,
          'veryLongColumnNameThatExceedsMinimum'.length * CHAR_WIDTH_PX,
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

    describe('Pin Icon Support', () => {
      it('should pass showPinIcon prop to header when provided', () => {
        const config = {
          columnName: 'firstColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          showPinIcon: true,
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBe(true)
      })

      it('should pass isPinned prop to header when provided', () => {
        const config = {
          columnName: 'pinnedColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          showPinIcon: true,
          isPinned: true,
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBe(true)
        expect(headerProps.isPinned).toBe(true)
      })

      it('should pass onTogglePin handler to header when provided', () => {
        const mockToggleHandler = vi.fn()
        const config = {
          columnName: 'toggleableColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          showPinIcon: true,
          onTogglePin: mockToggleHandler,
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBe(true)
        expect(headerProps.onTogglePin).toBe(mockToggleHandler)
      })

      it('should not show pin icon by default', () => {
        const config = {
          columnName: 'regularColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBeUndefined()
        expect(headerProps.isPinned).toBeUndefined()
        expect(headerProps.onTogglePin).toBeUndefined()
      })

      it('should work with pin props and custom width together', () => {
        const mockToggleHandler = vi.fn()
        const config = {
          columnName: 'customPinnedColumn',
          typeInfo: { type: 'number', isArray: false },
          enumeratedValues: [],
          isRequired: true,
          showPinIcon: true,
          isPinned: true,
          onTogglePin: mockToggleHandler,
          customWidth: 250,
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBe(true)
        expect(headerProps.isPinned).toBe(true)
        expect(headerProps.onTogglePin).toBe(mockToggleHandler)
        expect(column.minWidth).toBe(250)
        expect(column.basis).toBe(250)
      })
    })

    describe('Width Calculations with Header Icons', () => {
      it('should add extra width for pin icon', () => {
        const config = {
          columnName: 'veryLongColumnNameThatExceedsMinimumWidth',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          showPinIcon: true,
        }

        const column = createColumn(config)

        const baseWidth = config.columnName.length * CHAR_WIDTH_PX
        expect(column.minWidth).toBeGreaterThan(baseWidth)
      })

      it('should add extra width for description tooltip', () => {
        const config = {
          columnName: 'anotherVeryLongColumnName',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          description: 'This is a description',
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.description).toBe('This is a description')
        const baseWidth = config.columnName.length * CHAR_WIDTH_PX
        expect(column.minWidth).toBeGreaterThan(baseWidth)
      })

      it('should add extra width for both pin and description icons', () => {
        const config = {
          columnName: 'columnWithBothIcons',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
          showPinIcon: true,
          description: 'Column description',
        }

        const column = createColumn(config)
        const headerProps = getHeaderProps(column.title)

        expect(headerProps.showPinIcon).toBe(true)
        expect(headerProps.description).toBe('Column description')
        const baseWidth = config.columnName.length * CHAR_WIDTH_PX
        expect(column.minWidth).toBeGreaterThan(baseWidth)
      })

      it('should not add extra width when no icons are present', () => {
        const config = {
          columnName: 'regularColumn',
          typeInfo: { type: 'string', isArray: false },
          enumeratedValues: [],
          isRequired: false,
        }

        const column = createColumn(config)

        const expectedWidth = Math.max(
          DEFAULT_MIN_WIDTH,
          config.columnName.length * CHAR_WIDTH_PX,
        )
        expect(column.minWidth).toBe(expectedWidth)
      })
    })
  })
})
