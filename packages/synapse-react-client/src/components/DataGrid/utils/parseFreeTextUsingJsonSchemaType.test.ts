import { describe, it, expect } from 'vitest'
import parseFreeTextGivenJsonSchemaType from './parseFreeTextUsingJsonSchemaType'

describe('parseFreeTextGivenJsonSchemaType', () => {
  it('returns string for undefined type', () => {
    expect(parseFreeTextGivenJsonSchemaType('abc')).toBe('abc')
    expect(parseFreeTextGivenJsonSchemaType('123')).toBe('123')
  })

  it('returns string for string type', () => {
    expect(parseFreeTextGivenJsonSchemaType('abc', 'string')).toBe('abc')
    expect(parseFreeTextGivenJsonSchemaType('123', 'string')).toBe('123')
    expect(parseFreeTextGivenJsonSchemaType('', 'string')).toBe('')
    expect(parseFreeTextGivenJsonSchemaType('1.0', 'string')).toBe('1.0')
  })

  it('parses number for number type', () => {
    expect(parseFreeTextGivenJsonSchemaType('123', 'number')).toBe(123)
    expect(parseFreeTextGivenJsonSchemaType('12.34', 'number')).toBe(12.34)
    expect(parseFreeTextGivenJsonSchemaType('1.0', 'number')).toBe(1.0)
  })

  it('returns input if number parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('abc', 'number')).toBe('abc')
    expect(parseFreeTextGivenJsonSchemaType('', 'number')).toBe('')
  })

  it('parses boolean for boolean type', () => {
    expect(parseFreeTextGivenJsonSchemaType('true', 'boolean')).toBe(true)
    expect(parseFreeTextGivenJsonSchemaType('false', 'boolean')).toBe(false)
    expect(parseFreeTextGivenJsonSchemaType('TRUE', 'boolean')).toBe(true)
    expect(parseFreeTextGivenJsonSchemaType('FALSE', 'boolean')).toBe(false)
  })

  it('returns input if boolean parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('yes', 'boolean')).toBe('yes')
    expect(parseFreeTextGivenJsonSchemaType('1', 'boolean')).toBe('1')
  })

  it('parses object for object type', () => {
    expect(parseFreeTextGivenJsonSchemaType('{"a":1}', 'object')).toEqual({
      a: 1,
    })
    expect(parseFreeTextGivenJsonSchemaType('[1,2,3]', 'object')).toEqual([
      1, 2, 3,
    ])
  })

  it('returns input if object parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('notjson', 'object')).toBe(
      'notjson',
    )
  })

  it('parses array for array type', () => {
    expect(parseFreeTextGivenJsonSchemaType('[1,2,3]', 'array')).toEqual([
      1, 2, 3,
    ])
    expect(parseFreeTextGivenJsonSchemaType('[]', 'array')).toEqual([])
  })

  it('returns input if array parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('notjson', 'array')).toBe('notjson')
  })

  it('returns input for unknown type', () => {
    expect(parseFreeTextGivenJsonSchemaType('abc', 'unknown' as any)).toBe(
      'abc',
    )
  })

  it('parses integer for integer type', () => {
    expect(parseFreeTextGivenJsonSchemaType('123', 'integer')).toBe(123)
    expect(parseFreeTextGivenJsonSchemaType('-456', 'integer')).toBe(-456)
    expect(parseFreeTextGivenJsonSchemaType('12.34', 'integer')).toBe(12)
    expect(parseFreeTextGivenJsonSchemaType('1.0', 'integer')).toBe(1)
  })

  it('returns input if integer parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('abc', 'integer')).toBe('abc')
    expect(parseFreeTextGivenJsonSchemaType('', 'integer')).toBe('')
  })

  it('parses null for null type', () => {
    expect(parseFreeTextGivenJsonSchemaType('null', 'null')).toBe(null)
    expect(parseFreeTextGivenJsonSchemaType('NULL', 'null')).toBe(null)
    expect(parseFreeTextGivenJsonSchemaType('Null', 'null')).toBe(null)
  })

  it('returns input if null parsing fails', () => {
    expect(parseFreeTextGivenJsonSchemaType('undefined', 'null')).toBe(
      'undefined',
    )
    expect(parseFreeTextGivenJsonSchemaType('', 'null')).toBe(null)
    expect(parseFreeTextGivenJsonSchemaType('null', 'null')).toBe(null)
    expect(parseFreeTextGivenJsonSchemaType('nil', 'null')).toBe('nil')
  })
})
