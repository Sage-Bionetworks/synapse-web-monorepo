import {
  ActionRequiredRequest,
  ActionRequiredResponse,
  AddBatchOfFilesToDownloadListResponse,
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  AvailableFilesRequest,
  AvailableFilesResponse,
  AvailableFilter,
  FilesStatisticsResponse,
  Sort,
} from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import SynapseClient from '../../synapse-client'

export function useGetAvailableFilesToDownload(
  request: AvailableFilesRequest,
  options?: UseQueryOptions<AvailableFilesResponse, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDownloadListAvailableFilesQueryKey(request),
    queryFn: () =>
      SynapseClient.getAvailableFilesToDownload(request, accessToken),
  })
}

export function useGetAvailableFilesToDownloadInfinite<
  TData = InfiniteData<AvailableFilesResponse>,
>(
  sort?: Sort,
  filter?: AvailableFilter,
  options?: Partial<
    UseInfiniteQueryOptions<
      AvailableFilesResponse,
      SynapseClientError,
      TData,
      AvailableFilesResponse,
      QueryKey,
      AvailableFilesResponse['nextPageToken']
    >
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
  return useInfiniteQuery<
    AvailableFilesResponse,
    SynapseClientError,
    TData,
    QueryKey,
    AvailableFilesResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getDownloadListAvailableFilesInfiniteQueryKey(request),
    queryFn: async context => {
      return SynapseClient.getAvailableFilesToDownload(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useGetDownloadListActionsRequired(
  options?: Partial<
    UseQueryOptions<ActionRequiredResponse, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }

  return useQuery({
    ...options,
    queryKey: keyFactory.getDownloadListActionsRequiredQueryKey(),
    queryFn: () =>
      SynapseClient.getDownloadListActionsRequired(request, accessToken),
  })
}

export function useGetDownloadListActionsRequiredInfinite<
  TData = InfiniteData<ActionRequiredResponse>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      ActionRequiredResponse,
      SynapseClientError,
      TData,
      ActionRequiredResponse,
      QueryKey,
      ActionRequiredResponse['nextPageToken']
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const request: ActionRequiredRequest = {
    concreteType:
      'org.sagebionetworks.repo.model.download.ActionRequiredRequest',
  }
  return useInfiniteQuery<
    ActionRequiredResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ActionRequiredResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getDownloadListActionsRequiredInfiniteQueryKey(),
    queryFn: async context => {
      return await SynapseClient.getDownloadListActionsRequired(
        { ...request, nextPageToken: context.pageParam },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}

export function useGetDownloadListStatistics(
  options?: Partial<
    UseQueryOptions<FilesStatisticsResponse, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDownloadListStatisticsQueryKey(),
    queryFn: () => SynapseClient.getDownloadListStatistics(accessToken),
  })
}

export function useAddFileToDownloadList(
  options?: Partial<
    UseMutationOptions<
      AddBatchOfFilesToDownloadListResponse,
      SynapseClientError,
      {
        entityId: string
        entityVersionNumber: number | undefined
      }
    >
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
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getDownloadListBaseQueryKey(),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useAddFileBatchToDownloadList(
  options?: Partial<
    UseMutationOptions<
      AddBatchOfFilesToDownloadListResponse,
      SynapseClientError,
      {
        fileEntityId: string
        versionNumber?: number
      }[]
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: batchToAdd =>
      SynapseClient.addFileBatchToDownloadListV2(batchToAdd, accessToken),
    mutationKey: ['addFileBatchToDownloadList'],
    onSuccess: async (data, variables, ctx) => {
      // PORTALS-2222: Invalidate to load the accurate results
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getDownloadListBaseQueryKey(),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useAddQueryToDownloadList(
  options?: Partial<
    UseMutationOptions<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: request =>
      SynapseClient.addFilesToDownloadListV2(request, accessToken),
    mutationKey: ['addQueryToDownloadList'],
    onSuccess: async (data, variables, ctx) => {
      // Invalidate all download list queries
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getDownloadListBaseQueryKey(),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}
