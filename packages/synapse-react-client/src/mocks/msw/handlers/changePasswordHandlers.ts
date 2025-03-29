import { CHANGE_PASSWORD } from '@/utils/APIConstants'
import {
  ChangePasswordInterface,
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'

export function getSuccessfulChangePasswordHandler(backendOrigin: string) {
  return rest.post(backendOrigin + CHANGE_PASSWORD, (req, res, ctx) => {
    return res(ctx.status(204))
  })
}

export function getBadRequestChangePasswordHandler(
  backendOrigin: string,
  message: string,
) {
  return rest.post(backendOrigin + CHANGE_PASSWORD, (req, res, ctx) => {
    return res(
      ctx.status(401),
      ctx.json({
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: message,
      }),
    )
  })
}

export function getRequires2FAChangePasswordHandler(
  backendOrigin: string,
  userId: number,
  twoFaToken: string,
) {
  return rest.post(backendOrigin + CHANGE_PASSWORD, async (req, res, ctx) => {
    const request = await req.json<ChangePasswordInterface>()
    if ('twoFaToken' in request) {
      // If a 2FA token is provided, accept the request.
      return res(ctx.status(204))
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

    return res(ctx.status(401), ctx.json(response))
  })
}
