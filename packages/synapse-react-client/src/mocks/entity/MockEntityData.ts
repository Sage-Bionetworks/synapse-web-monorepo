import {
  Entity,
  EntityJson,
  EntityBundle,
  EntityHeader,
  ProjectHeader,
  EntityPath,
} from '@sage-bionetworks/synapse-types'
import { VersionInfo } from '@sage-bionetworks/synapse-types'

/**
 * Defines the standard set of data that a mock entity should have.
 */
export type MockEntityData<T extends Entity = Entity> = {
  id: string
  name: string
  entity: T
  json?: EntityJson
  bundle?: EntityBundle
  path?: EntityPath
  versions?: Record<number, T>
  versionInfo?: VersionInfo[]
  entityHeader?: EntityHeader
  projectHeader?: ProjectHeader
}
