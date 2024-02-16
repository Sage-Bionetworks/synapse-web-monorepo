import { EntityHeader } from './EntityHeader'
import { EntityType } from './EntityType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entity/SortBy.html
export enum SortBy {
  NAME = 'NAME',
  CREATED_ON = 'CREATED_ON',
  MODIFIED_ON = 'MODIFIED_ON',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entity/Direction.html
export enum Direction {
  ASC = 'ASC',
  DESC = 'DESC',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityChildrenRequest.html
export type EntityChildrenRequest = {
  parentId?: string
  nextPageToken?: string | null
  includeTypes: Array<EntityType>
  sortBy?: SortBy
  sortDirection?: Direction
  includeTotalChildCount?: boolean
  includeSumFileSizes?: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityChildrenResponse.html
export type EntityChildrenResponse = {
  page: EntityHeader[]
  nextPageToken: string | undefined
  totalChildCount?: number
  sumFileSizesBytes?: number
}
