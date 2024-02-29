import { DefaultBodyType, http, HttpResponse } from 'msw'
import { BackendDestinationEnum, getEndpoint } from '../../../utils/functions'
import { uniqueId } from 'lodash-es'
import {
  AsynchJobState,
  AsynchronousJobStatus,
  AsyncJobId,
} from '@sage-bionetworks/synapse-types'
import { ASYNCHRONOUS_JOB_TOKEN } from '../../../utils/APIConstants'
import { SynapseError } from '../../../utils/SynapseError'
import { SynapseApiResponse } from '../handlers'

/**
 * Global mapping between async job token and request/response. This sort of acts as an in-memory database for asynchronous jobs.
 */
const mapOfAsyncJobs = new Map<
  string,
  {
    request: unknown
    response: unknown
  }
>()

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
    http.post<never, never, SynapseApiResponse<AsyncJobId>>(
      `${backendOrigin}${requestPath}`,
      async ({ request }) => {
        const asyncJobId = uniqueId()
        mapOfAsyncJobs.set(asyncJobId, {
          request: await request.json(),
          response: responseBody,
        })
        return HttpResponse.json({ token: asyncJobId }, { status: 201 })
      },
    ),

    // Generic async job response handler. Since this implementation is the same for all services and references the global map, it's fine if this is overridden.
    http.get<
      { id: string },
      never,
      SynapseApiResponse<AsynchronousJobStatus<TRequestBody, TResponseBody>>
    >(`${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(':id')}`, ({ params }) => {
      const id = params.id
      const asyncJobDetails = mapOfAsyncJobs.get(id)
      if (!id || !asyncJobDetails) {
        const response: SynapseApiResponse<
          AsynchronousJobStatus<TRequestBody, TResponseBody>
        > = { reason: 'The mocked asynchronous job was not found' }
        return HttpResponse.json(response, { status: 404 })
      }
      const { request, response } = asyncJobDetails as {
        request: TRequestBody
        response: TResponseBody
      }
      const jobResult: TResponseBody =
        typeof response === 'function' ? response(request) : response

      const jobState: AsynchJobState =
        serviceSpecificEndpointResponseStatus < 400 ? 'COMPLETE' : 'FAILED'

      const jobStatusResponseBody: AsynchronousJobStatus<
        TRequestBody,
        TResponseBody
      > = {
        jobState,
        jobCanceling: false,
        requestBody: request,
        etag: '00000000-0000-0000-0000-000000000000',
        jobId: id,
        responseBody: jobResult,
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
      }

      return HttpResponse.json(jobStatusResponseBody, {
        // This endpoint returns a successful status code regardless of the job status
        status: 200,
      })
    }),

    // Service-specific response endpoint
    http.get<
      { asyncJobToken: string },
      never,
      SynapseApiResponse<TResponseBody>
    >(`${backendOrigin}${responsePath(':asyncJobToken')}`, ({ params }) => {
      const asyncJobToken = params.asyncJobToken
      const asyncJobDetails = mapOfAsyncJobs.get(asyncJobToken)
      if (!asyncJobToken || !asyncJobDetails) {
        return HttpResponse.json(
          { reason: 'The mocked asynchronous job was not found' },
          { status: 404 },
        )
      }

      const { request, response } = asyncJobDetails as {
        request: TRequestBody
        response: TResponseBody
      }
      const responseObject: TResponseBody =
        typeof response === 'function' ? response(request) : response

      return HttpResponse.json(responseObject, {
        status: serviceSpecificEndpointResponseStatus,
      })
    }),
  ]
}
