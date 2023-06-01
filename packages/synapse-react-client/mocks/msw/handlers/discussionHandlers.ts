import { rest } from 'msw'
import { FORUM, THREAD } from '../../../src/utils/APIConstants'
import { Forum } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import {
  mockDiscussionThreadBundles,
  mockForums,
} from '../../discussion/mock_discussion'

export function getDiscussionHandlers(backendOrigin: string) {
  return [
    rest.get(`${backendOrigin}${FORUM}/:id`, async (req, res, ctx) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        reason: `MSW could not find a mock forum object with ID ${req.params.id}`,
      }

      const match = mockForums.find(f => f.id === req.params.id)
      if (match) {
        status = 200
        resp = match
      }

      return res(ctx.status(status), ctx.json(resp))
    }),

    rest.get(`${backendOrigin}${THREAD}/:id`, async (req, res, ctx) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        reason: `MSW could not find a mock discussion thread bundle object with ID ${req.params.id}`,
      }
      if (req.params.id === 'messageUrl') {
        // This is a different endpoint
        resp = {
          reason: 'GET /thread/messageUrl is not yet implemented',
        }
      }

      const match = mockDiscussionThreadBundles.find(
        dtb => dtb.id === req.params.id,
      )
      if (match) {
        status = 200
        resp = match
      }

      return res(ctx.status(status), ctx.json(resp))
    }),
  ]
}
