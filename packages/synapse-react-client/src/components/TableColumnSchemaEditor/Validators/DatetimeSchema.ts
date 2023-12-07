import { z } from 'zod'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

const dateTimeString = z.string().transform(data => {
  // Note: can't use parseInt on a timestamp! "2000-01-01T00:00:00Z" will be parsed as 2000
  const isInt = data.match(/^\d+$/)
  if (isInt) {
    return dayjs.utc(parseInt(data))
  }
  return dayjs.utc(data).toISOString()
})

/**
 * Validates and converts a value to a valid Synapse DATE value
 */
export const dateTimeSchema = z
  .union([z.number(), dateTimeString, z.date()])
  .transform(timestampMs => dayjs(timestampMs).toISOString())
