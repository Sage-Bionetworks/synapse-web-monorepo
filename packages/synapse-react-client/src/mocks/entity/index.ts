import mockDatasetData from './mockDataset'
import mockDatasetCollectionData from './mockDatasetCollection'
import { MockEntityData } from './MockEntityData'
import { mockFileEntities } from './mockFileEntity'
import { mockProjectsEntityData } from './mockProject'
import mockTableEntityData from './mockTableEntity'
import { mockFileViewData } from './mockFileView'
import { mockProjectViewData } from './mockProjectView'
import mockReleaseCardsTableData from './mockReleaseCardsTable'

const mockEntities: MockEntityData[] = [
  ...mockFileEntities,
  ...mockProjectsEntityData,
  mockDatasetData,
  mockDatasetCollectionData,
  mockTableEntityData,
  mockFileViewData,
  mockProjectViewData,
  mockReleaseCardsTableData,
]

export default mockEntities
