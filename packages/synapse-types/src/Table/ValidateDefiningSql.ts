import { EntityType } from '../EntityType'

/*
 * https://rest-docs.synapse.org/rest/POST/validateDefiningSql.html
 */
export type ValidateDefiningSqlResponse = {
  isValid: boolean
  invalidReason?: string
}

export type ValidateDefiningSqlRequest = {
  sql: string
  entityType: EntityType
}
