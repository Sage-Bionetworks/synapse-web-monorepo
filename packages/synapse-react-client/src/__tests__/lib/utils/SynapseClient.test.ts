import { SynapseClient } from '../../../lib/utils'
import { ASYNCHRONOUS_JOB_TOKEN } from '../../../lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../lib/utils/functions/getEndpoint'
import { FunctionReturningPaginatedResults } from '../../../lib/utils/SynapseClient'
import { SynapseClientError } from '../../../lib/utils/SynapseClientError'
import { NETWORK_UNAVAILABLE_MESSAGE } from '../../../lib/utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  PaginatedResults,
} from '../../../lib/utils/synapseTypes'
import { rest, server } from '../../../mocks/msw/server'

describe('SynapseClient tests', () => {
  describe('SynapseClient integration tests', () => {
    beforeAll(() => server.listen())
    afterEach(() => server.restoreHandlers())
    afterAll(() => server.close())

    describe('getAsyncResultFromJobId tests', () => {
      const asyncJobId = 'async-123'
      const responseBodyServerEndpoint = `/repo/v1/entity/123/table/query/async/get/:jobId`
      const responseBodyRequestEndpoint = `/repo/v1/entity/123/table/query/async/get/${asyncJobId}`
      const accessToken = `synapseAccessToken`
      const setCurrentAsyncStatus = jest.fn()

      const resultObject = { arbitrary: 'data' }

      const processingJob: AsynchronousJobStatus<any, any> = {
        jobState: 'PROCESSING',
        responseBody: resultObject,
      }
      const completeJob: AsynchronousJobStatus<any, any> = {
        jobState: 'COMPLETE',
        responseBody: resultObject,
      }
      const failedJob: AsynchronousJobStatus<any, any> = {
        jobState: 'FAILED',
      }

      const requestCaptor = jest.fn()

      beforeEach(() => {
        jest.clearAllMocks()
      })

      it('Returns a complete response', async () => {
        // The first call returns a successful response.
        server.use(
          rest.get(
            `${getEndpoint(
              BackendDestinationEnum.REPO_ENDPOINT,
            )}${ASYNCHRONOUS_JOB_TOKEN(':jobId')}`,

            async (req, res, ctx) => {
              requestCaptor(req)
              const status = 200
              const response = completeJob
              return res(ctx.status(status), ctx.json(response))
            },
          ),
        )

        // Call under test
        const response = await SynapseClient.getAsyncResultFromJobId(
          asyncJobId,
          responseBodyRequestEndpoint,
          accessToken,
          setCurrentAsyncStatus,
        )

        expect(requestCaptor).toBeCalledTimes(1)
        expect(requestCaptor).toBeCalledWith(
          expect.objectContaining({
            params: {
              jobId: asyncJobId,
            },
          }),
        )

        expect(setCurrentAsyncStatus).toBeCalledTimes(1)
        expect(setCurrentAsyncStatus).toBeCalledWith(response)
      })

      it('Re-fetches a processing response until complete', async () => {
        // The first two calls return "PROCESSING" response, and the third call will return a "COMPLETE" response.
        server.use(
          rest.get(
            `${getEndpoint(
              BackendDestinationEnum.REPO_ENDPOINT,
            )}${ASYNCHRONOUS_JOB_TOKEN(':jobId')}`,
            // Use a generator to simulate returning a processing result twice followed by a complete result
            function* (req, res, ctx) {
              const status = 200
              let count = 0
              while (count < 2) {
                count++
                requestCaptor(req)
                yield res(ctx.status(status), ctx.json(processingJob))
              }
              requestCaptor(req)
              yield res(ctx.status(status), ctx.json(completeJob))
            },
          ),
        )

        // Call under test
        const response = await SynapseClient.getAsyncResultFromJobId(
          asyncJobId,
          responseBodyRequestEndpoint,
          accessToken,
          setCurrentAsyncStatus,
        )

        expect(response).toEqual(completeJob)

        expect(requestCaptor).toBeCalledTimes(3)
        expect(requestCaptor).toBeCalledWith(
          expect.objectContaining({
            params: {
              jobId: asyncJobId,
            },
          }),
        )

        expect(setCurrentAsyncStatus).toBeCalledTimes(3)
        expect(setCurrentAsyncStatus).toBeCalledWith(processingJob)
        expect(setCurrentAsyncStatus).toBeCalledWith(completeJob)
      })

      it('Fetches a failed response on alternate endpoint to get HTTP failure status code', async () => {
        const errorStatus = 400
        const errorObject = { reason: 'bad request' }

        server.use(
          rest.get(
            `${getEndpoint(
              BackendDestinationEnum.REPO_ENDPOINT,
            )}${ASYNCHRONOUS_JOB_TOKEN(':jobId')}`,
            function (req, res, ctx) {
              const status = 200
              return res(ctx.status(status), ctx.json(failedJob))
            },
          ),
          rest.get(
            `${getEndpoint(
              BackendDestinationEnum.REPO_ENDPOINT,
            )}${responseBodyServerEndpoint}`,
            function (req, res, ctx) {
              const status = errorStatus
              return res(ctx.status(status), ctx.json(errorObject))
            },
          ),
        )

        // Call under test
        await expect(
          SynapseClient.getAsyncResultFromJobId(
            asyncJobId,
            responseBodyRequestEndpoint,
            accessToken,
            setCurrentAsyncStatus,
          ),
        ).rejects.toEqual(
          expect.objectContaining({ status: errorStatus, ...errorObject }),
        )
        expect(setCurrentAsyncStatus).toBeCalledTimes(1)
        expect(setCurrentAsyncStatus).toBeCalledWith(failedJob)
      })
    })
  })

  describe('SynapseClient unit tests', () => {
    describe('allowNotFoundError', () => {
      it('Passes along a non-404 successful response', async () => {
        const expected = {
          arbitrary: 'data',
        }
        const fn = jest.fn().mockResolvedValue(expected)

        const actual = await SynapseClient.allowNotFoundError(fn)

        expect(expected).toEqual(actual)
      })
      it('Passes null on a 404 response', async () => {
        const expected = null
        const fn = jest
          .fn()
          .mockRejectedValue(new SynapseClientError(404, 'Not found!'))

        const actual = await SynapseClient.allowNotFoundError(fn)

        expect(expected).toEqual(actual)
      })
      it('Passes along a non-404 error response', async () => {
        const expected = new SynapseClientError(400, 'Bad request!')
        const fn = jest.fn().mockRejectedValue(expected)

        await expect(() =>
          SynapseClient.allowNotFoundError(fn),
        ).rejects.toEqual(expected)
      })
    })
    describe('fetch tests', () => {
      it('fetch error results in a nice network unavailable message', async () => {
        const expected = new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE)
        jest.spyOn(global, 'fetch').mockRejectedValue(new Error())
        await expect(() => SynapseClient.getVersion()).rejects.toEqual(expected)
      })
    })
    describe('getAllOfPaginatedService', () => {
      it('works with < 50 results', async () => {
        const results = ['a']
        const mockPaginatedObject: PaginatedResults<string> = {
          results,
        }
        const mockFn: FunctionReturningPaginatedResults<string> = jest
          .fn()
          .mockResolvedValueOnce(mockPaginatedObject)
        const data = await SynapseClient.getAllOfPaginatedService(mockFn)
        expect(data).toEqual(results)
        expect(mockFn).toHaveBeenCalledTimes(1)
        expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
      })

      it('works with exacty 50 results', async () => {
        const totalResults = Array(50).fill('a')
        const mockFirstReturn: PaginatedResults<string> = {
          results: totalResults,
        }
        const mockSecondReturn: PaginatedResults<string> = {
          results: [],
        }
        const mockFn: FunctionReturningPaginatedResults<string> = jest
          .fn()
          .mockResolvedValueOnce(mockFirstReturn)
          .mockResolvedValueOnce(mockSecondReturn)
        const data = await SynapseClient.getAllOfPaginatedService(mockFn)
        expect(data).toEqual(totalResults)
        expect(mockFn).toHaveBeenCalledTimes(2)
        expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
        expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
      })

      it('works with > 50 results', async () => {
        const totalResults = Array(75).fill('a')
        const firstResult = totalResults.slice(0, 50)
        const secondResult = totalResults.slice(50)
        const mockFirstReturn: PaginatedResults<string> = {
          results: firstResult,
        }
        const mockSecondReturn: PaginatedResults<string> = {
          results: secondResult,
        }
        const mockFn: FunctionReturningPaginatedResults<string> = jest
          .fn()
          .mockResolvedValueOnce(mockFirstReturn)
          .mockResolvedValueOnce(mockSecondReturn)
        const data = await SynapseClient.getAllOfPaginatedService(mockFn)
        expect(data).toEqual(totalResults)
        expect(mockFn).toHaveBeenCalledTimes(2)
        expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
        expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
      })
    })
  })
})
