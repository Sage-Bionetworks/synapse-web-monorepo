import { MOCK_USER_ID } from '../user/mock_user_profile'
import {
  ENTITY_VIEW_TYPE_MASK_PROJECT,
  EntityHeader,
  EntityView,
} from '@sage-bionetworks/synapse-types'
import mockProject from './mockProject'
import { MockEntityData } from './MockEntityData'
import { MOCK_TABLE_ENTITY_ID } from './mockTableEntity'

export const MOCK_PROJECT_VIEW_ENTITY_ID = `syn500001`
export const MOCK_PROJECT_VIEW_NAME = 'Mocked Project View'

export const mockProjectViewEntity = {
  id: MOCK_PROJECT_VIEW_ENTITY_ID,
  parentId: mockProject.id,
  name: MOCK_PROJECT_VIEW_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  viewTypeMask: ENTITY_VIEW_TYPE_MASK_PROJECT,
  scopeIds: [mockProject.id],
  isSearchEnabled: true,
  versionNumber: 1,
  versionLabel: 'in progress',
  createdOn: '2023-02-09T12:44:35.457Z',
  modifiedOn: '2023-03-17T17:10:36.915Z',
  isLatestVersion: true,
} satisfies EntityView

const mockProjectViewEntityHeader: EntityHeader = {
  name: mockProjectViewEntity.name,
  id: MOCK_TABLE_ENTITY_ID,
  type: 'org.sagebionetworks.repo.model.table.TableEntity',
  versionNumber: mockProjectViewEntity.versionNumber,
  versionLabel: mockProjectViewEntity.versionLabel,
  benefactorId: parseInt(mockProject.id),
  createdOn: mockProjectViewEntity.createdOn,
  modifiedOn: mockProjectViewEntity.modifiedOn,
  createdBy: mockProjectViewEntity.createdBy,
  modifiedBy: mockProjectViewEntity.modifiedBy,
  isLatestVersion: mockProjectViewEntity.isLatestVersion,
}

export const mockProjectViewData: MockEntityData<EntityView> = {
  id: MOCK_PROJECT_VIEW_ENTITY_ID,
  name: MOCK_PROJECT_VIEW_NAME,
  entity: mockProjectViewEntity,
  entityHeader: mockProjectViewEntityHeader,
}
