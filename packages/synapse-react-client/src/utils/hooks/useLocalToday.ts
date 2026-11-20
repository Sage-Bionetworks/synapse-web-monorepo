import dayjs from 'dayjs'
import { useEffect, useReducer } from 'react'
import { localToday } from '@/utils/functions/DateTimeUtils'

/**
 * Today's calendar date in the user's local time zone, as `YYYY-MM-DD`. The component
 * re-renders at local midnight, so the date stays current on a page left open overnight.
 */
export function useLocalToday(): string {
  const today = localToday()
  const [, rerender] = useReducer((count: number) => count + 1, 0)
  useEffect(() => {
    const now = dayjs()
    const timer = setTimeout(
      rerender,
      now.add(1, 'day').startOf('day').diff(now),
    )
    return () => clearTimeout(timer)
  }, [today])
  return today
}
