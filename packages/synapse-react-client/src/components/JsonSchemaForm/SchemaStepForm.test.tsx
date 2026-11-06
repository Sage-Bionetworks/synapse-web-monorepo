import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { SchemaData } from '@/utils/jsonschema/schemaData'
import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import SchemaStepForm, { SchemaStepFormHandle } from './SchemaStepForm'
import { MUST_CHECK_ERROR_MESSAGE } from './mustCheckBoolean'

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

const TERMS_LABEL = 'I agree to the terms and conditions'

const mustCheckStep: GeneratedFormStepForRjsf = {
  jsonSchema: {
    type: 'object',
    properties: {
      agreeToTerms: {
        type: 'boolean',
        const: true,
        title: TERMS_LABEL,
        description: 'You must abide by the terms to use the data.',
      },
    },
    required: ['agreeToTerms'],
  },
  uiSchema: {},
}

function renderStep(
  schemaData: SchemaData = {},
  step: GeneratedFormStepForRjsf = yesNoStep,
) {
  const ref = createRef<SchemaStepFormHandle>()
  const onSchemaDataChange = vi.fn()
  const onValid = vi.fn()
  const onInvalid = vi.fn()
  render(
    <SchemaStepForm
      ref={ref}
      step={step}
      schemaData={schemaData}
      onSchemaDataChange={onSchemaDataChange}
      onValid={onValid}
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
    expect(onInvalid).toHaveBeenCalled()
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

  describe('a boolean that must be true', () => {
    it('renders as a single unchecked checkbox named by the question, with its help text', () => {
      renderStep({}, mustCheckStep)
      const checkbox = screen.getByRole('checkbox', { name: TERMS_LABEL })
      expect(checkbox).not.toBeChecked()
      expect(checkbox).toHaveAccessibleDescription(
        'You must abide by the terms to use the data.',
      )
      expect(screen.queryByRole('radiogroup')).not.toBeInTheDocument()
      expect(screen.queryByRole('radio')).not.toBeInTheDocument()
    })

    it('stores true when checked, and returns to unanswered when unchecked', async () => {
      const user = userEvent.setup()
      const { onSchemaDataChange } = renderStep(
        { otherStepAnswer: 'kept' },
        mustCheckStep,
      )
      const checkbox = screen.getByRole('checkbox', { name: TERMS_LABEL })
      await user.click(checkbox)
      expect(onSchemaDataChange).toHaveBeenLastCalledWith({
        otherStepAnswer: 'kept',
        agreeToTerms: true,
      })
      await user.click(checkbox)
      expect(onSchemaDataChange.mock.lastCall?.[0]).toEqual({
        otherStepAnswer: 'kept',
      })
    })

    it('shows a saved true answer as checked', () => {
      renderStep({ agreeToTerms: true }, mustCheckStep)
      expect(screen.getByRole('checkbox', { name: TERMS_LABEL })).toBeChecked()
    })

    it.each([
      { state: 'unchecked', schemaData: {} },
      { state: 'saved as false', schemaData: { agreeToTerms: false } },
    ])(
      'fails validation with an explanation while $state',
      async ({ schemaData }) => {
        const { ref, onValid, onInvalid } = renderStep(
          schemaData,
          mustCheckStep,
        )
        act(() => ref.current?.submit())
        const checkbox = await screen.findByRole('checkbox', {
          name: TERMS_LABEL,
          description: new RegExp(MUST_CHECK_ERROR_MESSAGE),
        })
        expect(checkbox).toHaveAttribute('aria-invalid', 'true')
        expect(screen.queryByText(/constant|required property/)).toBeNull()
        expect(onInvalid).toHaveBeenCalled()
        expect(onValid).not.toHaveBeenCalled()
      },
    )

    it('passes validation once checked', async () => {
      const user = userEvent.setup()
      const { ref, onValid, onInvalid } = renderStep({}, mustCheckStep)
      await user.click(screen.getByRole('checkbox', { name: TERMS_LABEL }))
      act(() => ref.current?.submit())
      expect(onValid).toHaveBeenCalledWith({ agreeToTerms: true })
      expect(onInvalid).not.toHaveBeenCalled()
    })
  })
})
