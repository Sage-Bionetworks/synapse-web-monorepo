import { RJSFSchema } from '@rjsf/utils'
import { toPascalCase } from '@/utils/functions/toPascalCase'
import { JsonSchemaVersionInfo } from '@sage-bionetworks/synapse-client'

/**
 * The registered schema every FormTemplate schema extends. It declares the reserved
 * `x-synapse-submissionContext` property. The version is pinned: moving to a newer base schema
 * requires deciding how templates that reference this version are migrated.
 */
export const ACCESS_REQUIREMENT_BASE_SCHEMA_ID =
  'org.sagebionetworks-AccessRequirementBaseSchema-1.0.0'

/** The JSON Schema organization that FormTemplate schemas are registered under. */
export const FORM_TEMPLATE_SCHEMA_ORGANIZATION = 'org.sagebionetworks.act'

const FALLBACK_SCHEMA_NAME = 'FormTemplate'

/** A registered schema's name, qualified by its organization; every version shares it. */
export type SchemaName = { organizationName: string; schemaName: string }

/**
 * The organization and schema name that a template's schema versions are registered under.
 * An existing template keeps those of the schema it already references, so renaming the
 * template does not start registering under a new schema name. A new template derives the
 * schema name from its name.
 */
export function resolveFormTemplateSchemaName(
  templateName: string,
  existingSchema$id?: string,
): SchemaName {
  if (existingSchema$id) {
    // A schema $id is `<organization>-<schemaName>-<version>`; neither of the first two may
    // contain a dash.
    const [organizationName, schemaName] = existingSchema$id.split('-')
    return { organizationName, schemaName }
  }
  // Schema names only allow letters and digits and must start with a letter.
  const pascalCase = toPascalCase(templateName)
  return {
    organizationName: FORM_TEMPLATE_SCHEMA_ORGANIZATION,
    schemaName: /^[A-Za-z]/.test(pascalCase)
      ? pascalCase
      : `${FALLBACK_SCHEMA_NAME}${pascalCase}`,
  }
}

/**
 * The `$id` of a schema version: `<organization>-<schemaName>-<version>`. Without a version,
 * the unversioned `<organization>-<schemaName>` prefix shared by every version.
 */
export function formatSchema$id(name: SchemaName, version?: string) {
  const unversioned$id = `${name.organizationName}-${name.schemaName}`
  return version ? `${unversioned$id}-${version}` : unversioned$id
}

/**
 * The version to register next under a schema name: one major version above the highest
 * registered version, or `1.0.0` when none is registered yet.
 */
export function getNextSchemaVersion(
  registeredVersions: JsonSchemaVersionInfo[],
): string {
  const highestMajor = Math.max(
    0,
    ...registeredVersions.map(v =>
      Number.parseInt(v.semanticVersion?.split('.')[0] ?? '0', 10),
    ),
  )
  return `${highestMajor + 1}.0.0`
}

/** The schema a new FormTemplate starts from: no fields beyond those of the base schema. */
export function createNewFormTemplateSchema(): RJSFSchema {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    allOf: [{ $ref: ACCESS_REQUIREMENT_BASE_SCHEMA_ID }],
  }
}
