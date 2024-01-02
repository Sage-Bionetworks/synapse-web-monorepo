import ACCESS_TYPE from '../ACCESS_TYPE'
import { ACCESS_REQUIREMENT_CONCRETE_TYPE } from './AccessRequirement'

export type AccessRequirementSearchSort = {
  field: 'CREATED_ON' | 'NAME'
  direction: 'ASC' | 'DESC'
}

export interface AccessRequirementSearchRequest {
  /** Optional substring used to filter Access Requirements by name */
  nameContains?: string
  /** Optional list of ids used to filter access requirements with specific ids. */
  ids?: number[]
  /** Optional id used to filter Access Requirements to retrieve only those that have been applied within a particular project. */
  relatedProjectId?: string
  /** Optional principal ID used to filter Access Requirements to retrieve only those that can be reviewed by the specific reviewer. */
  reviewerId?: string
  /** The enumeration of possible permission. */
  accessType?: ACCESS_TYPE
  sort?: AccessRequirementSearchSort[]
  /** A token used to get the next page of a particular search query. */
  nextPageToken?: string
}

export type AccessRequirementSearchResult = {
  /** The id of the AR */
  id: string
  /** The concrete type of the AR */
  type: ACCESS_REQUIREMENT_CONCRETE_TYPE
  /** The creation date of the AR */
  createdOn: string
  /** The last modification date of the AR */
  modifiedOn: string
  /** The name of the AR */
  name: string
  /** The current revision of the AR */
  version: string
  /** List of project ids which the AR is direclty or inderectly applied to */
  relatedProjectIds: string[]
  /** List of principal ids that are allowed to review the AR submissions */
  reviewerIds: string[]
}

export type AccessRequirementSearchResponse = {
  /** The results of an access requirement search */
  results: AccessRequirementSearchResult[]
  /** A token used to get the next page of a particular search */
  nextPageToken?: string
}
