import {
  ActionRequiredRequest,
  AvailableFilesRequest,
  AvailableFilter,
  Sort,
} from '../../../synapseTypes/DownloadListV2/QueryRequestDetails'
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import {
  ActionRequiredResponse,
  AvailableFilesResponse,
  FilesStatisticsResponse,
} from '../../../synapseTypes/DownloadListV2/QueryResponseDetails'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { SynapseClient } from '../../../index'
import { AddBatchOfFilesToDownloadListResponse } from '../../../synapseTypes/DownloadListV2/AddBatchOfFilesToDownloadListResponse'

export function useGetAvailableFilesToDownload(
  request: AvailableFilesRequest,
  options?: UseQueryOptions<
    AvailableFilesResponse,
    SynapseClientError,
    AvailableFilesResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<AvailableFilesResponse, SynapseClientError>(
    keyFactory.getDownloadListAvailableFilesQueryKey(request),
    () => SynapseClient.getAvailableFilesToDownload(request, accessToken),
    options,
  )
}

export function useGetAvailableFilesToDownloadInfinite(
  sort?: Sort,
  filter?: AvailableFilter,
  options?: UseInfiniteQueryOptions<
    AvailableFilesResponse,
    SynapseClientError,
    AvailableFilesResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: AvailableFilesRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.AvailableFilesRequest',
  }
  if (sort) {
    request.sort = [sort]
  }
  if (filter) {
    request.filter = filter
  }
  return useInfiniteQuery<AvailableFilesResponse, SynapseClientError>(
    keyFactory.getDownloadListAvailableFilesInfiniteQueryKey(request),
    async context => {
      return SynapseClient.getAvailableFilesToDownload(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useGetDownloadListActionsRequired(
  options?: UseQueryOptions<
    ActionRequiredResponse,
    SynapseClientError,
    ActionRequiredResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }

  return useQuery<ActionRequiredResponse, SynapseClientError>(
    keyFactory.getDownloadListActionsRequiredQueryKey(),
    () => SynapseClient.getDownloadListActionsRequired(request, accessToken),
    options,
  )
}

export function useGetDownloadListActionsRequiredInfinite(
  options?: UseInfiniteQueryOptions<
    ActionRequiredResponse,
    SynapseClientError,
    ActionRequiredResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }
  return useInfiniteQuery<ActionRequiredResponse, SynapseClientError>(
    keyFactory.getDownloadListActionsRequiredInfiniteQueryKey(),
    async context => {
      return await SynapseClient.getDownloadListActionsRequired(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: page => page.nextPageToken,
    },
  )
}

export function useGetDownloadListStatistics(
  options?: UseQueryOptions<
    FilesStatisticsResponse,
    SynapseClientError,
    FilesStatisticsResponse
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<FilesStatisticsResponse, SynapseClientError>(
    keyFactory.getDownloadListStatisticsQueryKey(),
    () => SynapseClient.getDownloadListStatistics(accessToken),
    options,
  )
}

export function useAddFileToDownloadList(
  options?: UseMutationOptions<
    AddBatchOfFilesToDownloadListResponse,
    SynapseClientError,
    {
      entityId: string
      entityVersionNumber: number | undefined
    }
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: (vars: {
      entityId: string
      entityVersionNumber: number | undefined
    }) =>
      SynapseClient.addFileToDownloadListV2(
        vars.entityId,
        vars.entityVersionNumber,
        accessToken,
      ),
    mutationKey: ['addFileToDownloadList'],
    onSuccess: async (data, variables, ctx) => {
      // PORTALS-2222: Invalidate to load the accurate results
      await queryClient.invalidateQueries(
        keyFactory.getDownloadListBaseQueryKey(),
      )
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}
