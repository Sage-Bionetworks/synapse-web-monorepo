import { z } from 'zod'

const stringToBoolean = z.enum(['true', 'false']).transform(v => v === 'true')

/**
 * Validates and converts a value to a valid Synapse BOOLEAN value
 */
export const booleanSchema = z.union([stringToBoolean, z.boolean()])
