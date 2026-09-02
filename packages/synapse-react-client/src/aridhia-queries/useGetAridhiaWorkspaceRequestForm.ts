import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { WorkspacesApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { FairFormPayload } from './FairFormPayload'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

const WORKSPACE_REQUEST_FORM_CODE = 'workspace_request'

/**
 * The raw `workspace_request` form definition, used when the user asks for a new workspace
 * instead of picking an existing one.
 *
 * Deliberately returns the raw response body instead of the generated model.
 * openapi-generator's `FromJSON` mapper only copies the properties the OpenAPI spec declares
 * for a given model, silently dropping additional properties, which are used by
 * `parseFairFormSections`.
 *
 * Additionally, `GET /workspaces-forms/{code}` does **not** wrap its result in `items` despite
 * the OpenAPI spec's documented `{ items: [WorkspaceForm] }` envelope. It returns the form object
 * directly (`{ name, sections }`, no `code` key). This hook prefers the unwrapped body but falls
 * back to `items[0]` in case some deployments do wrap it, matching the spec.
 */
export function useGetAridhiaWorkspaceRequestForm(
  options?: Partial<
    UseQueryOptions<FairFormPayload, AridhiaError, FairFormPayload>
  >,
): UseQueryResult<FairFormPayload, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<FairFormPayload>(
    keyFactory.workspaceRequestForm(),
    async configuration => {
      const workspacesApi = new WorkspacesApi(configuration)
      const response = await workspacesApi.fairWorkspacesFormsCodeGetRaw({
        code: WORKSPACE_REQUEST_FORM_CODE,
      })
      const body = (await response.raw.json()) as FairFormPayload & {
        items?: FairFormPayload[]
      }
      return Array.isArray(body.items) ? body.items[0] : body
    },
    options,
  )
}
