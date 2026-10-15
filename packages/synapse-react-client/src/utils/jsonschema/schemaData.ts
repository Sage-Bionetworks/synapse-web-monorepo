import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import { SUBMISSION_CONTEXT_PROPERTY } from '@/utils/jsonschema/submissionContext'
import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
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
 * The title of a generated step, or `Step {position}` for a step without one.
 * @param position the 1-based position of the step among all steps shown to the user
 */
export function getStepTitle(
  step: GeneratedFormStepForRjsf,
  position: number,
): string {
  return typeof step.jsonSchema.title === 'string' && step.jsonSchema.title
    ? step.jsonSchema.title
    : `Step ${position}`
}

/**
 * The payload the server validates. It must declare the type of the request so that context-specific properties are
 * validated against the right branch of the schema.
 */
export function withSubmissionContext(
  schemaData: SchemaData,
  requestType: DataAccessRequestType,
): SchemaData {
  return {
    ...schemaData,
    [SUBMISSION_CONTEXT_PROPERTY]: requestType,
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
