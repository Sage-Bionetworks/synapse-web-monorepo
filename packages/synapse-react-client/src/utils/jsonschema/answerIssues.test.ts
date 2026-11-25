import { REQUIRED_MESSAGE } from '@/components/JsonSchemaForm/JsonSchemaFormValidator'
import { RJSFSchema } from '@rjsf/utils'
import { findAnswerIssues } from './answerIssues'
import { SUBMISSION_CONTEXT_PROPERTY } from './submissionContext'

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    purpose: { type: 'string', enum: ['Research', 'Educational'] },
    months: { type: 'number', maximum: 24 },
    title: { type: 'string' },
    'site name': { type: 'string', minLength: 3 },
    sites: { type: 'array', items: { type: 'string', minLength: 2 } },
    [SUBMISSION_CONTEXT_PROPERTY]: { type: 'string', enum: ['REQUEST'] },
  },
  required: ['title', SUBMISSION_CONTEXT_PROPERTY],
}

describe('findAnswerIssues', () => {
  it('finds nothing when every answer fits', () => {
    expect(
      findAnswerIssues(
        { purpose: 'Research', months: 12, title: 'Trial' },
        schema,
        true,
      ),
    ).toEqual({})
  })

  it('quotes an answer that is no longer one of the options', () => {
    expect(findAnswerIssues({ purpose: 'Commercial' }, schema, false)).toEqual({
      purpose:
        'Your previous answer, “Commercial”, is no longer an option. Choose another answer.',
    })
  })

  it("explains an answer that breaks another rule with the rule's message", () => {
    expect(findAnswerIssues({ months: 36 }, schema, false)).toEqual({
      months: 'Must be 24 or less',
    })
  })

  it('reports a required question without an answer only when asked to', () => {
    expect(findAnswerIssues({}, schema, false)).toEqual({})
    expect(findAnswerIssues({}, schema, true)).toEqual({
      title: REQUIRED_MESSAGE,
    })
  })

  it('reports an issue inside an answer against the question it answers', () => {
    expect(
      findAnswerIssues({ title: 'Trial', sites: ['NY', 'X'] }, schema, true),
    ).toEqual({ sites: 'Must be at least 2 characters' })
  })

  it('reports an issue with a question whose key is not an identifier', () => {
    expect(
      findAnswerIssues({ title: 'Trial', 'site name': 'NY' }, schema, true),
    ).toEqual({ 'site name': 'Must be at least 3 characters' })
  })

  it('never reports the submission context, which the server sets', () => {
    expect(
      findAnswerIssues(
        { title: 'Trial', [SUBMISSION_CONTEXT_PROPERTY]: 'RENEWAL' },
        schema,
        true,
      ),
    ).toEqual({})
  })

  it('reports a question whose key is also an Object property name', () => {
    const constructorSchema: RJSFSchema = {
      type: 'object',
      properties: { constructor: { type: 'string' as const, enum: ['A'] } },
    }
    expect(
      findAnswerIssues({ constructor: 'B' }, constructorSchema, true),
    ).toEqual({
      constructor:
        'Your previous answer, “B”, is no longer an option. Choose another answer.',
    })
  })
})
