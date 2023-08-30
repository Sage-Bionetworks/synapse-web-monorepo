import dayjs from 'dayjs'
import React from 'react'
import { Typography } from '@mui/material'
import { useAtomValue } from 'jotai'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { tableQueryDataAtom } from '../QueryWrapper/QueryWrapper'

export default function LastUpdatedOn() {
  const data = useAtomValue(tableQueryDataAtom)
  const { showLastUpdatedOn } = useQueryVisualizationContext()
  return showLastUpdatedOn && data && data.lastUpdatedOn ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="body1Italic">
        Last updated on {formatDate(dayjs(data.lastUpdatedOn))}
      </Typography>
    </div>
  ) : (
    <></>
  )
}
