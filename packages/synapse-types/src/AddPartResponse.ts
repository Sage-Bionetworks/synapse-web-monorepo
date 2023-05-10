// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/file/AddPartResponse.html

export type AddPartResponse = {
  uploadId: string
  partNumber: number
  addPartState: 'ADD_SUCCESS' | 'ADD_FAILED'
  errorMessage: string
}
