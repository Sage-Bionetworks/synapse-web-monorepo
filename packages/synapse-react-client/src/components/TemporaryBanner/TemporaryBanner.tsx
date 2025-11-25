import FullWidthAlert from '../FullWidthAlert'
import type { FullWidthAlertProps } from '../FullWidthAlert'

type BaseTemporaryBannerProps = {
  deadline: string
}

export type TemporaryBannerProps = BaseTemporaryBannerProps &
  FullWidthAlertProps

const TemporaryBanner = ({ deadline, ...props }: TemporaryBannerProps) => {
  const trimmedDeadline = deadline.trim()
  const deadlineDate = /^\d{4}-\d{2}-\d{2}$/.test(trimmedDeadline) // date-only pattern YYYY-MM-DD
    ? // Append a local end-of-day timestamp so "YYYY-MM-DD" deadlines last through 11:59 PM.
      new Date(`${trimmedDeadline}T23:59:59.999`)
    : new Date(trimmedDeadline)
  const currentDate = new Date()
  if (isNaN(deadlineDate.getTime())) {
    console.error('TemporaryBanner: Invalid deadline date:', deadline)
    return null
  }
  const isBeforeDeadline = currentDate <= deadlineDate

  if (!isBeforeDeadline) {
    return null
  }
  return <FullWidthAlert {...props} />
}
export default TemporaryBanner
