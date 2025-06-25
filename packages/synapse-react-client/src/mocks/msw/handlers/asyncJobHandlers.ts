import { ASYNCHRONOUS_JOB_TOKEN } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { ErrorResponse } from '@sage-bionetworks/synapse-client'
import {
  AsynchJobState,
  AsynchronousJobStatus,
  AsyncJobId,
} from '@sage-bionetworks/synapse-types'
import { DefaultBodyType, http, HttpResponse } from 'msw'
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
  TResponseBody extends DefaultBodyType | ErrorResponse =
    | DefaultBodyType
    | ErrorResponse,
>(
  requestPath: string,
  responsePath: (tokenParam: string) => string,
  responseBody: TResponseBody | ((requestBody: TRequestBody) => TResponseBody),
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  serviceSpecificEndpointResponseStatus = 201,
) {
  return [
    // Handler for the asynchronous job request endpoint.
    http.post(`${backendOrigin}${requestPath}`, async ({ request }) => {
      const createdJob = mockAsynchronousJobService.create({
        request: await request.json(),
        response: responseBody,
      })

      const asyncJobResponse: AsyncJobId = {
        token: createdJob.id,
      }

      return HttpResponse.json(asyncJobResponse, { status: 201 })
    }),

    // Generic async job response handler. Since this implementation is the same for all services and references the global map, it's fine if this is overridden.
    http.get(
      `${backendOrigin}${ASYNCHRONOUS_JOB_TOKEN(':id')}`,
      ({ params }) => {
        const id = params.id as string
        const asyncJobDetails = mockAsynchronousJobService.getOneById(id)
        if (!id || !asyncJobDetails) {
          return HttpResponse.json(
            { message: 'The mocked asynchronous job was not found' },
            { status: 404 },
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

        return HttpResponse.json<
          AsynchronousJobStatus<TRequestBody, TResponseBody>
        >(
          {
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
          },
          {
            // This endpoint returns a successful status code regardless of the job status
            status: 200,
          },
        )
      },
    ),

    // Service-specific response endpoint
    http.get<{ asyncJobToken: string }, TResponseBody>(
      `${backendOrigin}${responsePath(':asyncJobToken')}`,
      ({ params }) => {
        const asyncJobToken = params.asyncJobToken
        const asyncJobDetails =
          mockAsynchronousJobService.getOneById(asyncJobToken)
        if (!asyncJobToken || !asyncJobDetails) {
          return HttpResponse.json(
            { message: 'The mocked asynchronous job was not found' },
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
      },
    ),
  ]
}
