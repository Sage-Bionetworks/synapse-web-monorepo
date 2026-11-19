import { ALLOWED_VALUES_MESSAGE } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import {
  fairSectionToRjsf,
  FairField,
  FairFormSection,
  parseFairFormSections,
  summarizeFormAnswers,
  validateFairSection,
} from './fairFormToRjsf'

// Comprehensive set of FairField variants
const fields: FairField[] = [
  { name: 'full_name', type: 'string', validation: { required: true } },
  { name: 'nickname', type: 'string', validation: { required: false } },
  {
    name: 'bio',
    type: 'text',
    validation: { required: true, maximum: '4096' },
  },
  { name: 'notes', type: 'markdown', validation: { required: false } },
  { name: 'agree_to_terms', type: 'boolean', validation: { required: true } },
  { name: 'end_date', type: 'date', validation: { required: true } },
  {
    name: 'sector',
    type: 'list',
    validation: { required: true },
    options: [
      { text: 'Academia', value: 'Academia' },
      { text: 'Pharma', value: 'Pharma' },
    ],
  },
  {
    name: 'phone_number',
    type: 'phone',
    validation: { required: false, maximum: '20' },
  },
  {
    name: 'section_heading',
    type: 'label',
    label: 'Section heading',
    // FAIR marks this required too, but a section subheading is never part of `required`.
    validation: { required: true },
  },
]

const section: FairFormSection = { key: 'about', fields }

describe('fairSectionToRjsf', () => {
  test('preserves FAIR field order in ui:order', () => {
    const { uiSchema } = fairSectionToRjsf(section)
    expect(uiSchema['ui:order']).toEqual(fields.map(f => f.name))
  })

  test('sector becomes a oneOf matching FAIR option values', () => {
    const { schema } = fairSectionToRjsf(section)
    const sectorSchema = schema.properties!.sector as {
      oneOf: { const: string; title: string }[]
    }
    expect(sectorSchema.oneOf.map(o => o.const)).toEqual(['Academia', 'Pharma'])
  })

  test('text fields get the textarea widget and a numeric maxLength', () => {
    const { schema, uiSchema } = fairSectionToRjsf(section)
    expect(uiSchema.bio).toEqual({
      'ui:widget': 'textarea',
      'ui:placeholder': undefined,
    })
    const bioSchema = schema.properties!.bio as { maxLength: unknown }
    expect(bioSchema.maxLength).toBe(4096)
    expect(typeof bioSchema.maxLength).toBe('number')
  })

  test('date fields get format: date-time and the date-only DateWidget (no time picker)', () => {
    const { schema, uiSchema } = fairSectionToRjsf(section)
    expect(schema.properties!.end_date).toMatchObject({
      type: 'string',
      format: 'date-time',
    })
    expect(uiSchema.end_date).toEqual({
      'ui:widget': 'DateWidget',
    })
  })

  test('label fields render as a null-typed fairLabel field and are never required', () => {
    const { schema, uiSchema } = fairSectionToRjsf(section)
    expect(schema.properties!.section_heading).toMatchObject({
      type: 'null',
      title: 'Section heading',
    })
    expect(uiSchema.section_heading).toEqual({
      'ui:field': 'fairLabel',
      'ui:label': false,
    })
    expect(schema.required).not.toContain('section_heading')
  })

  test('required contains exactly the fields FAIR marks validation.required === true, excluding labels', () => {
    const { schema } = fairSectionToRjsf(section)
    expect(schema.required).toEqual([
      'full_name',
      'bio',
      'agree_to_terms',
      'end_date',
      'sector',
    ])
  })

  test('an unsupported field type never renders and is returned in unsupported', () => {
    const sectionWithAuthField: FairFormSection = {
      key: 'about',
      fields: [{ name: 'sso_login', type: 'auth', label: 'Sign in' }],
    }
    const { schema, unsupported } = fairSectionToRjsf(sectionWithAuthField)
    expect(unsupported.map(f => f.name)).toEqual(['sso_login'])
    expect(schema.properties).not.toHaveProperty('sso_login')
  })
})

