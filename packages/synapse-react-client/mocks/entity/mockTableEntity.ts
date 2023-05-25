import { EntityHeader, TableEntity } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from '../user/mock_user_profile'
import mockProject from './mockProject'
import { MockEntityData } from './MockEntityData'

export const MOCK_TABLE_ENTITY_ID = `syn40000`
export const MOCK_TABLE_ENTITY_NAME = 'my table name'

const parentId = mockProject.id

export const mockTableEntity: TableEntity = {
  id: MOCK_TABLE_ENTITY_ID,
  versionNumber: 1,
  versionLabel: 'in progress',
  versionComment: 'in progress',
  parentId: parentId,
  name: MOCK_TABLE_ENTITY_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
  createdBy: MOCK_USER_ID.toString(),
  createdOn: '2022-02-03T12:44:35.457Z',
  modifiedOn: '2022-05-14T17:10:36.915Z',
  modifiedBy: MOCK_USER_ID_2.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  columnIds: [],
  isSearchEnabled: true,
  isLatestVersion: true,
}

const mockTableEntityHeader: EntityHeader = {
  name: mockTableEntity.name,
  id: MOCK_TABLE_ENTITY_ID,
  type: 'org.sagebionetworks.repo.model.table.TableEntity',
  versionNumber: mockTableEntity.versionNumber,
  versionLabel: mockTableEntity.versionLabel,
  benefactorId: parentId,
  createdOn: mockTableEntity.createdOn,
  modifiedOn: mockTableEntity.modifiedOn,
  createdBy: mockTableEntity.createdBy,
  modifiedBy: mockTableEntity.modifiedBy,
  isLatestVersion: mockTableEntity.isLatestVersion,
}

const mockTableEntityData: MockEntityData<TableEntity> = {
  id: MOCK_TABLE_ENTITY_ID,
  name: MOCK_TABLE_ENTITY_NAME,
  entity: mockTableEntity,
  entityHeader: mockTableEntityHeader,
}

export default mockTableEntityData
