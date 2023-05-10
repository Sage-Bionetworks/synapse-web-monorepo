import { FILE_ENTITY_CONCRETE_TYPE_VALUE } from './FileEntity'
import { LINK_CONCRETE_TYPE } from './Link'
import { DOCKER_REPOSITORY_CONCRETE_TYPE } from '../docker/DockerRepository'
import { TABLE_CONCRETE_TYPE_VALUES } from '../Table/ConcreteType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html

export interface Entity {
  /** The name of this entity? */
  name: string
  /** The description of this entity. */
  description?: string
  /** The unique immutable ID for this entity. A new ID will be generated for new Entities. Once issued, this ID is guaranteed to never change or be re-issued */
  readonly id?: string
  /** Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an entity is out-of-date. */
  readonly etag?: string
  /** The date this entity was created. */
  readonly createdOn?: string
  /** The date this entity was last modified. */
  readonly modifiedOn?: string
  /** The ID of the user that created this entity. */
  readonly createdBy?: string
  /** The ID of the user that last modified this entity. */
  readonly modifiedBy?: string
  /** The ID of the Entity that is the parent of this Entity. */
  parentId?: string
  /** Indicates which implementation of Entity this object represents. */
  readonly concreteType: ENTITY_CONCRETE_TYPE
}

export const FOLDER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.Folder'
export type FOLDER_CONCRETE_TYPE = typeof FOLDER_CONCRETE_TYPE_VALUE

export const PROJECT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.Project'
export type PROJECT_CONCRETE_TYPE = typeof PROJECT_CONCRETE_TYPE_VALUE

// This is not a real object in Synapse, merely a collection of potential string values to represent the "concreteType" field on Entities
export type ENTITY_CONCRETE_TYPE =
  | LINK_CONCRETE_TYPE
  | DOCKER_REPOSITORY_CONCRETE_TYPE
  | VERSIONABLE_ENTITY_CONCRETE_TYPE
  | FOLDER_CONCRETE_TYPE
  | PROJECT_CONCRETE_TYPE

export interface Versionable {
  /* The version number issued to this version on the object */
  versionNumber?: number
}

export const VERSIONABLE_ENTITY_CONCRETE_TYPE_VALUES = [
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  ...TABLE_CONCRETE_TYPE_VALUES,
] as const

export type VERSIONABLE_ENTITY_CONCRETE_TYPE =
  (typeof VERSIONABLE_ENTITY_CONCRETE_TYPE_VALUES)[number]

export interface VersionableEntity extends Entity, Versionable {
  /* The version label for this entity */
  versionLabel?: string
  /* The version comment for this entity */
  versionComment?: string
  /* If this is the latest version of the object */
  isLatestVersion?: boolean
  concreteType: VERSIONABLE_ENTITY_CONCRETE_TYPE
}

// Possible value types in an entity JSON object.
export type EntityJsonValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[]
  | undefined

// Entity data returned as in https://docs.synapse.org/rest/GET/entity/id/json.html
// Not comprehensive, but we don't need it to be, since we currently only use JSON for annotations.
export interface EntityJson extends Record<string, EntityJsonValue> {
  name: string
  id: string
  etag: string
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  parentId: string
  concreteType: ENTITY_CONCRETE_TYPE
  versionNumber?: number
  versionLabel?: string
  isLatestVersion?: boolean
  dataFileHandleId?: string
}
