import { Query } from './Query'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryBundleRequest.html
export type QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest'
  entityId: string
  query: Query
  partMask: number
}
