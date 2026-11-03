import { AggregateDataConfiguration } from '@sage-bionetworks/synapse-client'
import { Query } from './Query'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryBundleRequest.html
export type QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest'
  entityId: string
  query: Query
  partMask: number
  // Lets a data manager preview an aggregate-only result: the server applies this configuration as if the caller had aggregate-only access. Ignored for callers who already have aggregate-only access.
  aggregateDataPreview?: AggregateDataConfiguration
}
