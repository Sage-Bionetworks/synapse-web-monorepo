import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetUserProfile } from '../../synapse-queries'
import { Activity } from '@sage-bionetworks/synapse-types'
import { Tooltip } from '@mui/material'
import { Typography } from '@mui/material'
import { UserCardSmall } from '../UserCard/UserCardSmall'

export const ActivityNodeLabel = (data: Activity) => {
  const { data: userProfile } = useGetUserProfile(data.modifiedBy)
  const friendlyModifiedOn = formatDate(dayjs(data.modifiedOn))
  const { name, description } = data
  return useMemo(
    () => (
      <>
        {name && (
          <Tooltip title={name} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="name">
                {name}
              </Typography>
            </span>
          </Tooltip>
        )}
        {description && (
          <Tooltip title={description} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="description">
                {description}
              </Typography>
            </span>
          </Tooltip>
        )}
        {userProfile && <UserCardSmall userProfile={userProfile} />}
        <div>{friendlyModifiedOn}</div>
      </>
    ),
    [name, description, userProfile, friendlyModifiedOn],
  )
}
