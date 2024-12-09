import UserOrTeamBadge from '../../UserOrTeamBadge'
import { Box } from '@mui/material'

export type UserIdListProps = {
  userIds: string[]
}

function UserIdList(props: UserIdListProps) {
  const { userIds } = props

  return (
    <p>
      {userIds.map(userId => (
        <Box key={userId}>
          <UserOrTeamBadge principalId={userId} />
        </Box>
      ))}
    </p>
  )
}

export default UserIdList
