import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  AddToDownloadListRequest,
  AddToDownloadListResponse,
  AddToDownloadListStatsRequest,
  AddToDownloadListStatsResponse,
  waitForAsyncResult,
} from '@sage-bionetworks/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  ActionRequiredCount,
  ActionRequiredRequest,
  ActionRequiredResponse,
  AddBatchOfFilesToDownloadListResponse,
  AvailableFilesRequest,
  AvailableFilesResponse,
  AvailableFilter,
  FilesStatisticsResponse,
  RemoveBatchOfFilesFromDownloadListRequest,
  RemoveBatchOfFilesFromDownloadListResponse,
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

export function useGetAllDownloadListActionsRequired(
  options?: Partial<UseQueryOptions<ActionRequiredCount[], SynapseClientError>>,
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
      SynapseClient.getAllDownloadListActionsRequired(request, accessToken),
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

export function useAddToDownloadList(
  options?: Partial<
    UseMutationOptions<
      AddToDownloadListResponse,
      SynapseClientError,
      AddToDownloadListRequest
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: async addToDownloadListRequest => {
      const jobId = (
        await synapseClient.downloadListServicesClient.postRepoV1DownloadListAddAsyncStart(
          {
            addToDownloadListRequest,
          },
        )
      ).token!

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          {
            jobId,
          },
        ),
      )
      return asyncJobResponse.responseBody as AddToDownloadListResponse
    },
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

export function useRemoveFilesFromDownloadList(
  options?: Partial<
    UseMutationOptions<
      RemoveBatchOfFilesFromDownloadListResponse,
      SynapseClientError,
      RemoveBatchOfFilesFromDownloadListRequest
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: request =>
      SynapseClient.removeItemsFromDownloadListV2(request, accessToken),
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

export function useGetAddToDownloadListStats(
  addToDownloadListStatsRequest: AddToDownloadListStatsRequest,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    queryKey: keyFactory.getAddToDownloadListStatsQueryKey(
      addToDownloadListStatsRequest,
    ),
    queryFn: async () => {
      const jobId = (
        await synapseClient.downloadListServicesClient.postRepoV1DownloadListAddStatsAsyncStart(
          { addToDownloadListStatsRequest },
        )
      ).token!

      const asyncJobResponse = await waitForAsyncResult(() =>
        synapseClient.asynchronousJobServicesClient.getRepoV1AsynchronousJobJobId(
          { jobId },
        ),
      )
      return asyncJobResponse.responseBody as AddToDownloadListStatsResponse
    },
  })
}
