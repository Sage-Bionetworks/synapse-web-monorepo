import { describe, it, expect } from 'vitest'
import { extractColumnValidationMessages } from './extractColumnValidationMessages'

describe('extractColumnValidationMessages', () => {
  it('should extract Column name and message from a single validation message', () => {
    const messages = ['#/platform: null is not a valid enum value']
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(1)
    expect(result.get('platform')).toEqual(['null is not a valid enum value'])
  })

  it('should handle multiple messages for the same Column', () => {
    const messages = [
      '#/platform: null is not a valid enum value',
      '#/platform: required Column is missing',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(1)
    expect(result.get('platform')).toEqual([
      'null is not a valid enum value',
      'required Column is missing',
    ])
  })

  it('should handle multiple Columns with different messages', () => {
    const messages = [
      '#/platform: null is not a valid enum value',
      '#/version: must be a number',
      '#/name: cannot be empty',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(3)
    expect(result.get('platform')).toEqual(['null is not a valid enum value'])
    expect(result.get('version')).toEqual(['must be a number'])
    expect(result.get('name')).toEqual(['cannot be empty'])
  })

  it('should handle messages with array indices', () => {
    const messages = [
      '#/items/0: null is not a valid enum value',
      '#/items/1: must be a number',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(1)
    expect(result.get('items')).toEqual([
      'null is not a valid enum value',
      'must be a number',
    ])
  })

  it('should handle messages with both array and string columns', () => {
    const messages = [
      '#/items/0: null is not a valid enum value',
      '#/items/1: must be a number',
      '#/name: cannot be empty',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.get('items')).toEqual([
      'null is not a valid enum value',
      'must be a number',
    ])
    expect(result.get('name')).toEqual(['cannot be empty'])
  })

  it('should handle empty array', () => {
    const result = extractColumnValidationMessages([])

    expect(result.size).toBe(0)
  })

  it('should ignore invalid message formats', () => {
    const messages = [
      '#/platform: null is not a valid enum value',
      'invalid message without hash',
      'another invalid message',
      '#/version: must be a number',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(2)
    expect(result.get('platform')).toEqual(['null is not a valid enum value'])
    expect(result.get('version')).toEqual(['must be a number'])
  })

  it('should handle non-string values in array', () => {
    const messages = [
      '#/platform: null is not a valid enum value',
      null as any,
      undefined as any,
      123 as any,
      '#/version: must be a number',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(2)
    expect(result.get('platform')).toEqual(['null is not a valid enum value'])
    expect(result.get('version')).toEqual(['must be a number'])
  })

  it('should trim whitespace from Column names and messages', () => {
    const messages = [
      '  #/  platform  :   null is not a valid enum value  ',
      '#/version:must be a number',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(2)
    expect(result.get('platform')).toEqual(['null is not a valid enum value'])
    expect(result.get('version')).toEqual(['must be a number'])
  })

  it('should handle messages with multiple colons', () => {
    const messages = [
      '#/platform: Error: null is not valid: check documentation',
    ]
    const result = extractColumnValidationMessages(messages)

    expect(result.size).toBe(1)
    expect(result.get('platform')).toEqual([
      'Error: null is not valid: check documentation',
    ])
  })
})
