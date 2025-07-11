import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import {
  waitForAsyncResult,
  CreateGridRequest,
  CreateGridResponse,
} from '@sage-bionetworks/synapse-client'

export default async function startGridSession(
  synapseClient: SynapseClient,
  request: CreateGridRequest,
) {
  const asyncJobId =
    await synapseClient.gridServicesClient.postRepoV1GridSessionAsyncStart({
      createGridRequest: request,
    })
  if (!asyncJobId.token) {
    throw new Error('No async job token returned from startGridSession')
  }
  // getRepoV1GridSessionAsyncStart does not return 202 processing jobs as expected
  // so use the getAsynchronousJobJobId endpoint instead
  const asyncJobResponse = await waitForAsyncResult(() =>
    synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId({
      jobId: asyncJobId.token!,
    }),
  )
  return asyncJobResponse.responseBody as CreateGridResponse
}
