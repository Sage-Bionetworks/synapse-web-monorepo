import { Skeleton } from '@mui/material'
import React from 'react'
import { useGetUserGroupHeader } from '../../synapse-queries'
import { UserGroupHeader } from '@sage-bionetworks/synapse-types'
import TeamBadge from '../TeamBadge'
import { UserBadge } from '../UserCard/UserBadge'

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
  let principalId = props.principalId
  const {
    disableHref,
    showCardOnHover,
    showFullName,
    userGroupHeader: providedUserGroupHeader,
    openLinkInNewTab,
  } = props

  if (principalId == null) {
    principalId = providedUserGroupHeader?.ownerId
  }

  const { data: fetchedUserGroupHeader } = useGetUserGroupHeader(
    (principalId ?? '').toString(),
    {
      enabled: !providedUserGroupHeader,
    },
  )

  const userGroupHeader = providedUserGroupHeader ?? fetchedUserGroupHeader

  if (principalId == null && providedUserGroupHeader == null) {
    console.error(
      'Expected one of principalId or userGroupHeader to be defined but both were null or undefined',
    )
    return <></>
  } else if (userGroupHeader === undefined) {
    return <Skeleton width={125} height={30} />
  } else if (userGroupHeader.isIndividual) {
    return (
      <UserBadge
        userId={principalId!.toString()}
        disableLink={disableHref}
        showFullName={showFullName}
        showCardOnHover={showCardOnHover}
        openLinkInNewTab={openLinkInNewTab}
      />
    )
  } else {
    return (
      <TeamBadge
        teamId={principalId!}
        teamName={userGroupHeader.userName}
        disableHref={disableHref}
        openLinkInNewTab={openLinkInNewTab}
      />
    )
  }
}
