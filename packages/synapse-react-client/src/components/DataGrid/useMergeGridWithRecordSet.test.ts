import { renderHook, waitFor } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useMergeGridWithRecordSet from './useMergeGridWithRecordSet'

const mockPostRepoV1GridExportRecordsetAsyncStart = vi.fn()
const mockGetRepoV1AsynchronousJobJobId = vi.fn()

const mockSynapseClient = {
  gridServicesClient: {
    postRepoV1GridExportRecordsetAsyncStart:
      mockPostRepoV1GridExportRecordsetAsyncStart,
  },
  asynchronousJobServicesClient: {
    getRepoV1AsynchronousJobJobId: mockGetRepoV1AsynchronousJobJobId,
  },
}

vi.mock('@/utils', () => ({
  useSynapseContext: () => ({
    synapseClient: mockSynapseClient,
  }),
}))

describe('useMergeGridWithRecordSet', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should successfully export grid session to RecordSet', async () => {
    const mockAsyncJobId = { token: 'job-123' }

    // Mock the final response containing the exported RecordSet
    // This is what gets returned when the async job completes
    const mockAsyncJobResponse = {
      responseBody: {
        concreteType:
          'org.sagebionetworks.repo.model.grid.GridRecordSetExportResponse',
        recordSet: {},
      },
    }

    // Set up the mock functions to return our test data
    mockPostRepoV1GridExportRecordsetAsyncStart.mockResolvedValue(
      mockAsyncJobId,
    )
    mockGetRepoV1AsynchronousJobJobId.mockResolvedValue(mockAsyncJobResponse)

    const { result } = renderHook(() => useMergeGridWithRecordSet(), {
      wrapper: createWrapper(),
    })

    // Trigger the mutation with a test grid session ID
    const gridSessionId = 'session-123'
    result.current.mutate({ gridSessionId })

    // Wait for the mutation to complete successfully
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    // Verify the hook called the grid export API with correct parameters
    expect(mockPostRepoV1GridExportRecordsetAsyncStart).toHaveBeenCalledWith({
      gridRecordSetExportRequest: {
        sessionId: gridSessionId,
        concreteType:
          'org.sagebionetworks.repo.model.grid.GridRecordSetExportRequest',
      },
    })

    // Verify the hook polled the async job status with the returned job ID
    expect(mockGetRepoV1AsynchronousJobJobId).toHaveBeenCalledWith({
      jobId: 'job-123',
    })

    // Verify the hook returns the final response body as the mutation result
    expect(result.current.data).toEqual(mockAsyncJobResponse.responseBody)
  })
})
