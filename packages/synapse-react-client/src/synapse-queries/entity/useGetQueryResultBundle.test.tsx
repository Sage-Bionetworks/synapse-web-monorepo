import { renderHook, waitFor } from '@testing-library/react'
import SynapseClient from '../../synapse-client'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useGetQueryResultBundle, {
  useGetQueryResultBundleWithAsyncStatus,
} from './useGetQueryResultBundle'
import { SynapseClientError } from '../../utils'
import {
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_RESULTS,
} from '../../utils/SynapseConstants'
import {
  AsynchJobState,
  AsynchronousJobStatus,
  Query,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'

let request: QueryBundleRequest

let expected: QueryResultBundle

function createAsynchronousJobStatus<TReq, TRes>(
  state: AsynchJobState,
  request: TReq,
  response: TRes,
): AsynchronousJobStatus<TReq, TRes> {
  const conditionalFields: Partial<AsynchronousJobStatus<TReq, TRes>> = {}
  switch (state) {
    case 'PROCESSING':
      conditionalFields.progressMessage = 'Processing'
      break
    case 'FAILED':
      conditionalFields.exception = 'java.lang.IllegalArgumentException'
      conditionalFields.errorMessage = 'Unknown column abc'
      conditionalFields.errorDetails =
        'Details about the error, such as a stack trace from the backend.'
      break
    case 'COMPLETE':
      conditionalFields.responseBody = response
      conditionalFields.progressMessage = 'Complete'
      break
    default:
      break
  }

  return {
    jobState: state,
    jobCanceling: false,
    requestBody: request,
    etag: 'a6fb211c-f98d-4441-aa1d-b226f7375a79',
    jobId: '123',
    startedByUserId: MOCK_USER_ID,
    startedOn: '2022-07-07T19:35:12.639Z',
    changedOn: '2022-07-07T19:35:13.337Z',
    runtimeMS: 1500,
    ...conditionalFields,
  }
}

const mockUpdateStatus = jest.fn()
const mockGetAsyncJobResults = jest.spyOn(
  SynapseClient,
  'getQueryTableAsyncJobResults',
)

describe('Hooks for fetching table query bundles using react-query', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    request = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
      entityId: 'syn123',
      query: {
        sql: 'select * from syn123',
        selectedFacets: [],
        offset: 25,
        limit: 10,
        sort: [],
      },
      partMask: BUNDLE_MASK_QUERY_RESULTS | BUNDLE_MASK_QUERY_COUNT,
    }
    expected = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          tableId: '1234',
          concreteType: 'result',
          etag: '000-111-222',
          headers: [],
          rows: [],
        },
      },
      queryCount: 5,
    }

    mockGetAsyncJobResults.mockImplementation(request => {
      if (request.partMask === BUNDLE_MASK_QUERY_COUNT) {
        return Promise.resolve(
          createAsynchronousJobStatus('COMPLETE', request, {
            ...expected,
            queryResults: undefined,
          }),
        )
      } else if (request.partMask === BUNDLE_MASK_QUERY_RESULTS) {
        return Promise.resolve(
          createAsynchronousJobStatus('COMPLETE', request, {
            ...expected,
            queryCount: undefined,
          }),
        )
      } else {
        throw new Error('Unexpected request recieved by mock')
      }
    })
  })
  it('correctly calls SynapseClient', async () => {
    jest
      .spyOn(SynapseClient, 'getQueryTableResults')
      .mockResolvedValue(expected)

    const { result } = renderHook(() => useGetQueryResultBundle(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(SynapseClient.getQueryTableResults).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })

  describe('useGetQueryResultBundleWithAsyncStatus', () => {
    it('Splits requests into rows and statistics', async () => {
      const { result } = renderHook(
        () =>
          useGetQueryResultBundleWithAsyncStatus(
            request,
            undefined,
            mockUpdateStatus,
          ),
        { wrapper: createWrapper() },
      )
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true)
      })

      // Verify that two separate requests to synapse are made
      // Request for results
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          // For table results, all of the query parameters should be passed
          query: request.query,

          partMask: BUNDLE_MASK_QUERY_RESULTS,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      // Request for statistics
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          // For table statistics, we remove request parameters which do not affect the results
          query: expect.objectContaining<Query>({
            ...request.query,
            sort: undefined,
            limit: undefined,
            offset: undefined,
          }) as Query,
          partMask: BUNDLE_MASK_QUERY_COUNT,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      expect(result.current.data).toEqual(
        expect.objectContaining({
          responseBody: expected,
        }),
      )
    })

    it('Handles the case where only rows are fetched', async () => {
      request.partMask = BUNDLE_MASK_QUERY_RESULTS
      delete expected.queryCount

      const { result } = renderHook(
        () =>
          useGetQueryResultBundleWithAsyncStatus(
            request,
            undefined,
            mockUpdateStatus,
          ),
        { wrapper: createWrapper() },
      )
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true)
      })

      // Request for results
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          partMask: BUNDLE_MASK_QUERY_RESULTS,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      // Request for statistics should not have been made
      expect(
        SynapseClient.getQueryTableAsyncJobResults,
      ).not.toHaveBeenCalledWith(
        expect.objectContaining({
          partMask: BUNDLE_MASK_QUERY_COUNT,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      expect(result.current.data).toEqual(
        expect.objectContaining({
          responseBody: expected,
        }),
      )
    })
    it('Handles the case where only statistics are fetched', async () => {
      request.partMask = BUNDLE_MASK_QUERY_COUNT
      delete expected.queryResult

      const { result } = renderHook(
        () =>
          useGetQueryResultBundleWithAsyncStatus(
            request,
            undefined,
            mockUpdateStatus,
          ),
        { wrapper: createWrapper() },
      )
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true)
      })

      // Request for statistics
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          partMask: BUNDLE_MASK_QUERY_COUNT,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      // Request for results should not have been made
      expect(
        SynapseClient.getQueryTableAsyncJobResults,
      ).not.toHaveBeenCalledWith(
        expect.objectContaining({
          partMask: BUNDLE_MASK_QUERY_RESULTS,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      expect(result.current.data).toEqual(
        expect.objectContaining({
          responseBody: expected,
        }),
      )
    })
    it('Does not return data until both queries resolve', async () => {
      let resolvePromise: () => void = () => {
        throw Error('resolvePromise was not reassigned before being called')
      }
      mockGetAsyncJobResults.mockImplementation(request => {
        if (request.partMask === BUNDLE_MASK_QUERY_COUNT) {
          return new Promise(resolve => {
            resolvePromise = () => {
              resolve(
                createAsynchronousJobStatus('COMPLETE', request, {
                  ...expected,
                  queryResults: undefined,
                }),
              )
            }
          })
        } else if (request.partMask === BUNDLE_MASK_QUERY_RESULTS) {
          return Promise.resolve(
            createAsynchronousJobStatus('COMPLETE', request, {
              ...expected,
              queryCount: undefined,
            }),
          )
        } else {
          throw new Error('Unexpected request recieved by mock')
        }
      })

      const { result } = renderHook(
        () =>
          useGetQueryResultBundleWithAsyncStatus(
            request,
            undefined,
            mockUpdateStatus,
          ),
        { wrapper: createWrapper() },
      )
      await waitFor(() => {
        expect(result.current.isLoading).toBe(true)
      })

      // Verify that two separate requests to synapse are made
      // Request for results
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          // For table results, all of the query parameters should be passed
          query: request.query,

          partMask: BUNDLE_MASK_QUERY_RESULTS,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      // Request for statistics
      expect(SynapseClient.getQueryTableAsyncJobResults).toHaveBeenCalledWith(
        expect.objectContaining({
          // For table statistics, we remove request parameters which do not affect the results
          query: expect.objectContaining<Query>({
            ...request.query,
            sort: undefined,
            limit: undefined,
            offset: undefined,
          }) as Query,
          partMask: BUNDLE_MASK_QUERY_COUNT,
        }),
        MOCK_CONTEXT_VALUE.accessToken,
        mockUpdateStatus,
      )
      // Since one request is still in progress, the data should not be available
      expect(result.current.data).not.toBeDefined()

      // The job completes, so the data should be available
      resolvePromise()
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true)
      })
      expect(result.current.data).toBeDefined()
    })
    it('Fails if one query fails', async () => {
      jest.spyOn(console, 'error').mockImplementation(() => {})

      mockGetAsyncJobResults.mockImplementation(request => {
        if (request.partMask === BUNDLE_MASK_QUERY_COUNT) {
          return Promise.reject(new SynapseClientError(400, 'Bad request', ''))
        } else if (request.partMask === BUNDLE_MASK_QUERY_RESULTS) {
          return Promise.resolve(
            createAsynchronousJobStatus('COMPLETE', request, {
              ...expected,
              queryCount: undefined,
            }),
          )
        } else {
          throw new Error('Unexpected request recieved by mock')
        }
      })

      const { result } = renderHook(
        () =>
          useGetQueryResultBundleWithAsyncStatus(
            request,
            undefined,
            mockUpdateStatus,
          ),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.isError).toBe(true)
      })
      // The job fails, so the result should be in error
      expect(result.current.data).not.toBeDefined()
      expect(result.current.error).toBeInstanceOf(SynapseClientError)
    })
  })
})
