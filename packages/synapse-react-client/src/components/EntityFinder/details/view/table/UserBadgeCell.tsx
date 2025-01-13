import { UserBadge } from '../../../../UserCard/UserBadge'

export function UserBadgeCell({ cellData }: { cellData?: string }) {
  return cellData ? (
    <UserBadge userId={cellData} openLinkInNewTab={true} />
  ) : (
    <></>
  )
}
