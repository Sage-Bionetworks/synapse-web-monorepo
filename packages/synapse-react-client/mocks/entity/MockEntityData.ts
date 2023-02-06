import {
  Entity,
  EntityJson,
  EntityBundle,
  EntityHeader,
  ProjectHeader,
  EntityPath,
} from '../../src/lib/utils/synapseTypes'
import { VersionInfo } from '../../src/lib/utils/synapseTypes/VersionInfo'

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
