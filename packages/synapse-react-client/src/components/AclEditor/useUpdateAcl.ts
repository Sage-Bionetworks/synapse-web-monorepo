import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { noop } from 'lodash-es'
import useSortResourceAccessList from './useSortResourceAccessList'

export const PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions.'

type UseUpdateAclOptions = {
  onChange?: (resourceAccessList: ResourceAccess[]) => void
  onError?: (e: string) => void
}

export default function useUpdateAcl(options: UseUpdateAclOptions) {
  const { onChange = noop, onError = noop } = options
  const [isDirty, setIsDirty] = useState(false)
  const [resourceAccessList, setResourceAccessList] = useState<
    ResourceAccess[]
  >([])
  const [hasSorted, setHasSorted] = useState(false)

  // While the form has not been edited, sort the resourceAccessList
  const { sortedResourceAccessList, isLoading: isLoadingSortedList } =
    useSortResourceAccessList(resourceAccessList)
  useEffect(() => {
    if (!isDirty && !isLoadingSortedList && !hasSorted) {
      setResourceAccessList(sortedResourceAccessList)
      // `useSortResourceAccessList` will return a new array every time `resourceAccessList` changes, so we need to
      // track if we've already sorted to prevent an infinite loop
      setHasSorted(true)
    }
  }, [hasSorted, isDirty, isLoadingSortedList, sortedResourceAccessList])

  useEffect(() => {
    onChange(resourceAccessList)
  }, [resourceAccessList])

  const addResourceAccessItem = (
    newReviewerId: string | null,
    accessTypes: ACCESS_TYPE[],
  ) => {
    setIsDirty(true)
    if (newReviewerId) {
      const alreadyReviewer = resourceAccessList.some(
        resourceAccess => resourceAccess.principalId === Number(newReviewerId),
      )
      if (alreadyReviewer) {
        onError(PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE)
      } else {
        const newResourceAccess: ResourceAccess = {
          principalId: Number(newReviewerId),
          accessType: accessTypes,
        }
        const updatedResourceAccessList = [
          ...resourceAccessList,
          newResourceAccess,
        ]
        setResourceAccessList(updatedResourceAccessList)
      }
    }
  }

  const updateResourceAccessItem = (
    principalId: number,
    accessType: ACCESS_TYPE[],
  ) => {
    setIsDirty(true)
    const updatedResourceAccessList = resourceAccessList.map(resourceAccess => {
      return resourceAccess.principalId === principalId
        ? { ...resourceAccess, accessType }
        : resourceAccess
    })
    setResourceAccessList(updatedResourceAccessList)
  }

  const removeResourceAccessItem = (principalId: number) => {
    setIsDirty(true)
    const updatedResourceAccessList = resourceAccessList.filter(
      raListItem => raListItem.principalId !== principalId,
    )
    setResourceAccessList(updatedResourceAccessList)
  }

  return {
    resourceAccessList: resourceAccessList,
    setResourceAccessList,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
  }
}
