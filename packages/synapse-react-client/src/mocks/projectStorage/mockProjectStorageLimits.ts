import { ProjectStorageUsage } from '@sage-bionetworks/synapse-types'
import { SYNAPSE_STORAGE_LOCATION_ID } from '../../synapse-client'

export const OVER_LIMIT_PROJECT_ID = 'syn54321'
export const UNDER_LIMIT_PROJECT_ID = 'syn12345'

export const mockProjectStorageUsageOverLimit: ProjectStorageUsage = {
  projectId: OVER_LIMIT_PROJECT_ID,
  locations: [
    {
      storageLocationId: `${SYNAPSE_STORAGE_LOCATION_ID}`,
      sumFileBytes: 1200000000, // 1.2 GB
      maxAllowedFileBytes: 1073741824, // 1 GB limit
      isOverLimit: true, // Over the limit
    },
    {
      storageLocationId: 'location-2',
      sumFileBytes: 100000000,
      maxAllowedFileBytes: 1073741824,
      isOverLimit: false,
    },
  ],
}

export const mockProjectStorageUsageUnderLimit: ProjectStorageUsage = {
  projectId: UNDER_LIMIT_PROJECT_ID,
  locations: [
    {
      storageLocationId: `${SYNAPSE_STORAGE_LOCATION_ID}`,
      sumFileBytes: 500000000,
      maxAllowedFileBytes: 1073741824,
      isOverLimit: false, // Under the limit
    },
    {
      storageLocationId: 'location-2',
      sumFileBytes: 1000,
      maxAllowedFileBytes: 1073741824,
      isOverLimit: false,
    },
  ],
}
