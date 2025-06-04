import UserOrTeamBadge from '../../UserOrTeamBadge'
import { Stack } from '@mui/material'

export type UserIdListProps = {
  userIds: string[]
}

function UserIdList(props: UserIdListProps) {
  const { userIds } = props

  return (
    <Stack
      sx={{
        gap: 1,
      }}
    >
      {userIds.map(userId => (
        <UserOrTeamBadge key={userId} principalId={userId} />
      ))}
    </Stack>
  )
}

export default UserIdList
