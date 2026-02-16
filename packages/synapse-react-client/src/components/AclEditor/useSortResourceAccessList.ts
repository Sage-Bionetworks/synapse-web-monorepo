import { useGetUserGroupHeaders } from '@/synapse-queries'
import { useRealmPrincipals } from '@/utils/context/RealmPrincipalsContext'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo } from 'react'
import {
  compareResourceAccessAndUserGroupHeader,
  ResourceAccessAndUserGroupHeader,
} from './ResourceAccessAndUserGroupHeader'

/**
 * Custom hook to sort a list of ResourceAccess objects by the permissions and name of the user or team.
 * @param resourceAccessList
 */
export default function useSortResourceAccessList(
  resourceAccessList: ResourceAccess[],
) {
  const { authenticatedUsersId, publicGroupId } = useRealmPrincipals()
  const principalIdsOnResourceAccessList = useMemo(
    () => resourceAccessList.map(ra => ra.principalId),
    [resourceAccessList],
  )

  const {
    data: userGroupHeadersOnResourceAccessList,
    isLoading,
    error,
  } = useGetUserGroupHeaders(principalIdsOnResourceAccessList.map(String), {
    enabled: principalIdsOnResourceAccessList.length > 0,
  })

  useEffect(() => {
    if (error) {
      console.error('Error fetching user group headers: ', error)
    }
  }, [error])

  const sortedResourceAccessList = useMemo(() => {
    if (!userGroupHeadersOnResourceAccessList) {
      return null
    }

    const joinedWithUserGroupHeaders = resourceAccessList.map(
      (ral): ResourceAccessAndUserGroupHeader => ({
        resourceAccess: ral,
        userGroupHeader: userGroupHeadersOnResourceAccessList.find(
          ugh => String(ugh.ownerId) === String(ral.principalId),
        )!,
      }),
    )

    const allEntriesHaveUserGroupHeader = joinedWithUserGroupHeaders.every(
      obj => Boolean(obj.userGroupHeader),
    )

    if (!allEntriesHaveUserGroupHeader) {
      console.warn(
        'Some ACL entries do not have a corresponding UserGroupHeader. The ResourceAccess list will not be sorted. Missing entries: ',
        joinedWithUserGroupHeaders.filter(obj => !obj.userGroupHeader),
      )
      return null
    }

    return joinedWithUserGroupHeaders
      .toSorted((a, b) =>
        compareResourceAccessAndUserGroupHeader(
          a,
          b,
          authenticatedUsersId,
          publicGroupId,
        ),
      )
      .map(obj => obj.resourceAccess)
  }, [
    resourceAccessList,
    userGroupHeadersOnResourceAccessList,
    authenticatedUsersId,
    publicGroupId,
  ])

  return {
    sortedResourceAccessList,
    isLoading,
  }
}
