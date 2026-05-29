import { SchemaPropertiesMap } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { describe, expect, it, vi } from 'vitest'
import { createColumn } from './columnFactory'
import { modelColsToGrid } from './modelColsToGrid'

// Mock the columnFactory
vi.mock('./columnFactory', () => ({
  createColumn: vi.fn(config => ({
    title: config.columnName,
    headerClassName: config.isRequired ? 'header-cell-required' : 'header-cell',
    mockConfig: config,
  })),
}))

describe('modelColsToGrid', () => {
  it('should return empty array when columns are empty', () => {
    const result = modelColsToGrid([], [], {})
    expect(result).toEqual([])
  })

  it('should create columns in the correct order', () => {
    const columnNames = ['id', 'name', 'email', 'age']
    const columnOrder = [1, 0, 3, 2]

    const schemaPropertiesInfo: SchemaPropertiesMap = {
      id: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      name: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      email: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
      age: {
        type: { type: 'integer', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(4)
    expect(result[0].title).toBe('name') // columnOrder[0] = 1, columnNames[1] = 'name'
    expect(result[1].title).toBe('id') // columnOrder[1] = 0, columnNames[0] = 'id'
    expect(result[2].title).toBe('age') // columnOrder[2] = 3, columnNames[3] = 'age'
    expect(result[3].title).toBe('email') // columnOrder[3] = 2, columnNames[2] = 'email'
  })

  it('should pass correct configuration to createColumn', () => {
    const columnNames = ['status']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      status: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['active', 'inactive'],
        isRequired: true,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'status',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['active', 'inactive'],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.status,
    })
  })

  it('should handle missing schema properties gracefully', () => {
    const columnNames = ['unknownColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {}

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'unknownColumn',
      typeInfo: null,
      enumeratedValues: [],
      isRequired: false,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: undefined,
    })
  })

  it('should handle partial schema properties', () => {
    const columnNames = ['partialColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      partialColumn: {
        type: { type: 'number', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'partialColumn',
      typeInfo: { type: 'number', isArray: false },
      enumeratedValues: [],
      isRequired: false,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.partialColumn,
    })
  })

  it('should handle complex type objects with arrays', () => {
    const columnNames = ['complexColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      complexColumn: {
        type: {
          type: 'string',
          isArray: true,
        },
        enumeratedValues: ['value1', 'value2'],
        isRequired: true,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'complexColumn',
      typeInfo: {
        type: 'string',
        isArray: true,
      },
      enumeratedValues: ['value1', 'value2'],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.complexColumn,
    })
  })

  it('should handle undefined type gracefully', () => {
    const columnNames = ['undefinedTypeColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      undefinedTypeColumn: {
        type: undefined,
        enumeratedValues: ['test'],
        isRequired: false,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'undefinedTypeColumn',
      typeInfo: null,
      enumeratedValues: ['test'],
      isRequired: false,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.undefinedTypeColumn,
    })
  })

  it('should handle null enumeratedValues', () => {
    const columnNames = ['nullEnumColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      nullEnumColumn: {
        type: { type: 'string', isArray: false },
        enumeratedValues: null,
        isRequired: true,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'nullEnumColumn',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.nullEnumColumn,
    })
  })

  it('should handle multiple columns with mixed property configurations', () => {
    const columnNames = ['id', 'tags', 'active', 'count']
    const columnOrder = [0, 1, 2, 3]

    const schemaPropertiesInfo = {
      id: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      tags: {
        type: {
          type: 'string',
          isArray: true,
        },
        enumeratedValues: ['tag1', 'tag2'],
        isRequired: false,
      },
      active: {
        type: { type: 'boolean', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      count: {
        type: { type: 'integer', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toHaveLength(4)

    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'id',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.id,
    })

    expect((result[1] as any).mockConfig).toEqual({
      columnName: 'tags',
      typeInfo: {
        type: 'string',
        isArray: true,
      },
      enumeratedValues: ['tag1', 'tag2'],
      isRequired: false,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.tags,
    })

    expect((result[2] as any).mockConfig).toEqual({
      columnName: 'active',
      typeInfo: { type: 'boolean', isArray: false },
      enumeratedValues: [],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.active,
    })

    expect((result[3] as any).mockConfig).toEqual({
      columnName: 'count',
      typeInfo: { type: 'integer', isArray: false },
      enumeratedValues: [],
      isRequired: false,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.count,
    })
  })

  it('should handle empty columnOrder array', () => {
    const columnNames = ['id', 'name']
    const columnOrder: number[] = []

    const schemaPropertiesInfo = {
      id: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      name: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(result).toEqual([])
  })

  it('should call createColumn with correct parameters', () => {
    const createColumnMock = vi.mocked(createColumn)
    createColumnMock.mockClear()

    const columnNames = ['testColumn']
    const columnOrder = [0]

    const schemaPropertiesInfo = {
      testColumn: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['option1', 'option2'],
        isRequired: true,
      },
    }

    modelColsToGrid(columnNames, columnOrder, schemaPropertiesInfo)

    expect(createColumnMock).toHaveBeenCalledWith({
      columnName: 'testColumn',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['option1', 'option2'],
      isRequired: true,
      customWidth: undefined,
      description: undefined,
      disabled: undefined,
      isPinned: false,
      onTogglePin: undefined,
      showPinIcon: false,
      schemaPropertyInfo: schemaPropertiesInfo.testColumn,
    })
  })
})

// Integration test to ensure the functions work together correctly
describe('modelColsToGrid integration', () => {
  it('should create the correct column types for a realistic schema', () => {
    const columnNames = [
      'id',
      'name',
      'email',
      'age',
      'isActive',
      'tags',
      'status',
    ]
    const columnOrder = [0, 1, 2, 3, 4, 5, 6]

    const schemaPropertiesInfo = {
      id: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      name: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      email: {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
      age: {
        type: { type: 'integer', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
      isActive: {
        type: { type: 'boolean', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      tags: {
        type: {
          type: 'string',
          isArray: true,
        },
        enumeratedValues: ['frontend', 'backend', 'mobile'],
        isRequired: false,
      },
      status: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['active', 'inactive', 'pending'],
        isRequired: true,
      },
    }

    const columns = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
    )

    expect(columns).toHaveLength(7)

    // Verify each column is created correctly
    columns.forEach((column, index) => {
      const columnName = columnNames[columnOrder[index]]
      expect(column.title).toBe(columnName)
    })

    // Test individual column creation for specific types
    const idColumn = createColumn({
      columnName: 'id',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: true,
    })
    expect(idColumn.headerClassName).toBe('header-cell-required')

    const tagsColumn = createColumn({
      columnName: 'tags',
      typeInfo: {
        type: 'string',
        isArray: true,
      },
      enumeratedValues: ['frontend', 'backend', 'mobile'],
      isRequired: false,
    })
    expect(tagsColumn.headerClassName).toBe('header-cell')

    const statusColumn = createColumn({
      columnName: 'status',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['active', 'inactive', 'pending'],
      isRequired: true,
    })
    expect(statusColumn.headerClassName).toBe('header-cell-required')
  })
})

describe('modelColsToGrid - column pinning', () => {
  const columnNames = ['id', 'name', 'email', 'age']
  const columnOrder = [0, 1, 2, 3]
  const schemaPropertiesInfo: SchemaPropertiesMap = {
    id: {
      type: { type: 'string', isArray: false },
      isRequired: true,
      enumeratedValues: null,
    },
    name: {
      type: { type: 'string', isArray: false },
      isRequired: true,
      enumeratedValues: null,
    },
    email: {
      type: { type: 'string', isArray: false },
      isRequired: false,
      enumeratedValues: null,
    },
    age: {
      type: { type: 'integer', isArray: false },
      isRequired: false,
      enumeratedValues: null,
    },
  }

  it('should show pin icon only on the first column when handler is provided', () => {
    const onTogglePin = vi.fn()

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      new Set<number>(),
      onTogglePin,
    )

    expect(result).toHaveLength(4)
    expect((result[0] as any).mockConfig.showPinIcon).toBe(true)
    expect((result[1] as any).mockConfig.showPinIcon).toBe(false)
    expect((result[2] as any).mockConfig.showPinIcon).toBe(false)
    expect((result[3] as any).mockConfig.showPinIcon).toBe(false)
  })

  it('should not show pin icon on first column when handler is not provided', () => {
    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      new Set<number>(),
      undefined,
    )

    expect(result).toHaveLength(4)
    expect((result[0] as any).mockConfig.showPinIcon).toBe(false)
  })

  it('should set isPinned to true on first column when it is in pinnedColumns set', () => {
    const onTogglePin = vi.fn()
    const pinnedColumns = new Set<number>([0]) // Pin first column

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      pinnedColumns,
      onTogglePin,
    )

    expect(result).toHaveLength(4)
    expect((result[0] as any).mockConfig.isPinned).toBe(true)
  })

  it('should set isPinned to false on first column when pinnedColumns set is empty', () => {
    const onTogglePin = vi.fn()
    const pinnedColumns = new Set<number>()

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      pinnedColumns,
      onTogglePin,
    )

    expect(result).toHaveLength(4)
    expect((result[0] as any).mockConfig.isPinned).toBe(false)
  })

  it('should invoke callback with position 0 when first column pin is toggled', () => {
    const onTogglePin = vi.fn()

    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      new Set<number>(),
      onTogglePin,
    )

    expect(result).toHaveLength(4)

    const firstColumnToggle = (result[0] as any).mockConfig.onTogglePin
    expect(firstColumnToggle).toBeDefined()
    firstColumnToggle()
    expect(onTogglePin).toHaveBeenCalledWith(0)
  })

  it('should not provide onTogglePin callback on first column when handler is not defined', () => {
    const result = modelColsToGrid(
      columnNames,
      columnOrder,
      schemaPropertiesInfo,
      {},
      new Set<number>(),
      undefined,
    )

    expect(result).toHaveLength(4)
    expect((result[0] as any).mockConfig.onTogglePin).toBeUndefined()
  })

  it('should show pin icon on first column even when columns are reordered', () => {
    const onTogglePin = vi.fn()
    const reorderedColumnOrder = [1, 0, 3, 2] // Different order
    const pinnedColumns = new Set<number>([0]) // Pin first column (arrayIndex 0)

    const result = modelColsToGrid(
      columnNames,
      reorderedColumnOrder,
      schemaPropertiesInfo,
      {},
      pinnedColumns,
      onTogglePin,
    )

    expect(result).toHaveLength(4)

    // Pin icon should only be on first column
    expect((result[0] as any).mockConfig.showPinIcon).toBe(true)
    expect((result[0] as any).mockConfig.isPinned).toBe(true)

    // Other columns should not have pin icon
    expect((result[1] as any).mockConfig.showPinIcon).toBe(false)
    expect((result[2] as any).mockConfig.showPinIcon).toBe(false)
    expect((result[3] as any).mockConfig.showPinIcon).toBe(false)
  })
})
