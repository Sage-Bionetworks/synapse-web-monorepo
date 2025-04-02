import { ASYNCHRONOUS_JOB_TOKEN } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { SynapseError } from '@/utils/SynapseError'
import {
  AsynchJobState,
  AsynchronousJobStatus,
  AsyncJobId,
} from '@sage-bionetworks/synapse-types'
import { DefaultBodyType, rest } from 'msw'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

type AsyncJobDetails<TRequestBody, TResponseBody> = {
  id: string
  request: TRequestBody
  response: TResponseBody
}

const mockAsynchronousJobService = new BasicMockedCrudService<
  AsyncJobDetails<unknown, unknown>,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
})

/**
 * Generates MSW handlers for asynchronous jobs.
 * @param requestPath the path to the service-specific asynchronous job request endpoint.
 *   For example, `'/repo/v1/entity/:id/table/query/async/start'`
 * @param responsePath a function that takes the token parameter ID and returns a path to the service-specific asynchronous job response endpoint.
 *   For example, `param => /repo/v1/entity/:id/table/query/async/get/${param}`
 *   The generic asynchronous job retrieval handler will be generated automatically.
 * @param responseBody the response body, or a function that takes the request body and returns the response body
 * @param backendOrigin the backend origin to use for the handlers.
 * @param serviceSpecificEndpointResponseStatus the status code to use for the service-specific endpoint. The asynchronous job endpoint will always return 200.
 */
export function generateAsyncJobHandlers<
  TRequestBody = unknown,
  TResponseBody extends DefaultBodyType | SynapseError =
    | DefaultBodyType
    | SynapseError,
>(
  requestPath: string,
  responsePath: (tokenParam: string) => string,
  responseBody: TResponseBody | ((requestBody: TRequestBody) => TResponseBody),
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  serviceSpecificEndpointResponseStatus = 201,
) {
  return [
    // Handler for the asynchronous job request endpoint.
    rest.post(`${backendOrigin}${requestPath}`, async (req, res, ctx) => {
      const createdJob = mockAsynchronousJobService.create({
        request: await req.json(),
        response: responseBody,
      })

      return res(
        ctx.status(201),
        ctx.json<AsyncJobId>({
          token: createdJob.id,
        }),
      )
    }),

    // Generic async job response handler. Since this implementation is the same for all services and references the global map, it's fine if this is overridden.
    rest.get(
      `${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(':id')}`,
      async (req, res, ctx) => {
        const id = req.params.id as string
        const asyncJobDetails = mockAsynchronousJobService.getOneById(id)
        if (!id || !asyncJobDetails) {
          return res(
            ctx.status(404),
            ctx.json({ message: 'The mocked asynchronous job was not found' }),
          )
        }
        const { request, response } = asyncJobDetails as {
          request: TRequestBody
          response: TResponseBody
        }
        const responseObject: TResponseBody =
          typeof response === 'function' ? response(request) : response

        const jobState: AsynchJobState =
          serviceSpecificEndpointResponseStatus < 400 ? 'COMPLETE' : 'FAILED'

        return res(
          // This endpoint returns a successful status code regardless of the job status
          ctx.status(200),
          ctx.json<AsynchronousJobStatus<TRequestBody, TResponseBody>>({
            jobState,
            jobCanceling: false,
            requestBody: request,
            etag: '00000000-0000-0000-0000-000000000000',
            jobId: id,
            responseBody: responseObject,
            startedByUserId: 0,
            startedOn: '',
            changedOn: '',
            progressMessage: '',
            progressCurrent: 100,
            progressTotal: 100,
            exception: '',
            errorMessage: '',
            errorDetails: '',
            runtimeMS: 100,
          }),
        )
      },
    ),

    // Service-specific response endpoint
    rest.get<TResponseBody>(
      `${backendOrigin}${responsePath(':asyncJobToken')}`,
      async (req, res, ctx) => {
        const asyncJobToken = req.params.asyncJobToken as string
        const asyncJobDetails =
          mockAsynchronousJobService.getOneById(asyncJobToken)
        if (!asyncJobToken || !asyncJobDetails) {
          return res(
            ctx.status(404),
            ctx.json({ message: 'The mocked asynchronous job was not found' }),
          )
        }

        const { request, response } = asyncJobDetails as {
          request: TRequestBody
          response: TResponseBody
        }
        const responseObject: TResponseBody =
          typeof response === 'function' ? response(request) : response

        return res(
          ctx.status(serviceSpecificEndpointResponseStatus),
          ctx.json(responseObject),
        )
      },
    ),
  ]
}
