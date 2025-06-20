import { AsynchronousResponseBody } from '../generated/models/AsynchronousResponseBody'
import { AsynchronousJobStatus } from '../generated/models/AsynchronousJobStatus'
import { delay } from './fetchWithExponentialTimeout'
import { SynapseClientError } from './SynapseClientError'

/**
 * Waits for an asynchronous job to complete. This function will poll the server (based on the implementation of
 * getAsyncResult) until the job is no longer in the PROCESSING state.
 * @param getAsyncResult - A function that returns a promise that resolves to the current status of the job, or the job
 * result. This function should be implemented to call the server using the service-specific API (i.e. this function
 * should <strong>not</strong> call GET /asynchronous/job/{jobId}).
 * @param options
 * @throws SynapseClientError if the job fails
 */
export async function waitForAsyncResult<
  T extends AsynchronousResponseBody | AsynchronousJobStatus,
>(
  getAsyncResult: () => Promise<T>,
  options?: { onCurrentStatusRetrieved: (response: T) => void },
): Promise<T> {
  let currentDelayMs = 125 // 125ms
  const maxDelayMs = 1000 // 1s

  let response = await getAsyncResult()
  while ('jobState' in response && response.jobState === 'PROCESSING') {
    await delay(currentDelayMs)
    response = await getAsyncResult()
    if (options?.onCurrentStatusRetrieved) {
      options.onCurrentStatusRetrieved(response)
    }
    // Exponential backoff for the next request
    currentDelayMs = Math.min(currentDelayMs * 2, maxDelayMs)
  }
  if ('jobState' in response && response.jobState === 'FAILED') {
    console.error(
      'Asynchronous job failed:',
      response.errorMessage,
      '\nDetails:\n',
      response.errorDetails,
    )
    // TODO: Get the correct HTTP status code for the error.
    //  GET /asynchronous/job/{jobId} does not provide the error (it always returns 200 to get the status).
    throw new SynapseClientError(
      400,
      response.errorMessage!,
      `waitForAsyncResult - ${response.requestBody?.concreteType}`,
    )
  }
  return response
}
