import {
  mockProjectStorageUsageOverLimit,
  mockProjectStorageUsageUnderLimit,
  OVER_LIMIT_PROJECT_ID,
  UNDER_LIMIT_PROJECT_ID,
} from '@/mocks/projectStorage/mockProjectStorageLimits'
import { PROJECT_STORAGE_USAGE } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { rest } from 'msw'

export const getProjectStorageHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) => [
  rest.get(
    `${backendOrigin}${PROJECT_STORAGE_USAGE(OVER_LIMIT_PROJECT_ID)}`,
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockProjectStorageUsageOverLimit))
    },
  ),
  rest.get(
    `${backendOrigin}${PROJECT_STORAGE_USAGE(UNDER_LIMIT_PROJECT_ID)}`,
    async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(mockProjectStorageUsageUnderLimit))
    },
  ),
]
