// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/query/Row.html
// Note - Purposefully renaming this type from the type that is used on the backend because it conflicts
// with the Row object used for the more commonly used table query servic
export type EvaluationQueryRow = {
  values: string[]
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/query/QueryTableResults.html
export type QueryTableResults = {
  headers: string[]
  rows: EvaluationQueryRow[]
  totalNumberOfResults: number
}
