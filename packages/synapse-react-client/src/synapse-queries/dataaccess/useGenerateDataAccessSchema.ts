/*
 * Hook for generating the per-step JSON Schema and UI Schema used to render a data access
 * request form, either for an existing AccessRequirement version or for an unsaved FormTemplate
 * draft (used to preview a template while authoring it).
 */
import { useSynapseContext } from '@/utils'
import {
  AccessRequirementReference,
  DataAccessRequestType,
  FormTemplate,
  GenerateDataAccessSchemaFromAccessRequirement,
  GenerateDataAccessSchemaFromAccessRequirementConcreteTypeEnum,
  GenerateDataAccessSchemaFromTemplateDraft,
  GenerateDataAccessSchemaFromTemplateDraftConcreteTypeEnum,
  GenerateDataAccessSchemaRequestInterface,
  GenerateDataAccessSchemaResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { skipToken, useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Builds the request body to generate a schema from an unsaved FormTemplate draft, for use while
 * previewing a template during authoring.
 */
export function createGenerateDataAccessSchemaFromTemplateDraftRequest(
  templateDraft: FormTemplate,
  requestType: DataAccessRequestType,
): GenerateDataAccessSchemaFromTemplateDraft {
  return {
    concreteType:
      GenerateDataAccessSchemaFromTemplateDraftConcreteTypeEnum.org_sagebionetworks_repo_model_dataaccess_schema_GenerateDataAccessSchemaFromTemplateDraft,
    requestType,
    templateDraft,
  }
}

/**
 * Builds the request body to generate a schema from the FormTemplate referenced by a specific
 * AccessRequirement version, for use rendering the form to a requester or reviewer.
 */
export function createGenerateDataAccessSchemaFromAccessRequirementRequest(
  accessRequirement: AccessRequirementReference,
  requestType: DataAccessRequestType,
): GenerateDataAccessSchemaFromAccessRequirement {
  return {
    concreteType:
      GenerateDataAccessSchemaFromAccessRequirementConcreteTypeEnum.org_sagebionetworks_repo_model_dataaccess_schema_GenerateDataAccessSchemaFromAccessRequirement,
    requestType,
    accessRequirement,
  }
}

/**
 * Generate the per-step JSON Schema and UI Schema for a data access request form. Runs the
 * request through the generic asynchronous job service and polls until the job completes.
 * Disabled while `request` is undefined, so callers can pass a debounced/derived value directly.
 * @see POST /repo/v1/asynchronous/job
 */
export function useGenerateDataAccessSchema(
  request: GenerateDataAccessSchemaRequestInterface | undefined,
  options?: Partial<
    UseQueryOptions<GenerateDataAccessSchemaResponse, SynapseClientError>
  >,
) {
  const { keyFactory, synapseClient } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.generateDataAccessSchemaQueryKey(request),
    queryFn: request
      ? async () => {
          const jobStatus =
            await synapseClient.asynchronousJobServicesClient.postRepoV1AsynchronousJob(
              { asynchronousRequestBody: request },
            )
          const jobResult = await waitForAsyncResult(() =>
            synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
              { jobId: jobStatus.jobId! },
            ),
          )
          return jobResult.responseBody as GenerateDataAccessSchemaResponse
        }
      : skipToken,
  })
}
