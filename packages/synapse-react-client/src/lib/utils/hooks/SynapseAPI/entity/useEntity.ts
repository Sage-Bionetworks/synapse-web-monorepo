/*
 * Hooks to access Entity Services in Synapse
 */

import { omit, pick } from 'lodash-es'
import { useEffect, useState } from 'react'
import {
  QueryFunctionContext,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { entityJsonKeys } from '../../../functions/EntityTypeUtils'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import {
  Entity,
  EntityJson,
  EntityJsonValue,
  EntityPath,
  PaginatedResults,
} from '../../../synapseTypes'
import { VersionInfo } from '../../../synapseTypes/VersionInfo'
import { invalidateAllQueriesForEntity } from '../QueryClientUtils'

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
  options?: UseQueryOptions<EntityJson, SynapseClientError>,
) {
  const [entityMetadata, setEntityMetadata] = useState<EntityJson | undefined>()
  const [annotations, setAnnotations] = useState<
    Record<string, EntityJsonValue> | undefined
  >()
  const { accessToken, keyFactory } = useSynapseContext()
  const query = useQuery<EntityJson, SynapseClientError>(
    keyFactory.getEntityJsonQueryKey(entityId),
    () => SynapseClient.getEntityJson(entityId, accessToken),
    options,
  )

  // Separate the standard fields and annotations.
  useEffect(() => {
    if (query.data) {
      setEntityMetadata(getStandardEntityFields(query.data))
      setAnnotations(removeStandardEntityFields(query.data))
    }
  }, [query.data])

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
          keyFactory.getEntityJsonQueryKey(entityId),
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
