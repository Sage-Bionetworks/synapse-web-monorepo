/*
 * Hook for registering a new JSON Schema version with the schema registry.
 */
import { useSynapseContext } from '@/utils'
import {
  CreateSchemaResponse,
  JsonSchema,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

/**
 * Register a new JSON Schema version.
 * @see POST /repo/v1/asynchronous/job
 */
export function useCreateJsonSchema(
  options?: Omit<
    UseMutationOptions<CreateSchemaResponse, SynapseClientError, JsonSchema>,
    'mutationFn'
  >,
) {
  const { synapseClient } = useSynapseContext()

  return useMutation<CreateSchemaResponse, SynapseClientError, JsonSchema>({
    ...options,
    mutationFn: async schema => {
      const jobStatus =
        await synapseClient.asynchronousJobServicesClient.postRepoV1AsynchronousJob(
          {
            asynchronousRequestBody: {
              concreteType:
                'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
              schema,
            },
          },
        )
      const jobResult = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          { jobId: jobStatus.jobId! },
        ),
      )
      return jobResult.responseBody as CreateSchemaResponse
    },
  })
}
