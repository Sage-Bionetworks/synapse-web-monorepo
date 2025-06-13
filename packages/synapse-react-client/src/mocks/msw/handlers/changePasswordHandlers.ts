import { CHANGE_PASSWORD } from '@/utils/APIConstants'
import {
  ChangePasswordInterface,
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'

export function getSuccessfulChangePasswordHandler(backendOrigin: string) {
  return http.post(backendOrigin + CHANGE_PASSWORD, () => {
    return new Response(null, { status: 204 })
  })
}

export function getBadRequestChangePasswordHandler(
  backendOrigin: string,
  message: string,
) {
  return http.post(backendOrigin + CHANGE_PASSWORD, () => {
    return HttpResponse.json(
      {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: message,
      },
      { status: 401 },
    )
  })
}

export function getRequires2FAChangePasswordHandler(
  backendOrigin: string,
  userId: number,
  twoFaToken: string,
) {
  return http.post<never, ChangePasswordInterface>(
    backendOrigin + CHANGE_PASSWORD,
    async ({ request }) => {
      const requestBody = await request.json()
      if ('twoFaToken' in requestBody) {
        // If a 2FA token is provided, accept the request.
        return new Response(null, { status: 204 })
      }

      // Otherwise, reject it with a 2FA challenge.
      const response: TwoFactorAuthErrorResponse = {
        concreteType:
          'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
        reason: 'Two factor authentication required.',
        errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
        userId: userId,
        twoFaToken: twoFaToken,
      }

      return HttpResponse.json(response, { status: 401 })
    },
  )
}
