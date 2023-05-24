import type { Entity } from './Entity'

export const FOLDER_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.Folder'
export type FOLDER_CONCRETE_TYPE = typeof FOLDER_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Project.html
export interface Folder extends Entity {
  concreteType: FOLDER_CONCRETE_TYPE
}
