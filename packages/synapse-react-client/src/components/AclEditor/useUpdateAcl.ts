import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { useCallback, useEffect, useState } from 'react'
import { noop } from 'lodash-es'
import useSortResourceAccessList from './useSortResourceAccessList'

export const PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions.'

type UseUpdateAclOptions = {
  onChange?: (resourceAccessList: ResourceAccess[]) => void
  onError?: (e: string) => void
}

export default function useUpdateAcl(options: UseUpdateAclOptions = {}) {
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
    if (
      !isDirty &&
      !isLoadingSortedList &&
      !hasSorted &&
      sortedResourceAccessList != null
    ) {
      setResourceAccessList(sortedResourceAccessList)
      // `useSortResourceAccessList` will return a new array every time `resourceAccessList` changes, so we need to
      // track if we've already sorted to prevent an infinite loop
      setHasSorted(true)
    }
  }, [hasSorted, isDirty, isLoadingSortedList, sortedResourceAccessList])

  useEffect(() => {
    onChange(resourceAccessList)
  }, [resourceAccessList])

  const addResourceAccessItem = useCallback(
    (newReviewerId: string | null, accessTypes: ACCESS_TYPE[]) => {
      setIsDirty(true)
      if (newReviewerId) {
        setResourceAccessList(resourceAccessList => {
          const alreadyReviewer = resourceAccessList.some(
            resourceAccess =>
              resourceAccess.principalId === Number(newReviewerId),
          )
          if (alreadyReviewer) {
            onError(PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE)
          } else {
            const newResourceAccess: ResourceAccess = {
              principalId: Number(newReviewerId),
              accessType: accessTypes,
            }
            return [...resourceAccessList, newResourceAccess]
          }
          return resourceAccessList
        })
      }
    },
    [onError],
  )

  const updateResourceAccessItem = useCallback(
    (principalId: number, accessType: ACCESS_TYPE[]) => {
      setIsDirty(true)
      setResourceAccessList(resourceAccessList =>
        resourceAccessList.map(resourceAccess => {
          return resourceAccess.principalId === principalId
            ? { ...resourceAccess, accessType }
            : resourceAccess
        }),
      )
    },
    [],
  )

  const removeResourceAccessItem = useCallback((principalId: number) => {
    setIsDirty(true)
    setResourceAccessList(resourceAccessList =>
      resourceAccessList.filter(
        raListItem => raListItem.principalId !== principalId,
      ),
    )
  }, [])

  const resetDirtyState = useCallback(() => {
    setIsDirty(false)
  }, [])

  return {
    resourceAccessList: resourceAccessList,
    setResourceAccessList,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
    resetDirtyState,
  }
}
