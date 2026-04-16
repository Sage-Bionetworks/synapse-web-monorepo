/**
 * Types for the JSON Schema-based Access Requirements prototype.
 * These types are local to synapse-react-client and correspond to the
 * design document: designs/JSON Schema-based Access Requirements.md
 *
 * These types are NOT in synapse-types because the backend does not exist yet.
 */

import { RJSFSchema, UiSchema } from '@rjsf/utils'

/** Defines the logic for how a form field should load data from a prior submission. */
export enum PreFillScope {
  /** Loads the most recent response to this field if a prior submission from this user exists against a specified access requirement. */
  RENEWAL = 'RENEWAL',
  /** Loads the most recent response to this field across all submissions. */
  USER = 'USER',
  /** The most recent response is never loaded. */
  NONE = 'NONE',
}

/** Describes when the field should be included in the schema. */
export enum SubmissionContext {
  /** Field is always included. */
  ALWAYS = 'ALWAYS',
  /** Field is only included for renewal submissions. */
  RENEWAL_ONLY = 'RENEWAL_ONLY',
}

/** Used to reference a specific form field and version. */
export type FormFieldReference = {
  fieldId: string
  fieldVersionNumber: number
  /** Whether this field is required in the context of this access requirement. */
  required: boolean
}

/**
 * Defines a field that is used in a data access request form.
 * Fields are versioned and versions are immutable.
 */
export type FormField = {
  /** The unique identifier of this field. */
  id: string
  /** The internal name of this field (used by ACT to identify and reuse the field). */
  name: string
  /** Optimistic concurrency control tag. */
  etag: string
  /** A JSON Schema that defines this property. */
  schemaDefinition: RJSFSchema
  /** Defines the appearance of this field in the form UI (react-jsonschema-form uiSchema). */
  uiDefinition: UiSchema
  /** Defines the logic for how prior submission data should be loaded. Default is RENEWAL. */
  preFillScope: PreFillScope
  /** The ID of the step this field belongs to. If null, assigned to a default 'General' group. */
  stepId: string | null
  /** Describes when the field should be included in the schema. Default is ALWAYS. */
  submissionContext: SubmissionContext
  /** Determines the order of elements in the form. Lower values appear earlier. */
  orderWeight: number
  /** Marking as deprecated hides from search results by default. Default is false. */
  deprecated: boolean
  /** The version number of this field. */
  versionNumber: number
  /** The date this object was created. */
  createdOn: string
  /** The date this object was last modified. */
  modifiedOn: string
  /** The user that created this object. */
  createdBy: string
  /** The user that last modified this object. */
  modifiedBy: string
}

/**
 * Defines a logical grouping of form fields, typically rendered as a single
 * page or section in a multi-step form.
 */
export type FormStep = {
  /** The unique identifier of this step. */
  id: string
  /** Internal name for ACT management. */
  name: string
  /** Display title shown to the user (e.g. 'Institutional Information'). */
  title: string
  /** Instructions shown at the top of the page/section. */
  description: string
  /** Determines the order of this page relative to other pages. */
  orderWeight: number
}

/**
 * A JSON Schema Access Requirement. Contains a set of form fields which
 * can be composed to define the required responses in a data access request.
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
  /** The set of form fields that describes the required submission data. */
  formFields: FormFieldReference[]
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

/** A single step in the generated form schema response. */
export type GenerateDataAccessSchemaStep = {
  stepId: string | null
  stepTitle: string
  stepDescription: string
  jsonSchema: RJSFSchema
  uiSchema: UiSchema
}

/** Response from the schema generation service. */
export type GenerateDataAccessSchemaResponse = {
  steps: GenerateDataAccessSchemaStep[]
}
