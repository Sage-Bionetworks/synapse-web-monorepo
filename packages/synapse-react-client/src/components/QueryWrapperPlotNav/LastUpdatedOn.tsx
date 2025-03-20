import { Skeleton, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { Suspense } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'

function LastUpdatedOn() {
  const { showLastUpdatedOn } = useQueryVisualizationContext()
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()

  return showLastUpdatedOn && queryMetadata && queryMetadata.lastUpdatedOn ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="body1Italic">
        Last updated on {formatDate(dayjs(queryMetadata.lastUpdatedOn))}
      </Typography>
    </div>
  ) : (
    <></>
  )
}

export default function LastUpdatedOnWithSuspense() {
  const { showLastUpdatedOn } = useQueryVisualizationContext()
  if (!showLastUpdatedOn) {
    return <></>
  }
  return (
    <Suspense fallback={<Skeleton width={100}></Skeleton>}>
      <LastUpdatedOn />
    </Suspense>
  )
}
