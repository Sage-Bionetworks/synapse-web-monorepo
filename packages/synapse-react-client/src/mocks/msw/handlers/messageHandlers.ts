import { rest } from 'msw'
import { REPO } from '../../../utils/APIConstants'
import { MessageToUser } from '@sage-bionetworks/synapse-types'

export function getMessageHandlers(backendOrigin: string) {
  return [
    rest.post(`${backendOrigin}${REPO}/message`, async (req, res, ctx) => {
      const request: MessageToUser = await req.json()

      return res(ctx.status(201), ctx.json(request))
    }),
  ]
}
