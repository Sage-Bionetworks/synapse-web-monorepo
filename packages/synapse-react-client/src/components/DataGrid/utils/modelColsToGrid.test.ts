import { describe, it, expect, vi } from 'vitest'
import { modelColsToGrid } from './modelColsToGrid'
import { GridModelSnapshot } from '../DataGridTypes'
import { createColumn } from './columnFactory'

// Mock the columnFactory
vi.mock('./columnFactory', () => ({
  createColumn: vi.fn(config => ({
    title: config.columnName,
    headerClassName: config.isRequired ? 'header-cell-required' : 'header-cell',
    mockConfig: config,
  })),
}))

describe('modelColsToGrid', () => {
  it('should return empty array when modelSnapshot is null', () => {
    const result = modelColsToGrid(null as any, {})
    expect(result).toEqual([])
  })

  it('should return empty array when modelSnapshot is undefined', () => {
    const result = modelColsToGrid(undefined as any, {})
    expect(result).toEqual([])
  })

  it('should create columns in the correct order', () => {
    const modelSnapshot = {
      columnNames: ['id', 'name', 'email', 'age'],
      columnOrder: [1, 0, 3, 2],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

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
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(4)
    expect(result[0].title).toBe('name') // columnOrder[0] = 1, columnNames[1] = 'name'
    expect(result[1].title).toBe('id') // columnOrder[1] = 0, columnNames[0] = 'id'
    expect(result[2].title).toBe('age') // columnOrder[2] = 3, columnNames[3] = 'age'
    expect(result[3].title).toBe('email') // columnOrder[3] = 2, columnNames[2] = 'email'
  })

  it('should pass correct configuration to createColumn', () => {
    const modelSnapshot = {
      columnNames: ['status'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      status: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['active', 'inactive'],
        isRequired: true,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'status',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['active', 'inactive'],
      isRequired: true,
    })
  })

  it('should handle missing schema properties gracefully', () => {
    const modelSnapshot = {
      columnNames: ['unknownColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {}

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'unknownColumn',
      typeInfo: null,
      enumeratedValues: [],
      isRequired: false,
    })
  })

  it('should handle partial schema properties', () => {
    const modelSnapshot = {
      columnNames: ['partialColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      partialColumn: {
        type: { type: 'number', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'partialColumn',
      typeInfo: { type: 'number', isArray: false },
      enumeratedValues: [],
      isRequired: false,
    })
  })

  it('should handle complex type objects with arrays', () => {
    const modelSnapshot = {
      columnNames: ['complexColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      complexColumn: {
        type: {
          type: 'array',
          isArray: true,
          itemType: { type: 'string', isArray: false },
        },
        enumeratedValues: ['value1', 'value2'],
        isRequired: true,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'complexColumn',
      typeInfo: {
        type: 'array',
        isArray: true,
        itemType: { type: 'string', isArray: false },
      },
      enumeratedValues: ['value1', 'value2'],
      isRequired: true,
    })
  })

  it('should handle undefined type gracefully', () => {
    const modelSnapshot = {
      columnNames: ['undefinedTypeColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      undefinedTypeColumn: {
        type: undefined,
        enumeratedValues: ['test'],
        isRequired: false,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'undefinedTypeColumn',
      typeInfo: null,
      enumeratedValues: ['test'],
      isRequired: false,
    })
  })

  it('should handle null enumeratedValues', () => {
    const modelSnapshot = {
      columnNames: ['nullEnumColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      nullEnumColumn: {
        type: { type: 'string', isArray: false },
        enumeratedValues: null,
        isRequired: true,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(1)
    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'nullEnumColumn',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: true,
    })
  })

  it('should handle multiple columns with mixed property configurations', () => {
    const modelSnapshot = {
      columnNames: ['id', 'tags', 'active', 'count'],
      columnOrder: [0, 1, 2, 3],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      id: {
        type: { type: 'string', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
      tags: {
        type: {
          type: 'array',
          isArray: true,
          itemType: { type: 'string', isArray: false },
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

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(4)

    expect((result[0] as any).mockConfig).toEqual({
      columnName: 'id',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: true,
    })

    expect((result[1] as any).mockConfig).toEqual({
      columnName: 'tags',
      typeInfo: {
        type: 'array',
        isArray: true,
        itemType: { type: 'string', isArray: false },
      },
      enumeratedValues: ['tag1', 'tag2'],
      isRequired: false,
    })

    expect((result[2] as any).mockConfig).toEqual({
      columnName: 'active',
      typeInfo: { type: 'boolean', isArray: false },
      enumeratedValues: [],
      isRequired: true,
    })

    expect((result[3] as any).mockConfig).toEqual({
      columnName: 'count',
      typeInfo: { type: 'integer', isArray: false },
      enumeratedValues: [],
      isRequired: false,
    })
  })

  it('should handle empty columnOrder array', () => {
    const modelSnapshot = {
      columnNames: ['id', 'name'],
      columnOrder: [],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

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

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toEqual([])
  })

  it('should handle mismatched columnOrder indices', () => {
    const modelSnapshot = {
      columnNames: ['a', 'b'],
      columnOrder: [0, 1, 2], // Index 2 doesn't exist in columnNames
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const result = modelColsToGrid(modelSnapshot, {})

    expect(result).toHaveLength(3)
    expect(result[0].title).toBe('a')
    expect(result[1].title).toBe('b')
    expect(result[2].title).toBeUndefined() // columnNames[2] is undefined
  })

  it('should handle negative columnOrder indices', () => {
    const modelSnapshot = {
      columnNames: ['a', 'b'],
      columnOrder: [-1, 0, 1],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const result = modelColsToGrid(modelSnapshot, {})

    expect(result).toHaveLength(3)
    expect(result[0].title).toBeUndefined() // columnNames[-1] is undefined
    expect(result[1].title).toBe('a')
    expect(result[2].title).toBe('b')
  })

  it('should handle empty string column names', () => {
    const modelSnapshot = {
      columnNames: ['', 'validName'],
      columnOrder: [0, 1],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      '': {
        type: { type: 'string', isArray: false },
        isRequired: false,
        enumeratedValues: null,
      },
      validName: {
        type: { type: 'number', isArray: false },
        isRequired: true,
        enumeratedValues: null,
      },
    }

    const result = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(result).toHaveLength(2)
    expect(result[0].title).toBe('')
    expect(result[1].title).toBe('validName')
  })

  it('should call createColumn with correct parameters', () => {
    const createColumnMock = vi.mocked(createColumn)
    createColumnMock.mockClear()

    const modelSnapshot = {
      columnNames: ['testColumn'],
      columnOrder: [0],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

    const schemaPropertiesInfo = {
      testColumn: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['option1', 'option2'],
        isRequired: true,
      },
    }

    modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(createColumnMock).toHaveBeenCalledWith({
      columnName: 'testColumn',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['option1', 'option2'],
      isRequired: true,
    })
  })
})

// Integration test to ensure the functions work together correctly
describe('modelColsToGrid integration', () => {
  it('should create the correct column types for a realistic schema', () => {
    const modelSnapshot = {
      columnNames: ['id', 'name', 'email', 'age', 'isActive', 'tags', 'status'],
      columnOrder: [0, 1, 2, 3, 4, 5, 6],
      rows: [],
      selections: {},
    } as unknown as GridModelSnapshot

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
          type: 'array',
          isArray: true,
          itemType: { type: 'string', isArray: false },
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

    const columns = modelColsToGrid(modelSnapshot, schemaPropertiesInfo)

    expect(columns).toHaveLength(7)

    // Verify each column is created correctly
    columns.forEach((column, index) => {
      const columnName =
        modelSnapshot.columnNames[modelSnapshot.columnOrder[index]]
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
        type: 'array',
        isArray: true,
        itemType: { type: 'string', isArray: false },
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

describe('Edge cases', () => {
  describe('createColumn edge cases', () => {
    it('should handle undefined typeInfo', () => {
      const config = {
        columnName: 'test',
        typeInfo: null,
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)
      expect(column.title).toBe('test')
    })

    it('should handle null enumeratedValues', () => {
      const config = {
        columnName: 'test',
        typeInfo: { type: 'string', isArray: false },
        enumeratedValues: null as any,
        isRequired: false,
      }

      const column = createColumn(config)
      expect(column.title).toBe('test')
    })

    it('should handle empty string column name', () => {
      const config = {
        columnName: '',
        typeInfo: { type: 'string', isArray: false },
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)
      expect(column.title).toBe('')
    })
  })

  describe('modelColsToGrid edge cases', () => {
    it('should handle mismatched columnOrder indices', () => {
      const modelSnapshot = {
        columnNames: ['a', 'b'],
        columnOrder: [0, 1, 2], // Index 2 doesn't exist in columnNames
        rows: [],
        selections: {},
      } as unknown as GridModelSnapshot

      const result = modelColsToGrid(modelSnapshot, {})

      expect(result).toHaveLength(3)
      expect(result[0].title).toBe('a')
      expect(result[1].title).toBe('b')
      expect(result[2].title).toBeUndefined() // columnNames[2] is undefined
    })

    it('should handle negative columnOrder indices', () => {
      const modelSnapshot = {
        columnNames: ['a', 'b'],
        columnOrder: [-1, 0, 1],
        rows: [],
        selections: {},
      } as unknown as GridModelSnapshot

      const result = modelColsToGrid(modelSnapshot, {})

      expect(result).toHaveLength(3)
      expect(result[0].title).toBeUndefined() // columnNames[-1] is undefined
      expect(result[1].title).toBe('a')
      expect(result[2].title).toBe('b')
    })
  })
})
