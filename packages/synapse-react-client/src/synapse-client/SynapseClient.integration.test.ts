import { rest, server } from '@/mocks/msw/server'
import { ASYNCHRONOUS_JOB_TOKEN } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { AsynchronousJobStatus } from '@sage-bionetworks/synapse-types'
import SynapseClient from './index'

describe('SynapseClient integration tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('getAsyncResultFromJobId tests', () => {
    const asyncJobId = 'async-123'
    const responseBodyServerEndpoint = `/repo/v1/entity/123/table/query/async/get/:jobId`
    const responseBodyRequestEndpoint = `/repo/v1/entity/123/table/query/async/get/${asyncJobId}`
    const accessToken = `synapseAccessToken`
    const setCurrentAsyncStatus = vi.fn()

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

    const requestCaptor = vi.fn()

    beforeEach(() => {
      vi.clearAllMocks()
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
