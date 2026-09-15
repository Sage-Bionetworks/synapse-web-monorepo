import {
  applyFieldType,
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
