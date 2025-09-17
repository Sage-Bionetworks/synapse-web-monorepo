import { normalizeNumericId } from '@/utils/functions/StringUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  AnnotationsValueType,
  EntityBundle,
  EntityHeader,
  EntityJson,
  EntityPath,
  FileEntity,
  RestrictionLevel,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import {
  MOCK_FILE_HANDLE_ID,
  mockFileHandle,
  mockPreviewFileHandle,
} from '../mock_file_handle'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import mockProject from './mockProject'
import mockProjectEntityData from './mockProject'

const parentId = mockProject.id
const projectName = mockProject.name

export const MOCK_FILE_ENTITY_ID = `syn30000`
export const MOCK_FILE_NAME = 'My mock file entity'

// TODO: Create a mock wiki
const MOCK_WIKI_ID = '45745485'

const mockFileEntity: FileEntity = {
  id: MOCK_FILE_ENTITY_ID,
  parentId: parentId,
  dataFileHandleId: MOCK_FILE_HANDLE_ID,
  name: MOCK_FILE_NAME,
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID_2.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  versionNumber: 3,
  versionLabel: 'a label for version 3',
  isLatestVersion: true,
  createdOn: '2021-03-02T15:05:34.973Z',
  modifiedOn: '2021-03-05T11:31:24.521Z',
}

const mockFileEntityVersionInfo: VersionInfo[] = [
  {
    id: MOCK_FILE_ENTITY_ID,
    modifiedBy: MOCK_USER_ID.toString(),
    versionNumber: 1,
    versionLabel: 'a label for version 1',
    versionComment: 'a comment',
    contentSize: '100',
    contentMd5: 'd836adae5632872014783b05cd2f76d7',
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2021-03-02T15:05:34.973Z',
    isLatestVersion: false,
  },
  {
    id: MOCK_FILE_ENTITY_ID,
    modifiedBy: MOCK_USER_ID.toString(),
    versionNumber: 3,
    versionLabel: 'a label for version 3',
    versionComment: 'a comment about version 3',
    contentSize: '100',
    contentMd5: 'bc91a4a16ccb21944fcee55275dc4574',
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2021-03-05T11:31:24.521Z',
    isLatestVersion: true,
  },
]

const mockFileEntityVersions: Record<number, FileEntity> = {
  3: {
    id: MOCK_FILE_ENTITY_ID,
    parentId: parentId,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
    name: MOCK_FILE_NAME,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    createdBy: MOCK_USER_ID.toString(),
    modifiedBy: MOCK_USER_ID.toString(),
    etag: '00000000-0000-0000-0000-000000000000',
    versionNumber: 3,
    versionLabel: 'a label for version 3',
    isLatestVersion: true,
  },
  1: {
    id: MOCK_FILE_ENTITY_ID,
    parentId: parentId,
    dataFileHandleId: MOCK_FILE_HANDLE_ID,
    name: MOCK_FILE_NAME,
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
    createdBy: MOCK_USER_ID.toString(),
    modifiedBy: MOCK_USER_ID.toString(),
    etag: '00000000-0000-0000-0000-000000000000',
    versionNumber: 1,
    versionLabel: 'a label for version 1',
    isLatestVersion: false,
  },
}

const filePath: EntityPath = {
  path: [
    {
      name: 'root',
      id: 'syn4489',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
    {
      name: projectName,
      id: parentId,
      type: 'org.sagebionetworks.repo.model.Project',
    },
    {
      name: MOCK_FILE_NAME,
      id: MOCK_FILE_ENTITY_ID,
      type: 'org.sagebionetworks.repo.model.FileEntity',
    },
  ],
}

const mockFileEntityBundle: EntityBundle = {
  entity: mockFileEntity,
  entityType: EntityType.file,
  fileHandles: [mockFileHandle, mockPreviewFileHandle],
  annotations: {
    id: MOCK_FILE_ENTITY_ID,
    etag: '00000000-0000-0000-0000-000000000000',
    annotations: {
      myStringKey: {
        type: AnnotationsValueType.STRING,
        value: ['myValue'],
      },
      myIntegerKey: {
        type: AnnotationsValueType.LONG,
        value: [4325435345213, 4321],
      },
      myFloatKey: {
        type: AnnotationsValueType.LONG,
        value: [1.5, 17 / 13],
      },
    },
  },
  rootWikiId: MOCK_WIKI_ID,
  fileName: mockFileEntity.name,
  benefactorAcl: mockProjectEntityData.bundle.accessControlList!,
  permissions: {
    canView: true,
    canEdit: true,
    canMove: true,
    canAddChild: true,
    canCertifiedUserEdit: true,
    canCertifiedUserAddChild: true,
    isCertifiedUser: true,
    canChangePermissions: true,
    canChangeSettings: true,
    canDelete: true,
    canDownload: true,
    canUpload: true,
    canEnableInheritance: true,
    ownerPrincipalId: 3350396,
    canPublicRead: true,
    canModerate: true,
    isCertificationRequired: true,
    isEntityOpenData: false,
    isUserDataContributor: true,
  },
  threadCount: 5,
  path: filePath,
  restrictionInformation: {
    objectId: normalizeNumericId(MOCK_FILE_ENTITY_ID),
    restrictionDetails: [],
    restrictionLevel: RestrictionLevel.OPEN,
    hasUnmetAccessRequirement: false,
  },
  hasChildren: false,
}

const mockFileEntityJson: EntityJson = {
  id: mockFileEntity.id!,
  name: mockFileEntity.name,
  etag: mockFileEntity.etag!,
  createdOn: mockFileEntity.createdOn!,
  modifiedOn: mockFileEntity.modifiedOn!,
  createdBy: mockFileEntity.createdBy!,
  modifiedBy: mockFileEntity.modifiedBy!,
  parentId: 'syn4489',
  concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  myStringKey: 'myValue',
  myIntegerKey: [4325435345213, 4321],
  myFloatKey: [1.5, 17 / 13],
}

const mockFileEntityHeader: EntityHeader = {
  id: mockFileEntity.id!,
  name: mockFileEntity.name,
  type: mockFileEntity.concreteType,
  versionNumber: 3,
  versionLabel: 'a label for version 3',
  benefactorId: 123,
  createdOn: mockFileEntity.createdOn!,
  modifiedOn: mockFileEntity.modifiedOn!,
  createdBy: MOCK_USER_ID.toString(), // TODO: Replace with a valid mock user ID
  modifiedBy: MOCK_USER_ID_2.toString(),
  isLatestVersion: true,
}

const mockFileEntityData = {
  id: MOCK_FILE_ENTITY_ID,
  name: MOCK_FILE_NAME,
  entity: mockFileEntity,
  bundle: mockFileEntityBundle,
  json: mockFileEntityJson,
  versions: mockFileEntityVersions,
  versionInfo: mockFileEntityVersionInfo,
  entityHeader: mockFileEntityHeader,
  path: filePath,
} satisfies MockEntityData<FileEntity>

export default mockFileEntityData
