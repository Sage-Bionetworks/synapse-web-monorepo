import React from 'react'
import { Skeleton } from '@mui/material'
import { SubmissionInfo } from '../utils/synapseTypes/SubmissionInfo'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import UserCard from './UserCard'
import { formatDate } from '../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { SkeletonTable } from '../assets/skeletons/SkeletonTable'
import MarkdownSynapse from './markdown/MarkdownSynapse'

export type SubmissionInfoCardProps = {
  info: SubmissionInfo
}

export const SubmissionInfoCard: React.FunctionComponent<
  SubmissionInfoCardProps
> = ({ info }: SubmissionInfoCardProps) => {
  return (
    <>
      {info && (
        <p className="SubmissionInfoCard">
          <strong> Project Lead: </strong> <span>{info.projectLead}</span>{' '}
          <br />
          <strong> Institution: </strong> <span>{info.institution}</span> <br />
          <strong> Data Access Request Submitted By: </strong>{' '}
          <UserCard ownerId={info.submittedBy} size={SMALL_USER_CARD} /> <br />
          <strong>
            {' '}
            Intended Data Use Statement &#40;accepted on{' '}
            {formatDate(dayjs(info.modifiedOn), 'M/D/YYYY')}&#41;:
          </strong>
          <MarkdownSynapse markdown={info.intendedDataUseStatement} />
          {info.accessorChanges &&
            info.accessorChanges.map(accessorChange => (
              <div key={`${accessorChange.userId}-${accessorChange.type}`}>
                <UserCard
                  ownerId={accessorChange.userId}
                  size={SMALL_USER_CARD}
                />{' '}
                {accessorChange.type}
              </div>
            ))}
        </p>
      )}
    </>
  )
}

export const LoadingSubmissionInfoCard: React.FunctionComponent = () => {
  return (
    <p className="SubmissionInfoCard">
      <SkeletonTable numCols={1} numRows={4} />
      <Skeleton variant="rectangular" width={'100%'} height={80} />
    </p>
  )
}
