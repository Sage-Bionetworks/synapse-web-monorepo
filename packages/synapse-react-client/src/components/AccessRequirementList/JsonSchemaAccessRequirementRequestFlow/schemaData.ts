import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { RJSFSchema } from '@rjsf/utils'
import pick from 'lodash-es/pick'

export type SchemaData = Record<string, unknown>

const SYNAPSE_FILE_HANDLE_ID_FORMAT = 'synapse-filehandle-id'

function getStepPropertyKeys(step: GeneratedFormStepForRjsf): string[] {
  return Object.keys(step.jsonSchema.properties ?? {})
}

/** The answers that belong to the given step. */
export function getStepData(
  schemaData: SchemaData,
  step: GeneratedFormStepForRjsf,
): SchemaData {
  return pick(schemaData, getStepPropertyKeys(step))
}

/**
 * The payload the server validates. It must declare whether the request is a renewal so that context-specific
 * properties are validated against the right branch of the schema.
 */
export function withSubmissionContext(
  schemaData: SchemaData,
  isRenewal: boolean,
): SchemaData {
  return {
    ...schemaData,
    [SUBMISSION_CONTEXT_PROPERTY]: isRenewal ? 'RENEWAL' : 'REQUEST',
  }
}

/** The titles of the file upload fields, which the request form cannot yet collect. */
export function getFileUploadFieldTitles(
  steps: GeneratedFormStepForRjsf[],
): string[] {
  return steps.flatMap(step =>
    Object.entries(step.jsonSchema.properties ?? {})
      .filter(
        ([, property]) =>
          (property as RJSFSchema).format === SYNAPSE_FILE_HANDLE_ID_FORMAT,
      )
      .map(([key, property]) => (property as RJSFSchema).title ?? key),
  )
}
