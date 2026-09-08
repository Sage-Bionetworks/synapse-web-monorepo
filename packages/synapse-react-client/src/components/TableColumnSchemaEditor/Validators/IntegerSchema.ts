import { z } from 'zod'

/**
 * Validates and converts a value to a valid Synapse INTEGER value
 */
export const integerSchema = z
  .union([
    z
      .string()
      // Transform empty string to null, otherwise convert to a number
      .transform(data => (data === '' ? null : Number(data))),
    z.null(),
    z.number().int(),
  ])
  .pipe(z.union([z.null(), z.number().int()]))
