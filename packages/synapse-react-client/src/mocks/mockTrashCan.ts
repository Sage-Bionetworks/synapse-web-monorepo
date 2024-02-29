import {
  EntityType,
  PaginatedResults,
  TrashedEntity,
} from '@sage-bionetworks/synapse-types'
import mockFileEntityData from './entity/mockFileEntity'
import { MOCK_USER_ID } from './user/mock_user_profile'
import mockDatasetData from './entity/mockDataset'

export const trashCanPages: PaginatedResults<TrashedEntity>[] = [
  {
    totalNumberOfResults: 2,
    results: [
      {
        entityId: mockFileEntityData.id,
        entityName: mockFileEntityData.name,
        entityType: EntityType.FILE,
        deletedByPrincipalId: MOCK_USER_ID.toString(),
        deletedOn: '2020-01-01T00:00:00.000Z',
        originalParentId: mockFileEntityData.entity.parentId!,
      },
    ],
  },
  {
    totalNumberOfResults: 2,
    results: [
      {
        entityId: mockDatasetData.id,
        entityName: mockDatasetData.name,
        entityType: EntityType.FILE,
        deletedByPrincipalId: MOCK_USER_ID.toString(),
        deletedOn: '2020-01-01T00:00:00.000Z',
        originalParentId: mockDatasetData.entity.parentId!,
      },
    ],
  },
]
