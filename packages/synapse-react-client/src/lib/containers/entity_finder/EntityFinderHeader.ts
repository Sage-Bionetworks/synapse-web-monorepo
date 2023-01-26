import {
  EntityHeader,
  ProjectHeader,
  PROJECT_CONCRETE_TYPE,
} from '../../utils/synapseTypes'

/**
 * The entity header fields that also exist in a search Hit. We convert Hits to this object so fields can be accessed consistently within the Entity Finder.
 */
export type EntityHeaderFromHit = Omit<
  EntityHeader,
  'benefactorId' | 'isLatestVersion'
>

/**
 * The EntityHeader fields that also exist in a project header. ProjectHeaders will be converted to match this type.
 */
export type EntityHeaderFromProjectHeader = Omit<
  ProjectHeader,
  'lastActivity'
> & { type: PROJECT_CONCRETE_TYPE }

/**
 * Collection of all entity objects used in the Entity Finder component. The Entity Finder is compatible with multiple APIs that return slightly different objects, so this type is used to represent all of them.
 *
 * The entity finder uses
 *  - EntityHeader
 *  - ProjectHeader
 *  - Hit (which we transform to an EntityHeader)
 *
 */
export type EntityFinderHeader =
  | EntityHeader
  | EntityHeaderFromProjectHeader
  | EntityHeaderFromHit
