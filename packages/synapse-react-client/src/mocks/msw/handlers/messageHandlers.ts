import { REPO } from '@/utils/APIConstants'
import { MessageToUser } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'

export function getMessageHandlers(backendOrigin: string) {
  return [
    http.post<never, MessageToUser>(
      `${backendOrigin}${REPO}/message`,
      async ({ request }) => {
        const requestBody: MessageToUser = await request.json()

        return HttpResponse.json(requestBody, { status: 201 })
      },
    ),
  ]
}
