import React from 'react'
import { formatDate } from '@/utils/functions/DateFormatter'
import { Tooltip, Typography } from '@mui/material'
import { Activity } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { UserBadge } from '../UserCard/UserBadge'

export const ActivityNodeLabel = (data: Activity): React.ReactNode => {
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
        <UserBadge userId={data.modifiedBy} />
        <div>{friendlyModifiedOn}</div>
      </>
    ),
    [name, description, data.modifiedBy, friendlyModifiedOn],
  )
}