describe('FAIR string formats', () => {
  const formattedSection: FairFormSection = {
    key: 'about',
    fields: [
      { name: 'email', type: 'string', validation: { format: 'email' } },
      { name: 'website', type: 'string', validation: { format: 'uri' } },
      { name: 'orcid_uuid', type: 'string', validation: { format: 'uuid' } },
      { name: 'other', type: 'string', validation: { format: 'ipv4' } },
      { name: 'plain', type: 'string' },
    ],
  }
  const form = fairSectionToRjsf(formattedSection)
  const { schema } = form

  test('email, uri and uuid string fields carry their JSON-schema format', () => {
    expect(schema.properties!.email).toMatchObject({ format: 'email' })
    expect(schema.properties!.website).toMatchObject({ format: 'uri' })
    expect(schema.properties!.orcid_uuid).toMatchObject({ format: 'uuid' })
  })

  test('unknown formats and unformatted fields get no format', () => {
    expect(schema.properties!.other).not.toHaveProperty('format')
    expect(schema.properties!.plain).not.toHaveProperty('format')
  })

  test('flags malformed values with the shared validator’s messages', () => {
    expect(
      validateFairSection(form, {
        email: 'jane@',
        website: 'not a url',
        orcid_uuid: '1234',
        other: 'anything',
        plain: 'anything',
      }),
    ).toEqual({
      isValid: false,
      fieldErrors: {
        email: 'Enter a valid email address',
        website: 'Enter a valid URL',
        orcid_uuid: 'Enter a valid UUID',
      },
    })
  })

  test('accepts well-formed values', () => {
    expect(
      validateFairSection(form, {
        email: 'jane@example.edu',
        website: 'https://example.org/lab',
        orcid_uuid: '123e4567-e89b-12d3-a456-426614174000',
      }),
    ).toEqual({ isValid: true, fieldErrors: {} })
  })

  test('does not flag blank values (undefined, null, or empty string)', () => {
    expect(
      validateFairSection(form, {
        email: '',
        website: null,
        orcid_uuid: undefined,
      }),
    ).toEqual({ isValid: true, fieldErrors: {} })
  })
})

describe('validateFairSection', () => {
  const form = fairSectionToRjsf({
    key: 'about',
    fields: [
      { name: 'name', type: 'string', validation: { required: true } },
      {
        name: 'summary',
        type: 'text',
        validation: { minimum: '20', maximum: '200' },
      },
      {
        name: 'phase',
        type: 'list',
        options: [
          { text: 'Phase 1', value: '1' },
          { text: 'Phase 2', value: '2' },
        ],
      },
    ],
  })

  test('counts a blank required answer as unanswered, without a field message', () => {
    expect(validateFairSection(form, { name: '' })).toEqual({
      isValid: false,
      fieldErrors: {},
    })
    expect(validateFairSection(form, { name: 'Jane' }).isValid).toBe(true)
  })

  test('flags a text answer outside FAIR’s length limits', () => {
    expect(
      validateFairSection(form, { name: 'Jane', summary: 'Too short' }),
    ).toEqual({
      isValid: false,
      fieldErrors: { summary: 'Must be at least 20 characters' },
    })
  })

  test('flags a list answer that is not one of its options', () => {
    expect(validateFairSection(form, { name: 'Jane', phase: '3' })).toEqual({
      isValid: false,
      fieldErrors: { phase: ALLOWED_VALUES_MESSAGE },
    })
    expect(
      validateFairSection(form, { name: 'Jane', phase: '2' }).isValid,
    ).toBe(true)
  })

  test('reports a schema that cannot be compiled, without field messages', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const result = validateFairSection(
      {
        schema: {
          type: 'object',
          properties: { name: { type: 'string', minLength: -1 } },
        },
        uiSchema: {},
      },
      { name: 'Jane' },
    )
    expect(result.isValid).toBe(false)
    expect(result.fieldErrors).toEqual({})
    expect(result.schemaError).toEqual(expect.any(String))
  })
})

describe('fairSectionToRjsf keeps the schema compilable', () => {
  test('treats a list field with no options as unsupported', () => {
    const listField: FairField = { name: 'phase', type: 'list', options: [] }
    const { schema, unsupported } = fairSectionToRjsf({
      key: 'project',
      fields: [listField, { name: 'other', type: 'list' }],
    })
    expect(schema.properties).toEqual({})
    expect(unsupported.map(field => field.name)).toEqual(['phase', 'other'])
  })

  test('drops length limits that are not non-negative integers', () => {
    const rjsf = fairSectionToRjsf({
      key: 'about',
      fields: [
        {
          name: 'name',
          type: 'string',
          validation: { minimum: 'abc', maximum: '10.5' },
        },
        { name: 'bio', type: 'text', validation: { minimum: '-1' } },
        { name: 'phone', type: 'phone', validation: { maximum: '' } },
      ],
    })
    expect(rjsf.schema.properties).toEqual({
      name: { type: 'string' },
      bio: { type: 'string' },
      phone: { type: 'string' },
    })
    expect(
      validateFairSection(rjsf, { name: 'Jane' }).schemaError,
    ).toBeUndefined()
  })
})

