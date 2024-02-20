import { rest } from 'msw'
import {
  FAVORITES,
  NOTIFICATION_EMAIL,
  PROFILE_IMAGE_PREVIEW,
  USER_BUNDLE,
  USER_GROUP_HEADERS,
  USER_GROUP_HEADERS_BATCH,
  USER_ID_BUNDLE,
  USER_PROFILE,
  USER_PROFILE_ID,
} from '../../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import {
  TwoFactorAuthStatus,
  TYPE_FILTER,
  UserBundle,
  UserGroupHeaderResponsePage,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { mockPaginatedEntityHeaders } from '../../entity/mockEntity'
import {
  mockUserBundle,
  mockUserData,
  mockUserProfileData,
} from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'
import { UserProfileList } from '../../../synapse-client/SynapseClient'
import { mockUserGroupData } from '../../usergroup/mockUserGroup'

export const getUserProfileHandlers = (backendOrigin: string) => [
  /**
   * Get User Profile by ID
   */
  rest.get(
    `${backendOrigin}${USER_PROFILE_ID(':id')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserProfile> = {
        reason: `Mock Service worker could not find a user profile with ID ${req.params.id}`,
      }
      const match = mockUserData.find(
        userData => userData.id.toString() === req.params.id,
      )
      if (match && match.userProfile) {
        response = match.userProfile
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  /**
   * Get the caller's user profile
   */
  rest.get(`${backendOrigin}${USER_PROFILE}`, async (req, res, ctx) => {
    // default return a mock UserProfile.
    const response: UserProfile = mockUserProfileData
    const status = 200
    return res(ctx.status(status), ctx.json(response))
  }),

  /**
   * Get the caller's user bundle
   */
  rest.get(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
    async (req, res, ctx) => {
      const result: UserBundle = mockUserBundle
      return res(ctx.status(200), ctx.json(result))
    },
  ),

  /**
   * Get a user bundle by ID
   */
  rest.get(
    `${backendOrigin}${USER_ID_BUNDLE(':id')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<UserBundle> = {
        reason: `Mock Service worker could not find a user bundle with ID ${req.params.id}`,
      }
      const match = mockUserData.find(
        userData => userData.id.toString() === req.params.id,
      )
      if (match && match.userBundle) {
        response = match.userBundle
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),

  /**
   * Get the caller's favorites
   */
  rest.get(`${backendOrigin}${FAVORITES}`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockPaginatedEntityHeaders))
  }),

  /**
   * Get a batch of user group headers
   */
  rest.get(
    `${backendOrigin}${USER_GROUP_HEADERS_BATCH}`,
    async (req, res, ctx) => {
      const ids = req.url.searchParams.get('ids')!.split(',')
      const responsePage: UserGroupHeaderResponsePage = {
        children: mockUserGroupData
          .filter(userData => ids.includes(userData.id.toString()))
          .map(userData => userData.userGroupHeader),
      }
      return res(ctx.status(200), ctx.json(responsePage))
    },
  ),

  /**
   * Get a batch of user profiles
   */
  rest.post(`${backendOrigin}${USER_PROFILE}`, async (req, res, ctx) => {
    const requestedList = (await req.json()).list as string[]
    const responsePage: UserProfileList = {
      list: mockUserData
        .filter(userData => requestedList.includes(userData.id.toString()))
        .map(userData => userData.userProfile)
        .filter(
          (userProfile): userProfile is UserProfile => userProfile != null,
        ),
    }
    return res(ctx.status(200), ctx.json(responsePage))
  }),

  /**
   * Get userGroupHeaders by prefix
   */
  rest.get(`${backendOrigin}${USER_GROUP_HEADERS}`, async (req, res, ctx) => {
    const prefix = (req.url.searchParams.get('prefix') ?? '').toLowerCase()
    const typeFilter = req.url.searchParams.get('typeFilter') as TYPE_FILTER
    const responsePage: UserGroupHeaderResponsePage = {
      children: mockUserGroupData
        .filter(userData => {
          if (!typeFilter || typeFilter === TYPE_FILTER.ALL) {
            return true
          } else if (typeFilter === TYPE_FILTER.USERS_ONLY) {
            return userData.userGroupHeader.isIndividual
          } else {
            return !userData.userGroupHeader.isIndividual
          }
        })
        .filter(
          userData =>
            userData.userGroupHeader.userName
              .toLowerCase()
              .startsWith(prefix) ||
            (userData.userGroupHeader.firstName || '')
              .toLowerCase()
              .startsWith(prefix) ||
            (userData.userGroupHeader.displayName || '')
              .toLowerCase()
              .startsWith(prefix) ||
            (userData.userGroupHeader.lastName || '')
              .toLowerCase()
              .startsWith(prefix),
        )
        .map(userData => userData.userGroupHeader),
    }
    return res(ctx.status(200), ctx.json(responsePage))
  }),

  /**
   * Return a 404 when fetching the profile image
   */
  rest.get(
    `${backendOrigin}${PROFILE_IMAGE_PREVIEW(':userId')}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ reason: 'user has no profile image' }),
      )
    },
  ),

  rest.get(`${backendOrigin}${NOTIFICATION_EMAIL}`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ email: mockUserBundle.userProfile?.email }),
    )
  }),

  rest.get(`${backendOrigin}/auth/v1/2fa`, async (req, res, ctx) => {
    const response: TwoFactorAuthStatus = {
      status: 'ENABLED',
    }
    return res(ctx.status(200), ctx.json(response))
  }),
]

export function getCurrentUserCertifiedValidatedHandler(
  backendOrigin: string,
  isCertified: boolean,
  isValidated: boolean,
) {
  return rest.get(`${backendOrigin}${USER_BUNDLE}`, async (req, res, ctx) => {
    const status = 200
    const response: UserBundle = {
      ...mockUserBundle,
      isCertified: isCertified,
      isVerified: isValidated,
    }
    return res(ctx.status(status), ctx.json(response))
  })
}
