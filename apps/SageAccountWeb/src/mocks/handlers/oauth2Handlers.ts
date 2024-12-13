import {
  ErrorResponseCode,
  LoginResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'

export const oauth2SuccessfulSignInHandler = http.post(
  `${getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )}/auth/v1/oauth2/session2`,
  () => {
    const loginResponse: LoginResponse = {
      accessToken: 'foobar',
      acceptsTermsOfUse: true,
      authenticationReceipt: 'fakeAuthenticationReceipt',
    }
    return HttpResponse.json(loginResponse, { status: 201 })
  },
)

export const oauth2PromptFor2FAHandler = http.post(
  `${getEndpoint(
    BackendDestinationEnum.REPO_ENDPOINT,
  )}/auth/v1/oauth2/session2`,
  () => {
    const loginResponse: TwoFactorAuthErrorResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      userId: 123,
      twoFaToken: 'fakeTwoFaToken',
      reason: 'Two-factor auth is required in this test!',
      errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
    }
    return HttpResponse.json(loginResponse, { status: 201 })
  },
)
