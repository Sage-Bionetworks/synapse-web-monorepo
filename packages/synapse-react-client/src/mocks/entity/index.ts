import mockDatasetData from './mockDataset'
import mockDatasetCollectionData from './mockDatasetCollection'
import { MockEntityData } from './MockEntityData'
import mockFileEntityData from './mockFileEntity'
import { mockProjectsEntityData } from './mockProject'
import mockTableEntityData from './mockTableEntity'
import { mockFileViewData } from './mockFileView'
import { mockProjectViewData } from './mockProjectView'

const mockEntities: MockEntityData[] = [
  mockFileEntityData,
  ...mockProjectsEntityData,
  mockDatasetData,
  mockDatasetCollectionData,
  mockTableEntityData,
  mockFileViewData,
  mockProjectViewData,
]

export default mockEntities
