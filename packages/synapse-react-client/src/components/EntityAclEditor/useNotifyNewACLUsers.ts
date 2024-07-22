import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  useGetCurrentUserProfile,
  useGetUserGroupHeaders,
  useSendMessage,
} from '../../synapse-queries'
import { PUBLIC_PRINCIPAL_IDS } from '../../utils/SynapseConstants'
import { displayToast } from '../ToastMessage'
import { useCallback } from 'react'

type UseNotifyNewACLUsersOptions = {
  subject: string
  body: string
  initialResourceAccessList: ResourceAccess[]
  newResourceAccessList: ResourceAccess[]
}

export default function useNotifyNewACLUsers(
  options: UseNotifyNewACLUsersOptions,
) {
  const { subject, body, initialResourceAccessList, newResourceAccessList } =
    options

  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: userGroupHeaders, isLoading: isLoadingUserGroupHeaders } =
    useGetUserGroupHeaders(
      newResourceAccessList.map(ra => String(ra.principalId)),
    )
  const { mutate: sendMessage, isPending } = useSendMessage({
    onError: error => {
      displayToast(`New users couldn't be notified: ${error.reason}`)
    },
  })

  const sendNotification = useCallback(() => {
    if (isLoadingUserGroupHeaders) {
      console.error(
        'Attempted to send notification before user group headers were loaded. This should never happen.',
      )
      return
    }
    const usersToNotify = newResourceAccessList
      .filter(newResourceAccess => {
        const isInInitialResourceAccess = initialResourceAccessList.some(
          initialResourceAccess =>
            initialResourceAccess.principalId === newResourceAccess.principalId,
        )
        const isIndividual = userGroupHeaders!.find(
          ugh => ugh.ownerId === String(newResourceAccess.principalId),
        )!.isIndividual
        const isCurrentUser =
          String(newResourceAccess.principalId) === currentUserProfile?.ownerId
        const isPublic = PUBLIC_PRINCIPAL_IDS.includes(
          newResourceAccess.principalId,
        )

        return (
          !isInInitialResourceAccess && // Is not in the initial list
          isIndividual && // Is an individual, not a team (SWC-1195)
          !isCurrentUser && // do not notify the current user (SWC-5576)
          !isPublic
        ) // never try to notify all/public users
      })
      .map(ra => String(ra.principalId))

    if (usersToNotify.length > 0) {
      sendMessage({
        subject,
        body,
        recipients: usersToNotify,
      })
    }
  }, [
    body,
    currentUserProfile?.ownerId,
    initialResourceAccessList,
    isLoadingUserGroupHeaders,
    newResourceAccessList,
    sendMessage,
    subject,
    userGroupHeaders,
  ])

  return {
    sendNotification,
    isPending,
    isLoading: isLoadingUserGroupHeaders,
  }
}
