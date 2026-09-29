import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  AsynchronousJobStatus,
  CreateSchemaResponse,
  FormTemplate,
} from '@sage-bionetworks/synapse-client'
import { renderHook } from '@testing-library/react'
import { RJSFSchema } from '@rjsf/utils'
import { EditableFormTemplateStep } from './utils'
import { useSaveFormTemplate } from './useSaveFormTemplate'

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
const updateTemplateSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplateTemplateId',
)
const listSchemaVersionsSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaVersionList',
)

function mockSchemaCreation(newSchema$id: string) {
  const response: CreateSchemaResponse = {
    concreteType: 'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
    newVersionInfo: { $id: newSchema$id },
  }
  const completeStatus: AsynchronousJobStatus = {
    jobId: 'job-1',
    jobState: 'COMPLETE',
    responseBody: response,
  }
  postJobSpy.mockResolvedValueOnce(completeStatus)
  getJobSpy.mockResolvedValueOnce(completeStatus)
}

function mockRegisteredVersions(...semanticVersions: string[]) {
  listSchemaVersionsSpy.mockResolvedValueOnce({
    page: semanticVersions.map(semanticVersion => ({ semanticVersion })),
  })
}

function expectVersionsListedFor(organizationName: string, schemaName: string) {
  expect(listSchemaVersionsSpy).toHaveBeenCalledWith(
    {
      listJsonSchemaVersionInfoRequest: expect.objectContaining({
        organizationName,
        schemaName,
      }),
    },
    expect.anything(),
  )
}

function expectSchemaRegisteredAs(schema$id: string) {
  expect(postJobSpy).toHaveBeenCalledWith({
    asynchronousRequestBody: expect.objectContaining({
      concreteType: 'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
      schema: expect.objectContaining({ $id: schema$id }),
    }),
  })
}

const jsonSchema: RJSFSchema = {
  $id: 'org.example-MyTemplate-1.0.0',
  type: 'object',
  properties: { a: { type: 'string' } },
}

const steps: EditableFormTemplateStep[] = [
  {
    uiKey: 'step-0',
    title: 'Step 1',
    fields: [
      {
        schemaPath: '/a',
        uiDefinition: {},
        isPublic: false,
      },
    ],
  },
]

