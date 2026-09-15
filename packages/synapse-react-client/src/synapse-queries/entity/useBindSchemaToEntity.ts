import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  BindSchemaToEntityRequest,
  JsonSchemaObjectBinding,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'

export type BindSchemaToEntityVariables = { entityId: string } & Omit<
  BindSchemaToEntityRequest,
  'entityId'
>

/**
 * Binds a JSON Schema to an entity (`PUT /entity/{id}/schema/binding`). On success, updates the
 * entity's bound-schema cache so `useGetSchemaBinding` reflects the new binding immediately.
 */
export function useBindSchemaToEntity(
  options?: Partial<
    UseMutationOptions<
      JsonSchemaObjectBinding,
      SynapseClientError,
      BindSchemaToEntityVariables
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<
    JsonSchemaObjectBinding,
    SynapseClientError,
    BindSchemaToEntityVariables
  >({
    ...options,
    mutationFn: ({ entityId, ...rest }) =>
      synapseClient.entityServicesClient.putRepoV1EntityIdSchemaBinding({
        id: entityId,
        bindSchemaToEntityRequest: { entityId, ...rest },
      }),
    onSuccess: async (data, variables, ctx) => {
      const boundSchemaQueryKey = keyFactory.getEntityBoundJsonSchemaQueryKey(
        variables.entityId,
      )
      queryClient.setQueryData(boundSchemaQueryKey, data)
      await queryClient.invalidateQueries({ queryKey: boundSchemaQueryKey })

      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
    },
  })
}
