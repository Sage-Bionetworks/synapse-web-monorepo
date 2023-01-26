import React from 'react'
import { useGetUserGroupHeaderWithAlias } from '../../../utils/hooks/SynapseAPI'
import UserOrTeamBadge from '../../UserOrTeamBadge'

export type MarkdownUserOrTeamBadgeProps = {
  alias: string
}

export default function MarkdownUserOrTeamBadge(
  props: MarkdownUserOrTeamBadgeProps,
) {
  const { alias } = props
  const { data: userGroupHeader } = useGetUserGroupHeaderWithAlias([alias])

  return userGroupHeader ? (
    <UserOrTeamBadge principalId={userGroupHeader[0].ownerId} />
  ) : (
    <></>
  )
}
