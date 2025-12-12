import { formatDate } from '@/utils/functions/DateFormatter'
import { Skeleton } from '@mui/material'
import { SubmissionInfo } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import { UserBadge } from '../UserCard/UserBadge'

export type SubmissionInfoCardProps = {
  info: SubmissionInfo
}

export function SubmissionInfoCard({ info }: SubmissionInfoCardProps) {
  return (
    <>
      {info && (
        <p className="SubmissionInfoCard">
          <strong> Project Lead: </strong> <span>{info.projectLead}</span>{' '}
          <br />
          <strong> Institution: </strong> <span>{info.institution}</span> <br />
          <strong> Data Access Request Submitted By: </strong>{' '}
          <UserBadge userId={info.submittedBy} /> <br />
          <strong>
            {' '}
            Intended Data Use Statement &#40;accepted on{' '}
            {formatDate(dayjs(info.modifiedOn), 'M/D/YYYY')}&#41;:
          </strong>
          <MarkdownSynapse markdown={info.intendedDataUseStatement} />
          {info.accessorChanges &&
            info.accessorChanges.map(accessorChange => (
              <div key={`${accessorChange.userId}-${accessorChange.type}`}>
                <UserBadge userId={accessorChange.userId} />{' '}
                {accessorChange.type}
              </div>
            ))}
        </p>
      )}
    </>
  )
}

export function LoadingSubmissionInfoCard() {
  return (
    <p className="SubmissionInfoCard">
      <SkeletonTable numCols={1} numRows={4} />
      <Skeleton variant="rectangular" width={'100%'} height={80} />
    </p>
  )
}
