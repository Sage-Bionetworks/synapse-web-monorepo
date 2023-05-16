/**
 * JSON schema for the TrashEntity POJO. A trashed entity is an entity in the trash can.
 *
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/TrashedEntity.html
 */
export type TrashedEntity = {
  /** The id of the entity. */
  entityId: string
  /** The name of this entity */
  entityName: string
  /** The ID of the user who deleted the entity. */
  deletedByPrincipalId: string
  /** The date and time when the deletion occurred. */
  deletedOn: string
  /** The ID of the original parent before deletion. */
  originalParentId: string
}
