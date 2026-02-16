import {
  useGetCurrentUserProfile,
  useGetUserGroupHeaders,
  useSendMessage,
} from '@/synapse-queries'
import { useRealmPrincipals } from '@/utils/context/RealmPrincipalsContext'
import {
  ResourceAccess,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { useCallback } from 'react'
import { displayToast } from '../ToastMessage'

type UseNotifyNewACLUsersOptions = {
  subject: string
  body: string
  initialResourceAccessList: ResourceAccess[]
  newResourceAccessList: ResourceAccess[]
}

export function shouldNotifyUserInNewResourceAccess(
  principalId: number,
  initialResourceAccessList: ResourceAccess[],
  userGroupHeader: UserGroupHeader,
  currentUserId: string,
  publicPrincipalIds: string[],
): boolean {
  const isInInitialResourceAccess = initialResourceAccessList.some(
    initialResourceAccess => principalId === initialResourceAccess.principalId,
  )
  const isIndividual = userGroupHeader.isIndividual
  const isCurrentUser = String(principalId) === currentUserId
  const isPublic = publicPrincipalIds.includes(String(principalId))

  return (
    !isInInitialResourceAccess && // Is not in the initial list
    isIndividual && // Is an individual, not a team (SWC-1195)
    !isCurrentUser && // do not notify the current user (SWC-5576)
    !isPublic // never try to notify all/public users
  )
}

export default function useNotifyNewACLUsers(
  options: UseNotifyNewACLUsersOptions,
) {
  const { subject, body, initialResourceAccessList, newResourceAccessList } =
    options

  const { authenticatedUsersId, publicGroupId, anonymousUserId } =
    useRealmPrincipals()
  const publicPrincipalIds = [
    authenticatedUsersId,
    publicGroupId,
    anonymousUserId,
  ].filter((id): id is string => id !== undefined)

  const { data: currentUserProfile, isLoading: isLoadingCurrentUserProfile } =
    useGetCurrentUserProfile()
  const { data: userGroupHeaders, isLoading: isLoadingUserGroupHeaders } =
    useGetUserGroupHeaders(
      newResourceAccessList.map(ra => String(ra.principalId)),
    )
  const isLoading = isLoadingCurrentUserProfile || isLoadingUserGroupHeaders

  const { mutate: sendMessage, isPending } = useSendMessage({
    onError: error => {
      displayToast(`New users couldn't be notified: ${error.reason}`)
    },
  })

  const sendNotification = useCallback(() => {
    if (isLoading) {
      console.error(
        'Attempted to send notification before user profile or user group headers were loaded. This should never happen.',
      )
      return
    }
    const usersToNotify = newResourceAccessList
      .filter(newResourceAccess => {
        const userGroupHeader = userGroupHeaders!.find(
          ugh => ugh.ownerId === String(newResourceAccess.principalId),
        )!
        return shouldNotifyUserInNewResourceAccess(
          newResourceAccess.principalId,
          initialResourceAccessList,
          userGroupHeader,
          currentUserProfile!.ownerId,
          publicPrincipalIds,
        )
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
    currentUserProfile,
    initialResourceAccessList,
    isLoading,
    newResourceAccessList,
    publicPrincipalIds,
    sendMessage,
    subject,
    userGroupHeaders,
  ])

  return {
    sendNotification,
    isPending,
    isLoading,
  }
}
