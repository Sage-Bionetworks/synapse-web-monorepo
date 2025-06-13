import { UserProfileList } from '@/synapse-client/SynapseClient'
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
} from '@/utils/APIConstants'
import { IdList } from '@sage-bionetworks/synapse-client'
import {
  TwoFactorAuthStatus,
  TYPE_FILTER,
  UserBundle,
  UserGroupHeaderResponsePage,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { mockPaginatedEntityHeaders } from '../../entity/mockEntity'
import {
  mockUserBundle,
  mockUserData,
  mockUserProfileData,
} from '../../user/mock_user_profile'
import { mockUserGroupData } from '../../usergroup/mockUserGroup'
import { SynapseApiResponse } from '../handlers'

export const getUserProfileHandlers = (backendOrigin: string) => [
  /**
   * Get User Profile by ID
   */
  http.get(`${backendOrigin}${USER_PROFILE_ID(':id')}`, ({ params }) => {
    let status = 404
    let response: SynapseApiResponse<UserProfile> = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `Mock Service worker could not find a user profile with ID ${params.id}`,
    }
    const match = mockUserData.find(
      userData => userData.id.toString() === params.id,
    )
    if (match && match.userProfile) {
      response = match.userProfile
      status = 200
    }
    return HttpResponse.json(response, { status })
  }),

  /**
   * Get the caller's user profile
   */
  http.get(`${backendOrigin}${USER_PROFILE}`, () => {
    // default return a mock UserProfile.
    const response: UserProfile = mockUserProfileData
    const status = 200
    return HttpResponse.json(response, { status })
  }),

  /**
   * Get the caller's user bundle
   */
  http.get(`${backendOrigin}${USER_BUNDLE}`, () => {
    const result: UserBundle = mockUserBundle
    return HttpResponse.json(result, { status: 200 })
  }),

  /**
   * Get a user bundle by ID
   */
  http.get(`${backendOrigin}${USER_ID_BUNDLE(':id')}`, ({ params }) => {
    let status = 404
    let response: SynapseApiResponse<UserBundle> = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `Mock Service worker could not find a user bundle with ID ${params.id}`,
    }
    const match = mockUserData.find(
      userData => userData.id.toString() === params.id,
    )
    if (match && match.userBundle) {
      response = match.userBundle
      status = 200
    }
    return HttpResponse.json(response, { status })
  }),

  /**
   * Get the caller's favorites
   */
  http.get(`${backendOrigin}${FAVORITES}`, () => {
    return HttpResponse.json(mockPaginatedEntityHeaders, { status: 200 })
  }),

  /**
   * Get a batch of user group headers
   */
  http.get(`${backendOrigin}${USER_GROUP_HEADERS_BATCH}`, ({ request }) => {
    const ids = new URL(request.url).searchParams.get('ids')!.split(',')
    const responsePage: UserGroupHeaderResponsePage = {
      children: mockUserGroupData
        .filter(userData => ids.includes(userData.id.toString()))
        .map(userData => userData.userGroupHeader),
    }
    return HttpResponse.json(responsePage, { status: 200 })
  }),

  /**
   * Get a batch of user profiles
   */
  http.post<never, IdList>(
    `${backendOrigin}${USER_PROFILE}`,
    async ({ request }) => {
      const requestedList = ((await request.json()).list ?? []).map(String)
      const responsePage: UserProfileList = {
        list: mockUserData
          .filter(userData => requestedList.includes(userData.id.toString()))
          .map(userData => userData.userProfile)
          .filter(
            (userProfile): userProfile is UserProfile => userProfile != null,
          ),
      }
      return HttpResponse.json(responsePage, { status: 200 })
    },
  ),

  /**
   * Get userGroupHeaders by prefix
   */
  http.get(`${backendOrigin}${USER_GROUP_HEADERS}`, ({ request }) => {
    const prefix = (
      new URL(request.url).searchParams.get('prefix') ?? ''
    ).toLowerCase()
    const typeFilter = new URL(request.url).searchParams.get(
      'typeFilter',
    ) as TYPE_FILTER
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
    return HttpResponse.json(responsePage, { status: 200 })
  }),

  /**
   * Return a 404 when fetching the profile image
   */
  http.get(`${backendOrigin}${PROFILE_IMAGE_PREVIEW(':userId')}`, () => {
    return HttpResponse.json(
      { reason: 'user has no profile image' },
      { status: 404 },
    )
  }),

  http.get(`${backendOrigin}${NOTIFICATION_EMAIL}`, () => {
    return HttpResponse.json(
      { email: mockUserBundle.userProfile?.email },
      { status: 200 },
    )
  }),

  http.get(`${backendOrigin}/auth/v1/2fa`, () => {
    const response: TwoFactorAuthStatus = {
      status: 'ENABLED',
    }
    return HttpResponse.json(response, { status: 200 })
  }),
]

export function getCurrentUserCertifiedValidatedHandler(
  backendOrigin: string,
  isCertified: boolean,
  isValidated: boolean,
) {
  return http.get(`${backendOrigin}${USER_BUNDLE}`, () => {
    const status = 200
    const response: UserBundle = {
      ...mockUserBundle,
      isCertified: isCertified,
      isVerified: isValidated,
    }

    return HttpResponse.json(response, { status })
  })
}
