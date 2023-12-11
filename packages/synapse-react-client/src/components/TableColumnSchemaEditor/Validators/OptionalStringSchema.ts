import { z } from 'zod'

/**
 * Schema for an optional string. Converts empty string to undefined.
 */
export const optionalStringSchema = z
  .string()
  .optional()
  .transform(v => (v === '' ? undefined : v))
