import { EntityHeader, TableEntity } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import { MockEntityData } from './MockEntityData'
import mockProject from './mockProject'

export const MOCK_RELEASE_CARDS_TABLE_ID = 'syn40001'
const MOCK_RELEASE_CARDS_TABLE_NAME = 'releases table'
const parentId = mockProject.id

export const mockReleaseCardsTable = {
  name: MOCK_RELEASE_CARDS_TABLE_NAME,
  description: 'drives Release Cards',
  id: MOCK_RELEASE_CARDS_TABLE_ID,
  etag: 'b3f4fdfc-bb80-4fc7-8b8c-f81c7aba4a76',
  createdOn: '2024-02-27T22:39:42.728Z',
  modifiedOn: '2024-03-02T00:27:31.649Z',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  parentId: parentId,
  concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
  versionNumber: 1,
  versionLabel: 'in progress',
  versionComment: 'in progress',
  isLatestVersion: true,
  columnIds: [
    '207864',
    '207865',
    '207866',
    '207920',
    '207921',
    '207868',
    '208002',
    '208001',
  ],
  isSearchEnabled: true,
} satisfies TableEntity

export const mockReleaseCardsTableHeader: EntityHeader = {
  name: MOCK_RELEASE_CARDS_TABLE_NAME,
  id: MOCK_RELEASE_CARDS_TABLE_ID,
  type: 'org.sagebionetworks.repo.model.table.TableEntity',
  versionNumber: mockReleaseCardsTable.versionNumber,
  versionLabel: mockReleaseCardsTable.versionLabel,
  isLatestVersion: mockReleaseCardsTable.isLatestVersion,
  benefactorId: 1000,
  createdOn: mockReleaseCardsTable.createdOn,
  modifiedOn: mockReleaseCardsTable.createdBy,
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
}

const mockReleaseCardsTableData: MockEntityData<TableEntity> = {
  id: MOCK_RELEASE_CARDS_TABLE_ID,
  name: MOCK_RELEASE_CARDS_TABLE_NAME,
  entity: mockReleaseCardsTable,
  entityHeader: mockReleaseCardsTableHeader,
}

export default mockReleaseCardsTableData
