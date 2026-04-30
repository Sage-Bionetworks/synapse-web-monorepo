import { Skeleton } from '@mui/material'
import { UserGroupHeader } from '@sage-bionetworks/synapse-types'
import TeamBadge from '../TeamBadge'
import { UserBadge } from '../UserCard/UserBadge'
import { useUserOrTeam } from './useUserOrTeam'

export type UserOrTeamBadgeProps = {
  /* The principal ID of the user or team. Required if userGroupHeader is undefined. */
  principalId?: string | number
  /* The userGroupHeader of the user or team. Required if principalId is undefined. */
  userGroupHeader?: UserGroupHeader
  showFullName?: boolean
  disableHref?: boolean
  showCardOnHover?: boolean
  openLinkInNewTab?: boolean
}

export default function UserOrTeamBadge(props: UserOrTeamBadgeProps) {
  const {
    principalId,
    disableHref,
    showCardOnHover,
    showFullName,
    userGroupHeader: providedUserGroupHeader,
    openLinkInNewTab,
  } = props

  const { userGroupHeader } = useUserOrTeam(
    principalId,
    providedUserGroupHeader,
  )

  const resolvedPrincipalId = principalId ?? providedUserGroupHeader?.ownerId

  if (resolvedPrincipalId == null && providedUserGroupHeader == null) {
    console.error(
      'Expected one of principalId or userGroupHeader to be defined but both were null or undefined',
    )
    return <></>
  } else if (userGroupHeader === undefined) {
    return <Skeleton width={125} height={30} />
  } else if (userGroupHeader.isIndividual) {
    return (
      <UserBadge
        userId={resolvedPrincipalId!.toString()}
        disableLink={disableHref}
        showFullName={showFullName}
        showCardOnHover={showCardOnHover}
        openLinkInNewTab={openLinkInNewTab}
      />
    )
  } else {
    return (
      <TeamBadge
        teamId={resolvedPrincipalId!}
        teamName={userGroupHeader.userName}
        disableHref={disableHref}
        openLinkInNewTab={openLinkInNewTab}
      />
    )
  }
}
