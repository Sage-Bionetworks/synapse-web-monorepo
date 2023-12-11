import { z } from 'zod'

/**
 * Schema that converts strings to valid Synapse DOUBLE values. Zod will return an error if the string cannot be parsed as a number.
 */
const doubleString = z.string().transform((data, ctx) => {
  // Synapse permits NaN/Infinity, so we can keep these strings
  if (['NaN', 'Infinity', '-Infinity'].includes(data)) {
    return data
  }
  const parsed = Number(data)
  // If the parse result is NaN, then this was not a valid number
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.invalid_type,
      expected: 'number',
      received: 'string',
      path: [],
      message: 'Must be a number',
    })
  }
  return parsed
})

/**
 * Validates and converts a value to a valid Synapse DOUBLE value. Zod will return an error if the value cannot be converted to a number.
 */
export const doubleSchema = z
  .union([z.number(), z.nan(), doubleString])
  .transform((val): string | number => {
    if (typeof val === 'number') {
      // JSON does not support NaN/Infinity, but Synapse does if they are strings
      if (isNaN(val)) {
        return 'NaN'
      } else if (val === Infinity) {
        return 'Infinity'
      } else if (val === -Infinity) {
        return '-Infinity'
      }
      return val
    }
    return val
  })
