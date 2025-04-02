import { mockShortIoResponse } from '@/mocks/mockShortIo'
import { rest } from 'msw'

export const getShortIoHandlers = () => [
  rest.post('https://api.short.io/links/public', async (req, res, ctx) => {
    const body = await req.json()
    return res(
      ctx.status(200),
      ctx.json(mockShortIoResponse(body.originalURL, body.domain)),
    )
  }),
]
