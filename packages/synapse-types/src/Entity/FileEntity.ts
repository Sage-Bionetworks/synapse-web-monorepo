import { VersionableEntity } from './Entity'

export const FILE_ENTITY_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.FileEntity'
export type FILE_ENTITY_CONCRETE_TYPE = typeof FILE_ENTITY_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/FileEntity.html
export interface FileEntity extends VersionableEntity {
  concreteType: FILE_ENTITY_CONCRETE_TYPE
  dataFileHandleId: string // 	ID of the file associated with this entity.
  fileNameOverride?: string // 	An optional replacement for the name of the uploaded file. This is distinct from the entity name. If omitted the file will retain its original name.
}
