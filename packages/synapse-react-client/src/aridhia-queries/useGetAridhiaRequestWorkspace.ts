import { UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { RequestWorkspaceStatus } from '@sage-bionetworks/aridhia-client/generated/models'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaQuery } from './useAridhiaQuery'

/**
 * The workspace a data access request delivers its data to. This is the authoritative source of
 * the workspace links (`workspace_url`, `workspace_inbox_url`): the request itself
 * (`GET /requests/{code}`) reports them as null when the request targets an existing workspace.
 */
export function useGetAridhiaRequestWorkspace(
  requestCode: string,
  options?: Partial<
    UseQueryOptions<
      RequestWorkspaceStatus,
      AridhiaError,
      RequestWorkspaceStatus
    >
  >,
): UseQueryResult<RequestWorkspaceStatus, AridhiaError> {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)

  return useAridhiaQuery<RequestWorkspaceStatus>(
    keyFactory.requestWorkspace(requestCode),
    async configuration => {
      const requestsApi = new RequestsApi(configuration)
      return await requestsApi.fairRequestsCodeWorkspaceGet({
        code: requestCode,
      })
    },
    options,
  )
}
