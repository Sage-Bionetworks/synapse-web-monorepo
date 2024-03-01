/*
 * Hooks to access Entity Services in Synapse
 */

import { omit, pick } from 'lodash-es'
import { useMemo } from 'react'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueries,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { entityJsonKeys } from '../../utils/functions/EntityTypeUtils'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  AccessControlList,
  ColumnModel,
  Entity,
  EntityHeader,
  EntityId,
  EntityJson,
  EntityPath,
  Evaluation,
  GetEvaluationParameters,
  PaginatedResults,
  UserEntityPermissions,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { invalidateAllQueriesForEntity } from '../QueryClientUtils'
import { createTableUpdateTransactionRequest } from '../../utils'
import { SetOptional } from 'type-fest'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetEntity<T extends Entity>(
  entityId: string,
  versionNumber?: string | number,
  options?: Partial<UseQueryOptions<T, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityVersionQueryKey(entityId, versionNumber),
    queryFn: () =>
      SynapseClient.getEntity<T>(
        accessToken,
        entityId,
        versionNumber?.toString(),
      ),
  })
}

export function useGetEntities(
  entityHeaders: Pick<EntityHeader, 'id' | 'versionNumber'>[],
  options?: Partial<UseQueryOptions<Entity[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queries = useMemo(
    () => ({
      queries: entityHeaders.map(header => {
        return {
          queryKey: keyFactory.getEntityVersionQueryKey(
            header.id,
            header.versionNumber,
          ),
          queryFn: () =>
            SynapseClient.getEntity(
              accessToken,
              header.id,
              header.versionNumber,
            ),
          options,
        }
      }),
    }),
    [accessToken, entityHeaders, keyFactory, options],
  )
  return useQueries(queries)
}

export function useCreateEntity(
  options?: UseMutationOptions<
    Entity,
    SynapseClientError,
    Pick<Entity, 'name' | 'description' | 'parentId' | 'concreteType'>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    Entity,
    SynapseClientError,
    Pick<Entity, 'name' | 'description' | 'parentId' | 'concreteType'>
  >({
    mutationFn: (entity: Entity) =>
      SynapseClient.createEntity(entity, accessToken),
    onSuccess: async (newEntity, variables, ctx) => {
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        newEntity.id!,
      )
      queryClient.setQueryData(
        keyFactory.getEntityQueryKey(newEntity.id!),
        newEntity,
      )

      if (options?.onSuccess) {
        await options.onSuccess(newEntity, variables, ctx)
      }
    },
  })
}

export function useUpdateEntity<T extends Entity>(
  options?: Partial<UseMutationOptions<T, SynapseClientError, T>>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<T, SynapseClientError, T>({
    ...options,
    mutationFn: (entity: T) =>
      SynapseClient.updateEntity<T>(entity, accessToken),
    onSuccess: async (updatedEntity, variables, ctx) => {
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        updatedEntity.id!,
      )
      queryClient.setQueryData(
        keyFactory.getEntityQueryKey(updatedEntity.id!),
        updatedEntity,
      )

      if (options?.onSuccess) {
        await options.onSuccess(updatedEntity, variables, ctx)
      }
    },
  })
}

export function useDeleteEntity(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.deleteEntity(accessToken, entityId),
    onSuccess: async (voidReturn, entityId, ctx) => {
      await invalidateAllQueriesForEntity(queryClient, keyFactory, entityId)
      if (options?.onSuccess) {
        await options.onSuccess(voidReturn, entityId, ctx)
      }
    },
  })
}

export function useGetVersions(
  entityId: string,
  offset: number = 0,
  limit: number = 200,
  options?: Partial<
    UseQueryOptions<PaginatedResults<VersionInfo>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getPaginatedEntityVersionsQueryKey(
      entityId,
      limit,
      offset,
    ),
    queryFn: () =>
      SynapseClient.getEntityVersions(entityId, accessToken, offset, limit),
  })
}

export function useGetVersionsInfinite<
  TData = InfiniteData<PaginatedResults<VersionInfo>>,
