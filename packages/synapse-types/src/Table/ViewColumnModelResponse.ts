import { ColumnModel } from './ColumnModel'

/**
 * Response for the ViewColumnModelRequest containing a page of suggested column models
 */
export type ViewColumnModelResponse = {
  concreteType: 'org.sagebionetworks.repo.model.table.ViewColumnModelResponse'
  /* A page of ColumnModels */
  results: ColumnModel[]
  /* If there are more pages of results this token can be used to get the next page. Null if this is the last page. */
  nextPageToken?: string | null
}
