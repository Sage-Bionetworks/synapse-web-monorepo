import { formatDate } from '@/utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { UserBadge } from '../UserCard/UserBadge'

export type CreatedOnByUserDivProps = {
  userId: string
  date: Date
}

export function CreatedOnByUserDiv(props: CreatedOnByUserDivProps) {
  const { userId, date } = props
  return (
    <div className="created-on">
      <span>Created on {formatDate(dayjs(date))} by </span>
      <UserBadge userId={userId} />
    </div>
  )
}
