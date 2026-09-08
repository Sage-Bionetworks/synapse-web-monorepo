import { http, HttpResponse } from 'msw'

export function getResetTwoFactorAuthHandlers(backendOrigin: string) {
  return [
    http.post(`${backendOrigin}/auth/v1/2fa/reset`, () => {
      return HttpResponse.json('', { status: 201 })
    }),
    http.post(`${backendOrigin}/auth/v1/2fa/disable`, () => {
      return HttpResponse.json('', { status: 200 })
    }),
  ]
}

export function getResetTwoFactorAuthBadRequestHandler(
  backendOrigin: string,
  message: string,
) {
  return http.post(`${backendOrigin}/auth/v1/2fa/reset`, () => {
    return HttpResponse.json(
      {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: message,
      },
      { status: 400 },
    )
  })
}
