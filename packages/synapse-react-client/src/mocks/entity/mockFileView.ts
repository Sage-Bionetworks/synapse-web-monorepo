import { MOCK_USER_ID } from '../user/mock_user_profile'
import {
  ENTITY_VIEW_TYPE_MASK_FILE,
  EntityHeader,
  EntityView,
} from '@sage-bionetworks/synapse-types'
import mockProject from './mockProject'
import { MockEntityData } from './MockEntityData'
import { MOCK_TABLE_ENTITY_ID } from './mockTableEntity'

export const MOCK_FILE_VIEW_ENTITY_ID = `syn50000`
export const MOCK_FILE_VIEW_NAME = 'Mocked File View'
export const mockFileViewEntity = {
  id: MOCK_FILE_VIEW_ENTITY_ID,
  parentId: mockProject.id,
  name: MOCK_FILE_VIEW_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
  scopeIds: [mockProject.id],
  isSearchEnabled: true,
  versionNumber: 1,
  versionLabel: 'in progress',
  createdOn: '2023-02-09T12:44:35.457Z',
  modifiedOn: '2023-03-17T17:10:36.915Z',
  isLatestVersion: true,
} satisfies EntityView

const mockFileViewEntityHeader: EntityHeader = {
  name: mockFileViewEntity.name,
  id: MOCK_TABLE_ENTITY_ID,
  type: 'org.sagebionetworks.repo.model.table.EntityView',
  versionNumber: mockFileViewEntity.versionNumber,
  versionLabel: mockFileViewEntity.versionLabel,
  benefactorId: parseInt(mockProject.id),
  createdOn: mockFileViewEntity.createdOn,
  modifiedOn: mockFileViewEntity.modifiedOn,
  createdBy: mockFileViewEntity.createdBy,
  modifiedBy: mockFileViewEntity.modifiedBy,
  isLatestVersion: mockFileViewEntity.isLatestVersion,
}

export const mockFileViewData: MockEntityData<EntityView> = {
  id: MOCK_FILE_VIEW_ENTITY_ID,
  name: MOCK_FILE_VIEW_NAME,
  entity: mockFileViewEntity,
  entityHeader: mockFileViewEntityHeader,
}
