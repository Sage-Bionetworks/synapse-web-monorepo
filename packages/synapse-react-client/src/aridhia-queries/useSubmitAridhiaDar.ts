import { UseMutationOptions, useQueryClient } from '@tanstack/react-query'
import { RequestFull } from '@sage-bionetworks/aridhia-client/generated/models'
import { RequestsApi } from '@sage-bionetworks/aridhia-client/generated/apis'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { AridhiaKeyFactory } from './AridhiaKeyFactory'
import { AridhiaError, useAridhiaMutation } from './useAridhiaQuery'
import { TransferType } from './TransferType'

export type SubmitAridhiaDarVariables = {
  code: string
  name: string
  /** Flat answer map (About ∪ Project ∪ Workspace-when-requested), minus `name` and `code`. */
  fields: Record<string, unknown>
  transferType: TransferType
  workspaceRequested: boolean
  /** Required when `workspaceRequested` is true — RDCA-DAP's "Reference" field, sent as
   * `RequestPost.workspace_reference`. Unused when picking an existing workspace. */
  workspaceReference?: string
  /** Required when `workspaceRequested` is false — the chosen existing workspace. */
  workspaceUuid?: string
  selectedDictionaries: { code: string; name?: string }[]
}

/**
 * Submits a data access request to `POST /fair/requests/`. On success, invalidates the requests
 * list so the dataset table's access icon updates without a manual reload.
 */
export function useSubmitAridhiaDar(
  options?: Partial<
    UseMutationOptions<RequestFull, AridhiaError, SubmitAridhiaDarVariables>
  >,
) {
  const { accessToken: synapseAccessToken } = useSynapseContext()
  const keyFactory = new AridhiaKeyFactory(synapseAccessToken)
  const queryClient = useQueryClient()

  return useAridhiaMutation<RequestFull, SubmitAridhiaDarVariables>(
    async (configuration, variables) => {
      const requestsApi = new RequestsApi(configuration)
      return await requestsApi.fairRequestsPost({
        requestPost: {
          code: variables.code,
          name: variables.name,
          fields: variables.fields,
          terms: true,
          transfer_type: variables.transferType,
          workspace_requested: variables.workspaceRequested,
          ...(variables.workspaceRequested
            ? { workspace_reference: variables.workspaceReference }
            : { workspace_uuid: variables.workspaceUuid }),
          cohort: {
            name: variables.name,
            queries: [
              {
                name: variables.name,
                clauses: variables.selectedDictionaries.map(dictionary => ({
                  name: dictionary.name ?? dictionary.code,
                  dictionary: { code: dictionary.code },
                  filters: [], // empty = the whole table
                })),
              },
            ],
          },
        },
      })
    },
    {
      ...options,
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries({ queryKey: keyFactory.requests() })
        options?.onSuccess?.(data, variables, context)
      },
    },
  )
}
