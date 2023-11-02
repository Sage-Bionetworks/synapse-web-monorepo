import {
  ColumnModel,
  ViewColumnModelRequest,
  ViewEntityType,
} from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClientError, useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'

export function useGetDefaultColumnModels(
  viewEntityType: ViewEntityType,
  viewTypeMask?: number,
  options?: UseQueryOptions<ColumnModel[], SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery<ColumnModel[], SynapseClientError>(
    keyFactory.getDefaultColumnModelsQueryKey(viewEntityType, viewTypeMask),
    async () => {
      return (
        await SynapseClient.getDefaultColumnModels(viewEntityType, viewTypeMask)
      ).list
    },
    options,
  )
}

export function useGetAnnotationColumnModels(
  request: Omit<ViewColumnModelRequest, 'nextPageToken'>,
  options?: UseQueryOptions<ColumnModel[], SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()
  return useQuery<ColumnModel[], SynapseClientError>(
    keyFactory.getAnnotationColumnModelsQueryKey(request),
    () => SynapseClient.getAnnotationColumnModels(request),
    options,
  )
}
