import {
  ACCESS_TYPE,
  AnnotationsValueType,
  DoiAssociation,
  EntityBundle,
  EntityHeader,
  EntityJson,
  EntityType,
  ObjectType,
  Project,
  ProjectHeader,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import { generateProject } from '../faker/generateFakeEntity'
import { times } from 'lodash-es'

export const mockProjectIds = times(20).map(i => i + 10001)

const MOCK_PROJECT_ID = `syn10000`
const MOCK_PROJECT_NAME = 'A Mock Project'

export const mockDoiAssociation: DoiAssociation = {
  associationId: '9606623',
  etag: 'ddef9fe1-56b2-42f5-9a3c-db2d6f15401b',
  doiUri: `10.7303/${MOCK_PROJECT_ID}`,
  doiUrl: `https://repo-prod.prod.sagebase.org/repo/v1/doi/locate?id=${MOCK_PROJECT_ID}&type=ENTITY`,
  objectId: MOCK_PROJECT_ID,
  objectType: ObjectType.ENTITY,
  associatedBy: `${MOCK_USER_ID}`,
  associatedOn: '2021-01-04T15:42:18.000Z',
  updatedBy: `${MOCK_USER_ID}`,
  updatedOn: '2021-04-28T18:49:48.000Z',
}

const mockProjectEntity = {
  name: MOCK_PROJECT_NAME,
  id: MOCK_PROJECT_ID,
  etag: '7849ff2c-1c93-4104-adcf-9e6d6b0c50b5',
  createdOn: '2020-11-18T20:05:06.519Z',
  modifiedOn: '2021-05-19T12:44:35.457Z',
  createdBy: `${MOCK_USER_ID}`,
  modifiedBy: `${MOCK_USER_ID}`,
  parentId: 'syn4489',
  concreteType: 'org.sagebionetworks.repo.model.Project',
} satisfies Project

const mockProjectEntityBundle: EntityBundle = {
  entity: mockProjectEntity,
  entityType: EntityType.PROJECT,
  annotations: {
    id: MOCK_PROJECT_ID,
    etag: '7849ff2c-1c93-4104-adcf-9e6d6b0c50b5',
    annotations: {
      projectImage: {
        type: AnnotationsValueType.STRING,
        value: ['69006408'],
      },
      projectDescription: {
        type: AnnotationsValueType.STRING,
        value: ['WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'],
      },
      projectDisplayName: {
        type: AnnotationsValueType.STRING,
        value: ['WWWWWWWWWWWWWWWWWW'],
      },
    },
  },
  permissions: {
    canView: true,
    canEdit: true,
    canAddChild: true,
    canCertifiedUserEdit: true,
    canCertifiedUserAddChild: true,
    isCertifiedUser: true,
    canChangePermissions: true,
    canChangeSettings: true,
    canDelete: true,
    canDownload: true,
    canUpload: true,
    canEnableInheritance: false,
    ownerPrincipalId: MOCK_USER_ID,
    canPublicRead: true,
    canModerate: true,
    canMove: true,
    isEntityOpenData: false,
    isCertificationRequired: true,
  },
  path: {
    path: [
      {
        name: 'root',
        id: 'syn4489',
        type: 'org.sagebionetworks.repo.model.Folder',
      },
      {
        name: 'A Mock Project',
        id: MOCK_PROJECT_ID,
        type: 'org.sagebionetworks.repo.model.Project',
      },
    ],
  },
  hasChildren: true,
  accessControlList: {
    id: MOCK_PROJECT_ID,
    creationDate: '2020-11-18T20:05:06.540Z',
    etag: 'f143bbfd-ba09-4a42-b1e9-f9368777ad9b',
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: [
          ACCESS_TYPE.DELETE,
          ACCESS_TYPE.CHANGE_SETTINGS,
          ACCESS_TYPE.MODERATE,
          ACCESS_TYPE.CHANGE_PERMISSIONS,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.CREATE,
        ],
      },
      {
        principalId: 273948,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: 273949,
        accessType: [ACCESS_TYPE.READ],
      },
    ],
  },
  fileHandles: [],
  rootWikiId: '607416',
  benefactorAcl: {
    id: MOCK_PROJECT_ID,
    creationDate: '2020-11-18T20:05:06.540Z',
    etag: 'f143bbfd-ba09-4a42-b1e9-f9368777ad9b',
    resourceAccess: [
      {
        principalId: MOCK_USER_ID,
        accessType: [
          ACCESS_TYPE.DELETE,
          ACCESS_TYPE.CHANGE_SETTINGS,
          ACCESS_TYPE.MODERATE,
          ACCESS_TYPE.CHANGE_PERMISSIONS,
          ACCESS_TYPE.UPDATE,
          ACCESS_TYPE.READ,
          ACCESS_TYPE.DOWNLOAD,
          ACCESS_TYPE.CREATE,
        ],
      },
      {
        principalId: 273948,
        accessType: [ACCESS_TYPE.READ],
      },
      {
        principalId: 273949,
        accessType: [ACCESS_TYPE.READ],
      },
    ],
  },
  doiAssociation: mockDoiAssociation,
  threadCount: 2,
  restrictionInformation: {
    restrictionLevel: RestrictionLevel.OPEN,
    hasUnmetAccessRequirement: false,
  },
}

const mockProjectEntityHeader: EntityHeader = {
  name: MOCK_PROJECT_NAME,
  id: MOCK_PROJECT_ID,
  type: 'org.sagebionetworks.repo.model.Project',
  versionNumber: 1,
  versionLabel: '1',
  benefactorId: 12345,
  isLatestVersion: true,
  createdOn: mockProjectEntity.createdOn,
  modifiedOn: mockProjectEntity.modifiedOn,
  createdBy: mockProjectEntity.createdBy,
  modifiedBy: mockProjectEntity.modifiedBy,
}

const mockProjectHeader: ProjectHeader = {
  id: MOCK_PROJECT_ID,
  name: MOCK_PROJECT_NAME,
  lastActivity: '2021-04-28T18:49:48.000Z',
  modifiedBy: parseInt(mockProjectEntity.modifiedBy),
  modifiedOn: mockProjectEntity.modifiedOn,
}

const mockProjectJson: EntityJson = {
  name: MOCK_PROJECT_NAME,
  id: MOCK_PROJECT_ID,
  etag: mockProjectEntity.etag,
  createdOn: mockProjectEntity.createdOn,
  modifiedOn: mockProjectEntity.modifiedOn,
  createdBy: mockProjectEntity.createdBy,
  modifiedBy: mockProjectEntity.modifiedBy,
  parentId: 'syn4489',
  concreteType: 'org.sagebionetworks.repo.model.Project',
}

const mockProjectEntityData = {
  id: MOCK_PROJECT_ID,
  name: MOCK_PROJECT_NAME,
  entity: mockProjectEntity,
  bundle: mockProjectEntityBundle,
  entityHeader: mockProjectEntityHeader,
  projectHeader: mockProjectHeader,
  json: mockProjectJson,
} satisfies MockEntityData<Project>

const generatedProjectsEntityData = mockProjectIds.map(id => {
  if (`syn${id}` === MOCK_PROJECT_ID) {
    return mockProjectEntityData
  }
  return generateProject(undefined, id)
})

export const mockProjects: Project[] = generatedProjectsEntityData.map(
  projectData => projectData.entity,
)

export const mockProjectsEntityData: MockEntityData<Project>[] = [
  mockProjectEntityData,
  ...generatedProjectsEntityData,
]

export default mockProjectEntityData
