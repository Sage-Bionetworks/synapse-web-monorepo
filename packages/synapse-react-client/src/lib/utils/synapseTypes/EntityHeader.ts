import { ENTITY_CONCRETE_TYPE } from './Entity'

/**
 * [EntityHeader | Synapse REST Docs](https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityHeader.html)
 */
export type EntityHeader = {
  /**	The name of the entity */
  name: string
  /**	The id of the entity */
  id: string
  /**	The type of the entity */
  type: ENTITY_CONCRETE_TYPE
  /** The version number of the entity */
  versionNumber?: number
  /**	The user defined version label of the entity */
  versionLabel?: string
  /**	The ID of the entity that this Entity's ACL is inherited from. */
  benefactorId: number
  /**	The date this entity was created. */
  createdOn: string
  /**	The date this entity was last modified. */
  modifiedOn: string
  /**	The ID of the user that created this entity. */
  createdBy: string
  /**	The ID of the user that last modified this entity. */
  modifiedBy: string
  /** If this version is the latest version of the entity */
  isLatestVersion: boolean
}

/**
 * The full path for an entity. Note that the root entity, syn4489, may be included.
 * The docs do not indicate that most fields are omitted from the EntityHeader objects, but our custom type
 * signature captures this.
 *
 * [EntityPath | Synapse REST Docs](https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/EntityPath.html)
 */
export type EntityPath = {
  /*
   * The list of all entities in this entity's path. The first element is the root parent and the last element (n) is
   * the entity.
   */
  path: Pick<EntityHeader, 'name' | 'id' | 'type'>[]
}
