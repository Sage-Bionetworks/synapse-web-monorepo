import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  AsynchronousJobStatus,
  CreateSchemaResponse,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { FormTemplateEditor } from './FormTemplateEditor'

const postJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'postRepoV1AsynchronousJob',
)
const getJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'getRepoV1AsynchronousJobJobId',
)
const createTemplateSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplate',
)

/** Resolve every in-flight generic async job (schema creation, schema-generation preview) as
 * complete on the first poll, so neither the live preview nor a save is left hanging. */
function mockAsyncJobsAsComplete(response: CreateSchemaResponse) {
  const completeStatus: AsynchronousJobStatus = {
    jobId: 'job-1',
    jobState: 'COMPLETE',
    responseBody: response,
  }
  postJobSpy.mockResolvedValue(completeStatus)
  getJobSpy.mockResolvedValue(completeStatus)
}

function renderEditor(onSaved = vi.fn()) {
  return render(<FormTemplateEditor onSaved={onSaved} />, {
    wrapper: createWrapper(),
  })
}

/** Create a field via the library's "New" button; opens its drawer. */
async function createField(user: UserEvent) {
  await user.click(screen.getByRole('button', { name: 'New' }))
  await screen.findByRole('heading', { name: 'Edit field' })
}

function getKeyField() {
  return screen.getByRole('textbox', { name: 'Property key' })
}

describe('FormTemplateEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // The live preview also registers throwaway draft schema versions and generates a preview
    // in the background; resolve every async job the same way so it never hangs the test.
    const schemaCreationResponse: CreateSchemaResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
      newVersionInfo: { $id: 'org.example.mock-schema-1.0.1' },
    }
    mockAsyncJobsAsComplete(schemaCreationResponse)
  })

  it('derives the property key from the question label until it is overridden', async () => {
    const user = userEvent.setup()
    renderEditor()
    await createField(user)
    const keyField = getKeyField()
    const labelField = screen.getByRole('textbox', { name: 'Question label' })

    // Default title ("New field") produces a default key.
    expect(keyField).toHaveValue('newField')

    // The key follows the label as the editor types, like a slug.
    await user.clear(labelField)
    await user.type(labelField, 'Date of Birth')
    expect(keyField).toHaveValue('dateOfBirth')

    // Once the editor manually sets the key, further label edits no longer
    // change it.
    await user.clear(keyField)
    await user.type(keyField, 'dob')
    await user.tab()
    expect(keyField).toHaveValue('dob')

    await user.type(labelField, ' (approximate)')
    expect(keyField).toHaveValue('dob')
  })

  it('rejects a manually-entered key that collides with another field', async () => {
    const user = userEvent.setup()
    renderEditor()

    await createField(user)
    const firstKeyField = getKeyField()
    await user.clear(firstKeyField)
    await user.type(firstKeyField, 'dob')
    await user.tab()
    await user.click(screen.getByRole('button', { name: 'Close field editor' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'New' })).toBeEnabled(),
    )

    await createField(user)
    const secondKeyField = getKeyField()
    await user.clear(secondKeyField)
    await user.type(secondKeyField, 'dob')
    expect(secondKeyField).toHaveValue('dob')
    expect(screen.getByText('Already used by another field')).toBeVisible()

    // An invalid, colliding key is discarded on blur rather than applied.
    await user.tab()
    expect(secondKeyField).not.toHaveValue('dob')
  })

  it('strips invalid characters from a manually-entered key', async () => {
    const user = userEvent.setup()
    renderEditor()
    await createField(user)
    const keyField = getKeyField()

    await user.clear(keyField)
    await user.type(keyField, 'my field!! 1')
    expect(keyField).toHaveValue('myfield1')
  })

  it('marks a field as public and includes isPublic in the saved template', async () => {
    const user = userEvent.setup()
    const onSaved = vi.fn()
    renderEditor(onSaved)

    await createField(user)
    await user.click(screen.getByRole('button', { name: 'Close field editor' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'New' })).toBeEnabled(),
    )

    await user.click(screen.getByRole('combobox', { name: 'Bind field' }))
    await user.click(
      await screen.findByRole('option', { name: 'New field (/newField)' }),
    )

    await user.click(screen.getByRole('button', { name: 'Expand field' }))
    await user.click(
      screen.getByRole('checkbox', {
        name: 'Publicly viewable after approval',
      }),
    )

    await user.type(
      screen.getByRole('textbox', { name: 'Internal Name' }),
      'My Template',
    )

    const createdTemplate: FormTemplate = {
      id: 'template-1',
      name: 'My Template',
      schema$id: 'org.example.mock-schema-1.0.1',
      steps: [],
      etag: 'etag-1',
      versionNumber: 1,
    }
    createTemplateSpy.mockResolvedValueOnce(createdTemplate)

    await user.click(screen.getByRole('button', { name: 'Create Template' }))

    await waitFor(() => expect(onSaved).toHaveBeenCalled())
    expect(createTemplateSpy).toHaveBeenCalledWith({
      formTemplate: expect.objectContaining({
        steps: [
          expect.objectContaining({
            fields: [
              {
                schemaPath: '/newField',
                uiDefinition: {},
                isPublic: true,
              },
            ],
          }),
        ],
      }),
    })
  })

  it('blocks saving and shows an error when a field references a removed schema property', async () => {
    const user = userEvent.setup()
    const onSaved = vi.fn()
    renderEditor(onSaved)

    await createField(user)
    await user.click(screen.getByRole('button', { name: 'Close field editor' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'New' })).toBeEnabled(),
    )
    await user.click(screen.getByRole('combobox', { name: 'Bind field' }))
    await user.click(
      await screen.findByRole('option', { name: 'New field (/newField)' }),
    )

    await user.type(
      screen.getByRole('textbox', { name: 'Internal Name' }),
      'My Template',
    )

    // Removing the bound property from the schema via the Advanced editor
    // leaves the step field pointing at a schemaPath that no longer resolves.
    const advancedToggle = screen.getByRole('button', {
      name: 'Advanced: Edit raw JSON Schema',
    })
    await user.click(advancedToggle)
    const rawEditor = screen.getByRole('textbox', {
      name: 'Raw JSON Schema',
    })
    fireEvent.change(rawEditor, {
      target: { value: JSON.stringify({ type: 'object', properties: {} }) },
    })

    expect(
      screen.getByText(
        '"/newField" does not resolve to a property in the schema.',
      ),
    ).toBeVisible()
    expect(
      screen.getByRole('button', { name: 'Create Template' }),
    ).toBeDisabled()
    expect(onSaved).not.toHaveBeenCalled()
    expect(createTemplateSpy).not.toHaveBeenCalled()
  })
})
