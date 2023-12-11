import { z } from 'zod'

/**
 * Validates and converts a value to a valid Synapse INTEGER value
 */
export const integerSchema = z
  .union([
    z
      .string()
      // Transform empty string to null
      .transform(data => (data === '' ? null : data)),
    z.null(),
    z.number().int(),
  ])
  .pipe(z.union([z.null(), z.coerce.number().int()]))
