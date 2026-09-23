import { RJSFSchema } from '@rjsf/utils'
import {
  DataAccessRequestType,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { FormTemplatePreview } from './FormTemplatePreview'

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

describe('FormTemplatePreview', () => {
  it('shows an empty-state prompt when no step has a bound field', () => {
    renderPreview({ template: template([]), jsonSchema: schema })
    expect(
      screen.getByText(
        'Add at least one step with a bound field to preview the form.',
      ),
    ).toBeInTheDocument()
  })

  it('renders the single step title, description, and its bound field', () => {
    renderPreview({ template: oneStepTemplate, jsonSchema: schema })
    // The preview's own step-title heading is an h6; RJSF also renders the object schema's
    // `title` as its own h5 inside the form -- assert the specific one this component owns.
    expect(
      screen.getByRole('heading', { name: 'Basics', level: 6 }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('Tell us about yourself')[0]).toBeInTheDocument()
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
})
