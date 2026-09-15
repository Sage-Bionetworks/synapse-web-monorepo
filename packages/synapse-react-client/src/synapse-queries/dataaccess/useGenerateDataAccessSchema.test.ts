import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  AsynchronousJobStatus,
  DataAccessRequestType,
  FormTemplate,
  GenerateDataAccessSchemaResponse,
} from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import {
  createGenerateDataAccessSchemaFromAccessRequirementRequest,
  createGenerateDataAccessSchemaFromTemplateDraftRequest,
  useGenerateDataAccessSchema,
} from './useGenerateDataAccessSchema'

const postJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'postRepoV1AsynchronousJob',
)
const getJobSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.asynchronousJobServicesClient,
  'getRepoV1AsynchronousJobJobId',
)

describe('createGenerateDataAccessSchemaFromTemplateDraftRequest', () => {
  it('builds a discriminated request for an unsaved template draft', () => {
    const templateDraft: FormTemplate = {
      name: 'Draft Template',
      schema$id: 'org.example-1.0.0',
      steps: [],
    }

    const request = createGenerateDataAccessSchemaFromTemplateDraftRequest(
      templateDraft,
      DataAccessRequestType.REQUEST,
    )

    expect(request).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromTemplateDraft',
      requestType: 'REQUEST',
      templateDraft,
    })
  })
})

describe('createGenerateDataAccessSchemaFromAccessRequirementRequest', () => {
  it('builds a discriminated request for a specific AccessRequirement version', () => {
    const request = createGenerateDataAccessSchemaFromAccessRequirementRequest(
      { accessRequirementId: '1', accessRequirementVersionNumber: 2 },
      DataAccessRequestType.RENEWAL,
    )

    expect(request).toEqual({
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaFromAccessRequirement',
      requestType: 'RENEWAL',
      accessRequirement: {
        accessRequirementId: '1',
        accessRequirementVersionNumber: 2,
      },
    })
  })
})

describe('useGenerateDataAccessSchema', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('starts the async job and polls the generic job endpoint until it completes', async () => {
    const templateDraft: FormTemplate = {
      name: 'Draft Template',
      schema$id: 'org.example-1.0.0',
      steps: [],
    }
    const request = createGenerateDataAccessSchemaFromTemplateDraftRequest(
      templateDraft,
      DataAccessRequestType.REQUEST,
    )
    const response: GenerateDataAccessSchemaResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.dataaccess.schema.GenerateDataAccessSchemaResponse',
      steps: [],
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

    const { result } = renderHook(() => useGenerateDataAccessSchema(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(postJobSpy).toHaveBeenCalledWith({
      asynchronousRequestBody: request,
    })
    expect(getJobSpy).toHaveBeenCalledWith({ jobId: 'job-1' })
    expect(result.current.data).toEqual(response)
  })

  it('does not start a job when request is undefined', () => {
    const { result } = renderHook(
      () => useGenerateDataAccessSchema(undefined),
      {
        wrapper: createWrapper(),
      },
    )

    expect(result.current.fetchStatus).toBe('idle')
    expect(postJobSpy).not.toHaveBeenCalled()
  })
})