describe('useSaveFormTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns validation errors and never calls the network when the draft is invalid', async () => {
    const invalidSteps: EditableFormTemplateStep[] = [
      {
        uiKey: 'step-0',
        title: 'Step 1',
        fields: [
          {
            schemaPath: '/missing',
            uiDefinition: {},
            isPublic: false,
          },
        ],
      },
    ]
    const { result } = renderHook(() => useSaveFormTemplate(), {
      wrapper: createWrapper(),
    })

    const saveResult = await result.current.mutateAsync({
      name: 'My Template',
      jsonSchema,
      steps: invalidSteps,
    })

    expect(saveResult.ok).toBe(false)
    expect(postJobSpy).not.toHaveBeenCalled()
    expect(createTemplateSpy).not.toHaveBeenCalled()
  })

  it('registers the next major version under a schema name derived from the template name, and creates the template, when there is no existing template', async () => {
    mockRegisteredVersions('2.0.0')
    mockSchemaCreation('org.sagebionetworks.act-MyTemplate-3.0.0')
    const createdTemplate: FormTemplate = {
      id: 'template-1',
      name: 'My Template',
      schema$id: 'org.sagebionetworks.act-MyTemplate-3.0.0',
      steps: [],
      etag: 'etag-1',
      versionNumber: 1,
    }
    createTemplateSpy.mockResolvedValueOnce(createdTemplate)

    const { result } = renderHook(() => useSaveFormTemplate(), {
      wrapper: createWrapper(),
    })

    const saveResult = await result.current.mutateAsync({
      name: 'My Template',
      jsonSchema,
      steps,
    })

    expect(saveResult).toEqual({ ok: true, template: createdTemplate })
    expectVersionsListedFor('org.sagebionetworks.act', 'MyTemplate')
    expectSchemaRegisteredAs('org.sagebionetworks.act-MyTemplate-3.0.0')
    expect(createTemplateSpy).toHaveBeenCalledWith({
      formTemplate: expect.objectContaining({
        name: 'My Template',
        schema$id: 'org.sagebionetworks.act-MyTemplate-3.0.0',
      }),
    })
    expect(updateTemplateSpy).not.toHaveBeenCalled()
  })

  it('skips re-registering the schema when it has not changed, and updates the existing template', async () => {
    const initialTemplate: FormTemplate = {
      id: 'template-1',
      name: 'My Template',
      schema$id: 'org.example-MyTemplate-1.0.0',
      steps: [],
      etag: 'etag-1',
      versionNumber: 1,
    }
    const updatedTemplate: FormTemplate = {
      ...initialTemplate,
      etag: 'etag-2',
      versionNumber: 2,
    }
    updateTemplateSpy.mockResolvedValueOnce(updatedTemplate)

    const { result } = renderHook(() => useSaveFormTemplate(), {
      wrapper: createWrapper(),
    })

    const saveResult = await result.current.mutateAsync({
      initialTemplate,
      initialJsonSchema: jsonSchema,
      name: 'My Template',
      jsonSchema,
      steps,
    })

    expect(saveResult).toEqual({ ok: true, template: updatedTemplate })
    expect(postJobSpy).not.toHaveBeenCalled()
    expect(listSchemaVersionsSpy).not.toHaveBeenCalled()
    expect(updateTemplateSpy).toHaveBeenCalledWith({
      templateId: 'template-1',
      formTemplate: expect.objectContaining({
        schema$id: 'org.example-MyTemplate-1.0.0',
      }),
    })
  })

  it('propagates a 412 conflict from the update mutation, forwarding the stale etag', async () => {
    const initialTemplate: FormTemplate = {
      id: 'template-1',
      name: 'My Template',
      schema$id: 'org.example-MyTemplate-1.0.0',
      steps: [],
      etag: 'stale-etag',
      versionNumber: 1,
    }
    const conflictError = Object.assign(new Error('Precondition failed'), {
      status: 412,
    })
    updateTemplateSpy.mockRejectedValueOnce(conflictError)

    const { result } = renderHook(() => useSaveFormTemplate(), {
      wrapper: createWrapper(),
    })

    await expect(
      result.current.mutateAsync({
        initialTemplate,
        initialJsonSchema: jsonSchema,
        name: 'My Template',
        jsonSchema,
        steps,
      }),
    ).rejects.toMatchObject({ status: 412 })

    expect(updateTemplateSpy).toHaveBeenCalledWith({
      templateId: 'template-1',
      formTemplate: expect.objectContaining({ etag: 'stale-etag' }),
    })
  })

  it("registers the next major version under the existing schema's name, even after a rename, and updates the template when its schema body changed", async () => {
    mockRegisteredVersions('1.0.0')
    mockSchemaCreation('org.example-MyTemplate-2.0.0')
    const initialTemplate: FormTemplate = {
      id: 'template-1',
      name: 'My Template',
      schema$id: 'org.example-MyTemplate-1.0.0',
      steps: [],
      etag: 'etag-1',
      versionNumber: 1,
    }
    const updatedTemplate: FormTemplate = {
      ...initialTemplate,
      name: 'Renamed Template',
      schema$id: 'org.example-MyTemplate-2.0.0',
      etag: 'etag-2',
      versionNumber: 2,
    }
    updateTemplateSpy.mockResolvedValueOnce(updatedTemplate)

    const changedJsonSchema: RJSFSchema = {
      ...jsonSchema,
      properties: { a: { type: 'string' }, b: { type: 'string' } },
    }

    const { result } = renderHook(() => useSaveFormTemplate(), {
      wrapper: createWrapper(),
    })

    const saveResult = await result.current.mutateAsync({
      initialTemplate,
      initialJsonSchema: jsonSchema,
      name: 'Renamed Template',
      jsonSchema: changedJsonSchema,
      steps,
    })

    expect(saveResult).toEqual({ ok: true, template: updatedTemplate })
    expectVersionsListedFor('org.example', 'MyTemplate')
    expectSchemaRegisteredAs('org.example-MyTemplate-2.0.0')
    expect(updateTemplateSpy).toHaveBeenCalledWith({
      templateId: 'template-1',
      formTemplate: expect.objectContaining({
        name: 'Renamed Template',
        schema$id: 'org.example-MyTemplate-2.0.0',
      }),
    })
  })
})
