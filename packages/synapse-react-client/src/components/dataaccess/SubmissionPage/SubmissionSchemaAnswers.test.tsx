import { mockSchemaDataSubmission } from '@/mocks/dataaccess/MockSubmission'
import { useGeneratedSubmissionForm } from '@/synapse-queries/dataaccess/useGeneratedSubmissionForm'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { RJSFSchema } from '@rjsf/utils'
import { render, screen, within } from '@testing-library/react'
import {
  NO_RESPONSE_TEXT,
  SubmissionSchemaAnswers,
} from './SubmissionSchemaAnswers'

vi.mock('@/synapse-queries/dataaccess/useGeneratedSubmissionForm', () => ({
  useGeneratedSubmissionForm: vi.fn(),
}))

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
  },
}

function renderWithAnswers(schemaData: Record<string, unknown>) {
  vi.mocked(useGeneratedSubmissionForm).mockReturnValue({
    form: {
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
    },
    isLoading: false,
    error: undefined,
  })
  render(
    <SubmissionSchemaAnswers
      submission={{ ...mockSchemaDataSubmission, schemaData }}
    />,
    { wrapper: createWrapper() },
  )
}

function answerFor(label: string) {
  return screen.getByText(label).nextElementSibling as HTMLElement
}

describe('SubmissionSchemaAnswers', () => {
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

  it.each([undefined, '', []])(
    'marks an unanswered field (%j) as having no response',
    notes => {
      renderWithAnswers({ notes, datasets: notes })
      within(answerFor('Notes')).getByText(NO_RESPONSE_TEXT)
    },
  )

  it("prefers the template's ui:title over the schema title", () => {
    renderWithAnswers({ relabelled: 'value' })
    within(answerFor('Template title')).getByText('value')
    expect(screen.queryByText('Schema title')).not.toBeInTheDocument()
  })
})
