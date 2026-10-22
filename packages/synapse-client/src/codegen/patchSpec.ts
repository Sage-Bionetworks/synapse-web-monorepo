import { isDeepStrictEqual } from 'node:util'

type SchemaObject = {
  $ref?: string
  properties?: Record<string, SchemaObject>
}

type OpenApiSpec = {
  components: { schemas: Record<string, SchemaObject> }
}

const COHORT_DEFINITION =
  'org.sagebionetworks.repo.model.table.CohortDefinition'
const QUERY = 'org.sagebionetworks.repo.model.table.Query'
const schemaRef = (schemaName: string) => `#/components/schemas/${schemaName}`

/**
 * Corrects known defects in the published OpenAPI spec text before code generation. Only the defective values are
 * rewritten, so the result differs from the published text only where it was corrected. Each correction is a no-op
 * once the backend publishes a fixed spec, and can then be removed.
 *
 * @throws if a correction cannot be applied without changing anything else
 */
export function patchSpec(specText: string): string {
  const spec = JSON.parse(specText) as OpenApiSpec

  // PLFM-10051: the backend schema types CohortDefinition.query as "$recursiveRef": "#" (the enclosing Query), but the
  // published spec references CohortDefinition. Generated clients would then serialize a cohort's query as a
  // CohortDefinition, dropping its sql and filters. Remove this correction once the fixed spec is published.
  const cohortQuery =
    spec.components.schemas[COHORT_DEFINITION]?.properties?.query
  if (cohortQuery?.$ref !== schemaRef(COHORT_DEFINITION)) {
    return specText
  }
  const defectiveRef = JSON.stringify(schemaRef(COHORT_DEFINITION))
  // The quoted schema name only matches the schema's key: references to it are prefixed with "#/components/schemas/".
  const schemaStart = specText.indexOf(JSON.stringify(COHORT_DEFINITION))
  const refStart = specText.indexOf(
    defectiveRef,
    specText.indexOf('"query"', schemaStart),
  )
  const patchedText =
    specText.slice(0, refStart) +
    JSON.stringify(schemaRef(QUERY)) +
    specText.slice(refStart + defectiveRef.length)

  cohortQuery.$ref = schemaRef(QUERY)
  if (!isDeepStrictEqual(JSON.parse(patchedText), spec)) {
    throw new Error(
      `patchSpec: could not correct ${COHORT_DEFINITION}.query without changing other values`,
    )
  }
  return patchedText
}
