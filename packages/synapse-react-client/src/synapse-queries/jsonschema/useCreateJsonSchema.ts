/*
 * Hook for registering a new JSON Schema version with the schema registry.
 */
import { doPost } from '@/synapse-client/HttpClient'
import { ASYNCHRONOUS_JOB } from '@/utils/APIConstants'
import { BackendDestinationEnum } from '@/utils/functions/getEndpoint'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { JSONSchema7 } from 'json-schema'
import {
  AsynchronousJobStatus,
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
      // The generated client serializes `schema` through its `JsonSchema` model, which drops any
      // keyword the model does not list and rewrites boolean subschemas and tuple `items`.
      const jobStatus = await doPost<AsynchronousJobStatus>(
        ASYNCHRONOUS_JOB,
        {
          concreteType:
            'org.sagebionetworks.repo.model.schema.CreateSchemaRequest',
          schema,
        },
        accessToken,
        BackendDestinationEnum.REPO_ENDPOINT,
      )
      // Polled with the generated client because the job status endpoint returns 200 even when the
      // job failed, and `waitForAsyncResult` is what turns a FAILED status into an error.
      const jobResult = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          { jobId: jobStatus.jobId! },
        ),
      )
      return jobResult.responseBody as CreateSchemaResponse
    },
  })
}
