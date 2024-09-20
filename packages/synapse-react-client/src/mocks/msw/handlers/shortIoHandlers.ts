import { rest } from 'msw'
import { mockShortIoResponse } from '../../../mocks/mockShortIo'

export const getShortIoHandlers = () => [
  rest.post('https://api.short.io/links/public', async (req, res, ctx) => {
    const body = await req.json()
    return res(
      ctx.status(200),
      ctx.json(mockShortIoResponse(body.originalURL, body.domain)),
    )
  }),
]
