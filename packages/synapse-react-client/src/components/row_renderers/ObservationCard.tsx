import React from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { ShowMore } from './utils'
import { UnitType } from 'dayjs'
import { Link, Skeleton } from '@mui/material'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import { UserBadge } from '../UserCard/UserBadge'

/**
 * Column index values into the row values given provided in "data"
 */
export type ObservationCardSchema = {
  observationSubmitterName: number
  synapseId: number
  observationTime: number
  observationTimeUnits: number
  observationText: number
  observationType: number
  doi: number
}

export type ObservationCardProps = {
  schema: ObservationCardSchema
  data: (string | null)[]
  includePortalCardClass?: boolean
}

/**
 * Specialized Observation Card, initially implemented for the NF portal.
 * Expects the following columns: submitterName, submitterUserId, time, timeUnits, text, and tag.
 */
export const ObservationCard: React.FunctionComponent<ObservationCardProps> = ({
  data,
  schema,
  includePortalCardClass = true,
}: ObservationCardProps) => {
  const submitterName = data[schema.observationSubmitterName]
  const submitterUserId = data[schema.synapseId]
  const time = data[schema.observationTime]
  const timeUnits = data[schema.observationTimeUnits] as UnitType
  const text = data[schema.observationText]
  const tag = data[schema.observationType]
  const tags: string[] = JSON.parse(tag ?? '')
  const doi = data[schema.doi]
  return (
    <div
      className={`ObservationCard ${
        includePortalCardClass ? 'SRC-portalCard' : ''
      }`}
    >
      <div className="ObservationCard__submitter">
        {!submitterUserId && <div>{submitterName}</div>}
        {submitterUserId && <UserBadge userId={submitterUserId} />}
      </div>
      {time && (
        <div className="ObservationCard__time">
          <IconSvg icon="time" />
          <span>{`${time} ${timeUnits}`}</span>
        </div>
      )}
      {text && (
        <div className="ObservationCard__text">
          <ShowMore summary={text} />
        </div>
      )}
      {doi && (
        <div className="ObservationCard__doi">
          <Link href={doi} target="_blank">
            Reference
          </Link>
        </div>
      )}
      <div className="ObservationCard__tags">
        {tag &&
          tags.map((tag, index) => {
            return (
              <span
                key={index}
                className="SRC-tag"
                style={{ marginRight: '5px' }}
              >
                {tag}
              </span>
            )
          })}
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
