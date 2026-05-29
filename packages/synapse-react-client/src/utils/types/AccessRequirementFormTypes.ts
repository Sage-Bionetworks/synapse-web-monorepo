/**
 * Types for the JSON Schema-based Access Requirements prototype.
 * These types are local to synapse-react-client and correspond to the
 * design document: designs/FormTemplate.md
 *
 * These types are NOT in synapse-types because the backend does not exist yet.
 *
 * Mental model:
 *   JsonSchemaAccessRequirement → references FormTemplate (by id + version)
 *   FormTemplate                → pins one registered JSON Schema (by $id + semanticVersion)
 *                                 and contains an ordered list of FormTemplateSteps
 *   FormTemplateStep            → has a title/description and an ordered list of FormTemplateFields
 *   FormTemplateField           → binds a JSON pointer in the schema to a UI definition
 */

import { RJSFSchema, UiSchema } from '@rjsf/utils'

/**
 * Controls whether a field appears (and its underlying schema property is
 * collected) for an initial REQUEST, a RENEWAL, or both.
 */
export enum SubmissionContext {
  ALWAYS = 'ALWAYS',
  REQUEST_ONLY = 'REQUEST_ONLY',
  RENEWAL_ONLY = 'RENEWAL_ONLY',
}

/** Whether a given submission/draft is for an initial request or a renewal. */
export type SubmissionRequestType = 'REQUEST' | 'RENEWAL'

/** Reference to a registered JSON Schema and version. */
export type JsonSchemaVersionInfo = {
  $id: string
  semanticVersion: string
}

/**
 * A single field slot in a FormTemplateStep. Maps a JSON pointer in the
 * referenced schema to a UI definition. No internal id, name, or rank — the
 * field's identity is its `schemaPath`, and its order is its position in the
 * step's `fields` array.
 */
export type FormTemplateField = {
  /** JSON pointer (RFC 6901) into the template's referenced schema (e.g. `/institution`). */
  schemaPath: string
  /** RJSF uiSchema for this slot. */
  uiDefinition: UiSchema
  /** Default is ALWAYS. */
  submissionContext: SubmissionContext
  /**
   * For slots whose target schema property uses the `synapse-filehandle-id`
   * format, an optional FileHandle ID for a downloadable template file.
   */
  templateFileHandleId?: number
}

/**
 * A logical grouping of fields in a FormTemplate. Steps are part of the
 * FormTemplate version; changes produce a new template version.
 */
export type FormTemplateStep = {
  title: string
  description?: string
  fields: FormTemplateField[]
}

/**
 * A versioned, ACT-managed object describing how a referenced JSON Schema is
 * rendered to a requester as a multi-step form. Pinned to one schema version.
 */
export type FormTemplate = {
  id: string
  name: string
  etag: string
  versionNumber: number
  schemaRef: JsonSchemaVersionInfo
  steps: FormTemplateStep[]
  deprecated: boolean
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
}

/** Reference to a specific FormTemplate id and version. */
export type FormTemplateReference = {
  templateId: string
  templateVersionNumber: number
}

/**
 * A JSON Schema Access Requirement. References exactly one FormTemplate
 * version, whose pinned schema is the AR's data contract.
 */
export type JsonSchemaAccessRequirement = {
  id: number
  name: string
  etag: string
  versionNumber: number
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  concreteType: 'org.sagebionetworks.repo.model.JsonSchemaAccessRequirement'
  formTemplateRef: FormTemplateReference
  /** After an AccessApproval is granted, it expires after this many milliseconds. 0 = never. */
  expirationPeriod: number
  /** If true, accessor must be a Synapse Certified User. */
  isCertifiedUserRequired: boolean
  /** If true, accessor must have a validated Synapse profile. */
  isValidatedProfileRequired: boolean
  /** If true, accessor must enable two-factor authentication. */
  isTwoFaRequired: boolean
}

export const JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.JsonSchemaAccessRequirement' as const

/**
 * One step in the generated form schema response — the (jsonSchema, uiSchema)
 * pair the UI needs to render that step. Step title/description are encoded
 * as `jsonSchema.title` / `jsonSchema.description` per the design.
 */
export type GenerateDataAccessSchemaStep = {
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
}

/** Response from the schema generation service. */
export type GenerateDataAccessSchemaResponse = {
  steps: GenerateDataAccessSchemaStep[]
}

/**
 * A user's saved, in-progress submission for a JsonSchemaAccessRequirement.
 * Drafts hold partial, unvalidated data. At most one draft per (user, AR).
 */
export type SchemaDataDraft = {
  accessRequirement: {
    accessRequirementId: string
    accessRequirementVersionNumber: number
  }
  requestType: SubmissionRequestType
  submissionData?: Record<string, unknown>
  modifiedOn?: string
}
