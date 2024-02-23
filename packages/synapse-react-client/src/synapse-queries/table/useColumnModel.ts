import {
  ColumnModel,
  ViewColumnModelRequest,
  ViewEntityType,
} from '@sage-bionetworks/synapse-types'
import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'
import { SetOptional } from 'type-fest'

export function useGetDefaultColumnModels(
  viewEntityType: ViewEntityType,
  viewTypeMask?: number,
  options?: Partial<UseQueryOptions<ColumnModel[], SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDefaultColumnModelsQueryKey(
      viewEntityType,
      viewTypeMask,
    ),
    queryFn: async () => {
      return (
        await SynapseClient.getDefaultColumnModels(viewEntityType, viewTypeMask)
      ).list
    },
  })
}

export function useGetAnnotationColumnModels(
  request: Omit<ViewColumnModelRequest, 'nextPageToken'>,
  options?: Partial<UseQueryOptions<ColumnModel[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getAnnotationColumnModelsQueryKey(request),
    queryFn: () =>
      SynapseClient.getAnnotationColumnModels(request, accessToken),
  })
}

export function useCreateColumnModels(
  options?: UseMutationOptions<
    ColumnModel[],
    SynapseClientError,
    SetOptional<ColumnModel, 'id'>[]
  >,
) {
  const { accessToken } = useSynapseContext()
  return useMutation({
    ...options,
    mutationFn: async columnModels => {
      return (
        await SynapseClient.createColumnModels(accessToken!, columnModels)
      ).list
    },
  })
}