describe('FAIR date minimum', () => {
  // The user's local date, fixed so `today` doesn't move mid-test.
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] })
    vi.setSystemTime(new Date(2027, 0, 15, 12))
  })
  afterEach(() => {
    vi.useRealTimers()
  })

  const dateForm = () =>
    fairSectionToRjsf({
      key: 'project',
      fields: [
        { name: 'start', type: 'date', validation: { minimum: 'today' } },
        {
          name: 'end',
          type: 'date',
          validation: { minimum: '2027-03-05T10:00:00Z' },
        },
        { name: 'other', type: 'date', validation: { minimum: 'tomorrow' } },
        { name: 'bogus', type: 'date', validation: { minimum: '2027-02-30' } },
      ],
    })

  test('restricts the date picker and the schema for `today` and real ISO dates only', () => {
    const form = dateForm()
    expect(form.uiSchema.start).toEqual({
      'ui:widget': 'DateWidget',
      'ui:options': { minDate: '2027-01-15' },
    })
    expect(form.schema.properties!.start).toMatchObject({
      formatMinimum: '2027-01-15T00:00:00.000Z',
    })
    expect(form.uiSchema.end).toEqual({
      'ui:widget': 'DateWidget',
      'ui:options': { minDate: '2027-03-05' },
    })
    expect(form.schema.properties!.end).toMatchObject({
      formatMinimum: '2027-03-05T00:00:00.000Z',
    })
    expect(form.uiSchema.other).toEqual({ 'ui:widget': 'DateWidget' })
    expect(form.schema.properties!.other).not.toHaveProperty('formatMinimum')
    expect(form.uiSchema.bogus).toEqual({ 'ui:widget': 'DateWidget' })
    expect(form.schema.properties!.bogus).not.toHaveProperty('formatMinimum')
  })

  test('resolves a `today` minimum to the given date', () => {
    const later = fairSectionToRjsf(
      {
        key: 'project',
        fields: [
          { name: 'start', type: 'date', validation: { minimum: 'TODAY' } },
        ],
      },
      '2030-01-02',
    )
    expect(later.uiSchema.start).toMatchObject({
      'ui:options': { minDate: '2030-01-02' },
    })
    expect(later.schema.properties!.start).toMatchObject({
      formatMinimum: '2030-01-02T00:00:00.000Z',
    })
  })

  test('flags a date before the minimum', () => {
    expect(
      validateFairSection(dateForm(), {
        start: '2027-01-14T00:00:00.000Z',
        end: '2027-03-04T00:00:00.000Z',
        other: '2000-01-01T00:00:00.000Z',
      }).fieldErrors,
    ).toEqual({
      start: 'Must be today or later',
      end: 'Must be Mar 5, 2027 or later',
    })
  })

  test('accepts the minimum date itself', () => {
    expect(
      validateFairSection(dateForm(), {
        start: '2027-01-15T00:00:00.000Z',
        end: '2027-03-05T00:00:00.000Z',
      }),
    ).toEqual({ isValid: true, fieldErrors: {} })
  })

  test('flags a date the picker could not parse, with or without a minimum', () => {
    expect(
      validateFairSection(dateForm(), {
        end: 'Invalid DateT00:00:00.000Z',
        other: 'Invalid DateT00:00:00.000Z',
      }).fieldErrors,
    ).toEqual({
      end: 'Enter a valid date',
      other: 'Enter a valid date',
    })
  })
})

