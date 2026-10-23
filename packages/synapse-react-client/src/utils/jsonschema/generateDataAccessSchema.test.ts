import { RJSFSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { SUBMISSION_CONTEXT_PROPERTY } from './submissionContext'
import { generateDataAccessSchema } from './generateDataAccessSchema'

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    institution: { type: 'string', title: 'Institution' },
    [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string' },
  },
  required: ['institution', SUBMISSION_CONTEXT_PROPERTY],
  allOf: [
    {
      if: {
        properties: {
          [SUBMISSION_CONTEXT_PROPERTY]: {
            const: DataAccessRequestType.RENEWAL,
          },
        },
      },
      then: {
        properties: { summaryOfUse: { type: 'string', title: 'Summary' } },
        required: ['summaryOfUse'],
      },
    },
  ],
}

function template(steps: FormTemplate['steps']): FormTemplate {
  return {
    id: 'template-1',
    name: 'My Template',
    schema$id: 'org.example-1.0.0',
    steps,
    etag: 'etag-1',
    versionNumber: 1,
  }
}

describe('generateDataAccessSchema', () => {
  it('generates one RJSF-ready step per FormTemplateStep, keyed by the step title', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [{ schemaPath: '/institution', uiDefinition: {} }],
        },
      ]),
      schema,
    )
    expect(result.steps).toHaveLength(1)
    expect(result.steps[0].jsonSchema).toMatchObject({
      type: 'object',
      title: 'Basics',
      properties: { institution: { type: 'string', title: 'Institution' } },
      required: ['institution'],
    })
    expect(result.steps[0].uiSchema['ui:order']).toEqual(['institution'])
  })

  it('omits a RENEWAL_ONLY field when generating for a REQUEST', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [
            { schemaPath: '/institution', uiDefinition: {} },
            { schemaPath: '/summaryOfUse', uiDefinition: {} },
          ],
        },
      ]),
      schema,
      DataAccessRequestType.REQUEST,
    )
    expect(result.steps[0].jsonSchema.properties).toEqual({
      institution: { type: 'string', title: 'Institution' },
    })
  })

  it('includes a RENEWAL_ONLY field, with its required-ness, when generating for a RENEWAL', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [{ schemaPath: '/summaryOfUse', uiDefinition: {} }],
        },
      ]),
      schema,
      DataAccessRequestType.RENEWAL,
    )
    expect(result.steps[0].jsonSchema.properties).toEqual({
      summaryOfUse: { type: 'string', title: 'Summary' },
    })
    expect(result.steps[0].jsonSchema.required).toEqual(['summaryOfUse'])
  })

  it('drops a step entirely when every one of its fields is omitted for the request type', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Renewal only',
          fields: [{ schemaPath: '/summaryOfUse', uiDefinition: {} }],
        },
        {
          title: 'Always',
          fields: [{ schemaPath: '/institution', uiDefinition: {} }],
        },
      ]),
      schema,
      DataAccessRequestType.REQUEST,
    )
    expect(result.steps).toHaveLength(1)
    expect(result.steps[0].jsonSchema.title).toBe('Always')
  })

  it('skips a field whose schemaPath no longer resolves to a schema property', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [{ schemaPath: '/removed', uiDefinition: {} }],
        },
      ]),
      schema,
    )
    expect(result.steps).toHaveLength(0)
  })

  it('carries a field uiDefinition into the step uiSchema, keyed by property name', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [
            {
              schemaPath: '/institution',
              uiDefinition: { 'ui:widget': 'textarea' },
            },
          ],
        },
      ]),
      schema,
    )
    expect(result.steps[0].uiSchema.institution).toEqual({
      'ui:widget': 'textarea',
    })
  })

  it('sets ui:order to the fields order within the step', () => {
    const withInstitutionSecond: RJSFSchema = {
      ...schema,
      properties: {
        ...schema.properties,
        other: { type: 'string' },
      },
    }
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          fields: [
            { schemaPath: '/other', uiDefinition: {} },
            { schemaPath: '/institution', uiDefinition: {} },
          ],
        },
      ]),
      withInstitutionSecond,
    )
    expect(result.steps[0].uiSchema['ui:order']).toEqual([
      'other',
      'institution',
    ])
  })

  it('includes the step description only when the step declares one', () => {
    const result = generateDataAccessSchema(
      template([
        {
          title: 'Basics',
          description: 'Tell us about yourself',
          fields: [{ schemaPath: '/institution', uiDefinition: {} }],
        },
      ]),
      schema,
    )
    expect(result.steps[0].jsonSchema.description).toBe(
      'Tell us about yourself',
    )
  })
})
