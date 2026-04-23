import { useSynapseContext } from '@/utils/index'
import {
  CurationTask,
  ListCurationTaskRequest,
  ListCurationTaskResponse,
  SynapseClientError,
  TaskStatus,
} from '@sage-bionetworks/synapse-client'
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

export function useGetCurationTask<TData = CurationTask>(
  taskId: number,
  options?: Partial<UseQueryOptions<CurationTask, SynapseClientError, TData>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getCurationTaskIdTaskKey(taskId),
    queryFn: async () => {
      return synapseClient.curationTaskServicesClient.getRepoV1CurationTaskTaskId(
        { taskId },
      )
    },
  })
}

export function useGetCurationTaskStatus<TData = TaskStatus>(
  taskId: number,
  options?: Partial<UseQueryOptions<TaskStatus, SynapseClientError, TData>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getCurationTaskIdStatusKey(taskId),
    queryFn: () =>
      synapseClient.curationTaskServicesClient.getRepoV1CurationTaskTaskIdStatus(
        { taskId },
      ),
  })
}

export function useUpdateCurationTask(
  options?: Partial<
    UseMutationOptions<CurationTask, SynapseClientError, CurationTask>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: curationTask =>
      synapseClient.curationTaskServicesClient.putRepoV1CurationTaskTaskId({
        taskId: curationTask.taskId!,
        curationTask,
      }),
    onSuccess: (data, variables, context) => {
      // Invalidate both the status query and the task query using the ID key
      queryClient.invalidateQueries({
        queryKey: keyFactory.getCurationTaskIdKey(variables.taskId!),
      })
      queryClient.invalidateQueries({
        queryKey: keyFactory.getAllCurationTaskListKey(),
      })
      if (options?.onSuccess) {
        options.onSuccess(data, variables, context)
      }
    },
  })
}

export function useUpdateCurationTaskStatus(
  options?: Partial<
    UseMutationOptions<TaskStatus, SynapseClientError, TaskStatus>
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: taskStatus =>
      synapseClient.curationTaskServicesClient.putRepoV1CurationTaskTaskIdStatus(
        { taskId: taskStatus.taskId!, taskStatus },
      ),
    onSuccess: (data, variables, context) => {
      // Invalidate both the status query and the task query using the ID key
      queryClient.invalidateQueries({
        queryKey: keyFactory.getCurationTaskIdKey(variables.taskId!),
      })

      if (options?.onSuccess) {
        options.onSuccess(data, variables, context)
      }
    },
  })
}

export function useGetCurationTasksInfinite<
  TData = InfiniteData<ListCurationTaskResponse>,
>(
  request: ListCurationTaskRequest,
  options?: Partial<
    UseInfiniteQueryOptions<
      ListCurationTaskResponse,
      SynapseClientError,
      TData,
      QueryKey,
      ListCurationTaskResponse['nextPageToken']
    >
  >,
) {
  const { synapseClient, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    ListCurationTaskResponse,
    SynapseClientError,
    TData,
    QueryKey,
    ListCurationTaskResponse['nextPageToken']
  >({
    ...options,
    queryKey: keyFactory.getCurationTaskListKey(request),
    queryFn: context =>
      synapseClient.curationTaskServicesClient.postRepoV1CurationTaskList({
        listCurationTaskRequest: {
          ...request,
          nextPageToken: context.pageParam,
        },
      }),
    initialPageParam: undefined,
    getNextPageParam: page => page.nextPageToken,
  })
}
