import { ASYNCHRONOUS_JOB, ASYNCHRONOUS_JOB_TOKEN } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AsynchronousRequestBody,
  ErrorResponse,
} from '@sage-bionetworks/synapse-client'
import {
  AsynchJobState,
  AsynchronousJobStatus,
  AsyncJobId,
} from '@sage-bionetworks/synapse-types'
import { DefaultBodyType, http, HttpHandler, HttpResponse } from 'msw'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

type AsyncJobDetails = {
  id: string
  request: AsynchronousRequestBody
  response: DefaultBodyType | ErrorResponse
}

const mockAsynchronousJobService = new BasicMockedCrudService<
  AsyncJobDetails,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
})

/**
 * Maps a job request's `concreteType` to a function producing that job's response body.
 */
export type AsynchronousJobDispatch = Record<
  string,
  (request: AsynchronousRequestBody) => DefaultBodyType | ErrorResponse
>

/**
 * Build a single-entry `AsynchronousJobDispatch` for one `concreteType`, narrowing `handler`'s
 * request parameter to that type's variant of `AsynchronousRequestBody` so callers never have to
 * re-cast the generic request themselves.
 */
export function dispatchEntry<
  T extends AsynchronousRequestBody['concreteType'],
>(
  concreteType: T,
  handler: (
    request: Extract<AsynchronousRequestBody, { concreteType: T }>,
  ) => DefaultBodyType | ErrorResponse,
): AsynchronousJobDispatch {
  return {
    [concreteType]: request =>
      handler(request as Extract<AsynchronousRequestBody, { concreteType: T }>),
  }
}

/**
 * A dedicated async service-specific start/get path pair.
 */
type AsyncTypeServicePaths = {
  requestPath: string
  responsePath: (tokenParam: string) => string
}

/**
 * Generates MSW handlers for asynchronous jobs, dispatching by request `concreteType`.
 *
 * By default, registers the generic endpoint pair used by every job type dispatched through
 * `postRepoV1AsynchronousJob`/`getRepoV1AsynchronousJobJobId`
 * (`POST /repo/v1/asynchronous/job` + `GET /repo/v1/asynchronous/job/{jobId}`). Callers that need
 * to support more than one `concreteType` in the same test/story MUST merge their entries into a
 * single `dispatch` map and call this once.
 *
 * @param dispatch maps each supported request `concreteType` to a function producing that job's response body
 * @param options.asyncTypeServicePaths registers a dedicated start/get path pair instead of the generic endpoint; see {@link AsyncTypeServicePaths}
 * @param options.backendOrigin the backend origin to use for the handlers
 * @param options.serviceSpecificEndpointResponseStatus the status code for the dedicated response path (`asyncTypeServicePaths` only); also determines whether both GET endpoints report `COMPLETE` or `FAILED`
 */
export function generateAsyncJobHandlers(
  dispatch: AsynchronousJobDispatch,
  options: {
    asyncTypeServicePaths?: AsyncTypeServicePaths
    backendOrigin?: string
    serviceSpecificEndpointResponseStatus?: number
  } = {},
): HttpHandler[] {
  const {
    asyncTypeServicePaths,
    backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
    serviceSpecificEndpointResponseStatus = 201,
  } = options

  if (asyncTypeServicePaths && Object.keys(dispatch).length !== 1) {
    throw new Error(
      'generateAsyncJobHandlers: asyncTypeServicePaths requires exactly one dispatch entry, since the dedicated path already disambiguates the job type.',
    )
  }

  const jobState: AsynchJobState =
    serviceSpecificEndpointResponseStatus < 400 ? 'COMPLETE' : 'FAILED'

  function resolveResponse(
    body: AsynchronousRequestBody,
  ): DefaultBodyType | ErrorResponse {
    const handler = dispatch[body.concreteType]
    if (!handler) {
      throw new Error(
        `generateAsyncJobHandlers: unsupported concreteType "${body.concreteType}"`,
      )
    }
    return handler(body)
  }

  const requestPath = asyncTypeServicePaths?.requestPath ?? ASYNCHRONOUS_JOB

  const handlers: HttpHandler[] = [
    // Handler for the asynchronous job request endpoint.
    http.post(`${backendOrigin}${requestPath}`, async ({ request }) => {
      const body = (await request.json()) as AsynchronousRequestBody
      const createdJob = mockAsynchronousJobService.create({
        request: body,
        response: resolveResponse(body),
      })

      // The generic endpoint's response is a full AsynchronousJobStatus (read via `.jobId`).
      // The per-service endpoints respond with an AsyncJobId (read via `.token`).
      const responseBody:
        | AsyncJobId
        | Partial<
            AsynchronousJobStatus<AsynchronousRequestBody, DefaultBodyType>
          > = asyncTypeServicePaths
        ? { token: createdJob.id }
        : { jobId: createdJob.id, jobState: 'PROCESSING' }

      return HttpResponse.json(responseBody, { status: 201 })
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
        const { request, response } = asyncJobDetails

        return HttpResponse.json<
          AsynchronousJobStatus<AsynchronousRequestBody, DefaultBodyType>
        >(
          {
            jobState,
            jobCanceling: false,
            requestBody: request,
            etag: '00000000-0000-0000-0000-000000000000',
            jobId: id,
            responseBody: response as DefaultBodyType,
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
  ]

  if (asyncTypeServicePaths) {
    // Dedicated service-specific response endpoint, polled directly by type-specific services instead of
    // the generic async job response handler above.
    handlers.push(
      http.get<{ asyncJobToken: string }>(
        `${backendOrigin}${asyncTypeServicePaths.responsePath(':asyncJobToken')}`,
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

          return HttpResponse.json(asyncJobDetails.response, {
            status: serviceSpecificEndpointResponseStatus,
          })
        },
      ),
    )
  }

  return handlers
}
