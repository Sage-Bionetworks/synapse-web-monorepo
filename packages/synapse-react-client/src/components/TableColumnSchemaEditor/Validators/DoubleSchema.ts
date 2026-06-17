import { z } from 'zod'

/**
 * Accepts any JavaScript number, including NaN and +/-Infinity. In zod 4, `z.number()`
 * only accepts finite values, but Synapse DOUBLE columns support NaN and +/- Infinity (as strings).
 */
const anyNumberSchema = z.custom<number>(val => typeof val === 'number')

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
      code: 'custom',
      message: 'Must be a number',
    })
    return z.NEVER
  }
  return parsed
})

/**
 * Validates and converts a value to a valid Synapse DOUBLE value. Zod will return an error if the value cannot be converted to a number.
 */
export const doubleSchema = z
  .union([anyNumberSchema, doubleString])
  .transform((val): string | number => {
    // JSON does not support NaN/Infinity, but Synapse does if they are strings
    if (typeof val !== 'number') {
      return val
    }
    if (isNaN(val)) {
      return 'NaN'
    }
    if (val === Infinity) {
      return 'Infinity'
    }
    if (val === -Infinity) {
      return '-Infinity'
    }
    return val
  })
