import { SynapseClient } from '..'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

export function formatDate(
  time: Dayjs,
  pattern: string = 'M/D/YYYY h:mm A',
): string {
  if (SynapseClient.getUseUtcTimeFromCookie()) {
    return dayjs.utc(time).format(pattern) + ' UTC'
  } else {
    return dayjs(time).format(pattern)
  }
}
