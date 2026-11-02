import { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  listResolvedSchemaProperties,
  SUBMISSION_CONTEXT_PROPERTY,
} from '@/utils/jsonschema/submissionContext'
import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import pick from 'lodash-es/pick'

export type SchemaData = Record<string, unknown>

export const SYNAPSE_FILE_HANDLE_ID_FORMAT = 'synapse-filehandle-id'
const NUMERIC_ID_PATTERN = /^\d+$/

/**
 * Whether `value` has the shape of a file handle ID. This does not establish what the ID refers to: that comes
 * from the schema declaring a file field. `schemaData` is written by the submitter, so even then only a
 * well-formed ID may be turned into a download request made with another user's credentials.
 */
export function isFileHandleIdValue(value: unknown): value is string | number {
  return (
    (typeof value === 'string' || typeof value === 'number') &&
    NUMERIC_ID_PATTERN.test(String(value))
  )
}

/**
 * The file handle IDs that the answers in `schemaData` reference: the top-level properties of `schema` with the
 * `synapse-filehandle-id` format whose answer is a well-formed ID. IDs are strings, in schema property order,
 * without duplicates. Arrays and nested objects are not searched, because a FormTemplate field binds only a
 * top-level property.
 */
export function getSchemaDataFileHandleIds(
  schema: RJSFSchema,
  schemaData: SchemaData,
): string[] {
  const ids = listResolvedSchemaProperties(schema)
    .filter(
      ({ subSchema }) => subSchema.format === SYNAPSE_FILE_HANDLE_ID_FORMAT,
    )
    .map(({ propertyKey }) => schemaData[propertyKey])
    .filter(isFileHandleIdValue)
    .map(String)
  return [...new Set(ids)]
}

/**
 * The attachments that are not already shown as file answers in `schemaData`. Without the schema the answers cannot
 * be identified as files, so every attachment is returned.
 */
export function getAttachmentsNotInSchemaData(
  attachments: string[] | undefined,
  schema: RJSFSchema | undefined,
  schemaData: SchemaData | undefined,
): string[] {
  if (!attachments) {
    return []
  }
  if (!schema || !schemaData) {
    return attachments
  }
  const answerFileHandleIds = new Set(
    getSchemaDataFileHandleIds(schema, schemaData),
  )
  return attachments.filter(id => !answerFileHandleIds.has(id))
}

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
