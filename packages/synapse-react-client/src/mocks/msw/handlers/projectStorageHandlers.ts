import {
  mockProjectStorageUsageOverLimit,
  mockProjectStorageUsageUnderLimit,
  OVER_LIMIT_PROJECT_ID,
  UNDER_LIMIT_PROJECT_ID,
} from '@/mocks/projectStorage/mockProjectStorageLimits'
import { PROJECT_STORAGE_USAGE } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { http, HttpResponse } from 'msw'

export const getProjectStorageHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) => [
  http.get(
    `${backendOrigin}${PROJECT_STORAGE_USAGE(OVER_LIMIT_PROJECT_ID)}`,
    () => {
      return HttpResponse.json(mockProjectStorageUsageOverLimit, {
        status: 201,
      })
    },
  ),
  http.get(
    `${backendOrigin}${PROJECT_STORAGE_USAGE(UNDER_LIMIT_PROJECT_ID)}`,
    () => {
      return HttpResponse.json(mockProjectStorageUsageUnderLimit, {
        status: 201,
      })
    },
  ),
]
