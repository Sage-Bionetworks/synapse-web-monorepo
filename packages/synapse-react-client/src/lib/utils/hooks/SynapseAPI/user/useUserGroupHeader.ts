import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { TYPE_FILTER, UserGroupHeader } from '../../../synapseTypes'

export function useGetUserGroupHeader(
  principalId: string,
  options?: UseQueryOptions<UserGroupHeader, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryKey = keyFactory.getUserGroupHeaderQueryKey(principalId)

  return useQuery<UserGroupHeader, SynapseClientError>(
    queryKey,
    async () => {
      const responsePage = await SynapseClient.getGroupHeadersBatch(
        [principalId],
        accessToken,
      )
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
