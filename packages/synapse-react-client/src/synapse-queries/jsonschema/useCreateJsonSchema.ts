/*
 * Hook for registering a new JSON Schema version with the schema registry.
 */
import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { JSONSchema7 } from 'json-schema'
import {
  CreateSchemaResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'

/**
 * Register a new JSON Schema version. The schema is sent exactly as given, since it may have been
 * authored in the raw JSON editor.
 * @see POST /repo/v1/asynchronous/job
 */
export function useCreateJsonSchema(
  options?: Omit<
    UseMutationOptions<CreateSchemaResponse, SynapseClientError, JSONSchema7>,
    'mutationFn'
  >,
) {
  const { synapseClient, accessToken } = useSynapseContext()

  return useMutation<CreateSchemaResponse, SynapseClientError, JSONSchema7>({
    ...options,
    mutationFn: async schema => {
      const jobStatus = await SynapseClient.startCreateSchemaJob(
        schema,
        accessToken,
      )
      // Polled with the generated client because the job status endpoint returns 200 even when the
      // job failed, and `waitForAsyncResult` is what turns a FAILED status into an error.
      const jobResult = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          { jobId: jobStatus.jobId },
        ),
      )
      return jobResult.responseBody as CreateSchemaResponse
    },
  })
}
