import mockDatasetData from './mockDataset'
import mockDatasetCollectionData from './mockDatasetCollection'
import { MockEntityData } from './MockEntityData'
import mockTableEntityData from './mockTableEntity'
import { mockFileViewData } from './mockFileView'
import { mockProjectViewData } from './mockProjectView'
import mockReleaseCardsTableData from './mockReleaseCardsTable'
import { FileEntity, Project } from '@sage-bionetworks/synapse-types'
import { mockGeneratedEntityData } from './mockGeneratedEntityData'
import mockProjectEntityData from './mockProject'
import mockFileEntityData from './mockFileEntity'
import mockRootEntityData from './mockRootEntity'
import { aclCustomizedMockFileEntities } from './mockFileEntityACLVariants'

const mockEntities: MockEntityData[] = [
  mockRootEntityData,
  mockFileEntityData,
  mockProjectEntityData,
  mockDatasetData,
  mockDatasetCollectionData,
  mockTableEntityData,
  mockFileViewData,
  mockProjectViewData,
  mockReleaseCardsTableData,
  ...aclCustomizedMockFileEntities,
  ...mockGeneratedEntityData,
]

export const mockFileEntities = mockEntities.filter(
  (data): data is MockEntityData<FileEntity> =>
    data.entity.concreteType === 'org.sagebionetworks.repo.model.FileEntity',
)

export const mockProjectsEntityData: MockEntityData<Project>[] =
  mockEntities.filter(
    (data): data is MockEntityData<Project> =>
      data.entity.concreteType === 'org.sagebionetworks.repo.model.Project',
  )

export const mockProjects: Project[] = mockProjectsEntityData.map(
  projectData => projectData.entity,
)

export default mockEntities
