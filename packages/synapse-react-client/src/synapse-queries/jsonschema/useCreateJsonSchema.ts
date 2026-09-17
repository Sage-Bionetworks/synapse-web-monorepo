/*
 * Hook for registering a new JSON Schema version with the schema registry.
 */
import { useSynapseContext } from '@/utils'
import {
  CreateSchemaRequestConcreteTypeEnum,
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
      // Run through the generic asynchronous job service and poll until the job completes
      const jobStatus =
        await synapseClient.asynchronousJobServicesClient.postRepoV1AsynchronousJob(
          {
            asynchronousRequestBody: {
              concreteType:
                CreateSchemaRequestConcreteTypeEnum.org_sagebionetworks_repo_model_schema_CreateSchemaRequest,
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
