import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { FairFormPayload } from './FairFormPayload'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/**
 * Fetches information about a workflow's form fields (`about`/`project` sections), keyed by the
 * workflow's own `key`. Callers derive `workflowKey` from `DatasetSettings.workflow_key`.
 *
 * Deliberately returns the raw response body instead of the generated model. openapi-generator's
 * `FromJSON` mapper only copies the properties the OpenAPI spec declares for a given model,
 * silently dropping any additional properties.
 */
export function useGetAridhiaWorkflow(
  workflowKey: string | undefined,
  options?: Partial<
    UseQueryOptions<FairFormPayload, AridhiaError, FairFormPayload>
  >,
): UseQueryResult<FairFormPayload, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairFormPayload>(
    keyFactory.workflow(workflowKey ?? ''),
    async configuration => {
      const requestsApi = new RequestsApi(configuration)
      const response = await requestsApi.fairWorkflowsCodeGetRaw({
        code: workflowKey!,
      })
      const body = (await response.raw.json()) as FairFormPayload & {
        items?: FairFormPayload[]
      }
      return Array.isArray(body.items) ? body.items[0] : body
    },
    {
      enabled: !!workflowKey,
      ...options,
    },
  )
}
