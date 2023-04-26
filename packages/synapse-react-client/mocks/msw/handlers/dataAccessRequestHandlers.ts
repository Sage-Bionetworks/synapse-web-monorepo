import { Renewal, Request } from '../../../src/lib/utils/synapseTypes'
import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '../../../src/lib/utils/APIConstants'
import { MOCK_DATA_ACCESS_REQUEST } from '../../dataaccess/MockDataAccessRequest'

export function getDataAccessRequestHandlers(
  backendOrigin: string,
  request: Request | Renewal = MOCK_DATA_ACCESS_REQUEST,
) {
  return [
    rest.get(
      `${backendOrigin}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
        ':id',
      )}`,
      async (req, res, ctx) => {
        const response: Request | Renewal = request
        return res(ctx.status(200), ctx.json(response))
      },
    ),
    rest.post(
      `${backendOrigin}${DATA_ACCESS_REQUEST}`,
      async (req, res, ctx) => {
        const resp = await req.json()
        return res(ctx.status(201), ctx.json(resp))
      },
    ),
    rest.post(
      `${backendOrigin}${DATA_ACCESS_REQUEST_SUBMISSION(':id')}`,
      async (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({}))
      },
    ),
  ]
}
