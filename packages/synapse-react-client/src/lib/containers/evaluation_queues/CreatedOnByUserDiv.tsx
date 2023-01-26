import UserCard from '../UserCard'
import { SynapseConstants } from '../../utils'
import React from 'react'
import { useSynapseContext } from '../../utils/SynapseContext'

export type CreatedOnByUserDivProps = {
  userId: string
  date: Date
}

const dateFormatOptionLocal: Intl.DateTimeFormatOptions = {
  timeZoneName: 'short',
}
const dateFormatOptionUTC: Intl.DateTimeFormatOptions = {
  timeZone: 'UTC',
  timeZoneName: 'short',
}

export const CreatedOnByUserDiv: React.FunctionComponent<
  CreatedOnByUserDivProps
> = ({ userId, date }) => {
  const { utcTime } = useSynapseContext()
  return (
    <div className="created-on">
      <span>
        Created on{' '}
        {date
          .toLocaleDateString(
            undefined,
            utcTime ? dateFormatOptionUTC : dateFormatOptionLocal,
          )
          .replace(',', '')}{' '}
        by{' '}
      </span>
      <UserCard size={SynapseConstants.SMALL_USER_CARD} ownerId={userId} />
    </div>
  )
}
