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

export const downloadListQueryKeys = {
  /* Key used to invalidate all download list queries */
  base: ['downloadList'],
  availableFiles: (request: AvailableFilesRequest) => [
    ...downloadListQueryKeys.base,
    'availableFiles',
    request,
  ],
  availableFilesInfinite: (request: AvailableFilesRequest) => [
    ...downloadListQueryKeys.availableFiles(request),
    'infinite',
  ],
  getActionsRequired: () => [...downloadListQueryKeys.base, 'actionsRequired'],
  getActionsRequiredInfinite: () => [
    ...downloadListQueryKeys.getActionsRequired(),
    'infinite',
  ],
  getStatistics: () => [...downloadListQueryKeys.base, 'statistics'],
}

export function useGetAvailableFilesToDownload(
  request: AvailableFilesRequest,
  options?: UseQueryOptions<
    AvailableFilesResponse,
    SynapseClientError,
    AvailableFilesResponse
  >,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<AvailableFilesResponse, SynapseClientError>(
    downloadListQueryKeys.availableFiles(request),
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
  const { accessToken } = useSynapseContext()
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
    downloadListQueryKeys.availableFilesInfinite(request),
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
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }

  return useQuery<ActionRequiredResponse, SynapseClientError>(
    downloadListQueryKeys.getActionsRequired(),
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
  const { accessToken } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }
  return useInfiniteQuery<ActionRequiredResponse, SynapseClientError>(
    downloadListQueryKeys.getActionsRequiredInfinite(),
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
  const { accessToken } = useSynapseContext()
  return useQuery<FilesStatisticsResponse, SynapseClientError>(
    downloadListQueryKeys.getStatistics(),
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
  const { accessToken } = useSynapseContext()
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
      await queryClient.invalidateQueries(downloadListQueryKeys.base)
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}
