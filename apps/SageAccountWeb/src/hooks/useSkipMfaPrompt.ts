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

/**
 * Hook to determine if the user has skipped the 2FA prompt recently, and provides a callback to invoke when the user
 * skips MFA.
 *
 * This is temporary code that can be deleted once 2FA is required for all users.
 * @param accountId
 */
export function useSkipMfaPrompt() {
  const { value: lastSkippedTimestamp, set: setTimestamp } =
    useLocalStorageValue<string>(
      SKIPPED_2FA_REQUIREMENT_TIMESTAMP_LOCALSTORAGE_KEY,
    )
  const hasSkipped2faPromptInLast24Hours =
    !!lastSkippedTimestamp &&
    isTimestampLessThan24HoursOld(lastSkippedTimestamp)

  const skip = useCallback(() => {
    const currentTimestamp = new Date().toISOString()
    setTimestamp(currentTimestamp)
  }, [setTimestamp])

  return useMemo(
    () => ({
      hasSkippedRecently: hasSkipped2faPromptInLast24Hours,
      skip,
    }),
    [hasSkipped2faPromptInLast24Hours, skip],
  )
}
