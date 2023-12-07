import { z } from 'zod'

/**
 * Validates and converts a value to a valid Synapse ENTITYID value
 */
export const entityIdSchema = z.union([
  z.string().regex(/^(syn)?\d+$/),
  z.number().int(),
])
