import { ObjectType } from './ObjectType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/schema/ValidationException.html
export type ValidationException = {
  /** The JSON schema keyword which was violated. */
  keyword: string
  /** A JSON Pointer denoting the path from the input document root to its fragment which caused the validation failure. */
  pointerToViolation: string
  /** The description of the validation failure. */
  message: string
  /** A JSON Pointer denoting the path from the schema JSON root to the violated keyword. */
  schemaLocation: string
  /** An array of sub-exceptions. */
  causingExceptions: Array<ValidationException>
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/schema/ValidationResults.html
export type ValidationResults = {
  objectId: string
  objectType: ObjectType
  objectEtag: string
  schema$id: string
  isValid: boolean
  validatedOn: string
  validationErrorMessage?: string
  allValidationMessages?: Array<string>
  validationException?: ValidationException
}
