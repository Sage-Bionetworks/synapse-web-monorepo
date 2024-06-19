import { rest } from 'msw'

export function getResetTwoFactorAuthHandlers(backendOrigin: string) {
  return [
    rest.post(`${backendOrigin}/auth/v1/2fa/reset`, async (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(''))
    }),
    rest.post(`${backendOrigin}/auth/v1/2fa/disable`, async (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(''))
    }),
  ]
}
