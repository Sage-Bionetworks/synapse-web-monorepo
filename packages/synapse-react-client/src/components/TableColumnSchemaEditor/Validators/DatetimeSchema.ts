import { z } from 'zod'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

// Accepts a string that is either a UNIX timestamp in milliseconds or in ISO 8601 format, and returns a string in ISO 8601 format
const dateTimeString = z.string().transform(data => {
  // Note: can't use parseInt on a timestamp! "2000-01-01T00:00:00Z" will be parsed as 2000
  const isInt = data.match(/^\d+$/)
  if (isInt) {
    return dayjs.utc(parseInt(data)).toISOString()
  }
  return dayjs.utc(data).toISOString()
})

/**
 * Validates and converts a value to a valid Synapse DATE value
 */
export const dateTimeSchema = z
  .union([z.number(), dateTimeString, z.date()])
  .transform(timestampMs => dayjs(timestampMs).toISOString())
