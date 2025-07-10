import { SKIPPED_2FA_REQUIREMENT_TIMESTAMP_LOCALSTORAGE_KEY } from '@/utils/StorageKeys'
import { useLocalStorageValue } from '@react-hookz/web'
import dayjs from 'dayjs'
import { useCallback, useMemo } from 'react'

function isTimestampLessThan24HoursOld(timestamp: string | null): boolean {
  try {
    const twelveHoursAgo = dayjs().subtract(24, 'hours')
    return timestamp !== null && dayjs(timestamp).isAfter(twelveHoursAgo)
  } catch (error) {
    console.error('Error thrown computing timestamp', timestamp, error)
    return false
  }
}