>(
  entityId: string,
  options: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<VersionInfo>,
      SynapseClientError,
      TData,
      PaginatedResults<VersionInfo>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const LIMIT = 200
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<
    PaginatedResults<VersionInfo>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getEntityVersionsQueryKey(entityId),
    queryFn: async context => {
      return await SynapseClient.getEntityVersions(
        entityId,
        accessToken,
        context.pageParam,
        LIMIT,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}

export function getStandardEntityFields(json: EntityJson): EntityJson {
  return pick(json, entityJsonKeys[json.concreteType]) as EntityJson
}

export function removeStandardEntityFields(
  json: EntityJson,
): Record<
  string,
  string | number | boolean | string[] | number[] | boolean[] | undefined
> {
  return omit(json, entityJsonKeys[json.concreteType])
}

/**
 * This hook automatically transforms the data to include these objects:
 * - `entity`: the unmodified Entity data object
 * - `entityMetadata`: the standard entity fields contained in the JSON response
 * - `annotations`: the annotations contained in the JSON response
 *
 * The union of these objects would be equal in value to the `data` object.
 */
export function useGetJson(
  entityId: string,
  versionNumber: number | undefined,
  includeDerivedAnnotations: boolean,
  options?: Partial<UseQueryOptions<EntityJson, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityJsonQueryKey(
      entityId,
      versionNumber,
      includeDerivedAnnotations,
    ),
    queryFn: () =>
      SynapseClient.getEntityJson(
        entityId,
        versionNumber,
        includeDerivedAnnotations,
        accessToken,
      ),

    select: data => {
      // Separate the standard fields and annotations.
      const entityMetadata = getStandardEntityFields(data)

      const annotations = removeStandardEntityFields(data)

      return {
        entity: data,
        entityMetadata,
        annotations,
      }
    },
  })
}

export function useUpdateViaJson(
  options?: Partial<
    UseMutationOptions<EntityJson, SynapseClientError, EntityJson>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  return useMutation<EntityJson, SynapseClientError, EntityJson>({
    ...options,
    mutationFn: (json: EntityJson) => {
      const entityId = json.id
      return SynapseClient.updateEntityJson(entityId, json, accessToken)
    },
    onSuccess: async (data, variables, ctx) => {
      const entityId = data.id

      await invalidateAllQueriesForEntity(queryClient, keyFactory, entityId)
      queryClient.setQueryData(
        // This annotation data will never include derived annotations, which are calculated by the backend asynchronously
        keyFactory.getEntityJsonQueryKey(entityId, undefined, false),
        data,
      )

      if (options?.onSuccess) {
        await options.onSuccess(data, variables, ctx)
      }
    },
  })
}

export function useGetEntityPath(
  entityId: string,
  options?: Partial<UseQueryOptions<EntityPath, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityPathQueryKey(entityId),
    queryFn: () => SynapseClient.getEntityPath(entityId, accessToken),
  })
}

export function useGetEntityACL(
  entityId: string,
  options?: Partial<UseQueryOptions<AccessControlList, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityPathQueryKey(entityId),
    queryFn: () => SynapseClient.getEntityACL(entityId, accessToken),
  })
}

export function useGetEntityAlias(
  alias: string,
  options?: Partial<UseQueryOptions<EntityId | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityAliasQueryKey(alias),
    queryFn: () => SynapseClient.getEntityAlias(alias, accessToken),
  })
}

export function useGetEntityEvaluations(
  entityId: string,
  params?: GetEvaluationParameters,
  options?: Partial<UseQueryOptions<Evaluation[] | null, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityEvaluationsQueryKey(entityId),
    queryFn: () =>
      SynapseClient.getAllEntityEvaluations(entityId, params, accessToken),
  })
}

export function useGetEntityPermissions(
  entityId: string,
  options?: Partial<
    UseQueryOptions<UserEntityPermissions | null, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getEntityPermissionsQueryKey(entityId),
    queryFn: () => SynapseClient.getEntityPermissions(entityId, accessToken),
  })
}

export function useUpdateEntityACL(
  options?: Partial<
    UseMutationOptions<AccessControlList, SynapseClientError, AccessControlList>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<AccessControlList, SynapseClientError, AccessControlList>({
    ...options,
    mutationFn: (acl: AccessControlList) =>
      SynapseClient.updateEntityACL(acl, accessToken),
    onSuccess: async (updatedACL: AccessControlList, variables, ctx) => {
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        updatedACL.id,
      )
      queryClient.setQueryData(
        keyFactory.getEntityACLQueryKey(updatedACL.id),
        updatedACL,
      )

      if (options?.onSuccess) {
        await options.onSuccess(updatedACL, variables, ctx)
      }
    },
  })
}

type UpdateTableMutationRequest = {
  entityId: string
  originalColumnModels: ColumnModel[]
  newColumnModels: SetOptional<ColumnModel, 'id'>[]
}

export function useUpdateTableColumns(
  options?: Partial<
    UseMutationOptions<unknown, SynapseClientError, UpdateTableMutationRequest>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<unknown, SynapseClientError, UpdateTableMutationRequest>({
    ...options,
    mutationFn: async (request: UpdateTableMutationRequest) => {
      // This call will create new column models as appropriate
      const transactionRequest = await createTableUpdateTransactionRequest(
        accessToken!,
        request.entityId,
        request.originalColumnModels,
        request.newColumnModels,
      )

      return SynapseClient.updateTable(transactionRequest, accessToken)
    },
    onSuccess: async (response, variables, ctx) => {
      await invalidateAllQueriesForEntity(
        queryClient,
        keyFactory,
        variables.entityId,
      )

      if (options?.onSuccess) {
        await options.onSuccess(response, variables, ctx)
      }
    },
  })
}
