import React from 'react'
import { Box } from '@mui/material'
import UserOrTeamBadge from '../../UserOrTeamBadge'

export type UserIdListProps = {
  userIds: string[]
}

function UserIdList(props: UserIdListProps) {
  const { userIds } = props

  return (
    <span>
      {userIds.map(userId => (
        <Box key={userId} sx={{ mx: 2 }}>
          <UserOrTeamBadge principalId={userId} />
        </Box>
      ))}
    </span>
  )
}

export default UserIdList
