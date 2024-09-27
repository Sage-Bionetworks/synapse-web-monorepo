import dayjs from 'dayjs'
import React from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import ShowMore from '../ShowMore'

export type FeaturedToolCardProps = {
  id: string
  name: string
  description: string
  type: string
  date?: string
  toolDetailPageURL?: string
  url?: string
}

export const FeaturedToolCard: React.FunctionComponent<
  FeaturedToolCardProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  id,
  name,
  description,
  type,
  toolDetailPageURL,
  date,
  url,
  ...domProps
}) => {
  return (
    <div
      {...domProps}
      className={`cardContainer FeaturedToolCard ${domProps.className ?? ''}`}
    >
      <div className="FeaturedToolCard__Type">
        <span className="SRC-tag">{type}</span>
      </div>
      {date && (
        <div className="FeaturedToolCard__Date">
          {formatDate(dayjs(parseInt(date)), 'MMMM YYYY')}
        </div>
      )}
      <div className="FeaturedToolCard__Name">{name}</div>
      <div className="FeaturedToolCard__Description">
        <ShowMore summary={description} />
      </div>
      <a
        className="FeaturedToolCard__Link"
        href={toolDetailPageURL ? `${toolDetailPageURL}${id}` : url}
      >
        View Tool
      </a>
    </div>
  )
}
