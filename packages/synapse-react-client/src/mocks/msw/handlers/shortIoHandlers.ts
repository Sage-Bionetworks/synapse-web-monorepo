import { mockShortIoResponse } from '@/mocks/mockShortIo'
import { http, HttpResponse } from 'msw'

export const getShortIoHandlers = () => [
  http.post<never, { originalURL: string; domain: string }>(
    'https://api.short.io/links/public',
    async ({ request }) => {
      const body = await request.json()
      return HttpResponse.json(
        mockShortIoResponse(body.originalURL, body.domain),
        { status: 200 },
      )
    },
  ),
]
