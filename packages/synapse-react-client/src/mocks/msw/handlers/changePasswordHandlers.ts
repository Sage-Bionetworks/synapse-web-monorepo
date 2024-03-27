import { rest } from 'msw'
import { CHANGE_PASSWORD } from '../../../utils/APIConstants'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'

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
  return rest.post(backendOrigin + CHANGE_PASSWORD, (req, res, ctx) => {
    const response: TwoFactorAuthErrorResponse = {
      concreteType:
        'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
      reason: 'Two factor authentication required.',
      errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
      userId: userId,
      twoFaToken: twoFaToken,
    }

    return res.once(ctx.status(401), ctx.json(response))
  })
}
