import { DatasetCollection, EntityPath } from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from '../user/mock_user_profile'
import mockDatasetData from './mockDataset'
import { MockEntityData } from './MockEntityData'
import mockProjectEntityData from './mockProject'

const MOCK_DATASET_COLLECTION_ENTITY_ID = `syn70000`
const MOCK_DATASET_COLLECTION_NAME = 'A Mocked Dataset Collection'

export const mockDatasetCollectionEntity: DatasetCollection = {
  id: MOCK_DATASET_COLLECTION_ENTITY_ID,
  parentId: mockProjectEntityData.id,
  name: MOCK_DATASET_COLLECTION_NAME,
  concreteType: 'org.sagebionetworks.repo.model.table.DatasetCollection',
  createdBy: MOCK_USER_ID.toString(),
  modifiedBy: MOCK_USER_ID.toString(),
  etag: '00000000-0000-0000-0000-000000000000',
  items: [
    {
      entityId: mockDatasetData.id,
      versionNumber: 1,
    },
  ],
  columnIds: [],
  isSearchEnabled: false,
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
      name: MOCK_DATASET_COLLECTION_NAME,
      id: MOCK_DATASET_COLLECTION_ENTITY_ID,
      type: 'org.sagebionetworks.repo.model.FileEntity',
    },
  ],
}

const mockDatasetCollectionData: MockEntityData<DatasetCollection> = {
  id: MOCK_DATASET_COLLECTION_ENTITY_ID,
  name: MOCK_DATASET_COLLECTION_NAME,
  entity: mockDatasetCollectionEntity,
  path: path,
}

export default mockDatasetCollectionData
