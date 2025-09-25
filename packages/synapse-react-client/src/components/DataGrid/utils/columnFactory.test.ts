import { describe, it, expect } from 'vitest'
import { createColumn } from './columnFactory'
import { TypeInfo } from '../../../utils/jsonschema/getType'

describe('columnFactory', () => {
  describe('createColumn', () => {
    it('should create a multipleEnum column for array types', () => {
      const config = {
        columnName: 'tags',
        typeInfo: { type: 'string' } as TypeInfo,
        enumeratedValues: ['tag1', 'tag2', 'tag3'],
        isRequired: true,
      }

      const column = createColumn(config)

      expect(column.title).toBe('tags')
      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should create a boolean column for boolean type', () => {
      const config = {
        columnName: 'isActive',
        typeInfo: { type: 'boolean' } as TypeInfo,
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)

      expect(column.title).toBe('isActive')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should create a number column for number type', () => {
      const config = {
        columnName: 'count',
        typeInfo: { type: 'number' } as TypeInfo,
        enumeratedValues: [],
        isRequired: true,
      }

      const column = createColumn(config)

      expect(column.title).toBe('count')
      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should create a number column for integer type', () => {
      const config = {
        columnName: 'age',
        typeInfo: { type: 'integer' } as TypeInfo,
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
        typeInfo: { type: 'string' } as TypeInfo,
        enumeratedValues: ['active', 'inactive', 'pending'],
        isRequired: true,
      }

      const column = createColumn(config)

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

      expect(column.title).toBe('description')
      expect(column.headerClassName).toBe('header-cell')
    })

    it('should set required header class when isRequired is true', () => {
      const config = {
        columnName: 'name',
        typeInfo: { type: 'string' } as TypeInfo,
        enumeratedValues: [],
        isRequired: true,
      }

      const column = createColumn(config)

      expect(column.headerClassName).toBe('header-cell-required')
    })

    it('should set normal header class when isRequired is false', () => {
      const config = {
        columnName: 'name',
        typeInfo: { type: 'string' } as TypeInfo,
        enumeratedValues: [],
        isRequired: false,
      }

      const column = createColumn(config)

      expect(column.headerClassName).toBe('header-cell')
    })
  })
})
