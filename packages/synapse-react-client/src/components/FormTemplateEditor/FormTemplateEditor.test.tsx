import { mockGenomicsTemplate } from '@/mocks/accessRequirement/mockFormTemplates'
import { mockGenomicsSchema } from '@/mocks/accessRequirement/mockJsonSchemas'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { getFormTemplateHandlers } from '@/mocks/msw/handlers/formTemplateHandlers'
import {
  getCreateSchemaHandlers,
  getRegisteredSchemaHandlers,
} from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FormTemplate } from '@sage-bionetworks/synapse-client'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import { JSONSchema7 } from 'json-schema'
import { FormTemplateEditor } from './FormTemplateEditor'
import { ACCESS_REQUIREMENT_BASE_SCHEMA_ID } from './formTemplateSchema'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const createdSchemas: JSONSchema7[] = []

const createTemplateSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplate',
)
const listSchemaVersionsSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaVersionList',
)

function renderEditor(onSaved = vi.fn(), templateId?: string) {
  return render(
    <FormTemplateEditor templateId={templateId} onSaved={onSaved} />,
    { wrapper: createWrapper() },
  )
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
    createdSchemas.length = 0
    server.use(
      ...getFormTemplateHandlers(REPO_ENDPOINT),
      ...getRegisteredSchemaHandlers(REPO_ENDPOINT, [
        mockGenomicsSchema as JSONSchema7,
      ]),
      ...getCreateSchemaHandlers(REPO_ENDPOINT, createdSchemas),
    )
    listSchemaVersionsSpy.mockResolvedValue({ page: [] })
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

  it('registers a new template schema under the ACT organization, extending the base schema, and includes isPublic in the saved template', async () => {
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
    expect(createdSchemas).toEqual([
      expect.objectContaining({
        $id: 'org.sagebionetworks.act-MyTemplate-1.0.0',
        allOf: [{ $ref: ACCESS_REQUIREMENT_BASE_SCHEMA_ID }],
      }),
    ])
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
    renderEditor()

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
  })

  it("opens an existing template with its registered schema, and saves a changed schema as the schema's next major version with the base $ref kept", async () => {
    const user = userEvent.setup()
    const onSaved = vi.fn()
    listSchemaVersionsSpy.mockResolvedValue({
      page: [{ semanticVersion: '1.0.0' }],
    })
    renderEditor(onSaved, mockGenomicsTemplate.id)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    await screen.findByRole('heading', { name: 'Edit Form Template' })
    expect(
      screen.getByText(`JSON Schema: ${mockGenomicsSchema.$id}`),
    ).toBeVisible()

    await createField(user)
    await user.click(screen.getByRole('button', { name: 'Close field editor' }))
    await waitFor(() =>
      expect(screen.getByRole('button', { name: 'New' })).toBeEnabled(),
    )

    await user.click(screen.getByRole('button', { name: 'Save Changes' }))

    await waitFor(() => expect(onSaved).toHaveBeenCalled())
    expect(listSchemaVersionsSpy).toHaveBeenCalledWith(
      {
        listJsonSchemaVersionInfoRequest: expect.objectContaining({
          organizationName: 'org.sagebionetworks.act',
          schemaName: 'GenomicsDataAccessRequest',
        }),
      },
      expect.anything(),
    )
    expect(createdSchemas).toEqual([
      expect.objectContaining({
        $id: 'org.sagebionetworks.act-GenomicsDataAccessRequest-2.0.0',
        allOf: [{ $ref: ACCESS_REQUIREMENT_BASE_SCHEMA_ID }],
        properties: expect.objectContaining({
          intendedDataUse: mockGenomicsSchema.properties!.intendedDataUse,
          newField: expect.anything(),
        }),
      }),
    ])
    expect(onSaved).toHaveBeenCalledWith(
      expect.objectContaining({ id: mockGenomicsTemplate.id }),
    )
  })

  it('shows an error instead of the editor when the template cannot be loaded', async () => {
    renderEditor(vi.fn(), 'missing-template')

    expect(
      await screen.findByText(
        'Could not load the form template: FormTemplate not found: missing-template',
      ),
    ).toBeVisible()
    expect(
      screen.queryByRole('textbox', { name: 'Internal Name' }),
    ).not.toBeInTheDocument()
  })
})
