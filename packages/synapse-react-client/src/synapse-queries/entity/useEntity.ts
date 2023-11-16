/*
 * Hooks to access Entity Services in Synapse
 */

import { omit, pick } from 'lodash-es'
import { useMemo } from 'react'
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueries,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
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

export function useGetEntity<T extends Entity>(
  entityId: string,
  versionNumber?: string | number,
  options?: UseQueryOptions<T, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<T, SynapseClientError>(
    keyFactory.getEntityVersionQueryKey(entityId, versionNumber),
    () =>
      SynapseClient.getEntity<T>(
        accessToken,
        entityId,
        versionNumber?.toString(),
      ),
    options,
  )
}

export function useGetEntities(
  entityHeaders: Pick<EntityHeader, 'id' | 'versionNumber'>[],
  options?: UseQueryOptions<Entity[], SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const headerIds = entityHeaders.map(header => header.id).join()
  const queries = useMemo(
    () =>
      entityHeaders.map(header => {
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
        }
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [headerIds],
  )
  const results = useQueries(queries)
  const isLoading = results.some(result => result.isLoading)
  const entities: Entity[] = results
    .filter(query => query.data !== undefined)
    .map(query => query.data!)
  return useMemo(() => {
    // @ts-ignore
    if (!isLoading && options?.onSuccess) options.onSuccess(entities)
    return { isLoading, data: entities }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, headerIds])
}

export function useUpdateEntity<T extends Entity>(
  options?: UseMutationOptions<T, SynapseClientError, T>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<T, SynapseClientError, T>(
    (entity: T) => SynapseClient.updateEntity<T>(entity, accessToken),
    {
      ...options,
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
    },
  )
}

export function useDeleteEntity(
  options?: UseMutationOptions<void, SynapseClientError, string>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<void, SynapseClientError, string>(
    (entityId: string) => SynapseClient.deleteEntity(accessToken, entityId),
    {
      ...options,
      onSuccess: async (voidReturn, entityId, ctx) => {
        await invalidateAllQueriesForEntity(queryClient, keyFactory, entityId)
        if (options?.onSuccess) {
          await options.onSuccess(voidReturn, entityId, ctx)
        }
      },
    },
  )
}

export function useGetVersions(
  entityId: string,
  offset: number = 0,
  limit: number = 200,
  options?: UseQueryOptions<PaginatedResults<VersionInfo>, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<PaginatedResults<VersionInfo>, SynapseClientError>(
    keyFactory.getPaginatedEntityVersionsQueryKey(entityId, limit, offset),
    () => SynapseClient.getEntityVersions(entityId, accessToken, offset, limit),
    options,
  )
}

export function useGetVersionsInfinite(
  entityId: string,
  options: UseInfiniteQueryOptions<
    PaginatedResults<VersionInfo>,
    SynapseClientError
  >,
) {
  const LIMIT = 200
  const { accessToken, keyFactory } = useSynapseContext()
  return useInfiniteQuery<PaginatedResults<VersionInfo>, SynapseClientError>(
    keyFactory.getEntityVersionsQueryKey(entityId),
    async (context: QueryFunctionContext<QueryKey, number>) => {
      return await SynapseClient.getEntityVersions(
        entityId,
        accessToken,
        context.pageParam,
        LIMIT,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * LIMIT
        //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
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
 * In addition to the standard objects returned by {@link useQuery}, this hook also returns the following objects:
 * - `entityMetadata`: the standard entity fields contained in the JSON response
 * - `annotations`: the annotations contained in the JSON response
 *
 * The union of these objects would be equal in value to the `data` object.
 */
export function useGetJson(
  entityId: string,
  includeDerivedAnnotations: boolean,
  options?: UseQueryOptions<EntityJson, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const query = useQuery<EntityJson, SynapseClientError>(
    keyFactory.getEntityJsonQueryKey(entityId, includeDerivedAnnotations),
    () =>
      SynapseClient.getEntityJson(
        entityId,
        includeDerivedAnnotations,
        accessToken,
      ),
    options,
  )

  // Separate the standard fields and annotations.
  const entityMetadata = useMemo(
    () =>
      query?.data == undefined
        ? undefined
        : getStandardEntityFields(query.data),
    [query.data],
  )

  const annotations = useMemo(
    () =>
      query?.data == undefined
        ? undefined
        : removeStandardEntityFields(query.data),
    [query.data],
  )

  return {
    ...query,
    entityMetadata,
    annotations,
  }
}

export function useUpdateViaJson(
  options?: UseMutationOptions<EntityJson, SynapseClientError, EntityJson>,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()
  return useMutation<EntityJson, SynapseClientError, EntityJson>(
    (json: EntityJson) => {
      const entityId = json.id
      return SynapseClient.updateEntityJson(entityId, json, accessToken)
    },
    {
      ...options,
      onSuccess: async (data, variables, ctx) => {
        const entityId = data.id

        await invalidateAllQueriesForEntity(queryClient, keyFactory, entityId)
        queryClient.setQueryData(
          // This annotation data will never include derived annotations, which are calculated by the backend asynchronously
          keyFactory.getEntityJsonQueryKey(entityId, false),
          data,
        )

        if (options?.onSuccess) {
          await options.onSuccess(data, variables, ctx)
        }
      },
    },
  )
}

export function useGetEntityPath(
  entityId: string,
  options?: UseQueryOptions<EntityPath, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<EntityPath, SynapseClientError>(
    keyFactory.getEntityPathQueryKey(entityId),
    () => SynapseClient.getEntityPath(entityId, accessToken),
    options,
  )
}

export function useGetEntityACL(
  entityId: string,
  options?: UseQueryOptions<AccessControlList, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<AccessControlList, SynapseClientError>(
    keyFactory.getEntityPathQueryKey(entityId),
    () => SynapseClient.getEntityACL(entityId, accessToken),
    options,
  )
}

export function useGetEntityAlias(
  alias: string,
  options?: UseQueryOptions<EntityId | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<EntityId | null, SynapseClientError>(
    keyFactory.getEntityAliasQueryKey(alias),
    () => SynapseClient.getEntityAlias(alias, accessToken),
    options,
  )
}

export function useGetEntityEvaluations(
  entityId: string,
  params?: GetEvaluationParameters,
  options?: UseQueryOptions<Evaluation[] | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<Evaluation[] | null, SynapseClientError>(
    keyFactory.getEntityEvaluationsQueryKey(entityId),
    () => SynapseClient.getAllEntityEvaluations(entityId, params, accessToken),
    options,
  )
}

export function useGetEntityPermissions(
  entityId: string,
  options?: UseQueryOptions<UserEntityPermissions | null, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<UserEntityPermissions | null, SynapseClientError>(
    keyFactory.getEntityAliasQueryKey(entityId),
    () => SynapseClient.getEntityPermissions(entityId, accessToken),
    options,
  )
}

export function useUpdateEntityACL(
  options?: UseMutationOptions<
    AccessControlList,
    SynapseClientError,
    AccessControlList
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<AccessControlList, SynapseClientError, AccessControlList>(
    (acl: AccessControlList) => SynapseClient.updateEntityACL(acl, accessToken),
    {
      ...options,
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
    },
  )
}

type UpdateTableMutationRequest = {
  entityId: string
  originalColumnModels: ColumnModel[]
  newColumnModels: SetOptional<ColumnModel, 'id'>[]
}

export function useUpdateTableColumns(
  options?: UseMutationOptions<
    unknown,
    SynapseClientError,
    UpdateTableMutationRequest
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<unknown, SynapseClientError, UpdateTableMutationRequest>(
    async (request: UpdateTableMutationRequest) => {
      // This call will create new column models as appropriate
      const transactionRequest = await createTableUpdateTransactionRequest(
        accessToken!,
        request.entityId,
        request.originalColumnModels,
        request.newColumnModels,
      )

      return SynapseClient.updateTable(transactionRequest, accessToken)
    },
    {
      ...options,
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
    },
  )
}
