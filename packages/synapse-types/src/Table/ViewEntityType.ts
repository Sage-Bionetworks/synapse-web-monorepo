import { EntityType } from '../EntityType'

/**
 * Subset of EntityType for views
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/ViewEntityType.html
 */
export type ViewEntityType =
  | EntityType.ENTITY_VIEW
  | EntityType.SUBMISSION_VIEW
  | EntityType.DATASET
  | EntityType.DATASET_COLLECTION
