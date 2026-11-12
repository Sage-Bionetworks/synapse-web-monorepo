import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { SchemaData } from '@/utils/jsonschema/schemaData'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import SchemaStepForm, { SchemaStepFormHandle } from './SchemaStepForm'

const yesNoStep: GeneratedFormStepForRjsf = {
  jsonSchema: {
    type: 'object',
    properties: {
      hasIrbApproval: { type: 'boolean', title: 'IRB approval obtained' },
    },
    required: ['hasIrbApproval'],
  },
  uiSchema: {},
}

function renderStep(schemaData: SchemaData = {}) {
  const ref = createRef<SchemaStepFormHandle>()
  const onSchemaDataChange = vi.fn()
  const onValid = vi.fn()
  render(
    <SchemaStepForm
      ref={ref}
      step={yesNoStep}
      schemaData={schemaData}
      onSchemaDataChange={onSchemaDataChange}
      onValid={onValid}
      fileHandleWidgetContext={{ answerFileHandleIds: [], canEdit: false }}
    />,
  )
  return { ref, onSchemaDataChange, onValid }
}

describe('SchemaStepForm', () => {
  it('renders a Yes/No question as a radio group named by the question, with neither picked', () => {
    renderStep()
    const question = screen.getByRole('radiogroup', {
      name: 'IRB approval obtained',
    })
    expect(
      within(question).getByRole('radio', { name: 'Yes' }),
    ).not.toBeChecked()
    expect(
      within(question).getByRole('radio', { name: 'No' }),
    ).not.toBeChecked()
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
  })

  it.each([
    { choice: 'Yes', stored: true },
    { choice: 'No', stored: false },
  ])('stores $stored when $choice is picked', async ({ choice, stored }) => {
    const user = userEvent.setup()
    const { onSchemaDataChange } = renderStep({ otherStepAnswer: 'kept' })
    await user.click(screen.getByRole('radio', { name: choice }))
    expect(onSchemaDataChange).toHaveBeenLastCalledWith({
      otherStepAnswer: 'kept',
      hasIrbApproval: stored,
    })
  })

  it('shows a saved false answer as No', () => {
    renderStep({ hasIrbApproval: false })
    expect(screen.getByRole('radio', { name: 'No' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Yes' })).not.toBeChecked()
  })

  it('fails validation while a required Yes/No question is unanswered', async () => {
    const { ref, onValid } = renderStep()
    act(() => ref.current?.submit())
    expect(await screen.findAllByText(/required/i)).not.toHaveLength(0)
    expect(onValid).not.toHaveBeenCalled()
  })

  it('passes validation once a required Yes/No question is answered No', async () => {
    const user = userEvent.setup()
    const { ref, onValid } = renderStep()
    await user.click(screen.getByRole('radio', { name: 'No' }))
    act(() => ref.current?.submit())
    expect(onValid).toHaveBeenCalledWith({ hasIrbApproval: false })
  })
})
