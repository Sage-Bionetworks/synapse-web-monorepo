import {
  Dataset,
  EntityBundle,
  EntityHeader,
  EntityPath,
  EntityType,
  RestrictionLevel,
  VersionInfo,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import mockProjectEntityData from './mockProject'

export const MOCK_DATASET_ENTITY_ID = `syn60000`
export const MOCK_DATASET_NAME = 'A Mocked Dataset'

export const mockDatasetEntity: Dataset = {
  id: MOCK_DATASET_ENTITY_ID,
  parentId: mockProjectEntityData.id,
  name: MOCK_DATASET_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID_2.toString(),
  createdOn: '2020-01-01T00:00:00.000Z',
  modifiedOn: '2020-02-01T00:00:00.000Z',
  versionNumber: 3,
  versionLabel: 'in progress',
  versionComment: 'in progress',
  isLatestVersion: true,
  etag: '00000000-0000-0000-0000-000000000000',
  items: [],
  columnIds: [],
  isSearchEnabled: false,
}

const mockHeader: EntityHeader = {
  id: MOCK_DATASET_ENTITY_ID,
  type: 'org.sagebionetworks.repo.model.table.Dataset',
  name: MOCK_DATASET_NAME,
  benefactorId: parseInt(mockProjectEntityData.id),
  createdOn: '2020-01-01T00:00:00.000Z',
  modifiedOn: '2020-02-01T00:00:00.000Z',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  versionNumber: 3,
  versionLabel: 'in progress',
  isLatestVersion: true,
}

const path: EntityPath = {
  path: [
    {
      name: 'root',
      id: 'syn4489',
      type: 'org.sagebionetworks.repo.model.Folder',
    },
    {
      name: mockProjectEntityData.name,
      id: mockProjectEntityData.id,
      type: 'org.sagebionetworks.repo.model.Project',
    },
    {
      name: MOCK_DATASET_NAME,
      id: MOCK_DATASET_ENTITY_ID,
      type: 'org.sagebionetworks.repo.model.FileEntity',
    },
  ],
}

const versions: Record<number, Dataset> = {
  1: {
    ...mockDatasetEntity,
    versionNumber: 1,
    versionLabel: 'snapshot 1',
    versionComment: '',
    isLatestVersion: false,
  },
  2: {
    ...mockDatasetEntity,
    versionNumber: 2,
    versionLabel: 'snapshot 2',
    versionComment: '',
    isLatestVersion: false,
  },
}

const versionInfo: VersionInfo[] = [
  {
    id: MOCK_DATASET_ENTITY_ID,
    versionNumber: 2,
    versionLabel: 'snapshot 2',
    versionComment: '',
    isLatestVersion: false,
    modifiedBy: MOCK_USER_ID.toString(),
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2022-03-22T18:50:22.336Z',
  },
  {
    id: MOCK_DATASET_ENTITY_ID,
    versionNumber: 1,
    versionLabel: 'snapshot 1',
    versionComment: '',
    isLatestVersion: false,
    modifiedBy: MOCK_USER_ID.toString(),
    modifiedByPrincipalId: MOCK_USER_ID.toString(),
    modifiedOn: '2022-03-22T18:47:34.797Z',
  },
]

const bundle: EntityBundle = {
  accessControlList: { id: '239443242', resourceAccess: [] },
  annotations: {
    id: '34243',
    etag: '00000000-0000-0000-0000-000000000000',
    annotations: {},
  },
  benefactorAcl: { id: '239443242', resourceAccess: [] },
  fileHandles: [],
  hasChildren: false,
  restrictionInformation: {
    restrictionLevel: RestrictionLevel.OPEN,
    hasUnmetAccessRequirement: false,
  },
  threadCount: 0,
  entity: mockDatasetEntity,
  entityType: EntityType.DATASET,
  path: path,
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
  },
}

const mockDatasetData = {
  id: MOCK_DATASET_ENTITY_ID,
  name: MOCK_DATASET_NAME,
  entity: mockDatasetEntity,
  entityHeader: mockHeader,
  path: path,
  bundle: bundle,
  versions: versions,
  versionInfo: versionInfo,
} satisfies MockEntityData<Dataset>

export default mockDatasetData
