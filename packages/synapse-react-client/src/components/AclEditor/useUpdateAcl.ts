import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { noop } from 'lodash-es'
import useSortResourceAccessList from './useSortResourceAccessList'

export const PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions.'

type UseUpdateAclOptions = {
  initialResourceAccessList?: ResourceAccess[]
  onChange?: (resourceAccessList: ResourceAccess[]) => void
  onError?: (e: string) => void
}

type UseUpdateAclReturn = {
  /** The ResourceAccess list that is being updated. It will automatically be sorted unless the `add`, `update` or `remove` functions are called. */
  resourceAccessList: ResourceAccess[]
  /** Set the ResourceAccess list. Does not prevent re-sorting */
  setResourceAccessList: Dispatch<SetStateAction<ResourceAccess[]>>
  /** Adds a principal to the list with the provided accessTypes */
  addResourceAccessItem: (
    principalId: number,
    accessTypes: ACCESS_TYPE[],
  ) => void
  /** Updates the principal in the list with the provided accessTypes */
  updateResourceAccessItem: (
    principalId: number,
    accessType: ACCESS_TYPE[],
  ) => void
  /** Removes the principal from the list */
  removeResourceAccessItem: (principalId: number) => void
  /** Resets the dirty state of the form, which will immediately trigger sorting the resourceAccessList */
  resetDirtyState: () => void
}

const EMPTY_ARRAY: ResourceAccess[] = []

export default function useUpdateAcl(
  options: UseUpdateAclOptions = {},
): UseUpdateAclReturn {
  const {
    initialResourceAccessList = EMPTY_ARRAY,
    onChange = noop,
    onError = noop,
  } = options
  const [isDirty, setIsDirty] = useState(false)
  const [resourceAccessList, setResourceAccessList] = useState<
    ResourceAccess[]
  >(initialResourceAccessList)
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
  }, [onChange, resourceAccessList])

  const addResourceAccessItem = useCallback(
    (principalId: number, accessTypes: ACCESS_TYPE[]) => {
      setIsDirty(true)
      if (principalId) {
        setResourceAccessList(resourceAccessList => {
          const alreadyReviewer = resourceAccessList.some(
            resourceAccess => resourceAccess.principalId === principalId,
          )
          if (alreadyReviewer) {
            onError(PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE)
          } else {
            const newResourceAccess: ResourceAccess = {
              principalId: principalId,
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
    resourceAccessList,
    setResourceAccessList,
    addResourceAccessItem,
    updateResourceAccessItem,
    removeResourceAccessItem,
    resetDirtyState,
  }
}
