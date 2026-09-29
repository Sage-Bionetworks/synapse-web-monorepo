import { RJSFSchema } from '@rjsf/utils'
import {
  applyFieldType,
  choiceOptions,
  detectFieldType,
  fieldTypeLabel,
  generatePropertyKey,
  sanitizePropertyKey,
} from './schemaFieldUtils'

describe('detectFieldType', () => {
  it('detects a file field by format', () => {
    expect(
      detectFieldType({ type: 'number', format: 'synapse-filehandle-id' }),
    ).toBe('file')
  })

  it('detects a choice field as a string with an enum', () => {
    expect(detectFieldType({ type: 'string', enum: ['a', 'b'] })).toBe('choice')
  })

  it('detects a multi-choice field as a unique-items array of string enum values', () => {
    expect(
      detectFieldType({
        type: 'array',
        items: { type: 'string', enum: ['a', 'b'] },
        uniqueItems: true,
      }),
    ).toBe('multiChoice')
  })

  it.each<[string, RJSFSchema]>([
    ['without uniqueItems', { items: { type: 'string', enum: ['a'] } }],
    [
      'with non-string items',
      { items: { type: 'number', enum: [1] }, uniqueItems: true },
    ],
    [
      'with tuple items',
      { items: [{ type: 'string', enum: ['a'] }], uniqueItems: true },
    ],
  ])('treats an enum array %s as advanced', (_, shape) => {
    expect(detectFieldType({ type: 'array', ...shape })).toBeNull()
  })

  it('detects a plain string as text', () => {
    expect(detectFieldType({ type: 'string' })).toBe('text')
  })

  it('detects number and integer as number', () => {
    expect(detectFieldType({ type: 'number' })).toBe('number')
    expect(detectFieldType({ type: 'integer' })).toBe('number')
  })

  it('detects boolean', () => {
    expect(detectFieldType({ type: 'boolean' })).toBe('boolean')
  })

  it('returns null for an unrecognized shape (advanced)', () => {
    expect(detectFieldType({ type: 'array' })).toBeNull()
  })

  it('returns null for undefined', () => {
    expect(detectFieldType(undefined)).toBeNull()
  })
})

describe('fieldTypeLabel', () => {
  it('labels every simple field type', () => {
    expect(fieldTypeLabel('text')).toBe('Text')
    expect(fieldTypeLabel('number')).toBe('Number')
    expect(fieldTypeLabel('boolean')).toBe('Yes / No')
    expect(fieldTypeLabel('choice')).toBe('Single choice')
    expect(fieldTypeLabel('multiChoice')).toBe('Multiple choice (select many)')
    expect(fieldTypeLabel('file')).toBe('File upload')
  })

  it('labels null as Advanced', () => {
    expect(fieldTypeLabel(null)).toBe('Advanced')
  })
})

describe('applyFieldType', () => {
  it('preserves title and description across a type change', () => {
    const next = applyFieldType(
      { type: 'string', title: 'My field', description: 'Help text' },
      'number',
    )
    expect(next).toMatchObject({ title: 'My field', description: 'Help text' })
  })

  it('builds a text field', () => {
    expect(applyFieldType({}, 'text')).toMatchObject({ type: 'string' })
  })

  it('builds a boolean field', () => {
    expect(applyFieldType({}, 'boolean')).toMatchObject({ type: 'boolean' })
  })

  it('builds a file field with the synapse-filehandle-id format', () => {
    expect(applyFieldType({}, 'file')).toMatchObject({
      type: 'number',
      format: 'synapse-filehandle-id',
    })
  })

  it('builds a choice field with a default option when there is no existing enum', () => {
    expect(applyFieldType({ type: 'string' }, 'choice')).toMatchObject({
      type: 'string',
      enum: ['Option 1'],
    })
  })

  it('preserves an existing enum when switching into choice', () => {
    expect(
      applyFieldType({ type: 'string', enum: ['Yes', 'No'] }, 'choice'),
    ).toMatchObject({ enum: ['Yes', 'No'] })
  })

  it.each<[string, RJSFSchema]>([
    ['choice', { type: 'string', enum: [] }],
    ['multiChoice', { type: 'array', items: { type: 'string', enum: [] } }],
  ])(
    'falls back to a default option when the existing %s enum is empty',
    (_, prev) => {
      expect(choiceOptions(applyFieldType(prev, 'choice'))).toEqual([
        'Option 1',
      ])
      expect(choiceOptions(applyFieldType(prev, 'multiChoice'))).toEqual([
        'Option 1',
      ])
    },
  )

  it('builds a multi-choice field as a unique-items array of string enum values', () => {
    expect(applyFieldType({}, 'multiChoice')).toMatchObject({
      type: 'array',
      items: { type: 'string', enum: ['Option 1'] },
      uniqueItems: true,
    })
  })

  it('carries options between single and multiple choice', () => {
    const multi = applyFieldType(
      { type: 'string', enum: ['Yes', 'No'] },
      'multiChoice',
    )
    expect(multi).toMatchObject({ items: { enum: ['Yes', 'No'] } })
    expect(applyFieldType(multi, 'choice')).toEqual({
      type: 'string',
      enum: ['Yes', 'No'],
    })
  })

  it('drops items and uniqueItems when switching a multi-choice field to a non-choice type', () => {
    const next = applyFieldType(
      {
        type: 'array',
        items: { type: 'string', enum: ['a'] },
        uniqueItems: true,
      },
      'text',
    )
    expect(next).not.toHaveProperty('items')
    expect(next).not.toHaveProperty('uniqueItems')
  })

  it('drops a stale enum when switching a choice field to a non-choice type', () => {
    expect(
      applyFieldType({ type: 'string', enum: ['Yes', 'No'] }, 'text'),
    ).not.toHaveProperty('enum')
  })
})

describe('generatePropertyKey', () => {
  it('derives a camelCase key from a multi-word title', () => {
    expect(generatePropertyKey('Intended Data Use', new Set())).toBe(
      'intendedDataUse',
    )
  })

  it('strips characters outside letters, digits, and whitespace', () => {
    expect(generatePropertyKey('Data Use?! (required)', new Set())).toBe(
      'dataUseRequired',
    )
  })

  it('falls back to "field" when the title has no usable characters', () => {
    expect(generatePropertyKey('???', new Set())).toBe('field')
  })

  it('appends a numeric suffix to avoid an existing key', () => {
    expect(generatePropertyKey('Title', new Set(['title']))).toBe('title2')
  })

  it('keeps incrementing the suffix past multiple collisions', () => {
    expect(
      generatePropertyKey('Title', new Set(['title', 'title2', 'title3'])),
    ).toBe('title4')
  })
})

describe('sanitizePropertyKey', () => {
  it('strips characters that are not valid in a JS identifier', () => {
    expect(sanitizePropertyKey('my field!')).toBe('myfield')
  })

  it('preserves existing casing, unlike generatePropertyKey', () => {
    expect(sanitizePropertyKey('MyField')).toBe('MyField')
  })

  it('prefixes an underscore when the sanitized key would start with a digit', () => {
    expect(sanitizePropertyKey('123field')).toBe('_123field')
  })

  it('preserves underscores', () => {
    expect(sanitizePropertyKey('my_field')).toBe('my_field')
  })
})
