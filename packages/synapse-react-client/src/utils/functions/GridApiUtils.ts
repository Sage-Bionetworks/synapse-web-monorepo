import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'
import {
  waitForAsyncResult,
  CreateGridRequest,
} from '@sage-bionetworks/synapse-client'

export default async function startGridSession(
  synapseClient: SynapseClient,
  request: CreateGridRequest = {
    concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
  },
) {
  const asyncJobId =
    await synapseClient.gridServicesClient.postRepoV1GridSessionAsyncStart({
      createGridRequest: request,
    })
  return waitForAsyncResult(() =>
    synapseClient.gridServicesClient.getRepoV1GridSessionAsyncGetAsyncToken({
      asyncToken: asyncJobId.token!,
    }),
  )
}
