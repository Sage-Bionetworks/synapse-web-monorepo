import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useGetUserGroupHeader } from '../utils/hooks/SynapseAPI/user/useUserGroupHeader'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import { useSynapseContext } from '../utils/SynapseContext'
import { UserGroupHeader } from '../utils/synapseTypes'
import TeamBadge from './TeamBadge'
import UserCard from './UserCard'

type UserOrTeamBadgeProps = {
  /* The principal ID of the user or team. Required if userGroupHeader is undefined. */
  principalId?: string | number
  /* The userGroupHeader of the user or team. Required if principalId is undefined. */
  userGroupHeader?: UserGroupHeader
  showFullName?: boolean
  disableHref?: boolean
  showCardOnHover?: boolean
}

export default function UserOrTeamBadge(props: UserOrTeamBadgeProps) {
  let principalId = props.principalId
  const {
    disableHref,
    showCardOnHover,
    showFullName,
    userGroupHeader: providedUserGroupHeader,
  } = props

  if (principalId == null) {
    principalId = providedUserGroupHeader?.ownerId
  }

  const { accessToken } = useSynapseContext()
  const [userGroupHeader, setUserGroupHeader] = useState<
    UserGroupHeader | undefined
  >(providedUserGroupHeader)

  const { data: fetchedUserGroupHeader } = useGetUserGroupHeader(
    (principalId ?? '').toString(),
    {
      enabled: !providedUserGroupHeader,
    },
  )

  useEffect(() => {
    if (principalId && userGroupHeader == undefined && fetchedUserGroupHeader) {
      setUserGroupHeader(fetchedUserGroupHeader)
    }
  }, [accessToken, principalId, userGroupHeader, fetchedUserGroupHeader])

  if (principalId == null && providedUserGroupHeader == null) {
    console.error(
      'Expected one of principalId or userGroupHeader to be defined but both were null or undefined',
    )
    return <></>
  } else if (userGroupHeader === undefined) {
    return <Skeleton width={125} height={30} />
  } else if (userGroupHeader.isIndividual) {
    return (
      <UserCard
        ownerId={principalId!.toString()}
        size={SMALL_USER_CARD}
        disableLink={disableHref}
        showFullName={showFullName}
        showCardOnHover={showCardOnHover}
      />
    )
  } else {
    return (
      <TeamBadge
        teamId={principalId!}
        teamName={userGroupHeader.userName}
        disableHref={disableHref}
      />
    )
  }
}
