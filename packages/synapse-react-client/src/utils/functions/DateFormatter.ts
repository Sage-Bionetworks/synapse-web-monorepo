import SynapseClient from '../../synapse-client'
import dayjs, { Dayjs } from 'dayjs'
import utc from 'dayjs/plugin/utc'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
dayjs.extend(localizedFormat)

export function formatDate(time: Dayjs, pattern?: string): string {
  if (!pattern) {
    // By default, only show timezone if using UTC time
    pattern = 'M/D/YYYY h:mm A'
    if (SynapseClient.getUseUtcTimeFromCookie()) {
      pattern += ' z'
    }
  }
  if (SynapseClient.getUseUtcTimeFromCookie()) {
    return dayjs(time).tz('utc').format(pattern)
  } else {
    return dayjs(time).tz(dayjs.tz.guess()).format(pattern)
  }
}
