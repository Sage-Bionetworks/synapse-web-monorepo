import {
  Dataset,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  DatasetCollection,
  DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE,
  Entity,
  ENTITY_CONCRETE_TYPE,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_TYPE_MASK_FILE,
  EntityHeader,
  EntityType,
  EntityView,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FOLDER_CONCRETE_TYPE_VALUE,
  Hit,
  LINK_CONCRETE_TYPE_VALUE,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
  MaterializedView,
  PROJECT_CONCRETE_TYPE_VALUE,
  ProjectHeader,
  Reference,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  SubmissionView,
  Table,
  TABLE_CONCRETE_TYPE_VALUES,
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
  TableEntity,
  VersionableEntity,
  View,
  VIEW_CONCRETE_TYPE_VALUES,
  VIRTUAL_TABLE_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import { isTypeViaConcreteTypeFactory } from '../types/IsType'

export function getEntityTypeFromHeader(
  header:
    | Pick<EntityHeader, 'name' | 'id' | 'type'>
    | EntityHeader
    | ProjectHeader
    | Hit,
) {
  // Hit has the `node_type` field which is what we already want.
  if ((header as Hit).node_type) {
    return (header as Hit).node_type
  }
  // ProjectHeader doesn't have the `type` field, so we can just check that to determine if it's a ProjectHeader
  return (header as EntityHeader).type === undefined
    ? EntityType.PROJECT
    : convertToEntityType((header as EntityHeader).type)
}

export function isContainerType(type: EntityType): boolean {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
      return true
    case EntityType.LINK:
    case EntityType.DOCKER_REPO:
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.ENTITY_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
    case EntityType.MATERIALIZED_VIEW:
    case EntityType.VIRTUAL_TABLE:
      return false
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function isTableType(type: EntityType): boolean {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.LINK:
    case EntityType.DOCKER_REPO:
    case EntityType.FILE:
      return false
    case EntityType.TABLE:
    case EntityType.SUBMISSION_VIEW:
    case EntityType.ENTITY_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
    case EntityType.MATERIALIZED_VIEW:
    case EntityType.VIRTUAL_TABLE:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function entityTypeToFriendlyName(entityType: EntityType): string {
  switch (entityType) {
    case EntityType.PROJECT:
      return 'Project'
    case EntityType.FOLDER:
      return 'Folder'
    case EntityType.FILE:
      return 'File'
    case EntityType.TABLE:
      return 'Table'
    case EntityType.LINK:
      return 'Link'
    case EntityType.ENTITY_VIEW:
      return 'View'
    case EntityType.DOCKER_REPO:
      return 'Docker Repository'
    case EntityType.SUBMISSION_VIEW:
      return 'Submission View'
    case EntityType.DATASET:
      return 'Dataset'
    case EntityType.DATASET_COLLECTION:
      return 'Dataset Collection'
    case EntityType.MATERIALIZED_VIEW:
      return 'Materialized View'
    case EntityType.VIRTUAL_TABLE:
      return 'Virtual Table'
    default:
      console.warn('Entity type could not be mapped to name:', entityType)
      return ''
  }
}

export function convertToEntityType(
  typeString: string | ENTITY_CONCRETE_TYPE | EntityType,
): EntityType {
  switch (typeString) {
    case EntityType.PROJECT:
    case 'org.sagebionetworks.repo.model.Project':
      return EntityType.PROJECT
    case EntityType.FOLDER:
    case 'org.sagebionetworks.repo.model.Folder':
      return EntityType.FOLDER
    case EntityType.FILE:
    case FILE_ENTITY_CONCRETE_TYPE_VALUE:
      return EntityType.FILE
    case EntityType.LINK:
    case 'org.sagebionetworks.repo.model.Link':
      return EntityType.LINK
    case EntityType.DOCKER_REPO:
    case 'org.sagebionetworks.repo.model.docker.DockerRepository':
      return EntityType.DOCKER_REPO
    case EntityType.TABLE:
    case TABLE_ENTITY_CONCRETE_TYPE_VALUE:
      return EntityType.TABLE
    case EntityType.SUBMISSION_VIEW:
    case 'org.sagebionetworks.repo.model.table.SubmissionView':
      return EntityType.SUBMISSION_VIEW
    case EntityType.ENTITY_VIEW:
    case ENTITY_VIEW_CONCRETE_TYPE_VALUE:
      return EntityType.ENTITY_VIEW
    case EntityType.DATASET:
    case DATASET_CONCRETE_TYPE_VALUE:
      return EntityType.DATASET
    case EntityType.DATASET_COLLECTION:
    case DATASET_COLLECTION_CONCRETE_TYPE_VALUE:
      return EntityType.DATASET_COLLECTION
    case EntityType.MATERIALIZED_VIEW:
    case MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE:
      return EntityType.MATERIALIZED_VIEW
    case EntityType.VIRTUAL_TABLE:
    case VIRTUAL_TABLE_CONCRETE_TYPE_VALUE:
      return EntityType.VIRTUAL_TABLE
    default:
      throw new Error(`Unknown entity type: ${typeString}`)
  }
}

export function convertToConcreteEntityType(
  type: EntityType,
): ENTITY_CONCRETE_TYPE {
  switch (type) {
    case EntityType.PROJECT:
      return 'org.sagebionetworks.repo.model.Project'
    case EntityType.FOLDER:
      return 'org.sagebionetworks.repo.model.Folder'
    case EntityType.FILE:
      return 'org.sagebionetworks.repo.model.FileEntity'
    case EntityType.LINK:
      return 'org.sagebionetworks.repo.model.Link'
    case EntityType.DOCKER_REPO:
      return 'org.sagebionetworks.repo.model.docker.DockerRepository'
    case EntityType.TABLE:
      return 'org.sagebionetworks.repo.model.table.TableEntity'
    case EntityType.SUBMISSION_VIEW:
      return 'org.sagebionetworks.repo.model.table.SubmissionView'
    case EntityType.ENTITY_VIEW:
      return 'org.sagebionetworks.repo.model.table.EntityView'
    case EntityType.DATASET:
      return 'org.sagebionetworks.repo.model.table.Dataset'
    case EntityType.DATASET_COLLECTION:
      return 'org.sagebionetworks.repo.model.table.DatasetCollection'
    case EntityType.MATERIALIZED_VIEW:
      return 'org.sagebionetworks.repo.model.table.MaterializedView'
    case EntityType.VIRTUAL_TABLE:
      return 'org.sagebionetworks.repo.model.table.VirtualTable'
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

/**
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/VersionableEntity.html
 * @param type
 * @returns
 */
export function isVersionableEntityType(type: EntityType): boolean {
  switch (type) {
    case EntityType.PROJECT:
    case EntityType.FOLDER:
    case EntityType.LINK:
    case EntityType.DOCKER_REPO:
    case EntityType.SUBMISSION_VIEW: // SubmissionView implements VersionableEntity, but versions aren't supported
    case EntityType.MATERIALIZED_VIEW: // MaterializedView implements VersionableEntity, but versions aren't supported.
    case EntityType.VIRTUAL_TABLE: // VirtualTable implements VersionableEntity, but versions aren't supported.
      return false
    case EntityType.FILE:
    case EntityType.TABLE:
    case EntityType.ENTITY_VIEW:
    case EntityType.DATASET:
    case EntityType.DATASET_COLLECTION:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export const isTable = isTypeViaConcreteTypeFactory<Table, Entity>(
  ...TABLE_CONCRETE_TYPE_VALUES,
)

export const isView = isTypeViaConcreteTypeFactory<View, Entity>(
  ...VIEW_CONCRETE_TYPE_VALUES,
)

export const isTableEntity = isTypeViaConcreteTypeFactory<TableEntity, Entity>(
  TABLE_ENTITY_CONCRETE_TYPE_VALUE,
)

export const isSubmissionView = isTypeViaConcreteTypeFactory<
  SubmissionView,
  Entity
>(SUBMISSION_VIEW_CONCRETE_TYPE_VALUE)

export const isMaterializedView = isTypeViaConcreteTypeFactory<
  MaterializedView,
  Entity
>(MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE)

export const isDataset = isTypeViaConcreteTypeFactory<Dataset, Entity>(
  DATASET_CONCRETE_TYPE_VALUE,
)
export const isDatasetCollection = isTypeViaConcreteTypeFactory<
  DatasetCollection,
  Entity
>(DATASET_COLLECTION_CONCRETE_TYPE_VALUE)

export const isEntityRefCollectionView = (entity: Entity) =>
  isDataset(entity) || isDatasetCollection(entity)

export const isEntityView = isTypeViaConcreteTypeFactory<EntityView, Entity>(
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
)

/**
 * @param entityView
 * @returns true iff the viewTypeMask allows files to appear in the view
 */
export function hasFilesInView(entityView: EntityView) {
  return (entityView.viewTypeMask & ENTITY_VIEW_TYPE_MASK_FILE) != 0
}

/**
 * @param entityView
 * @returns true iff the viewTypeMask allows only files to appear in the view
 */
export function isFileView(entityView: EntityView) {
  return entityView.viewTypeMask === ENTITY_VIEW_TYPE_MASK_FILE
}

export function isVersionableEntity(
  entity: Entity,
): entity is VersionableEntity {
  return isVersionableEntityType(convertToEntityType(entity.concreteType))
}

export function getVersionDisplay(entity: Entity): string {
  if (!isVersionableEntity(entity)) {
    console.warn("Entity isn't versionable:", entity)
    return ''
  }

  if (entity.isLatestVersion) {
    if (!isTable(entity)) {
      // e.g. Files. Always show the version number
      return `${entity.versionNumber!.toString()} (Current)`
    } else if (isDataset(entity)) {
      return 'Draft'
    } else {
      return 'Current'
    }
  } else {
    return entity.versionNumber!.toString()
  }
}

export function normalizeSynPrefix(ref: Reference) {
  return ref.targetId.startsWith('syn') ? ref.targetId : `syn${ref.targetId}`
}

// implemented by https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html
const allEntityKeys: string[] = [
  'name',
  'description',
  'id',
  'etag',
  'createdOn',
  'modifiedOn',
  'createdBy',
  'modifiedBy',
  'parentId',
  'concreteType',
]
// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/VersionableEntity.html
const versionableKeys: string[] = [
  ...allEntityKeys,
  'versionNumber',
  'versionLabel',
  'versionComment',
  'isLatestVersion',
]

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Table.html
const tableKeys: string[] = [...versionableKeys, 'columnIds', 'isSearchEnabled']

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/View.html
const viewKeys: string[] = [...tableKeys]

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/EntityRefCollectionView.html
const entityRefCollectionViewKeys: string[] = [...viewKeys, 'items']

/**
 * A string array of all possible keys used by Synapse in Entity objects (objects that inherit this interface: https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Entity.html).
 * This object is used to determine which fields are standard and which are annotations,
 * so it's important that this object contains all keys in the objects that implement the linked interface above.
 */
export const entityJsonKeys: Record<ENTITY_CONCRETE_TYPE, string[]> = {
  [LINK_CONCRETE_TYPE_VALUE]: [...allEntityKeys, 'linksTo', 'linksToClassName'],
  [DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE]: [
    ...allEntityKeys,
    'repositoryName',
    'isManaged',
  ],
  [FILE_ENTITY_CONCRETE_TYPE_VALUE]: [
    ...versionableKeys,
    'dataFileHandleId',
    'fileNameOverride',
  ],
  [SUBMISSION_VIEW_CONCRETE_TYPE_VALUE]: [...viewKeys, 'scopeIds'],
  [DATASET_CONCRETE_TYPE_VALUE]: [
    ...entityRefCollectionViewKeys,
    'size',
    'checksum',
  ],
  [DATASET_COLLECTION_CONCRETE_TYPE_VALUE]: [...entityRefCollectionViewKeys],
  [ENTITY_VIEW_CONCRETE_TYPE_VALUE]: [
    ...viewKeys,
    'scopeIds',
    'viewTypeMask',
    'type',
  ],
  [TABLE_ENTITY_CONCRETE_TYPE_VALUE]: tableKeys,
  [MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE]: [...tableKeys, 'definingSQL'],
  [VIRTUAL_TABLE_CONCRETE_TYPE_VALUE]: [...tableKeys, 'definingSQL'],
  [FOLDER_CONCRETE_TYPE_VALUE]: allEntityKeys,
  [PROJECT_CONCRETE_TYPE_VALUE]: [...allEntityKeys, 'alias'],
}

type EntityTypeGroupKey = 'ALL_TABLES' | 'CONTAINER'

export const EntityTypeGroup: Record<EntityTypeGroupKey, EntityType[]> = {
  ['ALL_TABLES']: [
    EntityType.TABLE,
    EntityType.ENTITY_VIEW,
    EntityType.SUBMISSION_VIEW,
    EntityType.DATASET,
    EntityType.DATASET_COLLECTION,
    EntityType.MATERIALIZED_VIEW,
    EntityType.VIRTUAL_TABLE,
  ],
  ['CONTAINER']: [EntityType.PROJECT, EntityType.FOLDER],
}
