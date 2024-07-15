import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import { noop } from 'lodash-es'

export const PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE =
  'User or team already has permissions.'

type UseUpdateAclOptions = {
  onChange?: (resourceAccessList: ResourceAccess[]) => void
  onError?: (e: string) => void
}

export default function useUpdateAcl(options: UseUpdateAclOptions) {
  const { onChange = noop, onError = noop } = options
  const [resourceAccessList, setResourceAccessList] = useState<
    ResourceAccess[]
  >([])

  useEffect(() => {
    onChange(resourceAccessList)
  }, [resourceAccessList])

  const addResourceAccessItem = (newReviewerId: string | null) => {
    if (newReviewerId) {
      const alreadyReviewer = resourceAccessList.some(
        resourceAccess => resourceAccess.principalId === Number(newReviewerId),
      )
      if (alreadyReviewer) {
        onError(PRINCIPAL_ALREADY_ADDED_ERROR_MESSAGE)
      } else {
        const newResourceAccess: ResourceAccess = {
          principalId: Number(newReviewerId),
          accessType: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
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
    const updatedResourceAccessList = resourceAccessList.map(resourceAccess => {
      return resourceAccess.principalId === principalId
        ? { ...resourceAccess, accessType }
        : resourceAccess
    })
    setResourceAccessList(updatedResourceAccessList)
  }

  const removeResourceAccessItem = (principalId: number) => {
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
