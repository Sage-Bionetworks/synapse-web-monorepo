import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { TYPE_FILTER, UserGroupHeader } from '@sage-bionetworks/synapse-types'

/**
 * Get a single UserGroupHeader, utilizing a react-query cache.  This is always an unauthenticated call
 * (the user's current email address will never be returned in the result).
 * @param principalId
 * @param options
 * @returns
 */
export function useGetUserGroupHeader(
  principalId: string,
  options?: UseQueryOptions<UserGroupHeader, SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserGroupHeaderQueryKey(principalId)

  return useQuery<UserGroupHeader, SynapseClientError>(
    queryKey,
    async () => {
      const responsePage = await SynapseClient.getGroupHeadersBatch([
        principalId,
      ])
      if (responsePage.children.length !== 1) {
        throw new Error(
          `Expected one response in useGetUserGroupHeader for id: ${principalId}, got ${responsePage.children.length}`,
        )
      }
      return responsePage.children[0]
    },
    options,
  )
}

/**
 * Get an array of UserGroupHeaders, utilizing a react-query cache.  This is always an unauthenticated call
 * (the users current email addresses will never be returned in the result).
 * @param principalId
 * @param options
 * @returns
 */
export function useGetUserGroupHeaders(
  principalIds: string[],
  options?: UseQueryOptions<UserGroupHeader[], SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  const queryKey = keyFactory.getUserGroupHeaderBatchQueryKey(principalIds)
  const queryFn = async () => {
    const response = await SynapseClient.getGroupHeadersBatch(principalIds)

    // Update the cache with each individual header
    response.children.forEach(userGroupHeader => {
      queryClient.setQueryData(
        keyFactory.getUserGroupHeaderQueryKey(userGroupHeader.ownerId),
        userGroupHeader,
      )
    })

    return response.children
  }

  return useQuery<UserGroupHeader[], SynapseClientError>(
    queryKey,
    queryFn,
    options,
  )
}

export function useSearchUserGroupHeaders(
  prefix: string,
  filter?: TYPE_FILTER,
  options?: UseQueryOptions<UserGroupHeader[], SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserGroupHeaderSearchQueryKey(prefix, filter)

  return useQuery<UserGroupHeader[], SynapseClientError>(
    queryKey,
    async () => {
      const responsePage = await SynapseClient.getUserGroupHeaders(
        prefix,
        filter,
      )
      return responsePage.children
    },
    options,
  )
}

export function useGetUserGroupHeaderWithAlias(
  aliases: string[],
  options?: UseQueryOptions<UserGroupHeader[], SynapseClientError>,
) {
  const { keyFactory } = useSynapseContext()

  const queryKey = keyFactory.getUserGroupHeaderWithAliasQueryKey(aliases)

  return useQuery<UserGroupHeader[], SynapseClientError>(
    queryKey,
    async () => {
      const response = await SynapseClient.postUserGroupHeadersWithAlias(
        aliases,
      )
      return response.list
    },
    options,
  )
}
