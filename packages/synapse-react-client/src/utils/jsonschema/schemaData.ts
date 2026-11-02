import type { GeneratedFormStepForRjsf } from '@/utils/jsonschema/generateDataAccessSchema'
import {
  contextAppliesForRequestType,
  listResolvedSchemaProperties,
  SUBMISSION_CONTEXT_PROPERTY,
} from '@/utils/jsonschema/submissionContext'
import { RJSFSchema } from '@rjsf/utils'
import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import isEqual from 'lodash-es/isEqual'
import omit from 'lodash-es/omit'
import pick from 'lodash-es/pick'

export type SchemaData = Record<string, unknown>

export const SYNAPSE_FILE_HANDLE_ID_FORMAT = 'synapse-filehandle-id'
/** The `ui:options` key under which the generated uiSchema of a file field holds the ID of its template file */
export const TEMPLATE_FILE_HANDLE_ID_OPTION = 'templateFileHandleId'
const NUMERIC_ID_PATTERN = /^\d+$/

/**
 * Whether `value` has the shape of a file handle ID. This does not establish what the ID refers to: that comes
 * from the schema declaring a file field. `schemaData` is written by the submitter, so even then only a
 * well-formed ID may be turned into a download request made with another user's credentials. A number must be a
 * safe integer, because a larger one does not keep its digits when converted to the ID string.
 */
export function isFileHandleIdValue(value: unknown): value is string | number {
  if (typeof value === 'number') {
    return Number.isSafeInteger(value) && value >= 0
  }
  return typeof value === 'string' && NUMERIC_ID_PATTERN.test(value)
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
 *
 * Answers to properties that apply only to the other request type are dropped. A renewal starts with the answers of
 * the approved request, and the renewal form does not show a REQUEST_ONLY property, so the requester could neither
 * see nor remove such an answer (or the file it references).
 */
export function withSubmissionContext(
  schema: RJSFSchema,
  schemaData: SchemaData,
  requestType: DataAccessRequestType,
): SchemaData {
  const otherContextKeys = listResolvedSchemaProperties(schema)
    .filter(
      ({ context }) => !contextAppliesForRequestType(context, requestType),
    )
    .map(({ propertyKey }) => propertyKey)
  return {
    ...omit(schemaData, otherContextKeys),
    [SUBMISSION_CONTEXT_PROPERTY]: requestType,
  }
}

/** Whether the file handles that the answers reference differ between two sets of answers. */
export function fileAnswersChanged(
  schema: RJSFSchema,
  previous: SchemaData,
  next: SchemaData,
): boolean {
  return !isEqual(
    getSchemaDataFileHandleIds(schema, previous),
    getSchemaDataFileHandleIds(schema, next),
  )
}
