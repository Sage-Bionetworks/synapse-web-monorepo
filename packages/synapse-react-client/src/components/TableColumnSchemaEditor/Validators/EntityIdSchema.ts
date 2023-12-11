import { z } from 'zod'

/**
 * Validates and converts a value to a valid Synapse ENTITYID value
 */
export const entityIdSchema = z.union([
  // Matches a string of digits, optionally prefixed with 'syn'
  z.string().regex(/^(syn)?\d+$/),
  z.number().int(),
])
