import { Reference } from '../index'
import { Entity } from './Entity'

export const LINK_CONCRETE_TYPE_VALUE = 'org.sagebionetworks.repo.model.Link'
export type LINK_CONCRETE_TYPE = typeof LINK_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
export interface Link extends Entity {
  concreteType: LINK_CONCRETE_TYPE
  /** JSON schema for Reference POJO */
  linksTo: Reference
  /** The synapse Entity's class name that this link points to. */
  linksToClassName: string
}
