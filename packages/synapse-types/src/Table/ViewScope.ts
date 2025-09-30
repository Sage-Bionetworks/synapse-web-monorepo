import { ViewEntityType } from '@sage-bionetworks/synapse-client'

/**
 * List of parent IDs that define a view scope.
 */
export type ViewScope = {
  /* Bit mask representing the types to include in the view. The following are the possible types (type=): File=0x01, Project=0x02, Table=0x04, Folder=0x08, View=0x10, Docker=0x20, SubmissionView=0x40, Dataset=0x80, DatasetCollection=0x100, MaterializedView=0x200. */
  viewTypeMask?: number
  /* List of parent IDs that define a view scope. For an entityview the ids should point to entities, for a submissionview the ids should point to evaluation ids */
  scope: string[]
  /* Subset of EntityType for views */
  viewEntityType: ViewEntityType
}