describe('FAIR text length bounds', () => {
  const form = fairSectionToRjsf({
    key: 'project',
    fields: [
      {
        name: 'summary',
        type: 'markdown',
        validation: { minimum: 5, maximum: 10 },
      },
      { name: 'title', type: 'string', validation: { minimum: '2' } },
      { name: 'phone', type: 'phone', validation: { maximum: 6 } },
    ],
  })

  test('accept bounds sent as numbers or numeric strings', () => {
    expect(form.schema.properties!.summary).toMatchObject({
      minLength: 5,
      maxLength: 10,
    })
    expect(form.schema.properties!.title).toMatchObject({ minLength: 2 })
    expect(form.schema.properties!.phone).toMatchObject({ maxLength: 6 })
  })

  test('flag values shorter or longer than the bounds with the shared validator’s messages', () => {
    expect(
      validateFairSection(form, {
        summary: 'abc',
        title: 'a',
        phone: '+1 2345',
      }).fieldErrors,
    ).toEqual({
      summary: 'Must be at least 5 characters',
      title: 'Must be at least 2 characters',
      phone: 'Must be at most 6 characters',
    })
    expect(
      validateFairSection(form, { summary: 'abcdefghijk' }).fieldErrors,
    ).toEqual({ summary: 'Must be at most 10 characters' })
  })

  test('accept values within the bounds, including the bounds themselves', () => {
    expect(
      validateFairSection(form, {
        summary: 'abcde',
        title: 'ab',
        phone: '+1 234',
      }),
    ).toEqual({ isValid: true, fieldErrors: {} })
    expect(validateFairSection(form, { summary: 'abcdefghij' }).isValid).toBe(
      true,
    )
  })
})

describe('FAIR default values', () => {
  const form = fairSectionToRjsf({
    key: 'project',
    fields: [
      { name: 'opt_out', type: 'boolean', defaultValue: false },
      { name: 'opt_in', type: 'boolean', defaultValue: true },
      { name: 'count', type: 'number', defaultValue: 0 },
      { name: 'blank', type: 'string', defaultValue: '' },
      { name: 'nulled', type: 'string', defaultValue: null },
      { name: 'heading', type: 'label', label: 'Heading', defaultValue: 'x' },
    ],
  })

  test('keep falsy defaults (`false`, `0`) with their own types', () => {
    expect(form.schema.properties!.opt_out).toMatchObject({ default: false })
    expect(form.schema.properties!.opt_in).toMatchObject({ default: true })
    expect(form.schema.properties!.count).toMatchObject({ default: 0 })
  })

  test('treat an empty-string or null default as no default', () => {
    expect(form.schema.properties!.blank).not.toHaveProperty('default')
    expect(form.schema.properties!.nulled).not.toHaveProperty('default')
  })

  test('ignore a default on a label, which holds no value', () => {
    expect(form.schema.properties!.heading).not.toHaveProperty('default')
  })
})

describe('FAIR number fields', () => {
  const form = fairSectionToRjsf({
    key: 'project',
    fields: [
      {
        name: 'number_type',
        type: 'number',
        label: 'Number',
        validation: { minimum: 1, maximum: 10, required: true },
        defaultValue: 10,
      },
      // FAIR may also send bounds and defaults as numeric strings.
      {
        name: 'ratio',
        type: 'number',
        validation: { minimum: '0', maximum: '0.5' },
        defaultValue: '0.25',
      },
      { name: 'unbounded', type: 'number' },
      { name: 'bad_default', type: 'number', defaultValue: 'ten' },
    ],
  })

  test('map to a JSON-schema number with value bounds, not length bounds', () => {
    expect(form.unsupported).toEqual([])
    expect(form.schema.properties!.number_type).toEqual({
      type: 'number',
      title: 'Number',
      minimum: 1,
      maximum: 10,
      default: 10,
    })
    expect(form.schema.properties!.ratio).toMatchObject({
      type: 'number',
      minimum: 0,
      maximum: 0.5,
      default: 0.25,
    })
    expect(form.schema.properties!.number_type).not.toHaveProperty('minLength')
    expect(form.schema.required).toEqual(['number_type'])
  })

  test('flag values outside the bounds with the shared validator’s messages', () => {
    expect(
      validateFairSection(form, { number_type: 0, ratio: 0.75 }).fieldErrors,
    ).toEqual({
      number_type: 'Must be 1 or more',
      ratio: 'Must be 0.5 or less',
    })
    expect(validateFairSection(form, { number_type: 11 }).fieldErrors).toEqual({
      number_type: 'Must be 10 or less',
    })
  })

  test('accept in-range values, including decimals and bounds themselves', () => {
    expect(validateFairSection(form, { number_type: 1, ratio: 0 })).toEqual({
      isValid: true,
      fieldErrors: {},
    })
    expect(
      validateFairSection(form, { number_type: 9.5, ratio: 0.5 }).isValid,
    ).toBe(true)
  })

  test('accept any number when there are no bounds', () => {
    expect(
      validateFairSection(form, { number_type: 1, unbounded: -5000.5 }).isValid,
    ).toBe(true)
  })

  test('count a blank required number as unanswered, without a field message', () => {
    for (const blank of [undefined, null, '']) {
      expect(validateFairSection(form, { number_type: blank })).toEqual({
        isValid: false,
        fieldErrors: {},
      })
    }
  })

  test('drop a default that is not a number', () => {
    expect(form.schema.properties!.bad_default).not.toHaveProperty('default')
  })

  test('flag a numeric string, which is not a JSON number', () => {
    expect(validateFairSection(form, { number_type: '9' })).toEqual({
      isValid: false,
      fieldErrors: { number_type: 'must be number' },
    })
  })
})

