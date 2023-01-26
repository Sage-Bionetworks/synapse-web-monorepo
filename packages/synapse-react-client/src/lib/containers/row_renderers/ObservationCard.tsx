import * as React from 'react'
import UserCard from '../UserCard'
import IconSvg from '../IconSvg'
import { ShowMore } from './utils'
import { UnitType } from 'dayjs'
import { Skeleton } from '@mui/material'
import { SkeletonTable } from '../../assets/skeletons/SkeletonTable'

type ObservationCardSchema = {
  submitterName: string
  submitterUserId: string
  time: string
  timeUnits: UnitType
  text: string
  tag: string
}

export type ObservationCardProps = {
  schema: ObservationCardSchema
  data: Record<ObservationCardSchema[keyof ObservationCardSchema], string>
}

/**
 * Specialized Observation Card, initially implemented for the NF portal.
 * Expects the following columns: submitterName, submitterUserId, time, timeUnits, text, and tag.
 */
export const ObservationCard: React.FunctionComponent<ObservationCardProps> = ({
  data,
  schema,
}: ObservationCardProps) => {
  const submitterName = data[schema.submitterName]
  const submitterUserId = data[schema.submitterUserId]
  const time = data[schema.time]
  const timeUnits = data[schema.timeUnits] as UnitType
  const text = data[schema.text]
  const tag = data[schema.tag]
  return (
    <div className="SRC-portalCard ObservationCard">
      <div className="ObservationCard__submitter">
        {!submitterUserId && <div>{submitterName}</div>}
        {submitterUserId && (
          <UserCard size={'SMALL USER CARD'} ownerId={submitterUserId} />
        )}
      </div>
      {time && (
        <div className="ObservationCard__time">
          <IconSvg icon="time" />
          <span>
            {`${time} ${timeUnits}`}
            {Number(time) > 1 ? 's' : ''}
          </span>
        </div>
      )}
      <div className="ObservationCard__text">
        <ShowMore summary={text} />
      </div>
      <div className="ObservationCard__tags">
        {tag && <span className="SRC-tag">{tag}</span>}
      </div>
    </div>
  )
}

export const LoadingObservationCard: React.FunctionComponent = () => {
  return (
    <div className="SRC-portalCard ObservationCard">
      <div className="ObservationCard__submitter">
        <span>
          <Skeleton width="100px" />
        </span>
      </div>
      <div className="ObservationCard__time">
        <IconSvg icon="time" />
      </div>
      <div className="ObservationCard__text">
        <SkeletonTable numCols={1} numRows={4} />
      </div>
      <div className="ObservationCard__tags">
        <Skeleton width="80px" />
      </div>
    </div>
  )
}
