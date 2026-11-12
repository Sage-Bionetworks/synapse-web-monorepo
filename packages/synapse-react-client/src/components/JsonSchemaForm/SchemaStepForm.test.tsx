import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  SchemaData,
  SYNAPSE_FILE_HANDLE_ID_FORMAT,
} from '@/utils/jsonschema/schemaData'
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
  const onInvalid = vi.fn()
  render(
    <SchemaStepForm
      ref={ref}
      step={yesNoStep}
      schemaData={schemaData}
      onSchemaDataChange={onSchemaDataChange}
      onValid={onValid}
      fileHandleWidgetContext={{ answerFileHandleIds: [], canEdit: false }}
      onInvalid={onInvalid}
    />,
  )
  return { ref, onSchemaDataChange, onValid, onInvalid }
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
    const { ref, onValid, onInvalid } = renderStep()
    act(() => ref.current?.submit())
    expect(await screen.findAllByText(/required/i)).not.toHaveLength(0)
    expect(onInvalid).toHaveBeenCalledTimes(1)
    expect(onValid).not.toHaveBeenCalled()
  })

  it('passes validation once a required Yes/No question is answered No', async () => {
    const user = userEvent.setup()
    const { ref, onValid, onInvalid } = renderStep()
    await user.click(screen.getByRole('radio', { name: 'No' }))
    act(() => ref.current?.submit())
    expect(onValid).toHaveBeenCalledWith({ hasIrbApproval: false })
    expect(onInvalid).not.toHaveBeenCalled()
  })

  describe('a required file question', () => {
    const fileStep: GeneratedFormStepForRjsf = {
      jsonSchema: {
        type: 'object',
        properties: {
          agreement: {
            type: 'number',
            title: 'Signed agreement',
            format: SYNAPSE_FILE_HANDLE_ID_FORMAT,
          },
        },
        required: ['agreement'],
      },
      uiSchema: {},
    }

    function submitFileStep(ignoreRequiredFileAnswers?: boolean) {
      const ref = createRef<SchemaStepFormHandle>()
      const onValid = vi.fn()
      const onInvalid = vi.fn()
      render(
        <SchemaStepForm
          ref={ref}
          step={fileStep}
          schemaData={{}}
          onSchemaDataChange={vi.fn()}
          // The file cannot be changed, as while a request is submitted
          fileHandleWidgetContext={{ answerFileHandleIds: [], canEdit: false }}
          ignoreRequiredFileAnswers={ignoreRequiredFileAnswers}
          onValid={onValid}
          onInvalid={onInvalid}
        />,
        { wrapper: createWrapper() },
      )
      act(() => ref.current?.submit())
      return { onValid, onInvalid }
    }

    it('fails validation while unanswered, even when the file cannot be changed', () => {
      const { onValid, onInvalid } = submitFileStep()
      expect(onInvalid).toHaveBeenCalledTimes(1)
      expect(onValid).not.toHaveBeenCalled()
    })

    it('does not fail validation when required file answers are ignored', () => {
      const { onValid, onInvalid } = submitFileStep(true)
      expect(onValid).toHaveBeenCalledWith({})
      expect(onInvalid).not.toHaveBeenCalled()
    })
  })
})
