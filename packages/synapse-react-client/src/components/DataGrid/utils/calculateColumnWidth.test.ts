import { describe, it, expect } from 'vitest'
import { calculateDefaultColumnWidth } from './calculateColumnWidth'
import { SchemaPropertyInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'

describe('calculateDefaultColumnWidth', () => {
  describe('Basic Width Calculation', () => {
    it('should return minimum width of 175px for short column names', () => {
      const width = calculateDefaultColumnWidth('id')
      expect(width).toBe(175)
    })

    it('should calculate width based on character length (11px per character)', () => {
      // 21 characters * 11px = 231px
      const width = calculateDefaultColumnWidth('this_is_a_long_column')
      expect(width).toBe(231) // 21 characters * 11px = 231px
    })

    it('should use character-based width when it exceeds minimum', () => {
      // 28 characters * 11px = 308px (exceeds 175px minimum)
      const columnName = 'a_very_long_column_name_here'
      const width = calculateDefaultColumnWidth(columnName)
      expect(width).toBe(308) // 28 characters * 11px
    })
  })

  describe('Date-Time Columns', () => {
    it('should use minimum width of 215px for date-time columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: 'date-time',
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('date', propertyInfo)
      expect(width).toBe(215)
    })

    it('should use character-based width for date-time columns when it exceeds 215px', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: 'date-time',
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      // 30 characters * 11px = 330px (exceeds 215px minimum)
      const columnName = 'very_long_datetime_column_name'
      const width = calculateDefaultColumnWidth(columnName, propertyInfo)
      expect(width).toBe(330) // 30 characters * 11px
    })

    it('should return 215px minimum for short date-time column names', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: 'date-time',
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('dt', propertyInfo)
      expect(width).toBe(215)
    })
  })

  describe('Standard Columns', () => {
    it('should use 175px minimum for string columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: undefined,
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('name', propertyInfo)
      expect(width).toBe(175)
    })

    it('should use 175px minimum for number columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'number',
          format: undefined,
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('age', propertyInfo)
      expect(width).toBe(175)
    })

    it('should use 175px minimum for boolean columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'boolean',
          format: undefined,
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('active', propertyInfo)
      expect(width).toBe(175)
    })
  })

  describe('Edge Cases', () => {
    it('should handle empty column names', () => {
      const width = calculateDefaultColumnWidth('')
      expect(width).toBe(175)
    })

    it('should handle undefined propertyInfo', () => {
      const width = calculateDefaultColumnWidth('column_name')
      expect(width).toBe(175)
    })

    it('should handle propertyInfo without type', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: undefined,
        isRequired: false,
        enumeratedValues: null,
      }

      const width = calculateDefaultColumnWidth('column', propertyInfo)
      expect(width).toBe(175)
    })

    it('should handle very long column names', () => {
      // 100 characters * 11px = 1100px
      const longName = 'a'.repeat(100)
      const width = calculateDefaultColumnWidth(longName)
      expect(width).toBe(1100)
    })

    it('should handle column names with special characters', () => {
      const width = calculateDefaultColumnWidth('user_email@domain')
      expect(width).toBe(187) // 17 characters * 11px = 187px
    })

    it('should handle array type columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: undefined,
          isArray: true,
        },
        isRequired: false,
        enumeratedValues: ['value1', 'value2'],
      }

      const width = calculateDefaultColumnWidth('tags', propertyInfo)
      expect(width).toBe(175)
    })
  })

  describe('Required Fields', () => {
    it('should calculate same width for required fields', () => {
      const requiredInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: undefined,
          isArray: false,
        },
        isRequired: true,
        enumeratedValues: null,
      }

      const optionalInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: undefined,
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: null,
      }

      const requiredWidth = calculateDefaultColumnWidth('field', requiredInfo)
      const optionalWidth = calculateDefaultColumnWidth('field', optionalInfo)

      expect(requiredWidth).toBe(optionalWidth)
    })
  })

  describe('Enumerated Values', () => {
    it('should calculate width for enumerated columns', () => {
      const propertyInfo: SchemaPropertyInfo = {
        type: {
          type: 'string',
          format: undefined,
          isArray: false,
        },
        isRequired: false,
        enumeratedValues: ['option1', 'option2', 'option3'],
      }

      const width = calculateDefaultColumnWidth('status', propertyInfo)
      expect(width).toBe(175)
    })
  })
})
