import { EntityType } from '@sage-bionetworks/synapse-client'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { times } from 'lodash-es'
import {
  generateBaseEntity,
  generateProject,
} from '../faker/generateFakeEntity'
import { MockEntityData } from './MockEntityData'
import { aclCustomizedMockFileEntities } from './mockFileEntityACLVariants'
import mockProjectEntityData from './mockProject'
import mockProject, { mockProjectIds } from './mockProject'

const generatedFileEntityData: MockEntityData<FileEntity>[] = times(50).map(i =>
  generateBaseEntity({
    id: 30000 + i + 1,
    type: EntityType.file,
    entity: {
      parentId: mockProject.id,
    },
  }),
)

const generatedProjectsEntityData = mockProjectIds.map(id => {
  if (`syn${id}` === mockProjectEntityData.id) {
    return mockProjectEntityData
  }
  return generateProject(undefined, id)
})

export const mockGeneratedEntityData: MockEntityData[] = [
  ...generatedProjectsEntityData,
  ...generatedFileEntityData,
  ...aclCustomizedMockFileEntities,
]
