import { describe, expect, test } from 'vitest'
import {
  fairSectionToRjsf,
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
