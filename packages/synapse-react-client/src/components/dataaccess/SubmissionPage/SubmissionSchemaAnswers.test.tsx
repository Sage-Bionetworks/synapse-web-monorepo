import { GeneratedSubmissionForm } from '@/synapse-queries/dataaccess/useGeneratedSubmissionForm'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { RJSFSchema } from '@rjsf/utils'
import { render, screen, within } from '@testing-library/react'
import {
  NO_RESPONSE_TEXT,
  OTHER_RESPONSES_TITLE,
  SubmissionSchemaAnswerList,
} from './SubmissionSchemaAnswers'

const stepSchema: RJSFSchema = {
  type: 'object',
  title: 'Answers',
  properties: {
    datasets: {
      type: 'array',
      title: 'Datasets',
      uniqueItems: true,
      items: { type: 'string', enum: ['Genomics', 'Imaging', 'Clinical'] },
    },
    tier: {
      type: 'string',
      title: 'Access Tier',
      oneOf: [
        { const: 'T1', title: 'Tier 1 (controlled)' },
        { const: 'T2', title: 'Tier 2 (registered)' },
      ],
    },
    agree: { type: 'boolean', title: 'Agrees to terms' },
    notes: { type: 'string', title: 'Notes' },
    relabelled: { type: 'string', title: 'Schema title' },
    agreement: {
      type: 'number',
      title: 'Signed agreement',
      format: 'synapse-filehandle-id',
    },
  },
}

const form: GeneratedSubmissionForm = {
  steps: [
    {
      jsonSchema: stepSchema,
      uiSchema: {
        'ui:order': Object.keys(stepSchema.properties!),
        relabelled: { 'ui:title': 'Template title' },
      },
    },
  ],
  schema: stepSchema,
}

function renderWithAnswers(
  schemaData: Record<string, unknown>,
  { generatedForm }: { generatedForm: GeneratedSubmissionForm | undefined } = {
    generatedForm: form,
  },
) {
  render(
    <SubmissionSchemaAnswerList
      submissionId="10"
      schemaData={schemaData}
      form={generatedForm}
    />,
    { wrapper: createWrapper() },
  )
}

function answerFor(label: string) {
  const terms = screen.getAllByRole('term')
  const index = terms.findIndex(term => term.textContent === label)
  expect(index).toBeGreaterThanOrEqual(0)
  return screen.getAllByRole('definition')[index]
}

describe('SubmissionSchemaAnswerList', () => {
  it('lists each selected option of a multi-choice answer', () => {
    renderWithAnswers({ datasets: ['Genomics', 'Clinical'] })
    within(answerFor('Datasets')).getByText('Genomics, Clinical')
  })

  it('shows the option title for a oneOf choice rather than the stored value', () => {
    renderWithAnswers({ tier: 'T2' })
    within(answerFor('Access Tier')).getByText('Tier 2 (registered)')
  })

  it.each([
    [true, 'Yes'],
    [false, 'No'],
  ])('shows boolean answer %s as %s', (agree, expected) => {
    renderWithAnswers({ agree })
    within(answerFor('Agrees to terms')).getByText(expected)
  })

  it.each([undefined, null, ''])(
    'marks an unanswered text field (%j) as having no response',
    notes => {
      renderWithAnswers({ notes })
      within(answerFor('Notes')).getByText(NO_RESPONSE_TEXT)
    },
  )

  it('marks a multi-choice answer with no selections as having no response', () => {
    renderWithAnswers({ datasets: [] })
    within(answerFor('Datasets')).getByText(NO_RESPONSE_TEXT)
  })

  it("prefers the template's ui:title over the schema title", () => {
    renderWithAnswers({ relabelled: 'value' })
    within(answerFor('Template title')).getByText('value')
    expect(screen.queryByText('Schema title')).not.toBeInTheDocument()
  })

  it('shows a file answer that is not a file handle ID as text rather than a download', () => {
    const notAnId = '123?fileAssociateType=FileEntity&fileAssociateId=syn1'
    renderWithAnswers({ agreement: notAnId })
    within(answerFor('Signed agreement')).getByText(notAnId)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  it('lists every answer by key under Other responses when there is no generated form', () => {
    renderWithAnswers(
      {
        [SUBMISSION_CONTEXT_PROPERTY]: 'REQUEST',
        notes: 'Some notes',
        tier: 'T2',
      },
      { generatedForm: undefined },
    )

    const headings = screen.getAllByRole('heading')
    expect(headings.map(h => h.textContent)).toEqual([OTHER_RESPONSES_TITLE])
    within(answerFor('notes')).getByText('Some notes')
    within(answerFor('tier')).getByText('T2')
    expect(
      screen.queryByText(SUBMISSION_CONTEXT_PROPERTY),
    ).not.toBeInTheDocument()
  })
})
