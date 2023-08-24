import {
  Entity,
  EntityHeader,
  PaginatedResults,
  ProjectHeader,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import mockFile from './mockFileEntity'
import mockProject from './mockProject'

const MOCK_PROJECT_ID = mockProject.id
const mockProjectEntity = mockProject.entity
const mockFileEntityHeader = mockFile.entityHeader

export const MOCK_FOLDER_ID = `syn20000`
export const MOCK_INVALID_PROJECT_NAME = 'A $@*#$% terribly named Project'

export const mockFolderEntity: Entity = {
  id: MOCK_FOLDER_ID,
  parentId: MOCK_PROJECT_ID,
  name: 'my folder name',
  concreteType: 'org.sagebionetworks.repo.model.Folder',
}

export const mockFolderEntityHeader: EntityHeader = {
  id: mockFolderEntity.id!,
  name: mockFolderEntity.name,
  type: mockFolderEntity.concreteType,
  versionNumber: 1,
  versionLabel: 'Version label',
  benefactorId: 1234,
  createdOn: '',
  modifiedOn: '',
  createdBy: '', // TODO: Replace with a valid mock user ID
  modifiedBy: '',
  isLatestVersion: true,
}

export const mockPaginatedEntityHeaders: PaginatedResults<EntityHeader> = {
  totalNumberOfResults: 2,
  results: [mockFileEntityHeader, mockFolderEntityHeader],
}

export const mockProjectHeader: ProjectHeader = {
  id: mockProjectEntity.id,
  name: mockProjectEntity.name,
  lastActivity: '2022-02-03T12:44:35.457Z',
  modifiedOn: mockProjectEntity.modifiedOn,
  modifiedBy: MOCK_USER_ID,
}
