import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  AsynchronousJobStatus,
  CreateSchemaResponse,
  JsonSchema,
} from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { useCreateJsonSchema } from './useCreateJsonSchema'

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
    const schema: JsonSchema = {
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
      asynchronousRequestBody: {
        concreteType:
          'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
        schema,
      },
    })
    expect(getJobSpy).toHaveBeenCalledWith({ jobId: 'job-1' })
    expect(result.current.data).toEqual(response)
  })

  it('surfaces a job failure as a mutation error', async () => {
    const schema: JsonSchema = {
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
    const schema: JsonSchema = {
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