describe('parseFairFormSections', () => {
  const sectionFields: FairField[] = [{ name: 'q1', type: 'string' }]
  const expected: FairFormSection[] = [
    { key: 'about', label: undefined, fields: sectionFields },
  ]

  test('parses the { sections: { key: { fields } } } shape (workspace-forms response)', () => {
    const payload = {
      code: 'rdca_access_request',
      sections: { about: { label: undefined, fields: sectionFields } },
    }
    expect(parseFairFormSections(payload)).toEqual(expected)
  })

  test('parses the { fields: { key: [...] } } shape (workflows response)', () => {
    const payload = {
      code: 'rdca_access_request',
      fields: { about: sectionFields },
    }
    expect(parseFairFormSections(payload)).toEqual(expected)
  })

  test('returns an empty array for a payload with neither shape', () => {
    expect(parseFairFormSections({})).toEqual([])
    expect(parseFairFormSections(null)).toEqual([])
    expect(parseFairFormSections(undefined)).toEqual([])
  })
})

describe('summarizeFormAnswers', () => {
  test('uses the property title when present, falling back to the raw field name', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        untitled: { type: 'string' as const },
        titled: { type: 'string' as const, title: 'A nice label' },
      },
    }
    expect(
      summarizeFormAnswers(schema, { untitled: 'x', titled: 'y' }),
    ).toEqual([
      { label: 'untitled', value: 'x' },
      { label: 'A nice label', value: 'y' },
    ])
  })

  test('omits properties with no answer (undefined, null, or empty string)', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        unanswered: { type: 'string' as const },
        blank: { type: 'string' as const },
        nullish: { type: 'string' as const },
        answered: { type: 'string' as const },
      },
    }
    expect(
      summarizeFormAnswers(schema, { blank: '', nullish: null, answered: 'x' }),
    ).toEqual([{ label: 'answered', value: 'x' }])
  })

  test('resolves a oneOf answer to its title rather than its raw const value', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        sector: {
          type: 'string' as const,
          oneOf: [
            { const: 'academia', title: 'Academia' },
            { const: 'pharma', title: 'Pharma' },
          ],
        },
      },
    }
    expect(summarizeFormAnswers(schema, { sector: 'pharma' })).toEqual([
      { label: 'sector', value: 'Pharma' },
    ])
  })

  test('formats a boolean answer as Yes/No', () => {
    const schema = {
      type: 'object' as const,
      properties: { check_pi: { type: 'boolean' as const } },
    }
    expect(summarizeFormAnswers(schema, { check_pi: true })).toEqual([
      { label: 'check_pi', value: 'Yes' },
    ])
    expect(summarizeFormAnswers(schema, { check_pi: false })).toEqual([
      { label: 'check_pi', value: 'No' },
    ])
  })

  test('joins an array answer with commas', () => {
    const schema = {
      type: 'object' as const,
      properties: { websites: { type: 'array' as const } },
    }
    expect(
      summarizeFormAnswers(schema, {
        websites: ['https://a.example', 'https://b.example'],
      }),
    ).toEqual([
      { label: 'websites', value: 'https://a.example, https://b.example' },
    ])
  })

  test('formats a format: date-time answer as a readable date, not a raw ISO string', () => {
    const schema = {
      type: 'object' as const,
      properties: {
        project_end_date: {
          type: 'string' as const,
          format: 'date-time' as const,
        },
      },
    }
    expect(
      summarizeFormAnswers(schema, {
        project_end_date: '2027-03-05T00:00:00.000Z',
      }),
    ).toEqual([{ label: 'project_end_date', value: 'Mar 5, 2027' }])
  })
})
