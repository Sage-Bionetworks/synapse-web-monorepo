import { View } from './View'

export const ENTITY_VIEW_TYPE_MASK_FILE = 0x01
export const ENTITY_VIEW_TYPE_MASK_PROJECT = 0x02
export const ENTITY_VIEW_TYPE_MASK_TABLE = 0x04
export const ENTITY_VIEW_TYPE_MASK_FOLDER = 0x08
export const ENTITY_VIEW_TYPE_MASK_VIEW = 0x10
export const ENTITY_VIEW_TYPE_MASK_DOCKER = 0x20
export const ENTITY_VIEW_TYPE_MASK_SUBMISSIONVIEW = 0x40
export const ENTITY_VIEW_TYPE_MASK_DATASET = 0x80

export const ENTITY_VIEW_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.EntityView'
export type ENTITY_VIEW_CONCRETE_TYPE = typeof ENTITY_VIEW_CONCRETE_TYPE_VALUE

export interface EntityView extends View {
  concreteType: ENTITY_VIEW_CONCRETE_TYPE
  /** The list of container ids that define the scope of this view. */
  scopeIds: string[]
  /** Bit mask representing the types to include in the view. The following are the possible types (type=): File=0x01, Project=0x02, Table=0x04, Folder=0x08, View=0x10, Docker=0x20. */
  viewTypeMask: number
}
