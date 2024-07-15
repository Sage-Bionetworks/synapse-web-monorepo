import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo } from 'react'
import { useGetUserGroupHeaders } from '../../synapse-queries'
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
  const principalIdsOnResourceAccessList = useMemo(
    () => resourceAccessList.map(ra => ra.principalId),
    [resourceAccessList],
  )

  const {
    data: userGroupHeadersOnResourceAccessList,
    isLoading,
    error,
  } = useGetUserGroupHeaders(principalIdsOnResourceAccessList.map(String))

  useEffect(() => {
    if (error) {
      console.error('Error fetching user group headers: ', error)
    }
  }, [error])

  const sortedResourceAccessList = useMemo(() => {
    if (!userGroupHeadersOnResourceAccessList) {
      return resourceAccessList
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
      return resourceAccessList
    }

    return joinedWithUserGroupHeaders
      .toSorted(compareResourceAccessAndUserGroupHeader)
      .map(obj => obj.resourceAccess)
  }, [resourceAccessList, userGroupHeadersOnResourceAccessList])

  return {
    sortedResourceAccessList,
    isLoading,
  }
}
