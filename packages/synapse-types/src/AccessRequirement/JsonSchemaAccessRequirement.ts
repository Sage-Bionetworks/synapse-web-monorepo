import ACCESS_TYPE from '../ACCESS_TYPE'
import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'

export const JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE =
  'JSON Schema'
export const JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.JsonSchemaAccessRequirement'
export type JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE =
  typeof JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE

/** A specific FormTemplate id and version. */
export type FormTemplateReference = {
  templateId: string
  templateVersionNumber: number
}

/**
 * An access requirement that collects additional information described by a JSON Schema and rendered using a
 * FormTemplate, on top of the accessor and document flow of a {@link ManagedACTAccessRequirement}.
 */
export type JsonSchemaAccessRequirement = {
  versionNumber: number
  id: number
  name: string
  etag: string
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  subjectsDefinedByAnnotations: boolean
  subjectIds: Array<RestrictableObjectDescriptor>
  accessType: ACCESS_TYPE
  concreteType: JSON_SCHEMA_ACCESS_REQUIREMENT_CONCRETE_TYPE
  isCertifiedUserRequired: boolean
  isValidatedProfileRequired: boolean
  isDUCRequired: boolean
  ducTemplateFileHandleId?: string
  expirationPeriod: number
  isTwoFaRequired: boolean
  eDucTemplateId?: string
  /* The FormTemplate version that describes the form shown to requesters. The template's pinned schema is the data contract. */
  formTemplateRef: FormTemplateReference
}
