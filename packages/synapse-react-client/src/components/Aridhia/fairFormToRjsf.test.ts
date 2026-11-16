import { describe, expect, test } from 'vitest'
import dayjs from 'dayjs'
import allFieldTypesWorkflow from '@/mocks/aridhia/cpathBasicAllAccessRequestV2Workflow.json'
import {
  FAIR_FORMAT_MESSAGES,
  fairSectionToRjsf,
  getFairFieldErrors,
  FairField,
  FairFormSection,
  parseFairFormSections,
  summarizeFormAnswers,
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

  test('flags malformed values with FAIR’s own messages', () => {
    expect(
      getFairFieldErrors(form, {
        email: 'jane@',
        website: 'not a url',
        orcid_uuid: '1234',
        other: 'anything',
        plain: 'anything',
      }),
    ).toEqual({
      email: 'Please enter a valid email address',
      website: FAIR_FORMAT_MESSAGES.uri,
      orcid_uuid: FAIR_FORMAT_MESSAGES.uuid,
    })
  })

  test('accepts well-formed values', () => {
    expect(
      getFairFieldErrors(form, {
        email: 'jane@example.edu',
        website: 'https://example.org/lab',
        orcid_uuid: '123e4567-e89b-12d3-a456-426614174000',
      }),
    ).toEqual({})
  })

  test('does not flag blank values (undefined, null, or empty string)', () => {
    expect(
      getFairFieldErrors(form, {
        email: '',
        website: null,
        orcid_uuid: undefined,
      }),
    ).toEqual({})
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
      // The spec types bounds and defaults as strings.
      {
        name: 'ratio',
        type: 'number',
        validation: { minimum: '0', maximum: '0.5' },
        defaultValue: '0.25',
      },
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

  test('flag values outside the bounds with RDCA-DAP’s messages', () => {
    expect(getFairFieldErrors(form, { number_type: 0, ratio: 0.75 })).toEqual({
      number_type: 'Minimum of 1',
      ratio: 'Maximum of 0.5',
    })
    expect(getFairFieldErrors(form, { number_type: 11 })).toEqual({
      number_type: 'Maximum of 10',
    })
  })

  test('accept in-range values, including decimals and bounds themselves', () => {
    expect(getFairFieldErrors(form, { number_type: 1, ratio: 0 })).toEqual({})
    expect(getFairFieldErrors(form, { number_type: 9.5, ratio: 0.5 })).toEqual(
      {},
    )
  })

  test('flag a non-numeric value', () => {
    expect(getFairFieldErrors(form, { number_type: '9' })).toEqual({
      number_type: 'Must be a number',
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

  test('flag values shorter or longer than the bounds with RDCA-DAP’s messages', () => {
    expect(
      getFairFieldErrors(form, {
        summary: 'abc',
        title: 'a',
        phone: '+1 2345',
      }),
    ).toEqual({
      summary: 'Minimum of 5 characters',
      title: 'Minimum of 2 characters',
      phone: 'Maximum of 6 characters',
    })
    expect(getFairFieldErrors(form, { summary: 'abcdefghijk' })).toEqual({
      summary: 'Maximum of 10 characters',
    })
  })

  test('accept values within the bounds', () => {
    expect(
      getFairFieldErrors(form, {
        summary: 'abcde',
        title: 'ab',
        phone: '+1 23',
      }),
    ).toEqual({})
  })
})

describe('FAIR date minimum', () => {
  const form = fairSectionToRjsf({
    key: 'project',
    fields: [
      { name: 'start', type: 'date', validation: { minimum: 'today' } },
      { name: 'end', type: 'date', validation: { minimum: '2027-03-05' } },
      { name: 'other', type: 'date', validation: { minimum: 'tomorrow' } },
    ],
  })
  const utcMidnight = (date: dayjs.Dayjs) =>
    `${date.format('YYYY-MM-DD')}T00:00:00.000Z`

  test('restricts the date picker for `today` and ISO dates only', () => {
    expect(form.uiSchema.start).toEqual({
      'ui:widget': 'DateWidget',
      'ui:options': { minDate: 'today' },
    })
    expect(form.uiSchema.end).toEqual({
      'ui:widget': 'DateWidget',
      'ui:options': { minDate: '2027-03-05' },
    })
    expect(form.uiSchema.other).toEqual({ 'ui:widget': 'DateWidget' })
  })

  test('flags a date before the minimum', () => {
    expect(
      getFairFieldErrors(form, {
        start: utcMidnight(dayjs().subtract(1, 'day')),
        end: '2027-03-04T00:00:00.000Z',
        other: '2000-01-01T00:00:00.000Z',
      }),
    ).toEqual({
      start: 'Must be today or later',
      end: 'Must be Mar 5, 2027 or later',
    })
  })

  test('accepts the minimum date itself', () => {
    expect(
      getFairFieldErrors(form, {
        start: utcMidnight(dayjs()),
        end: '2027-03-05T00:00:00.000Z',
      }),
    ).toEqual({})
  })

  test('flags a date the picker could not parse, with or without a minimum', () => {
    expect(
      getFairFieldErrors(form, {
        end: 'Invalid DateT00:00:00.000Z',
        other: 'Invalid DateT00:00:00.000Z',
      }),
    ).toEqual({
      end: 'Please enter a valid date',
      other: 'Please enter a valid date',
    })
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
})

describe('the live omop_als1001 request form', () => {
  test('renders every field it contains, of every RDCA-DAP field type', () => {
    const sections = parseFairFormSections(allFieldTypesWorkflow)
    expect(sections.map(s => s.key)).toEqual(['about', 'project'])
    expect(new Set(sections.flatMap(s => s.fields.map(f => f.type)))).toEqual(
      new Set([
        'string',
        'text',
        'markdown',
        'phone',
        'date',
        'label',
        'boolean',
        'number',
        'list',
      ]),
    )
    for (const section of sections) {
      expect(fairSectionToRjsf(section).unsupported).toEqual([])
    }
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
