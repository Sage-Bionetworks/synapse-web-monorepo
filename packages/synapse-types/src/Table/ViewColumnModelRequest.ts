import { ViewScope } from './ViewScope'

/**
 * An asynchronous request to compute the column models from the annotations in a given scope, note that the result
 * won't include the default column model.
 */
export type ViewColumnModelRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.ViewColumnModelRequest'
  /* List of parent IDs that define a view scope. */
  viewScope: ViewScope
  /* If true will include colum models that map to annotations that are derived from the schemas of the entities in the scope */
  includeDerivedAnnotations: boolean
  /* Optional token used to retrieve subsequent pages, returned as part of the ViewColumnModelResponse */
  nextPageToken?: string | null
}
