import { RJSFSchema } from '@rjsf/utils'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormStructurePanel } from './FormStructurePanel'
import { BIND_FIELD_LABEL } from './utils'
import { useFormTemplateDraft } from './useFormTemplateDraft'

const jsonSchema: RJSFSchema = {
  type: 'object',
  properties: {
    institution: { type: 'string', title: 'Institution' },
    pi: { type: 'string', title: 'PI' },
    notes: { type: 'string' },
  },
}

function field(schemaPath: string) {
  return { schemaPath, uiDefinition: {}, isPublic: false }
}

/** Step one binds institution and pi; step two is empty; notes is unbound. */
const template: FormTemplate = {
  name: 'Template',
  schema$id: 'org.sage-template',
  steps: [
    { title: 'One', fields: [field('/institution'), field('/pi')] },
    { title: 'Two', fields: [] },
  ],
}

function Harness({
  initialTemplate,
  schema = jsonSchema,
}: {
  initialTemplate: FormTemplate
  schema?: RJSFSchema
}) {
  const draft = useFormTemplateDraft(initialTemplate, schema)
  return (
    <FormStructurePanel
      steps={draft.steps}
      jsonSchema={draft.jsonSchema}
      unboundProperties={draft.unboundProperties}
      formTemplateId={undefined}
      onStepsChange={draft.setSteps}
      onBindField={draft.bindField}
    />
  )
}

function renderPanel(initialTemplate = template, schema?: RJSFSchema) {
  const user = userEvent.setup()
  render(<Harness initialTemplate={initialTemplate} schema={schema} />)
  return { user }
}

function stepHeadings() {
  return screen.getAllByText(/^Step \d+:/).map(el => el.textContent)
}

/** Display labels of the slot rows in the expanded step, in order. */
function slotLabels() {
  return screen
    .queryAllByText(/^(Institution|PI|notes)$/)
    .map(el => el.textContent)
}

/** Field-count captions ("N field(s)"), one per step, in step order. */
function fieldCounts() {
  return screen.getAllByText(/^\d+ fields?$/).map(el => el.textContent)
}

describe('FormStructurePanel', () => {
  it('adds an empty step at the end', async () => {
    const { user } = renderPanel()

    await user.click(screen.getByRole('button', { name: 'Add step' }))

    expect(stepHeadings()).toEqual([
      'Step 1: One',
      'Step 2: Two',
      'Step 3: New Step',
    ])
  })

  it('reorders steps with the move buttons, disabled at either end', async () => {
    const { user } = renderPanel()
    const [firstUp] = screen.getAllByRole('button', { name: 'Move step up' })
    const downButtons = screen.getAllByRole('button', {
      name: 'Move step down',
    })

    expect(firstUp).toBeDisabled()
    expect(downButtons.at(-1)).toBeDisabled()

    await user.click(downButtons[0])

    expect(stepHeadings()).toEqual(['Step 1: Two', 'Step 2: One'])
  })

  it('shows a prompt once every step is removed', async () => {
    const { user } = renderPanel()

    for (const button of screen.getAllByRole('button', {
      name: 'Remove step',
    })) {
      await user.click(button)
    }

    expect(screen.queryByText(/^Step \d+:/)).not.toBeInTheDocument()
    expect(screen.getByText(/No steps yet/)).toBeInTheDocument()
  })

  it('reorders and removes fields within a step', async () => {
    const { user } = renderPanel()
    expect(slotLabels()).toEqual(['Institution', 'PI'])

    await user.click(
      screen.getAllByRole('button', { name: 'Move field down' })[0],
    )
    expect(slotLabels()).toEqual(['PI', 'Institution'])

    await user.click(
      screen.getAllByRole('button', { name: 'Remove field from step' })[0],
    )
    expect(slotLabels()).toEqual(['Institution'])
  })

  it('warns about unbound fields until each one is bound to a step', async () => {
    const { user } = renderPanel({
      ...template,
      steps: [{ title: 'One', fields: [field('/institution')] }],
    })
    expect(screen.getByRole('alert')).toHaveTextContent(
      '2 fields are not yet bound to a step',
    )

    await user.click(screen.getByRole('combobox', { name: BIND_FIELD_LABEL }))
    await user.click(screen.getByRole('option', { name: 'PI (/pi)' }))
    expect(screen.getByRole('alert')).toHaveTextContent(
      '1 field is not yet bound to a step',
    )

    await user.click(screen.getByRole('combobox', { name: BIND_FIELD_LABEL }))
    await user.click(screen.getByRole('option', { name: '/notes' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(
      screen.getByRole('combobox', { name: BIND_FIELD_LABEL }),
    ).toHaveAttribute('aria-disabled', 'true')
    expect(slotLabels()).toEqual(['Institution', 'PI', 'notes'])
    expect(screen.getByText('3 fields')).toBeInTheDocument()
  })

  it('errors on a required unbound field, distinct from an optional unbound warning', async () => {
    const { user } = renderPanel(
      {
        ...template,
        steps: [{ title: 'One', fields: [field('/institution')] }],
      },
      { ...jsonSchema, required: ['pi'] },
    )

    expect(screen.getByText(/must be bound before saving/)).toHaveTextContent(
      'PI',
    )
    expect(screen.getByText(/not yet bound to a step\./)).toHaveTextContent(
      '1 field',
    )

    await user.click(screen.getByRole('combobox', { name: BIND_FIELD_LABEL }))
    await user.click(screen.getByRole('option', { name: 'PI (/pi)' }))
    expect(
      screen.queryByText(/must be bound before saving/),
    ).not.toBeInTheDocument()
    expect(screen.getByText(/not yet bound to a step\./)).toHaveTextContent(
      '1 field',
    )

    await user.click(screen.getByRole('combobox', { name: BIND_FIELD_LABEL }))
    await user.click(screen.getByRole('option', { name: '/notes' }))
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('binds a field into the step whose "Bind field" menu was used, not just the first', async () => {
    const { user } = renderPanel()

    // Step "Two" starts collapsed; expand it to reach its "Bind field" control.
    await user.click(screen.getByRole('button', { name: 'Expand step' }))
    const bindFieldSelects = screen.getAllByRole('combobox', {
      name: BIND_FIELD_LABEL,
    })
    expect(bindFieldSelects).toHaveLength(2)

    await user.click(bindFieldSelects[1])
    await user.click(screen.getByRole('option', { name: '/notes' }))

    expect(fieldCounts()).toEqual(['2 fields', '1 field'])
  })
})
