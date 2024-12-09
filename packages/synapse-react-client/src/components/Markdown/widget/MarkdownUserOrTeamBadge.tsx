import { useGetUserGroupHeaderWithAlias } from '../../../synapse-queries'
import UserOrTeamBadge from '../../UserOrTeamBadge/UserOrTeamBadge'

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
