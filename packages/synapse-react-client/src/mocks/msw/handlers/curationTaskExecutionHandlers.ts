import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  AsynchronousJobStatus,
  ComputeTaskExecutionResponse,
  ComputeTaskExecutionResponseConcreteTypeEnum,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'

const EXECUTE_ASYNC_TOKEN = 'mock-execute-async-token'

/**
 * Handlers for executing a curation task. The start endpoint takes no request body (only a taskId
 * path param), so the generic {@link generateAsyncJobHandlers} generator cannot be used.
 *
 * @param taskId the taskId the execution response should report
 * @param jobState the terminal state the polled job should report. Use 'FAILED' to exercise the
 *   error path.
 * @param errorMessage the error message returned when jobState is 'FAILED'
 */
export function getExecuteCurationTaskHandlers({
  taskId = 123,
  jobState = 'COMPLETE',
  errorMessage = 'Execution failed',
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
}: {
  taskId?: number
  jobState?: 'COMPLETE' | 'FAILED'
  errorMessage?: string
  backendOrigin?: string
} = {}) {
  const response: ComputeTaskExecutionResponse = {
    concreteType:
      ComputeTaskExecutionResponseConcreteTypeEnum.org_sagebionetworks_repo_model_curation_ComputeTaskExecutionResponse,
    taskId,
  }

  return [
    http.post(
      `${backendOrigin}/repo/v1/curation/task/:taskId/execute/async/start`,
      () => HttpResponse.json({ token: EXECUTE_ASYNC_TOKEN }, { status: 201 }),
    ),
    http.get(
      `${backendOrigin}/repo/v1/asynchronous/job/:jobId`,
      ({ params }) => {
        const jobStatus: AsynchronousJobStatus = {
          jobState,
          jobId: params.jobId as string,
          responseBody: jobState === 'COMPLETE' ? response : undefined,
          errorMessage: jobState === 'FAILED' ? errorMessage : undefined,
        }
        return HttpResponse.json(jobStatus, { status: 200 })
      },
    ),
  ]
}
