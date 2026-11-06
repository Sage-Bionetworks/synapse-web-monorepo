import { RJSFSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import {
  FormTemplatePreview,
  VALIDATE_RESPONSES_LABEL,
} from './FormTemplatePreview'

const schema: RJSFSchema = {
  type: 'object',
  title: 'Ignored at the top level',
  properties: {
    institution: { type: 'string', title: 'Institution' },
    signingOfficial: { type: 'string', title: 'Signing Official' },
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

const oneStepTemplate = template([
  {
    title: 'Basics',
    description: 'Tell us about yourself',
    fields: [{ schemaPath: '/institution', uiDefinition: {} }],
  },
])

/** Both fields here are ALWAYS -- visible for either request type -- to isolate stepper
 * navigation/clamping from the request-type gating covered separately below. */
const twoAlwaysVisibleStepsTemplate = template([
  {
    title: 'Basics',
    fields: [{ schemaPath: '/institution', uiDefinition: {} }],
  },
  {
    title: 'Additional info',
    fields: [{ schemaPath: '/signingOfficial', uiDefinition: {} }],
  },
])

/** "Renewal details" only has a field once RENEWAL is selected. */
const renewalGatedTemplate = template([
  {
    title: 'Basics',
    fields: [{ schemaPath: '/institution', uiDefinition: {} }],
  },
  {
    title: 'Renewal details',
    fields: [{ schemaPath: '/summaryOfUse', uiDefinition: {} }],
  },
])

function renderPreview(props: {
  template: FormTemplate
  jsonSchema: RJSFSchema
}) {
  return render(<FormTemplatePreview {...props} />, {
    wrapper: createWrapper(),
  })
}

/** The generated field's `title` is rendered as a `<label>`'s own text node, alongside a sibling
 * required-asterisk `<span>` -- so it's queried by label text, not by accessible input name (RJSF's
 * TextWidget sets its own `aria-label` to the field id, overriding the associated `<label>`). */
function getFieldLabel(title: string) {
  return screen.getByText(title, { selector: 'label' })
}
function queryFieldLabel(title: string) {
  return screen.queryByText(title, { selector: 'label' })
}
function getValidateCheckbox() {
  return screen.getByRole('checkbox', { name: VALIDATE_RESPONSES_LABEL })
}

describe('FormTemplatePreview', () => {
  it('shows an empty-state prompt when no step has a bound field', () => {
    renderPreview({ template: template([]), jsonSchema: schema })
    expect(
      screen.getByText(
        'Add at least one step with a bound field to preview the form.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the single step title and description exactly once, with its bound field', () => {
    renderPreview({ template: oneStepTemplate, jsonSchema: schema })
    expect(screen.getAllByText('Basics')).toHaveLength(1)
    expect(screen.getAllByText('Tell us about yourself')).toHaveLength(1)
    expect(getFieldLabel('Institution')).toBeInTheDocument()
  })

  it('does not render a stepper for a single step', () => {
    renderPreview({ template: oneStepTemplate, jsonSchema: schema })
    expect(
      screen.queryByRole('button', { name: 'Basics' }),
    ).not.toBeInTheDocument()
  })

  it('renders a clickable stepper and switches steps when a step is selected', async () => {
    const user = userEvent.setup()
    renderPreview({
      template: twoAlwaysVisibleStepsTemplate,
      jsonSchema: schema,
    })
    expect(getFieldLabel('Institution')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Additional info' }))
    expect(queryFieldLabel('Institution')).not.toBeInTheDocument()
    expect(getFieldLabel('Signing Official')).toBeInTheDocument()
  })

  it('keeps answers when moving between steps', async () => {
    const user = userEvent.setup()
    renderPreview({
      template: twoAlwaysVisibleStepsTemplate,
      jsonSchema: schema,
    })
    await user.type(screen.getByRole('textbox'), 'Sage Bionetworks')
    await user.click(screen.getByRole('button', { name: 'Additional info' }))
    await user.click(screen.getByRole('button', { name: 'Basics' }))
    expect(screen.getByRole('textbox')).toHaveValue('Sage Bionetworks')
  })

  it('excludes a step whose only field is gated to the other request type', () => {
    // "summaryOfUse" is gated to RENEWAL by the schema's allOf; a REQUEST-only preview omits the
    // "Renewal details" step entirely (generateDataAccessSchema drops steps with no fields).
    renderPreview({ template: renewalGatedTemplate, jsonSchema: schema })
    expect(screen.queryByText('Renewal details')).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Renewal details' }),
    ).not.toBeInTheDocument()
  })

  it('regenerates the visible steps when the Request/Renewal toggle changes', async () => {
    const user = userEvent.setup()
    renderPreview({ template: renewalGatedTemplate, jsonSchema: schema })
    // Only the Basics step qualifies for REQUEST, so no stepper is shown yet.
    expect(
      screen.queryByRole('button', { name: 'Renewal details' }),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Renewal' }))
    await user.click(screen.getByRole('button', { name: 'Renewal details' }))
    expect(getFieldLabel('Summary')).toBeInTheDocument()
  })

  it('clamps the active step index when the step count shrinks below it', async () => {
    const user = userEvent.setup()
    const { rerender } = renderPreview({
      template: twoAlwaysVisibleStepsTemplate,
      jsonSchema: schema,
    })
    await user.click(screen.getByRole('button', { name: 'Additional info' }))
    expect(getFieldLabel('Signing Official')).toBeInTheDocument()
    rerender(
      <FormTemplatePreview template={oneStepTemplate} jsonSchema={schema} />,
    )
    // Previously-active index 1 no longer exists; should fall back to the last real step.
    expect(getFieldLabel('Institution')).toBeInTheDocument()
  })

  it('keeps the multi-select dropdown open after each pick', async () => {
    const user = userEvent.setup()
    renderPreview({
      template: template([
        {
          title: 'Basics',
          fields: [{ schemaPath: '/colors', uiDefinition: {} }],
        },
      ]),
      jsonSchema: {
        ...schema,
        properties: {
          ...schema.properties,
          colors: {
            type: 'array',
            title: 'Colors',
            items: { type: 'string', enum: ['Red', 'Green', 'Blue'] },
            uniqueItems: true,
          },
        },
      },
    })
    await user.click(screen.getByRole('combobox'))
    await user.click(screen.getByRole('option', { name: 'Red' }))
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    await user.click(screen.getByRole('option', { name: 'Blue' }))
    expect(screen.getByRole('button', { name: 'Red' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Blue' })).toBeInTheDocument()
  })

  it('shows a Yes/No question as Yes and No radio buttons', async () => {
    const user = userEvent.setup()
    renderPreview({
      template: template([
        {
          title: 'Basics',
          fields: [{ schemaPath: '/hasIrbApproval', uiDefinition: {} }],
        },
      ]),
      jsonSchema: {
        ...schema,
        properties: {
          ...schema.properties,
          hasIrbApproval: { type: 'boolean', title: 'IRB approval obtained' },
        },
      },
    })
    expect(getFieldLabel('IRB approval obtained')).toBeInTheDocument()
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument()
    await user.click(screen.getByRole('radio', { name: 'No' }))
    expect(screen.getByRole('radio', { name: 'No' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Yes' })).not.toBeChecked()
  })

  it('shows a boolean that must be true as a checkbox, which blocks validated navigation until checked', async () => {
    const user = userEvent.setup()
    renderPreview({
      template: template([
        {
          title: 'Agreements',
          fields: [{ schemaPath: '/agreeToTerms', uiDefinition: {} }],
        },
        {
          title: 'Additional info',
          fields: [{ schemaPath: '/signingOfficial', uiDefinition: {} }],
        },
      ]),
      jsonSchema: {
        ...schema,
        properties: {
          ...schema.properties,
          agreeToTerms: { type: 'boolean', const: true, title: 'I agree' },
        },
        required: [...(schema.required ?? []), 'agreeToTerms'],
      },
    })
    const terms = screen.getByRole('checkbox', { name: 'I agree' })
    expect(terms).not.toBeChecked()
    expect(screen.queryByRole('radio')).not.toBeInTheDocument()

    await user.click(getValidateCheckbox())
    await user.click(screen.getByRole('button', { name: 'Additional info' }))
    expect(
      await screen.findByRole('checkbox', {
        name: 'I agree',
        description: /You must check this box to continue/,
      }),
    ).toHaveAttribute('aria-invalid', 'true')
    expect(queryFieldLabel('Signing Official')).not.toBeInTheDocument()

    await user.click(screen.getByRole('checkbox', { name: 'I agree' }))
    await user.click(screen.getByRole('button', { name: 'Additional info' }))
    expect(await screen.findByText('Signing Official')).toBeInTheDocument()
  })

  describe('Validate responses', () => {
    it('is offered unchecked, so navigation is free by default', async () => {
      const user = userEvent.setup()
      renderPreview({
        template: twoAlwaysVisibleStepsTemplate,
        jsonSchema: schema,
      })
      expect(getValidateCheckbox()).not.toBeChecked()
      // The required Institution field is blank
      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      expect(getFieldLabel('Signing Official')).toBeInTheDocument()
      expect(screen.getByRole('textbox')).not.toHaveAttribute(
        'aria-invalid',
        'true',
      )
    })

    it('marks the blank required field invalid and stays on its step', async () => {
      const user = userEvent.setup()
      renderPreview({
        template: twoAlwaysVisibleStepsTemplate,
        jsonSchema: schema,
      })
      await user.click(getValidateCheckbox())
      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      await waitFor(() =>
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'aria-invalid',
          'true',
        ),
      )
      expect(getFieldLabel('Institution')).toBeInTheDocument()
      expect(queryFieldLabel('Signing Official')).not.toBeInTheDocument()
    })

    it('does not later move to a step whose navigation was blocked', async () => {
      const user = userEvent.setup()
      renderPreview({
        template: twoAlwaysVisibleStepsTemplate,
        jsonSchema: schema,
      })
      await user.click(getValidateCheckbox())
      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      // Enter submits the step's form without a step being chosen
      await user.type(screen.getByRole('textbox'), 'Sage Bionetworks{Enter}')
      expect(getFieldLabel('Institution')).toBeInTheDocument()

      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      expect(getFieldLabel('Signing Official')).toBeInTheDocument()
    })

    it('restores free navigation when unchecked', async () => {
      const user = userEvent.setup()
      renderPreview({
        template: twoAlwaysVisibleStepsTemplate,
        jsonSchema: schema,
      })
      await user.click(getValidateCheckbox())
      await user.click(getValidateCheckbox())
      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      expect(getFieldLabel('Signing Official')).toBeInTheDocument()
    })

    it('moves to the chosen step when the current step is valid', async () => {
      const user = userEvent.setup()
      renderPreview({
        template: twoAlwaysVisibleStepsTemplate,
        jsonSchema: schema,
      })
      await user.click(getValidateCheckbox())
      await user.type(screen.getByRole('textbox'), 'Sage Bionetworks')
      await user.click(screen.getByRole('button', { name: 'Additional info' }))
      expect(
        await screen.findByText('Signing Official', { selector: 'label' }),
      ).toBeInTheDocument()
      expect(queryFieldLabel('Institution')).not.toBeInTheDocument()
    })

    it('stays checked when switching between the Request and Renewal views', async () => {
      const user = userEvent.setup()
      renderPreview({ template: renewalGatedTemplate, jsonSchema: schema })
      await user.click(getValidateCheckbox())
      await user.click(screen.getByRole('button', { name: 'Renewal' }))
      expect(getValidateCheckbox()).toBeChecked()
      await user.click(screen.getByRole('button', { name: 'Request' }))
      expect(getValidateCheckbox()).toBeChecked()
    })

    it('blocks navigation in the Renewal view', async () => {
      const user = userEvent.setup()
      renderPreview({ template: renewalGatedTemplate, jsonSchema: schema })
      await user.click(getValidateCheckbox())
      await user.click(screen.getByRole('button', { name: 'Renewal' }))
      await user.click(screen.getByRole('button', { name: 'Renewal details' }))
      await waitFor(() =>
        expect(screen.getByRole('textbox')).toHaveAttribute(
          'aria-invalid',
          'true',
        ),
      )
      expect(getFieldLabel('Institution')).toBeInTheDocument()
      expect(queryFieldLabel('Summary')).not.toBeInTheDocument()
    })
  })
})
