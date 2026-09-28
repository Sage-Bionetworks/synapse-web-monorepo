import { RJSFSchema } from '@rjsf/utils'

/**
 * The registered schema every FormTemplate schema extends. It declares the reserved
 * `x-synapse-submissionContext` property. The version is pinned: moving to a newer base schema
 * requires deciding how templates that reference this version are migrated.
 */
export const ACCESS_REQUIREMENT_BASE_SCHEMA_ID =
  'org.sagebionetworks-AccessRequirementBaseSchema-1.0.0'

/** The schema a new FormTemplate starts from: no fields beyond those of the base schema. */
export function createNewFormTemplateSchema(): RJSFSchema {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    allOf: [{ $ref: ACCESS_REQUIREMENT_BASE_SCHEMA_ID }],
  }
}
