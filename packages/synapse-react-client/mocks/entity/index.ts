import mockDatasetData from './mockDataset'
import mockDatasetCollectionData from './mockDatasetCollection'
import { MockEntityData } from './MockEntityData'
import mockFileEntityData from './mockFileEntity'
import { mockProjectsEntityData } from './mockProject'
import mockTableEntityData from './mockTableEntity'

const mockEntities: MockEntityData[] = [
  mockFileEntityData,
  ...mockProjectsEntityData,
  mockDatasetData,
  mockDatasetCollectionData,
  mockTableEntityData,
]

export default mockEntities
