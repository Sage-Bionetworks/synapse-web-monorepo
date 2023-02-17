import { SynapseClient } from '../../../src/lib/utils'
import { ASYNCHRONOUS_JOB_TOKEN } from '../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import { FunctionReturningPaginatedResults } from '../../../src/lib/utils/SynapseClient'
import { SynapseClientError } from '../../../src/lib/utils/SynapseClientError'
import { NETWORK_UNAVAILABLE_MESSAGE } from '../../../src/lib/utils/SynapseConstants'
import {
  AsynchronousJobStatus,
  PaginatedResults,
} from '../../../src/lib/utils/synapseTypes'
import { rest, server } from '../../../mocks/msw/server'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '../../../src/lib/utils/synapseTypes/ErrorResponse'

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

      const processingJob: Partial<AsynchronousJobStatus<any, any>> = {
        jobState: 'PROCESSING',
        responseBody: resultObject,
      }
      const completeJob: Partial<AsynchronousJobStatus<any, any>> = {
        jobState: 'COMPLETE',
        responseBody: resultObject,
      }
      const failedJob: Partial<AsynchronousJobStatus<any, any>> = {
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

            (req, res, ctx) => {
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

        expect(requestCaptor).toHaveBeenCalledTimes(1)
        expect(requestCaptor).toHaveBeenCalledWith(
          expect.objectContaining({
            params: {
              jobId: asyncJobId,
            },
          }),
        )

        expect(setCurrentAsyncStatus).toHaveBeenCalledTimes(1)
        expect(setCurrentAsyncStatus).toHaveBeenCalledWith(response)
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

        expect(requestCaptor).toHaveBeenCalledTimes(3)
        expect(requestCaptor).toHaveBeenCalledWith(
          expect.objectContaining({
            params: {
              jobId: asyncJobId,
            },
          }),
        )

        expect(setCurrentAsyncStatus).toHaveBeenCalledTimes(3)
        expect(setCurrentAsyncStatus).toHaveBeenCalledWith(processingJob)
        expect(setCurrentAsyncStatus).toHaveBeenCalledWith(completeJob)
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
        expect(setCurrentAsyncStatus).toHaveBeenCalledTimes(1)
        expect(setCurrentAsyncStatus).toHaveBeenCalledWith(failedJob)
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
          .mockRejectedValue(
            new SynapseClientError(
              404,
              'Not found!',
              expect.getState().currentTestName!,
            ),
          )

        const actual = await SynapseClient.allowNotFoundError(fn)

        expect(expected).toEqual(actual)
      })
      it('Passes along a non-404 error response', async () => {
        const expected = new SynapseClientError(
          400,
          'Bad request!',
          expect.getState().currentTestName!,
        )
        const fn = jest.fn().mockRejectedValue(expected)

        await expect(() =>
          SynapseClient.allowNotFoundError(fn),
        ).rejects.toEqual(expected)
      })
    })
    describe('returnIfTwoFactorAuthError', () => {
      it('Passes along a successful response', async () => {
        const expected = {
          arbitrary: 'data',
        }
        const fn = jest.fn().mockResolvedValue(expected)

        const actual = await SynapseClient.returnIfTwoFactorAuthError(fn)

        expect(expected).toEqual(actual)
      })
      it('Rethrows a non-2fa error', async () => {
        const notFoundError = new SynapseClientError(
          404,
          'Not found!',
          expect.getState().currentTestName!,
        )
        const fn = jest.fn().mockRejectedValue(notFoundError)

        await expect(
          SynapseClient.returnIfTwoFactorAuthError(fn),
        ).rejects.toEqual(notFoundError)
      })
      it('Passes along a two factor authentication error response', async () => {
        const twoFactorAuthError: TwoFactorAuthErrorResponse = {
          reason: 'Need 2fa',
          errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
          userId: 12345,
          twoFaToken: 'abc123',
          concreteType:
            'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
        }
        const expected = new SynapseClientError(
          401,
          'Need 2fa',
          expect.getState().currentTestName!,
          twoFactorAuthError,
        )
        const fn = jest.fn().mockRejectedValue(expected)

        const actual = await SynapseClient.returnIfTwoFactorAuthError(fn)
        expect(actual).toBe(twoFactorAuthError)
      })
    })
    describe('fetch tests', () => {
      it('fetch error results in a nice network unavailable message', async () => {
        const expected = new SynapseClientError(
          0,
          NETWORK_UNAVAILABLE_MESSAGE,
          expect.getState().currentTestName!,
        )
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
