import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { getCreateSchemaHandlers } from '@/mocks/msw/handlers/schemaHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { RJSFSchema } from '@rjsf/utils'
import { JSONSchema7 } from 'json-schema'
import {
  AsynchronousJobStatus,
  CreateSchemaResponse,
} from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { useCreateJsonSchema } from './useCreateJsonSchema'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const postJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'postRepoV1AsynchronousJob',
)
const getJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'getRepoV1AsynchronousJobJobId',
)

describe('useCreateJsonSchema', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('starts the async job with the schema body and polls until it completes', async () => {
    const schema: RJSFSchema = {
      $id: 'org.example-1.0.0',
      type: 'object',
      properties: { institution: { type: 'string' } },
    }
    const response: CreateSchemaResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.schema.CreateSchemaResponse',
      newVersionInfo: { $id: 'org.example-2.0.0' },
    }

    const processingStatus: AsynchronousJobStatus = {
      jobId: 'job-1',
      jobState: 'PROCESSING',
    }
    const completeStatus: AsynchronousJobStatus = {
      jobId: 'job-1',
      jobState: 'COMPLETE',
      responseBody: response,
    }

    postJobSpy.mockResolvedValueOnce(processingStatus)
    getJobSpy
      .mockResolvedValueOnce(processingStatus)
      .mockResolvedValueOnce(completeStatus)

    const { result } = renderHook(() => useCreateJsonSchema(), {
      wrapper: createWrapper(),
    })

    result.current.mutate(schema)

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(postJobSpy).toHaveBeenCalledWith({
      asynchronousRequestBody: expect.objectContaining({
        concreteType:
          'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
      }),
    })
    expect(getJobSpy).toHaveBeenCalledWith({ jobId: 'job-1' })
    expect(result.current.data).toEqual(response)
  })

  it('surfaces a job failure as a mutation error', async () => {
    const schema: RJSFSchema = {
      $id: 'org.example-1.0.0',
      type: 'object',
      properties: { institution: { type: 'string' } },
    }
    const failedStatus: AsynchronousJobStatus = {
      jobId: 'job-1',
      jobState: 'FAILED',
      errorMessage: 'The submitted schema is invalid.',
    }
    postJobSpy.mockResolvedValueOnce(failedStatus)
    getJobSpy.mockResolvedValueOnce(failedStatus)

    const { result } = renderHook(() => useCreateJsonSchema(), {
      wrapper: createWrapper(),
    })

    result.current.mutate(schema)

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe(
      'The submitted schema is invalid.',
    )
  })

  it('propagates a network exception from starting the job', async () => {
    const schema: RJSFSchema = {
      $id: 'org.example-1.0.0',
      type: 'object',
      properties: { institution: { type: 'string' } },
    }
    postJobSpy.mockRejectedValueOnce(new Error('Network error'))

    const { result } = renderHook(() => useCreateJsonSchema(), {
      wrapper: createWrapper(),
    })

    result.current.mutate(schema)

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe('Network error')
    expect(getJobSpy).not.toHaveBeenCalled()
  })
})

describe('useCreateJsonSchema request body', () => {
  const registeredSchemas: JSONSchema7[] = []

  beforeAll(() => server.listen())
  afterAll(() => server.close())
  beforeEach(() => {
    registeredSchemas.length = 0
    server.use(...getCreateSchemaHandlers(REPO_ENDPOINT, registeredSchemas))
  })
  afterEach(() => server.resetHandlers())

  it('sends choice options, constants, defaults, and conditionals to the server', async () => {
    const schema: RJSFSchema = {
      $id: 'org.example-1.0.0',
      type: 'object',
      properties: {
        singleChoice: { type: 'string', enum: ['Red', 'Green'] },
        multiChoice: {
          type: 'array',
          items: { type: 'string', enum: ['Email', 'Phone'] },
          uniqueItems: true,
        },
        constant: { type: 'string', const: 'fixed' },
        withDefault: { type: 'string', default: 'hello' },
      },
      if: { properties: { singleChoice: { const: 'Red' } } },
      then: { required: ['constant'] },
      else: { required: ['withDefault'] },
    }
    const { result } = renderHook(() => useCreateJsonSchema(), {
      wrapper: createWrapper(),
    })

    await result.current.mutateAsync(schema)

    expect(registeredSchemas).toEqual([schema])
  })

  it('sends the keywords of schemas nested under composition, definition, and applicator keywords', async () => {
    const schema: RJSFSchema = {
      $id: 'org.example-1.0.0',
      type: 'object',
      definitions: { color: { type: 'string', enum: ['Red', 'Green'] } },
      allOf: [{ properties: { a: { enum: ['x'] } } }],
      anyOf: [{ properties: { b: { enum: ['y'] } } }],
      oneOf: [{ const: 'first' }, { const: 'second' }],
      not: { enum: ['forbidden'] },
      properties: {
        tags: { type: 'array', contains: { const: 'required-tag' } },
        scores: {
          type: 'object',
          additionalProperties: { type: 'string', enum: ['low', 'high'] },
        },
      },
    }
    const { result } = renderHook(() => useCreateJsonSchema(), {
      wrapper: createWrapper(),
    })

    await result.current.mutateAsync(schema)

    expect(registeredSchemas).toEqual([schema])
  })
})
