import { isTypeViaConcreteTypeFactory } from '@/utils/types/IsType'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  Dataset,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  DatasetCollection,
  DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE,
  Entity,
  Entity as Entity_OpenAPI,
  ENTITY_CONCRETE_TYPE,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_TYPE_MASK_FILE,
  EntityHeader,
  EntityView,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FOLDER_CONCRETE_TYPE_VALUE,
  Hit,
  LINK_CONCRETE_TYPE_VALUE,
  MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE,
  MaterializedView,
  PROJECT_CONCRETE_TYPE_VALUE,
  ProjectHeader,
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

export function getEntityTypeFromHeader(
  header:
    | Pick<EntityHeader, 'name' | 'id' | 'type'>
    | EntityHeader
    | ProjectHeader
    | Hit,
): EntityType {
  // Hit has the `node_type` field which is what we already want.
  if ((header as Hit).node_type) {
    return (header as Hit).node_type
  }
  // ProjectHeader doesn't have the `type` field, so we can just check that to determine if it's a ProjectHeader
  return (header as EntityHeader).type === undefined
    ? EntityType.project
    : convertToEntityType((header as EntityHeader).type)
}

export function isContainerType(type: EntityType): boolean {
  switch (type) {
    case EntityType.project:
    case EntityType.folder:
      return true
    case EntityType.link:
    case EntityType.dockerrepo:
    case EntityType.file:
    case EntityType.recordset:
    case EntityType.table:
    case EntityType.submissionview:
    case EntityType.entityview:
    case EntityType.dataset:
    case EntityType.datasetcollection:
    case EntityType.materializedview:
    case EntityType.virtualtable:
      return false
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function isTableType(type: EntityType): boolean {
  switch (type) {
    case EntityType.project:
    case EntityType.folder:
    case EntityType.link:
    case EntityType.dockerrepo:
    case EntityType.file:
    case EntityType.recordset:
      return false
    case EntityType.table:
    case EntityType.submissionview:
    case EntityType.entityview:
    case EntityType.dataset:
    case EntityType.datasetcollection:
    case EntityType.materializedview:
    case EntityType.virtualtable:
      return true
    default:
      throw new Error(`Unknown entity type: ${type}`)
  }
}

export function entityTypeToFriendlyName(entityType: EntityType): string {
  switch (entityType) {
    case EntityType.project:
      return 'Project'
    case EntityType.folder:
      return 'Folder'
    case EntityType.file:
      return 'File'
    case EntityType.table:
      return 'Table'
    case EntityType.link:
      return 'Link'
    case EntityType.entityview:
      return 'View'
    case EntityType.dockerrepo:
      return 'Docker Repository'
    case EntityType.submissionview:
      return 'Submission View'
    case EntityType.dataset:
      return 'Dataset'
    case EntityType.datasetcollection:
      return 'Dataset Collection'
    case EntityType.materializedview:
      return 'Materialized View'
    case EntityType.virtualtable:
      return 'Virtual Table'
    case EntityType.recordset:
      return 'Record Set'
    default:
      console.warn('Entity type could not be mapped to name:', entityType)
      return ''
  }
}

export function convertToEntityType(
  typeString: string | ENTITY_CONCRETE_TYPE | EntityType,
): EntityType {
  if (Object.values(EntityType).includes(typeString as EntityType)) {
    return typeString as EntityType
  }
  switch (typeString) {
    case 'org.sagebionetworks.repo.model.Project':
      return EntityType.project
    case 'org.sagebionetworks.repo.model.Folder':
      return EntityType.folder
    case FILE_ENTITY_CONCRETE_TYPE_VALUE:
      return EntityType.file
    case 'org.sagebionetworks.repo.model.Link':
      return EntityType.link
    case 'org.sagebionetworks.repo.model.docker.DockerRepository':
      return EntityType.dockerrepo
    case TABLE_ENTITY_CONCRETE_TYPE_VALUE:
      return EntityType.table
    case 'org.sagebionetworks.repo.model.table.SubmissionView':
      return EntityType.submissionview
    case ENTITY_VIEW_CONCRETE_TYPE_VALUE:
      return EntityType.entityview
    case DATASET_CONCRETE_TYPE_VALUE:
      return EntityType.dataset
    case DATASET_COLLECTION_CONCRETE_TYPE_VALUE:
      return EntityType.datasetcollection
    case MATERIALIZED_VIEW_CONCRETE_TYPE_VALUE:
      return EntityType.materializedview
    case VIRTUAL_TABLE_CONCRETE_TYPE_VALUE:
      return EntityType.virtualtable
    case 'org.sagebionetworks.repo.model.RecordSet':
      return EntityType.recordset
    default:
      throw new Error(`Unknown entity type: ${typeString}`)
  }
}

export function convertToConcreteEntityType(
  type: EntityType,
): Entity_OpenAPI['concreteType'] {
  switch (type) {
    case EntityType.project:
      return 'org.sagebionetworks.repo.model.Project'
    case EntityType.folder:
      return 'org.sagebionetworks.repo.model.Folder'
    case EntityType.file:
      return 'org.sagebionetworks.repo.model.FileEntity'
    case EntityType.link:
      return 'org.sagebionetworks.repo.model.Link'
    case EntityType.dockerrepo:
      return 'org.sagebionetworks.repo.model.docker.DockerRepository'
    case EntityType.table:
      return 'org.sagebionetworks.repo.model.table.TableEntity'
    case EntityType.submissionview:
      return 'org.sagebionetworks.repo.model.table.SubmissionView'
    case EntityType.entityview:
      return 'org.sagebionetworks.repo.model.table.EntityView'
    case EntityType.dataset:
      return 'org.sagebionetworks.repo.model.table.Dataset'
    case EntityType.datasetcollection:
      return 'org.sagebionetworks.repo.model.table.DatasetCollection'
    case EntityType.materializedview:
      return 'org.sagebionetworks.repo.model.table.MaterializedView'
    case EntityType.virtualtable:
      return 'org.sagebionetworks.repo.model.table.VirtualTable'
    case EntityType.recordset:
      return 'org.sagebionetworks.repo.model.RecordSet'
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
    case EntityType.project:
    case EntityType.folder:
    case EntityType.link:
    case EntityType.dockerrepo:
    case EntityType.submissionview: // SubmissionView implements VersionableEntity, but versions aren't supported
    case EntityType.materializedview: // MaterializedView implements VersionableEntity, but versions aren't supported.
    case EntityType.virtualtable: // VirtualTable implements VersionableEntity, but versions aren't supported.
      return false
    case EntityType.file:
    case EntityType.recordset:
    case EntityType.table:
    case EntityType.entityview:
    case EntityType.dataset:
    case EntityType.datasetcollection:
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

export const isEntityRefCollectionView = (
  entity: Entity,
): entity is Dataset | DatasetCollection =>
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

/**
 * Given an entityId, returns the entity ID with the `syn` prefix.
 * If the entity already has the `syn` prefix, the entityId will not be changed
 * @param entityId
 */
export function normalizeSynPrefix(entityId: string) {
  if (entityId.toLowerCase().startsWith('syn')) {
    return entityId.toLowerCase()
  }
  return `syn${entityId}`
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
    'count',
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
  ['org.sagebionetworks.repo.model.RecordSet']: [
    ...versionableKeys,
    'upsertKey',
    'csvDescriptor',
  ],
  'org.sagebionetworks.repo.model.Preview': [
    /* unused */
  ],
  'org.sagebionetworks.repo.model.ExampleEntity': [
    /* unused */
  ],
}

type EntityTypeGroupKey = 'ALL_TABLES' | 'CONTAINER'

export const EntityTypeGroup: Record<EntityTypeGroupKey, EntityType[]> = {
  ['ALL_TABLES']: [
    EntityType.table,
    EntityType.entityview,
    EntityType.submissionview,
    EntityType.dataset,
    EntityType.datasetcollection,
    EntityType.materializedview,
    EntityType.virtualtable,
  ],
  ['CONTAINER']: [EntityType.project, EntityType.folder],
}
